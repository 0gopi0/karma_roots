import { CONTACT_EMAIL } from '../data'
import { Reveal, SectionMark } from './bits'

const DEFAULT_COPY = {
  mark: 'Start a conversation',
  titleLines: ['Let’s grow something', 'worth remembering.'],
  body: 'Have a brand to build, a story to shape, a launch to make happen or a business ready for its next move?',
  cta: 'Start the conversation',
  email: CONTACT_EMAIL,
}

export default function Contact({ copy }) {
  const c = { ...DEFAULT_COPY, ...copy }
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-plum-700 text-champagne-50"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(75%_70%_at_50%_15%,#6e3441_0%,rgba(110,52,65,0)_72%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(115%_100%_at_50%_45%,transparent_45%,rgba(30,11,17,.5)_100%)]" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 text-center md:px-10 md:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-0 lg:text-left">
        <div className="lg:pr-14">
          <SectionMark className="justify-center text-champagne-50/90 lg:justify-start">{c.mark}</SectionMark>
          <span
            className="mx-auto mt-3 block h-px w-12 bg-gradient-to-r from-gold/70 to-transparent lg:mx-0"
            aria-hidden="true"
          />
          <Reveal
            as="h2"
            id="contact-title"
            className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3.3rem)] leading-[1.06] text-champagne-50"
          >
            {c.titleLines.map((line, i) => (
              <span key={i} className="mask-line">
                <span className={i > 0 ? 'foil' : undefined} style={{ '--d': `${0.05 + i * 0.15}s` }}>
                  {line}
                </span>
              </span>
            ))}
          </Reveal>
        </div>

        <div className="lg:border-l lg:border-champagne/15 lg:pl-14">
          <Reveal>
            <p className="rise text-lg text-champagne-50/90">
              {c.body}
            </p>
          </Reveal>
          <Reveal className="mt-6 flex justify-center lg:justify-start">
            <a
              href={`mailto:${c.email}`}
              className="rise group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#e9cfae] via-[#d8b48c] to-[#c39468] px-8 py-3.5 font-display text-plum-900 shadow-[0_12px_30px_-10px_rgba(196,154,108,.7)] transition-shadow duration-500 hover:shadow-[0_16px_40px_-8px_rgba(233,207,174,.8)] sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-1000 ease-bloom group-hover:translate-x-full" />
              <span className="relative">{c.cta}</span>
              <svg
                viewBox="0 0 20 12"
                className="relative h-3 w-5 transition-transform duration-500 ease-bloom group-hover:translate-x-1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                aria-hidden="true"
              >
                <path d="M1 6h17M13 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
