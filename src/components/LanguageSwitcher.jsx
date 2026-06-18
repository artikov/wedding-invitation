import { useLanguage } from '../i18n/LanguageContext'

// Always-visible, fixed language switcher.
export default function LanguageSwitcher() {
  const { lang, setLang, languages } = useLanguage()

  return (
    <div className="fixed right-3 top-3 z-50 sm:right-5 sm:top-5">
      <div className="flex items-center gap-0.5 rounded-full border border-goldlight/40 bg-forest/90 p-1 shadow-md backdrop-blur-md">
        {languages.map((l) => {
          const active = l.code === lang
          return (
            <button
              key={l.code}
              type="button"
              onClick={() => setLang(l.code)}
              aria-pressed={active}
              aria-label={l.label}
              className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-300 ${
                active
                  ? 'bg-rose text-ivory shadow-sm'
                  : 'text-ivory/70 hover:text-goldlight'
              }`}
            >
              {l.short}
            </button>
          )
        })}
      </div>
    </div>
  )
}
