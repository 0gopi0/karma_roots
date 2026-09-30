import { WHY } from '../data'
import { MaskHeading, Reveal, SectionMark } from './bits'

const ICONS = [
  // Senior-led: banyan tree with aerial roots
  <g key="a">
    <path d="M24 40 V22" />
    <path d="M24 24 C14 24 8 18 10 12 C14 6 34 6 38 12 C40 18 34 24 24 24" />
    <path d="M14 22 V34 M34 22 V34 M19 24 V30 M29 24 V30" />
    <path d="M12 40 H36" />
  </g>,
  // Boutique by design: a single bud
  <g key="b">
    <path d="M24 8 C32 16 32 28 24 34 C16 28 16 16 24 8Z" />
    <path d="M24 34 C18 34 12 30 10 24 C16 24 22 28 24 34 C26 28 32 24 38 24 C36 30 30 34 24 34" />
    <path d="M24 34 V42" />
  </g>,
  // Strategy meets creativity: interlaced circles
  <g key="c">
    <circle cx="18" cy="24" r="11" />
    <circle cx="30" cy="24" r="11" />
    <circle cx="24" cy="24" r="1.6" fill="currentColor" />
  </g>,
  // Built for what's next: sun rising over the horizon
  <g key="d">
    <path d="M10 34 H38" />
    <path d="M15 34 A9 9 0 0 1 33 34" />
    <path d="M24 16 V12 M13 21 L10 18 M35 21 L38 18 M24 42 V38" />
  </g>,
]

function onMove(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width
  const y = (e.clientY - r.top) / r.height
  el.style.setProperty('--x', `${x * 100}%`)
  el.style.setProperty('--y', `${y * 100}%`)
  el.style.setProperty('--rx', `${(0.5 - y) * 8}deg`)
  el.style.setProperty('--ry', `${(x - 0.5) * 10}deg`)
}
function onLeave(e) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

export default function Why() {
  return (
    <section id="why" className="relative bg-ivory px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionMark className="text-plum-600">Why Karma Roots</SectionMark>
            <MaskHeading
              className="mt-5 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.04] text-plum-700"
              lines={['Not just another', 'pair of hands.']}
            />
          </div>
          <Reveal className="lg:pt-14">
            <p className="rise font-display text-2xl leading-snug text-plum-600 md:text-[1.7rem]">
              We work closely, think deeply and stay involved.
            </p>
            <p className="rise mt-6 max-w-xl text-lg text-ink/75" style={{ '--d': '.12s' }}>
              Karma Roots brings senior experience to the table, combining strategic thinking with creative execution. No
              unnecessary layers, no one-size-fits-all playbooks, no chasing trends for the sake of it.
            </p>
            <p className="rise mt-4 max-w-xl text-lg italic text-ink/75" style={{ '--d': '.24s' }}>
              Just the right thinking, the right people and ideas that have somewhere to go.
            </p>
          </Reveal>
        </div>

        <Reveal as="ul" className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-5">
          {WHY.map(([title, text], i) => (
            <li key={title} className="rise [perspective:900px]" style={{ '--d': `${i * 0.1}s` }}>
              <div
                onPointerMove={onMove}
                onPointerLeave={onLeave}
                className="arch group relative flex h-full min-h-[22rem] flex-col items-center overflow-hidden border border-plum-700/25 bg-blush/60 px-7 pb-9 pt-16 text-center transition-[transform,background-color,border-color] duration-500 ease-bloom [transform:rotateX(var(--rx,0))_rotateY(var(--ry,0))] hover:border-plum-700"
              >
                {/* lamp-light fill that rises from the base */}
                <span className="absolute inset-0 translate-y-full bg-plum-700 transition-transform duration-700 ease-bloom group-hover:translate-y-0" />
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(260px_circle_at_var(--x,50%)_var(--y,50%),rgba(216,186,162,.28),transparent_60%)]" />
                {/* inner arch hairline */}
                <span className="arch pointer-events-none absolute inset-3 border border-plum-700/15 transition-colors duration-500 group-hover:border-champagne/30" />

                <svg
                  viewBox="0 0 48 48"
                  className="relative h-14 w-14 text-plum-600 transition-all duration-700 ease-bloom group-hover:-translate-y-1 group-hover:text-champagne"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[i]}
                </svg>
                <h3 className="relative mt-8 font-display text-[1.6rem] leading-tight text-plum-700 transition-colors duration-500 group-hover:text-champagne-50">
                  {title}
                </h3>
                <p className="relative mt-4 text-ink/70 transition-colors duration-500 group-hover:text-champagne-50/80">{text}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
