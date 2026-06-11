python3 << 'EOF'
with open('/home/claude/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old = """/* ════════════════════════════════════════════
   STORAGE — localStorage 영구 저장소
   ════════════════════════════════════════════ */
async function loadAllData() {
  const data = {};
  for (const key of KEYS) {
    try {
      const saved = localStorage.getItem('portfolio:' + key);
      data[key] = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_DATA[key]));
    } catch {
      data[key] = JSON.parse(JSON.stringify(DEFAULT_DATA[key]));
    }
  }
  return data;
}

async function saveItem(key, item) {
  localStorage.setItem('portfolio:' + key, JSON.stringify(item));
}"""

new = """/* ════════════════════════════════════════════
   FIREBASE REALTIME DATABASE
   ════════════════════════════════════════════ */
const FIREBASE_URL = 'https://portfolio2026uiux-default-rtdb.firebaseio.com';

async function loadAllData() {
  const data = {};
  try {
    const res = await fetch(FIREBASE_URL + '/portfolio.json');
    const remote = res.ok ? await res.json() : null;
    for (const key of KEYS) {
      data[key] = (remote && remote[key])
        ? remote[key]
        : JSON.parse(JSON.stringify(DEFAULT_DATA[key]));
    }
  } catch {
    for (const key of KEYS) {
      data[key] = JSON.parse(JSON.stringify(DEFAULT_DATA[key]));
    }
  }
  return data;
}

async function saveItem(key, item) {
  try {
    await fetch(FIREBASE_URL + '/portfolio/' + key + '.json', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });
  } catch(e) {
    console.error('Firebase 저장 실패', e);
  }
}"""

if old in content:
    content = content.replace(old, new)
    print("SUCCESS")
else:
    print("NOT FOUND")
    # Try to find approximate location
    idx = content.find('localStorage')
    print(f"localStorage found at index: {idx}")
    print(repr(content[idx-200:idx+200]))

with open('/home/claude/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
EOF