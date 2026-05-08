export default {
  async fetch(request) {

    return new Response(`
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>ZERO DRAGON</title>

  <meta
    name="description"
    content="Zero resistance to passion."
  />

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

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--bg);
      color: var(--text);

      font-family:
        Inter,
        system-ui,
        sans-serif;

      overflow-x: hidden;
    }

    /* background grid */

    body::before {
      content: "";

      position: fixed;
      inset: 0;

      background-image:
        linear-gradient(
          rgba(255,255,255,0.03) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(255,255,255,0.03) 1px,
          transparent 1px
        );

      background-size: 40px 40px;

      pointer-events: none;

      z-index: -1;
    }

    /* hero */

    .hero {
      min-height: 100vh;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;

      padding:
        80px
        24px;
    }

    .logo {
      width: min(220px, 55vw);

      margin-bottom: 32px;

      opacity: 0;

      transform:
        translateY(20px)
        scale(0.95);

      animation:
        logoEnter 1s ease forwards;
    }

    @keyframes logoEnter {
      to {
        opacity: 1;

        transform:
          translateY(0)
          scale(1);
      }
    }

    h1 {
      font-size:
        clamp(42px, 10vw, 96px);

      font-weight: 800;

      letter-spacing: 0.12em;

      margin-bottom: 18px;
    }

    .subtitle {
      color: var(--sub);

      font-size:
        clamp(14px, 2vw, 18px);

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
      border:
        1px solid var(--border);

      color: white;

      text-decoration: none;

      padding:
        14px
        28px;

      font-size: 14px;

      letter-spacing: 0.08em;

      transition:
        transform 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease;
    }

    .btn:hover {
      transform: translateY(-2px);

      border-color: #666;

      background:
        rgba(255,255,255,0.03);
    }

    /* section */

    .section {
      padding:
        120px
        min(10vw, 120px);
    }

    .section-title {
      font-size:
        clamp(32px, 6vw, 48px);

      margin-bottom: 20px;
    }

    .section-desc {
      color: var(--sub);

      max-width: 700px;

      line-height: 1.8;

      font-size:
        clamp(15px, 2vw, 17px);
    }

    /* cards */

    .card-grid {
      margin-top: 60px;

      display: grid;

      grid-template-columns:
        repeat(
          auto-fit,
          minmax(260px, 1fr)
        );

      gap: 24px;
    }

    .card {
      background: var(--card);

      border:
        1px solid var(--border);

      padding: 32px;

      transition:
        transform 0.25s ease,
        border-color 0.25s ease;
    }

    .card:hover {
      transform:
        perspective(1000px)
        rotateX(4deg)
        rotateY(-4deg)
        translateY(-6px);

      border-color: #555;
    }

    .card-label {
      color: #777;

      font-size: 12px;

      letter-spacing: 0.14em;

      margin-bottom: 14px;
    }

    .card-title {
      font-size: 28px;

      font-weight: 700;

      margin-bottom: 16px;
    }

    .card-text {
      color: var(--sub);

      line-height: 1.7;
    }

    footer {
      border-top:
        1px solid var(--border);

      padding:
        40px
        24px;

      text-align: center;

      color: #666;

      font-size: 14px;
    }

    /* mobile */

    @media (max-width: 768px) {

      .hero {
        padding:
          60px
          20px;
      }

      .logo {
        width: 160px;
      }

      .buttons {
        width: 100%;

        flex-direction: column;
      }

      .btn {
        width: 100%;
      }

      .section {
        padding:
          80px
          20px;
      }

      .card {
        padding: 24px;
      }

      .card-title {
        font-size: 24px;
      }

    }

  </style>

</head>

<body>

  <section class="hero">

    <img
      src="/logo.png"
      alt="Zero Dragon Logo"
      class="logo"
    />

    <h1>ZERO DRAGON</h1>

    <p class="subtitle">
      Zero resistance to passion.
    </p>

    <div class="buttons">

      <a href="#about" class="btn">
        ABOUT
      </a>

      <a href="#projects" class="btn">
        PROJECTS
      </a>

    </div>

  </section>

  <section class="section" id="about">

    <h2 class="section-title">
      About
    </h2>

    <p class="section-desc">
      Zero Dragon is a multidisciplinary team
      focused on research, creativity,
      open-source contribution,
      and meaningful digital experiences.
    </p>

    <div class="card-grid">

      <div class="card">

        <div class="card-label">
          DEPARTMENT
        </div>

        <div class="card-title">
          ZDR
        </div>

        <div class="card-text">
          Academic and research-oriented projects.
        </div>

      </div>

      <div class="card">

        <div class="card-label">
          DEPARTMENT
        </div>

        <div class="card-title">
          ZeroMind
        </div>

        <div class="card-text">
          AI research and development.
        </div>

      </div>

    </div>

  </section>

  <section class="section" id="projects">

    <h2 class="section-title">
      Projects
    </h2>

    <p class="section-desc">
      From game development to AI experimentation,
      Zero Dragon explores a wide range
      of ideas and technologies.
    </p>

    <div class="card-grid">

      <div class="card">

        <div class="card-label">
          ACTIVE
        </div>

        <div class="card-title">
          Mission Archive
        </div>

        <div class="card-text">
          Mission patches and project history.
        </div>

      </div>

      <div class="card">

        <div class="card-label">
          RESEARCH
        </div>

        <div class="card-title">
          AI Systems
        </div>

        <div class="card-text">
          Experimental AI and automation projects.
        </div>

      </div>

      <div class="card">

        <div class="card-label">
          OPEN SOURCE
        </div>

        <div class="card-title">
          Community
        </div>

        <div class="card-text">
          Contributing through open collaboration.
        </div>

      </div>

    </div>

  </section>

  <footer>
    ZERO DRAGON — Since 2025
  </footer>

</body>
</html>
    `, {
      headers: {
        "content-type":
          "text/html;charset=UTF-8"
      }
    });

  }
}