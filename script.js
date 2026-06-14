/* ════════════════════════════════════════════
   FIREBASE SDK 초기화
   ════════════════════════════════════════════ */
const _firebaseConfig = {
  apiKey: "AIzaSyCF4c6017RNfmP5AoXgiVvNxvt9TDcpHss",
  authDomain: "portfolio2026uiux.firebaseapp.com",
  databaseURL: "https://portfolio2026uiux-default-rtdb.firebaseio.com",
  projectId: "portfolio2026uiux",
  storageBucket: "portfolio2026uiux.firebasestorage.app",
  messagingSenderId: "559541074110",
  appId: "1:559541074110:web:8eaba6bb445b6a8a9a46ef"
};
if (!firebase.apps.length) firebase.initializeApp(_firebaseConfig);
const _db = firebase.database();

/* ════════════════════════════════════════════
   STATE
   ════════════════════════════════════════════ */
let allData = {};   // key → item object
let KEYS    = [];   // ordered array of keys currently shown

/* ════════════════════════════════════════════
   CARD DOM
   ════════════════════════════════════════════ */
function createCardDOM(key) {
  const board = document.getElementById('work-board');
  if (!board || board.querySelector(`.work-item[data-key="${key}"]`)) return;
  const fig = document.createElement('figure');
  fig.className = 'work-item reveal';
  fig.dataset.key = key;
  fig.innerHTML = '<div class="work-thumb work-thumb--warm"><span></span></div><figcaption></figcaption>';
  fig.addEventListener('click', () => openModal(key));
  board.appendChild(fig);
  // observe for reveal animation
  revealObs.observe(fig);
}

function removeCardDOM(key) {
  const board = document.getElementById('work-board');
  if (!board) return;
  const el = board.querySelector(`.work-item[data-key="${key}"]`);
  if (el) el.remove();
}

function renderCard(key, item) {
  const fig = document.querySelector(`.work-item[data-key="${key}"]`);
  if (!fig || !item) return;

  const thumb = fig.querySelector('.work-thumb');
  const cap   = fig.querySelector('figcaption');

  // color
  thumb.className = 'work-thumb ' + (item.color || 'work-thumb--warm');

  // clear old media
  const oldImg   = thumb.querySelector('img');
  const oldBadge = thumb.querySelector('.pdf-badge');
  if (oldImg)   oldImg.remove();
  if (oldBadge) oldBadge.remove();

  const labelEl = thumb.querySelector('span');
  const images  = (item.files || []).filter(f => f.type && f.type.startsWith('image/'));
  const pdfs    = (item.files || []).filter(f => f.type === 'application/pdf');
  const mp4s    = (item.files || []).filter(f => f.type && f.type.startsWith('video/'));

  if (images.length > 0) {
    const img = document.createElement('img');
    img.src = images[0].data;
    img.alt = item.title || '';
    thumb.insertBefore(img, thumb.firstChild);
    if (labelEl) labelEl.textContent = '';
  } else if (mp4s.length > 0) {
    if (labelEl) labelEl.innerHTML = (item.label || '').replace(/\n/g, '<br>');
    const badge = document.createElement('span');
    badge.className = 'pdf-badge';
    badge.style.color = '#6fa0ff';
    badge.textContent = 'MP4';
    thumb.appendChild(badge);
  } else if (pdfs.length > 0) {
    if (labelEl) labelEl.innerHTML = (item.label || '').replace(/\n/g, '<br>');
    const badge = document.createElement('span');
    badge.className = 'pdf-badge';
    badge.textContent = 'PDF';
    thumb.appendChild(badge);
  } else {
    if (labelEl) labelEl.innerHTML = (item.label || '').replace(/\n/g, '<br>');
  }

  cap.textContent = item.caption || '';
}

function applyStaggeredPositions() {
  const board = document.getElementById('work-board');
  if (!board) return;
  const items    = [...board.querySelectorAll('.work-item')];
  const isMobile = window.innerWidth <= 760;
  items.forEach((el, i) => {
    if (isMobile) {
      el.style.gridColumn = '';
      el.style.gridRow    = '';
    } else {
      const rowIdx    = Math.floor(i / 3);
      const colIdx    = i % 3;
      const startCol  = (colIdx * 3) + (rowIdx % 4) + 1;
      const col       = Math.min(startCol, 10);
      el.style.gridColumn = col + '/span 3';
      el.style.gridRow    = (rowIdx + 1) + '';
    }
  });
}
window.addEventListener('resize', applyStaggeredPositions);

