import './Contact.css'

const LINKS = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-profile',
    href: 'https://www.linkedin.com/in/your-profile',
  },
  {
    label: 'GitHub',
    value: 'github.com/your-username',
    href: 'https://github.com/your-username',
  },
]

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
          Replace the placeholders below with your professional email and
          profile links when you are ready to share them.
        </p>

        <div className="contact__panel">
          <div className="contact__grid">
            {LINKS.map((item) => (
              <a
                key={item.label}
                className="contact__card"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="contact__label">{item.label}</span>
                <span className="contact__value">{item.value}</span>
              </a>
            ))}
          </div>
          <p className="contact__hint">
            Placeholder details only — update these with your real contact
            information before sharing the site publicly.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
