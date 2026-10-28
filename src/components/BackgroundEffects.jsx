import './BackgroundEffects.css'

const PARTICLES = Array.from({ length: 28 }, (_, index) => ({
  id: `p-${index}`,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: `${(index % 10) * 0.7}s`,
  duration: `${10 + (index % 8)}s`,
  size: `${2 + (index % 3)}px`,
}))

const SHOOTING_STARS = [
  { id: 's1', top: '12%', left: '-5%', delay: '0s', duration: '4.8s' },
  { id: 's2', top: '28%', left: '15%', delay: '2.2s', duration: '5.4s' },
  { id: 's3', top: '48%', left: '-10%', delay: '4.5s', duration: '4.2s' },
  { id: 's4', top: '18%', left: '40%', delay: '7s', duration: '5.8s' },
  { id: 's5', top: '62%', left: '5%', delay: '9.2s', duration: '4.6s' },
  { id: 's6', top: '35%', left: '55%', delay: '11.5s', duration: '5.1s' },
]

function BackgroundEffects() {
  return (
    <div className="bg-effects" aria-hidden="true">
      <div className="bg-effects__hex" />
      <div className="bg-effects__glow bg-effects__glow--one" />
      <div className="bg-effects__glow bg-effects__glow--two" />
      <div className="bg-effects__glow bg-effects__glow--three" />

      <svg className="bg-effects__network" viewBox="0 0 1000 420" fill="none">
        <g stroke="rgba(62, 203, 255, 0.35)" strokeWidth="1">
          <path d="M80 120 L220 80 L360 150 L520 70 L680 140 L840 90" />
          <path d="M140 260 L280 210 L430 280 L590 200 L760 260 L900 220" />
          <path d="M220 80 L280 210 M360 150 L430 280 M520 70 L590 200 M680 140 L760 260" />
        </g>
        {[
          [80, 120],
          [220, 80],
          [360, 150],
          [520, 70],
          [680, 140],
          [840, 90],
          [140, 260],
          [280, 210],
          [430, 280],
          [590, 200],
          [760, 260],
          [900, 220],
        ].map(([cx, cy], i) => (
          <circle
            key={`n-${i}`}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 4.5 : 3}
            fill={i % 4 === 0 ? '#e8b84a' : '#3ecbff'}
            opacity="0.75"
          />
        ))}
      </svg>

      {PARTICLES.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      {SHOOTING_STARS.map((star) => (
        <span
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundEffects
