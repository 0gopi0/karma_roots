import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Founder from '../components/Founder'
import Roots from '../components/Roots'
import Marquee from '../components/Marquee'
import Why from '../components/Why'
import Approach from '../components/Approach'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
import RootLine from '../components/RootLine'
import { THEME3_COPY as COPY } from './theme3Copy'
import './theme3.css'

// Theme 3: "Editorial Ivory". Light paper throughout, with one dark plum
// chapter (04 Approach) as the dramatic interlude. The inverse of theme 2.
//
// HOW THE COPY WORKS
// - All words on /theme-3 live in ./theme3Copy.js (one object, plain strings).
//   To change copy, edit ONLY that file, section by section. No JSX edits needed.
// - Each shared section component takes an optional `copy` prop. Here we pass the
//   matching slice of THEME3_COPY; the main site (pages/Home.jsx) passes nothing
//   and keeps its built-in text, so it is unaffected. Components are not forked.
//
// HOW THE STYLE WORKS
// - Layout, section order, images and components are identical to the main site.
// - theme3.css (scoped to .theme-3) recolours sections and applies the
//   editorial type system: oversized Marcellus display, Spectral 18px body,
//   gold tracked eyebrows, numbered section marks ("01 — …"), faint numeral
//   watermarks and a double hairline frame around the hero.
export default function Theme3() {
  return (
    <div className="theme-3 grain">
      <a
        href="#roots"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-champagne focus:px-4 focus:py-2 focus:text-plum-900"
      >
        Skip to content
      </a>
      <div className="fixed top-24 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-gold/40 bg-plum-950/90 px-4 py-2 text-xs text-champagne-50 shadow-[0_10px_40px_-15px_rgba(30,11,17,.8)] backdrop-blur-md md:text-sm">
        <span className="font-display tracking-[0.12em] text-gold">Theme 3 — Signature concept (v1)</span>
        <span className="h-3 w-px bg-champagne/30" aria-hidden="true" />
        <Link to="/" className="text-champagne-50/85 transition-colors hover:text-champagne">
          ← Back to main site
        </Link>
      </div>
      <Cursor />
      <RootLine />
      <Nav copy={COPY.nav} />
      <main>
        <Hero copy={COPY.hero} />
        <Founder copy={COPY.founder} />
        <Roots copy={COPY.roots} />
        <Marquee copy={COPY.marquee} />
        <Why copy={COPY.why} />
        <Approach copy={COPY.approach} />
        <Partners copy={COPY.partners} />
        <Testimonials copy={COPY.testimonials} />
      </main>
      <Contact copy={COPY.contact} />
      <Footer copy={COPY.footer} />
    </div>
  )
}
