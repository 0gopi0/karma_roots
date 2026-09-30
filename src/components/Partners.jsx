import founder from '../assets/founder.webp'
import Mandala from './Mandala'
import { MaskHeading, Reveal, SectionMark } from './bits'
import { useScrollProgress } from '../hooks'

export default function Partners() {
  const [ref, p] = useScrollProgress()
  const drift = (p - 0.5) * 60

  return (
    <section id="who" ref={ref} className="relative overflow-hidden bg-blush px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[5fr_6fr] lg:gap-24">
        {/* Founder portrait inside a turning mandala */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="relative aspect-square">
            <div className="absolute -inset-[16%]" style={{ transform: `rotate(${p * 90}deg)` }}>
              <Mandala className="h-full w-full text-plum-700/30" petals={28} />
            </div>
            <div className="absolute -inset-[5%] animate-spin-slower rounded-full border border-dashed border-plum-700/30" />
            <div className="absolute inset-0 rounded-full bg-champagne shadow-[0_40px_80px_-30px_rgba(77,38,46,.55)]" />
            <img
              src={founder}
              alt="Portrait of the founder of Karma Roots"
              width="520"
              height="520"
              loading="lazy"
              className="relative h-full w-full rounded-full object-cover p-2"
              style={{ transform: `translateY(${drift * -0.15}px)` }}
            />
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-plum-700 px-5 py-2 text-sm italic text-champagne-50 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              Founder, Karma Roots
            </div>
          </div>
        </div>

        <div>
          <SectionMark className="text-plum-600">Who we work with</SectionMark>
          <MaskHeading
            className="mt-5 font-display text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.15] text-plum-700"
            lines={['From ambitious businesses and established organisations to founders, leaders and brands entering their next phase.']}
          />
          <Reveal>
            <p className="rise mt-8 max-w-xl text-lg text-ink/75" style={{ '--d': '.3s' }}>
              We partner with people who value clarity, creativity and conversations that go beyond the brief.
            </p>
            <blockquote className="rise relative mt-12 border-l border-gold pl-6 md:pl-8" style={{ '--d': '.45s' }}>
              <span className="absolute -left-3 -top-8 font-display text-7xl leading-none text-gold/50" aria-hidden="true">
                “
              </span>
              <p className="font-body text-[clamp(1.4rem,2.6vw,2rem)] font-light italic leading-snug text-plum-700">
                If there is something worth building, there is a story worth telling.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
