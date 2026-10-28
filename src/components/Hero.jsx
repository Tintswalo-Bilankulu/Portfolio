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
            automation, and drone technology. Beelas captures that direction:
            smarter systems. Faster buzz.
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

        <div className="hero__visual">
          <img
            className="hero__logo"
            src="/beelas-logo.png"
            alt="Beelas. Smarter systems. Faster buzz."
            width="904"
            height="271"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
