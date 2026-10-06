import { useInView } from '../hooks'

/** Traditional temple-border strip: alternating diamonds and dots. */
export function TempleBorder({ color = '#d8baa2', className = '' }) {
  const stroke = encodeURIComponent(color)
  return (
    <div
      aria-hidden="true"
      className={`h-3 w-full ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='12'><path d='M7 1 L12 6 L7 11 L2 6 Z' fill='none' stroke='${stroke}' stroke-width='.8'/><circle cx='21' cy='6' r='1.4' fill='${stroke}'/></svg>")`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
      }}
    />
  )
}

/** Small section marker: the logo's three rising dots + a sentence-case label. */
export function SectionMark({ children, className = '' }) {
  return (
    <p className={`flex items-center gap-3 text-[0.95rem] italic ${className}`}>
      <svg viewBox="0 0 28 12" className="h-3 w-7" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <circle cx="4" cy="8" r="2.2" />
        <circle cx="14" cy="3.5" r="2.2" />
        <circle cx="24" cy="8" r="2.2" />
      </svg>
      {children}
    </p>
  )
}

/** Heading whose lines slide up out of a mask when scrolled into view. */
export function MaskHeading({ lines, as: Tag = 'h2', className = '', stagger = 0.1, delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <Tag ref={ref} className={`${inView ? 'in-view' : ''} ${className}`}>
      {lines.map((l, i) => (
        <span key={i} className="mask-line">
          <span style={{ '--d': `${delay + i * stagger}s` }}>{l}</span>
        </span>
      ))}
    </Tag>
  )
}

/** Wraps children and flips `in-view` on for any `.rise` descendants. */
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag ref={ref} className={`${inView ? 'in-view' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
