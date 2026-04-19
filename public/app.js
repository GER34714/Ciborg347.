/* ===== FUTURISTIC DESIGN SYSTEM ===== */
:root {
  /* Core Colors - Original con upgrade futurista */
  --bg-primary: #0a0b0e;
  --bg-secondary: #14151a;
  --bg-tertiary: #1a1d24;
  --bg-glass: rgba(26, 29, 36, 0.7);
  --bg-glass-light: rgba(26, 29, 36, 0.4);
  
  /* Text Colors - Manteniendo esquema original */
  --text-primary: #eef3fb;
  --text-secondary: #dce5f4;
  --text-muted: #a9b8cc;
  --text-muted2: #93a5bb;
  
  /* Accent Colors - Upgrade a neon */
  --cyan: #00d4ff;
  --cyan2: #39c7ff;
  --violet: #7d5cff;
  --magenta: #ff47d1;
  --blue: #3966ff;
  
  /* Gradients Futuristas */
  --accent-gradient: linear-gradient(135deg, var(--cyan), var(--violet), var(--magenta));
  --accent-gradient-alt: linear-gradient(45deg, var(--cyan), var(--violet));
  --hero-gradient: linear-gradient(135deg, var(--blue), var(--violet) 55%, var(--magenta));
  
  /* Glass Effects - Mejorados */
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-border-hover: rgba(0, 212, 255, 0.3);
  --glass-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
  --glass-shadow-hover: 0 12px 40px rgba(0, 212, 255, 0.2);
  --glass-backdrop: blur(20px);
  --glass-backdrop-light: blur(10px);
  
  /* Shadows - Más dramáticos */
  --shadow: 0 14px 34px rgba(31, 50, 75, 0.10);
  --shadow2: 0 22px 52px rgba(31, 50, 75, 0.14);
  --shadow3: 0 30px 72px rgba(31, 50, 75, 0.18);
  --shadow-glow: 0 0 40px rgba(0, 212, 255, 0.3);
  --shadow-glow-hover: 0 0 60px rgba(0, 212, 255, 0.5);
  
  /* Spacing - Manteniendo original */
  --radius: 24px;
  --radiusLg: 34px;
  --max: 1200px;
  --waSafe: 16px;
  
  /* Background Images - Originales */
  --heroImage: url("https://iili.io/qwy0YdB.jpg");
  --imgB: url("https://iili.io/qwyhLs1.jpg");
  --imgC: url("https://iili.io/qwykOWQ.jpg");
  
  /* 3D y Animaciones */
  --perspective: 1000px;
  --transform-3d: preserve-3d;
  --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* ===== DARK THEME ENHANCED ===== */
body.theme-dark {
  --bg-primary: #172231;
  --bg-secondary: #1b2838;
  --bg-tertiary: #213041;
  
  --text-primary: #eef3fb;
  --text-secondary: #dce5f4;
  --text-muted: #a9b8cc;
  --text-muted2: #93a5bb;
  
  --glass-border: rgba(255, 255, 255, 0.11);
  --glass-border-hover: rgba(0, 212, 255, 0.4);
  
  --shadow: 0 14px 34px rgba(0, 0, 0, 0.18);
  --shadow2: 0 22px 52px rgba(0, 0, 0, 0.24);
  --shadow3: 0 30px 72px rgba(0, 0, 0, 0.30);
  --shadow-glow: 0 0 40px rgba(0, 212, 255, 0.4);
  --shadow-glow-hover: 0 0 60px rgba(0, 212, 255, 0.6);
}

/* ===== RESET & BASE ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
  overflow-x: hidden;
}

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text-primary);
  background:
    radial-gradient(circle at 10% 10%, rgba(0, 212, 255, 0.12), transparent 24%),
    radial-gradient(circle at 88% 14%, rgba(255, 71, 209, 0.11), transparent 20%),
    radial-gradient(circle at 24% 80%, rgba(125, 92, 255, 0.10), transparent 18%),
    linear-gradient(180deg, #0a111b 0%, #101928 24%, #111c2a 58%, #0b1420 100%);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  transform-style: var(--transform-3d);
}

body.bodyLock {
  overflow: hidden;
}

body.hasDynamicBackground::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -3;
  pointer-events: none;
  background-image: var(--dynamic-bg-image);
  background-size: cover;
  background-position: center;
  opacity: 0.02;
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(5, 10, 18, 0.18), rgba(5, 10, 18, 0.38)),
    radial-gradient(circle at 50% 0%, rgba(0, 224, 255, 0.06), transparent 30%),
    radial-gradient(circle at 100% 20%, rgba(255, 71, 209, 0.05), transparent 26%);
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

.wrap {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 18px;
}

/* ===== ANIMATED BACKGROUND SYSTEM ===== */
.floating-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--cyan);
  border-radius: 50%;
  opacity: 0;
  animation: floatParticle 15s infinite;
}

@keyframes floatParticle {
  0% {
    opacity: 0;
    transform: translateY(100vh) scale(0);
  }
  10% {
    opacity: 0.4;
  transition: var(--transition-normal);
  }
  90% {
    opacity: 0.4;
  transition: var(--transition-normal);
  }
  100% {
    opacity: 0;
    transform: translateY(-100vh) scale(1);
  }
}

/* ===== FUTURISTIC TOPBAR ===== */
.topbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--bg-glass);
  backdrop-filter: var(--glass-backdrop);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--shadow);
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.topbar.scrolled {
  background: rgba(10, 11, 14, 0.95);
  backdrop-filter: var(--glass-backdrop-light);
  transform: translateY(0);
}

.topbar__inner {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  transform-style: var(--transform-3d);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  transition: var(--transition-normal);
  position: relative;
  transform-style: var(--transform-3d);
}

.brand:hover {
  transform: translateY(-2px) rotateX(2deg);
}

.brand__logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
  filter:
    drop-shadow(0 8px 16px rgba(31, 50, 75, 0.10))
    drop-shadow(0 0 10px rgba(0, 224, 255, 0.10));
  transition: var(--transition-normal);
}

