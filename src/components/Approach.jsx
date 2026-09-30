import { APPROACH } from '../data'
import { PETALS } from './Lotus'
import ScrollWords from './ScrollWords'
import { SectionMark } from './bits'
import { useMeasurePaths, useScrollProgress } from '../hooks'

const clamp = (v) => Math.min(1, Math.max(0, v))
const ease = (t) => 1 - Math.pow(1 - t, 3)

export default function Approach() {
  const [ref, p] = useScrollProgress('pin')
  const svgRef = useMeasurePaths()
  // four stages across the pinned scroll, with a little hold at the end
  const sp = APPROACH.map((_, i) => ease(clamp(p * 4.6 - i)))
  const active = Math.min(3, Math.floor(p * 4.6))
  const k = (i) => ({ '--k': 1 - sp[i] })

  return (
    <section id="approach" className="relative bg-plum-900 text-champagne-50">
      <div ref={ref} className="relative h-[420vh]">
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(110,52,65,.5),transparent_60%)]" />

          <div className="relative mx-auto grid h-full w-full max-w-7xl grid-rows-[auto_1fr] items-center gap-2 px-5 pb-8 pt-24 md:px-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-16 lg:py-0">
            {/* Stage list */}
            <div className="order-2 lg:order-1">
              <SectionMark className="text-champagne">Our approach</SectionMark>
              <h2 className="mt-4 flex flex-wrap gap-x-4 font-display text-[clamp(2.2rem,6vw,5rem)] leading-none lg:mt-6 lg:flex-col lg:gap-1">
                {APPROACH.map(([name], i) => (
                  <span
                    key={name}
                    className="transition-all duration-700 ease-bloom lg:[transform:translateX(var(--tx))]"
                    style={{
                      color: sp[i] > 0.05 ? 'var(--color-champagne-50)' : 'rgba(216,186,162,.22)',
                      '--tx': i === active ? '14px' : '0px',
                    }}
                  >
                    {name}.
                  </span>
                ))}
              </h2>

              <div className="relative mt-6 h-24 lg:mt-10">
                {APPROACH.map(([name, text], i) => (
                  <p
                    key={name}
                    className="absolute inset-0 max-w-md font-display text-xl leading-snug text-champagne transition-all duration-700 ease-bloom md:text-2xl"
                    style={{ opacity: i === active ? 1 : 0, transform: `translateY(${i === active ? 0 : i < active ? -16 : 16}px)` }}
                    aria-hidden={i !== active}
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* progress: four seeds */}
              <div className="mt-4 flex items-center gap-3" aria-hidden="true">
                {APPROACH.map(([name], i) => (
                  <div key={name} className="relative h-px flex-1 bg-champagne/15">
                    <div className="absolute inset-y-0 left-0 bg-champagne" style={{ width: `${sp[i] * 100}%` }} />
                    <div
                      className="absolute -top-[5px] left-0 h-[11px] w-[11px] -translate-x-1/2 rotate-45 border border-champagne transition-colors duration-500"
                      style={{ background: sp[i] > 0 ? 'var(--color-champagne)' : 'var(--color-plum-900)' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Growing lotus */}
            <div className="order-1 flex h-full max-h-[46svh] items-center justify-center lg:order-2 lg:max-h-[80svh]">
              <svg
                ref={svgRef}
                viewBox="0 0 300 400"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="grow h-full w-auto text-champagne"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="bloomGlow">
                    <stop offset="0" stopColor="#d8baa2" stopOpacity=".45" />
                    <stop offset="1" stopColor="#d8baa2" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="soil" cx=".5" cy="0" r=".5">
                    <stop offset="0" stopColor="#8a4a57" stopOpacity=".6" />
                    <stop offset="1" stopColor="#6e3441" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* soil */}
                <rect x="0" y="260" width="300" height="140" fill="url(#soil)" stroke="none" style={{ opacity: sp[0] }} />

                {/* ROOT */}
                <g style={k(0)} strokeWidth="1.2">
                  <path d="M30 260 H270" strokeWidth=".8" />
                  <path d="M150 262 C150 300 150 330 150 392" />
                  <path d="M150 260 C150 290 140 310 120 340 C110 355 100 360 86 372" />
                  <path d="M150 260 C152 295 165 320 185 345 C195 358 208 364 222 376" />
                  <path d="M147 300 C130 310 118 312 98 310" />
                  <path d="M153 305 C172 312 186 312 206 304" />
                  <path d="M120 340 C122 355 118 367 110 382" />
                  <path d="M185 345 C182 360 188 372 196 388" />
                  <path d="M150 350 C140 360 134 372 132 390" />
                </g>
                <circle cx="150" cy="260" r="4" fill="currentColor" stroke="none" style={{ opacity: sp[0] }} />

                {/* BUILD */}
                <g style={k(1)} strokeWidth="1.3">
                  <path d="M150 260 C147 225 154 190 150 150" />
                  <path d="M150 232 C130 229 112 215 106 195 C126 197 143 210 150 232" />
                  <path d="M151 205 C171 201 187 187 192 167 C173 169 158 183 151 205" />
                  <path d="M150 232 C136 222 124 208 106 195" strokeWidth=".7" />
                  <path d="M151 205 C165 195 178 182 192 167" strokeWidth=".7" />
                </g>

                {/* REACH: ripples and the five dots */}
                <g style={k(2)} strokeWidth=".8" className="text-champagne/60">
                  <path d="M50 150 A100 100 0 0 1 250 150" />
                  <path d="M15 150 A135 135 0 0 1 285 150" />
                </g>
                {[
                  [36, 118],
                  [72, 64],
                  [150, 30],
                  [228, 64],
                  [264, 118],
                ].map(([cx, cy], i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="4"
                    strokeWidth="1.2"
                    style={{
                      opacity: clamp(sp[2] * 5 - i * 0.8),
                      transformOrigin: `${cx}px ${cy}px`,
                      transform: `scale(${0.4 + clamp(sp[2] * 5 - i * 0.8) * 0.6})`,
                    }}
                  />
                ))}

                {/* GROW: the lotus blooms */}
                <circle cx="150" cy="110" r="90" fill="url(#bloomGlow)" stroke="none" style={{ opacity: sp[3], transformOrigin: '150px 110px', transform: `scale(${0.6 + sp[3] * 0.4})` }} />
                <g style={k(3)} strokeWidth="2.2" transform="translate(85 42.75) scale(.65)">
                  {PETALS.slice(0, 7).map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pb-28 pt-10 md:px-10 md:pb-40">
        <ScrollWords
          className="font-display text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[1.2] text-champagne-50"
          dim="opacity-15"
          text="Because good marketing isn’t about doing more. It’s about making more of what matters."
        />
      </div>
    </section>
  )
}
