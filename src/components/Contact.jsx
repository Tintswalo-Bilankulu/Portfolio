import './Contact.css'

const LINKS = [
  {
    id: 'email',
    label: 'Email',
    action: 'Send a message',
    value: 'tintswalofaith99@gmail.com',
    href: 'mailto:tintswalofaith99@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    action: 'View profile',
    value: 'linkedin.com/in/tintswalobilankulu',
    href: 'https://www.linkedin.com/in/tintswalobilankulu',
  },
  {
    id: 'github',
    label: 'GitHub',
    action: 'See repositories',
    value: 'github.com/Tintswalo-Bilankulu',
    href: 'https://github.com/Tintswalo-Bilankulu',
  },
]

function ContactIcon({ id }) {
  if (id === 'email') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect x="4" y="7" width="24" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 9 L16 17 L27 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }

  if (id === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
      />
    </svg>
  )
}

function Contact() {
  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Contact</p>
        <h2 className="section__title" id="contact-title">
          Let’s connect
        </h2>
        <p className="section__lead">
          Reach me by email, or find me on LinkedIn and GitHub.
        </p>

        <div className="contact__panel">
          <div className="contact__grid">
            {LINKS.map((item) => (
              <a
                key={item.id}
                className={`contact__card contact__card--${item.id}`}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="contact__top">
                  <span className="contact__icon">
                    <ContactIcon id={item.id} />
                  </span>
                  <span className="contact__arrow" aria-hidden="true">
                    →
                  </span>
                </span>
                <span className="contact__label">{item.label}</span>
                <span className="contact__value">{item.value}</span>
                <span className="contact__action">{item.action}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
