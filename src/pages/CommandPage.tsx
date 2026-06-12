import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Settings, User, CreditCard, Mail, Search, BarChart, HelpCircle } from 'lucide-react'

export function CommandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Command 命令面板</h1>
        <p className="text-muted-foreground mt-1">可搜索的命令面板，常用于快速导航和操作</p>
      </div>

      {/* 基础命令面板 */}
      <Card>
        <CardHeader>
          <CardTitle>基础用法</CardTitle>
          <CardDescription>带搜索的命令列表，支持分组和分隔符</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <div className="flex h-11 items-center gap-2 border-b px-3">
              <Search className="h-4 w-4 shrink-0 opacity-50" />
              <input
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="搜索功能..."
              />
            </div>
            <div className="max-h-[300px] overflow-y-auto p-1">
              <p className="py-6 text-center text-sm text-muted-foreground">输入关键词搜索</p>
              <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">页面导航</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">Dashboard</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">Buttons & Actions</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">Form Inputs</div>
              <div className="-mx-1 h-px bg-border my-1" />
              <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">操作</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">创建项目</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">删除项目</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">导出配置</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 带图标的命令项 */}
      <Card>
        <CardHeader>
          <CardTitle>带图标的命令</CardTitle>
          <CardDescription>每个命令项搭配对应的图标</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <div className="flex h-11 items-center gap-2 border-b px-3">
              <Search className="h-4 w-4 shrink-0 opacity-50" />
              <input
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="搜索..."
              />
            </div>
            <div className="max-h-[300px] overflow-y-auto p-1">
              <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">设置</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent"><Settings className="h-4 w-4" /> 通用设置</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent"><User className="h-4 w-4" /> 账户管理</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent"><CreditCard className="h-4 w-4" /> 订阅管理</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent"><Mail className="h-4 w-4" /> 通知设置</div>
              <div className="-mx-1 h-px bg-border my-1" />
              <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">工具</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent"><Search className="h-4 w-4" /> 全局搜索</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent"><BarChart className="h-4 w-4" /> 数据分析</div>
              <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent"><HelpCircle className="h-4 w-4" /> 帮助中心</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 带快捷键标签 */}
      <Card>
        <CardHeader>
          <CardTitle>带快捷键标签</CardTitle>
          <CardDescription>展示命令对应的键盘快捷键</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <div className="flex h-11 items-center gap-2 border-b px-3">
              <Search className="h-4 w-4 shrink-0 opacity-50" />
              <input
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="搜索命令..."
              />
            </div>
            <div className="max-h-[300px] overflow-y-auto p-1">
              <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">编辑</div>
              <div className="flex items-center justify-between rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">
                <span>复制</span>
                <Badge variant="secondary">⌘C</Badge>
              </div>
              <div className="flex items-center justify-between rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">
                <span>粘贴</span>
                <Badge variant="secondary">⌘V</Badge>
              </div>
              <div className="flex items-center justify-between rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">
                <span>撤销</span>
                <Badge variant="secondary">⌘Z</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
