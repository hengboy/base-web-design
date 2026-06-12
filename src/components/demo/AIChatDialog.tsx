import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { Send, Trash2, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AIChatDialogProps {
  className?: string
}

const MOCK_RESPONSES = [
  '这是一个很好的问题！在前端开发中，React 19 引入了许多新特性，包括 Server Components、Actions 以及更高效的渲染机制。这些改进可以显著提升应用性能。',
  '根据你的描述，建议使用 Tailwind CSS v4 来构建样式系统。它提供了更灵活的 CSS 变量支持和更好的暗色模式处理能力，同时减少了配置文件的复杂度。',
  '好的，我来帮你分析这个问题。首先我们需要检查项目的依赖版本，确认 TypeScript 和 Vite 的兼容性配置是否正确。让我逐步说明具体的排查步骤。',
  '这个功能的实现可以分为三个步骤：\n\n1. **设计数据结构** — 确定消息的存储格式\n2. **编写核心逻辑** — 处理发送和接收\n3. **构建 UI 组件** — 渲染消息列表和输入框\n\n需要我详细展开每个步骤吗？',
  '推荐使用 shadcn/ui 作为组件库基础，它的 copy-paste 模式让你可以完全掌控组件代码，方便自定义和扩展。ReUI 在此基础上提供了更多企业级组件变体。',
]

export function AIChatDialog({ className }: AIChatDialogProps) {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '你好！我是 AI 助手 🎉\n\n我可以帮助你解答前端开发、组件使用、技术方案等问题。有什么可以帮你的吗？',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = React.useState('')
  const [isTyping, setIsTyping] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const responseIndex = React.useRef(0)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = () => {
    if (!input.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: MOCK_RESPONSES[responseIndex.current % MOCK_RESPONSES.length],
        timestamp: new Date(),
      }
      responseIndex.current++
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    // Auto-resize textarea
    const textarea = e.target
    textarea.style.height = 'auto'
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
  }

  const clearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: 'assistant',
        content: '对话已清空。有什么可以帮你的吗？',
        timestamp: new Date(),
      },
    ])
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <Card className={cn('flex h-[calc(100vh-200px)] min-h-[500px] max-h-[800px] flex-col overflow-hidden', className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-sm">
            <Bot className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold">AI 助手</p>
              <Badge variant="outline" className="text-xs font-normal">
                <Sparkles className="mr-1 size-2.5" />
                Powered by AI
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              {isTyping ? (
                <span className="flex items-center gap-1">
                  <span className="inline-flex gap-0.5">
                    <span className="size-1 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                    <span className="size-1 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                    <span className="size-1 rounded-full bg-muted-foreground animate-bounce" />
                  </span>
                  正在输入...
                </span>
              ) : (
                '在线 · 随时准备帮助你'
              )}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={clearChat} className="gap-1.5 text-muted-foreground">
          <Trash2 className="size-4" />
          <span className="hidden sm:inline">清空</span>
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1" ref={scrollRef}>
        <div className="space-y-5 p-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                'flex gap-3',
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {msg.role === 'assistant' && (
                <Avatar className="size-8 shrink-0 mt-1">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-xs font-medium">
                    AI
                  </AvatarFallback>
                </Avatar>
              )}
              <div className={cn('max-w-[70%]', msg.role === 'user' ? 'order-1' : '')}>
                <div
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap',
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-sm shadow-sm'
                      : 'bg-muted rounded-tl-sm'
                  )}
                >
                  {msg.content}
                </div>
                <p className={cn(
                  'mt-1.5 text-[11px] text-muted-foreground/60',
                  msg.role === 'user' ? 'text-right' : 'text-left'
                )}>
                  {formatTime(msg.timestamp)}
                </p>
              </div>
              {msg.role === 'user' && (
                <Avatar className="size-8 shrink-0 mt-1">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                    <User className="size-3.5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <Avatar className="size-8 shrink-0 mt-1">
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-xs font-medium">
                  AI
                </AvatarFallback>
              </Avatar>
              <div className="rounded-2xl rounded-tl-sm bg-muted px-5 py-3.5">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.3s]" />
                  <span className="size-2.5 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.15s]" />
                  <span className="size-2.5 rounded-full bg-muted-foreground/40 animate-bounce" />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="border-t bg-background p-4">
        <div className="flex gap-3 items-end">
          <div className="relative flex-1">
            <Textarea
              ref={textareaRef}
              placeholder="输入消息... (Enter 发送，Shift+Enter 换行)"
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              disabled={isTyping}
              className="min-h-[48px] max-h-[120px] resize-none rounded-xl pr-12 py-3 text-sm"
              rows={1}
            />
          </div>
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            size="icon"
            className="size-12 shrink-0 rounded-xl"
          >
            <Send className="size-5" />
          </Button>
        </div>
        <p className="mt-2 text-center text-[11px] text-muted-foreground/50">
          AI 回复内容为模拟数据，仅用于演示组件效果
        </p>
      </div>
    </Card>
  )
}
