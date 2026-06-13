import type { ReactElement } from 'react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  AlertCircle,
  Bell,
  Bold,
  Bot,
  CalendarIcon,
  Check,
  CheckCircle2,
  ChevronDown,
  Circle,
  CircleAlert,
  CreditCard,
  GitBranch,
  Grid3X3,
  HelpCircle,
  Info,
  Italic,
  Keyboard,
  LayoutGrid,
  LifeBuoy,
  Loader2,
  Mail,
  MessageSquare,
  Package,
  PanelLeft,
  Plus,
  PlusCircle,
  Rocket,
  Search,
  Send,
  Settings,
  Shield,
  ShoppingCart,
  Sparkles,
  Terminal,
  TriangleAlert,
  Underline,
  Upload,
  User,
  UserPlus,
  Users,
} from 'lucide-react'
import { AIChatDialog } from '@/components/ui/ai-chat-dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { Slider } from '@/components/ui/slider'
import { Spinner } from '@/components/ui/spinner'
import {
  Stepper,
  StepperDescription,
  StepperItem,
  StepperSeparator,
  StepperTitle,
} from '@/components/ui/stepper'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import {
  Timeline,
  TimelineBody,
  TimelineDescription,
  TimelineDot,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from '@/components/ui/timeline'
import {
  Toggle,
} from '@/components/ui/toggle'
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Tree, type TreeItemData } from '@/components/ui/tree'
import { ComponentPageShell, DemoCard } from './page-shell'
import {
  componentPageEntries,
  componentPageMap,
  getComponentPagePath,
  type ComponentSlug,
} from './registry'

type DemoRenderer = () => ReactElement

const teamMembers = [
  {
    name: '张三',
    email: 'zhangsan@example.com',
    role: '管理员',
    status: '活跃',
    initials: 'ZS',
  },
  {
    name: '李四',
    email: 'lisi@example.com',
    role: '编辑',
    status: '活跃',
    initials: 'LS',
  },
  {
    name: '王五',
    email: 'wangwu@example.com',
    role: '访客',
    status: '离线',
    initials: 'WW',
  },
] as const

const componentTreeItems = componentPageEntries.map((entry) => ({
  id: entry.slug,
  label: `${entry.slug}.tsx`,
}))

const basicTreeData: TreeItemData[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          {
            id: 'ui',
            label: 'ui',
            children: [
              { id: 'button', label: 'button.tsx' },
              { id: 'card', label: 'card.tsx' },
              { id: 'dialog', label: 'dialog.tsx' },
            ],
          },
        ],
      },
      {
        id: 'pages',
        label: 'pages',
        children: [
          { id: 'dashboard', label: 'Dashboard.tsx' },
          {
            id: 'components-page-dir',
            label: 'components',
            children: [
              { id: 'component-demo-page', label: 'ComponentDemoPage.tsx' },
              { id: 'registry', label: 'registry.ts' },
            ],
          },
        ],
      },
    ],
  },
]

const largeTreeData: TreeItemData[] = [
  {
    id: 'project',
    label: 'base-web-framework',
    children: [
      {
        id: 'src',
        label: 'src',
        children: [
          {
            id: 'components-root',
            label: 'components',
            children: [
              {
                id: 'ui-root',
                label: 'ui',
                children: componentTreeItems,
              },
              {
                id: 'layout-root',
                label: 'layout',
                children: [
                  { id: 'app-header', label: 'AppHeader.tsx' },
                  { id: 'app-layout', label: 'AppLayout.tsx' },
                  { id: 'app-sidebar', label: 'AppSidebar.tsx' },
                ],
              },
            ],
          },
          {
            id: 'pages-root',
            label: 'pages',
            children: [
              { id: 'dashboard-page', label: 'Dashboard.tsx' },
              { id: 'charts-page', label: 'ChartsPage.tsx' },
              {
                id: 'components-pages',
                label: 'components',
                children: [
                  { id: 'component-demo', label: 'ComponentDemoPage.tsx' },
                  { id: 'page-shell', label: 'page-shell.tsx' },
                  { id: 'registry-file', label: 'registry.ts' },
                ],
              },
            ],
          },
          {
            id: 'lib-root',
            label: 'lib',
            children: [
              { id: 'utils-file', label: 'utils.ts' },
              { id: 'theme-file', label: 'theme.tsx' },
            ],
          },
        ],
      },
      { id: 'package-file', label: 'package.json' },
      { id: 'tsconfig-file', label: 'tsconfig.app.json' },
      { id: 'vite-file', label: 'vite.config.ts' },
    ],
  },
]

export function ComponentDemoPage({ slug }: { slug: ComponentSlug }) {
  const entry = componentPageMap[slug]
  const Demo = demoRenderers[slug]

  return (
    <ComponentPageShell title={entry.title} description={entry.description}>
      <Demo />
    </ComponentPageShell>
  )
}

