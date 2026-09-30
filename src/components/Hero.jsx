import { useEffect, useRef, useState } from 'react'
import Lotus from './Lotus'
import Mandala from './Mandala'
import Pollen from './Pollen'
import wordmark from '../assets/karma-wordmark.png'
import { useMeasurePaths } from '../hooks'

export default function Hero() {
  const ref = useRef(null)
  const archRef = useMeasurePaths()
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
      el.style.setProperty('--sy', Math.min(1, window.scrollY / window.innerHeight).toFixed(4))
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

  const layer = (depth) => ({
    transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px + var(--sy, 0) * ${depth * 3}px), 0)`,
  })

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-plum-700 text-champagne"
    >
      {/* depth: warm glow, vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,#6e3441_0%,#4d262e_45%,#2b1219_100%)]" />
      <div
        className="absolute left-1/2 top-[38%] -z-10 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/10 blur-3xl animate-breathe"
        aria-hidden="true"
      />
      <Pollen />

      {/* jharokha arch drawn in thin champagne line */}
      <svg
        ref={archRef}
        viewBox="0 0 600 900"
        preserveAspectRatio="none"
        className={`draw ${ready ? 'is-drawn' : ''} pointer-events-none absolute left-1/2 top-1/2 h-[92svh] w-[min(92vw,640px)] -translate-x-1/2 -translate-y-1/2 text-champagne/25`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        aria-hidden="true"
        style={layer(-6)}
      >
        <path d="M20 900 V330 C20 150 160 30 300 10 C440 30 580 150 580 330 V900" vectorEffect="non-scaling-stroke" style={{ '--d': '0.2s' }} />
        <path d="M44 900 V338 C44 176 170 62 300 36 C430 62 556 176 556 338 V900" vectorEffect="non-scaling-stroke" style={{ '--d': '0.5s' }} />
      </svg>

      <div className="relative z-10 flex flex-col items-center px-5 pb-24 pt-28 text-center">
        <div className="relative" style={layer(-18)}>
          <div
            className={`absolute left-1/2 top-1/2 aspect-square w-[165%] -translate-x-1/2 -translate-y-1/2 transition-opacity delay-1000 duration-[2000ms] ${ready ? 'opacity-100' : 'opacity-0'}`}
          >
            <Mandala className="animate-spin-slow h-full w-full text-champagne/15" />
          </div>
          <Lotus
            drawn={ready}
            className="relative w-[46vw] max-w-[250px] text-champagne drop-shadow-[0_0_18px_rgba(216,186,162,.35)] sm:w-[34vw]"
            strokeWidth={1.3}
          />
        </div>

        <h1 className="mt-6 flex flex-col items-center" style={layer(10)}>
          <span className="sr-only">Karma Roots</span>
          <span className={`block overflow-hidden`} aria-hidden="true">
            <img
              src={wordmark}
              alt=""
              width="947"
              height="303"
              className={`w-[min(68vw,330px)] transition-all duration-[1400ms] ease-bloom delay-[1600ms] ${
                ready ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-full opacity-0 blur-sm'
              }`}
            />
          </span>
          <span
            aria-hidden="true"
            className={`mt-1 font-display text-[clamp(1.9rem,7vw,3.1rem)] leading-none text-champagne-50 transition-all duration-[1600ms] ease-bloom delay-[1900ms] ${
              ready ? 'tracking-[0.14em] opacity-100' : 'tracking-[0.6em] opacity-0'
            }`}
          >
            ROOTS
          </span>
        </h1>

        <p
          className={`mt-6 font-display text-[0.72rem] tracking-[0.16em] sm:text-[clamp(0.8rem,2vw,1rem)] sm:tracking-[0.28em] text-champagne transition-all duration-1000 delay-[2400ms] ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          IDEAS THAT GROW, STORIES THAT STAY.
        </p>
        <p
          className={`mt-8 max-w-md text-lg italic text-champagne-50/80 transition-all duration-1000 ease-bloom delay-[2700ms] ${
            ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Strategic thinking. Distinctive ideas. Meaningful growth.
        </p>
      </div>

      {/* scroll cue: a root reaching down */}
      <a
        href="#intro"
        aria-label="Scroll to learn more"
        className={`group absolute bottom-6 left-1/2 hidden -translate-x-1/2 [@media(min-height:820px)]:flex flex-col items-center gap-2 text-champagne/70 transition-opacity delay-[3000ms] duration-1000 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-xs italic">scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-champagne/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[rootdrop_2.2s_ease-in-out_infinite] bg-champagne" />
        </span>
      </a>
      <style>{`@keyframes rootdrop{0%{transform:translateY(-100%)}100%{transform:translateY(220%)}}`}</style>
    </section>
  )
}
