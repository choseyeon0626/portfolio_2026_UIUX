python3 << 'PYEOF'
import re

with open('../index.html', 'r', encoding='utf-8') as f:
    src = f.read().replace('\r\n', '\n').replace('\r', '\n')

html_part = src[:src.find('<script>')]
js_part   = src[src.find('<script>')+8 : src.rfind('</script>')]
end_part  = src[src.rfind('</script>'):]

# ══════════════════════════════════
# index.html (방문자 전용)
# ══════════════════════════════════
v_html = html_part
# admin 버튼 제거
v_html = re.sub(r'[ \t]*<button[^>]*id="admin-toggle-btn"[^>]*>.*?</button>\n?', '', v_html)
# admin drawer 제거
v_html = re.sub(r'\n<!-- ── Admin Bottom Drawer ── -->.*', '', v_html, flags=re.DOTALL)

# JS에서 admin 관련 모두 제거
v_js = js_part

# admin 상태 변수
v_js = re.sub(r'let isAdmin = false;\n', '', v_js)
v_js = re.sub(r'let editingKey = null;\n', '', v_js)
v_js = re.sub(r'let pendingFiles = \[\];[^\n]*\n', '', v_js)

# admin DOM refs (adminOverlay ~ ITEM_NAMES)
v_js = re.sub(r'const adminOverlay[\s\S]*?const ITEM_NAMES = \{[^}]+\};\n', '', v_js)

# openAdmin / closeAdmin 함수
v_js = re.sub(r'function openAdmin\(\)[\s\S]*?function closeAdmin\(\) \{[^}]+\}\n', '', v_js)

# LIGHTBOX는 유지 — 그 뒤 view 함수들 제거
v_js = re.sub(r'const pwView[\s\S]*?function showSortView\(\) \{[^}]+\}\n', '', v_js)

# SORT
v_js = re.sub(r'/\* ════[^/]*SORT \(드래그앤드롭 순서 변경\)[^/]*\*\/[\s\S]*?window\.addEventListener\(\'resize\', applyStaggeredPositions\);', '', v_js)

# openEditView
v_js = re.sub(r'function openEditView\(key\)[\s\S]*?showEditView\(\);\n\}\n', '', v_js)

# renderUploadPreview
v_js = re.sub(r'function renderUploadPreview\(\)[\s\S]*?\}\n\}\n', '', v_js)

# upload zone events
v_js = re.sub(r'/\* upload zone \*/[\s\S]*?fileInput\.value = \'\';\n\}\);\n', '', v_js)

# addFiles
v_js = re.sub(r'async function addFiles[\s\S]*?\}\n\}\n', '', v_js)

# auth ~ logout ~ back ~ admin-toggle
v_js = re.sub(r'/\* auth \*/[\s\S]*?document\.getElementById\(\'admin-toggle-btn\'\)\.addEventListener[\s\S]*?\}\);\n', '', v_js)

# save btn
v_js = re.sub(r'/\* save \*/[\s\S]*?saveSuccess[\s\S]*?\}\);\n', '', v_js)

# click outside admin
v_js = re.sub(r'/\* click outside admin panel \*/[\s\S]*?\}\);\n', '', v_js)

# 시크릿 단축키
v_js = re.sub(r'/\* ── 시크릿[\s\S]*?\}\(\)\);', '', v_js)

# Escape에서 closeAdmin 제거
v_js = v_js.replace(
    "document.addEventListener('keydown', e => { if (e.key==='Escape') { closeModal(); closeAdmin(); } });",
    "document.addEventListener('keydown', e => { if (e.key==='Escape') closeModal(); });"
)

# 비밀번호 변경 이벤트 제거
v_js = re.sub(r'/\* ── 비밀번호 변경 ── \*/[\s\S]*?showSelectView\(\), 1500\);\n\}\);\n', '', v_js)

# 새 항목 추가 이벤트 제거
v_js = re.sub(r'/\* ── 새 항목 추가 ── \*/[\s\S]*?openEditView\(key\);\n\}\);\n', '', v_js)

# sort-btn, sort-back, sort-save
v_js = re.sub(r"document\.getElementById\('sort-btn'\)[\s\S]*?showSelectView\(\);\n\}\);\n", '', v_js)

# close-admin-btn, logout-btn, back-btn
for btn in ['close-admin-btn', 'logout-btn', 'back-btn', 'admin-toggle-btn']:
    v_js = re.sub(r"document\.getElementById\('" + btn + r"'\)\.addEventListener[\s\S]*?\}\);\n", '', v_js)

visitor_content = v_html + '<script>\n' + v_js + end_part

with open('/home/claude/index_out.html', 'w', encoding='utf-8') as f:
    f.write(visitor_content)

# 검증
import subprocess
js_test = v_js
with open('/home/claude/check.js', 'w') as f:
    f.write(js_test)
r = subprocess.run(['node','--check','/home/claude/check.js'], capture_output=True, text=True)
print("index.html 문법:", "✅ OK" if r.returncode==0 else "❌ " + r.stderr[:400])
PYEOF