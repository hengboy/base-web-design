import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function FormsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Form Inputs</h1>
        <p className="text-muted-foreground mt-1">
          Input、Checkbox、RadioGroup、Switch、Select、Textarea、Slider 等表单组件
        </p>
      </div>

      {/* Input */}
      <Card>
        <CardHeader>
          <CardTitle>Input 输入框</CardTitle>
          <CardDescription>多种输入类型和状态</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">邮箱</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">密码</Label>
            <Input id="password" type="password" defaultValue="password123" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="disabled">禁用状态</Label>
            <Input id="disabled" placeholder="Disabled input" disabled />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="with-error">错误状态</Label>
            <Input id="with-error" className="border-destructive" defaultValue="invalid@email" />
            <p className="text-sm text-destructive">请输入有效的邮箱地址</p>
          </div>
        </CardContent>
      </Card>

      {/* Checkbox */}
      <Card>
        <CardHeader>
          <CardTitle>Checkbox 复选框</CardTitle>
          <CardDescription>多选选项</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">同意服务条款</Label>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium">通知偏好</p>
            {['邮件通知', '短信通知', '推送通知'].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox id={`notify-${item}`} defaultChecked={item === '邮件通知'} />
                <Label htmlFor={`notify-${item}`}>{item}</Label>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-cb" disabled />
            <Label htmlFor="disabled-cb" className="text-muted-foreground">禁用复选框</Label>
          </div>
        </CardContent>
      </Card>

      {/* RadioGroup */}
      <Card>
        <CardHeader>
          <CardTitle>RadioGroup 单选组</CardTitle>
          <CardDescription>互斥选项</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="mb-3 block">性别</Label>
            <RadioGroup defaultValue="male">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">男</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">女</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">其他</Label>
              </div>
            </RadioGroup>
          </div>
          <Separator />
          <div>
            <Label className="mb-3 block">计划方案</Label>
            <RadioGroup defaultValue="pro">
              {[
                { value: 'free', label: '免费版', desc: '基础功能，100 次/月' },
                { value: 'pro', label: '专业版', desc: '全部功能，10,000 次/月' },
                { value: 'enterprise', label: '企业版', desc: '无限次数，专属支持' },
              ].map((plan) => (
                <div key={plan.value} className="flex items-start space-x-3 rounded-lg border p-3">
                  <RadioGroupItem value={plan.value} id={`plan-${plan.value}`} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={`plan-${plan.value}`} className="font-medium">{plan.label}</Label>
                    <p className="text-sm text-muted-foreground">{plan.desc}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Switch */}
      <Card>
        <CardHeader>
          <CardTitle>Switch 开关</CardTitle>
          <CardDescription>二元切换控制</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: '邮件通知', desc: '接收来自系统的重要通知', id: 'sw1' },
            { label: '营销邮件', desc: '接收产品更新和优惠信息', id: 'sw2' },
            { label: '暗色模式', desc: '使用深色主题减少眼睛疲劳', id: 'sw3', checked: true },
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor={item.id}>{item.label}</Label>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <Switch id={item.id} defaultChecked={item.checked} />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Select */}
      <Card>
        <CardHeader>
          <CardTitle>Select 下拉选择</CardTitle>
          <CardDescription>下拉菜单选择器</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label>选择框架</Label>
            <Select>
              <SelectTrigger className="w-full md:w-[280px]">
                <SelectValue placeholder="选择一个框架" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Textarea */}
      <Card>
        <CardHeader>
          <CardTitle>Textarea 文本域</CardTitle>
          <CardDescription>多行文本输入</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="bio">个人简介</Label>
            <Textarea id="bio" placeholder="介绍一下你自己..." rows={4} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="disabled-ta">禁用文本域</Label>
            <Textarea id="disabled-ta" placeholder="This is disabled" disabled />
          </div>
        </CardContent>
      </Card>

      {/* Slider */}
      <Card>
        <CardHeader>
          <CardTitle>Slider 滑块</CardTitle>
          <CardDescription>范围选择器</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>音量</Label>
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Slider defaultValue={[75]} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>价格范围</Label>
              <span className="text-sm text-muted-foreground">¥100 - ¥900</span>
            </div>
            <Slider defaultValue={[100, 900]} max={1000} step={10} />
          </div>
        </CardContent>
      </Card>

      {/* Sample Form */}
      <Card>
        <CardHeader>
          <CardTitle>综合表单示例</CardTitle>
          <CardDescription>组合使用多种表单组件</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="first-name">姓</Label>
              <Input id="first-name" placeholder="张" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">名</Label>
              <Input id="last-name" placeholder="三" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="form-email">邮箱</Label>
            <Input id="form-email" type="email" placeholder="zhangsan@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="form-message">留言</Label>
            <Textarea id="form-message" placeholder="请输入留言内容..." rows={3} />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="form-terms" />
            <Label htmlFor="form-terms">我已阅读并同意服务条款</Label>
          </div>
          <div className="flex gap-2">
            <Button type="submit">提交</Button>
            <Button variant="outline" type="button">取消</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
