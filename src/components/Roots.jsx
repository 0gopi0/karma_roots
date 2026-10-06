import { useEffect, useState } from 'react'
import { ROOTS } from '../data'
import Mandala from './Mandala'
import { MaskHeading, Reveal, SectionMark, TempleBorder } from './bits'

export default function Roots() {
  const [open, setOpen] = useState(0)

  // the hero orbit picks a root before scrolling here
  useEffect(() => {
    const onPick = (e) => setOpen(e.detail)
    window.addEventListener('kr:root', onPick)
    return () => window.removeEventListener('kr:root', onPick)
  }, [])

  return (
    <section id="roots" className="relative overflow-hidden bg-ivory px-5 py-14 md:px-10 md:py-28">
      <TempleBorder color="#4d262e" className="absolute inset-x-0 top-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <div
              className="pointer-events-none absolute -left-20 -top-16 hidden h-[19rem] w-[19rem] text-plum-700/[0.07] lg:block"
              aria-hidden="true"
            >
              <Mandala petals={30} strokeWidth={0.6} className="h-full w-full" />
            </div>

            <SectionMark className="relative text-plum-600">What we do</SectionMark>
            <MaskHeading
              className="relative mt-5 font-display text-[clamp(2.3rem,4.6vw,3.9rem)] leading-[1.04] text-plum-700"
              lines={['Five roots.', 'One bigger picture.']}
            />
            <span className="relative mt-6 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-10 bg-gold/60" />
              <span className="h-1.5 w-1.5 rotate-45 border border-gold/70" />
              <span className="h-px w-10 bg-gold/60" />
            </span>
            <Reveal>
              <p className="rise mt-6 max-w-md text-lg text-ink/75" style={{ '--d': '.2s' }}>
                From defining what a brand stands for to taking it to the right audience, Karma Roots works across the full brand
                journey, with senior-led thinking at every step.
              </p>
            </Reveal>
          </div>

          <Reveal as="ul" className="border-t border-plum-700/20">
            {ROOTS.map((r, i) => {
              const on = open === i
              return (
                <li key={r.key} className="rise border-b border-plum-700/20" style={{ '--d': `${i * 0.08}s` }}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(on ? null : i)}
                      aria-expanded={on}
                      aria-controls={`root-${r.key}`}
                      className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-5 text-left md:grid-cols-[3rem_1fr_auto] md:gap-x-6 md:py-7"
                    >
                      <span
                        className={`flex h-7 w-7 rotate-45 items-center justify-center border transition-colors duration-500 ease-bloom md:h-8 md:w-8 ${
                          on ? 'border-plum-700 bg-plum-700' : 'border-gold/50 group-hover:border-gold'
                        }`}
                        aria-hidden="true"
                      >
                        <span className={`-rotate-45 font-display text-[0.7rem] ${on ? 'text-champagne-50' : 'text-plum-600'}`}>
                          {r.no}
                        </span>
                      </span>
                      <span
                        className={`font-display text-3xl transition-colors duration-300 md:text-4xl ${
                          on ? 'text-plum-700' : 'text-plum-700/70 group-hover:text-plum-700'
                        }`}
                      >
                        {r.name}
                      </span>
                      <span className="col-start-2 row-start-2 mt-1 text-[0.95rem] italic text-ink/70 md:text-lg">{r.area}</span>
                      <span
                        className={`col-start-3 row-start-1 flex h-9 w-9 rotate-45 items-center justify-center border transition-all duration-500 ease-bloom md:h-10 md:w-10 ${
                          on ? 'border-plum-700 bg-plum-700 text-champagne-50' : 'border-plum-700/30 text-plum-700 group-hover:border-plum-700'
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className={`h-3.5 w-3.5 transition-transform duration-500 ease-bloom ${on ? 'rotate-0' : '-rotate-45'}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        >
                          <path d="M8 2v12M2 8h12" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`root-${r.key}`}
                    className={`grid transition-[grid-template-rows] duration-700 ease-bloom ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`ml-3.5 grid gap-6 border-l border-gold/30 pb-8 pl-10 transition-opacity duration-500 md:ml-4 md:gap-8 md:pb-10 md:pl-14 ${
                          on ? 'opacity-100 delay-150' : 'opacity-0'
                        }`}
                      >
                        <div>
                          <p className="font-display text-xl leading-snug text-plum-700">{r.line}</p>
                          <p className="mt-3 text-ink/70">{r.body}</p>
                        </div>
                        <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                          {r.services.map(([name, desc]) => (
                            <li key={name} className="flex gap-3">
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                              <div>
                                <p className="font-display text-lg text-plum-700">{name}</p>
                                <p className="text-[0.95rem] leading-snug text-ink/70">{desc}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
