import { useLanguage } from '../i18n/LanguageContext'
import { EVENT } from '../i18n/translations'
import Reveal from './Reveal'
import { Divider, FloralCorner, Rings } from './Ornaments'

// Section 3 — venue location, map, closing message.
export default function Location() {
  const { t } = useLanguage()
  const l = t.location

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory to-blush/40 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-widest-2 text-rose/80">
            {l.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl text-ink sm:text-5xl">{l.title}</h2>
        </Reveal>
        <Reveal delay={0.15} className="w-full">
          <Divider className="my-7 text-gold" />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="overflow-hidden rounded-2xl border border-gold/25 bg-ivory shadow-xl">
            <div className="aspect-[16/10] w-full bg-cream">
              <iframe
                title={l.venue}
                src={EVENT.mapEmbed}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="px-6 py-6">
              <p className="font-serif text-2xl text-ink">{l.venue}</p>
              <p className="mt-1 text-sm text-ink/60">{l.address}</p>
              <p className="mt-1 text-sm text-ink/60">{l.time}</p>
              <a
                href={EVENT.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose px-6 py-2.5 text-sm font-medium text-ivory shadow-md transition hover:bg-rose/90"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                {l.mapButton}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="relative mt-20">
            <FloralCorner className="pointer-events-none absolute -left-2 -top-6 w-24 text-sage/60" />
            <FloralCorner
              flip
              className="pointer-events-none absolute -right-2 -top-6 w-24 text-sage/60"
            />
            <Rings className="mx-auto mb-5 w-16 text-gold" />
            <p className="font-script text-5xl text-rose sm:text-6xl">
              {l.closing}
            </p>
            <p className="mt-6 font-serif text-lg italic text-ink/70">
              {l.signature}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
