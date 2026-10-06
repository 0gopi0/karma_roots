import { useState } from 'react'
import { ROOTS } from '../data'
import Lotus from './Lotus'
import Mandala from './Mandala'

// Line icons for the five roots, drawn on a 24px grid.
const ICONS = {
  root: (
    <>
      <path d="M12 3v9" />
      <path d="M12 7c-2-2-5-2-6 0 2 2 4 2 6 0Zm0 1c2-2 5-2 6 0-2 2-4 2-6 0Z" />
      <path d="M4 12h16" />
      <path d="M12 12v8M12 14c-2 1-3 3-4 5M12 14c2 1 3 3 4 5" />
    </>
  ),
  story: (
    <>
      <path d="M4 5.5C6.5 4.5 9.5 4.5 12 6v13c-2.5-1.5-5.5-1.5-8-.5Z" />
      <path d="M20 5.5c-2.5-1-5.5-1-8 .5v13c2.5-1.5 5.5-1.5 8-.5Z" />
    </>
  ),
  reach: (
    <>
      <path d="M4 10v4h3l6 4V6L7 10H4Z" />
      <path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11" />
    </>
  ),
  experience: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
      <path d="M18 16l.7 1.8L20.5 18.5l-1.8.7L18 21l-.7-1.8-1.8-.7 1.8-.7Z" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19h16" />
      <path d="M5 15l4.5-4.5 3 3L19 7" />
      <path d="M14.5 7H19v4.5" />
    </>
  ),
}

// Sits in the corners, outside the path the orbiting roots travel.
const TAGS = [
  { text: 'Brand Identity', pos: 'left-0 top-0', d: 0 },
  { text: 'Public Relations', pos: 'right-0 top-[3%]', d: 1.2 },
  { text: 'Social Media', pos: 'left-[1%] bottom-[2%]', d: 2.1 },
  { text: 'Brand Launches', pos: 'right-0 bottom-0', d: 0.6 },
]

const R = 41 // orbit radius, % of the box

