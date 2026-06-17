import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import { Divider, FloralCorner, Rings } from './Ornaments'

// Section 1 — couple, date, venue.
export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <FloralCorner className="pointer-events-none absolute -left-4 top-8 w-32 text-sage/60 sm:w-44" />
      <FloralCorner
        flip
        className="pointer-events-none absolute -right-4 top-8 w-32 text-sage/60 sm:w-44"
      />
      <FloralCorner
        className="pointer-events-none absolute -right-4 bottom-8 w-32 rotate-180 text-blush/70 sm:w-44"
      />
      <FloralCorner
        flip
        className="pointer-events-none absolute -left-4 bottom-8 w-32 rotate-180 text-blush/70 sm:w-44"
      />

      <Reveal>
        <p className="mb-6 text-xs uppercase tracking-widest-2 text-rose/80">
          {h.eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <Rings className="mx-auto mb-6 w-16 text-gold" />
      </Reveal>

      <Reveal delay={0.15}>
        <h1 className="font-script text-6xl leading-tight text-ink sm:text-7xl md:text-8xl">
          {h.groom}
        </h1>
      </Reveal>

      <Reveal delay={0.25}>
        <span className="my-2 block font-serif text-2xl italic text-rose sm:text-3xl">
          {h.and}
        </span>
      </Reveal>

      <Reveal delay={0.3}>
        <h1 className="font-script text-6xl leading-tight text-ink sm:text-7xl md:text-8xl">
          {h.bride}
        </h1>
      </Reveal>

      <Reveal delay={0.4}>
        <p className="mt-3 font-serif text-lg italic tracking-wide text-ink/70">
          {h.together}
        </p>
      </Reveal>

      <Reveal delay={0.45} className="w-full">
        <Divider className="my-8 text-gold" />
      </Reveal>

      <Reveal delay={0.5}>
        <p className="mx-auto max-w-md text-balance text-base leading-relaxed text-ink/70">
          {h.intro}
        </p>
      </Reveal>

      <Reveal delay={0.6} className="mt-10">
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:gap-8">
          <div className="rounded-lg border border-gold/20 bg-ivory/60 px-8 py-5 shadow-sm backdrop-blur-sm">
            <p className="text-[0.7rem] uppercase tracking-widest-2 text-rose/70">
              {h.dateLabel}
            </p>
            <p className="mt-2 font-serif text-2xl text-ink">{h.date}</p>
            <p className="mt-1 text-sm text-ink/60">{h.time}</p>
          </div>
          <div className="hidden items-center sm:flex">
            <span className="h-16 w-px bg-gold/30" />
          </div>
          <div className="rounded-lg border border-gold/20 bg-ivory/60 px-8 py-5 shadow-sm backdrop-blur-sm">
            <p className="text-[0.7rem] uppercase tracking-widest-2 text-rose/70">
              {h.venueLabel}
            </p>
            <p className="mt-2 font-serif text-2xl text-ink">{h.venue}</p>
            <p className="mt-1 text-sm text-ink/60">{h.city}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
