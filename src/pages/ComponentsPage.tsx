import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Stepper,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
} from '@/components/ui/stepper'
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineBody,
} from '@/components/ui/timeline'
import { Tree, type TreeItemData } from '@/components/ui/tree'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { REGEXP_ONLY_DIGITS } from 'input-otp'

const treeData: TreeItemData[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      { id: 'components', label: 'components', children: [
        { id: 'ui', label: 'ui', children: [
          { id: 'button', label: 'button.tsx' },
          { id: 'card', label: 'card.tsx' },
          { id: 'dialog', label: 'dialog.tsx' },
        ]},
      ]},
      { id: 'pages', label: 'pages', children: [
        { id: 'dashboard', label: 'Dashboard.tsx' },
        { id: 'forms', label: 'FormsPage.tsx' },
      ]},
      { id: 'lib', label: 'lib', children: [
        { id: 'utils', label: 'utils.ts' },
        { id: 'theme', label: 'theme.tsx' },
      ]},
    ],
  },
]

export function ComponentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [otpValue, setOtpValue] = useState('')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">New Components</h1>
        <p className="text-muted-foreground mt-1">
          Calendar、Command、Drawer、Input OTP、Carousel、Stepper、Tree、Timeline
        </p>
      </div>

      {/* Calendar */}
      <Card>
        <CardHeader>
          <CardTitle>Calendar 日历</CardTitle>
          <CardDescription>日期选择器</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      {/* Command */}
      <Card>
        <CardHeader>
          <CardTitle>Command 命令面板</CardTitle>
          <CardDescription>可搜索的命令列表</CardDescription>
        </CardHeader>
        <CardContent>
          <Command className="rounded-lg border">
            <CommandInput placeholder="搜索功能..." />
            <CommandList>
              <CommandEmpty>无结果</CommandEmpty>
              <CommandGroup heading="页面导航">
                <CommandItem>Dashboard</CommandItem>
                <CommandItem>Buttons & Actions</CommandItem>
                <CommandItem>Form Inputs</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="操作">
                <CommandItem>创建项目</CommandItem>
                <CommandItem>删除项目</CommandItem>
                <CommandItem>导出配置</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CardContent>
      </Card>

      {/* Drawer */}
      <Card>
        <CardHeader>
          <CardTitle>Drawer 抽屉</CardTitle>
          <CardDescription>底部弹出的移动端风格面板</CardDescription>
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

      {/* Input OTP */}
      <Card>
        <CardHeader>
          <CardTitle>Input OTP 验证码输入</CardTitle>
          <CardDescription>一次性密码输入框</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">6 位数字验证码</p>
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={otpValue}
              onChange={setOtpValue}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </CardContent>
      </Card>

      {/* Carousel */}
      <Card>
        <CardHeader>
          <CardTitle>Carousel 轮播</CardTitle>
          <CardDescription>使用 Embla Carousel 构建</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted p-6">
                    <span className="text-3xl font-semibold">
                      {index + 1}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      {/* Stepper */}
      <Card>
        <CardHeader>
          <CardTitle>Stepper 步骤条</CardTitle>
          <CardDescription>多步骤流程导航</CardDescription>
        </CardHeader>
        <CardContent>
          <Stepper className="w-full">
            <StepperItem step={1} completed>
              <div>
                <StepperTitle>创建账户</StepperTitle>
                <StepperDescription>填写基本信息</StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator />
            <StepperItem step={2} active>
              <div>
                <StepperTitle>验证邮箱</StepperTitle>
                <StepperDescription>输入验证码</StepperDescription>
              </div>
            </StepperItem>
            <StepperSeparator />
            <StepperItem step={3}>
              <div>
                <StepperTitle>完成设置</StepperTitle>
                <StepperDescription>配置个人偏好</StepperDescription>
              </div>
            </StepperItem>
          </Stepper>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Timeline 时间线</CardTitle>
          <CardDescription>按时间顺序展示事件</CardDescription>
        </CardHeader>
        <CardContent>
          <Timeline>
            <TimelineItem>
              <TimelineDot variant="primary" />
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>项目启动</TimelineTitle>
                  <Badge variant="secondary">2024-01-15</Badge>
                </TimelineHeader>
                <TimelineDescription>
                  确定技术方案，完成项目脚手架搭建。
                </TimelineDescription>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot variant="success" />
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>v1.0 发布</TimelineTitle>
                  <Badge>2024-03-01</Badge>
                </TimelineHeader>
                <TimelineDescription>
                  首个正式版本发布，包含 10 个核心组件。
                </TimelineDescription>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot variant="warning" />
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>重大更新</TimelineTitle>
                  <Badge variant="outline">2024-06-01</Badge>
                </TimelineHeader>
                <TimelineDescription>
                  升级到 React 19 和 Tailwind CSS v4。
                </TimelineDescription>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot />
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>持续迭代</TimelineTitle>
                  <Badge variant="outline">进行中</Badge>
                </TimelineHeader>
                <TimelineDescription>
                  新增 AI Chat 等更多组件。
                </TimelineDescription>
              </div>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>

      {/* Tree */}
      <Card>
        <CardHeader>
          <CardTitle>Tree 树形结构</CardTitle>
          <CardDescription>可展开的文件目录展示</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border p-3">
            <Tree items={treeData} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
