import { MaskHeading, Reveal, SectionMark, TempleBorder } from './bits'

// The four groups named in the copy, one per card.
const GROUPS = [
  'Ambitious businesses',
  'Established organisations',
  'Founders & leaders',
  'Brands entering their next phase',
]

export default function Partners() {
  return (
    <section id="who" className="relative overflow-hidden bg-blush px-5 py-24 md:px-10 md:py-28">
      <TempleBorder color="#4d262e" className="absolute inset-x-0 top-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <SectionMark className="justify-center text-plum-600">Who we work with</SectionMark>
          <MaskHeading
            className="mx-auto mt-4 max-w-3xl font-display text-[clamp(1.5rem,3vw,2.3rem)] leading-[1.2] text-plum-700"
            lines={['From ambitious businesses and established organisations to founders, leaders and brands entering their next phase.']}
          />
          <Reveal>
            <p className="rise mx-auto mt-5 max-w-xl text-lg text-ink/75" style={{ '--d': '.15s' }}>
              We partner with people who value clarity, creativity and conversations that go beyond the brief.
            </p>
          </Reveal>
        </div>

        <Reveal as="ul" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => (
            <li
              key={group}
              className="rise group rounded-2xl border border-plum-700/15 bg-ivory p-6 shadow-[0_20px_45px_-38px_rgba(77,38,46,.8)] transition-all duration-500 ease-bloom hover:-translate-y-1 hover:border-plum-700/35 hover:shadow-[0_28px_50px_-34px_rgba(77,38,46,.75)]"
              style={{ '--d': `${i * 0.08}s` }}
            >
              <span
                className="block h-1.5 w-1.5 rotate-45 border border-gold transition-colors duration-500 ease-bloom group-hover:bg-gold"
                aria-hidden="true"
              />
              <p className="mt-5 font-display text-[1.15rem] leading-snug text-plum-700">{group}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
