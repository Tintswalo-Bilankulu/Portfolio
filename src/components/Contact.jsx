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
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect x="5" y="5" width="22" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 14 V22 M10 11.5 V11.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 22 V17.2 C15 15.4 16.4 14.2 18.1 14.2 C19.7 14.2 21 15.3 21 17.1 V22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        d="M12 16 C12 12.5 14.2 10 17.4 10 C20.2 10 21.6 11.4 22.2 12.6 C23.2 12.2 24.4 12.4 25.2 13.2 C25.8 13.8 26 14.8 25.6 15.6 C26.6 16.2 27.2 17.2 27.2 18.4 C27.2 20.2 25.8 21.6 24 21.8 V22.2 C24 23.4 23 24.4 21.8 24.4 H14.2 C12.4 24.4 11 23 11 21.2 V19.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9.2" cy="18.2" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
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
