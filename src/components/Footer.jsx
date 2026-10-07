import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE, ROOTS } from '../data'
import Lotus from './Lotus'
import Mandala from './Mandala'
import wordmark from '../assets/karma-wordmark.png'

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#intro' },
  { label: 'What We Do', href: '#roots' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Why Karma Roots', href: '#why' },
  { label: 'Who We Work With', href: '#who' },
  { label: 'Contact', href: '#contact' },
]

const ArrowRight = (
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>
)

const MapPin = (
  <>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>
)

const Mail = (
  <>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>
)

const Phone = (
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
)

const SOCIALS = [
  {
    label: 'Instagram',
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: 'YouTube',
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
]

function Glyph({ className = 'h-4 w-4', children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function Col({ title, children }) {
  return (
    <div>
      <h3 className="group/head font-display text-[0.78rem] text-champagne uppercase">
        <span className="inline-block tracking-[0.22em] transition-all duration-500 ease-bloom group-hover/head:tracking-[0.28em] group-hover/head:text-champagne-50">
          {title}
        </span>
        <span
          className="mt-3 block h-px w-10 bg-gold/40 transition-all duration-500 ease-bloom group-hover/head:w-16 group-hover/head:bg-gold"
          aria-hidden="true"
        />
      </h3>
      {children}
    </div>
  )
}

const linkClass = 'transition-colors duration-300 hover:text-champagne-50'

const DEFAULT_COPY = {
  tagline: 'Ideas that grow, stories that stay.',
  blurb: 'A boutique marketing and communications firm built on the belief that good brands are not just seen, they are remembered.',
  linksTitle: 'Quick Links',
  links: LINKS,
  servicesTitle: 'Our Services',
  services: ROOTS.map((r) => r.area),
  contactTitle: 'Get In Touch',
  location: CONTACT_LOCATION,
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  closingLines: ['Let’s create', 'something meaningful.'],
  cta: 'Start a Conversation',
  copyright: 'Karma Roots',
  creditLabel: 'Designed by',
  creditName: 'The Website Makers',
}

export default function Footer({ copy }) {
  const c = { ...DEFAULT_COPY, ...copy }
  return (
    <footer className="relative isolate overflow-hidden bg-plum-950 text-champagne-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(110,52,65,.4),transparent_70%)]" />

      <Mandala
        petals={28}
        strokeWidth={0.7}
        className="pointer-events-none absolute bottom-0 left-0 -z-10 w-[300px] -translate-x-1/2 translate-y-1/2 text-gold/25 md:w-[520px]"
      />
      <Mandala
        petals={28}
        strokeWidth={0.7}
        className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[300px] translate-x-1/2 translate-y-1/2 text-gold/25 md:w-[520px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-x-8 gap-y-8 pb-10 pt-10 md:grid-cols-2 md:gap-y-10 md:pb-12 md:pt-12 lg:grid-cols-[1.4fr_1fr_1.3fr_1.3fr] lg:gap-x-12 lg:gap-y-0">
          <div>
            <div className="flex flex-col items-center">
              <Lotus className="w-20 text-champagne" strokeWidth={2} />
              <img src={wordmark} alt="Karma" width="947" height="303" className="mt-4 w-32" />
              <span className="font-display text-xs tracking-[0.42em] text-champagne-50">ROOTS</span>
            </div>
            <p className="mt-4 text-[0.6rem] tracking-[0.16em] text-champagne uppercase">
              {c.tagline}
            </p>
            <p className="mt-3 max-w-[17rem] text-sm leading-relaxed text-champagne-50/60">
              {c.blurb}
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 text-champagne/75 transition-all duration-500 ease-bloom hover:-translate-y-0.5 hover:border-gold hover:bg-champagne/10 hover:text-champagne-50"
                  >
                    <Glyph>{s.icon}</Glyph>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Col title={c.linksTitle}>
            <ul className="mt-5 space-y-3 text-[0.9rem] text-champagne-50/70">
              {c.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group/link relative inline-block transition-colors duration-300 hover:text-champagne-50">
                    {l.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px w-0 bg-champagne/70 transition-all duration-500 ease-bloom group-hover/link:w-full"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col title={c.servicesTitle}>
            <ul className="mt-5 space-y-3 text-[0.9rem] text-champagne-50/70">
              {c.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Col>

          <Col title={c.contactTitle}>
            <ul className="mt-5 space-y-4 text-[0.9rem] text-champagne-50/70">
              <li className="group flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-champagne/25 text-gold transition-all duration-500 ease-bloom group-hover:-translate-y-0.5 group-hover:border-gold/70 group-hover:bg-champagne/10 group-hover:text-champagne-50">
                  <Glyph>{MapPin}</Glyph>
                </span>
                <span className="transition-colors duration-300 group-hover:text-champagne-50">{c.location}</span>
              </li>
              <li className="group flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-champagne/25 text-gold transition-all duration-500 ease-bloom group-hover:-translate-y-0.5 group-hover:border-gold/70 group-hover:bg-champagne/10 group-hover:text-champagne-50">
                  <Glyph>{Mail}</Glyph>
                </span>
                <a href={`mailto:${c.email}`} className={linkClass}>
                  {c.email}
                </a>
              </li>
              <li className="group flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-champagne/25 text-gold transition-all duration-500 ease-bloom group-hover:-translate-y-0.5 group-hover:border-gold/70 group-hover:bg-champagne/10 group-hover:text-champagne-50">
                  <Glyph>{Phone}</Glyph>
                </span>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className={linkClass}>
                  {c.phone}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[0.68rem] leading-[1.9] tracking-[0.18em] text-champagne uppercase">
              {c.closingLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
            <a
              href="#contact"
              className="group mt-4 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-champagne/40 px-5 py-2.5 text-[0.85rem] text-champagne-50 transition-all duration-500 ease-bloom hover:-translate-y-0.5 hover:border-champagne hover:bg-champagne hover:text-plum-900"
            >
              {c.cta}
              <Glyph className="h-4 w-4 transition-transform duration-500 ease-bloom group-hover:translate-x-1">{ArrowRight}</Glyph>
            </a>
          </Col>
        </div>
      </div>

      <div className="relative border-t border-champagne/10 px-5 pb-8 pt-6 text-center md:pb-9">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold/40 bg-plum-950"
        />
        <p className="text-sm text-champagne/70">
          <span className="whitespace-nowrap">Copyright © {new Date().getFullYear()} {c.copyright}</span>{' '}
          <span aria-hidden="true" className="mx-3 hidden text-champagne/30 sm:inline">
            |
          </span>{' '}
          <span className="whitespace-nowrap">
            {c.creditLabel}{' '}
            <a
              href="https://thewebsitemakers.in"
              target="_blank"
              rel="noreferrer"
              className="text-champagne underline decoration-champagne/30 underline-offset-4 transition-colors hover:decoration-champagne"
            >
              {c.creditName}
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
