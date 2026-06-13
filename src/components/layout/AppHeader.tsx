import { Languages, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/lib/theme'
import { useI18n } from '@/hooks/use-i18n'
import { UserMenu } from './UserMenu'
import { NotificationPanel } from './NotificationPanel'

export function AppHeader() {
  const { theme, setTheme } = useTheme()
  const { locale, toggleLocale, t } = useI18n()

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-background px-6">
      <p className="text-sm text-muted-foreground md:hidden">{t('brand.mobile')}</p>
      <div className="ml-auto flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 rounded-full px-3"
          onClick={toggleLocale}
          aria-label={t('header.toggleLanguage')}
          title={locale === 'zh' ? 'Switch to English' : '切换到中文'}
        >
          <Languages className="h-4 w-4" />
          <span className="text-xs font-semibold">{locale === 'zh' ? 'EN' : '中'}</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={t('header.toggleTheme')}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
        <NotificationPanel />
        <UserMenu />
      </div>
    </header>
  )
}
