python3 << 'PYEOF'
with open('/PORTFOLIO_2026_UIUX/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_block = '''<!-- \u2500\u2500 Admin Bottom Drawer \u2500\u2500 -->
<div class="admin-overlay" id="admin-overlay">
  <div class="admin-panel" id="admin-panel">
    <div class="admin-panel-inner">

      <!-- Step 1: Auth -->
      <div id="auth-view">
        <h3>\uad00\ub9ac\uc790 \ub85c\uadf8\uc778</h3>
        <div class="auth-panel" style="max-width:340px">
          <div>
            <label>\ube44\ubc00\ubc88\ud638</label>
            <input type="password" id="pw-input" placeholder="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694" autocomplete="current-password">
          </div>
          <p class="admin-error" id="auth-error" style="display:none">\ube44\ubc00\ubc88\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.</p>
          <div class="admin-actions">
            <button class="btn" id="auth-cancel-btn">\ucde8\uc18c</button>
            <button class="btn btn--primary" id="auth-submit-btn">\ub85c\uadf8\uc778</button>
          </div>
        </div>
      </div>

      <!-- Step 2: Select item -->
      <div id="select-view" style="display:none">
        <h3>\ud3b8\uc9d1\ud560 \ud56d\ubaa9 \uc120\ud0dd</h3>
        <div class="admin-item-grid" id="admin-item-grid"></div>
        <div class="admin-actions" style="margin-top:8px">
          <button class="btn btn--danger btn--sm" id="logout-btn">\ub85c\uadf8\uc544\uc6c3</button>
          <button class="btn" id="close-admin-btn">\ub2eb\uae30</button>
        </div>
      </div>

      <!-- Step 3: Edit form (wide) -->
      <div id="edit-view" style="display:none">
        <h3 id="edit-view-title">\ud56d\ubaa9 \ud3b8\uc9d1</h3>
        <div class="admin-form-grid admin-form-grid--wide">
          <div>
            <label>\uc81c\ubaa9 (\uce74\ub4dc \ub77c\ubca8)</label>
            <input type="text" id="f-label" placeholder="\uc608: UI/UX&#10;BRANDING">
          </div>
          <div>
            <label>\uce74\ub4dc \uc124\uba85 (\ud558\ub2e8 \uce90\ud504\uc158)</label>
            <input type="text" id="f-caption" placeholder="\uc9e7\uc740 \ud55c \uc904 \uc124\uba85">
          </div>
          <div>
            <label>\ud0dc\uadf8</label>
            <input type="text" id="f-tag" placeholder="\uc608: UI/UX \u00b7 Branding">
          </div>
          <div>
            <label>\uc5f0\ub3c4</label>
            <input type="text" id="f-year" placeholder="\uc608: 2024">
          </div>
          <div>
            <label>\uc5ed\ud560</label>
            <input type="text" id="f-role" placeholder="\uc608: \ub514\uc790\uc774\ub108">
          </div>
          <div>
            <label>\uc885\ub958</label>
            <input type="text" id="f-type" placeholder="\uc608: \ube0c\ub79c\ub529 / \ud328\ud134 \ub514\uc790\uc778">
          </div>
          <div class="admin-form-full">
            <label>\uc124\uba85 (\ud31d\uc5c5 \ubcf8\ubb38)</label>
            <textarea id="f-desc" rows="3" placeholder="\ud504\ub85c\uc81d\ud2b8 \uc0c1\uc138 \uc124\uba85"></textarea>
          </div>
          <div>
            <label>\uc378\ub124\uc77c \uc0c9\uc0c1</label>
            <select id="f-color">
              <option value="work-thumb--warm">Warm (\uac08\uc0c9)</option>
              <option value="work-thumb--light">Light (\ubc1d\uc740 \ubca0\uc774\uc9c0)</option>
              <option value="work-thumb--cream">Cream (\ud06c\ub9bc)</option>
              <option value="work-thumb--charcoal">Charcoal (\uc5b4\ub450\uc6b4 \ud68c\uc0c9)</option>
              <option value="work-thumb--soft">Soft (\uc18c\ud504\ud2b8 \ubca0\uc774\uc9c0)</option>
              <option value="work-thumb--navy">Navy (\ub124\uc774\ube44)</option>
              <option value="work-thumb--blue">Blue (\ube14\ub8e8)</option>
              <option value="work-thumb--sky">Sky (\ud558\ub298)</option>
              <option value="work-thumb--mint">Mint (\ubbfc\ud2b8)</option>
            </select>
          </div>
          <div class="admin-form-full">
            <label>\uc774\ubbf8\uc9c0 / PDF \uc5c5\ub85c\ub4dc</label>
            <div class="admin-upload-zone" id="upload-zone">
              <p>\ud074\ub9ad\ud558\uac70\ub098 \ud30c\uc77c\uc744 \ub4dc\ub798\uadf8\ud558\uc138\uc694</p>
              <small>\uc774\ubbf8\uc9c0(JPG, PNG, GIF, WEBP) \ubc0f PDF \uc9c0\uc6d0 \u00b7 \uc5ec\ub7ec \ud30c\uc77c \uac00\ub2a5</small>
            </div>
            <input type="file" id="file-input" accept="image/*,.pdf" multiple style="display:none">
            <div class="upload-preview" id="upload-preview" style="margin-top:10px"></div>
          </div>
        </div>
        <p class="admin-success" id="save-success" style="display:none">\uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4!</p>
        <div class="admin-actions">
          <button class="btn" id="back-btn">\u2190 \ubaa9\ub85d</button>
          <button class="btn btn--primary" id="save-btn">\uc800\uc7a5</button>
        </div>
      </div>

    </div>
  </div>
</div>
'''

# Replace lines 517 to 611 (0-indexed: 516 to 610 inclusive)
new_lines = lines[:516] + [new_block] + lines[611:]
with open('/home/claude/PORTFOLIO_2026_UIUX/index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print("done, total lines:", len(new_lines))
PYEOF