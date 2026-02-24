<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Delong — GitHub Profile Preview</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #050508;
    --surface: #0d0d14;
    --surface2: #13131e;
    --border: rgba(255,255,255,0.06);
    --text: #f0eeff;
    --muted: #6b6882;
    --accent1: #7c6af7;
    --accent2: #e96af7;
    --accent3: #6af7d4;
    --accent4: #f7c96a;
    --glow1: rgba(124,106,247,0.3);
    --glow2: rgba(233,106,247,0.3);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Mono', monospace;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Animated background */
  .bg-orbs {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.15;
    animation: drift 20s ease-in-out infinite alternate;
  }
  .orb1 { width: 600px; height: 600px; background: var(--accent1); top: -200px; left: -100px; animation-delay: 0s; }
  .orb2 { width: 400px; height: 400px; background: var(--accent2); top: 40%; right: -100px; animation-delay: -7s; }
  .orb3 { width: 300px; height: 300px; background: var(--accent3); bottom: 10%; left: 30%; animation-delay: -14s; }

  @keyframes drift {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(30px, 40px) scale(1.1); }
  }

  .noise {
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
    opacity: 0.4;
  }

  .container {
    max-width: 820px;
    margin: 0 auto;
    padding: 40px 24px;
    position: relative;
    z-index: 2;
  }

  /* ─── HERO ─── */
  .hero {
    padding: 60px 0 40px;
    animation: fadeUp 0.8s ease forwards;
  }

  .hero-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent3);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .hero-eyebrow::before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background: var(--accent3);
  }

  .hero-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(56px, 10vw, 96px);
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, #fff 0%, var(--accent1) 50%, var(--accent2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  .hero-sub {
    font-family: 'Instrument Serif', serif;
    font-style: italic;
    font-size: 22px;
    color: var(--muted);
    margin-bottom: 32px;
  }

  .hero-quote {
    display: inline-block;
    border-left: 2px solid var(--accent1);
    padding: 6px 0 6px 20px;
    font-size: 13px;
    color: rgba(240,238,255,0.5);
    font-style: italic;
    letter-spacing: 0.02em;
    margin-bottom: 40px;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 100px;
    border: 1px solid var(--border);
    background: var(--surface);
    font-size: 12px;
    font-family: 'DM Mono', monospace;
    color: var(--muted);
    transition: all 0.3s ease;
  }
  .tag:hover {
    border-color: var(--accent1);
    color: var(--text);
    background: rgba(124,106,247,0.1);
  }
  .tag .dot { width: 6px; height: 6px; border-radius: 50%; }

  /* ─── DIVIDER ─── */
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent1), var(--accent2), transparent);
    margin: 40px 0;
    opacity: 0.3;
  }

  /* ─── SECTION LABEL ─── */
  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 28px;
    background: linear-gradient(90deg, var(--text) 0%, rgba(240,238,255,0.6) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ─── ABOUT GRID ─── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .about-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 20px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .about-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(135deg, var(--accent1), var(--accent2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .about-card:hover::before { opacity: 0.05; }
  .about-card:hover {
    border-color: rgba(124,106,247,0.3);
    transform: translateY(-2px);
  }
  .about-card:hover .card-icon { transform: scale(1.1); }

  .card-icon {
    font-size: 24px;
    margin-bottom: 10px;
    display: block;
    transition: transform 0.3s ease;
  }

  .card-label {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 4px;
  }

  .card-value {
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
  }

  /* ─── TECH STACK ─── */
  .stack-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .stack-group-title {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 14px;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface2);
    font-size: 12px;
    font-weight: 500;
    color: var(--text);
    transition: all 0.25s ease;
    cursor: default;
    position: relative;
    overflow: hidden;
  }
  .badge::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 2px;
    background: var(--badge-color, var(--accent1));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  .badge:hover::after { transform: scaleX(1); }
  .badge:hover {
    border-color: var(--badge-color, var(--accent1));
    background: rgba(124,106,247,0.08);
    transform: translateY(-1px);
  }

  .badge-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--badge-color, var(--accent1));
    box-shadow: 0 0 8px var(--badge-color, var(--accent1));
    flex-shrink: 0;
  }

  /* ─── GOALS ─── */
  .goals-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .goal-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 18px 20px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    transition: all 0.3s ease;
  }
  .goal-item:hover {
    border-color: rgba(124,106,247,0.25);
    transform: translateX(4px);
  }

  .goal-num {
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: var(--border);
    line-height: 1;
    flex-shrink: 0;
    min-width: 32px;
  }

  .goal-content {}
  .goal-title {
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .goal-desc {
    font-size: 12px;
    color: var(--muted);
    line-height: 1.6;
  }

  /* ─── STATS ─── */
  .stats-wrapper {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 32px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .stats-wrapper::before {
    content: '';
    position: absolute;
    top: -1px; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent1), var(--accent2), transparent);
  }

  .stats-imgs {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .stats-imgs img {
    border-radius: 10px;
    max-width: 100%;
  }

  /* ─── FUN STUFF ─── */
  .fun-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 32px;
    position: relative;
    overflow: hidden;
  }

  .fun-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at top right, rgba(233,106,247,0.08) 0%, transparent 60%);
  }

  .fun-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  .fun-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }

  .fun-emoji {
    font-size: 20px;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface2);
    border-radius: 10px;
    border: 1px solid var(--border);
  }

  .fun-text {
    font-size: 13px;
    line-height: 1.6;
    color: rgba(240,238,255,0.75);
    padding-top: 6px;
  }

  .fun-text strong {
    color: var(--text);
    font-weight: 500;
  }

  /* ─── CONNECT ─── */
  .connect-grid {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .connect-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 24px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
    text-decoration: none;
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .connect-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--btn-c1), var(--btn-c2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .connect-btn:hover::before { opacity: 1; }
  .connect-btn:hover {
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.4);
  }

  .connect-btn span { position: relative; z-index: 1; }
  .connect-btn svg { position: relative; z-index: 1; }

  /* ─── FOOTER ─── */
  .footer {
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }

  .footer-text {
    font-size: 12px;
    color: var(--muted);
    letter-spacing: 0.05em;
  }

  .footer-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 11px;
    color: var(--muted);
  }

  .pulse {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent3);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(106,247,212,0.4); }
    50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(106,247,212,0); }
  }

  /* ─── ANIMATIONS ─── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .section {
    animation: fadeUp 0.7s ease forwards;
    margin-bottom: 48px;
  }

  .section:nth-child(2) { animation-delay: 0.1s; }
  .section:nth-child(3) { animation-delay: 0.2s; }
  .section:nth-child(4) { animation-delay: 0.3s; }
  .section:nth-child(5) { animation-delay: 0.4s; }
  .section:nth-child(6) { animation-delay: 0.5s; }

  /* Scanline effect on hover */
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }

  /* ─── CURSOR GLOW ─── */
  .cursor-glow {
    width: 300px;
    height: 300px;
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle, rgba(124,106,247,0.06) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: 0s;
  }

  /* Floating animation for giphy laptop */
  .float-gif {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .float-gif img {
    border-radius: 16px;
    max-width: 220px;
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  /* Typing cursor blink */
  .blink {
    animation: blink 1s step-end infinite;
    color: var(--accent1);
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @media (max-width: 600px) {
    .about-grid { grid-template-columns: 1fr; }
    .stack-grid { grid-template-columns: 1fr; }
    .hero-name { font-size: 56px; }
  }
</style>
</head>
<body>

<div class="bg-orbs">
  <div class="orb orb1"></div>
  <div class="orb orb2"></div>
  <div class="orb orb3"></div>
</div>
<div class="noise"></div>
<div class="cursor-glow" id="cursorGlow"></div>

<div class="container">

  <!-- ─── HERO ─── -->
  <div class="hero section">
    <p class="hero-eyebrow">github.com / 2343087</p>
    <h1 class="hero-name">Delong<span class="blink">_</span></h1>
    <p class="hero-sub">Mahasiswa yang nggak bisa diem.</p>
    <blockquote class="hero-quote">"Coding today, conquering the world tomorrow."</blockquote>
    <div class="hero-tags">
      <span class="tag"><span class="dot" style="background:#7c6af7;"></span>PHP Dev</span>
      <span class="tag"><span class="dot" style="background:#3776ab;"></span>Python</span>
      <span class="tag"><span class="dot" style="background:#ff2d20;"></span>Laravel</span>
      <span class="tag"><span class="dot" style="background:#61dafb;"></span>React.js</span>
      <span class="tag"><span class="dot" style="background:#6af7d4;box-shadow:0 0 6px #6af7d4;"></span>Open to collab</span>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ─── ABOUT ─── -->
  <div class="section">
    <p class="section-label">01 — About</p>
    <h2 class="section-title">Who am I?</h2>
    <div class="about-grid">
      <div class="about-card">
        <span class="card-icon">💡</span>
        <p class="card-label">Status</p>
        <p class="card-value">Mahasiswa w/ big dreams ✨</p>
      </div>
      <div class="about-card">
        <span class="card-icon">📍</span>
        <p class="card-label">Location</p>
        <p class="card-value">Samarinda, Kaltim 🇮🇩</p>
      </div>
      <div class="about-card">
        <span class="card-icon">🛠️</span>
        <p class="card-label">Tools of the Trade</p>
        <p class="card-value">PHP · Python · Laravel · React</p>
      </div>
      <div class="about-card">
        <span class="card-icon">📧</span>
        <p class="card-label">Contact</p>
        <p class="card-value" style="font-size:13px;">2343087@gmail.com</p>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ─── TECH STACK ─── -->
  <div class="section">
    <p class="section-label">02 — Tech Stack</p>
    <h2 class="section-title">What I build with.</h2>
    <div class="stack-grid">
      <div>
        <p class="stack-group-title">Languages</p>
        <div class="badges">
          <span class="badge" style="--badge-color:#777bb4">
            <span class="badge-dot"></span>PHP
          </span>
          <span class="badge" style="--badge-color:#3776ab">
            <span class="badge-dot"></span>Python
          </span>
        </div>
      </div>
      <div>
        <p class="stack-group-title">Frameworks</p>
        <div class="badges">
          <span class="badge" style="--badge-color:#ff2d20">
            <span class="badge-dot"></span>Laravel
          </span>
          <span class="badge" style="--badge-color:#61dafb">
            <span class="badge-dot"></span>React
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ─── GITHUB GOALS ─── -->
  <div class="section">
    <p class="section-label">03 — GitHub Goals</p>
    <h2 class="section-title">What I'm chasing.</h2>
    <div class="goals-list">
      <div class="goal-item">
        <span class="goal-num">01</span>
        <div class="goal-content">
          <p class="goal-title">Full-stack mastery</p>
          <p class="goal-desc">Fokus eksplorasi proyek full-stack development & menyempurnakan best practices untuk clean code yang bikin reviewer bilang "nice".</p>
        </div>
      </div>
      <div class="goal-item">
        <span class="goal-num">02</span>
        <div class="goal-content">
          <p class="goal-title">Open Source contribution</p>
          <p class="goal-desc">Aktif bantu komunitas tech untuk build sesuatu yang meaningful — karena code terbaik adalah yang dipakai banyak orang.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ─── GITHUB STATS ─── -->
  <div class="section">
    <p class="section-label">04 — GitHub Stats</p>
    <h2 class="section-title">By the numbers.</h2>
    <div class="stats-wrapper">
      <div class="stats-imgs">
        <img src="https://github-readme-stats.vercel.app/api?username=2343087&show_icons=true&hide_border=true&theme=radical&bg_color=0d0d14&ring_color=7c6af7&title_color=e96af7&icon_color=6af7d4&text_color=f0eeff" height="160" alt="GitHub Stats">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=2343087&layout=compact&theme=radical&hide_border=true&bg_color=0d0d14&title_color=e96af7&text_color=f0eeff" height="160" alt="Top Languages">
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ─── FUN STUFF ─── -->
  <div class="section">
    <p class="section-label">05 — Fun Stuff</p>
    <h2 class="section-title">Beyond the code.</h2>
    <div class="fun-card">
      <div class="fun-items">
        <div class="fun-item">
          <span class="fun-emoji">🛹</span>
          <p class="fun-text"><strong>Hobi:</strong> Tidur, ngopi, gaming, dan jadi night owl sambil dengerin lo-fi playlist. Produktif atau procrastinate? Yes.</p>
        </div>
        <div class="fun-item">
          <span class="fun-emoji">💬</span>
          <p class="fun-text"><strong>Ngobrol yuk!</strong> Saya suka ngobrolin teknologi, trending frameworks, atau bahkan hal random di kehidupan sehari-hari.</p>
        </div>
      </div>
      <div class="float-gif">
        <img src="https://media.giphy.com/media/QTfX9Ejfra3ZmNxh6B/giphy.gif" alt="Hello World GIF">
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ─── CONNECT ─── -->
  <div class="section">
    <p class="section-label">06 — Let's Connect</p>
    <h2 class="section-title">Hit me up.</h2>
    <div class="connect-grid">
      <a href="mailto:2343087@gmail.com" class="connect-btn" style="--btn-c1:#ea4335;--btn-c2:#ff7043;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <span>Gmail</span>
      </a>
      <a href="https://github.com/2343087" class="connect-btn" style="--btn-c1:#333;--btn-c2:#555;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
        <span>GitHub</span>
      </a>
    </div>
  </div>

  <!-- ─── FOOTER ─── -->
  <div class="footer">
    <p class="footer-text">© 2026 Chornelius Delon · Made with ☕ & sleepless nights</p>
    <div class="footer-badge">
      <div class="pulse"></div>
      <span>Open to opportunities</span>
    </div>
  </div>

</div>

<script>
  // Cursor glow follow
  const glow = document.getElementById('cursorGlow');
  let cx = 0, cy = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
  });

  function animateGlow() {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
</script>
</body>
</html>
