import { ROOTS } from '../data'

const ALL = ROOTS.flatMap((r) => r.services.map(([n]) => n))

function Border() {
  // temple-border strip: alternating diamonds and dots
  return (
    <div
      className="h-3 w-full opacity-60"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='12'><path d='M7 1 L12 6 L7 11 L2 6 Z' fill='none' stroke='%23d8baa2' stroke-width='.8'/><circle cx='21' cy='6' r='1.4' fill='%23d8baa2'/></svg>\")",
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
      }}
      aria-hidden="true"
    />
  )
}

function Row({ items }) {
  const list = [...items, ...items]
  return (
    <div className="group flex overflow-hidden">
      <ul className="flex shrink-0 animate-marquee items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
        {list.map((s, i) => (
          <li key={i} className="flex items-center" aria-hidden={i >= items.length}>
            <span className="px-5 font-display text-[clamp(1.05rem,1.6vw,1.35rem)] text-champagne transition-colors duration-300 hover:text-champagne-50">
              {s}
            </span>
            <svg viewBox="0 0 20 20" className="h-2.5 w-2.5 text-gold" fill="currentColor" aria-hidden="true">
              <path d="M10 0 C12 6 14 8 20 10 C14 12 12 14 10 20 C8 14 6 12 0 10 C6 8 8 6 10 0Z" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Marquee() {
  return (
    <section aria-label="Services at a glance" className="relative bg-plum-900 py-2">
      <Border />
      <div className="py-3 md:py-4">
        <Row items={ALL} />
      </div>
      <Border />
    </section>
  )
}
