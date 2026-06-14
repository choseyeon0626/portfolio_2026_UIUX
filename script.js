/* ════════════════════════════════════════════
   CONFIG — 비밀번호를 여기서 변경하세요
   ════════════════════════════════════════════ */
let ADMIN_PW = '0703';

/* ════════════════════════════════════════════
   DEFAULT WORK DATA
   ════════════════════════════════════════════ */
const DEFAULT_DATA = {
  one:   {label:'UI/UX\nBRANDING',caption:'학교 아이덴티티를 담는 패턴 디자인',tag:'UI/UX · Branding',title:'학교 아이덴티티를 담는 패턴 디자인',desc:'학교의 고유한 아이덴티티를 시각적으로 표현하는 패턴 디자인 프로젝트입니다. 브랜드 색상과 형태 언어를 통해 일관된 비주얼 시스템을 구축하고, 다양한 적용 사례를 통해 완성도 높은 결과물을 만들었습니다.',type:'브랜딩 / 패턴 디자인',role:'디자이너',year:'2024',color:'work-thumb--warm',files:[]},
  two:   {label:'GUI\nSTUDY',caption:'GUI 요소 리서치 디자인 스터디 발표 포트폴리오',tag:'GUI Study',title:'GUI 요소 리서치 디자인 스터디',desc:'GUI 구성 요소에 대한 심층 리서치를 바탕으로 디자인 스터디를 진행하고, 발표 자료와 포트폴리오로 정리한 프로젝트입니다.',type:'GUI 리서치',role:'리서처 / 디자이너',year:'2024',color:'work-thumb--light',files:[]},
  three: {label:'PRINT',caption:'문화 콘텐츠 포장주의 브로슈어 제작',tag:'Print',title:'문화 콘텐츠 포장주의 브로슈어',desc:'문화 콘텐츠를 주제로 한 포장주의 개념의 브로슈어 디자인 프로젝트입니다. 인쇄 매체의 특성을 살려 편집 디자인의 원칙을 적용했습니다.',type:'인쇄 편집 디자인',role:'편집 디자이너',year:'2024',color:'work-thumb--cream',files:[]},
  four:  {label:'TVING\nSYSTEM',caption:'TVING 디자인 시스템 심화 탐구 실습',tag:'Design System',title:'TVING 디자인 시스템 심화 탐구',desc:'TVING의 디자인 시스템을 심도 있게 분석하고 탐구하는 실습 프로젝트입니다. 컴포넌트 구조, 색상 체계, 타이포그래피, 그리드 시스템 등을 연구했습니다.',type:'Design System',role:'디자인 리서처',year:'2024',color:'work-thumb--charcoal',files:[]},
  five:  {label:'VIDEO',caption:'유튜브 영상 편집 기획 채널 운영',tag:'Video',title:'유튜브 영상 편집 기획 채널 운영',desc:'유튜브 채널을 직접 기획하고 영상 편집까지 담당한 프로젝트입니다. 콘텐츠 전략 수립부터 영상 제작, 썸네일 디자인, 채널 브랜딩까지 운영을 경험했습니다.',type:'영상 제작 / 채널 운영',role:'크리에이터 / 편집자',year:'2023–2024',color:'work-thumb--soft',files:[]},
  six:   {label:'WEB\nREDESIGN',caption:'아티스트 프로젝트 홈페이지 리디자인',tag:'Web Redesign',title:'아티스트 프로젝트 홈페이지 리디자인',desc:'아티스트의 작품 세계를 효과적으로 전달하기 위한 홈페이지 리디자인 프로젝트입니다. 사용자 경험을 중심으로 정보 구조를 재설계했습니다.',type:'Web Redesign',role:'UI/UX 디자이너',year:'2024',color:'work-thumb--navy',files:[]},
  seven: {label:'SNS\nCAMPAIGN',caption:'창업 매장 SNS 게시물 예시 제작',tag:'SNS Campaign',title:'창업 매장 SNS 게시물 제작',desc:'창업 초기 단계의 매장을 위한 SNS 콘텐츠 예시를 기획하고 제작한 프로젝트입니다. 브랜드 톤에 맞는 피드 구성과 게시물 디자인을 통해 온라인 마케팅 방향을 제시했습니다.',type:'SNS 콘텐츠 디자인',role:'콘텐츠 디자이너',year:'2024',color:'work-thumb--blue',files:[]},
  eight: {label:'CLUB\nACTIVITY',caption:'커머셜프로그램부 특강 참여 및 홍보 자료 제작',tag:'Club Activity',title:'커머셜프로그램부 특강 및 홍보 자료',desc:'교내 커머셜프로그램부 활동으로 외부 전문가 특강에 참여하고, 행사 홍보를 위한 시각 자료를 제작한 프로젝트입니다.',type:'홍보물 디자인',role:'디자이너',year:'2024',color:'work-thumb--sky',files:[]},
  nine:  {label:'AWARD\nSTUDY',caption:'독서, 자격, 수상으로 확장한 성장의 축적',tag:'Award & Study',title:'독서, 자격, 수상으로 확장한 성장의 축적',desc:'디자인 관련 독서 활동, 자격증 취득, 각종 공모전 수상까지 학업 외 자기계발의 여정을 정리한 아카이브입니다.',type:'자기계발 / 수상',role:'학습자',year:'2023–2024',color:'work-thumb--mint',files:[]}
};

