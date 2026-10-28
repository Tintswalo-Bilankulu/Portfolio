import './About.css'

const FOCUS_AREAS = [
  'Information systems',
  'Cybersecurity',
  'Artificial intelligence',
  'Automation',
  'Drone technology',
]

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="section__inner">
        <p className="section__eyebrow">About</p>
        <h2 className="section__title" id="about-title">
          Business insight meets technical curiosity
        </h2>
        <p className="section__lead">
          A short introduction to how I approach technology, systems, and
          problem-solving.
        </p>

        <div className="about__grid">
          <figure className="about__portrait">
            <img
              src="/tintswalo.jpg"
              alt="Tintswalo Bilankulu wearing graduation regalia and holding a bouquet"
              width="400"
              height="400"
            />
            <figcaption>Tintswalo Bilankulu</figcaption>
          </figure>

          <div className="about__text">
            <p>
              I am an IT and Computing graduate with a strong interest in how
              technology supports real organisational needs. My background blends
              business understanding with technical foundations, which helps me
              think about systems from both a practical and a people-centred
              perspective.
            </p>
            <p>
              I am especially drawn to areas where structure, security, and
              innovation meet — from information systems and cybersecurity to AI,
              automation, and emerging applications of drone technology. I value
              clear communication, careful analysis, and designs that feel
              intentional rather than overly complex.
            </p>
            <p>
              Beelas — “Smarter systems. Faster buzz.” — is the identity
              running through this site. It reflects networked collaboration,
              hexagonal structure, and building with purpose, one connection at
              a time.
            </p>
          </div>

          <aside className="about__panel" aria-label="Areas of interest">
            <h3 className="about__panel-title">Areas of interest</h3>
            <ul className="about__focus-list">
              {FOCUS_AREAS.map((area, index) => (
                <li key={area} className="about__focus-item">
                  <span className="about__focus-icon" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
