import { useEffect, useMemo, useState } from 'react'
import en from '@/locales/en'
import zh from '@/locales/zh'
import type { MessageDictionary } from '@/locales/types'
import { I18nContext, type I18nContextType, type Locale } from '@/lib/i18n-context'

const STORAGE_KEY = 'locale'

const messages: Record<Locale, MessageDictionary> = {
  zh,
  en,
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'zh'
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY)
  return savedLocale === 'en' ? 'en' : 'zh'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    window.document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<I18nContextType>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((current) => (current === 'zh' ? 'en' : 'zh')),
      t: (key) => messages[locale][key],
    }),
    [locale]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
