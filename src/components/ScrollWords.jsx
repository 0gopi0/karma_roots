import { useScrollProgress } from '../hooks'

// Words light up one by one as the passage scrolls through the viewport.
export default function ScrollWords({ text, className = '', dim = 'opacity-20', from = 0.12, to = 0.55, as: Tag = 'p' }) {
  const [ref, p] = useScrollProgress()
  const words = text.split(' ')
  const lit = ((p - from) / (to - from)) * words.length
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => {
        const t = Math.min(1, Math.max(0, lit - i))
        return (
          <span key={i} aria-hidden="true">
            <span
              className={`transition-opacity duration-300 ${t < 1 ? dim : ''}`}
              style={t > 0 && t < 1 ? { opacity: 0.2 + t * 0.8 } : undefined}
            >
              {w}
            </span>{' '}
          </span>
        )
      })}
    </Tag>
  )
}
