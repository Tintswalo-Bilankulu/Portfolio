import { useEffect, useState } from 'react'
import portrait from '../assets/tintswalo.png'
import './About.css'

const FOCUS_AREAS = [
  'Information systems',
  'Cybersecurity',
  'Artificial intelligence',
  'Automation',
  'Drone technology',
]

function About() {
  const [photoOpen, setPhotoOpen] = useState(false)

  useEffect(() => {
    if (!photoOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setPhotoOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [photoOpen])

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
            <button
              type="button"
              className="about__portrait-button"
              onClick={() => setPhotoOpen(true)}
            >
              <img
                src={portrait}
                alt="Tintswalo Bilankulu wearing graduation regalia and holding a bouquet"
                width="400"
                height="400"
              />
              <span className="about__portrait-hint">View photo</span>
            </button>
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

      {photoOpen && (
        <div
          className="portrait-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portrait of Tintswalo Bilankulu"
        >
          <button
            type="button"
            className="portrait-lightbox__backdrop"
            aria-label="Close portrait"
            onClick={() => setPhotoOpen(false)}
          />
          <figure className="portrait-lightbox__frame">
            <img
              src={portrait}
              alt="Tintswalo Bilankulu wearing graduation regalia and holding a bouquet"
            />
            <button
              type="button"
              className="portrait-lightbox__close"
              onClick={() => setPhotoOpen(false)}
            >
              Close
            </button>
          </figure>
        </div>
      )}
    </section>
  )
}

export default About