let KEYS = ['one','two','three','four','five','six','seven','eight','nine'];

/* ════════════════════════════════════════════
   FIREBASE REALTIME DB  (텍스트 데이터)
   CLOUDINARY             (이미지 / 파일)
   ════════════════════════════════════════════ */
const FIREBASE_DB       = 'https://portfolio2026uiux-default-rtdb.firebaseio.com';
const CLOUDINARY_CLOUD  = 'ddfkjrmxc';
const CLOUDINARY_PRESET = 'portfolio_img';

/* ════════════════════════════════════════════
   FIREBASE SDK 초기화 (실시간 리스너용)
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
   실시간 동기화 — admin.html 에서 저장하면
   이 페이지도 즉시 업데이트됩니다.
   ════════════════════════════════════════════ */
let firebaseKeys = new Set();

function startRealtimeSync() {
  _db.ref('/portfolio').on('value', snapshot => {
    const remote = snapshot.val();
    if (!remote) return;

    const board = document.getElementById('work-board');
    let changed = false;

    // ── 새로 추가/수정된 키 처리 ──
    Object.keys(remote).forEach(key => {
      firebaseKeys.add(key); 
      if (!KEYS.includes(key)) {
        KEYS.push(key);
        createCardDOM(key);
        changed = true;
      }
      allData[key] = remote[key];
    });

    // ── admin에서 삭제된 키 처리 ──
    KEYS.filter(k => firebaseKeys.has(k) && !(k in remote)).forEach(key => {
      KEYS = KEYS.filter(k => k !== key);
      delete allData[key];
      firebaseKeys.delete(key);
      if (board) {
        const el = board.querySelector(`.work-item[data-key="${key}"]`);
        if (el) el.remove(); 
      }
      changed = true;
    });

    if (changed) applyStaggeredPositions();
    renderAllCards();
  });

  _db.ref('/config/order').on('value', snapshot => {
    const savedOrder = snapshot.val();
    if (!Array.isArray(savedOrder) || savedOrder.length === 0) return;
    const board = document.getElementById('work-board');
    if (!board) return;
    
    const ordered = savedOrder.filter(k => KEYS.includes(k));
    const extra   = KEYS.filter(k => !ordered.includes(k));
    KEYS.length = 0;
    KEYS.push(...ordered, ...extra);
    
    KEYS.forEach(key => {
      const el = board.querySelector(`.work-item[data-key="${key}"]`);
      if (el) board.appendChild(el);
    });
    applyStaggeredPositions();
  });

  _db.ref('/config/password').on('value', snapshot => {
    const pw = snapshot.val();
    if (pw && typeof pw === 'string') ADMIN_PW = pw;
  });
}

