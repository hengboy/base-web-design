import { AIChatDialog } from '@/components/ui/ai-chat-dialog'

export function AIChatPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Chat</h1>
        <p className="text-muted-foreground mt-1">
          AI 对话对话框组件，支持消息列表、打字指示器、清空对话、自动高度输入框等功能
        </p>
      </div>

      <AIChatDialog />
    </div>
  )
}
