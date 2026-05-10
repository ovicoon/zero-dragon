export default {
  async fetch(request) {

    return new Response(`
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ZERO DRAGON</title>
  <meta name="description" content="Zero drag to passion." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;600&display=swap" rel="stylesheet">

  <style>

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg: #000000;
      --card: #0f0f0f;
      --border: #242424;
      --text: #ffffff;
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
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
      z-index: -1;
    }

    /* ─── HERO ─── */

    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 80px 24px;
    }

    .logo {
      width: min(220px, 55vw);
      margin-bottom: 32px;
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      animation: logoEnter 1s ease forwards;
    }

    @keyframes logoEnter {
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    h1 {
      font-family: 'Space Mono', monospace;
      font-size: clamp(36px, 9vw, 88px);
      font-weight: 700;
      letter-spacing: 0.1em;
      margin-bottom: 18px;
    }

    .subtitle {
      color: var(--sub);
      font-size: clamp(13px, 2vw, 17px);
      letter-spacing: 0.14em;
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
      color: white;
      text-decoration: none;
      padding: 14px 28px;
      font-size: 13px;
      font-family: 'Space Mono', monospace;
      letter-spacing: 0.08em;
      transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      border-color: #666;
      background: rgba(255,255,255,0.03);
    }

    /* ─── SECTION ─── */

    .section {
      padding: 120px min(10vw, 120px);
    }

    .section-title {
      font-family: 'Space Mono', monospace;
      font-size: clamp(28px, 5vw, 44px);
      margin-bottom: 20px;
      letter-spacing: 0.04em;
    }

    .section-desc {
      color: var(--sub);
      max-width: 700px;
      line-height: 1.8;
      font-size: clamp(14px, 2vw, 16px);
    }

    /* ─── CARDS ─── */

    .card-grid {
      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      padding: 32px;
      transition: transform 0.25s ease, border-color 0.25s ease;
    }

    .card:hover {
      transform: perspective(1000px) rotateX(4deg) rotateY(-4deg) translateY(-6px);
      border-color: #555;
    }

    .card-label {
      color: #777;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.14em;
      margin-bottom: 14px;
    }

    .card-title {
      font-size: 26px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .card-text {
      color: var(--sub);
      line-height: 1.7;
      font-size: 14px;
    }

    /* ─── MEMBERS SECTION ─── */

    #members {
      padding: 120px min(10vw, 120px);
    }

    .members-arena {
      margin-top: 60px;
      position: relative;
      width: 100%;
      height: 420px;
      border: 1px solid var(--border);
      overflow: hidden;
      background: #050505;
    }

    .members-arena::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
    }

    /* floating name chip */

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
      font-size: clamp(13px, 2vw, 15px);
      color: #fff;
      white-space: nowrap;
      transition:
        border-color 0.3s ease,
        background 0.3s ease,
        opacity 0.3s ease,
        transform 0.3s ease;
    }

    .member-chip:hover .chip-inner,
    .member-chip.active .chip-inner {
      border-color: #888;
      background: #111;
    }

    /* expanded info panel */

    .chip-info {
      position: absolute;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%) translateY(4px);
      min-width: 220px;
      background: #0f0f0f;
      border: 1px solid #333;
      padding: 20px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.25s ease, transform 0.25s ease;
      z-index: 10;
    }

    .member-chip:hover .chip-info,
    .member-chip.active .chip-info {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
      pointer-events: auto;
    }

    .chip-info-label {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: #555;
      letter-spacing: 0.14em;
      margin-bottom: 8px;
    }

    .chip-info-name {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    .chip-info-role {
      color: var(--sub);
      font-size: 13px;
      line-height: 1.6;
      margin-bottom: 12px;
    }

    .chip-info-dept {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: #555;
      letter-spacing: 0.1em;
      margin-bottom: 14px;
    }

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
      transition: border-color 0.2s, color 0.2s;
    }

    .chip-info-link:hover {
      border-color: #666;
      color: #fff;
    }

    /* hint text in arena */

    .arena-hint {
      position: absolute;
      bottom: 16px;
      right: 20px;
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: #333;
      letter-spacing: 0.1em;
      pointer-events: none;
    }

    /* ─── FOOTER ─── */

    footer {
      border-top: 1px solid var(--border);
      padding: 40px 24px;
      text-align: center;
      color: #444;
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      letter-spacing: 0.08em;
    }

    /* ─── MOBILE ─── */

    @media (max-width: 768px) {

      .hero { padding: 60px 20px; }
      .logo { width: 160px; }
      .buttons { width: 100%; flex-direction: column; }
      .btn { width: 100%; text-align: center; }
      .section { padding: 80px 20px; }
      #members { padding: 80px 20px; }
      .card { padding: 24px; }
      .card-title { font-size: 22px; }
      .members-arena { height: 360px; }
      .chip-info { min-width: 180px; }

    }

  </style>

</head>

<body>

  <!-- HERO -->

  <section class="hero">

    <img src="/logo.png" alt="Zero Dragon Logo" class="logo" />

    <h1>ZERO DRAGON</h1>

    <p class="subtitle">Zero drag to passion.</p>

    <div class="buttons">
      <a href="#about" class="btn">ABOUT</a>
      <a href="#projects" class="btn">PROJECTS</a>
      <a href="#members" class="btn">MEMBERS</a>
    </div>

  </section>

  <!-- ABOUT -->

  <section class="section" id="about">

    <h2 class="section-title">About</h2>

    <p class="section-desc">
      Zero Dragon is a multidisciplinary team
      focused on research, creativity,
      open-source contribution,
      and meaningful digital experiences.
    </p>

    <div class="card-grid">

      <div class="card">
        <div class="card-label">DEPARTMENT</div>
        <div class="card-title">ZDR</div>
        <div class="card-text">Academic and research-oriented projects.</div>
      </div>

      <div class="card">
        <div class="card-label">DEPARTMENT</div>
        <div class="card-title">ZeroMind</div>
        <div class="card-text">AI research and development.</div>
      </div>

    </div>

  </section>

  <!-- PROJECTS -->

  <section class="section" id="projects">

    <h2 class="section-title">Projects</h2>

    <p class="section-desc">
      From game development to AI experimentation,
      Zero Dragon explores a wide range of ideas and technologies.
    </p>

    <div class="card-grid">

      <div class="card">
        <div class="card-label">ACTIVE</div>
        <div class="card-title">Mission Archive</div>
        <div class="card-text">Mission patches and project history.</div>
      </div>

      <div class="card">
        <div class="card-label">RESEARCH</div>
        <div class="card-title">AI Systems</div>
        <div class="card-text">Experimental AI and automation projects.</div>
      </div>

      <div class="card">
        <div class="card-label">OPEN SOURCE</div>
        <div class="card-title">Community</div>
        <div class="card-text">Contributing through open collaboration.</div>
      </div>

    </div>

  </section>

  <!-- MEMBERS -->

  <section id="members">

    <h2 class="section-title">Members</h2>

    <p class="section-desc">
      The people behind Zero Dragon.
    </p>

    <div class="members-arena" id="arena">

      <!-- chips injected by JS -->

      <span class="arena-hint">HOVER TO REVEAL</span>

    </div>

  </section>

  <!-- FOOTER -->

  <footer>
    ZERO DRAGON — Since 2025
  </footer>

  <script>

    const MEMBERS = [
      {
        handle: 'ovicoon',
        role: 'Founder · Developer',
        dept: 'ZEROMIND · ZDR',
        desc: 'Zero Dragon을 처음 세운 사람.',
        github: 'github.com/ovicoon',
        githubUrl: 'https://github.com/ovicoon',
      },
      {
        handle: '___junnn.12',
        role: 'Member',
        dept: 'ZDR',
        desc: null,
        github: null,
        githubUrl: null,
      },
      {
        handle: 'kkolttugi',
        role: 'Member',
        dept: 'ZDR',
        desc: null,
        github: null,
        githubUrl: null,
      },
    ];

    const GH_ICON = \`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>\`;

    const arena = document.getElementById('arena');
    const isMobile = () => window.matchMedia('(hover: none)').matches;

    // Build chip HTML
    function makeChipHTML(m) {
      const infoRows = [];
      if (m.desc) infoRows.push(\`<div class="chip-info-role">\${m.desc}</div>\`);
      infoRows.push(\`<div class="chip-info-dept">\${m.dept}</div>\`);
      if (m.github) {
        infoRows.push(\`<a class="chip-info-link" href="\${m.githubUrl}" target="_blank">\${GH_ICON}\${m.github}</a>\`);
      }

      return \`
        <div class="chip-inner">\${m.handle}</div>
        <div class="chip-info">
          <div class="chip-info-label">\${m.role}</div>
          <div class="chip-info-name">\${m.handle}</div>
          \${infoRows.join('')}
        </div>
      \`;
    }

    // Brownian motion state per chip
    const states = [];

    function initChip(m, index) {
      const el = document.createElement('div');
      el.className = 'member-chip';
      el.innerHTML = makeChipHTML(m);
      arena.appendChild(el);

      // Random start position (keep away from edges)
      const rect = arena.getBoundingClientRect();
      const W = arena.offsetWidth;
      const H = arena.offsetHeight;
      const cw = el.offsetWidth || 140;
      const ch = el.offsetHeight || 44;

      const margin = 20;
      const startX = margin + Math.random() * (W - cw - margin * 2);
      const startY = margin + Math.random() * (H - ch - margin * 2);

      // Random velocity (pixels per frame, ~60fps)
      const speed = 0.55 + Math.random() * 0.45;
      const angle = Math.random() * Math.PI * 2;

      const state = {
        el,
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        paused: false,
        // Brownian perturbation timer
        perturbTimer: 0,
        perturbInterval: 60 + Math.random() * 120,
      };

      states.push(state);

      el.style.left = state.x + 'px';
      el.style.top  = state.y + 'px';

      // Desktop: hover
      el.addEventListener('mouseenter', () => { state.paused = true; });
      el.addEventListener('mouseleave', () => {
        // don't unpause if it's also toggled active (mobile fallback)
        if (!el.classList.contains('active')) state.paused = false;
      });

      // Mobile / touch: toggle active
      el.addEventListener('click', (e) => {
        if (!isMobile()) return;
        e.stopPropagation();
        const isActive = el.classList.toggle('active');
        state.paused = isActive;
        // close others
        states.forEach(s => {
          if (s.el !== el) {
            s.el.classList.remove('active');
            s.paused = false;
          }
        });
      });

      return state;
    }

    // Close active chips when clicking arena background (mobile)
    arena.addEventListener('click', () => {
      if (!isMobile()) return;
      states.forEach(s => {
        s.el.classList.remove('active');
        s.paused = false;
      });
    });

    MEMBERS.forEach((m, i) => initChip(m, i));

    // Animation loop
    let lastTime = null;

    function tick(ts) {
      if (!lastTime) lastTime = ts;
      const dt = Math.min((ts - lastTime) / 16.67, 3); // normalize to 60fps frames
      lastTime = ts;

      const W = arena.offsetWidth;
      const H = arena.offsetHeight;

      states.forEach(state => {
        if (state.paused) return;

        const cw = state.el.offsetWidth;
        const ch = state.el.offsetHeight;

        // Brownian kick: random direction nudge every N frames
        state.perturbTimer += dt;
        if (state.perturbTimer >= state.perturbInterval) {
          state.perturbTimer = 0;
          state.perturbInterval = 60 + Math.random() * 120;
          // add small random velocity delta
          const kick = 0.3;
          state.vx += (Math.random() - 0.5) * kick;
          state.vy += (Math.random() - 0.5) * kick;
          // clamp speed
          const spd = Math.sqrt(state.vx * state.vx + state.vy * state.vy);
          const maxSpd = 1.2;
          if (spd > maxSpd) {
            state.vx = (state.vx / spd) * maxSpd;
            state.vy = (state.vy / spd) * maxSpd;
          }
          // ensure minimum speed
          const minSpd = 0.3;
          if (spd < minSpd && spd > 0) {
            state.vx = (state.vx / spd) * minSpd;
            state.vy = (state.vy / spd) * minSpd;
          }
        }

        state.x += state.vx * dt;
        state.y += state.vy * dt;

        // Bounce off walls
        if (state.x < 0) {
          state.x = 0;
          state.vx = Math.abs(state.vx);
        } else if (state.x + cw > W) {
          state.x = W - cw;
          state.vx = -Math.abs(state.vx);
        }

        if (state.y < 0) {
          state.y = 0;
          state.vy = Math.abs(state.vy);
        } else if (state.y + ch > H) {
          state.y = H - ch;
          state.vy = -Math.abs(state.vy);
        }

        state.el.style.left = state.x + 'px';
        state.el.style.top  = state.y + 'px';
      });

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

  </script>

</body>
</html>
    `, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });

  }
}