/* ── Firebase REST helpers (기존 유지) ── */
async function dbGet(path) {
  try {
    const res = await fetch(FIREBASE_DB + path + '.json');
    return res.ok ? await res.json() : null;
  } catch { return null; }
}
async function dbSet(path, data) {
  try {
    const res = await fetch(FIREBASE_DB + path + '.json', {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('DB write failed');
  } catch(e) { console.error('Firebase 저장 오류:', e); }
}

/* ── Cloudinary 이미지 업로드 ── */
async function uploadToCloudinary(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.cloudinary.com/v1_1/' + CLOUDINARY_CLOUD + '/auto/upload', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        try {
          const json = JSON.parse(xhr.responseText);
          resolve({ name: file.name, type: file.type, data: json.secure_url });
        } catch(e) { reject(new Error('응답 파싱 실패')); }
      } else {
        reject(new Error('Cloudinary 업로드 실패: ' + xhr.status));
      }
    };
    xhr.onerror = () => reject(new Error('네트워크 오류'));
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', CLOUDINARY_PRESET);
    fd.append('folder', 'portfolio');
    xhr.send(fd);
  });
}

/* ════════════════════════════════════════════
   STORAGE — 전 기기 공유
   ════════════════════════════════════════════ */
async function loadAllData() {
  const data = {};
  try {
    const savedPw = await dbGet('/config/password');
    if (savedPw && typeof savedPw === 'string') ADMIN_PW = savedPw;

    const remote = await dbGet('/portfolio');
    
    // Firebase에 실제 존재하는 키 기록
    const remoteKeys = remote ? Object.keys(remote) : [];
    remoteKeys.forEach(k => firebaseKeys.add(k));

    let allKeys = [...new Set([...KEYS, ...remoteKeys])];

    const savedOrder = await dbGet('/config/order');
    if (savedOrder && Array.isArray(savedOrder)) {
      const ordered = savedOrder.filter(k => allKeys.includes(k));
      const extra   = allKeys.filter(k => !ordered.includes(k));
      allKeys = [...ordered, ...extra];
    }

    KEYS = allKeys;

    for (const key of KEYS) {
      data[key] = (remote && remote[key])
        ? remote[key]
        : (DEFAULT_DATA[key] ? JSON.parse(JSON.stringify(DEFAULT_DATA[key])) : null);
      if (!data[key]) { KEYS = KEYS.filter(k=>k!==key); }
    }
  } catch {
    for (const key of KEYS) {
      data[key] = JSON.parse(JSON.stringify(DEFAULT_DATA[key]));
    }
  }
  return data;
}

async function saveItem(key, item) {
  await dbSet('/portfolio/' + key, item);
}

/* ════════════════════════════════════════════
   FILE → BASE64
   ════════════════════════════════════════════ */
function fileToBase64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res({name: file.name, type: file.type, data: r.result});
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

/* ════════════════════════════════════════════
   RENDER CARDS
   ════════════════════════════════════════════ */
let allData = {};

function renderCard(key, item) {
  const fig = document.querySelector(`.work-item[data-key="${key}"]`);
  if (!fig) return;
  const thumb = fig.querySelector('.work-thumb');
  const cap = fig.querySelector('figcaption');

  // color class
  thumb.className = 'work-thumb ' + item.color;

  // thumbnail image or label
  // remove old img
  const oldImg = thumb.querySelector('img');
  if (oldImg) oldImg.remove();
  const oldBadge = thumb.querySelector('.pdf-badge');
  if (oldBadge) oldBadge.remove();
  const labelEl = thumb.querySelector('span');

  const images = (item.files || []).filter(f => f.type && f.type.startsWith('image/'));
  const pdfs   = (item.files || []).filter(f => f.type === 'application/pdf');
  const mp4s   = (item.files || []).filter(f => f.type === 'video/mp4');

  if (images.length > 0) {
    const img = document.createElement('img');
    img.src = images[0].data;
    img.alt = item.title || '';
    thumb.insertBefore(img, thumb.firstChild);
    if (labelEl) labelEl.textContent = '';
  } else if (mp4s.length > 0) {
    if (labelEl) labelEl.innerHTML = item.label.replace(/\n/g,'<br>');
    const badge = document.createElement('span');
    badge.className = 'pdf-badge';
    badge.style.color = '#6fa0ff';
    badge.textContent = 'MP4';
    thumb.appendChild(badge);
  } else if (pdfs.length > 0 && images.length === 0) {
    if (labelEl) labelEl.innerHTML = item.label.replace(/\n/g,'<br>');
    const badge = document.createElement('span');
    badge.className = 'pdf-badge';
    badge.textContent = 'PDF';
    thumb.appendChild(badge);
  } else {
    if (labelEl) labelEl.innerHTML = item.label.replace(/\n/g,'<br>');
  }

  cap.textContent = item.caption || '';
}