.brand:hover .brand__logo {
  transform: rotate(5deg) scale(1.1);
  filter: var(--shadow-glow);
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.brand__text strong {
  font-size: 15px;
  letter-spacing: 0.3px;
  color: var(--text-primary);
  font-weight: 800;
}

.brand__text span {
  margin-top: 4px;
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 700;
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  transform-style: var(--transform-3d);
}

.nav a {
  padding: 10px 12px;
  border-radius: 12px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 800;
  transition: var(--transition-normal);
  position: relative;
  overflow: hidden;
  transform-style: var(--transform-3d);
}

.nav a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--accent-gradient);
  transition: left 0.5s ease;
  z-index: -1;
}

.nav a:hover::before {
  left: 0;
}

.nav a:hover {
  color: var(--text-primary);
  transform: translateY(-2px) rotateX(2deg);
  text-shadow: var(--shadow-glow);
}

.topbar__cta {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* ===== FUTURISTIC BUTTONS ===== */
.btn {
  appearance: none;
  border: none;
  border-radius: 16px;
  padding: 12px 16px;
  font-weight: 900;
  letter-spacing: 0.2px;
  transition: var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform-style: var(--transform-3d);
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.btn:hover::before {
  left: 100%;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn--primary {
  color: var(--text-primary);
  background: var(--hero-gradient);
  box-shadow: 0 12px 28px rgba(57, 102, 255, 0.18), 0 10px 24px rgba(255, 71, 209, 0.12);
}

.btn--primary:hover {
  transform: translateY(-3px) rotateX(5deg);
  box-shadow: var(--shadow-glow-hover);
  filter: var(--shadow-glow);
}

.btn--ghost {
  color: var(--text-primary);
  border: 1px solid var(--glass-border);
  background: color-mix(in srgb, var(--surface) 84%, transparent);
  backdrop-filter: var(--glass-backdrop);
}

.btn--ghost:hover {
  transform: translateY(-2px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
  filter: var(--shadow-glow);
}

.btn--block {
  width: 100%;
  justify-content: center;
  text-align: center;
}

.burger {
  display: none;
  width: 48px;
  height: 48px;
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  background: color-mix(in srgb, var(--surface) 86%, transparent);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.burger:hover {
  transform: scale(1.05) rotateX(2deg);
  border-color: var(--glass-border-hover);
  filter: var(--shadow-glow);
}

.burger span {
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 999px;
  transition: var(--transition-normal);
}

.burger:hover span {
  background: var(--cyan);
}

.mobileMenu {
  display: none;
  padding: 0 18px 16px;
}

.mobileMenu.isOpen {
  display: grid;
  gap: 10px;
  animation: slideDown var(--transition-normal);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px) rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

.mobileMenu a,
.mobileMenu button {
  padding: 12px 14px;
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  background: color-mix(in srgb, var(--surface) 90%, transparent);
  color: var(--text-primary);
  font-weight: 800;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.mobileMenu a:hover,
.mobileMenu button:hover {
  transform: translateX(5px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  filter: var(--shadow-glow);
}

/* ===== FUTURISTIC HERO ===== */
.hero {
  position: relative;
  padding: 108px 0 92px;
  overflow: hidden;
  min-height: clamp(700px, 96vh, 920px);
  display: flex;
  align-items: center;
  background:
    linear-gradient(180deg, rgba(5, 10, 18, 0.18), rgba(5, 10, 18, 0.58)),
    radial-gradient(circle at 20% 18%, rgba(0, 224, 255, 0.16), transparent 28%),
    radial-gradient(circle at 82% 20%, rgba(255, 71, 209, 0.14), transparent 24%),
    var(--heroImage);
  background-size: auto, auto, auto, cover;
  background-position: center, 20% 18%, 82% 20%, center 28%;
  background-repeat: no-repeat;
  transform-style: var(--transform-3d);
}

.hero::before,
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero::before {
  background: linear-gradient(180deg, rgba(8, 14, 24, 0.18) 0%, rgba(8, 14, 24, 0.42) 34%, rgba(8, 14, 24, 0.76) 100%);
  z-index: 0;
}

.hero::after {
  inset: auto 0 0 0;
  height: 160px;
  background: linear-gradient(180deg, rgba(11, 20, 32, 0), rgba(11, 20, 32, 0.9));
  z-index: 1;
}

.hero__glow {
  display: block;
  position: absolute;
  width: 42rem;
  height: 42rem;
  right: -10rem;
  top: -12rem;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 224, 255, 0.18), rgba(125, 92, 255, 0.12) 38%, rgba(255, 71, 209, 0) 70%);
  filter: blur(24px);
  pointer-events: none;
  z-index: 0;
  animation: heroGlow 8s ease-in-out infinite alternate;
}

@keyframes heroGlow {
  0% { opacity: 0.3; }
  100% { opacity: 0.6; }
}

.hero__backgroundLayer,
.hero__overlayLayer,
.hero__video {
  position: absolute;
  inset: 0;
  display: none;
}

.hero__backgroundLayer {
  background-size: cover;
  background-position: center;
  opacity: 0.22;
  mix-blend-mode: screen;
  z-index: 0;
}

.hero__overlayLayer {
  background-size: cover;
  background-position: center;
  opacity: 0.16;
  z-index: 1;
}

.hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.22;
  z-index: 0;
}

.hero__grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(280px, 0.98fr);
  gap: 34px;
  align-items: end;
  width: 100%;
  transform-style: var(--transform-3d);
}

.hero__copy {
  max-width: 780px;
  position: relative;
  z-index: 2;
  animation: heroFloat 6s ease-in-out infinite;
}

@keyframes heroFloat {
  0%, 100% { transform: translateY(0) rotateX(0); }
  50% { transform: translateY(-10px) rotateX(2deg); }
}

.hero__copy h1 {
  margin: 14px 0 12px;
  font-size: clamp(42px, 5vw, 74px);
  line-height: 0.97;
  letter-spacing: -1.2px;
  color: #f3f7ff;
  max-width: 11ch;
  text-shadow:
    0 4px 18px rgba(12, 24, 40, 0.26),
    0 0 16px rgba(0, 224, 255, 0.10);
  transform-style: var(--transform-3d);
}

.hero__copy p {
  margin: 0;
  color: #e9eef8;
  line-height: 1.8;
  font-size: 16px;
  max-width: 62ch;
  text-shadow: 0 2px 12px rgba(12, 24, 40, 0.22);
}

.heroPain {
  margin-top: 20px;
  max-width: 700px;
  padding: 18px 18px 16px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(180deg, rgba(18, 30, 46, 0.52), rgba(18, 30, 46, 0.36));
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.heroPain:hover {
  transform: translateY(-2px) rotateX(1deg);
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
}

.heroPain__label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #99efff;
}

.heroPain__label::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 14px rgba(0, 224, 255, 0.8);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.heroPain strong {
  display: block;
  margin-top: 10px;
  color: #f7fbff;
  font-size: 22px;
  line-height: 1.2;
}

.heroPain p {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.7;
  color: #d7e3f5;
}

.heroPain__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.heroPain__tab {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #eaf3ff;
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 800;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.heroPain__tab:hover {
  transform: translateY(-1px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  filter: var(--shadow-glow);
}

.heroPain__tab.isActive {
  color: #eef3fb;
  border-color: transparent;
  background: var(--hero-gradient);
  box-shadow: 0 12px 26px rgba(125, 92, 255, 0.26);
  text-shadow: var(--shadow-glow);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(243, 247, 255, 0.20);
  background: rgba(26, 40, 58, 0.30);
  color: #f4f7ff;
  box-shadow: var(--shadow);
  font-size: 13px;
  font-weight: 800;
  backdrop-filter: blur(8px);
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.badge:hover {
  transform: translateY(-1px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero__actions--column {
  flex-direction: column;
}

.hero__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.chip {
  border: none;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(26, 40, 58, 0.28);
  border: 1px solid rgba(243, 247, 255, 0.18);
  color: #eef3fb;
  font-weight: 800;
  transition: var(--transition-normal);
  backdrop-filter: blur(8px);
  transform-style: var(--transform-3d);
}

.chip:hover {
  transform: translateY(-1px) rotateX(2deg);
  border-color: rgba(0, 224, 255, 0.34);
  color: #fff;
  filter: var(--shadow-glow);
}

.chip.isActive {
  color: #eef3fb;
  border-color: transparent;
  background: var(--hero-gradient);
  box-shadow: 0 10px 24px rgba(125, 92, 255, 0.24);
  text-shadow: var(--shadow-glow);
}

.chip--static {
  cursor: default;
}

.chip--static:hover {
  transform: none;
  border-color: rgba(243, 247, 255, 0.18);
  color: #eef3fb;
  filter: none;
}

.hero__card {
  border: 1px solid rgba(240, 245, 255, 0.18);
  border-radius: var(--radiusLg);
  background: linear-gradient(180deg, rgba(24, 37, 56, 0.44), rgba(24, 37, 56, 0.24));
  box-shadow: var(--shadow3), 0 0 0 1px rgba(0, 224, 255, 0.06), 0 0 40px rgba(125, 92, 255, 0.14);
  overflow: hidden;
  padding: 22px;
  backdrop-filter: blur(18px);
  align-self: end;
  position: relative;
  z-index: 2;
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.hero__card:hover {
  transform: rotateY(5deg) translateZ(20px);
  box-shadow: var(--shadow-glow-hover);
  border-color: var(--glass-border-hover);
}

.hero__logoWrap {
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  background: rgba(18, 30, 46, 0.30);
  border: 1px solid rgba(240, 245, 255, 0.12);
  transition: var(--transition-normal);
}

.hero__logoWrap img {
  width: 100%;
  max-width: 360px;
  object-fit: contain;
  filter:
    drop-shadow(0 12px 24px rgba(0, 0, 0, 0.16))
    drop-shadow(0 0 14px rgba(0, 224, 255, 0.10));
  transition: var(--transition-normal);
}

.hero__card:hover .hero__logoWrap img {
  transform: rotate(360deg) scale(1.1);
  filter: var(--shadow-glow);
}

.hero__miniGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
}

.hero__miniGrid article {
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(240, 245, 255, 0.12);
  background: rgba(18, 30, 46, 0.28);
  backdrop-filter: blur(8px);
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.hero__miniGrid article:hover {
  transform: translateY(-2px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
}

.hero__miniGrid strong {
  display: block;
  font-size: 14px;
  color: #f2f6ff;
}

.hero__miniGrid span {
  display: block;
  margin-top: 6px;
  color: #dce5f6;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 700;
}

/* ===== GLOBAL SECTIONS ===== */
.section {
  position: relative;
  padding: 98px 0;
  transform-style: var(--transform-3d);
}

.section::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.sectionAnchor {
  scroll-margin-top: 98px;
}

.sectionDivider {
  padding-top: 18px;
  padding-bottom: 28px;
}

.section__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 38px;
}

.section__head--left {
  justify-content: flex-start;
}

.section__head--spaced {
  margin-bottom: 42px;
}

.section__head h2 {
  margin: 0;
  font-size: 34px;
  line-height: 1.04;
  letter-spacing: -0.03em;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: var(--shadow-glow);
  transform-style: var(--transform-3d);
}

.section__head p {
  margin: 6px 0 0;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 70ch;
}

.sectionIntro {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sectionKicker {
  display: inline-flex;
  width: max-content;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(122, 92, 255, 0.18);
  background: color-mix(in srgb, var(--surface2) 78%, transparent);
  color: var(--violet);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.sectionKicker:hover {
  transform: translateY(-1px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  filter: var(--shadow-glow);
}

.sectionKicker--inside {
  margin-bottom: 10px;
}

/* ===== AUTHORITY ===== */
.authority {
  padding: 22px 0 28px;
}

.authority__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.authority__item {
  padding: 20px;
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  background: color-mix(in srgb, var(--surface2) 78%, transparent);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow);
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.authority__item:hover {
  transform: translateY(-2px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
  filter: var(--shadow-glow);
}

.authority__item strong {
  display: block;
  font-size: 14px;
}

.authority__item span {
  display: block;
  margin-top: 8px;
  color: var(--text-muted);
  font-size: 13px;
  line-height: 1.6;
  font-weight: 700;
}

/* ===== SOLUTIONS ===== */
.section--solutions {
  background-image: var(--imgC);
  background-size: cover;
  background-position: center 42%;
  background-repeat: no-repeat;
}

.section--solutions::before,
.section--solutions::after {
  content: none !important;
  display: none !important;
}

.solutionsGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.solutionCard {
  padding: 24px;
  border: 1px solid rgba(232, 238, 248, 0.18);
  border-radius: 24px;
  background: rgba(24, 37, 56, 0.30);
  box-shadow: var(--shadow2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.solutionCard::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: var(--accent-gradient);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.solutionCard:hover::before {
  transform: scaleX(1);
}

.solutionCard:hover {
  transform: translateY(-8px) rotateX(5deg);
  box-shadow: var(--shadow-glow-hover);
  border-color: var(--glass-border-hover);
  filter: var(--shadow-glow);
}

.solutionCard__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(14, 26, 44, 0.34);
  border: 1px solid rgba(232, 238, 248, 0.16);
  color: #f3f7ff;
  font-weight: 900;
  margin-bottom: 14px;
  transition: var(--transition-normal);
}

.solutionCard:hover .solutionCard__icon {
  transform: scale(1.1) rotate(5deg);
  filter: var(--shadow-glow);
}

.section--solutions .section__head h2,
.section--solutions .solutionCard h3 {
  color: #f3f7ff;
}

.section--solutions .section__head p,
.section--solutions .solutionCard p {
  color: #e2eaf8;
}

.section--solutions .sectionKicker {
  background: rgba(20, 32, 48, 0.34);
  border-color: rgba(232, 238, 248, 0.16);
  color: #f2f6ff;
}

/* ===== FEATURED ===== */
.section--featured {
  background-image: var(--imgB);
  background-size: cover;
  background-position: center 38%;
  background-repeat: no-repeat;
}

.section--featured::before,
.section--featured::after {
  content: none !important;
  display: none !important;
}

.featuredGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.featuredCard,
.projectCard {
  border: 1px solid rgba(232, 238, 248, 0.18);
  border-radius: 24px;
  background: rgba(24, 37, 56, 0.26);
  box-shadow: var(--shadow2);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.featuredCard:hover,
.projectCard:hover {
  transform: translateY(-3px) rotateY(8deg) scale(1.02);
  box-shadow: var(--shadow-glow-hover);
  border-color: var(--glass-border-hover);
  filter: var(--shadow-glow);
}

.featuredCard__image,
.projectCard__image {
  aspect-ratio: 16 / 10;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 28, 44, 0.22);
}

.featuredCard__image img,
.projectCard__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 16px;
  background: rgba(18, 30, 46, 0.30);
  transition: var(--transition-slow);
}

.featuredCard:hover .featuredCard__image img,
.projectCard:hover .projectCard__image img {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.featuredCard__body,
.projectCard__body {
  padding: 18px 18px 20px;
}

.featuredCard__body h3,
.projectCard__body h3 {
  margin: 12px 0 0;
  font-size: 19px;
  line-height: 1.15;
  color: #f4f7ff;
}

.featuredCard__body p,
.projectCard__body p {
  margin: 12px 0 0;
  color: #e2eaf8;
  line-height: 1.65;
  font-size: 14px;
  font-weight: 700;
}

.featuredCard__meta,
.projectCard__type {
  margin-top: 12px;
  color: #cfd9eb;
  font-size: 13px;
  font-weight: 800;
}

.featuredCard__topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.section--featured .section__head h2,
.section--featured .section__head p {
  color: #f3f7ff;
}

.section--featured .sectionKicker {
  background: rgba(20, 32, 48, 0.34);
  border-color: rgba(232, 238, 248, 0.16);
  color: #f2f6ff;
}

/* ===== TAGS AND STATUS ===== */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  color: #eef3fb;
  background: var(--hero-gradient);
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-glow);
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.tag:hover {
  transform: translateY(-1px) rotateX(2deg);
  box-shadow: var(--shadow-glow-hover);
}

.statusPill {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.45px;
  background: rgba(219, 230, 246, 0.18);
  color: #eef3fb;
  border: 1px solid rgba(232, 238, 248, 0.14);
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.statusPill:hover {
  transform: translateY(-1px) rotateX(2deg);
  box-shadow: var(--glass-shadow-hover);
}

.statusPill--draft {
  background: rgba(219, 230, 246, 0.14);
}

.statusPill--published {
  background: #cfeee8;
  color: #0d5f54;
}

.statusPill--featured {
  background: #dad4ff;
  color: #5d3ce6;
}

.statusPill--archived {
  background: #f0d2e6;
  color: #9a2669;
}

.statusPill--new {
  background: #d4e4fb;
  color: #2f5ae6;
}

.softTag {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(232, 238, 248, 0.14);
  background: rgba(219, 230, 246, 0.12);
  color: #e7eefb;
  font-size: 11px;
  font-weight: 800;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.softTag:hover {
  transform: translateY(-1px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
}

.projectTagsRow {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

/* ===== PORTFOLIO ===== */
.section--portfolio {
  background-image: var(--imgB);
  background-size: cover;
  background-position: center 56%;
  background-repeat: no-repeat;
}

.section--portfolio::before,
.section--portfolio::after {
  content: none !important;
  display: none !important;
}

.section--portfolio .wrap {
  padding: 34px clamp(18px, 2.4vw, 32px);
  border-radius: 38px;
  border: 1px solid rgba(232, 238, 248, 0.18);
  background: rgba(18, 30, 46, 0.34);
  box-shadow: var(--shadow3);
  backdrop-filter: blur(14px);
  position: relative;
}

.section--portfolio .section__head {
  position: relative;
  z-index: 1;
}

.section--portfolio .section__head h2,
.section--portfolio .section__head p {
  color: #f3f7ff;
}

.section--portfolio .sectionKicker {
  background: rgba(20, 32, 48, 0.34);
  border-color: rgba(232, 238, 248, 0.16);
  color: #f2f6ff;
}

.toolbar {
  display: grid;
  gap: 20px;
  margin-bottom: 28px;
  position: relative;
  z-index: 1;
}

.toolbar--panel {
  padding: 20px;
  border: 1px solid rgba(232, 238, 248, 0.16);
  border-radius: 26px;
  background: rgba(18, 30, 46, 0.28);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.toolbar:hover {
  transform: translateY(-2px) rotateX(1deg);
  box-shadow: var(--glass-shadow-hover);
}

.toolbar__right {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 14px;
}

.toolbar__right--triple {
  grid-template-columns: 2fr 1fr 1fr;
}

.field {
  display: grid;
  gap: 8px;
}

.field label {
  color: #e7eefb;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.field input,
.field select {
  width: 100%;
  border: 1px solid rgba(232, 238, 248, 0.16);
  border-radius: 14px;
  background: rgba(223, 231, 240, 0.88);
  color: #243246;
  padding: 12px 14px;
  outline: none;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.field input:focus,
.field select:focus {
  border-color: rgba(0, 224, 255, 0.34);
  box-shadow: 0 0 0 4px rgba(0, 224, 255, 0.08);
  transform: translateY(-1px);
}

.field input:hover,
.field select:hover {
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
}

.projectsGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  position: relative;
  z-index: 1;
}

.projectCard__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.projectCard__statusRow {
  margin-top: 12px;
}

.moreWrap {
  display: flex;
  justify-content: center;
  margin-top: 28px;
  position: relative;
  z-index: 1;
}

.state {
  display: none;
  padding: 16px;
  border: 1px dashed rgba(232, 238, 248, 0.22);
  border-radius: 18px;
  color: #eef3fb;
  font-weight: 800;
  margin-bottom: 18px;
  background: rgba(18, 30, 46, 0.28);
  position: relative;
  z-index: 1;
  transform-style: var(--transform-3d);
}

/* ===== AUTOADMIN ===== */
.section--autoadmin {
  background-image: var(--imgC);
  background-size: cover;
  background-position: center 50%;
  background-repeat: no-repeat;
}

.section--autoadmin::before,
.section--autoadmin::after {
  content: none !important;
  display: none !important;
}

.section--autoadmin .wrap {
  padding: 36px clamp(18px, 2.4vw, 32px);
  border-radius: 38px;
  border: 1px solid rgba(232, 238, 248, 0.18);
  background: rgba(18, 30, 46, 0.30);
  box-shadow: var(--shadow3);
  backdrop-filter: blur(14px);
}

.section--autoadmin .section__head h2,
.section--autoadmin .section__head p,
.section--autoadmin .richText {
  color: #eef3fb;
}

.section--autoadmin .sectionKicker {
  background: rgba(20, 32, 48, 0.34);
  border-color: rgba(232, 238, 248, 0.16);
  color: #f2f6ff;
}

.splitBlock {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 34px;
  align-items: center;
  transform-style: var(--transform-3d);
}

.richText {
  line-height: 1.85;
  font-size: 15px;
  font-weight: 700;
}

.visualCard {
  padding: 32px;
  border: 1px solid rgba(232, 238, 248, 0.16);
  border-radius: 30px;
  background: rgba(18, 30, 46, 0.28);
  box-shadow: var(--shadow2);
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.visualCard::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: var(--accent-gradient);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.visualCard:hover::before {
  transform: scaleX(1);
}

.visualCard:hover {
  transform: translateY(-5px) rotateX(2deg);
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
  filter: var(--shadow-glow);
}

.visualCard--alt {
  border-color: rgba(232, 238, 248, 0.16);
}

.visualCard__badge {
  width: max-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(20, 32, 48, 0.34);
  border: 1px solid rgba(232, 238, 248, 0.16);
  color: #f2f6ff;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 14px;
  transition: var(--transition-normal);
}

.visualCard__badge:hover {
  transform: translateY(-1px) rotateX(2deg);
  box-shadow: var(--glass-shadow-hover);
}

.visualCard strong {
  font-size: 28px;
  line-height: 1.08;
  color: #f3f7ff;
}

.visualCard span {
  margin-top: 12px;
  color: #dce5f6;
  line-height: 1.75;
  font-weight: 700;
}

/* ===== SYSTEMS ===== */
.section--systems {
  overflow: hidden;
  background-image: var(--imgB);
  background-size: cover;
  background-position: center 42%;
  background-repeat: no-repeat;
}

.section--systems::before,
.section--systems::after {
  content: none !important;
  display: none !important;
}

.section--systems .wrap {
  position: relative;
  z-index: 1;
  padding: 36px clamp(18px, 2.4vw, 32px);
  border-radius: 38px;
  border: 1px solid rgba(232, 238, 248, 0.18);
  background: rgba(18, 30, 46, 0.30);
  box-shadow: var(--shadow3);
  backdrop-filter: blur(14px);
}

.section--systems .section__head h2,
.section--systems .section__head p,
.section--systems .richText {
  color: #eef3fb;
}

.section--systems .sectionKicker {
  background: rgba(20, 32, 48, 0.34);
  border-color: rgba(232, 238, 248, 0.16);
  color: #f2f6ff;
}

/* ===== WHY ===== */
.section--why {
  background-image: var(--imgC);
  background-size: cover;
  background-position: center 62%;
  background-repeat: no-repeat;
}

.section--why::before,
.section--why::after {
  content: none !important;
  display: none !important;
}

.section--why .section__head h2,
.section--why .section__head p {
  color: #eef3fb;
}

.section--why .sectionKicker {
  background: rgba(20, 32, 48, 0.34);
  border-color: rgba(232, 238, 248, 0.16);
  color: #f2f6ff;
}

.differentialsGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.diffCard {
  padding: 22px;
  border: 1px solid rgba(232, 238, 248, 0.18);
  border-radius: 24px;
  background: rgba(18, 30, 46, 0.28);
  box-shadow: var(--shadow2);
  backdrop-filter: blur(10px);
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.diffCard:hover {
  transform: translateY(-5px) rotateX(2deg);
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
  filter: var(--shadow-glow);
}

.diffCard strong {
  display: block;
  margin: 0;
  font-size: 18px;
  color: #f3f7ff;
}

.diffCard span {
  display: block;
  margin-top: 12px;
  color: #dce5f6;
  line-height: 1.7;
  font-size: 14px;
  font-weight: 700;
}

/* ===== FAQ ===== */
.section--faq {
  background-image: var(--imgC);
  background-size: cover;
  background-position: center 34%;
  background-repeat: no-repeat;
}

.section--faq::before,
.section--faq::after {
  content: none !important;
  display: none !important;
}

.section--faq .section__head h2,
.section--faq .section__head p {
  color: #eef3fb;
}

.section--faq .sectionKicker {
  background: rgba(20, 32, 48, 0.34);
  border-color: rgba(232, 238, 248, 0.16);
  color: #f2f6ff;
}

.faqList {
  display: grid;
  gap: 14px;
}

.faqItem {
  border: 1px solid rgba(232, 238, 248, 0.18);
  border-radius: 20px;
  background: rgba(18, 30, 46, 0.28);
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow2);
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.faqItem:hover {
  transform: translateY(-2px) rotateX(1deg);
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
}

.faqItem__head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 20px;
  border: none;
  background: transparent;
  color: #f3f7ff;
  text-align: left;
  transition: var(--transition-normal);
}

.faqItem__head strong {
  font-size: 16px;
}

.faqItem__head span {
  font-size: 24px;
  line-height: 1;
  color: #f3f7ff;
  transition: var(--transition-normal);
}

.faqItem:hover .faqItem__head span {
  transform: rotate(90deg);
  color: var(--cyan);
}

.faqItem__body {
  display: none;
  padding: 0 20px 18px;
}

.faqItem__body p {
  margin: 0;
  color: #dce5f6;
  line-height: 1.75;
  font-weight: 700;
}

.faqItem.isOpen .faqItem__body {
  display: block;
  animation: fadeIn var(--transition-normal);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ===== CONTACT ===== */
.section--contact {
  overflow: hidden;
  background-image: var(--imgC);
  background-size: cover;
  background-position: center 44%;
  background-repeat: no-repeat;
}

.section--contact::before,
.section--contact::after {
  content: none !important;
  display: none !important;
}

.ctaPanel {
  position: relative;
  z-index: 1;
  padding: 38px;
  border: 1px solid rgba(232, 238, 248, 0.18);
  border-radius: 34px;
  background: rgba(18, 30, 46, 0.30);
  box-shadow: var(--shadow3);
  display: grid;
  gap: 14px;
  backdrop-filter: blur(14px);
  transform-style: var(--transform-3d);
  transition: var(--transition-normal);
}

.ctaPanel:hover {
  transform: translateY(-2px) rotateX(1deg);
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
}

.ctaPanel h2 {
  margin: 0;
  font-size: 32px;
  color: #f3f7ff;
}

.ctaPanel p {
  margin: 10px 0 0;
  color: #dce5f6;
  line-height: 1.75;
  font-weight: 700;
}

.section--contact .sectionKicker {
  background: rgba(20, 32, 48, 0.34);
  border-color: rgba(232, 238, 248, 0.16);
  color: #f2f6ff;
}

/* ===== FOOTER ===== */
.footer {
  margin-top: 0;
  border-top: 1px solid rgba(64, 107, 255, 0.10);
  background: linear-gradient(180deg, var(--surface3), var(--surface4));
  position: relative;
  transform-style: var(--transform-3d);
}

.footer__inner {
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer__brand img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.footer__brand strong {
  display: block;
}

.footer__brand span {
  display: block;
  margin-top: 4px;
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 700;
}

.footer__links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.footer__links a {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--line2);
  background: color-mix(in srgb, var(--surface2) 80%, transparent);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 800;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.footer__links a:hover {
  transform: translateY(-1px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
  filter: var(--shadow-glow);
}

/* ===== WHATSAPP FLOAT ===== */
.waFloat {
  position: fixed;
  right: 16px;
  bottom: calc(var(--waSafe) + env(safe-area-inset-bottom));
  z-index: 40;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: color-mix(in srgb, var(--surface2) 80%, transparent);
  box-shadow: 0 16px 40px rgba(31, 50, 75, 0.14);
  border: 1px solid var(--line);
  backdrop-filter: blur(10px);
  transition: var(--transition-normal);
  animation: floatButton 3s ease-in-out infinite;
  transform-style: var(--transform-3d);
}

@keyframes floatButton {
  0%, 100% { transform: translateY(0) rotateZ(0deg); }
  50% { transform: translateY(-10px) rotateZ(5deg); }
}

.waFloat:hover {
  transform: scale(1.1) rotateZ(10deg);
  box-shadow: var(--shadow-glow-hover);
  border-color: var(--glass-border-hover);
  filter: var(--shadow-glow);
}

.waFloat img {
  width: 58px;
  height: 58px;
  object-fit: contain;
}

/* ===== MODAL ===== */
.modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 18px;
  z-index: 80;
  transform-style: var(--transform-3d);
}

.modal.isOpen {
  display: flex;
}

.modal__backdrop {
  position: absolute;
  inset: 0;
  border: none;
  background: rgba(31, 50, 75, 0.26);
  backdrop-filter: blur(10px);
}

.modal__panel {
  position: relative;
  width: min(980px, 100%);
  max-height: min(88vh, 900px);
  border: 1px solid var(--line);
  border-radius: 24px;
  background: color-mix(in srgb, var(--surface2) 86%, transparent);
  box-shadow: var(--shadow3);
  overflow: hidden;
  backdrop-filter: blur(16px);
  transform-style: var(--transform-3d);
  animation: modalAppear var(--transition-normal);
}

@keyframes modalAppear {
  from {
    opacity: 0;
    transform: scale(0.8) rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotateX(0);
  }
}

.modal__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 18px;
  border-bottom: 1px solid var(--line);
}

.modal__header h3 {
  margin: 10px 0 0;
  font-size: 24px;
  color: var(--text-primary);
}

.modal__tagsRow {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.iconBtn {
  width: 48px;
  height: 48px;
  border: 1px solid var(--line2);
  border-radius: 14px;
  background: var(--surface);
  color: var(--text-primary);
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.iconBtn:hover {
  transform: translateY(-1px) rotateX(2deg);
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
  filter: var(--shadow-glow);
}

.modal__content {
  display: grid;
  grid-template-columns: 1fr 0.92fr;
  gap: 0;
  max-height: calc(88vh - 86px);
}

.modal__imageWrap {
  min-height: 320px;
  max-height: calc(88vh - 86px);
  background: var(--surface3);
  border-right: 1px solid var(--line);
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__imageWrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 18px;
  background: var(--surface);
}

.modal__info {
  padding: 20px;
  overflow: auto;
}

.metaList {
  display: grid;
  gap: 8px;
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 800;
}

.modal__info p {
  margin: 14px 0 0;
  line-height: 1.75;
  font-weight: 700;
}

.modal__tagsList {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.muted {
  color: var(--text-muted);
}

.emptyState {
  padding: 18px;
  border: 1px dashed var(--line2);
  border-radius: 18px;
  color: var(--text-muted);
  text-align: center;
  font-weight: 800;
  background: color-mix(in srgb, var(--surface2) 80%, transparent);
  transform-style: var(--transform-3d);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1100px) {
  .hero {
    min-height: auto;
    padding: 82px 0 74px;
  }

  .hero__grid,
  .splitBlock {
    grid-template-columns: 1fr;
  }

  .featuredGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .projectsGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .solutionsGrid,
  .differentialsGrid,
  .authority__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .modal__content {
    grid-template-columns: 1fr;
  }

  .modal__imageWrap {
    min-height: 250px;
    max-height: 320px;
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
}

@media (max-width: 820px) {
  .nav {
    display: none;
  }

  .burger {
    display: flex;
  }

  .toolbar__right,
  .toolbar__right--triple {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .topbar__inner {
    min-height: 72px;
  }

  .brand__logo {
    width: 50px;
    height: 50px;
  }

  .brand__text strong {
    font-size: 14px;
  }

  .btn {
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .hero {
    padding: 84px 0 64px;
    min-height: 640px;
    background-position: center 18%;
  }

  .hero__grid {
    align-items: end;
    gap: 22px;
  }

  .hero__copy h1 {
    font-size: 42px;
    max-width: 100%;
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__card {
    background: rgba(24, 37, 56, 0.30);
    border-color: rgba(240, 245, 255, 0.16);
  }

  .section {
    padding: 78px 0;
  }

  .section--portfolio .wrap,
  .section--autoadmin .wrap,
  .section--systems .wrap {
    padding: 24px 16px;
    border-radius: 28px;
  }

  .solutionsGrid,
  .differentialsGrid,
  .authority__grid,
  .projectsGrid,
  .featuredGrid {
    grid-template-columns: 1fr;
  }

  .section__head {
    margin-bottom: 30px;
  }

  .section__head h2,
  .ctaPanel h2 {
    font-size: 28px;
  }

  .footer__inner {
    justify-content: center;
  }

  .featuredCard,
  .projectCard {
    border-radius: 20px;
  }

  .featuredCard__image,
  .projectCard__image {
    aspect-ratio: 16 / 8.8;
    padding: 12px;
  }

  .featuredCard__image img,
  .projectCard__image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 14px;
  }

  .featuredCard__body,
  .projectCard__body {
    padding: 14px;
  }

  .featuredCard__body h3,
  .projectCard__body h3 {
    font-size: 17px;
    line-height: 1.18;
  }

  .featuredCard__body p,
  .projectCard__body p {
    font-size: 13px;
    line-height: 1.58;
  }

  .projectCard__top {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .hero__logoWrap {
    min-height: 220px;
  }

  .ctaPanel {
    padding: 24px;
    border-radius: 26px;
  }

  .section--solutions {
    background-position: center 26%;
  }

  .section--featured {
    background-position: center 22%;
  }

  .section--portfolio {
    background-position: center 34%;
  }

  .section--autoadmin {
    background-position: center 28%;
  }

  .section--systems {
    background-position: center 28%;
  }

  .section--why {
    background-position: center 34%;
  }

  .section--faq {
    background-position: center 24%;
  }

  .section--contact {
    background-position: center 24%;
  }

  .modal {
    padding: 10px;
  }

  .modal__panel {
    width: 100%;
    max-height: 92vh;
    border-radius: 20px;
  }

  .modal__header {
    padding: 14px;
  }

  .modal__header h3 {
    font-size: 20px;
  }

  .iconBtn {
    width: 44px;
    height: 44px;
    font-size: 28px;
  }

  .modal__content {
    max-height: calc(92vh - 74px);
  }

  .modal__imageWrap {
    min-height: 190px;
    max-height: 240px;
    padding: 12px;
  }

  .modal__info {
    padding: 16px;
  }

  .modal__info .hero__actions {
    gap: 10px;
  }
}

/* ===== ENHANCED VISUAL EFFECTS ===== */
.section--solutions .wrap,
.section--featured .wrap,
.section--why .wrap,
.section--faq .wrap {
  position: relative;
  z-index: 1;
  padding: 34px clamp(18px, 2.4vw, 32px);
  border-radius: 38px;
  border: 1px solid rgba(232, 238, 248, 0.12);
  background: linear-gradient(180deg, rgba(15, 24, 38, 0.44), rgba(15, 24, 38, 0.26));
  box-shadow: var(--shadow3);
  backdrop-filter: blur(14px);
}

.section--solutions {
  background-position: center 42%;
}

.section--featured {
  background-position: center 42%;
}

.section--portfolio {
  background-position: center 56%;
}

.visualCard,
.diffCard,
.authority__item,
.solutionCard,
.featuredCard,
.projectCard,
.faqItem,
.ctaPanel {
  box-shadow: var(--shadow2), 0 0 0 1px rgba(255, 255, 255, 0.03), 0 0 28px rgba(0, 224, 255, 0.05);
  transition: var(--transition-normal);
}

.ctaPanel--neon {
  position: relative;
  overflow: hidden;
}

.ctaPanel--neon::before {
  content: "";
  position: absolute;
  inset: auto -12% -45% auto;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 71, 209, 0.22), rgba(125, 92, 255, 0.14) 38%, rgba(0, 224, 255, 0) 70%);
  filter: blur(18px);
  pointer-events: none;
  animation: neonGlow 4s ease-in-out infinite alternate;
}

@keyframes neonGlow {
  0% { opacity: 0.3; }
  100% { opacity: 0.6; }
}

.hero__actions .btn--ghost {
  color: #f5f8ff;
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
}

.footer {
  position: relative;
  background: linear-gradient(180deg, rgba(9, 15, 23, 0.92), rgba(8, 13, 21, 1));
  border-top: 1px solid rgba(158, 178, 214, 0.12);
}

/* ===== WHATSAPP FLOAT ===== */
.waFloat {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22), 0 0 18px rgba(0, 224, 255, 0.16);
  z-index: 1000;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.waFloat::before {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan), var(--violet));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.waFloat:hover {
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3), 0 0 24px rgba(0, 224, 255, 0.3);
}

.waFloat:hover::before {
  opacity: 0.7;
}

.waFloat svg {
  width: 28px;
  height: 28px;
  fill: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.waFloat:active {
  transform: translateY(-2px) scale(1.05);
}

/* ===== MISSING STYLES ===== */
.line {
  border: 1px solid var(--glass-border);
}

.line2 {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.surface {
  background: var(--bg-secondary);
}

.surface2 {
  background: var(--bg-tertiary);
}

.surface3 {
  background: rgba(26, 29, 36, 0.5);
}

/* ===== BUTTON STYLES ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
  position: relative;
  overflow: hidden;
}

.btn--primary {
  background: var(--accent-gradient);
  color: white;
  border: none;
  box-shadow: var(--shadow);
}

.btn--primary:hover {
  transform: translateY(-2px) rotateX(2deg);
  box-shadow: var(--glass-shadow-hover);
  filter: var(--shadow-glow);
}

.btn--ghost {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-backdrop-light);
}

.btn--ghost:hover {
  background: var(--bg-glass);
  border-color: var(--glass-border-hover);
  transform: translateY(-2px) rotateX(2deg);
  box-shadow: var(--glass-shadow-hover);
}

.btn .loading {
  display: none;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ===== TAGS AND STATUS ===== */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  background: var(--bg-glass);
  color: var(--text-primary);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-backdrop-light);
}

.statusPill {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.statusPill--published {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.statusPill--featured {
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.statusPill--new {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.softTag {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  background: var(--bg-glass-light);
  color: var(--text-muted);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* ===== PROJECT CARDS ===== */
.work {
  cursor: pointer;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.work:hover {
  transform: translateY(-4px) rotateX(3deg);
}

.work-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.thumb {
  aspect-ratio: 16/10;
  overflow: hidden;
  border-radius: 12px;
  background: var(--bg-tertiary);
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-normal);
}

.work:hover .thumb img {
  transform: scale(1.05);
}

.topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
}

.meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
}

.meta .title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  margin: 0;
}

.meta .short {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
  flex: 1;
}

.projectTagsRow {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* ===== FAQ ITEMS ===== */
.faqItem {
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  background: var(--bg-glass);
  backdrop-filter: var(--glass-backdrop-light);
  overflow: hidden;
  transition: var(--transition-normal);
  transform-style: var(--transform-3d);
}

.faqItem:hover {
  border-color: var(--glass-border-hover);
  box-shadow: var(--glass-shadow-hover);
}

.faqItem__head {
  width: 100%;
  padding: 16px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  transition: var(--transition-normal);
}

.faqItem__head:hover {
  background: var(--bg-glass-light);
}

.faqItem__head span {
  font-size: 18px;
  font-weight: 400;
  transition: var(--transition-fast);
}

.faqItem.isOpen .faqItem__head span {
  transform: rotate(45deg);
}

.faqItem__body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faqItem.isOpen .faqItem__body {
  max-height: 300px;
}

.faqItem__body p {
  padding: 0 20px 16px;
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* ===== ANIMATIONS ===== */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== PARTICLES ===== */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--cyan);
  border-radius: 50%;
  opacity: 0.7;
  animation: float-up 20s linear infinite;
}

@keyframes float-up {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
}

.floating-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.bg-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 640px) {
  .heroPain {
    padding: 16px;
    border-radius: 20px;
  }

  .heroPain strong {
    font-size: 18px;
  }

  .heroPain__tabs {
    gap: 8px;
  }

  .heroPain__tab {
    width: auto;
    padding: 9px 12px;
    font-size: 12px;
  }
}
