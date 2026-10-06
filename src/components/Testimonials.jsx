import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../hooks'
import { Reveal, SectionMark, TempleBorder } from './bits'

// PLACEHOLDER: written to show the kind of clients and work Karma Roots takes on, with the roots
// each one draws on. These are not real client quotes. Replace each with a client's own words
// (and their go-ahead to publish them) before the site goes live.
const TESTIMONIALS = [
  {
    roots: 'Root & Experience',
    quote:
      'We came in asking for a new logo. Karma Roots asked who we wanted to welcome first. The identity, the story and the launch all grew from that one conversation, and it showed on opening night.',
    role: 'Founder',
    org: 'Boutique resort, Coorg',
  },
  {
    roots: 'Story & Reach',
    quote:
      'I could never explain what we did in a sentence. Karma Roots found our story and took it to the press and the people we needed to reach. And the person we briefed was the person who did the work.',
    role: 'Co-founder & CEO',
    org: 'Climate-tech startup, Bangalore',
  },
  {
    roots: 'Growth',
    quote:
      'We had plenty of hands. What we were missing was senior marketing thinking. Karma Roots led our marketing for a year, set the direction, sharpened our pitch and stayed involved long after the plan was signed off.',
    role: 'Managing Director',
    org: 'Family-owned manufacturing business, Pune',
  },
]

const ARROW_BUTTON =
  'grid h-11 w-11 place-items-center rounded-full border border-plum-700/25 text-plum-700 transition-colors duration-300 ease-bloom active:bg-plum-700 active:text-champagne-50 disabled:opacity-30'

function Arrow({ className = '' }) {
  return (
    <svg viewBox="0 0 20 12" className={`h-3 w-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M1 6h17M13 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Testimonials() {
  // Below md the list is a one-card-wide swipe track with arrows; md+ shows the full grid.
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const last = TESTIMONIALS.length - 1

  const sync = () => {
    const el = trackRef.current
    const max = el.scrollWidth - el.clientWidth
    setActive(max > 0 ? Math.round((el.scrollLeft / max) * last) : 0)
  }

  const go = (dir) => {
    const el = trackRef.current
    el.scrollTo({
      left: ((active + dir) / last) * (el.scrollWidth - el.clientWidth),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  // Rotating past md swaps the track for the grid and back, which can reset its scroll position.
  useEffect(() => {
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  return (
    <section id="testimonials" className="relative overflow-hidden bg-ivory px-5 py-14 md:px-10 md:py-28">
      <TempleBorder color="#4d262e" className="absolute inset-x-0 top-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <SectionMark className="justify-center text-plum-600">Testimonials</SectionMark>
          <span className="mx-auto mt-3 block h-px w-12 bg-gradient-to-r from-transparent via-gold/70 to-transparent" aria-hidden="true" />
        </div>

        <Reveal className="mt-8 md:mt-12">
          <ul
            id="testimonial-track"
            ref={trackRef}
            onScroll={sync}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-8 scrollbar-none md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
          >
            {TESTIMONIALS.map((t, i) => (
              <li
                key={t.quote}
                className="rise group flex w-full shrink-0 snap-start rounded-2xl border border-plum-700/15 bg-champagne-50 p-7 shadow-[0_20px_45px_-38px_rgba(77,38,46,.8)] transition-all duration-500 ease-bloom hover:-translate-y-1 hover:border-plum-700/30 hover:shadow-[0_28px_50px_-34px_rgba(77,38,46,.75)]"
                style={{ '--d': `${i * 0.08}s` }}
              >
                <figure className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-4xl leading-none text-gold/70" aria-hidden="true">
                      “
                    </span>
                    <span className="text-[0.9rem] italic text-plum-600">{t.roots}</span>
                  </div>
                  <blockquote className="mt-3 flex-1">
                    <p className="font-body text-[1.15rem] font-light italic leading-snug text-plum-700">{t.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6">
                    <span className="block h-px w-12 bg-gold/50" aria-hidden="true" />
                    <span className="mt-4 flex items-center gap-2.5">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rotate-45 border border-gold transition-colors duration-500 ease-bloom group-hover:bg-gold"
                        aria-hidden="true"
                      />
                      <span className="font-display text-[1.05rem] text-plum-700">{t.role}</span>
                    </span>
                    <span className="mt-0.5 block pl-4 text-sm text-ink/65">{t.org}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="rise flex items-center justify-center gap-6 md:hidden" style={{ '--d': '.24s' }}>
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={active === 0}
              aria-controls="testimonial-track"
              aria-label="Previous testimonial"
              className={ARROW_BUTTON}
            >
              <Arrow className="rotate-180" />
            </button>
            <span className="flex items-center gap-3" aria-hidden="true">
              {TESTIMONIALS.map((t, i) => (
                <span
                  key={t.quote}
                  className={`h-2 w-2 rotate-45 border border-gold transition-colors duration-500 ease-bloom ${i === active ? 'bg-gold' : ''}`}
                />
              ))}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={active === last}
              aria-controls="testimonial-track"
              aria-label="Next testimonial"
              className={ARROW_BUTTON}
            >
              <Arrow />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
