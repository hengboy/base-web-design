import { useState } from 'react'
import { Bell, MailOpen, Mail, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/hooks/use-i18n'

interface Message {
  id: string
  titleKey:
    | 'notifications.message.system.title'
    | 'notifications.message.release.title'
    | 'notifications.message.security.title'
    | 'notifications.message.review.title'
    | 'notifications.message.meeting.title'
  descriptionKey:
    | 'notifications.message.system.description'
    | 'notifications.message.release.description'
    | 'notifications.message.security.description'
    | 'notifications.message.review.description'
    | 'notifications.message.meeting.description'
  timeKey:
    | 'notifications.message.system.time'
    | 'notifications.message.release.time'
    | 'notifications.message.security.time'
    | 'notifications.message.review.time'
    | 'notifications.message.meeting.time'
  read: boolean
  type: 'info' | 'success' | 'warning'
}

const mockMessages: Message[] = [
  {
    id: '1',
    titleKey: 'notifications.message.system.title',
    descriptionKey: 'notifications.message.system.description',
    timeKey: 'notifications.message.system.time',
    read: false,
    type: 'success',
  },
  {
    id: '2',
    titleKey: 'notifications.message.release.title',
    descriptionKey: 'notifications.message.release.description',
    timeKey: 'notifications.message.release.time',
    read: false,
    type: 'info',
  },
  {
    id: '3',
    titleKey: 'notifications.message.security.title',
    descriptionKey: 'notifications.message.security.description',
    timeKey: 'notifications.message.security.time',
    read: false,
    type: 'warning',
  },
  {
    id: '4',
    titleKey: 'notifications.message.review.title',
    descriptionKey: 'notifications.message.review.description',
    timeKey: 'notifications.message.review.time',
    read: true,
    type: 'success',
  },
  {
    id: '5',
    titleKey: 'notifications.message.meeting.title',
    descriptionKey: 'notifications.message.meeting.description',
    timeKey: 'notifications.message.meeting.time',
    read: true,
    type: 'info',
  },
]

const typeIconMap = {
  info: Mail,
  success: MailOpen,
  warning: Bell,
}

const typeColorMap = {
  info: 'text-blue-500',
  success: 'text-green-500',
  warning: 'text-amber-500',
}

export function NotificationPanel() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(mockMessages)

  const unreadCount = messages.filter((m) => !m.read).length

  const markAllRead = () => {
    setMessages((prev) => prev.map((m) => ({ ...m, read: true })))
  }

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id))
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label={t('notifications.trigger')}>
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full max-w-md flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              {t('notifications.title')}
              {unreadCount > 0 && (
                <Badge variant="destructive" className="text-xs">
                  {unreadCount} {t('notifications.unreadCount')}
                </Badge>
              )}
            </SheetTitle>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" className="text-xs" onClick={markAllRead}>
                {t('notifications.markAllRead')}
              </Button>
            )}
          </div>
        </SheetHeader>
        <ScrollArea className="flex-1">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Bell className="mb-3 h-12 w-12 opacity-30" />
              <p className="text-sm">{t('notifications.empty')}</p>
            </div>
          ) : (
            <div className="divide-y">
              {messages.map((msg) => {
                const Icon = typeIconMap[msg.type]
                return (
                  <div
                    key={msg.id}
                    className={`group relative flex gap-3 p-4 transition-colors hover:bg-accent/50 ${
                      !msg.read ? 'bg-accent/30' : ''
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <Icon className={`h-5 w-5 ${typeColorMap[msg.type]}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-medium">
                          {!msg.read && (
                            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-destructive" />
                          )}
                          {t(msg.titleKey)}
                        </p>
                        <span className="flex-shrink-0 text-xs text-muted-foreground">
                          {t(msg.timeKey)}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{t(msg.descriptionKey)}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={() => deleteMessage(msg.id)}
                      aria-label={t('notifications.delete')}
                    >
                      <Trash2 className="h-3.5 w-3.5 text-muted-foreground" />
                    </Button>
                  </div>
                )
              })}
            </div>
          )}
        </ScrollArea>
        {messages.length > 0 && (
          <>
            <Separator />
            <div className="p-4">
              <Button variant="outline" size="sm" className="w-full text-xs">
                {t('notifications.viewAll')}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
