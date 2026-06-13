import { createContext } from 'react'
import type { MessageKey } from '@/locales/types'

export type Locale = 'zh' | 'en'

export interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (key: MessageKey) => string
}

export const I18nContext = createContext<I18nContextType>({
  locale: 'zh',
  setLocale: () => {},
  toggleLocale: () => {},
  t: () => '',
})
