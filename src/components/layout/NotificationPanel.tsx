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

// 模拟消息数据
interface Message {
  id: string
  title: string
  description: string
  time: string
  read: boolean
  type: 'info' | 'success' | 'warning'
}

const mockMessages: Message[] = [
  {
    id: '1',
    title: '系统通知',
    description: '您的项目已成功部署，可以正常访问。',
    time: '5 分钟前',
    read: false,
    type: 'success',
  },
  {
    id: '2',
    title: '版本更新',
    description: '框架已更新至 v2.1.0，新增了多个实用组件。',
    time: '1 小时前',
    read: false,
    type: 'info',
  },
  {
    id: '3',
    title: '安全提醒',
    description: '检测到异地登录，请确认是否本人操作。',
    time: '3 小时前',
    read: false,
    type: 'warning',
  },
  {
    id: '4',
    title: '审核通过',
    description: '您提交的 PR #128 已被审核通过。',
    time: '昨天',
    read: true,
    type: 'success',
  },
  {
    id: '5',
    title: '会议提醒',
    description: '今天下午 3:00 有团队周会，请准时参加。',
    time: '昨天',
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
        <Button variant="ghost" size="icon" className="relative" aria-label="消息通知">
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
              消息通知
              {unreadCount > 0 && (
                <Badge variant="destructive" className="text-xs">
                  {unreadCount} 条未读
                </Badge>
              )}
            </SheetTitle>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" className="text-xs" onClick={markAllRead}>
                全部已读
              </Button>
            )}
          </div>
        </SheetHeader>
        <ScrollArea className="flex-1">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Bell className="mb-3 h-12 w-12 opacity-30" />
              <p className="text-sm">暂无消息通知</p>
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
                          {msg.title}
                        </p>
                        <span className="flex-shrink-0 text-xs text-muted-foreground">
                          {msg.time}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{msg.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={() => deleteMessage(msg.id)}
                      aria-label="删除消息"
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
                查看全部消息
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
