# Base Web Design — AI 组件选择指南

> 本文档引导 AI 根据具体场景选择合适的前端组件。所有组件来自 `src/components/ui/` 目录。

---

## 快速决策树

```
用户需要什么？
│
├─ 用户操作触发行为 → Buttons & Actions 组
│   ├─ 主要操作、提交表单 → Button (variant="default")
│   ├─ 删除等危险操作 → Button (variant="destructive")
│   ├─ 次要操作、取消 → Button (variant="outline")
│   ├─ 纯文字链接式操作 → Button (variant="link")
│   ├─ 图标按钮 → Button (size="icon") + 图标
│   ├─ 加载中的按钮 → Button + disabled + Spinner
│   ├─ 单个开关切换 → Toggle
│   └─ 多选/单选按钮组 → ToggleGroup (type="multiple" | "single")
│
├─ 收集用户输入 → Form Inputs 组
│   ├─ 单行文字 → Input
│   ├─ 多行文字 → Textarea
│   ├─ 数字/范围选择 → Slider
│   ├─ 是/否开关 → Switch
│   ├─ 多选 → Checkbox
│   ├─ 单选（互斥）→ RadioGroup
│   ├─ 下拉选择 → Select
│   ├─ 验证码/OTP → InputOTP
│   └─ 日期选择 → Calendar (+ Popover 组合)
│
├─ 展示数据 → Data Display 组
│   ├─ 结构化列表/表格 → Table
│   ├─ 用户头像 → Avatar
│   ├─ 短标签/状态标记 → Badge
│   ├─ 悬停提示 → Tooltip
│   ├─ 悬停展示详细信息 → HoverCard
│   ├─ 点击弹出浮层内容 → Popover
│   └─ 树形层级数据 → Tree
│
├─ 反馈状态 → Feedback 组
│   ├─ 页面内提示 → Alert
│   ├─ 顶部弹出通知 → toast (Sonner)
│   ├─ 进度展示 → Progress
│   ├─ 加载中旋转 → Spinner
│   ├─ 数据加载中占位 → Skeleton
│   └─ 状态标签 → Badge (自定义颜色)
│
├─ 页面/流程导航 → Navigation 组
│   ├─ 层级路径 → Breadcrumb
│   ├─ 同页面内容切换 → Tabs
│   ├─ 列表分页 → Pagination
│   ├─ 多步骤流程 → Stepper
│   ├─ 轮播展示 → Carousel
│   └─ 手风琴折叠展开 → Accordion
│
├─ 弹出浮层 → Overlays 组
│   ├─ 表单输入/信息确认 → Dialog
│   ├─ 危险操作确认 → AlertDialog
│   ├─ 侧边滑出面板 → Sheet (side="right|left|top|bottom")
│   └─ 大图/详情展示 → Dialog (className="max-w-2xl") + ScrollArea
│
├─ 菜单 → Menus 组
│   ├─ 点击弹出下拉 → DropdownMenu
│   ├─ 右键菜单 → ContextMenu
│   ├─ 顶部菜单栏 → Menubar
│   ├─ 顶部导航菜单 → NavigationMenu
│   └─ 命令面板/快速搜索 → Command
│
├─ 布局结构 → Layout 组
│   ├─ 内容分隔线 → Separator
│   ├─ 可滚动内容区域 → ScrollArea
│   ├─ 可拖拽调整面板 → ResizablePanelGroup
│   └─ 固定宽高比容器 → AspectRatio
│
├─ 时间线 → Timeline
│   └─ 时间序列事件/历史记录 → Timeline
│
├─ 图表 → Charts
│   └─ 数据可视化 → 使用 Recharts (已集成)
│
├─ 日历 → Calendar
│   └─ 日期选择器/日历视图 → Calendar
│
└─ AI 对话 → AIChat
    └─ AI 聊天界面 → AIChatDialog
```

---

## 组件详细索引

### 1. Buttons & Actions（按钮与操作）

| 场景 | 组件 | 关键属性 | 文件 |
|------|------|----------|------|
| 主要操作（提交、确认、创建） | Button | `variant="default"` | `button.tsx` |
| 危险操作（删除、退出） | Button | `variant="destructive"` | `button.tsx` |
| 次要操作（取消、返回） | Button | `variant="outline"` | `button.tsx` |
| 弱化操作（辅助功能） | Button | `variant="secondary"` | `button.tsx` |
| 无背景文字按钮 | Button | `variant="ghost"` | `button.tsx` |
| 链接样式按钮 | Button | `variant="link"` | `button.tsx` |
| 纯图标按钮 | Button | `size="icon"` | `button.tsx` |
| 加载中按钮 | Button | `disabled` + Spinner 图标 | `button.tsx` |
| 单个开关（加粗/收藏） | Toggle | `pressed`, `onPressedChange` | `toggle.tsx` |
| 多选按钮组（格式工具栏） | ToggleGroup | `type="multiple"` | `toggle-group.tsx` |
| 单选按钮组（对齐方式） | ToggleGroup | `type="single"` | `toggle-group.tsx` |

