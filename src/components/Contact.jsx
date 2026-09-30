import { useRef } from 'react'
import { CONTACT_EMAIL } from '../data'
import Lotus from './Lotus'
import Mandala from './Mandala'
import Pollen from './Pollen'

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
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-plum-800 text-champagne-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_115%,#6e3441_0%,#4d262e_45%,#1e0b11_100%)]" />
      <Pollen density={0.00005} />

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[150vw] max-w-[880px] -translate-x-1/2 -translate-y-[45%]">
        <Mandala className="w-full text-champagne/[0.06]" petals={36} />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-20 text-center md:px-10 md:pb-20 md:pt-28">
        <div className="flex flex-col items-center">
          <Lotus className="w-14 text-champagne" strokeWidth={2.2} />
          <span className="mt-6 flex items-center gap-4">
            <span className="h-px w-10 bg-champagne/25" aria-hidden="true" />
            <span className="font-display text-[0.7rem] tracking-[0.5em] text-gold uppercase">Karma Roots</span>
            <span className="h-px w-10 bg-champagne/25" aria-hidden="true" />
          </span>
        </div>

        <h2 className="mt-8 font-display text-[clamp(2.1rem,6vw,4.4rem)] leading-[1.05] text-champagne-50">
          Let’s grow something
          <span className="block">worth remembering.</span>
        </h2>

        <div className="mt-9 flex items-center justify-center gap-4" aria-hidden="true">
          <span className="h-px w-14 bg-champagne/25 md:w-20" />
          <span className="h-1.5 w-1.5 rotate-45 border border-gold/70" />
          <span className="h-px w-14 bg-champagne/25 md:w-20" />
        </div>

        <p className="mx-auto mt-8 max-w-xl text-lg text-champagne-50/75">
          Have a brand to build, a story to shape, a launch to make happen or a business ready for its next move?
        </p>

        <div className="mt-11 flex justify-center">
          <Magnetic
            href={`mailto:${CONTACT_EMAIL}`}
            className="group relative inline-flex h-32 w-32 items-center justify-center rounded-full bg-champagne text-plum-900 shadow-[0_30px_60px_-25px_rgba(30,11,17,.9)] transition-transform duration-300 ease-out md:h-40 md:w-40"
          >
            <span className="relative z-10 font-display text-lg transition-transform duration-300 ease-out md:text-xl">Let’s talk.</span>
            <span className="absolute inset-0 scale-0 rounded-full bg-champagne-50 transition-transform duration-500 ease-bloom group-hover:scale-100" />
            <span className="absolute -inset-3 rounded-full border border-champagne/40 transition-all duration-700 ease-bloom group-hover:-inset-5 group-hover:border-champagne/70" />
          </Magnetic>
        </div>

        <p className="mt-9 text-champagne/70">
          or write to{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-champagne-50 underline decoration-champagne/40 underline-offset-4 transition-colors hover:decoration-champagne"
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        <div className="mt-14 flex flex-col items-center">
          <span className="h-px w-24 bg-champagne/20" aria-hidden="true" />
          <p className="mt-5 text-[0.62rem] tracking-[0.32em] text-champagne uppercase">Ideas that grow. Stories that stay.</p>
        </div>
      </div>
    </section>
  )
}