export default function HeroOrbit({ ready }) {
  const [hover, setHover] = useState(null)
  const active = hover == null ? null : ROOTS[hover]

  const nodes = ROOTS.map((r, i) => {
    const a = ((-90 + i * 72) * Math.PI) / 180
    return { ...r, i, x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) }
  })

  const select = (i) => {
    window.dispatchEvent(new CustomEvent('kr:root', { detail: i }))
    document.getElementById('roots')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[560px] ${hover != null ? 'orbit-paused' : ''}`}>
      {/* faint mandala + glow */}
      <div
        className={`absolute inset-[6%] transition-all duration-[1600ms] ease-bloom ${ready ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
        aria-hidden="true"
      >
        <div className="orbit-slow h-full w-full">
          <Mandala className="h-full w-full text-champagne/[0.09]" petals={32} />
        </div>
      </div>
      <div className="absolute inset-[22%] rounded-full bg-champagne/10 blur-3xl animate-breathe" aria-hidden="true" />

      {/* rings */}
      {[
        ['inset-[9%]', 'border-champagne/30', 200],
        ['inset-[24%]', 'border-dashed border-champagne/20', 350],
        ['inset-[-2%]', 'border-dotted border-champagne/15', 500],
      ].map(([inset, style, d]) => (
        <div
          key={inset}
          className={`absolute rounded-full border transition-all duration-[1400ms] ease-bloom ${inset} ${style} ${
            ready ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
          style={{ transitionDelay: `${d}ms` }}
          aria-hidden="true"
        />
      ))}

      {/* rotating system: flowing links + nodes */}
      <div className="orbit absolute inset-0">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {nodes.map((n) => (
            <line
              key={n.key}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              className="flow transition-[stroke-opacity] duration-500"
              stroke="#d8baa2"
              strokeWidth={hover === n.i ? 0.45 : 0.25}
              strokeOpacity={ready ? (hover == null ? 0.45 : hover === n.i ? 1 : 0.15) : 0}
              strokeLinecap="round"
            />
          ))}
          {/* small satellites on the inner ring */}
          {[20, 140, 260].map((deg) => {
            const a = (deg * Math.PI) / 180
            return <circle key={deg} cx={50 + 26 * Math.cos(a)} cy={50 + 26 * Math.sin(a)} r="0.9" fill="#c49a6c" />
          })}
        </svg>

        {nodes.map((n) => {
          const on = hover === n.i
          return (
            <div key={n.key} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
              <div
                className={`transition-all duration-700 ease-bloom ${ready ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                style={{ transitionDelay: `${900 + n.i * 140}ms` }}
              >
                <div className="orbit-counter">
                  <button
                    type="button"
                    onMouseEnter={() => setHover(n.i)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(n.i)}
                    onBlur={() => setHover(null)}
                    onClick={() => select(n.i)}
                    className="group flex flex-col items-center gap-2"
                    aria-label={`${n.name}: ${n.area}`}
                  >
                    <span
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-500 ease-bloom sm:h-16 sm:w-16 ${
                        on
                          ? 'scale-110 border-champagne bg-champagne text-plum-900 shadow-[0_0_40px_6px_rgba(216,186,162,.35)]'
                          : 'border-champagne/40 bg-plum-900/50 text-champagne'
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {ICONS[n.key]}
                      </svg>
                      <span className="absolute -right-1 -top-1 font-display text-[0.6rem] text-gold sm:text-[0.65rem]">{n.no}</span>
                    </span>
                    <span
                      className={`w-[6.5rem] text-center font-display text-[0.7rem] leading-tight tracking-[0.04em] text-balance transition-colors duration-500 sm:w-[8rem] sm:text-[0.8rem] ${
                        on ? 'text-champagne-50' : 'text-champagne/80'
                      }`}
                    >
                      {n.area}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* core */}
      <div
        className={`absolute inset-[31%] flex items-center justify-center rounded-full border border-champagne/40 bg-[radial-gradient(circle_at_50%_35%,#6e3441,#3a1a22_75%)] text-center shadow-[0_30px_80px_-20px_rgba(30,11,17,.9),inset_0_0_40px_rgba(216,186,162,.12)] transition-all duration-[1400ms] ease-bloom ${
          ready ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
        style={{ transitionDelay: '500ms' }}
      >
        <div className="absolute inset-[6%] rounded-full border border-champagne/15" aria-hidden="true" />
        <div key={active?.key ?? 'brand'} className="animate-[coreIn_.6s_var(--ease-bloom)_both] px-3">
          {active ? (
            <>
              <p className="font-display text-[0.6rem] tracking-[0.2em] text-gold sm:text-xs">{active.no} / 05</p>
              <p className="mt-1 font-display text-lg leading-tight text-champagne-50 sm:text-2xl">{active.name}</p>
              <p className="mt-1 text-[0.7rem] italic leading-snug text-champagne/80 sm:text-sm">{active.area}</p>
            </>
          ) : (
            <>
              <Lotus className="mx-auto w-9 text-champagne sm:w-12" strokeWidth={2.4} dots={false} drawn={ready} />
              <p className="mt-2 font-display text-base text-champagne-50 sm:text-xl">Your brand</p>
              <p className="text-[0.7rem] italic text-champagne/70 sm:text-sm">rooted in five disciplines</p>
            </>
          )}
        </div>
      </div>

      {/* floating service tags */}
      {TAGS.map((t, i) => (
        <div
          key={t.text}
          className={`absolute hidden sm:flex ${t.pos} transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: `${1800 + i * 150}ms` }}
          aria-hidden="true"
        >
          <span
            className="bob flex items-center gap-2 rounded-full border border-champagne/20 bg-plum-900/40 px-3 py-1.5 text-[0.7rem] italic text-champagne/80 backdrop-blur-sm sm:text-xs"
            style={{ animationDelay: `-${t.d}s` }}
          >
            <span className="h-1 w-1 rounded-full bg-gold" />
            {t.text}
          </span>
        </div>
      ))}
    </div>
  )
}