**决策要点：**
- 需要承载主要 CTA 时用 `default`；需要强调破坏性时用 `destructive`
- Toggle 是独立开关；ToggleGroup 是互斥/可多选的按钮集合

---

### 2. Form Inputs（表单输入）

| 场景 | 组件 | 关键属性 | 文件 |
|------|------|----------|------|
| 单行文本/邮箱/密码 | Input | `type="text|email|password"` | `input.tsx` |
| 多行文本/描述/留言 | Textarea | `rows` | `textarea.tsx` |
| 标签（配合 Input 等） | Label | `htmlFor` 关联 id | `label.tsx` |
| 多选（协议同意/偏好） | Checkbox | `checked`, `onCheckedChange` | `checkbox.tsx` |
| 单选互斥（性别/方案） | RadioGroup + RadioGroupItem | `value`, `defaultValue` | `radio-group.tsx` |
| 二元切换（通知/主题） | Switch | `checked`, `onCheckedChange` | `switch.tsx` |
| 下拉选择（框架/分类） | Select + SelectTrigger + SelectContent + SelectItem | `value`, `onValueChange` | `select.tsx` |
| 数值范围（音量/价格） | Slider | `defaultValue`, `max`, `step` | `slider.tsx` |
| 验证码/OTP | InputOTP | `maxLength` | `input-otp.tsx` |
| 日期选择 | Calendar | `mode`, `selected` | `calendar.tsx` |

**决策要点：**
- Checkbox vs Switch：Checkbox 用于表单选项；Switch 用于设置项/功能开关
- RadioGroup vs Select：选项少（≤5）用 RadioGroup 一目了然；选项多用 Select 节省空间
- Calendar 通常搭配 Popover 使用，点击按钮弹出日期选择器

---

### 3. Data Display（数据展示）

| 场景 | 组件 | 关键属性 | 文件 |
|------|------|----------|------|
| 结构化数据列表 | Table + TableHeader + TableBody + TableRow + TableCell | — | `table.tsx` |
| 用户头像/图标 | Avatar + AvatarImage + AvatarFallback | — | `avatar.tsx` |
| 状态标签（进行中/已完成） | Badge | `variant="default|secondary|destructive|outline"` | `badge.tsx` |
| 技术标签（React/TS） | Badge | `variant="secondary"` | `badge.tsx` |
| 悬停简短提示 | Tooltip + TooltipTrigger + TooltipContent | `side` | `tooltip.tsx` |
| 悬停展示详细信息 | HoverCard + HoverCardTrigger + HoverCardContent | `side` | `hover-card.tsx` |
| 点击弹出浮层内容 | Popover + PopoverTrigger + PopoverContent | — | `popover.tsx` |
| 树形数据（文件目录） | Tree | — | `tree.tsx` |

**决策要点：**
- Tooltip vs HoverCard：Tooltip 只放简短文字；HoverCard 放结构化内容（头像+描述）
- Popover vs Dialog：Popover 放轻量设置/快捷操作；Dialog 放完整表单
- Badge 的四种 variant 对应不同语义强度

---

### 4. Feedback & Status（反馈与状态）

| 场景 | 组件 | 关键属性 | 文件 |
|------|------|----------|------|
| 页面内提示（成功/错误/警告） | Alert + AlertTitle + AlertDescription | `variant="destructive"` | `alert.tsx` |
| 顶部弹出通知 | `toast.success/error/warning/info` | `description`, `action` | `sonner.tsx` |
| 操作完成进度条 | Progress | `value` (0-100) | `progress.tsx` |
| 加载中旋转指示 | Spinner | `size="sm|md|lg|xl"` | `spinner.tsx` |
| 数据加载占位 | Skeleton | `className="h-4 w-full"` | `skeleton.tsx` |
| 状态标记（内联） | Badge | 自定义颜色 | `badge.tsx` |

**决策要点：**
- Alert 是页面内常驻提示；Toast 是短暂弹出自动消失
- Alert 适合表单验证错误、操作结果常驻展示
- Toast 适合操作后的即时反馈（保存成功、删除成功）
- Skeleton 在数据未返回前展示；Spinner 在操作进行中展示

---

