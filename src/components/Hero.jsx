import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Personal portfolio
          </p>
          <h1 className="hero__title" id="hero-title">
            <span className="hero__name">Tintswalo Bilankulu</span>
          </h1>
          <p className="hero__role">IT &amp; Computing Graduate</p>
          <p className="hero__intro">
            Exploring the intersection of information systems, cybersecurity, AI,
            automation, and drone technology — with a Beelas-inspired lens on
            connected systems, structure, and purposeful design.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact me
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__orbit" />
          <div className="hero__hex-core">
            <svg viewBox="0 0 240 240" role="presentation">
              <defs>
                <linearGradient id="hexStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3ecbff" />
                  <stop offset="100%" stopColor="#1a7fbf" />
                </linearGradient>
                <linearGradient id="beeFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f0d078" />
                  <stop offset="100%" stopColor="#c9952e" />
                </linearGradient>
              </defs>
              <path
                d="M120 18 L204 66 V162 L120 210 L36 162 V66 Z"
                fill="rgba(14,24,48,0.75)"
                stroke="url(#hexStroke)"
                strokeWidth="2.5"
              />
              <path
                d="M120 52 L168 80 V136 L120 164 L72 136 V80 Z"
                fill="none"
                stroke="rgba(62,203,255,0.35)"
                strokeWidth="1.5"
              />
              {/* Abstract bee motif */}
              <ellipse cx="120" cy="108" rx="18" ry="28" fill="url(#beeFill)" />
              <rect x="112" y="88" width="16" height="6" rx="2" fill="#0a1224" />
              <rect x="112" y="104" width="16" height="6" rx="2" fill="#0a1224" />
              <rect x="112" y="120" width="16" height="6" rx="2" fill="#0a1224" />
              <ellipse
                cx="98"
                cy="96"
                rx="14"
                ry="8"
                fill="rgba(62,203,255,0.25)"
                stroke="#3ecbff"
                strokeWidth="1"
                transform="rotate(-25 98 96)"
              />
              <ellipse
                cx="142"
                cy="96"
                rx="14"
                ry="8"
                fill="rgba(62,203,255,0.25)"
                stroke="#3ecbff"
                strokeWidth="1"
                transform="rotate(25 142 96)"
              />
              <circle cx="120" cy="78" r="5" fill="#0a1224" />
              {/* Network nodes */}
              <circle cx="72" cy="80" r="3.5" fill="#3ecbff" />
              <circle cx="168" cy="80" r="3.5" fill="#3ecbff" />
              <circle cx="120" cy="164" r="3.5" fill="#e8b84a" />
              <path
                d="M72 80 L98 96 M168 80 L142 96 M120 136 L120 164"
                stroke="rgba(62,203,255,0.45)"
                strokeWidth="1"
              />
            </svg>
          </div>
          <span className="hero__badge">Connected systems</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
