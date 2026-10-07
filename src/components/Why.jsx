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

// Column dividers and outer-edge padding for the 2-up and 4-up grids.
const EDGE = [
  'sm:border-r sm:pl-0 lg:border-r',
  'sm:pr-0 lg:border-r lg:pr-7',
  'sm:border-r sm:pl-0 lg:border-r lg:pl-7',
  'sm:pr-0',
]

const DEFAULT_COPY = {
  mark: 'Why Karma Roots',
  titleLines: ['Not just another', 'pair of hands.'],
  lead: 'We work closely, think deeply and stay involved.',
  body: 'Karma Roots brings senior experience to the table, combining strategic thinking with creative execution. No unnecessary layers, no one-size-fits-all playbooks, no chasing trends for the sake of it.',
  closing: 'Just the right thinking, the right people and ideas that have somewhere to go.',
  pillars: WHY,
}

export default function Why({ copy }) {
  const c = { ...DEFAULT_COPY, ...copy }
  return (
    <section id="why" className="relative bg-ivory px-5 py-14 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionMark className="text-plum-600">{c.mark}</SectionMark>
            <MaskHeading
              className="mt-5 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.04] text-plum-700"
              lines={c.titleLines}
            />
          </div>
          <Reveal className="lg:pt-14">
            <p className="rise font-display text-2xl leading-snug text-plum-600 md:text-[1.7rem]">
              {c.lead}
            </p>
            <p className="rise mt-6 max-w-xl text-lg text-ink/75" style={{ '--d': '.12s' }}>
              {c.body}
            </p>
            <p className="rise mt-4 max-w-xl text-lg italic text-ink/75" style={{ '--d': '.24s' }}>
              {c.closing}
            </p>
          </Reveal>
        </div>

        <Reveal as="ul" className="mt-10 grid border-t border-plum-700/20 sm:grid-cols-2 md:mt-16 lg:mt-24 lg:grid-cols-4">
          {c.pillars.map(([title, text], i) => (
            <li
              key={title}
              className={`rise group relative border-b border-plum-700/20 py-7 sm:px-7 md:py-10 lg:border-b-0 ${EDGE[i]}`}
              style={{ '--d': `${i * 0.1}s` }}
            >
              {/* rule that draws across the top on hover */}
              <span className="absolute -top-px left-0 h-0.5 w-full origin-left scale-x-0 bg-plum-700 transition-transform duration-700 ease-bloom group-hover:scale-x-100" />

              <div className="flex items-start justify-between">
                <span className="font-display text-sm tracking-[0.2em] text-gold">0{i + 1}</span>
                <svg
                  viewBox="0 0 48 48"
                  className="h-11 w-11 text-plum-600/70 transition-all duration-700 ease-bloom group-hover:-translate-y-1 group-hover:text-plum-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[i]}
                </svg>
              </div>
              <h3 className="mt-4 font-display text-[1.55rem] leading-tight text-plum-700 transition-transform duration-500 ease-bloom group-hover:translate-x-1 md:mt-8">
                {title}
              </h3>
              <p className="mt-3 text-ink/70">{text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
