import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowUpRight, ArrowDownRight, Users, ShoppingCart, DollarSign, Activity } from 'lucide-react'

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          使用 Card、Badge、Button、Avatar、Skeleton 等组件构建仪表盘概览
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: '总收入', value: '¥45,231', change: '+20.1%', up: true, icon: DollarSign },
          { title: '订阅用户', value: '+2,350', change: '+180.1%', up: true, icon: Users },
          { title: '销售额', value: '+12,234', change: '+19%', up: true, icon: ShoppingCart },
          { title: '活跃用户', value: '+573', change: '-2.4%', up: false, icon: Activity },
        ].map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                {stat.up ? (
                  <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                )}
                {stat.change} 较上月
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Loading State Demo */}
      <Card>
        <CardHeader>
          <CardTitle>加载状态</CardTitle>
          <CardDescription>使用 Skeleton 组件展示加载占位</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-24 w-full rounded-lg" />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Button Variants Demo */}
      <Card>
        <CardHeader>
          <CardTitle>按钮变体</CardTitle>
          <CardDescription>6 种 Button variant 展示</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ShoppingCart className="mr-2 h-4 w-4" />
              加入购物车
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Badge & Avatar Demo */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Badge 标签</CardTitle>
            <CardDescription>多种 Badge 变体</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="bg-blue-500">Info</Badge>
              <Badge className="bg-green-500">Success</Badge>
              <Badge className="bg-yellow-500 text-yellow-950">Warning</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatar 头像</CardTitle>
            <CardDescription>图片头像与首字母 fallback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="text-lg bg-primary text-primary-foreground">Re</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
