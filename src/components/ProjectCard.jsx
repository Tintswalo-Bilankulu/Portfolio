import './ProjectCard.css'

function ProjectCard({
  title,
  summary,
  tags = [],
  statusLabel,
  accent = 'electric',
  icon = 'hex',
  logo,
  logoAlt = '',
}) {
  return (
    <article className="project-card">
      {logo && (
        <img className="project-card__logo" src={logo} alt={logoAlt} />
      )}
      <div className="project-card__meta">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`project-card__tag${accent === 'amber' ? ' project-card__tag--amber' : ''}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__summary">{summary}</p>

      <div className="project-card__footer">
        <span className="project-card__label">{statusLabel}</span>
        {!logo && (
        <svg
          className="project-card__icon"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          {icon === 'bee' && (
            <>
              <path
                d="M16 4 L28 11 V21 L16 28 L4 21 V11 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <ellipse cx="16" cy="16" rx="5" ry="8" fill="#e8b84a" />
              <rect x="13.5" y="11" width="5" height="2" fill="#05070f" />
              <rect x="13.5" y="15" width="5" height="2" fill="#05070f" />
              <rect x="13.5" y="19" width="5" height="2" fill="#05070f" />
            </>
          )}
          {icon === 'coin' && (
            <>
              <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M16 9 V23 M12 12.5 C12 11 13.5 10 16 10 C18.5 10 20 11 20 12.5 C20 14 18.5 14.5 16 15 C13.5 15.5 12 16 12 18 C12 19.5 13.5 21 16 21 C18.5 21 20 20 20 18.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </>
          )}
          {icon === 'hex' && (
            <path
              d="M16 5 L26 11 V21 L16 27 L6 21 V11 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          )}
        </svg>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
