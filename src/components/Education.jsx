import './Education.css'

function Education() {
  return (
    <section
      className="section education"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Education</p>
        <h2 className="section__title" id="education-title">
          Academic foundation
        </h2>
        <p className="section__lead">
          Formal study that shaped my interest in technology, systems, and
          secure digital practice.
        </p>

        <div className="education__timeline">
          <article className="education__item">
            <h3 className="education__degree">
              IT and Computing graduate
            </h3>
            <p className="education__meta">
              Undergraduate studies in Information Technology and Computing
            </p>
            <p className="education__detail">
              Coursework and learning spanning computing fundamentals, systems
              thinking, and the organisational side of technology. Institution
              name and dates can be added here when you are ready.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education
