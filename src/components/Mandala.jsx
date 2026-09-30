// Decorative rangoli-style ring built from the logo's petal + dot vocabulary.
export default function Mandala({ className = '', petals = 24, strokeWidth = 0.6 }) {
  const items = Array.from({ length: petals })
  return (
    <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="196" strokeDasharray="1 6" strokeLinecap="round" />
      <circle cx="200" cy="200" r="150" />
      <circle cx="200" cy="200" r="118" strokeDasharray="2 4" />
      {items.map((_, i) => {
        const a = (360 / petals) * i
        return (
          <g key={i} transform={`rotate(${a} 200 200)`}>
            <path d="M200 50 C212 70 212 90 200 106 C188 90 188 70 200 50 Z" />
            <circle cx="200" cy="36" r="3" />
            <path d="M200 150 C204 140 204 128 200 120" />
          </g>
        )
      })}
      {items.map((_, i) => (
        <circle
          key={`d${i}`}
          cx="200"
          cy="170"
          r="1.6"
          fill="currentColor"
          transform={`rotate(${(360 / petals) * i + 180 / petals} 200 200)`}
        />
      ))}
    </svg>
  )
}