### 5. Navigation（导航）

| 场景 | 组件 | 关键属性 | 文件 |
|------|------|----------|------|
| 页面层级路径 | Breadcrumb + BreadcrumbList + BreadcrumbItem + BreadcrumbLink + BreadcrumbPage + BreadcrumbSeparator | `href` | `breadcrumb.tsx` |
| 同页面内容分区切换 | Tabs + TabsList + TabsTrigger + TabsContent | `defaultValue`, `value` | `tabs.tsx` |
| 列表分页 | Pagination + PaginationContent + PaginationItem + PaginationLink + PaginationPrevious + PaginationNext + PaginationEllipsis | `href`, `isActive` | `pagination.tsx` |
| 多步骤流程 | Stepper + StepperItem + StepperSeparator + StepperTitle + StepperDescription | `step`, `completed`, `active` | `stepper.tsx` |
| 轮播展示 | Carousel + CarouselContent + CarouselItem + CarouselPrevious + CarouselNext | — | `carousel.tsx` |
| 手风琴折叠展开 | Accordion + AccordionItem + AccordionTrigger + AccordionContent | `type="single|multiple"` | `accordion.tsx` |
| 可折叠面板 | Collapsible + CollapsibleTrigger + CollapsibleContent | — | `collapsible.tsx` |

**决策要点：**
- Tabs vs Stepper：Tabs 是平行切换；Stepper 是有先后顺序的流程
- Breadcrumb 放页面顶部，展示当前位置；Tabs 用于同页面内分区
- Accordion 适合 FAQ、设置项展开；Collapsible 是更轻量的单一折叠

---

### 6. Overlays（弹出浮层）

| 场景 | 组件 | 关键属性 | 文件 |
|------|------|----------|------|
| 表单输入/信息展示 | Dialog + DialogTrigger + DialogContent + DialogHeader + DialogTitle + DialogDescription + DialogFooter | `open`, `onOpenChange` | `dialog.tsx` |
| 危险操作确认 | AlertDialog + AlertDialogTrigger + AlertDialogContent + AlertDialogHeader + AlertDialogTitle + AlertDialogDescription + AlertDialogFooter + AlertDialogAction + AlertDialogCancel | — | `alert-dialog.tsx` |
| 侧边滑出面板 | Sheet + SheetTrigger + SheetContent + SheetHeader + SheetTitle + SheetDescription | `side="right|left|top|bottom"` | `sheet.tsx` |

**决策要点：**
- Dialog vs AlertDialog：Dialog 用于常规输入/展示；AlertDialog 专门用于确认危险操作
- Dialog 有保存/取消按钮；AlertDialog 有确认/取消按钮（确认按钮通常为红色）
- Sheet 适合侧边栏表单、设置面板、详情查看

---

### 7. Menus（菜单）

| 场景 | 组件 | 关键属性 | 文件 |
|------|------|----------|------|
| 点击弹出下拉菜单 | DropdownMenu + DropdownMenuTrigger + DropdownMenuContent + DropdownMenuItem + DropdownMenuSeparator + DropdownMenuLabel + DropdownMenuGroup + DropdownMenuShortcut | — | `dropdown-menu.tsx` |
| 带复选框的下拉项 | DropdownMenuCheckboxItem | `checked`, `onCheckedChange` | `dropdown-menu.tsx` |
| 带单选的下拉项 | DropdownMenuRadioGroup + DropdownMenuRadioItem | `value`, `onValueChange` | `dropdown-menu.tsx` |
| 子菜单 | DropdownMenuSub + DropdownMenuSubTrigger + DropdownMenuSubContent | — | `dropdown-menu.tsx` |
| 右键菜单 | ContextMenu + ContextMenuTrigger + ContextMenuContent + ContextMenuItem + ContextMenuSeparator + ContextMenuShortcut | — | `context-menu.tsx` |
| 顶部菜单栏 | Menubar + MenubarMenu + MenubarTrigger + MenubarContent + MenubarItem + MenubarSeparator + MenubarShortcut | — | `menubar.tsx` |
| 顶部导航菜单 | NavigationMenu | — | `navigation-menu.tsx` |
| 命令面板/全局搜索 | Command + CommandInput + CommandList + CommandItem + CommandGroup + CommandSeparator + CommandEmpty | — | `command.tsx` |

**决策要点：**
- DropdownMenu 是点击触发；ContextMenu 是右键触发；Menubar 是桌面应用风格的顶部菜单
- Command 适合全局搜索/快速跳转（通常绑定 ⌘K 快捷键）
- NavigationMenu 适合网站主导航；Menubar 适合桌面应用式菜单

