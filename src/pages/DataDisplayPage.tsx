import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CalendarIcon, Info } from 'lucide-react'

const users = [
  { name: '张三', email: 'zhangsan@example.com', role: '管理员', status: '活跃', avatar: 'ZS' },
  { name: '李四', email: 'lisi@example.com', role: '编辑', status: '活跃', avatar: 'LS' },
  { name: '王五', email: 'wangwu@example.com', role: '访客', status: '离线', avatar: 'WW' },
  { name: '赵六', email: 'zhaoliu@example.com', role: '编辑', status: '活跃', avatar: 'ZL' },
  { name: '孙七', email: 'sunqi@example.com', role: '访客', status: '离线', avatar: 'SQ' },
]

export function DataDisplayPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Data Display</h1>
        <p className="text-muted-foreground mt-1">
          Table 表格、Avatar 头像、Tooltip 工具提示、HoverCard 悬停卡片、Popover 弹出框
        </p>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Table 表格</CardTitle>
          <CardDescription>结构化数据展示</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>用户</TableHead>
                <TableHead>邮箱</TableHead>
                <TableHead>角色</TableHead>
                <TableHead>状态</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-7 w-7">
                        <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                      </Avatar>
                      {user.name}
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === '管理员' ? 'default' : 'secondary'}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === '活跃' ? 'outline' : 'secondary'}
                           className={user.status === '活跃' ? 'border-green-500 text-green-700 dark:text-green-400' : ''}>
                      {user.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Tooltip */}
      <Card>
        <CardHeader>
          <CardTitle>Tooltip 工具提示</CardTitle>
          <CardDescription>鼠标悬停时显示额外信息</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">悬停显示提示</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>这是一个工具提示</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="max-w-xs">这里可以显示更长的说明文字，帮助用户理解功能。</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-pointer text-sm underline decoration-dotted">带下划线的提示文字</span>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>右侧弹出的提示</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardContent>
      </Card>

      {/* HoverCard */}
      <Card>
        <CardHeader>
          <CardTitle>HoverCard 悬停卡片</CardTitle>
          <CardDescription>悬停时展示详细信息</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-6">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">@zhangsan</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>ZS</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">张三</h4>
                    <p className="text-sm text-muted-foreground">
                      前端开发工程师，热爱 React 和 TypeScript。
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground">
                      <CalendarIcon className="h-3 w-3" />
                      <span>加入于 2024年1月</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">@lisi</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>LS</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">李四</h4>
                    <p className="text-sm text-muted-foreground">
                      后端开发工程师，专注 Go 和微服务架构。
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground">
                      <CalendarIcon className="h-3 w-3" />
                      <span>加入于 2024年3月</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </CardContent>
      </Card>

      {/* Popover */}
      <Card>
        <CardHeader>
          <CardTitle>Popover 弹出框</CardTitle>
          <CardDescription>点击触发的浮动面板</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">打开 Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">设置项</h4>
                  <div className="grid gap-2">
                    <Label htmlFor="width">宽度</Label>
                    <Input id="width" defaultValue="100%" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="maxWidth">最大宽度</Label>
                    <Input id="maxWidth" defaultValue="300px" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  选择日期
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4">
                <p className="text-sm text-muted-foreground">这里可以放置日期选择器</p>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
