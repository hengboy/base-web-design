import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'

export function DrawerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Drawer 抽屉</h1>
        <p className="text-muted-foreground mt-1">底部弹出的移动端风格面板，适用于表单输入和内容展示</p>
      </div>

      {/* 基础抽屉 */}
      <Card>
        <CardHeader>
          <CardTitle>基础用法</CardTitle>
          <CardDescription>点击按钮打开底部抽屉</CardDescription>
        </CardHeader>
        <CardContent>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">打开抽屉</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>抽屉标题</DrawerTitle>
                <DrawerDescription>这是一个从底部滑出的抽屉面板。</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  这里可以放置表单、设置项或其他内容。
                </p>
                <Button className="w-full">确认</Button>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">关闭</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </CardContent>
      </Card>

      {/* 带表单的抽屉 */}
      <Card>
        <CardHeader>
          <CardTitle>表单抽屉</CardTitle>
          <CardDescription>在抽屉中填写反馈信息</CardDescription>
        </CardHeader>
        <CardContent>
          <Drawer>
            <DrawerTrigger asChild>
              <Button>提交反馈</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>用户反馈</DrawerTitle>
                <DrawerDescription>请填写你的使用体验和遇到的问题。</DrawerDescription>
              </DrawerHeader>
              <form className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="请输入你的姓名" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" type="email" placeholder="请输入邮箱地址" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback">反馈内容</Label>
                  <Textarea id="feedback" placeholder="请描述你的使用体验..." rows={3} />
                </div>
                <Separator />
                <div className="flex gap-2">
                  <Button className="flex-1">提交</Button>
                  <DrawerClose asChild>
                    <Button variant="outline" className="flex-1">取消</Button>
                  </DrawerClose>
                </div>
              </form>
            </DrawerContent>
          </Drawer>
        </CardContent>
      </Card>

      {/* 嵌套内容展示 */}
      <Card>
        <CardHeader>
          <CardTitle>内容详情抽屉</CardTitle>
          <CardDescription>展开查看完整内容</CardDescription>
        </CardHeader>
        <CardContent>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">查看更新日志</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>v2.1.0 更新日志</DrawerTitle>
                <DrawerDescription>2026-06-12 发布</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-3 text-sm">
                <div>
                  <p className="font-medium">新增功能</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-1">
                    <li>新增 Calendar 日期范围选择</li>
                    <li>新增 Command 图标命令项</li>
                    <li>新增 Drawer 表单抽屉</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <p className="font-medium">问题修复</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-1">
                    <li>修复了暗色模式下的边框颜色</li>
                    <li>修复了移动端滚动条溢出问题</li>
                  </ul>
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">关闭</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </CardContent>
      </Card>
    </div>
  )
}