/* ════════════════════════════════════════════
   REALTIME SYNC  ← 핵심: admin에서 삭제하면 즉시 사이트에서 사라짐
   ════════════════════════════════════════════ */
function startRealtimeSync() {
  // 포트폴리오 전체 감시
  _db.ref('/portfolio').on('value', snapshot => {
    const remote = snapshot.val() || {};
    const remoteKeys = Object.keys(remote);

    // 1) 삭제된 항목 제거 (Firebase에 없는데 화면엔 있는 것)
    const toRemove = KEYS.filter(k => !remoteKeys.includes(k));
    toRemove.forEach(key => {
      removeCardDOM(key);
      delete allData[key];
    });
    KEYS = KEYS.filter(k => !toRemove.includes(k));

    // 2) 새로 추가/수정된 항목 처리
    remoteKeys.forEach(key => {
      allData[key] = remote[key];
      if (!KEYS.includes(key)) {
        KEYS.push(key);
        createCardDOM(key);
      }
      renderCard(key, remote[key]);
    });

    // 로딩 표시 제거
    const loadingEl = document.getElementById('work-loading');
    if (loadingEl) loadingEl.remove();

    applyStaggeredPositions();
  });

  // 순서 변경 감시
  _db.ref('/config/order').on('value', snapshot => {
    const savedOrder = snapshot.val();
    if (!Array.isArray(savedOrder) || savedOrder.length === 0) return;
    const board = document.getElementById('work-board');
    if (!board) return;

    const valid = savedOrder.filter(k => KEYS.includes(k));
    const extra = KEYS.filter(k => !valid.includes(k));
    KEYS.length = 0;
    KEYS.push(...valid, ...extra);

    KEYS.forEach(key => {
      const el = board.querySelector(`.work-item[data-key="${key}"]`);
      if (el) board.appendChild(el);
    });
    applyStaggeredPositions();
  });
}

/* ════════════════════════════════════════════
   MODAL
   ════════════════════════════════════════════ */
const overlay    = document.getElementById('modal-overlay');
const modalThumb = document.getElementById('modal-thumb');
const modalLabel = document.getElementById('modal-thumb-label');
const modalTag   = document.getElementById('modal-tag');
const modalTitle = document.getElementById('modal-title');
const modalDesc  = document.getElementById('modal-desc');
const modalMeta  = document.getElementById('modal-meta');
const modalFiles = document.getElementById('modal-files');
const modalClose = document.getElementById('modal-close');