---

### 8. Layout（布局）

| 场景 | 组件 | 关键属性 | 文件 |
|------|------|----------|------|
| 内容分隔线 | Separator | `orientation="horizontal|vertical"` | `separator.tsx` |
| 自定义滚动区域 | ScrollArea | `className="h-[200px]"` | `scroll-area.tsx` |
| 可拖拽调整面板 | ResizablePanelGroup + ResizablePanel + ResizableHandle | `direction="horizontal|vertical"`, `defaultSize`, `minSize` | `resizable.tsx` |
| 固定宽高比容器 | AspectRatio | `ratio={16/9}` | `aspect-ratio.tsx` |

**决策要点：**
- ScrollArea 用于内容可能溢出时的美观滚动条
- ResizablePanelGroup 适合 IDE 式布局、可调整的侧边栏
- AspectRatio 适合图片/视频/卡片封面需要固定比例时

---

### 9. 特殊组件

| 场景 | 组件 | 文件 |
|------|------|------|
| 时间序列/历史记录展示 | Timeline + TimelineItem + TimelineHeader + TimelineTitle + TimelineDescription + TimelineConnector + TimelineContent | `timeline.tsx` |
| 数据可视化（折线/柱状/饼图） | Recharts（LineChart, BarChart, PieChart 等） | charts 页面 |
| 日期选择器/日历视图 | Calendar | `calendar.tsx` |
| AI 聊天对话框 | AIChatDialog | `AIChatDialog.tsx` |
| 卡片容器（通用包裹） | Card + CardHeader + CardTitle + CardDescription + CardContent | `card.tsx` |

---

## 常见组合模式

### 模式 1：表单弹窗
```
Button (DialogTrigger) → Dialog → DialogContent → [Label + Input, Textarea] + [Checkbox] → DialogFooter → [Button variant="outline", Button]
```

### 模式 2：确认删除
```
Button (AlertDialogTrigger) → AlertDialog → AlertDialogContent → AlertDialogHeader → AlertDialogFooter → [AlertDialogCancel, AlertDialogAction variant="destructive"]
```

### 模式 3：详情浮层
```
HoverCard → HoverCardTrigger (Avatar/Button) → HoverCardContent → [Avatar, 用户名, 描述, 日期]
```

### 模式 4：表格 + 操作
```
Table → [TableHeader → TableRow → TableHead×N] + [TableBody → TableRow → TableCell×N → [Badge, Button]]
```

### 模式 5：设置页面
```
ScrollArea → [Separator 分节] → 每节: [Label + Switch/Select/RadioGroup] → Toast 反馈
```

### 模式 6：多步骤表单
```
Stepper → [StepperItem×N] → 当前步骤内容 [Input, Textarea, Select] → [Button "上一步", Button "下一步"]
```

### 模式 7：数据加载展示
```
加载前: Skeleton×N → 加载中: Spinner → 加载完成: Table/Card + Alert(错误时) → 操作后: Toast
```

### 模式 8：日期选择器
```
Popover → PopoverTrigger (Button + CalendarIcon) → PopoverContent → Calendar
```

---

## 组件选择速查表

| 如果用户说... | 使用组件 |
|---------------|----------|
| "一个按钮，点击提交" | Button |
| "删除前确认" | AlertDialog |
| "切换不同设置面板" | Tabs |
| "下拉选择框" | Select |
| "弹窗填写信息" | Dialog |
| "表格展示数据" | Table |
| "加载中动画" | Spinner |
| "数据加载占位" | Skeleton |
| "操作成功提示" | toast.success |
| "页面内错误提示" | Alert (variant="destructive") |
| "进度条" | Progress |
| "面包屑导航" | Breadcrumb |
| "用户头像" | Avatar |
| "状态标签" | Badge |
| "鼠标悬停提示" | Tooltip |
| "悬停显示详细信息" | HoverCard |
| "侧边滑出面板" | Sheet |
| "右键菜单" | ContextMenu |
| "下拉菜单" | DropdownMenu |
| "搜索命令面板" | Command |
| "步骤条" | Stepper |
| "手风琴折叠" | Accordion |
| "轮播图" | Carousel |
| "日期选择" | Calendar + Popover |
| "开关切换" | Switch |
| "多选框" | Checkbox |
| "单选组" | RadioGroup |
| "滑块" | Slider |
| "可拖拽面板" | ResizablePanelGroup |
| "自定义滚动条" | ScrollArea |
| "分隔线" | Separator |
| "时间线" | Timeline |
| "树形菜单" | Tree |
| "聊天界面" | AIChatDialog |
| "图表" | Recharts |
