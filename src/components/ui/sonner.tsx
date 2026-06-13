import { Toaster as Sonner, type ToasterProps } from 'sonner'
import { useTheme } from '@/lib/theme'

function Toaster({ ...props }: ToasterProps) {
  const { theme = 'light' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--success-bg': 'var(--popover)',
          '--success-text': 'hsl(142, 71%, 29%)',
          '--success-border': 'hsl(142, 76%, 36%)',
          '--error-bg': 'var(--popover)',
          '--error-text': 'hsl(0, 72%, 40%)',
          '--error-border': 'hsl(0, 74%, 50%)',
          '--warning-bg': 'var(--popover)',
          '--warning-text': 'hsl(31, 85%, 30%)',
          '--warning-border': 'hsl(31, 86%, 48%)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