function AccordionDemo() {
  return (
    <>
      <DemoCard title="基础用法" description="单项展开的 FAQ 场景。">
        <Accordion type="single" collapsible className="w-full">
          {[
            ['性能如何？', '每个 item 只在需要时展开，适合长列表说明场景。'],
            ['支持自定义内容吗？', '内容区可以放表单、表格或任意 React 节点。'],
            ['移动端体验如何？', '点击区域完整，适合作为设置项和说明列表。'],
          ].map(([title, description]) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger>{title}</AccordionTrigger>
              <AccordionContent>{description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DemoCard>

      <DemoCard title="多项展开" description="文档目录和发布说明可以同时展开多个分组。">
        <Accordion type="multiple" defaultValue={['v2', 'v3']} className="w-full">
          <AccordionItem value="v1">
            <AccordionTrigger>v1.0 基础能力</AccordionTrigger>
            <AccordionContent>包含 Button、Input、Card 等基础组件。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="v2">
            <AccordionTrigger>v2.0 交互增强</AccordionTrigger>
            <AccordionContent>补充 Drawer、Command、Tree 等复杂交互组件。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="v3">
            <AccordionTrigger>v3.0 页面拆分</AccordionTrigger>
            <AccordionContent>每个 UI 组件拥有独立 demo 页面和独立路由。</AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoCard>

      <DemoCard title="业务组合" description="设置页里用 Accordion 拆分高频配置块。">
        <Accordion type="single" collapsible className="w-full rounded-lg border px-4">
          <AccordionItem value="billing">
            <AccordionTrigger>账单与订阅</AccordionTrigger>
            <AccordionContent className="space-y-3">
              <p className="text-sm text-muted-foreground">当前套餐为 Pro，包含 10,000 次调用额度。</p>
              <div className="flex gap-2">
                <Button size="sm">升级套餐</Button>
                <Button size="sm" variant="outline">查看账单</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="security">
            <AccordionTrigger>安全与访问</AccordionTrigger>
            <AccordionContent className="space-y-2 text-sm text-muted-foreground">
              <p>已开启双重验证、登录通知和设备审计。</p>
              <Badge variant="secondary">最后登录 2 分钟前</Badge>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoCard>
    </>
  )
}

function AIChatDialogDemo() {
  return (
    <>
      <DemoCard title="组件能力概览" description="独立页面保留组件本体，首页只做轻量入口。">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ['消息流', '支持 user / assistant 消息分栏和时间戳。'],
            ['输入区', '支持自动高度、回车发送和输入锁定。'],
            ['会话管理', '内置清空会话和模拟打字态。'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border p-4">
              <p className="font-medium">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="完整对话预览" description="直接使用真实的 `AIChatDialog` 组件。">
        <AIChatDialog className="h-[640px] min-h-0 max-h-none" />
      </DemoCard>

      <DemoCard title="嵌入场景" description="与业务卡片组合时，通常搭配状态与快捷操作区。">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-xl border p-4">
            <p className="font-medium">建议接入方式</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>1. 作为单独页面或全屏面板使用，保留足够消息高度。</li>
              <li>2. 若嵌入 Dashboard，只保留入口和摘要，不在首页塞完整聊天窗。</li>
              <li>3. 需要接真实接口时，把 mock 响应替换为业务层发送逻辑。</li>
            </ul>
          </div>
          <div className="space-y-3 rounded-xl border p-4">
            <div className="flex items-center gap-2">
              <Bot className="size-4 text-primary" />
              <span className="font-medium">当前状态</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>在线服务: 正常</p>
              <p>消息缓存: 已开启</p>
              <p>对话上下文: 8 条</p>
            </div>
            <Button className="w-full">创建新会话</Button>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function AlertDialogDemo() {
  return (
    <>
      <DemoCard title="危险操作确认" description="删除资源前阻断式二次确认。">
        <div className="flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">删除项目</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确认删除项目？</AlertDialogTitle>
                <AlertDialogDescription>
                  此操作不可撤销，项目和历史记录会被永久移除。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-white">确认删除</AlertDialogAction>
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
                  当前表单有未提交修改，离开后将无法恢复。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>继续编辑</AlertDialogCancel>
                <AlertDialogAction>放弃更改</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </DemoCard>

      <DemoCard title="权限升级申请" description="不仅用于删除，也适用于高风险授权流程。">
        <div className="rounded-lg border p-5">
          <div className="space-y-1">
            <p className="font-medium">生产环境访问权限</p>
            <p className="text-sm text-muted-foreground">该权限允许查看实时日志和环境变量。</p>
          </div>
          <div className="mt-4 flex gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>提交申请</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>提交生产访问申请？</AlertDialogTitle>
                  <AlertDialogDescription>
                    提交后会通知管理员审批，并记录本次申请原因。
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>取消</AlertDialogCancel>
                  <AlertDialogAction>确认提交</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button variant="outline">查看审批流</Button>
          </div>
        </div>
      </DemoCard>

      <DemoCard title="操作前上下文" description="确认框本身要简短，关键上下文放在触发区更清晰。">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ['对象', '生产数据库'],
            ['操作者', 'yuqiyu@example.com'],
            ['影响范围', '3 个服务实例'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="mt-1 font-medium">{value}</p>
            </div>
          ))}
        </div>
      </DemoCard>
    </>
  )
}

function AlertDemo() {
  return (
    <>
      <DemoCard title="状态变体" description="基础、错误、成功和提醒四类常见提示。">
        <div className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>同步完成</AlertTitle>
            <AlertDescription>全部 24 个组件页面已更新到最新版本。</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>发布失败</AlertTitle>
            <AlertDescription>构建过程被 TypeScript 配置问题中断。</AlertDescription>
          </Alert>
          <Alert className="border-green-500 text-green-600 [&>svg]:text-green-600">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>权限已开通</AlertTitle>
            <AlertDescription className="text-green-600">新成员已加入项目并获得只读权限。</AlertDescription>
          </Alert>
          <Alert className="border-amber-500 text-amber-700 [&>svg]:text-amber-600">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>发布窗口即将关闭</AlertTitle>
            <AlertDescription className="text-amber-700">请在 10 分钟内完成最后一次确认。</AlertDescription>
          </Alert>
        </div>
      </DemoCard>

      <DemoCard title="信息密度变化" description="从简洁提示到带补充内容的组合提示。">
        <div className="space-y-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>CLI 已连接</AlertTitle>
            <AlertDescription>终端会话保持活动状态。</AlertDescription>
          </Alert>
          <Alert>
            <Bell className="h-4 w-4" />
            <AlertTitle>待办摘要</AlertTitle>
            <AlertDescription>
              <ul className="space-y-1">
                <li>1. 检查路由注册表。</li>
                <li>2. 验证侧栏排序。</li>
                <li>3. 执行本地 smoke test。</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </DemoCard>

      <DemoCard title="嵌入页面块" description="Alert 也适合放在卡片头部提示一次性上下文。">
        <div className="rounded-xl border p-4">
          <Alert className="mb-4">
            <Info className="h-4 w-4" />
            <AlertTitle>全局 Toaster 已挂载</AlertTitle>
            <AlertDescription>Sonner 页面可直接调用 `toast()`，不需要重复挂载容器。</AlertDescription>
          </Alert>
          <p className="text-sm text-muted-foreground">
            这类提示适合放在迁移说明、功能开关说明和只读状态提示里。
          </p>
        </div>
      </DemoCard>
    </>
  )
}

function AspectRatioDemo() {
  return (
    <>
      <DemoCard title="常见比例" description="16:9、4:3 和 1:1 的媒体容器示例。">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['16:9 视频', 16 / 9, 'bg-blue-500/10'],
            ['4:3 照片', 4 / 3, 'bg-emerald-500/10'],
            ['1:1 封面', 1, 'bg-amber-500/10'],
          ].map(([label, ratio, cls]) => (
            <div key={label as string}>
              <p className="mb-2 text-sm font-medium">{label}</p>
              <AspectRatio ratio={ratio as number} className={`flex items-center justify-center rounded-lg border ${cls as string}`}>
                <span className="text-sm text-muted-foreground">{label}</span>
              </AspectRatio>
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="内容密度" description="比例容器内可以放图文封面和预览卡片。">
        <div className="grid gap-4 md:grid-cols-2">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl border">
            <div className="flex h-full flex-col justify-end bg-gradient-to-br from-primary/20 via-background to-primary/5 p-6">
              <Badge variant="secondary" className="mb-3 w-fit">Feature Preview</Badge>
              <p className="text-xl font-semibold">Navigation Menu 深入演示</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">把复杂站点导航拆成清晰的栏目入口与内容面板。</p>
            </div>
          </AspectRatio>
          <AspectRatio ratio={1} className="overflow-hidden rounded-xl border">
            <div className="flex h-full flex-col justify-between bg-muted p-5">
              <div className="flex items-center justify-between">
                <Badge>Insight</Badge>
                <Sparkles className="size-4 text-primary" />
              </div>
              <p className="text-lg font-semibold">保持封面统一比例，列表排版更稳定。</p>
            </div>
          </AspectRatio>
        </div>
      </DemoCard>

      <DemoCard title="业务场景" description="仪表盘中混排图片、图表和摘要时保持版式稳定。">
        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <AspectRatio ratio={21 / 9} className="rounded-xl border bg-muted/50" />
          <div className="space-y-3 rounded-xl border p-4">
            <p className="font-medium">适用场景</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1. 文章封面与视频缩略图。</li>
              <li>2. 商品卡片和项目截图。</li>
              <li>3. 含图表预览的 dashboard 概览卡。</li>
            </ul>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function AvatarDemo() {
  return (
    <>
      <DemoCard title="图片与回退" description="头像图片不可用时自动回退到 initials。">
        <div className="flex flex-wrap items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>UI</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarFallback className="bg-primary text-primary-foreground">Re</AvatarFallback>
          </Avatar>
        </div>
      </DemoCard>

      <DemoCard title="尺寸与状态" description="在列表和详情里经常要和状态标识一起使用。">
        <div className="flex flex-wrap gap-6">
          {[
            ['size-8', 'XS', '在线'],
            ['size-10', 'MD', '忙碌'],
            ['size-14', 'LG', '离线'],
          ].map(([size, initials, status]) => (
            <div key={size as string} className="flex flex-col items-center gap-2">
              <div className="relative">
                <Avatar className={size as string}>
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-background bg-green-500" />
              </div>
              <span className="text-xs text-muted-foreground">{status}</span>
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="团队列表" description="Avatar 经常作为 Table、Card 和 Comment 的子元素。">
        <div className="space-y-3">
          {teamMembers.map((member) => (
            <div key={member.email} className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <Badge variant={member.role === '管理员' ? 'default' : 'secondary'}>{member.role}</Badge>
            </div>
          ))}
        </div>
      </DemoCard>
    </>
  )
}

function BadgeDemo() {
  return (
    <>
      <DemoCard title="变体" description="基础变体适合做语义和风格区分。">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </DemoCard>

      <DemoCard title="状态标签" description="用自定义颜色表达任务和流程状态。">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-blue-500">进行中</Badge>
          <Badge className="bg-green-500">已完成</Badge>
          <Badge className="bg-yellow-500 text-yellow-950">待审核</Badge>
          <Badge className="bg-red-500">已拒绝</Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-500">实验中</Badge>
        </div>
      </DemoCard>

      <DemoCard title="组合展示" description="Badge 常与卡片、表格和列表元信息一起出现。">
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">组件演示页拆分</p>
              <p className="text-sm text-muted-foreground">按 ui 文件名生成独立路由和独立页面。</p>
            </div>
            <div className="flex gap-2">
              <Badge>High Priority</Badge>
              <Badge variant="secondary">Frontend</Badge>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind', 'Vite', 'shadcn/ui'].map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function BreadcrumbDemo() {
  return (
    <>
      <DemoCard title="基础路径" description="最常见的两到三层层级路径。">
        <div className="space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">首页</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">组件</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">设置</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/settings/team">团队管理</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>权限审批</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </DemoCard>

      <DemoCard title="长路径" description="长层级时，最后一项保留当前位置，其余项保持可点击。">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Workspace</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/workspace/design-system">Design System</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/workspace/design-system/pages">Pages</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Component Registry</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DemoCard>

      <DemoCard title="与页面操作组合" description="Breadcrumb 上方定位，下方承载页面操作和摘要。">
        <div className="space-y-3 rounded-lg border p-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Projects</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/projects/base-web-framework">Base Web Framework</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Navigation Refactor</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-medium">组件路由重构</p>
              <p className="text-sm text-muted-foreground">统一使用 registry 作为路由和导航单一事实来源。</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm">查看 PR</Button>
              <Button size="sm" variant="outline">复制链接</Button>
            </div>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function ButtonDemo() {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <DemoCard title="变体" description="Button 的 6 种基础视觉风格。">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </DemoCard>

      <DemoCard title="尺寸与图标" description="按钮大小和图标组合方式。">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Settings className="size-4" />
          </Button>
          <Button variant="outline">
            <Mail className="size-4" />
            发送邮件
          </Button>
        </div>
      </DemoCard>

      <DemoCard title="状态" description="加载中、禁用和业务动作是最常见的按钮状态。">
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
          <Button
            disabled={loading}
            onClick={() => {
              setLoading(true)
              window.setTimeout(() => setLoading(false), 1200)
            }}
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                提交中...
              </>
            ) : (
              '提交'
            )}
          </Button>
          <Button variant="secondary">
            <ShoppingCart className="size-4" />
            加入购物车
          </Button>
        </div>
      </DemoCard>
    </>
  )
}

function CalendarDemo() {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date())
  const [rangeDate, setRangeDate] = useState<{ from: Date | undefined; to?: Date }>({ from: undefined })

  return (
    <>
      <DemoCard title="单日期选择" description="最基础的单日选择场景。">
        <Calendar mode="single" selected={singleDate} onSelect={setSingleDate} className="rounded-md border" />
      </DemoCard>

      <DemoCard title="范围选择" description="适合预订、报表和统计时间段。">
        <Calendar
          mode="range"
          selected={rangeDate}
          onSelect={(value) => setRangeDate({ from: value?.from, to: value?.to })}
          className="rounded-md border"
        />
      </DemoCard>

      <DemoCard title="禁用日期" description="例如禁用周末或不允许预约的日期。">
        <Calendar
          mode="single"
          selected={singleDate}
          onSelect={setSingleDate}
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
          className="rounded-md border"
        />
      </DemoCard>

      <DemoCard title="与摘要联动" description="选择结果通常会同步到右侧摘要或表单。">
        <div className="grid gap-4 lg:grid-cols-[auto_1fr]">
          <Calendar mode="single" selected={singleDate} onSelect={setSingleDate} className="rounded-md border" />
          <div className="rounded-lg border p-4">
            <p className="font-medium">当前选择</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {singleDate ? singleDate.toLocaleDateString('zh-CN') : '尚未选择日期'}
            </p>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function CardDemo() {
  return (
    <>
      <DemoCard title="资料卡片" description="Card 的头部、描述和内容组合是最常见结构。">
        <Card className="py-0">
          <CardHeader>
            <CardTitle>产品设计系统</CardTitle>
            <CardDescription>统一管理组件、页面和交互规范。</CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge>Active</Badge>
              <span>最近更新于 2 小时前</span>
            </div>
          </CardContent>
        </Card>
      </DemoCard>

      <DemoCard title="指标卡片" description="Card 常用于展示 dashboard 概览指标。">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['组件页', '48', '一组件一路由'],
            ['侧栏项', '50', '含 Dashboard 和 Charts'],
            ['共享注册表', '1', '路由与导航统一'],
          ].map(([title, value, hint]) => (
            <Card key={title}>
              <CardHeader className="pb-2">
                <CardDescription>{title}</CardDescription>
                <CardTitle className="text-3xl">{value}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{hint}</CardContent>
            </Card>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="操作卡片" description="卡片也适合承载正文和底部操作。">
        <Card className="py-0">
          <CardHeader>
            <CardTitle>发布版本</CardTitle>
            <CardDescription>确认本次改动通过 smoke test 后再执行发布。</CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="flex flex-wrap gap-2">
              <Button>开始发布</Button>
              <Button variant="outline">查看变更</Button>
              <Button variant="ghost">取消</Button>
            </div>
          </CardContent>
        </Card>
      </DemoCard>
    </>
  )
}

function CarouselDemo() {
  return (
    <>
      <DemoCard title="基础轮播" description="单卡片轮播，带前后翻页按钮。">
        <Carousel className="mx-auto w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DemoCard>

      <DemoCard title="多卡片展示" description="适合商品、模板和文章摘要列表。">
        <Carousel className="mx-auto w-full max-w-xl" opts={{ align: 'start' }}>
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex aspect-square items-center justify-center rounded-lg border bg-primary/5 p-6">
                  <span className="text-xl font-semibold">卡片 {index + 1}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DemoCard>

      <DemoCard title="内容预览" description="轮播项内部可以承载更复杂的业务内容。">
        <Carousel className="mx-auto w-full max-w-sm">
          <CarouselContent>
            {['组件目录', '表单设计', '图表概览', '移动端抽屉'].map((label) => (
              <CarouselItem key={label}>
                <div className="flex aspect-video flex-col justify-between rounded-lg border p-6">
                  <Badge variant="secondary" className="w-fit">{label}</Badge>
                  <p className="text-lg font-semibold">{label}</p>
                  <p className="text-sm text-muted-foreground">适合做专题导航和产品导览。</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DemoCard>
    </>
  )
}

function CheckboxDemo() {
  return (
    <>
      <DemoCard title="基础用法" description="协议勾选和基础启用项。">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">我已阅读并同意服务条款</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="updates" defaultChecked />
            <Label htmlFor="updates">接收产品更新通知</Label>
          </div>
        </div>
      </DemoCard>

      <DemoCard title="多选列表" description="通知偏好和过滤条件最适合复选框。">
        <div className="space-y-3">
          {['邮件通知', '短信通知', '推送通知', '日报摘要'].map((item, index) => (
            <div key={item} className="flex items-center gap-2 rounded-lg border p-3">
              <Checkbox id={item} defaultChecked={index === 0} />
              <Label htmlFor={item}>{item}</Label>
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="设置组合" description="和说明文字、状态标签一起使用时更接近真实界面。">
        <div className="space-y-3">
          <div className="flex items-start justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">启用审计日志</p>
              <p className="text-sm text-muted-foreground">记录角色权限、发布操作和 API key 变更。</p>
            </div>
            <Checkbox id="audit" defaultChecked />
          </div>
          <div className="flex items-start justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">匿名使用统计</p>
              <p className="text-sm text-muted-foreground">帮助团队了解组件页的常用访问路径。</p>
            </div>
            <Checkbox id="usage" />
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function CollapsibleDemo() {
  const [open, setOpen] = useState(true)

  return (
    <>
      <DemoCard title="基础折叠" description="用一个按钮控制内容显隐。">
        <Collapsible open={open} onOpenChange={setOpen} className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">页面拆分计划</p>
              <p className="text-sm text-muted-foreground">点击展开查看核心验收项。</p>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm">
                {open ? '收起' : '展开'}
                <ChevronDown className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="rounded-lg border p-4 text-sm text-muted-foreground">
            删除旧分组路由，新增基于 `src/components/ui` 文件名的独立组件页面。
          </CollapsibleContent>
        </Collapsible>
      </DemoCard>

      <DemoCard title="代码片段折叠" description="适合隐藏次要说明和调试信息。">
        <Collapsible className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="font-medium">查看 API 示例</p>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">切换</Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-4 rounded-md bg-muted p-4 text-sm">
            <code>toast.success('Saved', {`{ action: { label: 'Undo', onClick: fn } }`})</code>
          </CollapsibleContent>
        </Collapsible>
      </DemoCard>

      <DemoCard title="业务列表" description="每个项目卡片可单独折叠详细信息。">
        <div className="space-y-3">
          {['组件注册表', '侧栏重构', 'Tree 示例同步'].map((item) => (
            <Collapsible key={item} className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">{item}</p>
                <CollapsibleTrigger asChild>
                  <Button size="sm" variant="outline">详情</Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
                该项需要同时验证路由、导航和页面内容是否与注册表保持一致。
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </DemoCard>
    </>
  )
}

function CommandDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <DemoCard title="基础命令列表" description="直接使用真实的 `Command` 组件组合。">
        <div className="rounded-lg border">
          <Command>
            <CommandInput placeholder="搜索组件或操作..." />
            <CommandList>
              <CommandEmpty>未找到匹配结果。</CommandEmpty>
              <CommandGroup heading="页面">
                <CommandItem>Dashboard</CommandItem>
                <CommandItem>Accordion</CommandItem>
                <CommandItem>Navigation Menu</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="操作">
                <CommandItem>
                  <Plus className="size-4" />
                  新建组件页
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Search className="size-4" />
                  全局搜索
                  <CommandShortcut>⌘K</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </DemoCard>

      <DemoCard title="带图标和分组" description="适合作为应用级命令面板。">
        <div className="rounded-lg border">
          <Command>
            <CommandInput placeholder="搜索设置、页面或快捷命令..." />
            <CommandList>
              <CommandGroup heading="设置">
                <CommandItem><Settings className="size-4" /> 通用设置</CommandItem>
                <CommandItem><User className="size-4" /> 账户管理</CommandItem>
                <CommandItem><CreditCard className="size-4" /> 账单与订阅</CommandItem>
                <CommandItem><Mail className="size-4" /> 通知设置</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="工具">
                <CommandItem><LayoutGrid className="size-4" /> 页面总览</CommandItem>
                <CommandItem><HelpCircle className="size-4" /> 帮助中心</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </DemoCard>

      <DemoCard title="弹窗模式" description="使用真实的 `CommandDialog` 作为全局入口。">
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div>
            <p className="font-medium">全局快捷面板</p>
            <p className="text-sm text-muted-foreground">常见做法是由 `⌘K` 或顶部搜索按钮唤起。</p>
          </div>
          <Button onClick={() => setOpen(true)}>打开 Command Dialog</Button>
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="跳转到组件页..." />
          <CommandList>
            <CommandEmpty>没有匹配的组件。</CommandEmpty>
            <CommandGroup heading="组件路由">
              {componentPageEntries.slice(0, 8).map((entry) => (
                <CommandItem key={entry.slug} onSelect={() => setOpen(false)}>
                  <Link to={getComponentPagePath(entry.slug)} className="flex w-full items-center justify-between">
                    <span>{entry.title}</span>
                    <CommandShortcut>{entry.slug}</CommandShortcut>
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </DemoCard>
    </>
  )
}

function ContextMenuDemo() {
  const [density, setDensity] = useState('comfortable')

  return (
    <>
      <DemoCard title="基础右键菜单" description="在区域内右键触发常见文件操作。">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-40 items-center justify-center rounded-lg border border-dashed">
            <p className="text-sm text-muted-foreground">在此区域右键点击</p>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem inset>
              <PlusCircle className="size-4" />
              新建文件
            </ContextMenuItem>
            <ContextMenuItem inset>
              粘贴
              <ContextMenuShortcut>⌘V</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem inset>重命名</ContextMenuItem>
            <ContextMenuItem inset variant="destructive">删除</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </DemoCard>

      <DemoCard title="嵌套菜单" description="子菜单适合承载扩展导出和更多操作。">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-40 items-center justify-center rounded-lg border border-dashed">
            <p className="text-sm text-muted-foreground">右键打开导出菜单</p>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuItem>复制链接</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>导出为...</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>PNG</ContextMenuItem>
                <ContextMenuItem>PDF</ContextMenuItem>
                <ContextMenuItem>CSV</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>查看历史记录</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </DemoCard>

      <DemoCard title="状态项" description="Checkbox 和 Radio 项适合做本地偏好设置。">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-40 items-center justify-center rounded-lg border border-dashed">
            <p className="text-sm text-muted-foreground">右键切换视图密度</p>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuCheckboxItem checked>显示侧边栏</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked={false}>显示统计卡片</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value={density} onValueChange={setDensity}>
              <ContextMenuRadioItem value="compact">紧凑</ContextMenuRadioItem>
              <ContextMenuRadioItem value="comfortable">舒适</ContextMenuRadioItem>
              <ContextMenuRadioItem value="spacious">宽松</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      </DemoCard>
    </>
  )
}

function DialogDemo() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <DemoCard title="表单对话框" description="最常见的弹窗表单场景。">
        <Dialog>
          <DialogTrigger asChild>
            <Button>打开表单对话框</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>创建项目</DialogTitle>
              <DialogDescription>填写名称和描述后即可创建新项目。</DialogDescription>
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
              <Button variant="outline">取消</Button>
              <Button>保存</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoCard>

      <DemoCard title="受控模式" description="通过 `open` 和 `onOpenChange` 管理对话框状态。">
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => setDialogOpen(true)}>打开受控对话框</Button>
          <Badge variant="secondary">{dialogOpen ? 'Open' : 'Closed'}</Badge>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>受控对话框</DialogTitle>
              <DialogDescription>适合和路由状态、表单状态或外部流程联动。</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setDialogOpen(false)}>关闭</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoCard>

      <DemoCard title="大内容弹窗" description="长内容适合配合 `ScrollArea` 或 max width 使用。">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">打开详细内容</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>组件拆分验收清单</DialogTitle>
              <DialogDescription>集中查看本次改动需要完成的检查项。</DialogDescription>
            </DialogHeader>
            <div className="max-h-[60vh] space-y-3 overflow-y-auto py-4 pr-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <p className="font-medium">检查项 {index + 1}</p>
                  <p className="mt-1 text-sm text-muted-foreground">验证对应菜单、路由和页面内容是否一致。</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </DemoCard>
    </>
  )
}

function DrawerDemo() {
  return (
    <>
      <DemoCard title="基础抽屉" description="从底部滑出的移动端风格面板。">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">打开抽屉</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>抽屉标题</DrawerTitle>
              <DrawerDescription>这里可以放置简短说明和后续操作。</DrawerDescription>
            </DrawerHeader>
            <div className="space-y-4 p-4">
              <p className="text-sm text-muted-foreground">适合在移动端展示二级表单、列表筛选和补充信息。</p>
              <Button className="w-full">确认</Button>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">关闭</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DemoCard>

      <DemoCard title="表单抽屉" description="在抽屉里承载输入和反馈动作。">
        <Drawer>
          <DrawerTrigger asChild>
            <Button>提交反馈</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>用户反馈</DrawerTitle>
              <DrawerDescription>请填写你的使用体验和建议。</DrawerDescription>
            </DrawerHeader>
            <form className="space-y-4 p-4">
              <div className="grid gap-2">
                <Label htmlFor="drawer-name">姓名</Label>
                <Input id="drawer-name" placeholder="请输入你的姓名" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="drawer-feedback">反馈内容</Label>
                <Textarea id="drawer-feedback" placeholder="描述你的想法..." rows={3} />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">提交</Button>
                <DrawerClose asChild>
                  <Button className="flex-1" variant="outline">取消</Button>
                </DrawerClose>
              </div>
            </form>
          </DrawerContent>
        </Drawer>
      </DemoCard>

      <DemoCard title="内容详情" description="抽屉也适合做 changelog 或详情补充。">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">查看更新日志</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>v2.1.0 更新日志</DrawerTitle>
              <DrawerDescription>2026-06-13 发布</DrawerDescription>
            </DrawerHeader>
            <div className="space-y-4 p-4 text-sm">
              <div>
                <p className="font-medium">新增</p>
                <ul className="mt-2 list-inside list-disc text-muted-foreground">
                  <li>组件页扁平导航</li>
                  <li>Navigation Menu 独立演示</li>
                  <li>Command 真实组件示例</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">修复</p>
                <ul className="mt-2 list-inside list-disc text-muted-foreground">
                  <li>旧分组页残留路由</li>
                  <li>Tree 示例目录与现状不一致</li>
                </ul>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </DemoCard>
    </>
  )
}

function DropdownMenuDemo() {
  const [position, setPosition] = useState('bottom')
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivityBar, setShowActivityBar] = useState(false)

  return (
    <>
      <DemoCard title="账户菜单" description="基础 dropdown menu 适合用户和工具入口。">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">打开菜单</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>我的账户</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem><User className="size-4" /> 个人资料 <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut></DropdownMenuItem>
              <DropdownMenuItem><CreditCard className="size-4" /> 账单 <DropdownMenuShortcut>⌘B</DropdownMenuShortcut></DropdownMenuItem>
              <DropdownMenuItem><Settings className="size-4" /> 设置 <DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem>
              <DropdownMenuItem><Keyboard className="size-4" /> 快捷键 <DropdownMenuShortcut>⌘K</DropdownMenuShortcut></DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoCard>

      <DemoCard title="状态项" description="Checkbox 和 Radio 菜单项适合视图偏好设置。">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">视图设置</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>显示面板</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
              状态栏
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
              活动栏
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>面板位置</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="top">顶部</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">底部</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="left">左侧</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">右侧</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoCard>

      <DemoCard title="嵌套操作" description="子菜单适合邀请、导出和多层工具操作。">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>团队操作</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem><Users className="size-4" /> 团队成员</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger><UserPlus className="size-4" /> 邀请用户</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem><Mail className="size-4" /> 邮件</DropdownMenuItem>
                <DropdownMenuItem><MessageSquare className="size-4" /> 消息</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem><GitBranch className="size-4" /> GitHub</DropdownMenuItem>
            <DropdownMenuItem><LifeBuoy className="size-4" /> 帮助</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoCard>
    </>
  )
}

function HoverCardDemo() {
  return (
    <>
      <DemoCard title="成员预览" description="悬停在用户名上展示更多档案信息。">
        <div className="flex flex-wrap gap-6">
          {teamMembers.slice(0, 2).map((member) => (
            <HoverCard key={member.email}>
              <HoverCardTrigger asChild>
                <Button variant="link" className="px-0">@{member.name}</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}，负责组件设计与页面演示。</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarIcon className="size-3" />
                      <span>加入于 2024 年</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="术语说明" description="Hover Card 适合文档页里的次级说明信息。">
        <p className="text-sm text-muted-foreground">
          当前页面的路由和导航都由
          <HoverCard>
            <HoverCardTrigger asChild>
              <button type="button" className="mx-1 underline decoration-dotted">component registry</button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <p className="font-medium">component registry</p>
              <p className="mt-2 text-sm text-muted-foreground">统一保存 slug、标题、描述与顺序，作为路由和侧栏的单一事实来源。</p>
            </HoverCardContent>
          </HoverCard>
          驱动。
        </p>
      </DemoCard>

      <DemoCard title="配合列表使用" description="在列表里悬停查看成员状态而不打断主流程。">
        <div className="space-y-3">
          {teamMembers.map((member) => (
            <div key={member.email} className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.email}</p>
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">查看状态</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <p className="font-medium">{member.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">当前状态: {member.status}，角色: {member.role}</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>
      </DemoCard>
    </>
  )
}

function InputDemo() {
  return (
    <>
      <DemoCard title="基础输入" description="邮箱、密码和禁用态。">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email-input">邮箱</Label>
            <Input id="email-input" type="email" placeholder="name@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password-input">密码</Label>
            <Input id="password-input" type="password" defaultValue="password123" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="disabled-input">禁用状态</Label>
            <Input id="disabled-input" placeholder="Disabled input" disabled />
          </div>
        </div>
      </DemoCard>

      <DemoCard title="状态反馈" description="错误态和搜索态是高频组合。">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="error-input">错误状态</Label>
            <Input id="error-input" className="border-destructive" defaultValue="invalid@email" />
            <p className="text-sm text-destructive">请输入有效的邮箱地址</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="search-input">搜索</Label>
            <div className="relative">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="search-input" className="pl-9" placeholder="搜索组件名称..." />
            </div>
          </div>
        </div>
      </DemoCard>

      <DemoCard title="表单组合" description="Input 往往和 Label、Button 一起出现。">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="first-name">姓</Label>
            <Input id="first-name" placeholder="张" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">名</Label>
            <Input id="last-name" placeholder="三" />
          </div>
          <div className="md:col-span-2 flex gap-2">
            <Button>保存</Button>
            <Button variant="outline">取消</Button>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function InputOtpDemo() {
  const [otpValue, setOtpValue] = useState('')
  const [mixedValue, setMixedValue] = useState('')

  return (
    <>
      <DemoCard title="6 位数字验证码" description="最常见的手机或邮箱验证码输入。">
        <div className="space-y-4">
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} value={otpValue} onChange={setOtpValue}>
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
          {otpValue.length === 6 && <Badge>已输入: {otpValue}</Badge>}
        </div>
      </DemoCard>

      <DemoCard title="短验证码" description="4 位短信验证码的紧凑布局。">
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </DemoCard>

      <DemoCard title="字母数字混合" description="支持更灵活的邀请码和恢复码。">
        <div className="space-y-4">
          <InputOTP maxLength={6} value={mixedValue} onChange={setMixedValue}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          {mixedValue.length === 6 && <Badge variant="secondary">已输入: {mixedValue}</Badge>}
        </div>
      </DemoCard>

      <DemoCard title="业务动作" description="OTP 往往和验证按钮或倒计时一起使用。">
        <div className="space-y-4">
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
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
          <div className="flex gap-2">
            <Button className="flex-1">验证</Button>
            <Button variant="outline">重新发送</Button>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function LabelDemo() {
  return (
    <>
      <DemoCard title="表单字段" description="Label 的最基础搭配方式。">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="label-email">邮箱</Label>
            <Input id="label-email" placeholder="team@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="label-name">项目名称</Label>
            <Input id="label-name" placeholder="Base Web Framework" />
          </div>
        </div>
      </DemoCard>

      <DemoCard title="必填和说明" description="Label 常与说明文案、必填标识一起使用。">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="api-key">
              API Key <span className="text-destructive">*</span>
            </Label>
            <Input id="api-key" placeholder="sk-..." />
            <p className="text-sm text-muted-foreground">请确保只在服务端环境中存储此密钥。</p>
          </div>
        </div>
      </DemoCard>

      <DemoCard title="设置项布局" description="用于开关、复选框等非文本输入也很常见。">
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <Label htmlFor="compact-mode">紧凑模式</Label>
              <p className="text-sm text-muted-foreground">减少页面留白，展示更多组件入口。</p>
            </div>
            <Switch id="compact-mode" />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <Label htmlFor="notify-release">版本通知</Label>
              <p className="text-sm text-muted-foreground">有新组件或 breaking change 时提醒我。</p>
            </div>
            <Checkbox id="notify-release" defaultChecked />
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function MenubarDemo() {
  return (
    <>
      <DemoCard title="桌面菜单栏" description="适合编辑器、管理台和桌面类应用。">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>文件</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>新建窗口 <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
              <MenubarItem>打开文件...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>保存</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>编辑</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>撤销 <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
              <MenubarItem>重做 <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>帮助</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>文档中心</MenubarItem>
              <MenubarItem>快捷键说明</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </DemoCard>

      <DemoCard title="产品操作" description="Menubar 可以承载项目级操作和视图入口。">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>项目</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>组件目录</MenubarItem>
              <MenubarItem>图表页</MenubarItem>
              <MenubarItem>发布日志</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>视图</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>显示侧栏</MenubarItem>
              <MenubarItem>显示头部</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </DemoCard>

      <DemoCard title="与页面组合" description="常见做法是把 Menubar 放在内容区顶部。">
        <div className="rounded-xl border p-4">
          <Menubar className="mb-4">
            <MenubarMenu>
              <MenubarTrigger>发布</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>预览构建</MenubarItem>
                <MenubarItem>生成变更日志</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <p className="text-sm text-muted-foreground">下方区域继续展示当前页面正文，不会打断主布局结构。</p>
        </div>
      </DemoCard>
    </>
  )
}

function NavigationMenuDemo() {
  return (
    <>
      <DemoCard title="带视口的站点导航" description="直接使用真实的 `NavigationMenu` 组件。">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-3 md:w-[420px] md:grid-cols-2">
                  {componentPageEntries.slice(0, 6).map((entry) => (
                    <NavigationMenuLink key={entry.slug} className="rounded-md border p-3">
                      <span className="font-medium">{entry.title}</span>
                      <span className="text-muted-foreground">{entry.description}</span>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Patterns</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-3 md:w-[380px]">
                  {[
                    ['Dashboard', '首页只保留概览，不再承载所有详细 demo。'],
                    ['Flat Sidebar', '按 ui 文件名字母序平铺导航。'],
                    ['Registry', '路由、标题和路径由单一数据源驱动。'],
                  ].map(([title, description]) => (
                    <NavigationMenuLink key={title} className="rounded-md border p-3">
                      <span className="font-medium">{title}</span>
                      <span className="text-muted-foreground">{description}</span>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DemoCard>

      <DemoCard title="简洁栏位" description="也可以作为轻量一级导航使用。">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Dashboard</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Components</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Charts</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DemoCard>

      <DemoCard title="业务菜单内容" description="内容区可以承载图文、分组和快捷入口。">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-4 p-4 md:w-[520px] md:grid-cols-[1fr_1fr]">
                  <div className="rounded-lg border bg-muted/40 p-4">
                    <Badge variant="secondary">Recommended</Badge>
                    <p className="mt-3 font-medium">从 Dashboard 进入</p>
                    <p className="mt-2 text-sm text-muted-foreground">首页保留轻量预览和高频组件导航入口。</p>
                  </div>
                  <div className="space-y-3">
                    {componentPageEntries.slice(20, 24).map((entry) => (
                      <NavigationMenuLink key={entry.slug} className="rounded-md border p-3">
                        <span className="font-medium">{entry.title}</span>
                        <span className="text-muted-foreground">{entry.description}</span>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DemoCard>
    </>
  )
}

function PaginationDemo() {
  return (
    <>
      <DemoCard title="基础分页" description="页码和上一页/下一页按钮的基础布局。">
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious /></PaginationItem>
            <PaginationItem><PaginationLink>1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink isActive>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem><PaginationLink>10</PaginationLink></PaginationItem>
            <PaginationItem><PaginationNext /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </DemoCard>

      <DemoCard title="表格页脚" description="分页组件常作为表格或搜索结果的页脚。">
        <div className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>显示 21-30 / 128 条结果</span>
            <Badge variant="secondary">第 3 页</Badge>
          </div>
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem><PaginationPrevious /></PaginationItem>
              <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink isActive>3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink>4</PaginationLink></PaginationItem>
              <PaginationItem><PaginationNext /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </DemoCard>

      <DemoCard title="紧凑模式" description="移动端或窄容器中只保留关键信息。">
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious /></PaginationItem>
            <PaginationItem><PaginationLink isActive size="sm">8</PaginationLink></PaginationItem>
            <PaginationItem><PaginationNext /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </DemoCard>
    </>
  )
}

function PopoverDemo() {
  return (
    <>
      <DemoCard title="基础浮层" description="点击按钮展示补充设置。">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">打开 Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <h4 className="font-medium">布局设置</h4>
              <div className="grid gap-2">
                <Label htmlFor="width">宽度</Label>
                <Input id="width" defaultValue="100%" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="max-width">最大宽度</Label>
                <Input id="max-width" defaultValue="320px" />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </DemoCard>

      <DemoCard title="日期触发" description="Popover 常作为选择器的承载层。">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <CalendarIcon className="size-4" />
              选择日期
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-3">
            <Calendar mode="single" selected={new Date()} className="rounded-md border" />
          </PopoverContent>
        </Popover>
      </DemoCard>

      <DemoCard title="操作面板" description="适合承载轻量二级操作而不是完整表单。">
        <Popover>
          <PopoverTrigger asChild>
            <Button>更多操作</Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="ghost">复制链接</Button>
              <Button className="w-full justify-start" variant="ghost">移动到分组</Button>
              <Button className="w-full justify-start" variant="ghost">添加到收藏</Button>
            </div>
          </PopoverContent>
        </Popover>
      </DemoCard>
    </>
  )
}

function ProgressDemo() {
  return (
    <>
      <DemoCard title="单进度条" description="上传、下载和构建进度的基础展示。">
        <div className="space-y-5">
          {[
            ['上传进度', 75],
            ['存储空间', 45],
            ['回归测试', 92],
          ].map(([label, value]) => (
            <div key={label as string} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{label}</span>
                <span className="text-muted-foreground">{value}%</span>
              </div>
              <Progress value={value as number} />
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="阶段进度" description="多个进度条并列展示不同工作流阶段。">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['路由注册', 100],
            ['页面拆分', 86],
            ['本地验证', 60],
          ].map(([title, value]) => (
            <div key={title as string} className="rounded-lg border p-4">
              <p className="font-medium">{title}</p>
              <Progress value={value as number} className="mt-3" />
              <p className="mt-2 text-sm text-muted-foreground">{value}%</p>
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="摘要卡片" description="Progress 常和文案和状态标签同时出现。">
        <div className="rounded-xl border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">构建任务</p>
              <p className="text-sm text-muted-foreground">正在生成最新的演示站静态资源。</p>
            </div>
            <Badge variant="secondary">Running</Badge>
          </div>
          <Progress value={68} className="mt-4" />
        </div>
      </DemoCard>
    </>
  )
}

function RadioGroupDemo() {
  return (
    <>
      <DemoCard title="基础单选" description="适合互斥选项选择。">
        <div>
          <Label className="mb-3 block">部署环境</Label>
          <RadioGroup defaultValue="staging">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="local" id="local" />
              <Label htmlFor="local">本地环境</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="staging" id="staging" />
              <Label htmlFor="staging">预发环境</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="production" id="production" />
              <Label htmlFor="production">生产环境</Label>
            </div>
          </RadioGroup>
        </div>
      </DemoCard>

      <DemoCard title="卡片式单选" description="常见于套餐和计费方案选择。">
        <RadioGroup defaultValue="pro" className="space-y-3">
          {[
            { value: 'free', title: '免费版', description: '基础功能，100 次/月' },
            { value: 'pro', title: '专业版', description: '全部功能，10,000 次/月' },
            { value: 'enterprise', title: '企业版', description: '无限次数，专属支持' },
          ].map((plan) => (
            <div key={plan.value} className="flex items-start gap-3 rounded-lg border p-4">
              <RadioGroupItem value={plan.value} id={plan.value} className="mt-1" />
              <div>
                <Label htmlFor={plan.value} className="font-medium">{plan.title}</Label>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </DemoCard>

      <DemoCard title="发货方式" description="和说明文案、价格一起展示时更接近真实业务。">
        <RadioGroup defaultValue="express" className="space-y-3">
          {[
            ['standard', '标准配送', '2-4 天', '免费'],
            ['express', '加急配送', '次日达', '¥18'],
            ['pickup', '门店自提', '当天可取', '免费'],
          ].map(([value, title, desc, price]) => (
            <div key={value as string} className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <RadioGroupItem value={value as string} id={value as string} />
                <div>
                  <Label htmlFor={value as string}>{title}</Label>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
              <Badge variant="outline">{price}</Badge>
            </div>
          ))}
        </RadioGroup>
      </DemoCard>
    </>
  )
}

function ResizableDemo() {
  return (
    <>
      <DemoCard title="横向布局" description="左右两栏可拖拽调整宽度。">
        <ResizablePanelGroup orientation="horizontal" className="min-h-[220px] rounded-lg border">
          <ResizablePanel defaultSize={35} minSize={20}>
            <div className="flex h-full items-center justify-center bg-muted/40">左侧目录</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={65}>
            <div className="flex h-full items-center justify-center">右侧内容</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </DemoCard>

      <DemoCard title="嵌套面板" description="适合 IDE、管理台和编辑器工作区。">
        <ResizablePanelGroup orientation="horizontal" className="min-h-[260px] rounded-lg border">
          <ResizablePanel defaultSize={28}>
            <div className="flex h-full items-center justify-center bg-muted/40">侧栏</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={72}>
            <ResizablePanelGroup orientation="vertical">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center">预览区</div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center bg-muted/40">日志区</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </DemoCard>

      <DemoCard title="业务场景" description="组件页演示站也可以用它做多栏检视模式。">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border p-4">
            <p className="font-medium">适合内容</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>1. 文件树 + 预览区。</li>
              <li>2. 表单编辑 + 实时预览。</li>
              <li>3. 图表主视图 + 过滤面板。</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 text-sm text-muted-foreground">
            调整比例只改变布局容器，不需要手动维护宽度状态。
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function ScrollAreaDemo() {
  return (
    <>
      <DemoCard title="长列表" description="在固定高度容器中统一滚动体验。">
        <ScrollArea className="h-56 rounded-lg border p-4">
          <div className="space-y-3">
            {Array.from({ length: 18 }).map((_, index) => (
              <div key={index} className="rounded-md bg-muted p-3">
                <p className="text-sm font-medium">条目 {index + 1}</p>
                <p className="mt-1 text-xs text-muted-foreground">适合活动流、日志和通知列表。</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DemoCard>

      <DemoCard title="消息面板" description="ScrollArea 和聊天、评论、日志面板很搭。">
        <ScrollArea className="h-64 rounded-lg border p-4">
          <div className="space-y-4">
            {['路由已更新', '侧栏已重构', '旧页面已移除', '等待 smoke test'].map((item, index) => (
              <div key={item} className="flex gap-3">
                <Avatar>
                  <AvatarFallback>{index + 1}</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted px-3 py-2 text-sm">{item}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DemoCard>

      <DemoCard title="旁栏信息" description="固定高度内容卡里也可以局部滚动，避免页面无限变长。">
        <div className="grid gap-4 md:grid-cols-2">
          <ScrollArea className="h-48 rounded-lg border p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {componentPageEntries.slice(0, 16).map((entry) => (
                <li key={entry.slug}>{entry.title}</li>
              ))}
            </ul>
          </ScrollArea>
          <div className="rounded-lg border p-4">
            <p className="font-medium">使用建议</p>
            <p className="mt-2 text-sm text-muted-foreground">局部滚动适合高信息密度区域，不要把整个主内容都塞进滚动盒子。</p>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function SelectDemo() {
  return (
    <>
      <DemoCard title="基础选择器" description="最常见的框架、地区和状态选择。">
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
      </DemoCard>

      <DemoCard title="分组和分隔" description="适合较长选项列表。">
        <Select>
          <SelectTrigger className="w-full md:w-[320px]">
            <SelectValue placeholder="选择页面分组" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Overview</SelectLabel>
              <SelectItem value="dashboard">Dashboard</SelectItem>
              <SelectItem value="charts">Charts</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Components</SelectLabel>
              <SelectItem value="button">Button</SelectItem>
              <SelectItem value="dialog">Dialog</SelectItem>
              <SelectItem value="tree">Tree</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </DemoCard>

      <DemoCard title="表单组合" description="Select 很少单独存在，通常和 Label、Button 一起出现。">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="grid gap-2">
            <Label>默认首页入口</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择一个入口页" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dashboard">Dashboard</SelectItem>
                <SelectItem value="accordion">Accordion</SelectItem>
                <SelectItem value="charts">Charts</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="self-end">保存</Button>
        </div>
      </DemoCard>
    </>
  )
}

function SeparatorDemo() {
  return (
    <>
      <DemoCard title="横向与纵向" description="基础内容分隔方式。">
        <div className="space-y-6">
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
            </div>
          </div>
        </div>
      </DemoCard>

      <DemoCard title="列表分割" description="在卡片列表中让每一项边界更清楚。">
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={member.email}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
                <Badge variant="secondary">{member.role}</Badge>
              </div>
              {index < teamMembers.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="模块区块" description="在长页面里配合标题做视觉分段。">
        <div className="space-y-4 rounded-lg border p-4">
          <div>
            <p className="font-medium">路由设计</p>
            <p className="text-sm text-muted-foreground">统一使用文件名作为路径。</p>
          </div>
          <Separator />
          <div>
            <p className="font-medium">导航设计</p>
            <p className="text-sm text-muted-foreground">扁平侧栏，去掉旧分组结构。</p>
          </div>
          <Separator />
          <div>
            <p className="font-medium">验证方式</p>
            <p className="text-sm text-muted-foreground">优先逐路由 smoke test，再看 build 结果。</p>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function SheetDemo() {
  return (
    <>
      <DemoCard title="多方向打开" description="Sheet 支持四个方向滑出。">
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
                  <SheetTitle>{side} sheet</SheetTitle>
                  <SheetDescription>适合承载筛选、设置和详情面板。</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="筛选面板" description="电商和数据后台常把筛选条件放在 Sheet。">
        <Sheet>
          <SheetTrigger asChild>
            <Button>打开筛选面板</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>列表筛选</SheetTitle>
              <SheetDescription>调整状态、标签和排序规则。</SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <div className="grid gap-2">
                <Label>状态</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="选择状态" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">应用筛选</Button>
            </div>
          </SheetContent>
        </Sheet>
      </DemoCard>

      <DemoCard title="详情信息" description="右侧 sheet 很适合展示不需要整页跳转的详情。">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">查看详情</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Accordion 页面</SheetTitle>
              <SheetDescription>当前 demo 覆盖 FAQ、多开和业务配置三种场景。</SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>路径: `/accordion`</p>
              <p>来源: registry 驱动</p>
              <p>状态: 已上线</p>
            </div>
          </SheetContent>
        </Sheet>
      </DemoCard>
    </>
  )
}

function SkeletonDemo() {
  return (
    <>
      <DemoCard title="文章骨架屏" description="文字和标题的基础加载占位。">
        <div className="space-y-3">
          <Skeleton className="h-5 w-[250px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[85%]" />
          <Skeleton className="h-4 w-[70%]" />
        </div>
      </DemoCard>

      <DemoCard title="列表卡片" description="列表行或成员卡片在加载时的常见样式。">
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
              <Skeleton className="size-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-3 w-[150px]" />
              </div>
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="Dashboard 占位" description="在网格布局中保持整体结构稳定。">
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-28 w-full rounded-xl" />
          ))}
        </div>
      </DemoCard>
    </>
  )
}

function SliderDemo() {
  return (
    <>
      <DemoCard title="单值滑块" description="适合音量、透明度和缩放等级。">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>音量</Label>
            <span className="text-sm text-muted-foreground">75%</span>
          </div>
          <Slider defaultValue={[75]} max={100} step={1} />
        </div>
      </DemoCard>

      <DemoCard title="范围滑块" description="适合价格、日期和区间过滤。">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>价格范围</Label>
            <span className="text-sm text-muted-foreground">¥100 - ¥900</span>
          </div>
          <Slider defaultValue={[100, 900]} max={1000} step={10} />
        </div>
      </DemoCard>

      <DemoCard title="控制组" description="多个滑块并列构成混音台或图像调节器。">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['低频', 40],
            ['中频', 65],
            ['高频', 80],
          ].map(([label, value]) => (
            <div key={label as string} className="space-y-2 rounded-lg border p-4">
              <div className="flex justify-between text-sm">
                <span>{label}</span>
                <span className="text-muted-foreground">{value}%</span>
              </div>
              <Slider defaultValue={[value as number]} max={100} step={1} />
            </div>
          ))}
        </div>
      </DemoCard>
    </>
  )
}

function SonnerDemo() {
  return (
    <>
      <DemoCard title="基础通知" description="依赖 `App.tsx` 挂载的全局 `Toaster`。">
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => toast.success('操作成功！')}>成功</Button>
          <Button variant="destructive" onClick={() => toast.error('操作失败！')}>错误</Button>
          <Button variant="outline" onClick={() => toast.warning('请注意配置变更。')}>警告</Button>
          <Button variant="outline" onClick={() => toast.info('这是一个普通提示。')}>信息</Button>
        </div>
      </DemoCard>

      <DemoCard title="带描述与动作" description="适合保存、撤销和跳转类提示。">
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() =>
              toast('发布已创建', {
                description: 'v2.1.0 正在等待审批。',
                action: {
                  label: '查看',
                  onClick: () => toast.info('跳转到审批流'),
                },
              })
            }
          >
            打开带动作 Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast('草稿已保存', {
                description: '你可以继续编辑或稍后恢复。',
              })
            }
          >
            带描述
          </Button>
        </div>
      </DemoCard>

      <DemoCard title="业务提示建议" description="Toast 适合短反馈，不适合承载大量说明。">
        <div className="rounded-lg border p-4 text-sm text-muted-foreground">
          <ul className="space-y-2">
            <li>1. 成功、失败、撤销和后台状态变化最适合用 toast。</li>
            <li>2. 长解释和多字段确认更适合 Dialog、Alert 或页面内提示。</li>
            <li>3. `toast()` 只负责调用；容器由全局 `Toaster` 管理。</li>
          </ul>
        </div>
      </DemoCard>
    </>
  )
}

function SpinnerDemo() {
  return (
    <>
      <DemoCard title="尺寸" description="通过 `className` 控制 Spinner 尺寸。">
        <div className="flex items-center gap-6">
          {[
            ['Small', 'size-4'],
            ['Medium', 'size-6'],
            ['Large', 'size-8'],
            ['XLarge', 'size-10'],
          ].map(([label, size]) => (
            <div key={label as string} className="flex flex-col items-center gap-2">
              <Spinner className={size as string} />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="按钮状态" description="与 Button 组合是高频提交场景。">
        <div className="flex flex-wrap gap-3">
          <Button>
            <Spinner className="size-4" />
            保存中
          </Button>
          <Button variant="outline">
            <Spinner className="size-4 text-muted-foreground" />
            同步中
          </Button>
        </div>
      </DemoCard>

      <DemoCard title="空状态" description="不仅限于按钮，也可用于局部加载块。">
        <div className="flex min-h-40 flex-col items-center justify-center rounded-lg border border-dashed">
          <Spinner className="size-8 text-primary" />
          <p className="mt-4 text-sm text-muted-foreground">正在加载组件路由信息...</p>
        </div>
      </DemoCard>
    </>
  )
}

function StepperDemo() {
  const [activeStep, setActiveStep] = useState(2)
  const steps = [
    { title: '创建账户', description: '填写基本信息' },
    { title: '验证邮箱', description: '输入验证码' },
    { title: '完善资料', description: '上传头像和简介' },
    { title: '完成设置', description: '配置个人偏好' },
  ]

  return (
    <>
      <DemoCard title="基础步骤条" description="展示当前流程位置和已完成步骤。">
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
      </DemoCard>

      <DemoCard title="交互式流程" description="结合本地状态切换当前步骤。">
        <div className="space-y-4">
          <Stepper className="w-full">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-1 items-center gap-2">
                {index > 0 && <StepperSeparator />}
                <StepperItem step={index + 1} completed={index < activeStep} active={index === activeStep}>
                  <div>
                    <StepperTitle>{step.title}</StepperTitle>
                    <StepperDescription>{step.description}</StepperDescription>
                  </div>
                </StepperItem>
              </div>
            ))}
          </Stepper>
          <div className="flex items-center justify-between gap-2">
            <Button variant="outline" disabled={activeStep === 0} onClick={() => setActiveStep((value) => Math.max(0, value - 1))}>
              上一步
            </Button>
            <Badge variant="outline">步骤 {activeStep + 1} / {steps.length}</Badge>
            <Button disabled={activeStep === steps.length - 1} onClick={() => setActiveStep((value) => Math.min(steps.length - 1, value + 1))}>
              下一步
            </Button>
          </div>
        </div>
      </DemoCard>

      <DemoCard title="状态卡" description="配合图标展示流程状态。">
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-lg border p-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-green-500/20">
              <Check className="size-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-sm">已完成</p>
              <p className="text-xs text-muted-foreground">路由注册完成</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border p-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-blue-500/20">
              <Circle className="size-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-sm">进行中</p>
              <p className="text-xs text-muted-foreground">组件页面逐个拆分</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border p-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-amber-500/20">
              <CircleAlert className="size-4 text-amber-600" />
            </div>
            <div>
              <p className="font-medium text-sm">待验证</p>
              <p className="text-xs text-muted-foreground">执行逐路由 smoke test</p>
            </div>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function SwitchDemo() {
  return (
    <>
      <DemoCard title="基础开关" description="用于布尔型偏好设置。">
        <div className="space-y-4">
          {[
            ['邮件通知', '接收系统的重要通知', false],
            ['营销邮件', '接收产品更新和优惠信息', false],
            ['暗色模式', '使用深色主题减少眼睛疲劳', true],
          ].map(([label, description, checked]) => (
            <div key={label as string} className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <Label htmlFor={label as string}>{label}</Label>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <Switch id={label as string} defaultChecked={checked as boolean} />
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="紧凑布局" description="在工具栏或小面板里使用更紧凑。">
        <div className="flex flex-wrap gap-6 rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <Switch id="preview" defaultChecked />
            <Label htmlFor="preview">实时预览</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="auto-save" />
            <Label htmlFor="auto-save">自动保存</Label>
          </div>
        </div>
      </DemoCard>

      <DemoCard title="组合表单" description="通常会和说明、Badge 和更多设置一起出现。">
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Label htmlFor="audit-mode">审计模式</Label>
                <Badge variant="secondary">Recommended</Badge>
              </div>
              <p className="text-sm text-muted-foreground">记录演示站里的关键配置更改。</p>
            </div>
            <Switch id="audit-mode" defaultChecked />
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function TableDemo() {
  return (
    <>
      <DemoCard title="成员表格" description="基础结构化数据展示。">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>用户</TableHead>
              <TableHead>邮箱</TableHead>
              <TableHead>角色</TableHead>
              <TableHead>状态</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.email}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-7">
                      <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                    </Avatar>
                    {member.name}
                  </div>
                </TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell><Badge variant={member.role === '管理员' ? 'default' : 'secondary'}>{member.role}</Badge></TableCell>
                <TableCell>{member.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DemoCard>

      <DemoCard title="金额与指标" description="表格不只用于人员列表，也适合财务和报表。">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>项目</TableHead>
              <TableHead>本月</TableHead>
              <TableHead>环比</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ['付费用户', '2,350', '+12%'],
              ['演示访问', '18,203', '+28%'],
              ['图表页访问', '6,412', '-4%'],
            ].map(([title, value, diff]) => (
              <TableRow key={title}>
                <TableCell>{title}</TableCell>
                <TableCell>{value}</TableCell>
                <TableCell>{diff}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DemoCard>

      <DemoCard title="表格 + 操作" description="行内操作和状态标签是后台常见搭配。">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>页面</TableHead>
              <TableHead>路径</TableHead>
              <TableHead>状态</TableHead>
              <TableHead className="text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {componentPageEntries.slice(0, 4).map((entry) => (
              <TableRow key={entry.slug}>
                <TableCell>{entry.title}</TableCell>
                <TableCell>{getComponentPagePath(entry.slug)}</TableCell>
                <TableCell><Badge variant="secondary">Online</Badge></TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">查看</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DemoCard>

      <DemoCard title="表格 + 分页" description="完整后台列表通常会在表格下方组合结果摘要和 Pagination 页脚。">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>显示 1-5 / 24 条结果</span>
            <Badge variant="secondary">第 1 页</Badge>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>订单号</TableHead>
                <TableHead>客户</TableHead>
                <TableHead>金额</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>更新时间</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ['#SO-1024', '上海云启科技', '¥12,800', '已支付', '2 分钟前'],
                ['#SO-1025', '杭州西湖设计', '¥8,450', '处理中', '15 分钟前'],
                ['#SO-1026', '深圳光点互动', '¥21,300', '待审核', '35 分钟前'],
                ['#SO-1027', '北京深蓝网络', '¥6,980', '已发货', '1 小时前'],
                ['#SO-1028', '成都像素制造', '¥15,760', '已完成', '2 小时前'],
              ].map(([orderId, customer, amount, status, updatedAt]) => (
                <TableRow key={orderId}>
                  <TableCell className="font-medium">{orderId}</TableCell>
                  <TableCell>{customer}</TableCell>
                  <TableCell>{amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={status === '已支付' || status === '已完成' ? 'default' : 'secondary'}
                    >
                      {status}
                    </Badge>
                  </TableCell>
                  <TableCell>{updatedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </DemoCard>
    </>
  )
}

function TabsDemo() {
  return (
    <>
      <DemoCard title="基础 Tabs" description="切换相邻内容区域。">
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">账户</TabsTrigger>
            <TabsTrigger value="password">密码</TabsTrigger>
            <TabsTrigger value="notifications">通知</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4 rounded-lg border p-4 text-sm text-muted-foreground">
            管理昵称、邮箱和头像等个人信息。
          </TabsContent>
          <TabsContent value="password" className="mt-4 rounded-lg border p-4 text-sm text-muted-foreground">
            修改当前账户密码和双重认证配置。
          </TabsContent>
          <TabsContent value="notifications" className="mt-4 rounded-lg border p-4 text-sm text-muted-foreground">
            配置邮件、站内信和移动推送。
          </TabsContent>
        </Tabs>
      </DemoCard>

      <DemoCard title="仪表盘切换" description="用 Tabs 切换图表和摘要块。">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="activity">活动</TabsTrigger>
            <TabsTrigger value="team">团队</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 grid gap-4 md:grid-cols-3">
            {['页面数', '路由数', '图表页'].map((item) => (
              <div key={item} className="rounded-lg border p-4">{item}</div>
            ))}
          </TabsContent>
          <TabsContent value="activity" className="mt-4 rounded-lg border p-4 text-sm text-muted-foreground">
            最近一次更新发生在 2026-06-13，主要是组件演示页结构调整。
          </TabsContent>
          <TabsContent value="team" className="mt-4 rounded-lg border p-4 text-sm text-muted-foreground">
            当前维护者 3 人，前端、设计系统和图表分别由不同角色负责。
          </TabsContent>
        </Tabs>
      </DemoCard>

      <DemoCard title="步骤切换" description="Tabs 也可以作为轻量流程向导。">
        <Tabs defaultValue="step1" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="step1">① 需求</TabsTrigger>
            <TabsTrigger value="step2">② 路由</TabsTrigger>
            <TabsTrigger value="step3">③ 页面</TabsTrigger>
            <TabsTrigger value="step4">④ 验证</TabsTrigger>
          </TabsList>
          <TabsContent value="step1" className="mt-4 rounded-lg border p-4">确认组件一一映射关系。</TabsContent>
          <TabsContent value="step2" className="mt-4 rounded-lg border p-4">把导航和路由切换到注册表。</TabsContent>
          <TabsContent value="step3" className="mt-4 rounded-lg border p-4">为每个组件补齐独立 demo。</TabsContent>
          <TabsContent value="step4" className="mt-4 rounded-lg border p-4">逐路由验证并检查构建。</TabsContent>
        </Tabs>
      </DemoCard>
    </>
  )
}

function TextareaDemo() {
  return (
    <>
      <DemoCard title="基础输入" description="多行备注和评论最常见。">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="bio">个人简介</Label>
            <Textarea id="bio" placeholder="介绍一下你自己..." rows={4} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="feedback-textarea">反馈内容</Label>
            <Textarea id="feedback-textarea" placeholder="请输入你的建议..." rows={5} />
          </div>
        </div>
      </DemoCard>

      <DemoCard title="禁用与说明" description="和错误、帮助说明一起使用。">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="disabled-textarea">禁用状态</Label>
            <Textarea id="disabled-textarea" disabled placeholder="This is disabled" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="release-note">发布说明</Label>
            <Textarea id="release-note" defaultValue="本次发布移除了旧分组页面，新增组件注册表。" />
            <p className="text-sm text-muted-foreground">建议保持说明简短，详细变更写进 changelog。</p>
          </div>
        </div>
      </DemoCard>

      <DemoCard title="表单组合" description="Textarea 往往是提交表单的一部分。">
        <div className="space-y-4 rounded-lg border p-4">
          <div className="grid gap-2">
            <Label htmlFor="message-title">标题</Label>
            <Input id="message-title" placeholder="输入标题" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message-body">正文</Label>
            <Textarea id="message-body" placeholder="写下完整内容..." rows={6} />
          </div>
          <div className="flex gap-2">
            <Button>提交</Button>
            <Button variant="outline">保存草稿</Button>
          </div>
        </div>
      </DemoCard>
    </>
  )
}

function TimelineDemo() {
  return (
    <>
      <DemoCard title="基础时间线" description="使用圆点展示里程碑顺序。">
        <Timeline>
          <TimelineItem>
            <TimelineDot variant="primary" />
            <div className="flex-1">
              <TimelineHeader>
                <TimelineTitle>项目启动</TimelineTitle>
                <Badge variant="secondary">2024-01-15</Badge>
              </TimelineHeader>
              <TimelineDescription>确定技术方案并完成脚手架搭建。</TimelineDescription>
            </div>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot variant="success" />
            <div className="flex-1">
              <TimelineHeader>
                <TimelineTitle>v1.0 发布</TimelineTitle>
                <Badge>2024-03-01</Badge>
              </TimelineHeader>
              <TimelineDescription>首个正式版本发布，包含基础组件集。</TimelineDescription>
            </div>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot variant="warning" />
            <div className="flex-1">
              <TimelineHeader>
                <TimelineTitle>重大更新</TimelineTitle>
                <Badge variant="outline">2026-06-13</Badge>
              </TimelineHeader>
              <TimelineDescription>页面结构改为一组件一页面的扁平导航。</TimelineDescription>
            </div>
          </TimelineItem>
        </Timeline>
      </DemoCard>

      <DemoCard title="带图标的事件" description="图标帮助区分不同类型事件。">
        <Timeline>
          <TimelineItem>
            <div className="flex size-8 items-center justify-center rounded-full bg-blue-500/20">
              <Rocket className="size-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <TimelineHeader>
                <TimelineTitle>路线确定</TimelineTitle>
                <Badge variant="secondary">Kickoff</Badge>
              </TimelineHeader>
              <TimelineDescription>确认组件页全量拆分，不保留旧分组兼容。</TimelineDescription>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className="flex size-8 items-center justify-center rounded-full bg-emerald-500/20">
              <Package className="size-4 text-emerald-600" />
            </div>
            <div className="flex-1">
              <TimelineHeader>
                <TimelineTitle>组件页生成</TimelineTitle>
                <Badge>Build</Badge>
              </TimelineHeader>
              <TimelineDescription>逐个补齐独立路由与演示卡片。</TimelineDescription>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className="flex size-8 items-center justify-center rounded-full bg-violet-500/20">
              <GitBranch className="size-4 text-violet-600" />
            </div>
            <div className="flex-1">
              <TimelineHeader>
                <TimelineTitle>验证与收口</TimelineTitle>
                <Badge variant="outline">QA</Badge>
              </TimelineHeader>
              <TimelineDescription>检查菜单顺序、路径和页面数是否与 registry 一致。</TimelineDescription>
            </div>
          </TimelineItem>
        </Timeline>
      </DemoCard>

      <DemoCard title="详细内容" description="时间线项内部可以承载更长的说明。">
        <Timeline>
          <TimelineItem>
            <TimelineDot variant="success" />
            <div className="flex-1">
              <TimelineHeader>
                <TimelineTitle>安全补丁 v1.2.3</TimelineTitle>
                <Badge>已修复</Badge>
              </TimelineHeader>
              <TimelineDescription>修复了路径与示例目录结构不一致的问题。</TimelineDescription>
              <TimelineBody className="mt-2 rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <Shield className="size-3 text-muted-foreground" />
                  <span>同步 TreePage 中的静态目录示例到新结构。</span>
                </div>
              </TimelineBody>
            </div>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot variant="primary" />
            <div className="flex-1">
              <TimelineHeader>
                <TimelineTitle>持续迭代</TimelineTitle>
                <Badge variant="secondary">进行中</Badge>
              </TimelineHeader>
              <TimelineDescription>后续可继续为 Charts 和 Dashboard 增加更多真实业务样例。</TimelineDescription>
            </div>
          </TimelineItem>
        </Timeline>
      </DemoCard>
    </>
  )
}

function ToggleDemo() {
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [grid, setGrid] = useState(true)

  return (
    <>
      <DemoCard title="基础切换" description="常用于工具栏中的开关式按钮。">
        <div className="flex gap-2">
          <Toggle pressed={bold} onPressedChange={setBold} aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
          <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Toggle italic">
            <Italic className="size-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="size-4" />
          </Toggle>
        </div>
      </DemoCard>

      <DemoCard title="尺寸和边框" description="通过 variant 和 size 调整密度。">
        <div className="flex flex-wrap gap-3">
          <Toggle variant="outline" size="sm">小</Toggle>
          <Toggle variant="outline">默认</Toggle>
          <Toggle variant="outline" size="lg">大</Toggle>
          <Toggle variant="outline" aria-label="Toggle grid" pressed={grid} onPressedChange={setGrid}>
            <Grid3X3 className="size-4" />
          </Toggle>
        </div>
      </DemoCard>

      <DemoCard title="业务过滤" description="单个 Toggle 也适合作为局部筛选器。">
        <div className="flex flex-wrap gap-3">
          <Toggle variant="outline" defaultPressed>仅显示已完成</Toggle>
          <Toggle variant="outline">显示实验组件</Toggle>
          <Toggle variant="outline">隐藏首页概览</Toggle>
        </div>
      </DemoCard>
    </>
  )
}

function ToggleGroupDemo() {
  return (
    <>
      <DemoCard title="多选模式" description="格式控制和多标签筛选的常见场景。">
        <ToggleGroup type="multiple" defaultValue={['bold']}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </DemoCard>

      <DemoCard title="单选模式" description="布局对齐和视图模式切换适合单选组。">
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </DemoCard>

      <DemoCard title="业务过滤组合" description="多个视图和数据筛选项组合时更直观。">
        <div className="flex flex-wrap items-center gap-4">
          <ToggleGroup type="single" defaultValue="all" variant="outline">
            <ToggleGroupItem value="all">全部</ToggleGroupItem>
            <ToggleGroupItem value="basic">基础组件</ToggleGroupItem>
            <ToggleGroupItem value="complex">复杂组件</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" defaultValue="grid" variant="outline">
            <ToggleGroupItem value="grid"><LayoutGrid className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="list"><PanelLeft className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </DemoCard>
    </>
  )
}

function TooltipDemo() {
  return (
    <>
      <DemoCard title="按钮提示" description="给图标按钮提供额外说明。">
        <div className="flex flex-wrap gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">悬停显示提示</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>这是一个工具提示</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Info className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>更多说明位于这里。</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </DemoCard>

      <DemoCard title="文案说明" description="在正文中补充解释而不打断阅读流程。">
        <p className="text-sm text-muted-foreground">
          当前页面使用
          <Tooltip>
            <TooltipTrigger asChild>
              <button type="button" className="mx-1 underline decoration-dotted">registry</button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>保存组件 slug、标题、描述和排序的单一配置源。</p>
            </TooltipContent>
          </Tooltip>
          统一驱动路由和侧栏。
        </p>
      </DemoCard>

      <DemoCard title="图标工具栏" description="一组 icon button 通常都需要 tooltip。">
        <div className="flex gap-2 rounded-lg border p-3">
          {[
            ['搜索', <Search className="size-4" key="s" />],
            ['上传', <Upload className="size-4" key="u" />],
            ['发送', <Send className="size-4" key="se" />],
          ].map(([label, icon]) => (
            <Tooltip key={label as string}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">{icon as ReactElement}</Button>
              </TooltipTrigger>
              <TooltipContent>{label as string}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </DemoCard>
    </>
  )
}

function TreeDemo() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredData = useMemo(() => filterTreeItems(largeTreeData, searchTerm), [searchTerm])

  return (
    <>
      <DemoCard title="基础目录" description="简单展示文件树结构。">
        <div className="rounded-lg border p-3">
          <Tree items={basicTreeData} />
        </div>
      </DemoCard>

      <DemoCard title="完整项目结构" description="同步到当前页面目录与组件路由现实。">
        <div className="rounded-lg border p-3">
          <Tree items={largeTreeData} />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="secondary">3 个顶级目录</Badge>
          <Badge variant="secondary">{componentPageEntries.length} 个组件文件</Badge>
          <Badge variant="secondary">组件页已迁移到 `src/pages/components`</Badge>
        </div>
      </DemoCard>

      <DemoCard title="搜索过滤" description="输入关键字过滤树节点。">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="搜索文件或目录名..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
          </div>
          <div className="min-h-[220px] rounded-lg border p-3">
            {filteredData.length > 0 ? (
              <Tree items={filteredData} />
            ) : (
              <p className="py-8 text-center text-sm text-muted-foreground">未找到匹配节点</p>
            )}
          </div>
        </div>
      </DemoCard>
    </>
  )
}

const demoRenderers: Record<ComponentSlug, DemoRenderer> = {
  accordion: AccordionDemo,
  'ai-chat-dialog': AIChatDialogDemo,
  alert: AlertDemo,
  'alert-dialog': AlertDialogDemo,
  'aspect-ratio': AspectRatioDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  breadcrumb: BreadcrumbDemo,
  button: ButtonDemo,
  calendar: CalendarDemo,
  card: CardDemo,
  carousel: CarouselDemo,
  checkbox: CheckboxDemo,
  collapsible: CollapsibleDemo,
  command: CommandDemo,
  'context-menu': ContextMenuDemo,
  dialog: DialogDemo,
  drawer: DrawerDemo,
  'dropdown-menu': DropdownMenuDemo,
  'hover-card': HoverCardDemo,
  input: InputDemo,
  'input-otp': InputOtpDemo,
  label: LabelDemo,
  menubar: MenubarDemo,
  'navigation-menu': NavigationMenuDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  'radio-group': RadioGroupDemo,
  resizable: ResizableDemo,
  'scroll-area': ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  sheet: SheetDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  sonner: SonnerDemo,
  spinner: SpinnerDemo,
  stepper: StepperDemo,
  switch: SwitchDemo,
  table: TableDemo,
  tabs: TabsDemo,
  textarea: TextareaDemo,
  timeline: TimelineDemo,
  toggle: ToggleDemo,
  'toggle-group': ToggleGroupDemo,
  tooltip: TooltipDemo,
  tree: TreeDemo,
}

function filterTreeItems(items: TreeItemData[], term: string): TreeItemData[] {
  if (!term) return items
  return items.reduce<TreeItemData[]>((accumulator, item) => {
    const matchLabel = item.label.toLowerCase().includes(term.toLowerCase())
    const filteredChildren = item.children ? filterTreeItems(item.children, term) : undefined
    if (matchLabel || (filteredChildren && filteredChildren.length > 0)) {
      accumulator.push({ ...item, children: filteredChildren })
    }
    return accumulator
  }, [])
}
