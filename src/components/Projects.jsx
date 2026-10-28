import ProjectCard from './ProjectCard'
import coinblissLogo from '../assets/coinbliss-logo.png'
import './Projects.css'

const PROJECTS = [
  {
    id: 'beelas',
    title: 'Beelas',
    summary:
      'A personal brand and concept built around the line “Smarter systems. Faster buzz.” It explores connected systems, hexagonal structure, and a distinctive visual identity. Beelas is an early design direction rather than a finished commercial product.',
    tags: ['Concept', 'Identity'],
    statusLabel: 'Personal concept & identity',
    accent: 'amber',
    icon: 'bee',
    logo: '/beelas-logo.png',
    logoAlt: 'Beelas logo',
  },
  {
    id: 'coinbliss',
    title: 'CoinBliss',
    summary:
      'A student-finance app concept built around the line “Empowering Student Finances, One Coin at a Time.” This is a concept exploration — not a released application.',
    tags: ['Concept', 'FinTech idea'],
    statusLabel: 'App concept',
    accent: 'electric',
    icon: 'coin',
    logo: coinblissLogo,
    logoAlt: 'CoinBliss. Empowering Student Finances, One Coin at a Time.',
    logoBanner: true,
  },
  {
    id: 'policy-research',
    title: 'Information security policy compliance',
    summary:
      'Academic research examining how organisations approach information security policy compliance. Presented here as research work, not as a software product or consulting engagement.',
    tags: ['Research', 'Cybersecurity'],
    statusLabel: 'Research project',
    accent: 'electric',
    icon: 'hex',
  },
]

function Projects() {
  return (
    <section
      className="section projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Projects</p>
        <h2 className="section__title" id="projects-title">
          Selected work &amp; explorations
        </h2>
        <p className="section__lead">
          Concepts and research that reflect my interests in systems, security,
          and purposeful design.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <p className="projects__note">
          Labels such as “concept” and “research” are intentional. This portfolio
          highlights direction and learning without claiming unfinished work as
          shipped products.
        </p>
      </div>
    </section>
  )
}

export default Projects