function renderAllCards() {
  KEYS.forEach(key => renderCard(key, allData[key]));
}

function createCardDOM(key) {
  const worksGrid = document.getElementById('work-board');
  if (!worksGrid || worksGrid.querySelector(`.work-item[data-key="${key}"]`)) return;
  // 기존 9개 카드: row 1~6 사용 → 동적 카드는 row 7부터 시작
  const dynamicCount = worksGrid.querySelectorAll('.work-item--dynamic').length;
  const col = (dynamicCount % 6) * 2 + 1; // 1,3,5,7,9,11
  const row = 7 + Math.floor(dynamicCount / 6) * 2;
  const fig = document.createElement('figure');
  fig.className = 'work-item work-item--dynamic reveal is-visible';
  fig.style.gridColumn = col + '/span 2';
  fig.style.gridRow = row + '/span 2';
  fig.dataset.key = key;
  fig.innerHTML = '<div class="work-thumb work-thumb--warm"><span></span></div><figcaption></figcaption>';
  fig.addEventListener('click', () => openModal(key));
  worksGrid.appendChild(fig);
}

/* ════════════════════════════════════════════
   PORTFOLIO MODAL
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

  // thumb
  modalThumb.className = 'modal__thumb ' + d.color;
  const oldImg = modalThumb.querySelector('img');
  if (oldImg) oldImg.remove();

  const images = (d.files||[]).filter(f => f.type && f.type.startsWith('image/'));
  if (images.length > 0) {
    const img = document.createElement('img');
    img.src = images[0].data; img.alt = d.title||'';
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(images, 0));
    modalThumb.insertBefore(img, modalThumb.firstChild);
    modalLabel.textContent = '';
  } else {
    modalLabel.innerHTML = (d.label||'').replace(/\n/g,'<br>');
  }

  modalTag.textContent   = d.tag   || '';
  modalTitle.textContent = d.title || '';
  modalDesc.textContent  = d.desc  || '';
  modalMeta.innerHTML = `
    <div class="modal__meta-item"><label>Type</label><span>${d.type||''}</span></div>
    <div class="modal__meta-item"><label>Role</label><span>${d.role||''}</span></div>
    <div class="modal__meta-item"><label>Year</label><span>${d.year||''}</span></div>
  `;

  // file gallery
  modalFiles.innerHTML = '';
  if (d.files && d.files.length > 0) {
    const imgFiles = d.files.filter(f => f.type && f.type.startsWith('image/'));
    const pdfFiles = d.files.filter(f => f.type === 'application/pdf');
    const mp4Files = d.files.filter(f => f.type === 'video/mp4');

    if (imgFiles.length > 0) {
      const grid = document.createElement('div');
      grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;margin-top:8px';
      imgFiles.forEach((f,i) => {
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
      video.className = 'modal-video';
      video.src = f.data;
      video.controls = true;
      video.preload = 'metadata';
      video.style.cssText = 'width:100%;border-radius:4px;border:1px solid rgba(255,255,255,0.14);background:#000;display:block;margin-top:4px;max-height:360px';
      modalFiles.appendChild(label);
      modalFiles.appendChild(video);
    });

    pdfFiles.forEach(f => {
      const a = document.createElement('a');
      a.href = f.data; a.download = f.name; a.target = '_blank';
      a.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);color:var(--muted);font-size:13px;text-decoration:none;transition:background 160ms ease';
      a.onmouseenter = () => a.style.background='rgba(255,255,255,0.1)';
      a.onmouseleave = () => a.style.background='rgba(255,255,255,0.06)';
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
  // 모달 닫을 때 비디오 재생 정지
  modalFiles.querySelectorAll('video').forEach(v => v.pause());
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key==='Escape') { closeModal(); closeAdmin(); } });





document.querySelectorAll('.work-item').forEach(el => {
  el.addEventListener('click', () => openModal(el.dataset.key));
});

/* ════════════════════════════════════════════
   ADMIN
   ════════════════════════════════════════════ */
