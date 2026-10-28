import './Skills.css'

const SKILL_GROUPS = [
  {
    title: 'Technology & systems',
    skills: [
      'Information systems',
      'Systems analysis thinking',
      'Cybersecurity awareness',
      'Automation concepts',
    ],
  },
  {
    title: 'Emerging interests',
    skills: [
      'Artificial intelligence',
      'Drone technology',
      'Digital transformation ideas',
      'Secure digital practices',
    ],
  },
  {
    title: 'Professional strengths',
    skills: [
      'Business–tech bridging',
      'Clear written communication',
      'Structured problem-solving',
      'Continuous learning',
    ],
  },
]

function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="section__inner">
        <p className="section__eyebrow">Skills</p>
        <h2 className="section__title" id="skills-title">
          Capabilities &amp; focus areas
        </h2>
        <p className="section__lead">
          A snapshot of the knowledge areas and strengths I am building on —
          framed honestly as developing expertise, not exhaustive mastery.
        </p>

        <div className="skills__groups">
          {SKILL_GROUPS.map((group) => (
            <article key={group.title} className="skills__group">
              <h3 className="skills__group-title">{group.title}</h3>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skills__chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
