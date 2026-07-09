python3 - 'PYEOF'
with open('/home/claude/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# loadAllData에서 Firebase로부터 로드된 키를 별도로 추적
old_load = """async function loadAllData() {
  const data = {};
  try {
    // 비밀번호 로드
    const savedPw = await dbGet('/config/password');
    if (savedPw && typeof savedPw === 'string') ADMIN_PW = savedPw;

    const remote = await dbGet('/portfolio');
    // 동적으로 추가된 키도 포함
    const remoteKeys = remote ? Object.keys(remote) : [];
    let allKeys = [...new Set([...KEYS, ...remoteKeys])];

    // 저장된 순서 불러오기
    const savedOrder = await dbGet('/config/order');
    if (savedOrder && Array.isArray(savedOrder)) {
      // savedOrder 기준으로 재정렬, 없는 키는 뒤에 추가
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
}"""

new_load = """// Firebase에 실제로 저장된 키 집합 (삭제 판단 기준)
let firebaseKeys = new Set();

async function loadAllData() {
  const data = {};
  try {
    // 비밀번호 로드
    const savedPw = await dbGet('/config/password');
    if (savedPw && typeof savedPw === 'string') ADMIN_PW = savedPw;

    const remote = await dbGet('/portfolio');
    // Firebase에 실제 존재하는 키 기록
    const remoteKeys = remote ? Object.keys(remote) : [];
    remoteKeys.forEach(k => firebaseKeys.add(k));

    let allKeys = [...new Set([...KEYS, ...remoteKeys])];

    // 저장된 순서 불러오기
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
}"""

if old_load in content:
    content = content.replace(old_load, new_load, 1)
    print("loadAllData: SUCCESS")
else:
    print("loadAllData: NOT FOUND")

# startRealtimeSync 수정: firebaseKeys에 있는 키만 삭제 대상
old_sync = """  _db.ref('/portfolio').on('value', snapshot => {
    const remote = snapshot.val();
    if (!remote) return;

    const board = document.getElementById('work-board');
    let changed = false;

    // ── 새로 추가/수정된 키 처리 ──
    Object.keys(remote).forEach(key => {
      if (!KEYS.includes(key)) {
        KEYS.push(key);
        createCardDOM(key);
        changed = true;
      }
      allData[key] = remote[key];
    });

    // ── admin에서 삭제된 키 처리 ──
    // DEFAULT_DATA에 있는 키는 Firebase 미저장 상태일 수 있으므로 제외
    // Firebase에 한 번이라도 저장된 키(=DEFAULT_DATA에 없는 키)만 삭제 대상
    KEYS.filter(k => !(k in remote) && !(k in DEFAULT_DATA)).forEach(key => {
      KEYS = KEYS.filter(k => k !== key);
      delete allData[key];
      if (board) {
        const el = board.querySelector(`.work-item[data-key="${key}"]`);
        if (el) el.remove();
      }
      changed = true;
    });

    if (changed) applyStaggeredPositions();
    renderAllCards();
  });"""

new_sync = """  _db.ref('/portfolio').on('value', snapshot => {
    const remote = snapshot.val();
    if (!remote) return;

    const board = document.getElementById('work-board');
    let changed = false;

    // ── 새로 추가/수정된 키 처리 ──
    Object.keys(remote).forEach(key => {
      firebaseKeys.add(key); // Firebase에 저장된 키 추적
      if (!KEYS.includes(key)) {
        KEYS.push(key);
        createCardDOM(key);
        changed = true;
      }
      allData[key] = remote[key];
    });

    // ── admin에서 삭제된 키 처리 ──
    // 반드시 "Firebase에 한 번이라도 저장된 키"만 삭제 대상으로 함
    // (한 번도 저장 안 된 DEFAULT_DATA 키는 remote에 없어도 삭제 안 함)
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
  });"""

if old_sync in content:
    content = content.replace(old_sync, new_sync, 1)
    print("startRealtimeSync: SUCCESS")
else:
    print("startRealtimeSync: NOT FOUND")

with open('/home/claude/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
PYEOF