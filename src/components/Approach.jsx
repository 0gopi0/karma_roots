import { useEffect, useState } from 'react'
import { APPROACH } from '../data'
import Lotus from './Lotus'
import ScrollWords from './ScrollWords'
import { MaskHeading, Reveal, SectionMark } from './bits'
import { prefersReducedMotion, useInView } from '../hooks'

// One glyph per stage: seed and roots, sprout, ripples, bloom.
const ICONS = [
  <g key="root">
    <path d="M24 11 C28 13.5 28 19.5 24 22 C20 19.5 20 13.5 24 11Z" />
    <path d="M8 22 H40" />
    <path d="M24 22 V40 M24 26 C20 30 16 32 12 38 M24 26 C28 30 32 32 36 38 M24 32 C22 35 20 37 19 41 M24 32 C26 35 28 37 29 41" />
  </g>,
  <g key="build">
    <path d="M24 42 V16" />
    <path d="M24 30 C16 30 11 25 10 18 C17 18 23 23 24 30Z" />
    <path d="M24 23 C31 23 36 18 38 11 C31 11 25 16 24 23Z" />
    <path d="M14 42 H34" />
  </g>,
  <g key="reach">
    <circle cx="24" cy="30" r="3" fill="currentColor" />
    <path d="M15 30 A9 9 0 0 1 33 30" />
    <path d="M9 30 A15 15 0 0 1 39 30" />
    <path d="M3 30 A21 21 0 0 1 45 30" />
  </g>,
]

const STEP_MS = 3600

export default function Approach() {
  const [active, setActive] = useState(0)
  const [touched, setTouched] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.3 })

  // walk through the stages on its own until someone picks one
  useEffect(() => {
    if (touched || !inView || prefersReducedMotion()) return
    const t = setInterval(() => setActive((a) => (a + 1) % APPROACH.length), STEP_MS)
    return () => clearInterval(t)
  }, [touched, inView])

  const pick = (i) => {
    setTouched(true)
    setActive(i)
  }

  return (
    <section id="approach" className="relative overflow-hidden bg-plum-900 px-5 py-14 text-champagne-50 md:px-10 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(110,52,65,.5),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <SectionMark className="text-champagne">Our approach</SectionMark>
            <MaskHeading
              className="mt-5 font-display text-[clamp(2.3rem,5.5vw,4.4rem)] leading-[1.04] text-champagne-50"
              lines={['Root. Build.', 'Reach. Grow.']}
            />
          </div>
          <Reveal>
            <p className="rise max-w-md text-lg text-champagne/75 lg:pb-2" style={{ '--d': '.2s' }}>
              Four stages we take every brand through, from finding its purpose to turning attention into momentum.
            </p>
          </Reveal>
        </div>

        {/* progress rail linking the four stages */}
        <div className="mt-16 hidden grid-cols-4 lg:grid" aria-hidden="true">
          {APPROACH.map(([name], i) => (
            <div key={name} className="relative h-px bg-champagne/15">
              <div
                className="absolute inset-y-0 left-0 bg-champagne transition-[width] duration-700 ease-bloom"
                style={{ width: i < active ? '100%' : '0%' }}
              />
              <div
                className={`absolute -top-[5px] left-0 h-[11px] w-[11px] rotate-45 border border-champagne transition-colors duration-500 ${
                  i <= active ? 'bg-champagne' : 'bg-plum-900'
                }`}
              />
            </div>
          ))}
        </div>

        <ol ref={ref} className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:mt-8 lg:grid-cols-4 lg:gap-5">
          {APPROACH.map(([name, text], i) => {
            const on = active === i
            return (
              <li key={name}>
                <button
                  type="button"
                  onMouseEnter={() => pick(i)}
                  onFocus={() => pick(i)}
                  onClick={() => pick(i)}
                  aria-pressed={on}
                  className={`relative flex h-full min-h-[12rem] w-full flex-col overflow-hidden rounded-2xl border p-6 text-left sm:min-h-[17rem] md:p-7 transition-all duration-500 ease-bloom ${
                    on
                      ? '-translate-y-2 border-champagne bg-champagne text-plum-900 shadow-[0_30px_60px_-25px_rgba(0,0,0,.7)]'
                      : 'border-champagne/15 bg-plum-800/50 text-champagne-50 hover:border-champagne/40'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`font-display text-sm tracking-[0.2em] ${on ? 'text-plum-600' : 'text-gold'}`}>0{i + 1}</span>
                    {i < 3 ? (
                      <svg
                        viewBox="0 0 48 48"
                        className={`h-12 w-12 transition-all duration-500 ${on ? 'scale-110 text-plum-700' : 'text-champagne/60'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {ICONS[i]}
                      </svg>
                    ) : (
                      <Lotus
                        className={`h-12 w-12 transition-all duration-500 ${on ? 'scale-110 text-plum-700' : 'text-champagne/60'}`}
                        strokeWidth={4}
                        dots={false}
                      />
                    )}
                  </div>

                  <h3 className="mt-auto pt-5 font-display text-[2rem] leading-none md:pt-8">{name}.</h3>
                  <p className={`mt-3 text-[1.02rem] leading-snug ${on ? 'text-plum-900/75' : 'text-champagne/65'}`}>{text}</p>
                </button>
              </li>
            )
          })}
        </ol>

        <div className="mx-auto mt-14 max-w-5xl md:mt-32">
          <ScrollWords
            className="font-display text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[1.2] text-champagne-50"
            dim="opacity-15"
            text="Because good marketing isn’t about doing more. It’s about making more of what matters."
          />
        </div>
      </div>
    </section>
  )
}
