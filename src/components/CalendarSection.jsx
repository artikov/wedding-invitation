import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { EVENT } from '../i18n/translations'
import Reveal from './Reveal'
import { Divider, Sprig } from './Ornaments'

// Build the day grid for the event month, Monday-first.
function buildMonth(year, monthIndex) {
  const first = new Date(year, monthIndex, 1)
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  // JS getDay: 0=Sun..6=Sat -> convert to Monday-first offset.
  const offset = (first.getDay() + 6) % 7
  const cells = Array(offset).fill(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

function useCountdown(target) {
  const [diff, setDiff] = useState(() => target.getTime() - Date.now())
  useEffect(() => {
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])

  const clamped = Math.max(diff, 0)
  return {
    days: Math.floor(clamped / 86400000),
    hours: Math.floor((clamped / 3600000) % 24),
    minutes: Math.floor((clamped / 60000) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  }
}

export default function CalendarSection() {
  const { t } = useLanguage()
  const c = t.calendar
  const cells = buildMonth(EVENT.year, EVENT.monthIndex)
  const countdown = useCountdown(EVENT.date)

  const units = [
    { value: countdown.days, label: c.days },
    { value: countdown.hours, label: c.hours },
    { value: countdown.minutes, label: c.minutes },
    { value: countdown.seconds, label: c.seconds },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory via-cream/40 to-ivory px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-widest-2 text-rose/80">
            {c.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl text-ink sm:text-5xl">{c.title}</h2>
        </Reveal>
        <Reveal delay={0.15} className="w-full">
          <Divider className="my-7 text-gold" />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mx-auto max-w-sm rounded-2xl border border-gold/25 bg-ivory/80 p-6 shadow-lg backdrop-blur-sm sm:p-8">
            <Sprig className="mx-auto mb-5 w-28 text-sage" />
            <div className="grid grid-cols-7 gap-1 text-center">
              {c.weekdays.map((w) => (
                <div
                  key={w}
                  className="pb-2 text-[0.65rem] font-medium uppercase tracking-wide text-rose/70"
                >
                  {w}
                </div>
              ))}
              {cells.map((day, i) => {
                const highlight = day === EVENT.day
                return (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center"
                  >
                    {day && (
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition ${
                          highlight
                            ? 'relative bg-rose font-medium text-ivory shadow-md'
                            : 'text-ink/70'
                        }`}
                      >
                        {highlight && (
                          <span className="absolute -inset-1 animate-shimmer rounded-full border border-rose/40" />
                        )}
                        {day}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 font-serif text-lg italic text-ink/70">{c.note}</p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-10 text-xs uppercase tracking-widest-2 text-rose/70">
            {c.countdownLabel}
          </p>
          <div className="mt-4 flex justify-center gap-3 sm:gap-4">
            {units.map((u) => (
              <div
                key={u.label}
                className="flex min-w-[4.2rem] flex-col items-center rounded-xl border border-gold/20 bg-ivory/70 px-3 py-3 shadow-sm"
              >
                <span className="font-serif text-3xl text-ink">
                  {String(u.value).padStart(2, '0')}
                </span>
                <span className="mt-1 text-[0.6rem] uppercase tracking-wide text-ink/50">
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
