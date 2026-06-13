import { Link } from 'react-router-dom'
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Compass,
  DollarSign,
  Package,
  ShoppingCart,
  Sparkles,
  Users,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { componentPageEntries, getComponentPagePath } from '@/pages/components/registry'

const quickEntrySlugs = [
  'button',
  'input',
  'command',
  'navigation-menu',
  'tree',
  'sonner',
] as const

const quickEntries = quickEntrySlugs
  .map((slug) => componentPageEntries.find((entry) => entry.slug === slug))
  .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))

const stats = [
  { title: '总收入', value: '¥45,231', change: '+20.1%', up: true, icon: DollarSign },
  { title: '订阅用户', value: '+2,350', change: '+180.1%', up: true, icon: Users },
  { title: '销售额', value: '+12,234', change: '+19%', up: true, icon: ShoppingCart },
  { title: '活跃用户', value: '+573', change: '-2.4%', up: false, icon: Activity },
] as const

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">
            脚手架首页作为启动台使用，集中展示统计数据、状态摘要和常用页面入口。
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link to="/charts">
              查看 Charts
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to={getComponentPagePath(componentPageEntries[0].slug)}>
              浏览组件目录
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="mt-1 flex items-center text-xs text-muted-foreground">
                {stat.up ? (
                  <ArrowUpRight className="mr-1 size-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="mr-1 size-3 text-red-500" />
                )}
                {stat.change} 较上月
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
        <Card>
          <CardHeader>
            <CardTitle>常用组件入口</CardTitle>
            <CardDescription>首页只保留高频快捷入口，详细演示仍在各自独立页面。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {quickEntries.map((entry) => (
              <Link
                key={entry.slug}
                to={getComponentPagePath(entry.slug)}
                className="rounded-xl border p-4 transition-colors hover:bg-accent/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium">{entry.title}</p>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{entry.description}</p>
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>项目摘要</CardTitle>
            <CardDescription>当前脚手架状态和目录结构概览。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Dashboard</Badge>
              <Badge variant="secondary">{componentPageEntries.length} Components</Badge>
              <Badge variant="outline">Charts</Badge>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>组件演示页已经拆分为一组件一路由，菜单按分组展示。</p>
              <p>首页保持脚手架启动台角色，不再承担详细组件 demo 职责。</p>
              <p>`Command`、`Navigation Menu`、`Sonner` 页面继续使用真实组件与真实调用方式。</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>加载状态</CardTitle>
            <CardDescription>使用 Skeleton 展示首页数据卡片和列表的加载占位。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-24 w-full rounded-lg" />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>团队与状态</CardTitle>
            <CardDescription>头像、标签和动作按钮是首页常见的辅助信息块。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-lg text-primary-foreground">Re</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Core</Badge>
              <Badge variant="secondary">Frontend</Badge>
              <Badge variant="outline">Design System</Badge>
            </div>
            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                <p className="font-medium">当前建议</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                从 Dashboard 进入后，优先查看 `Charts`、`Command` 和 `Navigation Menu` 等高频页面。
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm">
                <Package className="size-4" />
                打开项目
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/charts">
                  <BarChart3 className="size-4" />
                  数据概览
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>快捷导航</CardTitle>
            <CardDescription>保留少量常用路径作为启动台入口，而不是完整目录页。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: '组件目录', href: getComponentPagePath(componentPageEntries[0].slug), icon: Compass },
              { title: '图表总览', href: '/charts', icon: BarChart3 },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-accent/40"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="size-4 text-muted-foreground" />
                  <span className="font-medium">{item.title}</span>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>版本状态</CardTitle>
            <CardDescription>适合放在脚手架首页的版本和发布摘要。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-lg border p-4">
              <p className="font-medium">v2.1.0</p>
              <p className="mt-1 text-sm text-muted-foreground">组件演示页已拆分完成，侧栏恢复分组并为每个路由分配独立图标。</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium">下一步</p>
              <p className="mt-1 text-sm text-muted-foreground">可继续补充本地 smoke test 或进一步细化启动台卡片内容。</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
