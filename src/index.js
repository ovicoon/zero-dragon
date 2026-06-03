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

    /* HERO */

    .hero {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 80px 24px 40px 24px;
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

    .buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
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

    /* SECTIONS */

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
    }

    /* MEMBERS */

    #members { padding: 40px min(10vw, 120px) 120px min(10vw, 120px); }

    .members-arena {
      margin-top: 40px;
      position: relative;
      width: 100%;
      height: 450px;
      border: 1px solid var(--border);
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
    .member-chip.active     .chip-inner {
      border-color: #888;
      background: #111;
    }

    .chip-popup {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding-top: 8px;
      min-width: 220px;
      pointer-events: none;
      opacity: 0;
      transition: opacity .2s ease;
      z-index: 20;
    }

    .member-chip.is-hovered .chip-popup,
    .member-chip.active     .chip-popup {
      opacity: 1;
      pointer-events: auto;
    }

    /* Direction variants */
    .member-chip.popup-up .chip-popup {
      top: auto;
      bottom: 100%;
      padding-top: 0;
      padding-bottom: 8px;
    }

    .member-chip.popup-clamp-left .chip-popup {
      left: 0;
      transform: none;
    }

    .member-chip.popup-clamp-right .chip-popup {
      left: auto;
      right: 0;
      transform: none;
    }

    .chip-popup-box {
      background: #0f0f0f;
      border: 1px solid #333;
      padding: 20px;
    }

    .chip-info-label {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: #555;
      letter-spacing: .14em;
      margin-bottom: 8px;
    }

    .chip-info-name   { font-size: 18px; font-weight: 600; margin-bottom: 6px; }
    .chip-info-role   { color: var(--sub); font-size: 13px; line-height: 1.6; margin-bottom: 14px; }

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
      transition: border-color .2s, color .2s;
    }

    .chip-info-link:hover { border-color: #666; color: #fff; }

    .arena-hint {
      position: absolute;
      bottom: 16px;
      right: 20px;
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: #2a2a2a;
      letter-spacing: .1em;
      pointer-events: none;
    }

    /* FOOTER */

    footer {
      border-top: 1px solid var(--border);
      padding: 40px 24px;
      text-align: center;
      color: #444;
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      letter-spacing: .08em;
    }

    /* MOBILE */

    @media (max-width: 768px) {
      .hero    { padding: 60px 20px 20px 20px; min-height: auto; }
      .logo    { width: 160px; }
      .buttons { width: 100%; flex-direction: column; }
      .btn     { width: 100%; text-align: center; }
      #members { padding: 60px 20px; }
      .members-arena  { height: 380px; }
      .chip-popup     { min-width: 180px; }
    }
  </style>
</head>
<body>

  <section class="hero">
    <img src="/logo.png" alt="Zero Dragon Logo" class="logo"/>
    <h1>ZERO DRAGON</h1>
    <p class="subtitle" data-i18n="subtitle"></p>
    <div class="buttons">
      <a href="#members"  class="btn" data-i18n="btn_members"></a>
    </div>
  </section>

  <section id="members">
    <h2 class="section-title" data-i18n="members_title"></h2>
    <p  class="section-desc"  data-i18n="members_desc"></p>
    <div class="members-arena" id="arena">
      <span class="arena-hint" id="arena-hint"></span>
    </div>
  </section>

  <footer data-i18n="footer"></footer>

  <script>
    /* ── TRANSLATIONS ── */
    var T = {
      ko: {
        subtitle:       'Zero drag to passion.',
        btn_members:    'MEMBERS',
        members_title:  'Members',
        members_desc:   'Zero Dragon을 이끄는 사람들.',
        hint_desktop:   'HOVER TO REVEAL',
        hint_mobile:    'TAP TO REVEAL',
        footer:         'ZERO DRAGON — Since 2025'
      },
      en: {
        subtitle:       'Zero drag to passion.',
        btn_members:    'MEMBERS',
        members_title:  'Members',
        members_desc:   'The people behind Zero Dragon.',
        hint_desktop:   'HOVER TO REVEAL',
        hint_mobile:    'TAP TO REVEAL',
        footer:         'ZERO DRAGON — Since 2025'
      }
    };

    /* ── MEMBER DATA (부서 정보 dept 제거) ── */
    var MEMBERS = [
      {
        handle:    'ovicoon',
        role:      { ko: 'Founder · Developer', en: 'Founder · Developer' },
        desc:      { ko: 'Zero Dragon을 처음 세운 사람.', en: 'The one who founded Zero Dragon.' },
        github:    'github.com/ovicoon',
        githubUrl: 'https://github.com/ovicoon'
      },
      {
        handle: '___junnn.12',
        role:   { ko: 'Member', en: 'Member' },
        desc:   null, github: null, githubUrl: null
      },
      {
        handle: 'kkolttugi',
        role:   { ko: 'Member', en: 'Member' },
        desc:   null, github: null, githubUrl: null
      }
    ];

    /* ── DETECT LANGUAGE & APPLY ── */
    var lang = navigator.language.startsWith('ko') ? 'ko' : 'en';
    var t    = T[lang];

    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    /* ── MEMBERS ARENA ── */
    var GH_ICON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0">'
      + '<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489'
      + '.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703'
      + '-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462'
      + '-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03'
      + '.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338'
      + '-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683'
      + '-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025'
      + 'A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336'
      + ' 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647'
      + '.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935'
      + '.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741'
      + ' 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12'
      + ' c0-5.523-4.477-10-10-10z"/></svg>';

    var arena    = document.getElementById('arena');
    var isMobile = function() { return window.matchMedia('(hover: none)').matches; };

    document.getElementById('arena-hint').textContent =
      isMobile() ? t.hint_mobile : t.hint_desktop;

    /* Compute popup direction based on chip position in arena */
    function setPopupDir(state) {
      var el    = state.el;
      var aH    = arena.offsetHeight;
      var aW    = arena.offsetWidth;
      var cw    = el.offsetWidth  || 140;
      var ch    = el.offsetHeight || 44;
      var POP_H = 140; /* Reduced because dept info is removed */
      var POP_W = 230;

      /* vertical: open above if not enough room below */
      if (state.y + ch + POP_H + 10 > aH) {
        el.classList.add('popup-up');
      } else {
        el.classList.remove('popup-up');
      }

      /* horizontal: clamp if popup would overflow arena edge */
      el.classList.remove('popup-clamp-left', 'popup-clamp-right');
      var cx = state.x + cw / 2;
      if (cx - POP_W / 2 < 8)           el.classList.add('popup-clamp-left');
      else if (cx + POP_W / 2 > aW - 8) el.classList.add('popup-clamp-right');
    }

    var states = [];

    MEMBERS.forEach(function(m) {
      var el = document.createElement('div');
      el.className = 'member-chip';

      var desc = m.desc ? m.desc[lang] : null;

      var info = '<div class="chip-info-label">' + m.role[lang] + '</div>'
               + '<div class="chip-info-name">'  + m.handle + '</div>';
      if (desc) info += '<div class="chip-info-role">' + desc + '</div>';
      if (m.github) {
        info += '<a class="chip-info-link" href="' + m.githubUrl
              + '" target="_blank" rel="noopener">' + GH_ICON + m.github + '</a>';
      }

      el.innerHTML =
          '<div class="chip-inner">' + m.handle + '</div>'
        + '<div class="chip-popup"><div class="chip-popup-box">' + info + '</div></div>';

      arena.appendChild(el);

      var aW    = arena.offsetWidth;
      var aH    = arena.offsetHeight;
      var mg    = 20;
      var angle = Math.random() * Math.PI * 2;
      var spd   = 0.45 + Math.random() * 0.4;

      var state = {
        el:              el,
        x:               mg + Math.random() * (aW - 160 - mg * 2),
        y:               mg + Math.random() * (aH -  44 - mg * 2),
        vx:              Math.cos(angle) * spd,
        vy:              Math.sin(angle) * spd,
        paused:          false,
        perturbTimer:    0,
        perturbInterval: 80 + Math.random() * 120,
        leaveTimer:      null
      };

      states.push(state);
      el.style.left = state.x + 'px';
      el.style.top  = state.y + 'px';

      var popup = el.querySelector('.chip-popup');

      function showPopup() {
        clearTimeout(state.leaveTimer);
        state.paused = true;
        el.classList.add('is-hovered');
        setPopupDir(state);
      }

      function scheduleHide() {
        state.leaveTimer = setTimeout(function() {
          if (!el.classList.contains('active')) {
            state.paused = false;
            el.classList.remove('is-hovered');
          }
        }, 220);
      }

      el.addEventListener('mouseenter',    showPopup);
      el.addEventListener('mouseleave',    scheduleHide);
      popup.addEventListener('mouseenter', function() { clearTimeout(state.leaveTimer); });
      popup.addEventListener('mouseleave', scheduleHide);

      /* mobile: tap to toggle */
      el.addEventListener('click', function(e) {
        if (!isMobile()) return;
        e.stopPropagation();
        var on = el.classList.toggle('active');
        state.paused = on;
        if (on) setPopupDir(state);
        /* close others */
        states.forEach(function(s) {
          if (s.el !== el) { s.el.classList.remove('active'); s.paused = false; }
        });
      });
    });

    /* tap arena background to close all (mobile) */
    arena.addEventListener('click', function() {
      if (!isMobile()) return;
      states.forEach(function(s) { s.el.classList.remove('active'); s.paused = false; });
    });

    /* ── BROWNIAN ANIMATION LOOP ── */
    var lastTime = null;

    function tick(ts) {
      if (!lastTime) lastTime = ts;
      var dt = Math.min((ts - lastTime) / 16.67, 3);
      lastTime = ts;

      var aW = arena.offsetWidth;
      var aH = arena.offsetHeight;

      states.forEach(function(s) {
        if (s.paused) return;

        var cw = s.el.offsetWidth  || 140;
        var ch = s.el.offsetHeight || 44;

        s.perturbTimer += dt;
        if (s.perturbTimer >= s.perturbInterval) {
          s.perturbTimer    = 0;
          s.perturbInterval = 80 + Math.random() * 120;
          var kick = 0.22;
          s.vx += (Math.random() - 0.5) * kick;
          s.vy += (Math.random() - 0.5) * kick;
          var spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
          var MAX = 1.0, MIN = 0.25;
          if (spd > MAX && spd > 0)        { s.vx = s.vx / spd * MAX; s.vy = s.vy / spd * MAX; }
          if (spd < MIN && spd > 0.001)    { s.vx = s.vx / spd * MIN; s.vy = s.vy / spd * MIN; }
        }

        s.x += s.vx * dt;
        s.y += s.vy * dt;

        /* 실시간 윈도우 반응형 충돌 체크 반영 */
        if (s.x < 0)       { s.x = 0;       s.vx =  Math.abs(s.vx); }
        if (s.x + cw > aW) { s.x = aW - cw; s.vx = -Math.abs(s.vx); }
        if (s.y < 0)       { s.y = 0;       s.vy =  Math.abs(s.vy); }
        if (s.y + ch > aH) { s.y = aH - ch; s.vy = -Math.abs(s.vy); }

        s.el.style.left = s.x + 'px';
        s.el.style.top  = s.y + 'px';
      });

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  </script>
</body>
</html>`;