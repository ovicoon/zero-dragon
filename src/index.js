export default {
  async fetch(request) {
    return new Response(PAGE, {
      headers: { "content-type": "text/html;charset=UTF-8" }
    });
  }
}

const PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>ZERO DRAGON</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg: #000;
      --card: #0f0f0f;
      --border: #242424;
      --text: #fff;
      --sub: #8f8f8f;
    }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'DM Sans', system-ui, sans-serif;
      overflow-x: hidden;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
      z-index: -1;
    }
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 80px 24px 120px 24px;
    }
    .logo {
      width: min(220px, 55vw);
      margin-bottom: 32px;
      opacity: 0;
      transform: translateY(20px) scale(.95);
      animation: logoEnter 1s ease forwards;
    }
    @keyframes logoEnter {
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    h1 {
      font-family: 'Space Mono', monospace;
      font-size: clamp(36px, 9vw, 88px);
      font-weight: 700;
      letter-spacing: .1em;
      margin-bottom: 18px;
    }
    .subtitle {
      color: var(--sub);
      font-size: clamp(13px, 2vw, 17px);
      letter-spacing: .14em;
      margin-bottom: 48px;
      line-height: 1.6;
    }
    .btn {
      border: 1px solid var(--border);
      color: #fff;
      text-decoration: none;
      padding: 14px 28px;
      font-size: 13px;
      font-family: 'Space Mono', monospace;
      letter-spacing: .08em;
      transition: transform .2s, border-color .2s, background .2s;
    }
    .btn:hover {
      transform: translateY(-2px);
      border-color: #666;
      background: rgba(255,255,255,.03);
    }
    #members { 
      padding: 160px min(10vw, 120px) 160px min(10vw, 120px); 
    }
    .section-title {
      font-family: 'Space Mono', monospace;
      font-size: clamp(28px, 5vw, 44px);
      margin-bottom: 20px;
      letter-spacing: .04em;
    }
    .section-desc {
      color: var(--sub);
      max-width: 700px;
      line-height: 1.8;
      font-size: clamp(14px, 2vw, 16px);
      margin-bottom: 60px;
    }
    .members-arena {
      position: relative;
      width: 100%;
      height: 420px;
      border: 1px solid var(--border);
      border-bottom: none;
      overflow: hidden;
      background: #050505;
    }
    .members-arena::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,.015) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.015) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
    }
    .member-chip {
      position: absolute;
      cursor: pointer;
      user-select: none;
      z-index: 2;
    }
    .chip-inner {
      border: 1px solid #333;
      background: #0a0a0a;
      padding: 10px 20px;
      font-family: 'Space Mono', monospace;
      font-size: clamp(12px, 2vw, 14px);
      color: #fff;
      white-space: nowrap;
      transition: border-color .25s, background .25s;
    }
    .member-chip.is-hovered .chip-inner,
    .member-chip.active .chip-inner {
      border-color: #fff;
      background: #111;
    }
    .members-display {
      width: 100%;
      min-height: 150px;
      border: 1px solid var(--border);
      background: #0a0a0a;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    .chip-info-placeholder {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: #777;
      text-align: center;
      letter-spacing: .15em;
    }
    html[lang="ko"] .chip-info-placeholder {
      font-family: system-ui, sans-serif;
      font-weight: 400;
    }
    .chip-info-box {
      animation: fadeIn 0.3s ease forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .chip-info-label {
      font-size: 11px;
      color: #666;
      letter-spacing: .08em;
      margin-bottom: 6px;
    }
    html[lang="en"] .chip-info-label {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: .14em;
    }
    .chip-info-name { 
      font-size: 22px; 
      font-weight: 600; 
      margin-bottom: 8px; 
      font-family: 'Space Mono', monospace;
    }
    .chip-info-role { color: var(--sub); font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
    .chip-info-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: #8f8f8f;
      text-decoration: none;
      border: 1px solid #242424;
      padding: 6px 12px;
      align-self: flex-start;
      transition: border-color .2s, color .2s;
    }
    .chip-info-link:hover { border-color: #666; color: #fff; }
    .arena-hint {
      position: absolute;
      bottom: 16px;
      right: 20px;
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: #666;
      letter-spacing: .1em;
      pointer-events: none;
    }
    html[lang="ko"] .arena-hint {
      font-family: system-ui, sans-serif;
      font-weight: 400;
    }
    footer {
      border-top: 1px solid var(--border);
      padding: 60px 24px;
      text-align: center;
      color: #777;
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      letter-spacing: .08em;
    }
    @media (max-width: 768px) {
      .hero { padding: 60px 20px 80px 20px; min-height: 80vh; }
      #members { padding: 80px 20px 100px 20px; }
      .members-arena { height: 340px; }
      .members-display { padding: 20px; min-height: 160px; }
    }
  </style>
</head>
<body>
  <section class="hero">
    <img src="/logo.png" alt="Zero Dragon Logo" class="logo"/>
    <h1>ZERO DRAGON</h1>
    <p class="subtitle" data-i18n="subtitle"></p>
    <div class="buttons">
      <a href="#members" class="btn" data-i18n="btn_members"></a>
    </div>
  </section>
  <section id="members">
    <h2 class="section-title" data-i18n="members_title"></h2>
    <p class="section-desc" data-i18n="members_desc"></p>
    <div class="members-arena" id="arena">
      <span class="arena-hint" id="arena-hint"></span>
    </div>
    <div class="members-display" id="display-card">
      <div class="chip-info-placeholder" id="placeholder-text"></div>
    </div>
  </section>
  <footer data-i18n="footer"></footer>
  <script>
    var T = {
      ko: {
        subtitle: 'Zero drag to passion.',
        btn_members: '멤버 소개',
        members_title: '멤버',
        members_desc: 'ZERO DRAGON을 이끄는 사람들입니다.',
        hint_desktop: '이름 위에 마우스를 올리면 상세 정보가 표시됩니다',
        hint_mobile: '이름을 터치하면 상세 정보가 표시됩니다',
        placeholder: '멤버를 선택하면 이곳에 상세 정보가 나타납니다',
        footer: 'ZERO DRAGON — Since 2025'
      },
      en: {
        subtitle: 'Zero drag to passion.',
        btn_members: 'MEMBERS',
        members_title: 'Members',
        members_desc: 'The people behind Zero Dragon.',
        hint_desktop: 'HOVER CHIP TO SELECT',
        hint_mobile: 'TAP CHIP TO SELECT',
        placeholder: 'SELECT A MEMBER TO VIEW DETAILS',
        footer: 'ZERO DRAGON — Since 2025'
      }
    };
    var MEMBERS = [
      {
        handle: 'ovicoon',
        role: { ko: '설립자 · 개발자', en: 'Founder · Developer' },
        desc: { ko: 'ZERO DRAGON을 처음 세운 사람.', en: 'The one who founded Zero Dragon.' },
        github: 'github.com/ovicoon',
        githubUrl: 'https://github.com/ovicoon'
      },
      {
        handle: '___junnn.12',
        role: { ko: '크루 멤버', en: 'Crew Member' },
        desc: { ko: 'ZERO DRAGON 크루 멤버.', en: 'Zero Dragon crew member.' },
        github: null, githubUrl: null
      },
      {
        handle: 'kkolttugi',
        role: { ko: '크루 멤버', en: 'Crew Member' },
        desc: { ko: 'ZERO DRAGON 크루 멤버.', en: 'Zero Dragon crew member.' },
        github: null, githubUrl: null
      },
      {
        handle: 'heo_won12',
        role: { ko: '크루 멤버', en: 'Crew Member' },
        desc: { ko: 'ZERO DRAGON 크루 멤버.', en: 'Zero Dragon crew member.' },
        github: null, githubUrl: null
      }
    ];
    var lang = navigator.language.startsWith('ko') ? 'ko' : 'en';
    var t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    var arena = document.getElementById('arena');
    var displayCard = document.getElementById('display-card');
    var placeholder = document.getElementById('placeholder-text');
    var isMobile = function() { return window.matchMedia('(hover: none)').matches; };
    placeholder.textContent = t.placeholder;
    document.getElementById('arena-hint').textContent = isMobile() ? t.hint_mobile : t.hint_desktop;
    var states = [];
    var currentActiveId = null;
    function updateDisplayCard(memberData) {
      if (!memberData) {
        displayCard.innerHTML = '<div class="chip-info-placeholder">' + t.placeholder + '</div>';
        currentActiveId = null;
        return;
      }
      var desc = memberData.desc ? memberData.desc[lang] : '';
      var githubLink = memberData.github
        ? '<a class="chip-info-link" href="' + memberData.githubUrl + '" target="_blank" rel="noopener"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0; margin-right:6px;"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12 c0-5.523-4.477-10-10-10z"/></svg>' + memberData.github + '</a>'
        : '';
      displayCard.innerHTML =
        '<div class="chip-info-box">' +
          '<div class="chip-info-label">' + memberData.role[lang] + '</div>' +
          '<div class="chip-info-name">' + memberData.handle + '</div>' +
          (desc ? '<div class="chip-info-role">' + desc + '</div>' : '') +
          githubLink +
        '</div>';
    }
    MEMBERS.forEach(function(m, idx) {
      var el = document.createElement('div');
      el.className = 'member-chip';
      el.innerHTML = '<div class="chip-inner">' + m.handle + '</div>';
      arena.appendChild(el);
      var aW = arena.offsetWidth, aH = arena.offsetHeight;
      var mg = 20, angle = Math.random() * Math.PI * 2, spd = 0.45 + Math.random() * 0.4;
      var state = {
        id: idx, data: m, el: el,
        x: mg + Math.random() * (aW - 160 - mg * 2),
        y: mg + Math.random() * (aH - 44 - mg * 2),
        vx: Math.cos(angle) * spd, vy: Math.sin(angle) * spd,
        paused: false, perturbTimer: 0, perturbInterval: 80 + Math.random() * 120
      };
      states.push(state);
      el.style.left = state.x + 'px'; el.style.top = state.y + 'px';
      el.addEventListener('mouseenter', function() {
        if (isMobile()) return;
        states.forEach(function(s) { s.el.classList.remove('is-hovered'); s.paused = false; });
        state.paused = true;
        el.classList.add('is-hovered');
        updateDisplayCard(m);
      });
      el.addEventListener('click', function(e) {
        e.stopPropagation();
        var isAlreadyActive = el.classList.contains('active');
        states.forEach(function(s) { s.el.classList.remove('active', 'is-hovered'); s.paused = false; });
        if (!isAlreadyActive) {
          state.paused = true; el.classList.add('active'); updateDisplayCard(m);
        } else {
          updateDisplayCard(null);
        }
      });
    });
    arena.addEventListener('click', function() {
      states.forEach(function(s) { s.el.classList.remove('active', 'is-hovered'); s.paused = false; });
      updateDisplayCard(null);
    });
    var lastTime = null;
    function tick(ts) {
      if (!lastTime) lastTime = ts;
      var dt = Math.min((ts - lastTime) / 16.67, 3); lastTime = ts;
      var aW = arena.offsetWidth, aH = arena.offsetHeight;
      states.forEach(function(s) {
        if (s.paused) return;
        var cw = s.el.offsetWidth || 140, ch = s.el.offsetHeight || 44;
        s.perturbTimer += dt;
        if (s.perturbTimer >= s.perturbInterval) {
          s.perturbTimer = 0; s.perturbInterval = 80 + Math.random() * 120;
          var kick = 0.22; s.vx += (Math.random() - 0.5) * kick; s.vy += (Math.random() - 0.5) * kick;
          var spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy), MAX = 1.0, MIN = 0.25;
          if (spd > MAX) { s.vx = s.vx / spd * MAX; s.vy = s.vy / spd * MAX; }
          if (spd < MIN) { s.vx = s.vx / spd * MIN; s.vy = s.vy / spd * MIN; }
        }
        s.x += s.vx * dt; s.y += s.vy * dt;
        if (s.x < 0) { s.x = 0; s.vx = Math.abs(s.vx); }
        if (s.x + cw > aW) { s.x = aW - cw; s.vx = -Math.abs(s.vx); }
        if (s.y < 0) { s.y = 0; s.vy = Math.abs(s.vy); }
        if (s.y + ch > aH) { s.y = aH - ch; s.vy = -Math.abs(s.vy); }
        s.el.style.left = s.x + 'px'; s.el.style.top = s.y + 'px';
      });
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  </script>
</body>
</html>`;