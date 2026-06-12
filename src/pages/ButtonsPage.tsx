import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Loader2, Plus, Trash2, Settings, Mail } from 'lucide-react'

export function ButtonsPage() {
  const [loading, setLoading] = useState(false)
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Buttons & Actions</h1>
        <p className="text-muted-foreground mt-1">
          Button 按钮变体、Toggle 开关、ToggleGroup 按钮组
        </p>
      </div>

      {/* Button Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Button 变体 (Variant)</CardTitle>
          <CardDescription>6 种预设样式</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </CardContent>
      </Card>

      {/* Button Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Button 尺寸 (Size)</CardTitle>
          <CardDescription>4 种尺寸规格</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Buttons with Icons */}
      <Card>
        <CardHeader>
          <CardTitle>带图标的按钮</CardTitle>
          <CardDescription>Lucide 图标配合 Button 使用</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> 新建
            </Button>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" /> 删除
            </Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" /> 发送邮件
            </Button>
            <Button variant="secondary" size="sm">
              <Settings className="mr-2 h-4 w-4" /> 设置
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Loading & Disabled States */}
      <Card>
        <CardHeader>
          <CardTitle>按钮状态</CardTitle>
          <CardDescription>Loading 加载态、Disabled 禁用态</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
            <Button
              variant="default"
              disabled={loading}
              onClick={() => {
                setLoading(true)
                setTimeout(() => setLoading(false), 2000)
              }}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  提交中...
                </>
              ) : (
                '提交'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Toggle */}
      <Card>
        <CardHeader>
          <CardTitle>Toggle 开关</CardTitle>
          <CardDescription>单个开关按钮</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Toggle pressed={bold} onPressedChange={setBold} aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
        </CardContent>
      </Card>

      {/* ToggleGroup */}
      <Card>
        <CardHeader>
          <CardTitle>ToggleGroup 按钮组</CardTitle>
          <CardDescription>多选和单选按钮组</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">多选模式</p>
            <ToggleGroup type="multiple" defaultValue={['bold']}>
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">单选模式</p>
            <ToggleGroup type="single" defaultValue="left">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
