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

export default function HomePage() {
  return (
    <div className="grain">
      <a
        href="#roots"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-champagne focus:px-4 focus:py-2 focus:text-plum-900"
      >
        Skip to content
      </a>
      <Cursor />
      <RootLine />
      <Nav />
      <main>
        <Hero />
        <Founder />
        <Roots />
        <Marquee />
        <Why />
        <Approach />
        <Partners />
        <Testimonials />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}
