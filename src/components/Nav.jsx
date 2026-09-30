import { useEffect, useState } from 'react'
import { NAV } from '../data'
import Lotus from './Lotus'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > 400 && y > last)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-bloom ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled && !open ? 'bg-plum-900/80 py-3 shadow-[0_10px_40px_-20px_rgba(30,11,17,.8)] backdrop-blur-md' : 'py-5 md:py-7'}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10" aria-label="Main">
          <a href="#top" className="group flex items-center gap-3 text-champagne" onClick={() => setOpen(false)}>
            <Lotus className="h-9 w-10 transition-transform duration-700 ease-bloom group-hover:-translate-y-0.5 group-hover:scale-110" strokeWidth={3} dots={false} />
            <span className="font-display text-lg tracking-[0.18em]">Karma Roots</span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV.slice(0, 3).map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="group relative text-[0.95rem] text-champagne-50/85 transition-colors hover:text-champagne-50"
                >
                  {n.label}
                  <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-champagne transition-all duration-500 ease-bloom group-hover:w-full" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="rounded-full border border-champagne/50 px-6 py-2.5 text-[0.95rem] text-champagne-50 transition-all duration-500 ease-bloom hover:border-champagne hover:bg-champagne hover:text-plum-900"
              >
                Let’s talk
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`h-px w-6 bg-champagne transition-all duration-500 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-champagne transition-all duration-500 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu: petals open from the top */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-plum-900 transition-[clip-path] duration-700 ease-bloom md:hidden ${
          open ? '[clip-path:circle(150%_at_90%_5%)]' : 'pointer-events-none [clip-path:circle(0%_at_90%_5%)]'
        }`}
        aria-hidden={!open}
      >
        <Lotus
          className="pointer-events-none absolute -bottom-10 left-1/2 w-[140%] -translate-x-1/2 text-champagne/10"
          drawn={open}
          strokeWidth={0.6}
        />
        <ul className="relative mt-32 flex flex-col gap-2 px-8">
          {NAV.map((n, i) => (
            <li
              key={n.href}
              className={`transition-all duration-700 ease-bloom ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
              style={{ transitionDelay: open ? `${0.15 + i * 0.07}s` : '0s' }}
            >
              <a
                href={n.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-4xl text-champagne-50"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="relative mt-auto px-8 pb-10 italic text-champagne/70">Ideas that grow. Stories that stay.</p>
      </div>
    </>
  )
}
