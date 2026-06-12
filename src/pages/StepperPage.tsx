import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Stepper,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
} from '@/components/ui/stepper'
import { useState } from 'react'
import { Check, Circle, CircleAlert } from 'lucide-react'

export function StepperPage() {
  const [activeStep, setActiveStep] = useState(2)

  const steps = [
    { title: '创建账户', desc: '填写基本信息' },
    { title: '验证邮箱', desc: '输入验证码' },
    { title: '完善资料', desc: '上传头像和简介' },
    { title: '完成设置', desc: '配置个人偏好' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Stepper 步骤条</h1>
        <p className="text-muted-foreground mt-1">多步骤流程导航组件</p>
      </div>

      {/* 基础步骤条 */}
      <Card>
        <CardHeader>
          <CardTitle>基础用法</CardTitle>
          <CardDescription>静态展示的 3 步流程</CardDescription>
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

      {/* 交互式步骤条 */}
      <Card>
        <CardHeader>
          <CardTitle>交互式步骤</CardTitle>
          <CardDescription>点击按钮切换当前步骤</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Stepper className="w-full">
            {steps.map((step, index) => (
              <>
                {index > 0 && <StepperSeparator />}
                <StepperItem
                  key={index}
                  step={index + 1}
                  completed={index < activeStep}
                  active={index === activeStep}
                >
                  <div>
                    <StepperTitle>{step.title}</StepperTitle>
                    <StepperDescription>{step.desc}</StepperDescription>
                  </div>
                </StepperItem>
              </>
            ))}
          </Stepper>

          <Separator className="my-4" />

          <div className="flex gap-2 justify-between">
            <Button
              variant="outline"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
            >
              上一步
            </Button>
            <Badge variant="outline">
              步骤 {activeStep + 1} / {steps.length}
            </Badge>
            <Button
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep((s) => Math.min(steps.length - 1, s + 1))}
            >
              下一步
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 带状态图标的步骤 */}
      <Card>
        <CardHeader>
          <CardTitle>带状态图标</CardTitle>
          <CardDescription>展示成功、进行中、警告等状态</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-sm">已完成</p>
              <p className="text-xs text-muted-foreground">所有检查通过</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Circle className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-sm">进行中</p>
              <p className="text-xs text-muted-foreground">正在处理第 3 步</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <CircleAlert className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <p className="font-medium text-sm">待处理</p>
              <p className="text-xs text-muted-foreground">需要额外确认</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