let isAdmin = false;
let editingKey = null;
let pendingFiles = []; // {name, type, data}

const adminOverlay  = document.getElementById('admin-overlay');
const authView      = document.getElementById('auth-view');
const selectView    = document.getElementById('select-view');
const editView      = document.getElementById('edit-view');
const pwInput       = document.getElementById('pw-input');
const authError     = document.getElementById('auth-error');
const adminItemGrid = document.getElementById('admin-item-grid');
const uploadZone    = document.getElementById('upload-zone');
const fileInput     = document.getElementById('file-input');
const uploadPreview = document.getElementById('upload-preview');
const saveSuccess   = document.getElementById('save-success');

const ITEM_NAMES = {one:'①',two:'②',three:'③',four:'④',five:'⑤',six:'⑥',seven:'⑦',eight:'⑧',nine:'⑨'};

function openAdmin() {
  adminOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  if (isAdmin) { showSelectView(); } else { showAuthView(); }
}
function closeAdmin() {
  adminOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

/* ════════════════════════════════════════════
   LIGHTBOX
   ════════════════════════════════════════════ */
let lbImages = [];
let lbIndex  = 0;
const lb       = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');
const lbCounter= document.getElementById('lb-counter');

function openLightbox(imgs, idx) {
  lbImages = imgs;
  lbIndex  = idx;
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
  setTimeout(() => {
    lbImg.src = lbImages[lbIndex].data;
    lbImg.style.opacity = '1';
  }, 150);
  lbCounter.textContent = lbImages.length > 1 ? (lbIndex+1) + ' / ' + lbImages.length : '';
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
  if (e.key === 'Escape')     { closeLightbox(); }
});

const pwView   = document.getElementById('pw-view');
const sortView = document.getElementById('sort-view');
function showAuthView() {
  authView.style.display=''; selectView.style.display='none'; editView.style.display='none'; pwView.style.display='none'; sortView.style.display='none';
  pwInput.value=''; authError.style.display='none';
  setTimeout(() => pwInput.focus(), 100);
}
function showSelectView() {
  authView.style.display='none'; selectView.style.display=''; editView.style.display='none'; pwView.style.display='none'; sortView.style.display='none';
  adminItemGrid.innerHTML = '';
  KEYS.forEach(key => {
    const d = allData[key];
    const card = document.createElement('div');
    card.className = 'admin-item-card';
    card.innerHTML = `<strong style="display:block;font-size:13px;color:var(--ink);margin-bottom:4px">${ITEM_NAMES[key] || key} ${(d.label||'').replace(/\n/,' ')}</strong>${d.caption||''}`;
    card.onclick = () => openEditView(key);
    adminItemGrid.appendChild(card);
  });
}
function showEditView() {
  authView.style.display='none'; selectView.style.display='none'; editView.style.display=''; pwView.style.display='none'; sortView.style.display='none';
}
function showPwView() {
  authView.style.display='none'; selectView.style.display='none'; editView.style.display='none'; pwView.style.display=''; sortView.style.display='none';
  document.getElementById('pw-current').value='';
  document.getElementById('pw-new').value='';
  document.getElementById('pw-confirm').value='';
  document.getElementById('pw-error').style.display='none';
  document.getElementById('pw-success').style.display='none';
}
function showSortView() {
  authView.style.display='none'; selectView.style.display='none'; editView.style.display='none'; pwView.style.display='none'; sortView.style.display='';
  renderSortGrid();
}

