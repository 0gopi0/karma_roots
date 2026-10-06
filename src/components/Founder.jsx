import portrait from '../assets/founder-arch.webp'
import { FOUNDER } from '../data'
import Mandala from './Mandala'
import { MaskHeading, Reveal, SectionMark, TempleBorder } from './bits'

// Circular text that rings the lotus seal on the portrait.
function Seal() {
  return (
    <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-plum-700 text-champagne shadow-[0_18px_40px_-14px_rgba(43,18,25,.8)] sm:-right-8 sm:h-32 sm:w-32">
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <defs>
          <path id="seal-ring" d="M50 50m-37 0a37 37 0 1 1 74 0a37 37 0 1 1-74 0" />
        </defs>
        <text className="fill-current font-display text-[8.4px] tracking-[0.18em]">
          <textPath href="#seal-ring" textLength="228" lengthAdjust="spacing">
            FOUNDER ✦ KARMA ROOTS ✦ BRAND STORYTELLER ✦
          </textPath>
        </text>
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 4c2.2 2.6 2.2 7.4 0 10-2.2-2.6-2.2-7.4 0-10Z" />
        <path d="M12 14c-1.5-3.6-4.8-5.6-8-5 .4 3.6 3.6 6 8 5Zm0 0c1.5-3.6 4.8-5.6 8-5-.4 3.6-3.6 6-8 5Z" />
        <path d="M5 17.5h14" />
      </svg>
    </div>
  )
}

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-champagne-50 px-5 py-24 md:px-10 md:py-28">
      <TempleBorder color="#4d262e" className="absolute inset-x-0 top-0 opacity-25" />

      <div className="relative mx-auto grid max-w-6xl gap-x-20 gap-y-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* portrait in a temple arch, ringed by a rangoli */}
        <Reveal className="mx-auto w-full max-w-[340px] lg:col-start-1 lg:row-start-1">
          <div className="rise relative">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[142%] -translate-x-1/2 -translate-y-1/2 text-plum-700/[0.08]"
              aria-hidden="true"
            >
              <Mandala petals={32} strokeWidth={0.6} className="h-full w-full" />
            </div>
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-gold/70" aria-hidden="true" />
            <div className="absolute inset-0 -translate-x-4 rounded-t-full border border-plum-700/15" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-t-full bg-champagne p-2 shadow-[0_40px_70px_-30px_rgba(77,38,46,.6)]">
              <img
                src={portrait}
                alt={`${FOUNDER.name}, founder of Karma Roots`}
                width="360"
                height="416"
                loading="lazy"
                className="aspect-[360/416] w-full rounded-t-full object-cover"
              />
            </div>
            <Seal />
          </div>
        </Reveal>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <SectionMark className="text-plum-600">Meet the founder</SectionMark>
          <MaskHeading className="mt-5 font-display text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[1.04] text-plum-700" lines={[FOUNDER.name]} />
          <Reveal>
            <p className="rise mt-3 text-lg italic text-plum-600" style={{ '--d': '.15s' }}>
              {FOUNDER.role}
            </p>
            <span className="mt-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-10 bg-gold/60" />
              <span className="h-1.5 w-1.5 rotate-45 border border-gold/70" />
              <span className="h-px w-10 bg-gold/60" />
            </span>
            <p className="rise mt-6 max-w-xl text-lg text-ink/75" style={{ '--d': '.25s' }}>
              {FOUNDER.intro}
            </p>

            {/* brand list: hidden on mobile */}
            <p className="rise mt-8 hidden text-[0.95rem] italic text-ink/70 md:block" style={{ '--d': '.35s' }}>
              Brands Sandhya has built for
            </p>
            <ul className="rise mt-3 hidden flex-wrap items-center gap-x-6 gap-y-2 md:flex" style={{ '--d': '.45s' }}>
              {FOUNDER.brands.map((b) => (
                <li key={b} className="flex items-center gap-2.5 font-display text-lg text-plum-700">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* counters: under the portrait on desktop, after the intro on mobile */}
        <Reveal className="w-full lg:col-start-1 lg:row-start-2 lg:mx-auto lg:max-w-[340px]">
          <dl
            className="rise relative grid grid-cols-3 divide-x divide-plum-700/15 border-y border-plum-700/15"
            style={{ '--d': '.2s' }}
          >
            <span className="absolute -left-1 -top-1 h-2 w-2 rotate-45 border border-gold/60" aria-hidden="true" />
            <span className="absolute -right-1 -top-1 h-2 w-2 rotate-45 border border-gold/60" aria-hidden="true" />
            <span className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-gold/60" aria-hidden="true" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-gold/60" aria-hidden="true" />
            {FOUNDER.stats.map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse justify-end gap-2 px-2 py-5 text-center">
                <dt className="text-[0.8rem] leading-snug text-ink/70">{label}</dt>
                <dd className="font-display text-[2.2rem] leading-none text-plum-700">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
