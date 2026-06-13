import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { toast } from 'sonner'
import { AlertCircle, CheckCircle2, Info, TriangleAlert, Terminal } from 'lucide-react'

export function FeedbackPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Feedback & Status</h1>
        <p className="text-muted-foreground mt-1">
          Alert、Badge、Toast、Progress、Spinner、Skeleton 反馈与状态组件
        </p>
      </div>

      {/* Alert */}
      <Card>
        <CardHeader>
          <CardTitle>Alert 提示</CardTitle>
          <CardDescription>不同级别的提示信息</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>提示</AlertTitle>
            <AlertDescription>
              这是一个普通提示，用于向用户传达一般性信息。
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>错误</AlertTitle>
            <AlertDescription>
              操作失败！请检查您的网络连接后重试。
            </AlertDescription>
          </Alert>

          <Alert className="border-green-500 text-green-500 [&>svg]:text-green-500">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>成功</AlertTitle>
            <AlertDescription className="text-green-600 dark:text-green-400">
              您的操作已成功完成。
            </AlertDescription>
          </Alert>

          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>无图标</AlertTitle>
            <AlertDescription>
              不带图标的简洁提示，适合技术场景。
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Badge */}
      <Card>
        <CardHeader>
          <CardTitle>Badge 标签</CardTitle>
          <CardDescription>状态标识和分类标签</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-500">进行中</Badge>
            <Badge className="bg-green-500">已完成</Badge>
            <Badge className="bg-yellow-500 text-yellow-950">待审核</Badge>
            <Badge className="bg-red-500">已拒绝</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-500">自定义</Badge>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind', 'Vite'].map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Toast */}
      <Card>
        <CardHeader>
          <CardTitle>Toast 通知</CardTitle>
          <CardDescription>使用 Sonner 弹出提示消息</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => toast.success('操作成功！', { className: 'toast-success' })}>成功</Button>
            <Button variant="destructive" onClick={() => toast.error('操作失败！', { className: 'toast-error' })}>错误</Button>
            <Button variant="outline" onClick={() => toast.warning('请注意！', { className: 'toast-warning' })}>警告</Button>
            <Button variant="secondary" onClick={() => toast.info('提示信息', { className: 'toast-info' })}>信息</Button>
            <Button
              variant="outline"
              onClick={() =>
                toast('操作完成', {
                  description: '数据已成功保存到数据库。',
                  action: { label: '撤销', onClick: () => toast.info('已撤销') },
                })
              }
            >
              带操作
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Progress 进度条</CardTitle>
          <CardDescription>展示任务完成进度</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>上传进度</span>
              <span className="text-muted-foreground">75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>存储空间</span>
              <span className="text-muted-foreground">45%</span>
            </div>
            <Progress value={45} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>即将完成</span>
              <span className="text-muted-foreground">92%</span>
            </div>
            <Progress value={92} className="bg-green-100 dark:bg-green-900 [&>div]:bg-green-500" />
          </div>
        </CardContent>
      </Card>

      {/* Spinner */}
      <Card>
        <CardHeader>
          <CardTitle>Spinner 加载动画</CardTitle>
          <CardDescription>不同尺寸和样式的加载指示器</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <span className="text-xs text-muted-foreground">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" />
              <span className="text-xs text-muted-foreground">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <span className="text-xs text-muted-foreground">Large</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" />
              <span className="text-xs text-muted-foreground">XLarge</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skeleton */}
      <Card>
        <CardHeader>
          <CardTitle>Skeleton 骨架屏</CardTitle>
          <CardDescription>数据加载前的占位展示</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Article skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-[250px]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[85%]" />
              <Skeleton className="h-4 w-[70%]" />
            </div>
            {/* Card list skeleton */}
            <div className="space-y-3 pt-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-3 w-[150px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
