import { useInView } from '../hooks'

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
