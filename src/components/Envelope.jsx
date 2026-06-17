import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { Sprig } from './Ornaments'

// Full-screen envelope intro. Calls onOpen() once the open animation has
// played, after which the parent unmounts this and reveals the invitation.
export default function Envelope({ onOpen }) {
  const { t } = useLanguage()
  const [opening, setOpening] = useState(false)

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    // Let the flap + letter animation play before revealing the content.
    setTimeout(onOpen, 1400)
  }

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-ivory to-blush/50 px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.9 } }}
    >
      {/* soft floating motes */}
      <div className="pointer-events-none absolute inset-0">
        {[
          ['12%', '18%', 0],
          ['78%', '24%', 1.2],
          ['22%', '72%', 2.1],
          ['85%', '68%', 0.6],
          ['50%', '12%', 1.6],
        ].map(([left, top, delay], i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-rose/30 animate-float"
            style={{ left, top, animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        <motion.p
          className="mb-8 font-script text-3xl text-rose"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t.envelope.to}
        </motion.p>

        <motion.div
          className="relative h-56 w-80 sm:h-64 sm:w-96"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
        >
          {/* envelope body */}
          <div className="absolute inset-0 overflow-hidden rounded-md border border-gold/30 bg-gradient-to-br from-ivory to-cream shadow-2xl">
            <div className="absolute inset-x-0 bottom-0 h-1/2 border-t border-gold/20 bg-cream/60" />
            {/* side flaps */}
            <div
              className="absolute inset-y-0 left-0 w-1/2"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                background: 'linear-gradient(135deg, #f3ead9, #e8d3cf)',
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-1/2"
              style={{
                clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                background: 'linear-gradient(225deg, #f3ead9, #e8d3cf)',
              }}
            />
          </div>

          {/* letter that rises out of the envelope on open */}
          <motion.div
            className="absolute left-1/2 top-3 z-[5] flex h-[88%] w-[86%] -translate-x-1/2 flex-col items-center justify-center rounded-sm border border-gold/30 bg-ivory px-4 text-center shadow-lg"
            initial={false}
            animate={
              opening
                ? { y: -150, opacity: 1, scale: 1.04 }
                : { y: 0, opacity: 0, scale: 1 }
            }
            transition={{ delay: opening ? 0.55 : 0, duration: 0.8, ease: 'easeOut' }}
          >
            <p className="font-script text-2xl text-rose">{t.hero.groom}</p>
            <span className="my-1 text-xs italic text-ink/50">{t.hero.and}</span>
            <p className="font-script text-2xl text-rose">{t.hero.bride}</p>
          </motion.div>

          {/* top flap — folds upward to reveal the letter */}
          <motion.div
            className="absolute left-0 top-0 z-10 h-1/2 w-full origin-top"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background: 'linear-gradient(180deg, #efe2c9, #e6d3b6)',
              backfaceVisibility: 'hidden',
            }}
            initial={false}
            animate={{ rotateX: opening ? 180 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />

          <Sprig className="absolute -bottom-7 left-1/2 z-20 w-40 -translate-x-1/2 text-sage" />
        </motion.div>

        {/* wax seal button */}
        <motion.button
          type="button"
          onClick={handleOpen}
          disabled={opening}
          aria-label={t.envelope.seal}
          className="group relative z-30 -mt-16 flex h-24 w-24 items-center justify-center rounded-full sm:h-28 sm:w-28"
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          animate={
            opening
              ? { scale: 0, opacity: 0, rotate: 40 }
              : { scale: 1, rotate: 0, opacity: 1 }
          }
          transition={{ delay: opening ? 0 : 0.6, type: 'spring', stiffness: 160, damping: 12 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
        >
          <span className="absolute inset-0 rounded-full bg-wax/30 blur-md transition group-hover:bg-wax/50" />
          <span
            className="relative flex h-full w-full items-center justify-center rounded-full text-ivory shadow-xl"
            style={{
              background:
                'radial-gradient(circle at 35% 30%, #b14b4b, #9b3b3b 45%, #7a2c2c 100%)',
              boxShadow:
                'inset 0 3px 8px rgba(255,255,255,0.25), inset 0 -6px 12px rgba(0,0,0,0.35)',
            }}
          >
            {/* embossed monogram + ring */}
            <span className="absolute inset-2 rounded-full border border-ivory/30" />
            <span className="absolute inset-2 rounded-full border border-dashed border-ivory/20" />
            <span className="font-script text-3xl leading-none drop-shadow">
              J&amp;M
            </span>
          </span>
        </motion.button>

        <motion.p
          className="mt-10 max-w-xs text-center text-sm tracking-wide text-ink/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {t.envelope.hint}
        </motion.p>

        <motion.span
          className="mt-3 text-xs uppercase tracking-widest-2 text-rose/70"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
        >
          {t.envelope.seal}
        </motion.span>
      </div>
    </motion.div>
  )
}
