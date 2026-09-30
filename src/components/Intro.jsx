import ScrollWords from './ScrollWords'
import { Reveal } from './bits'

const PILLARS = ['Built on experience.', 'Driven by ideas.', 'Rooted in impact.']

export default function Intro() {
  return (
    <section id="intro" className="relative overflow-hidden bg-ivory px-5 py-24 md:px-10 md:py-40">
      {/* faint paisley-like watermark */}
      <svg
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-24 top-10 w-[420px] text-plum-700/[0.05] md:w-[560px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        aria-hidden="true"
      >
        <path d="M120 20 C170 30 190 90 160 140 C130 190 60 190 40 150 C20 110 60 80 95 95 C120 106 115 140 90 140 C70 140 68 118 82 114" />
        <path d="M120 34 C160 44 174 92 150 132 C126 172 70 172 54 146" />
        <circle cx="120" cy="20" r="4" />
      </svg>

      <div className="relative mx-auto max-w-5xl">
        <ScrollWords
          className="font-display text-[clamp(1.75rem,4.6vw,3.6rem)] leading-[1.18] text-plum-700"
          text="Karma Roots is a boutique marketing and communications firm built around one simple belief, good brands are not just seen, they are remembered."
        />

        <Reveal className="mt-14 grid gap-12 md:mt-20 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <p className="rise max-w-[34rem] text-lg text-ink/80 md:text-xl">
            We bring together strategy, branding, content, communications, digital, experiences and growth to help businesses find
            their voice, shape their presence and move forward with purpose.
          </p>
          <ul className="flex flex-col">
            {PILLARS.map((p, i) => (
              <li
                key={p}
                className="rise group flex items-center gap-5 border-b border-plum-700/15 py-4 first:pt-0"
                style={{ '--d': `${0.15 + i * 0.12}s` }}
              >
                <span className="h-2 w-2 shrink-0 rotate-45 border border-gold transition-all duration-500 group-hover:rotate-[225deg] group-hover:bg-gold" />
                <span className="font-display text-2xl text-plum-700 transition-transform duration-500 ease-bloom group-hover:translate-x-2 md:text-[1.7rem]">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