/* ════════════════════════════════════════════
   SORT (드래그앤드롭 순서 변경)
   ════════════════════════════════════════════ */
let dragSrcKey = null;

function renderSortGrid() {
  const grid = document.getElementById('sort-grid');
  grid.innerHTML = '';
  KEYS.forEach(key => {
    const d = allData[key];
    if (!d) return;
    const card = document.createElement('div');
    card.className = 'sort-card';
    card.draggable = true;
    card.dataset.key = key;
    card.innerHTML = `<span class="sort-handle">⠿</span><span class="sort-label">${(d.label||key).replace(/\n/,' ')}</span>`;

    card.addEventListener('dragstart', e => {
      dragSrcKey = key;
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      grid.querySelectorAll('.sort-card').forEach(c => c.classList.remove('drag-over'));
    });
    card.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      grid.querySelectorAll('.sort-card').forEach(c => c.classList.remove('drag-over'));
      if (dragSrcKey !== key) card.classList.add('drag-over');
    });
    card.addEventListener('drop', e => {
      e.preventDefault();
      card.classList.remove('drag-over');
      if (!dragSrcKey || dragSrcKey === key) return;
      const fromIdx = KEYS.indexOf(dragSrcKey);
      const toIdx   = KEYS.indexOf(key);
      if (fromIdx < 0 || toIdx < 0) return;
      KEYS.splice(fromIdx, 1);
      KEYS.splice(toIdx, 0, dragSrcKey);
      renderSortGrid();
    });
    grid.appendChild(card);
  });
}

document.getElementById('sort-btn').addEventListener('click', showSortView);
document.getElementById('sort-back-btn').addEventListener('click', showSelectView);
document.getElementById('sort-save-btn').addEventListener('click', async () => {
  const board = document.getElementById('work-board');
  // DOM 순서 재정렬 + 계단 위치 재할당
  KEYS.forEach(key => {
    const el = board.querySelector(`.work-item[data-key="${key}"]`);
    if (el) board.appendChild(el);
  });
  applyStaggeredPositions();
  // Firebase에 순서 저장
  await dbSet('/config/order', KEYS);
  const suc = document.getElementById('sort-success');
  suc.style.display = 'block';
  setTimeout(() => { suc.style.display='none'; showSelectView(); }, 1400);
});

/* 카드들에 계단식 grid 위치를 동적으로 할당 (데스크탑만) */
function applyStaggeredPositions() {
  const board = document.getElementById('work-board');
  const items = [...board.querySelectorAll('.work-item')];
  const isMobile = window.innerWidth <= 760;
  items.forEach((el, i) => {
    el.className = el.className.replace(/work-item--(one|two|three|four|five|six|seven|eight|nine|dynamic)/g,'').trim();
    if (isMobile) {
      el.style.gridColumn = '';
      el.style.gridRow    = '';
    } else {
      const rowIdx = Math.floor(i / 3);
      const colIdx = i % 3;
      const startCol = (colIdx * 3) + (rowIdx % 4) + 1;
      const col = Math.min(startCol, 10);
      el.style.gridColumn = col + '/span 3';
      el.style.gridRow    = (rowIdx + 1) + '';
    }
  });
}
window.addEventListener('resize', applyStaggeredPositions);

function openEditView(key) {
  editingKey = key;
  const d = allData[key];
  document.getElementById('edit-view-title').textContent = `편집: ${(d.label||'').replace(/\n/,' ')}`;
  document.getElementById('f-label').value   = d.label   || '';
  document.getElementById('f-caption').value = d.caption || '';
  document.getElementById('f-tag').value     = d.tag     || '';
  document.getElementById('f-year').value    = d.year    || '';
  document.getElementById('f-role').value    = d.role    || '';
  document.getElementById('f-type').value    = d.type    || '';
  document.getElementById('f-desc').value    = d.desc    || '';
  document.getElementById('f-color').value   = d.color   || 'work-thumb--warm';
  pendingFiles = JSON.parse(JSON.stringify(d.files || []));
  saveSuccess.style.display = 'none';
  renderUploadPreview();
  showEditView();
}

