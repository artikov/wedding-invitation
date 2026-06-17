import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import Envelope from './components/Envelope'
import Hero from './components/Hero'
import CalendarSection from './components/CalendarSection'
import Location from './components/Location'
import { Sprig } from './components/Ornaments'

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-blush/40 px-6 py-10 text-center">
      <Sprig className="mx-auto mb-4 w-24 text-sage/70" />
      <p className="font-script text-2xl text-rose">
        {t.hero.groom} &amp; {t.hero.bride}
      </p>
      <p className="mt-2 text-xs uppercase tracking-widest-2 text-ink/40">
        {t.footer.madeWith}
      </p>
    </footer>
  )
}

function Invitation() {
  return (
    <main>
      <Hero />
      <CalendarSection />
      <Location />
      <Footer />
    </main>
  )
}

function Experience() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <LanguageSwitcher />
      <AnimatePresence>
        {!opened && <Envelope key="envelope" onOpen={() => setOpened(true)} />}
      </AnimatePresence>
      {opened && <Invitation />}
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Experience />
    </LanguageProvider>
  )
}
