import './Research.css'

const TOPICS = [
  'Policy awareness',
  'Compliance behaviour',
  'Organisational security culture',
  'Information protection',
]

function Research() {
  return (
    <section
      className="section research"
      id="research"
      aria-labelledby="research-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Research</p>
        <h2 className="section__title" id="research-title">
          Academic inquiry into security compliance
        </h2>
        <p className="section__lead">
          Exploring how people and organisations relate to information security
          policy in practice.
        </p>

        <article className="research__panel">
          <svg
            className="research__glyph"
            viewBox="0 0 64 64"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M32 6 L54 19 V45 L32 58 L10 45 V19 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M22 32 H42 M32 22 V42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="32" cy="32" r="7" fill="none" stroke="#e8b84a" strokeWidth="1.5" />
          </svg>

          <div>
            <span className="research__badge">Research project</span>
            <h3 className="research__heading">
              Information security policy compliance
            </h3>
            <div className="research__body">
              <p>
                This research project investigates how information security
                policies are understood and followed within organisational
                settings. It focuses on the human and process side of compliance
                rather than on building a software tool.
              </p>
              <p>
                The work is academic in nature and is shared here to reflect my
                interest in cybersecurity, governance, and the practical
                challenges of protecting information.
              </p>
            </div>
            <ul className="research__topics" aria-label="Related themes">
              {TOPICS.map((topic) => (
                <li key={topic} className="research__topic">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Research