function renderUploadPreview() {
  uploadPreview.innerHTML = '';
  pendingFiles.forEach((f, i) => {
    if (f.type && f.type.startsWith('image/')) {
      const wrap = document.createElement('div');
      wrap.className = 'upload-preview-item';
      wrap.innerHTML = `<img src="${f.data}" alt="${f.name}"><button class="del-btn" data-i="${i}">✕</button>`;
      uploadPreview.appendChild(wrap);
    } else if (f.type === 'video/mp4') {
      const wrap = document.createElement('div');
      wrap.className = 'mp4-preview-item';
      wrap.innerHTML = `<span style="color:#6fa0ff;font-weight:700;font-size:11px">MP4</span> <span>${f.name}</span><button class="del-btn" data-i="${i}">✕</button>`;
      uploadPreview.appendChild(wrap);
    } else {
      const wrap = document.createElement('div');
      wrap.className = 'pdf-preview-item';
      wrap.innerHTML = `<span style="color:#e87070;font-weight:700;font-size:11px">PDF</span> <span>${f.name}</span><button class="del-btn" data-i="${i}">✕</button>`;
      uploadPreview.appendChild(wrap);
    }
  });
  uploadPreview.querySelectorAll('.del-btn').forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      pendingFiles.splice(Number(btn.dataset.i), 1);
      renderUploadPreview();
    };
  });
}

/* upload zone */
uploadZone.addEventListener('click', () => fileInput.click());
uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag'); });
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag'));
uploadZone.addEventListener('drop', async e => {
  e.preventDefault(); uploadZone.classList.remove('drag');
  await addFiles([...e.dataTransfer.files]);
});
fileInput.addEventListener('change', async () => {
  await addFiles([...fileInput.files]);
  fileInput.value = '';
});

async function addFiles(files) {
  // 업로드 버튼 잠금
  const saveBtn = document.getElementById('save-btn');
  const origTxt = saveBtn ? saveBtn.textContent : '';
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = '업로드 중...'; }

  for (const file of files) {
    if (!file.type.startsWith('image/') && file.type !== 'application/pdf' && file.type !== 'video/mp4') continue;
    try {
      const fileObj = await uploadToCloudinary(file);
      pendingFiles.push(fileObj);
    } catch(e) {
      console.error('Cloudinary 업로드 실패, base64로 대체:', e);
      const b64 = await fileToBase64(file);
      pendingFiles.push(b64);
    }
  }

  if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = origTxt; }
  renderUploadPreview();
}

/* auth */
document.getElementById('auth-submit-btn').addEventListener('click', () => {
  if (pwInput.value === ADMIN_PW) {
    isAdmin = true;
    authError.style.display = 'none';
    document.getElementById('admin-toggle-btn').classList.add('is-admin');
    showSelectView();
  } else {
    authError.style.display = 'block';
    pwInput.value = '';
    pwInput.focus();
  }
});
pwInput.addEventListener('keydown', e => { if (e.key==='Enter') document.getElementById('auth-submit-btn').click(); });
document.getElementById('auth-cancel-btn').addEventListener('click', closeAdmin);

