import { useRef } from 'react'
import { CONTACT_EMAIL, NAV } from '../data'
import Lotus from './Lotus'
import Mandala from './Mandala'
import Pollen from './Pollen'
import wordmark from '../assets/karma-wordmark.png'
import { MaskHeading, Reveal } from './bits'
import { useInView } from '../hooks'

function Magnetic({ children, className = '', ...rest }) {
  const ref = useRef(null)
  const move = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`
    el.firstChild.style.transform = `translate(${x * 0.12}px, ${y * 0.15}px)`
  }
  const leave = () => {
    ref.current.style.transform = ''
    ref.current.firstChild.style.transform = ''
  }
  return (
    <a ref={ref} onPointerMove={move} onPointerLeave={leave} className={className} {...rest}>
      {children}
    </a>
  )
}

export default function Contact() {
  const [lotusRef, lotusIn] = useInView({ threshold: 0.2 })
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-plum-700 text-champagne-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_110%,#6e3441_0%,#4d262e_45%,#2b1219_100%)]" />
      <Pollen density={0.00005} />

      <div ref={lotusRef} className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[150vw] max-w-[900px] -translate-x-1/2 -translate-y-[40%]">
        <div className="animate-spin-slower">
          <Mandala className="w-full text-champagne/[0.06]" petals={32} />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-28 text-center md:px-10 md:pt-40">
        <Lotus drawn={lotusIn} className="mx-auto w-20 text-champagne" strokeWidth={2} />
        <MaskHeading
          className="mx-auto mt-10 font-display text-[clamp(2.3rem,7vw,5.6rem)] leading-[1.02] text-champagne-50"
          lines={['Let’s grow something', 'worth remembering.']}
          stagger={0.12}
        />
        <Reveal>
          <p className="rise mx-auto mt-8 max-w-xl text-lg text-champagne-50/75" style={{ '--d': '.3s' }}>
            Have a brand to build, a story to shape, a launch to make happen or a business ready for its next move?
          </p>
          <div className="rise mt-12 flex justify-center" style={{ '--d': '.45s' }}>
            <Magnetic
              href={`mailto:${CONTACT_EMAIL}`}
              className="group relative inline-flex h-36 w-36 items-center justify-center rounded-full bg-champagne text-plum-900 transition-transform duration-300 ease-out md:h-44 md:w-44"
            >
              <span className="relative z-10 font-display text-xl transition-transform duration-300 ease-out md:text-2xl">Let’s talk.</span>
              <span className="absolute inset-0 scale-0 rounded-full bg-champagne-50 transition-transform duration-500 ease-bloom group-hover:scale-100" />
              <span className="absolute -inset-3 rounded-full border border-champagne/40 transition-all duration-700 ease-bloom group-hover:-inset-5 group-hover:border-champagne/70" />
            </Magnetic>
          </div>
          <p className="rise mt-8 text-champagne/70" style={{ '--d': '.55s' }}>
            or write to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-champagne-50 underline decoration-champagne/40 underline-offset-4 hover:decoration-champagne">
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center gap-8 border-t border-champagne/15 py-10 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <img src={wordmark} alt="Karma" width="947" height="303" className="w-28" />
            <span className="font-display text-sm tracking-[0.3em] text-champagne-50">ROOTS</span>
            <span className="mt-2 text-sm italic text-champagne/70">Ideas that grow. Stories that stay.</span>
          </div>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-champagne/80">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-champagne-50">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-champagne/60">© {new Date().getFullYear()} Karma Roots</p>
        </div>
      </div>
    </footer>
  )
}
