import { useEffect, useRef, useState } from 'react'
import HeroOrbit from './HeroOrbit'
import Pollen from './Pollen'

export default function Hero() {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    const el = ref.current
    let raf = 0
    const target = { x: 0, y: 0 }
    const cur = { x: 0, y: 0 }
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06
      cur.y += (target.y - cur.y) * 0.06
      el.style.setProperty('--mx', cur.x.toFixed(4))
      el.style.setProperty('--my', cur.y.toFixed(4))
      raf = requestAnimationFrame(tick)
    }
    const onMove = (e) => {
      target.x = e.clientX / window.innerWidth - 0.5
      target.y = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  const fade = `transition-all duration-[1100ms] ease-bloom ${ready ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`
  const delay = (ms) => ({ transitionDelay: `${ms}ms` })

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden bg-plum-700 text-champagne-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_45%,#6e3441_0%,#4d262e_42%,#2b1219_100%)]" />
      <Pollen />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-6 px-5 pt-24 md:px-10 md:pt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pt-20">
        {/* copy */}
        <div className={`relative z-10 py-6 ${ready ? 'in-view' : ''}`}>
          <p
            className={`${fade} flex flex-col gap-1.5 font-display text-[0.68rem] tracking-[0.26em] text-gold sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:text-xs sm:tracking-[0.3em]`}
            style={delay(200)}
          >
            {['STRATEGIC THINKING', 'DISTINCTIVE IDEAS', 'MEANINGFUL GROWTH'].map((w, i) => (
              <span key={w} className="flex items-center gap-3">
                <span className={`h-1 w-1 rounded-full bg-gold ${i === 0 ? 'sm:hidden' : ''}`} aria-hidden="true" />
                {w}
              </span>
            ))}
          </p>

          <h1 className="mt-6 font-display text-[clamp(2rem,8.6vw,3.6rem)] leading-[1.06] lg:text-[clamp(3rem,5vw,5rem)] text-champagne-50 lg:whitespace-nowrap">
            <span className="mask-line">
              <span style={{ '--d': '.35s' }}>Ideas That Grow.</span>
            </span>
            <span className="mask-line">
              <span style={{ '--d': '.5s' }} className="foil">
                Stories That Stay.
              </span>
            </span>
          </h1>

          <p className={`${fade} mt-6 max-w-[36rem] text-lg leading-relaxed text-champagne-50/85 md:text-xl`} style={delay(900)}>
            Karma Roots is a boutique marketing and communications firm helping businesses find their voice, shape their presence
            and grow with purpose, because good brands are not just seen, they are remembered.
          </p>

          <div className={`${fade} mt-9`} style={delay(1050)}>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#e9cfae] via-[#d8b48c] to-[#c39468] px-7 py-3.5 font-display text-plum-900 shadow-[0_12px_30px_-10px_rgba(196,154,108,.7)] transition-shadow duration-500 hover:shadow-[0_16px_40px_-8px_rgba(233,207,174,.8)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-1000 ease-bloom group-hover:translate-x-full" />
              <span className="relative">Let’s talk</span>
              <svg viewBox="0 0 20 12" className="relative h-3 w-5 transition-transform duration-500 ease-bloom group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M1 6h17M13 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* art */}
        <div
          className="relative px-2 pb-10 sm:px-8 md:pb-16 lg:px-0 lg:pb-0"
          style={{ transform: 'translate3d(calc(var(--mx, 0) * -14px), calc(var(--my, 0) * -10px), 0)' }}
        >
          <HeroOrbit ready={ready} />
        </div>
      </div>

    </section>
  )
}
