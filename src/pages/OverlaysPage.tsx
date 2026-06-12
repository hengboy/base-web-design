import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'

export function OverlaysPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Overlays</h1>
        <p className="text-muted-foreground mt-1">
          Dialog 对话框、AlertDialog 确认框、Sheet 侧边抽屉
        </p>
      </div>

      {/* Dialog */}
      <Card>
        <CardHeader>
          <CardTitle>Dialog 对话框</CardTitle>
          <CardDescription>模态弹窗，用于表单输入和信息确认</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Basic Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>打开表单对话框</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>创建项目</DialogTitle>
                <DialogDescription>
                  填写以下信息以创建新项目。完成后点击保存。
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="project-name">项目名称</Label>
                  <Input id="project-name" placeholder="输入项目名称" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="project-desc">项目描述</Label>
                  <Textarea id="project-desc" placeholder="简要描述项目内容" rows={3} />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => {}}>取消</Button>
                <Button onClick={() => {}}>保存</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Controlled Dialog */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">受控对话框</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>受控对话框</DialogTitle>
                <DialogDescription>
                  这个对话框通过 open 状态属性控制开关。
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={() => setDialogOpen(false)}>关闭</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Large Content Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">大内容对话框</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>完整项目详情</DialogTitle>
                <DialogDescription>
                  一个包含较多内容的对话框示例。
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-4">
                <div className="space-y-4 py-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <h4 className="font-medium">条目 {i + 1}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        这是第 {i + 1} 条内容的详细描述。在真实场景中，这里可能是项目日志、操作记录或数据详情。
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <DialogFooter>
                <Button onClick={() => {}}>确认</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* AlertDialog */}
      <Card>
        <CardHeader>
          <CardTitle>AlertDialog 确认框</CardTitle>
          <CardDescription>需要用户确认的危险操作</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">删除项目</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确认删除？</AlertDialogTitle>
                <AlertDialogDescription>
                  此操作不可撤销。项目及其所有关联数据将被永久删除。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground">
                  确认删除
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">退出编辑</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>放弃未保存的更改？</AlertDialogTitle>
                <AlertDialogDescription>
                  您有未保存的更改，确定要离开吗？
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>继续编辑</AlertDialogCancel>
                <AlertDialogAction>放弃更改</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>

      {/* Sheet */}
      <Card>
        <CardHeader>
          <CardTitle>Sheet 侧边抽屉</CardTitle>
          <CardDescription>从不同方向滑出的面板</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {(['right', 'left', 'top', 'bottom'] as const).map((side) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    从{side === 'right' ? '右' : side === 'left' ? '左' : side === 'top' ? '上' : '下'}侧打开
                  </Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle>{side === 'right' ? '右' : side === 'left' ? '左' : side === 'top' ? '上' : '下'}侧面板</SheetTitle>
                    <SheetDescription>
                      这是一个从{side === 'right' ? '右' : side === 'left' ? '左' : side === 'top' ? '上' : '下'}侧滑出的抽屉面板。
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-8 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      这里可以放置表单、设置项、导航菜单等内容。
                    </p>
                    <div className="grid gap-2">
                      <Label htmlFor={`sheet-${side}`}>输入内容</Label>
                      <Input id={`sheet-${side}`} placeholder="输入..." />
                    </div>
                    <Button className="w-full">保存</Button>
                  </div>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
