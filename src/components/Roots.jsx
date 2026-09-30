import { useRef, useState } from 'react'
import { ROOTS } from '../data'
import Lotus, { DOTS } from './Lotus'
import { MaskHeading, Reveal, SectionMark } from './bits'
import { useInView } from '../hooks'

export default function Roots() {
  const [active, setActive] = useState(0)
  const [lotusRef, lotusIn] = useInView({ threshold: 0.3 })
  const touch = useRef(null)
  const root = ROOTS[active]

  const go = (i) => setActive((i + ROOTS.length) % ROOTS.length)
  const onKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      go(active + 1)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      go(active - 1)
    }
  }

  return (
    <section id="roots" className="relative overflow-clip bg-plum-800 px-5 py-24 text-champagne-50 md:px-10 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(110,52,65,.55),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionMark className="text-champagne">What we do</SectionMark>
          <MaskHeading
            className="mt-5 font-display text-[clamp(2.4rem,6.5vw,5rem)] leading-[1.02] text-champagne-50"
            lines={['Five roots.', 'One bigger picture.']}
          />
          <Reveal>
            <p className="rise mt-7 max-w-2xl text-lg text-champagne-50/75" style={{ '--d': '.3s' }}>
              From defining what a brand stands for to taking it to the right audience, Karma Roots works across the full brand
              journey, with senior-led thinking at every step.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:mt-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          {/* Interactive lotus: the logo's five dots are the five roots */}
          <div ref={lotusRef} className="relative mx-auto w-full max-w-[520px] lg:sticky lg:top-28">
            <div className="relative px-6 pt-6 sm:px-16 sm:pt-10">
              <div className="relative">
                <Lotus drawn={lotusIn} dots={false} strokeWidth={0.9} className="w-full text-champagne/80" />
                {/* active petal glow */}
                <div
                  className="pointer-events-none absolute left-1/2 top-[44%] h-1/2 w-1/2 rounded-full bg-champagne/10 blur-3xl transition-all duration-1000"
                  style={{ transform: `translate(calc(-50% + ${(DOTS[active][0] - 100) * 0.6}%), -50%)` }}
                />
                <div role="tablist" aria-label="Our five roots" onKeyDown={onKey}>
                  {DOTS.map(([cx, cy], i) => {
                    const r = ROOTS[i]
                    const on = i === active
                    const side = cx < 90 ? 'right-full mr-1 text-right' : cx > 110 ? 'left-full ml-1' : 'bottom-full mb-0 left-1/2 -translate-x-1/2 text-center'
                    return (
                      <button
                        key={r.key}
                        role="tab"
                        id={`tab-${r.key}`}
                        aria-selected={on}
                        aria-controls="root-panel"
                        tabIndex={on ? 0 : -1}
                        onClick={() => setActive(i)}
                        className="group absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                        style={{ left: `${(cx / 200) * 100}%`, top: `${(cy / 175) * 100}%` }}
                      >
                        {on && <span className="absolute h-7 w-7 animate-ping rounded-full border border-champagne/60" />}
                        <span
                          className={`relative block rounded-full border border-champagne transition-all duration-500 ease-bloom ${
                            on ? 'h-4 w-4 bg-champagne shadow-[0_0_24px_4px_rgba(216,186,162,.6)]' : 'h-3 w-3 bg-plum-800 group-hover:scale-150'
                          }`}
                        />
                        <span
                          className={`absolute hidden whitespace-nowrap font-display text-sm transition-all duration-500 sm:block ${side} ${
                            on ? 'text-champagne-50' : 'text-champagne/50 group-hover:text-champagne'
                          }`}
                        >
                          {r.name}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* compact tab row for small screens */}
            <div className="scrollbar-none -mx-5 mt-8 flex gap-2 overflow-x-auto px-5 sm:hidden" aria-hidden="true">
              {ROOTS.map((r, i) => (
                <button
                  key={r.key}
                  tabIndex={-1}
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-full border px-4 py-2 font-display text-sm transition-all duration-500 ${
                    i === active ? 'border-champagne bg-champagne text-plum-900' : 'border-champagne/30 text-champagne/80'
                  }`}
                >
                  {r.no} {r.name}
                </button>
              ))}
            </div>
          </div>

          {/* Panel */}
          <div
            id="root-panel"
            role="tabpanel"
            aria-labelledby={`tab-${root.key}`}
            className="relative min-h-[34rem]"
            onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touch.current == null) return
              const dx = e.changedTouches[0].clientX - touch.current
              if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1))
              touch.current = null
            }}
          >
            <div key={root.key} className="animate-[panelIn_.9s_var(--ease-bloom)_both]">
              <div className="flex items-baseline gap-5">
                <span className="font-display text-sm text-champagne/60">{root.no} / 05</span>
                <span className="h-px flex-1 origin-left animate-[lineIn_1.2s_var(--ease-bloom)_both] bg-champagne/25" />
                <span className="text-sm italic text-champagne/70">{root.area}</span>
              </div>
              <h3 className="foil mt-4 font-display text-[clamp(3.6rem,11vw,7.5rem)] leading-[0.95]">{root.name}</h3>
              <p className="mt-6 font-display text-[clamp(1.35rem,2.6vw,1.9rem)] leading-snug text-champagne-50">{root.line}</p>
              <p className="mt-4 max-w-xl text-champagne-50/70">{root.body}</p>

              <ul className="mt-10 border-t border-champagne/15">
                {root.services.map(([name, desc], i) => (
                  <li
                    key={name}
                    className="group relative animate-[panelIn_.9s_var(--ease-bloom)_both] overflow-hidden border-b border-champagne/15"
                    style={{ animationDelay: `${0.15 + i * 0.07}s` }}
                  >
                    <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-champagne/15 to-transparent transition-transform duration-700 ease-bloom group-hover:scale-x-100" />
                    <div className="relative flex flex-col gap-1 py-5 transition-transform duration-500 ease-bloom group-hover:translate-x-3 md:flex-row md:items-baseline md:gap-8">
                      <span className="font-display text-xl text-champagne-50 md:w-[45%] md:shrink-0">{name}</span>
                      <span className="text-[0.98rem] text-champagne-50/65">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => go(active - 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/30 transition-colors hover:border-champagne hover:bg-champagne/10"
                  aria-label="Previous root"
                >
                  <Chevron className="rotate-180" />
                </button>
                <button
                  onClick={() => go(active + 1)}
                  className="group flex items-center gap-3 rounded-full border border-champagne/30 py-3 pl-5 pr-4 font-display text-sm transition-colors hover:border-champagne hover:bg-champagne/10"
                >
                  Next: {ROOTS[(active + 1) % ROOTS.length].name}
                  <Chevron className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes panelIn{from{opacity:0;transform:translateY(18px);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}
        @keyframes lineIn{from{transform:scaleX(0)}to{transform:scaleX(1)}}
      `}</style>
    </section>
  )
}

function Chevron({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
