import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export function LayoutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Layout</h1>
        <p className="text-muted-foreground mt-1">
          Resizable 可拖拽面板、Separator 分隔线、ScrollArea 滚动区域、AspectRatio 比例容器
        </p>
      </div>

      {/* Separator */}
      <Card>
        <CardHeader>
          <CardTitle>Separator 分隔线</CardTitle>
          <CardDescription>水平或垂直的内容分隔</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium">账户设置</h3>
              <p className="text-sm text-muted-foreground">管理您的个人资料和偏好设置。</p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>基本信息</div>
              <Separator orientation="vertical" />
              <div>安全</div>
              <Separator orientation="vertical" />
              <div>通知</div>
              <Separator orientation="vertical" />
              <div>隐私</div>
            </div>
          </div>

          {/* List with separators */}
          <div className="space-y-4">
            {[
              { name: '张三', email: 'zhangsan@example.com', time: '2分钟前' },
              { name: '李四', email: 'lisi@example.com', time: '15分钟前' },
              { name: '王五', email: 'wangwu@example.com', time: '1小时前' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.email}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
                {i < 2 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ScrollArea */}
      <Card>
        <CardHeader>
          <CardTitle>ScrollArea 滚动区域</CardTitle>
          <CardDescription>自定义滚动条样式的容器</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] w-full rounded-lg border p-4">
            <div className="space-y-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="rounded-md bg-muted p-3">
                  <p className="text-sm font-medium">条目 {i + 1}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    这是一条滚动内容。ScrollArea 提供了美观的自定义滚动条，
                    在不同平台和浏览器下保持一致的外观。
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* AspectRatio */}
      <Card>
        <CardHeader>
          <CardTitle>AspectRatio 比例容器</CardTitle>
          <CardDescription>保持内容的宽高比例</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium mb-2">16:9 视频比例</p>
              <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">16:9</span>
              </AspectRatio>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">4:3 照片比例</p>
              <AspectRatio ratio={4 / 3} className="rounded-lg bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">4:3</span>
              </AspectRatio>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">1:1 正方形比例</p>
              <AspectRatio ratio={1} className="rounded-lg bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">1:1</span>
              </AspectRatio>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resizable Panels */}
      <Card>
        <CardHeader>
          <CardTitle>Resizable 可拖拽面板</CardTitle>
          <CardDescription>可调整大小的面板布局</CardDescription>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] max-w-full rounded-lg border"
          >
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="flex h-full items-center justify-center bg-muted/50">
                <p className="text-sm font-medium">左侧面板 (30%)</p>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={70}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm font-medium">右上面板</p>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center bg-muted/50">
                    <p className="text-sm font-medium">右下面板</p>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>
    </div>
  )
}