/* ── 비밀번호 변경 ── */
document.getElementById('change-pw-btn').addEventListener('click', showPwView);
document.getElementById('pw-back-btn').addEventListener('click', showSelectView);
document.getElementById('pw-save-btn').addEventListener('click', async () => {
  const cur     = document.getElementById('pw-current').value;
  const nw      = document.getElementById('pw-new').value;
  const confirm = document.getElementById('pw-confirm').value;
  const errEl   = document.getElementById('pw-error');
  const sucEl   = document.getElementById('pw-success');
  errEl.style.display = 'none'; sucEl.style.display = 'none';
  if (cur !== ADMIN_PW)    { errEl.textContent='현재 비밀번호가 틀렸습니다.'; errEl.style.display='block'; return; }
  if (nw.length < 4)       { errEl.textContent='새 비밀번호는 4자 이상이어야 합니다.'; errEl.style.display='block'; return; }
  if (nw !== confirm)      { errEl.textContent='새 비밀번호가 일치하지 않습니다.'; errEl.style.display='block'; return; }
  ADMIN_PW = nw;
  await dbSet('/config/password', nw);
  sucEl.style.display = 'block';
  setTimeout(() => showSelectView(), 1500);
});

/* ── 새 항목 추가 ── */
document.getElementById('add-item-btn').addEventListener('click', () => {
  const key = 'item_' + Date.now();
  KEYS.push(key);
  allData[key] = {
    label:'NEW\nITEM', caption:'새 포트폴리오 항목', tag:'', title:'새 포트폴리오',
    desc:'', type:'', role:'', year:'2024', color:'work-thumb--warm', files:[]
  };
  createCardDOM(key);
  applyStaggeredPositions();
  openEditView(key);
});
document.getElementById('close-admin-btn').addEventListener('click', closeAdmin);
document.getElementById('logout-btn').addEventListener('click', () => {
  isAdmin = false;
  document.getElementById('admin-toggle-btn').classList.remove('is-admin');
  closeAdmin();
});
document.getElementById('back-btn').addEventListener('click', showSelectView);
document.getElementById('admin-toggle-btn').addEventListener('click', openAdmin);

/* save */
document.getElementById('save-btn').addEventListener('click', async () => {
  const key = editingKey; if (!key) return;
  const item = {
    label:   document.getElementById('f-label').value,
    caption: document.getElementById('f-caption').value,
    tag:     document.getElementById('f-tag').value,
    title:   document.getElementById('f-label').value.replace(/\n/g,' '),
    year:    document.getElementById('f-year').value,
    role:    document.getElementById('f-role').value,
    type:    document.getElementById('f-type').value,
    desc:    document.getElementById('f-desc').value,
    color:   document.getElementById('f-color').value,
    files:   pendingFiles,
  };
  allData[key] = item;
  await saveItem(key, item);
  renderCard(key, item);
  saveSuccess.style.display = 'block';
  setTimeout(() => saveSuccess.style.display='none', 2000);
});

/* click outside admin panel */
adminOverlay.addEventListener('click', e => { if (e.target===adminOverlay) closeAdmin(); });

/* ════════════════════════════════════════════
   REVEAL + NAV
   ════════════════════════════════════════════ */
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.site-nav a');
const revealItems= document.querySelectorAll('.reveal');

new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
},{threshold:0.18,rootMargin:'0px 0px -8% 0px'}).observe
  = (() => {
    const orig = IntersectionObserver.prototype.observe;
    return function(target) { orig.call(this, target); };
  })();

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
},{threshold:0.18,rootMargin:'0px 0px -8% 0px'});
revealItems.forEach(el => revealObs.observe(el));

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const id = e.target.getAttribute('id');
    navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href')==='#'+id));
  });
},{threshold:0.45});
sections.forEach(s => sectionObs.observe(s));

/* ════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════ */
(async () => {
  allData = await loadAllData();
  const board = document.getElementById('work-board');
  // KEYS 순서대로 카드 DOM 생성/정렬
  KEYS.forEach(key => {
    if (!board.querySelector(`.work-item[data-key="${key}"]`)) {
      createCardDOM(key);
    }
  });
  // 저장된 순서대로 DOM 재배치
  KEYS.forEach(key => {
    const el = board.querySelector(`.work-item[data-key="${key}"]`);
    if (el) board.appendChild(el);
  });
  // 계단식 위치 적용
  applyStaggeredPositions();
  renderAllCards();

  // ✅ admin.html 에서 저장 시 실시간 반영
  startRealtimeSync();
})();