function openModal(key) {
  const d = allData[key]; if (!d) return;

  modalThumb.className = 'modal__thumb ' + (d.color || '');
  const oldImg = modalThumb.querySelector('img');
  if (oldImg) oldImg.remove();

  const images = (d.files || []).filter(f => f.type && f.type.startsWith('image/'));
  if (images.length > 0) {
    const img = document.createElement('img');
    img.src = images[0].data; img.alt = d.title || '';
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(images, 0));
    modalThumb.insertBefore(img, modalThumb.firstChild);
    modalLabel.textContent = '';
  } else {
    modalLabel.innerHTML = (d.label || '').replace(/\n/g, '<br>');
  }

  modalTag.textContent   = d.tag   || '';
  modalTitle.textContent = d.title || '';
  modalDesc.textContent  = d.desc  || '';
  modalMeta.innerHTML = `
    <div class="modal__meta-item"><label>Type</label><span>${d.type||''}</span></div>
    <div class="modal__meta-item"><label>Role</label><span>${d.role||''}</span></div>
    <div class="modal__meta-item"><label>Year</label><span>${d.year||''}</span></div>
  `;

  modalFiles.innerHTML = '';
  if (d.files && d.files.length > 0) {
    const imgFiles = d.files.filter(f => f.type && f.type.startsWith('image/'));
    const pdfFiles = d.files.filter(f => f.type === 'application/pdf');
    const mp4Files = d.files.filter(f => f.type && f.type.startsWith('video/'));

    if (imgFiles.length > 0) {
      const grid = document.createElement('div');
      grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;margin-top:8px';
      imgFiles.forEach((f, i) => {
        const img = document.createElement('img');
        img.src = f.data; img.alt = f.name;
        img.style.cssText = 'width:100%;aspect-ratio:1;object-fit:cover;border:1px solid rgba(255,255,255,0.1);cursor:zoom-in;transition:opacity 0.2s';
        img.onmouseenter = () => img.style.opacity = '0.8';
        img.onmouseleave = () => img.style.opacity = '1';
        img.addEventListener('click', () => openLightbox(imgFiles, i));
        grid.appendChild(img);
      });
      modalFiles.appendChild(grid);
    }

    mp4Files.forEach(f => {
      const label = document.createElement('p');
      label.style.cssText = 'color:rgba(255,255,255,0.38);font-size:11px;letter-spacing:0.06em;text-transform:uppercase;margin-top:16px;margin-bottom:6px';
      label.textContent = f.name;
      const video = document.createElement('video');
      video.src = f.data; video.controls = true; video.preload = 'metadata';
      video.style.cssText = 'width:100%;border-radius:4px;border:1px solid rgba(255,255,255,0.14);background:#000;display:block;margin-top:4px;max-height:360px';
      modalFiles.appendChild(label);
      modalFiles.appendChild(video);
    });

    pdfFiles.forEach(f => {
      const a = document.createElement('a');
      a.href = f.data; a.download = f.name; a.target = '_blank';
      a.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);color:var(--muted);font-size:13px;text-decoration:none;transition:background 160ms ease';
      a.onmouseenter = () => a.style.background = 'rgba(255,255,255,0.1)';
      a.onmouseleave = () => a.style.background = 'rgba(255,255,255,0.06)';
      a.innerHTML = `<span style="color:#e87070;font-weight:700;font-size:11px">PDF</span> ${f.name}`;
      modalFiles.appendChild(a);
    });
  }

  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
  modalFiles.querySelectorAll('video').forEach(v => v.pause());
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ════════════════════════════════════════════
   LIGHTBOX
   ════════════════════════════════════════════ */
let lbImages = [];
let lbIndex  = 0;
const lb        = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbCounter = document.getElementById('lb-counter');

function openLightbox(imgs, idx) {
  lbImages = imgs; lbIndex = idx;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  showLbImage();
}
function closeLightbox() {
  lb.style.display = 'none';
  document.body.style.overflow = '';
}
function showLbImage() {
  lbImg.style.opacity = '0';
  setTimeout(() => { lbImg.src = lbImages[lbIndex].data; lbImg.style.opacity = '1'; }, 150);
  lbCounter.textContent = lbImages.length > 1 ? (lbIndex + 1) + ' / ' + lbImages.length : '';
  document.getElementById('lb-prev').style.display = lbImages.length > 1 ? '' : 'none';
  document.getElementById('lb-next').style.display = lbImages.length > 1 ? '' : 'none';
}
document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', () => { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; showLbImage(); });
document.getElementById('lb-next').addEventListener('click', () => { lbIndex = (lbIndex + 1) % lbImages.length; showLbImage(); });
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (lb.style.display !== 'flex') return;
  if (e.key === 'ArrowLeft')  { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; showLbImage(); }
  if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbImages.length; showLbImage(); }
  if (e.key === 'Escape')     closeLightbox();
});

/* ════════════════════════════════════════════
   REVEAL + NAV
   ════════════════════════════════════════════ */
const sections    = document.querySelectorAll('section[id]');
const navLinks    = document.querySelectorAll('.site-nav a');
const revealItems = document.querySelectorAll('.reveal');

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
}, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
revealItems.forEach(el => revealObs.observe(el));

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const id = e.target.getAttribute('id');
    navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + id));
  });
}, { threshold: 0.45 });
sections.forEach(s => sectionObs.observe(s));

/* ════════════════════════════════════════════
   ADMIN 버튼 표시 (Konami-style: 헤더 브랜드 5번 클릭)
   ════════════════════════════════════════════ */
let brandClickCount = 0;
const brandEl = document.querySelector('.site-brand');
if (brandEl) {
  brandEl.addEventListener('click', e => {
    e.preventDefault();
    brandClickCount++;
    if (brandClickCount >= 5) {
      const btn = document.getElementById('admin-toggle-btn');
      if (btn) { btn.style.display = ''; btn.removeAttribute('aria-hidden'); }
      brandClickCount = 0;
    }
  });
}

/* ════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════ */
(async () => {
  // Firebase 실시간 리스너 시작 (이 하나로 모든 변경사항 자동 반영)
  startRealtimeSync();
})();
