import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineBody,
} from '@/components/ui/timeline'
import { Rocket, Package, GitBranch, Sparkles, Bug, Shield } from 'lucide-react'

export function TimelinePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Timeline 时间线</h1>
        <p className="text-muted-foreground mt-1">按时间顺序展示事件和里程碑</p>
      </div>

      {/* 基础时间线 */}
      <Card>
        <CardHeader>
          <CardTitle>基础用法</CardTitle>
          <CardDescription>带颜色圆点的 4 事件时间线</CardDescription>
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

      {/* 带图标的时间线 */}
      <Card>
        <CardHeader>
          <CardTitle>带图标的时间线</CardTitle>
          <CardDescription>使用 Lucide 图标替代圆点</CardDescription>
        </CardHeader>
        <CardContent>
          <Timeline>
            <TimelineItem>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <Rocket className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>项目启动</TimelineTitle>
                  <Badge variant="secondary">1 月</Badge>
                </TimelineHeader>
                <TimelineDescription>完成需求分析和技术选型。</TimelineDescription>
              </div>
            </TimelineItem>
            <TimelineItem>
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Package className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>v1.0 发布</TimelineTitle>
                  <Badge>3 月</Badge>
                </TimelineHeader>
                <TimelineDescription>基础组件库上线，支持暗色模式。</TimelineDescription>
              </div>
            </TimelineItem>
            <TimelineItem>
              <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                <GitBranch className="w-4 h-4 text-violet-600" />
              </div>
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>v2.0 重构</TimelineTitle>
                  <Badge variant="outline">6 月</Badge>
                </TimelineHeader>
                <TimelineDescription>架构升级，组件拆分为独立页面。</TimelineDescription>
              </div>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>

      {/* 详细内容时间线 */}
      <Card>
        <CardHeader>
          <CardTitle>详细内容模式</CardTitle>
          <CardDescription>每个事件包含标题和详细内容</CardDescription>
        </CardHeader>
        <CardContent>
          <Timeline>
            <TimelineItem>
              <TimelineDot variant="success" />
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>安全补丁 v1.2.3</TimelineTitle>
                  <Badge>已修复</Badge>
                </TimelineHeader>
                <TimelineDescription>修复了 XSS 漏洞。</TimelineDescription>
                <TimelineBody className="mt-2">
                  <div className="p-3 rounded-lg border bg-muted/30 text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Bug className="w-3 h-3 text-muted-foreground" />
                      <span>修复输入框未转义的问题</span>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-2">
                      <Shield className="w-3 h-3 text-muted-foreground" />
                      <span>增加了 CSP 响应头配置</span>
                    </div>
                  </div>
                </TimelineBody>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot variant="primary" />
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>新功能开发</TimelineTitle>
                  <Badge variant="secondary">进行中</Badge>
                </TimelineHeader>
                <TimelineDescription>正在开发 Calendar 和 Command 组件。</TimelineDescription>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot variant="warning" />
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>性能优化</TimelineTitle>
                  <Badge variant="outline">待排期</Badge>
                </TimelineHeader>
                <TimelineDescription>优化首屏加载速度和组件渲染性能。</TimelineDescription>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineDot />
              <div className="flex-1">
                <TimelineHeader>
                  <TimelineTitle>社区贡献</TimelineTitle>
                  <Sparkles className="w-3 h-3 text-muted-foreground" />
                </TimelineHeader>
                <TimelineBody className="mt-2 text-sm text-muted-foreground">
                  欢迎社区提交 PR 和 Issue，共同完善组件库。
                </TimelineBody>
              </div>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>
    </div>
  )
}
