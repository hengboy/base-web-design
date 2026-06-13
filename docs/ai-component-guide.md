# Base Web Design — AI 组件选择指南

> 本文档用于帮助 AI 和开发者根据实际场景选择合适组件。文档内容以当前仓库实现为准，组件来源于 `src/components/ui/`，对应演示页位于 `src/pages/components/`。

## 使用前提

先明确当前项目的几个事实：

- 首页 `/` 是 `Dashboard`，定位为脚手架启动台
- 组件演示页采用“一组件一路由”，例如 `/button`、`/table`、`/navigation-menu`、`/ai-chat-dialog`
- 左侧菜单按分组展示，但组件本身是扁平注册的
- `Charts` 是独立页面，不属于 `src/components/ui/` 文件映射范围
- `Sonner` 通过 `toast(...)` 调用，依赖 `App.tsx` 中全局挂载的 `Toaster`

## 快速决策树

```text
用户需要什么？
│
├─ 用户操作触发行为 → Buttons & Actions
│   ├─ 主要操作、提交表单 → Button
│   ├─ 危险操作 → Button (variant="destructive")
│   ├─ 图标操作 → Button (size="icon")
│   ├─ 单个开关切换 → Toggle
│   └─ 多选/单选按钮组 → ToggleGroup
│
├─ 收集用户输入 → Form Inputs
│   ├─ 单行文字 → Input
│   ├─ 多行文字 → Textarea
│   ├─ 字段标签 → Label
│   ├─ 多选 → Checkbox
│   ├─ 单选互斥 → RadioGroup
│   ├─ 二元开关 → Switch
│   ├─ 下拉选择 → Select
│   ├─ 范围值调整 → Slider
│   ├─ 验证码输入 → Input OTP
│   └─ 日期选择 → Calendar
│
├─ 展示反馈或状态 → Feedback & Status
│   ├─ 页面内提示 → Alert
│   ├─ 顶部轻提示 → Sonner / toast(...)
│   ├─ 进度展示 → Progress
│   ├─ 旋转加载 → Spinner
│   └─ 占位加载 → Skeleton
│
├─ 页面导航或结构切换 → Navigation
│   ├─ 层级路径 → Breadcrumb
│   ├─ 区块切换 → Tabs
│   ├─ 页码切换 → Pagination
│   ├─ 主站点导航 → NavigationMenu
│   └─ 步骤流程 → Stepper
│
├─ 展示结构化内容 → Data Display
│   ├─ 容器卡片 → Card
│   ├─ 结构化列表 → Table
│   ├─ 用户形象 → Avatar
│   ├─ 悬停说明 → Tooltip
│   ├─ 悬停详情 → HoverCard
│   ├─ 点击浮层详情 → Popover
│   ├─ 时间序列 → Timeline
│   └─ 树形数据 → Tree
│
├─ 弹出式交互 → Overlays
│   ├─ 常规弹窗 → Dialog
│   ├─ 危险确认 → AlertDialog
│   ├─ 侧边或边缘面板 → Sheet
│   ├─ 移动端抽屉 → Drawer
│   └─ AI 对话入口 → AI Chat Dialog
│
├─ 操作菜单与命令 → Menus
│   ├─ 按钮下拉菜单 → DropdownMenu
│   ├─ 右键菜单 → ContextMenu
│   ├─ 顶部菜单栏 → Menubar
│   └─ 命令面板 / 快速搜索 → Command
│
├─ 布局组织 → Layout
│   ├─ 分隔内容 → Separator
│   ├─ 自定义滚动区域 → ScrollArea
│   ├─ 可拖拽面板布局 → Resizable
│   ├─ 固定比例媒体容器 → AspectRatio
│   ├─ 手风琴内容块 → Accordion
│   └─ 轻量折叠块 → Collapsible
│
└─ 媒体或时间相关 → Media & Time
    ├─ 日期面板 → Calendar
    └─ 轮播内容 → Carousel
```

## 按当前分组查看组件

### 1. Buttons & Actions

| 场景 | 组件 | 关键点 |
| --- | --- | --- |
| 主要 CTA、提交、确认 | `Button` | 使用 `variant` 和 `size` 控制语义与尺寸 |
| 单个开关动作 | `Toggle` | 适合收藏、加粗、静音等二值状态 |
| 单选/多选按钮组 | `ToggleGroup` | 适合编辑器工具栏、布局切换 |

决策要点：

- 强语义按钮优先用 `Button`
- 需要“选中态”而不是“点击提交”时，优先考虑 `Toggle` 或 `ToggleGroup`

### 2. Form Inputs

| 场景 | 组件 | 关键点 |
| --- | --- | --- |
| 单行文本、邮箱、密码 | `Input` | 适合常规表单字段 |
| 多行备注、评论 | `Textarea` | 适合长文本输入 |
| 字段标签 | `Label` | 用 `htmlFor` 关联输入控件 |
| 多选项 | `Checkbox` | 适合协议、偏好、权限列表 |
| 单选互斥 | `RadioGroup` | 选项较少时更直接 |
| 设置开关 | `Switch` | 适合启用/关闭状态 |
| 下拉选择 | `Select` | 选项多、节省空间 |
| 数值范围 | `Slider` | 适合音量、预算、阈值 |
| 验证码输入 | `Input OTP` | 多槽位验证码 |
| 日期选择 | `Calendar` | 常与 `Popover` 组合 |

决策要点：

- `Checkbox` 主要用于表单项多选，`Switch` 更适合设置项启停
- 选项少用 `RadioGroup`，选项多或需要节省空间用 `Select`

### 3. Feedback & Status

| 场景 | 组件 | 关键点 |
| --- | --- | --- |
| 页面内提示 | `Alert` | 适合成功、警告、错误、说明 |
| 内联标签状态 | `Badge` | 适合状态、分类、计数 |
| 过程进度 | `Progress` | 用于上传、处理、任务完成度 |
| 加载占位 | `Skeleton` | 数据未返回前的结构占位 |
| 旋转等待 | `Spinner` | 操作进行中或刷新中 |
| 顶部轻提示 | `Sonner` | 用 `toast.success`、`toast.error` 等触发 |

决策要点：

- 需要页面内持续可见的反馈，用 `Alert`
- 需要操作后即时提示，用 `Sonner`

### 4. Navigation

| 场景 | 组件 | 关键点 |
| --- | --- | --- |
| 页面路径层级 | `Breadcrumb` | 放在页面头部最常见 |
| 同页内容切换 | `Tabs` | 平行内容区域切换 |
| 分页控制 | `Pagination` | 适合列表和表格底部页码导航 |
| 顶部站点导航 | `Navigation Menu` | 真实使用 `navigation-menu.tsx` |
| 分步骤流程 | `Stepper` | 适合开户、配置、引导流 |

决策要点：

- `Tabs` 是平级切换，`Stepper` 是顺序流程
- 当前仓库里的 `Pagination` demo 主要采用按钮式页码交互，不依赖传统 `href` 导航

### 5. Data Display

| 场景 | 组件 | 关键点 |
| --- | --- | --- |
| 卡片容器 | `Card` | 用于标题、描述、正文、操作区组合 |
| 表格列表 | `Table` | 适合订单、成员、日志等结构化数据 |
| 用户头像 | `Avatar` | 支持图片和 fallback |
| 悬停简短提示 | `Tooltip` | 内容应尽量简短 |
| 悬停详情卡片 | `Hover Card` | 适合用户、标签、实体预览 |
| 点击展开说明层 | `Popover` | 轻量设置或补充信息 |
| 时间线 | `Timeline` | 适合状态流和历史记录 |
| 树形结构 | `Tree` | 适合目录、组织、知识结构 |

决策要点：

- `Tooltip` 放简短说明，`Hover Card` 放结构化信息
- `Popover` 适合轻量浮层，不适合复杂表单主流程

### 6. Overlays

| 场景 | 组件 | 关键点 |
| --- | --- | --- |
| 常规模态交互 | `Dialog` | 适合编辑、详情、确认 |
| 危险操作确认 | `Alert Dialog` | 适合删除、停用、清空 |
| 从边缘滑出的面板 | `Sheet` | 支持四个方向 |
| 移动端抽屉 | `Drawer` | 更偏移动端体验 |
| AI 对话弹窗 | `AI Chat Dialog` | 对应当前页面路由 `/ai-chat-dialog` |

决策要点：

- `Dialog` 处理一般输入和展示
- `Alert Dialog` 专注危险确认
- `Sheet` 更适合不中断上下文的侧边操作

### 7. Menus

| 场景 | 组件 | 关键点 |
| --- | --- | --- |
| 按钮触发下拉 | `Dropdown Menu` | 适合账户菜单、工具菜单 |
| 右键触发菜单 | `Context Menu` | 适合文件、列表、画布对象 |
| 顶部菜单栏 | `Menubar` | 适合桌面应用式导航 |
| 命令面板 | `Command` | 当前页面使用真实 `command.tsx` 能力 |

决策要点：

- `Dropdown Menu` 是点击触发，`Context Menu` 是右键触发
- `Command` 适合全局搜索、快速跳转、动作面板

### 8. Layout

| 场景 | 组件 | 关键点 |
| --- | --- | --- |
| 内容分隔 | `Separator` | `orientation="horizontal" \| "vertical"` |
| 滚动内容块 | `Scroll Area` | 统一滚动条外观 |
| 可拖拽布局 | `Resizable` | 使用 `orientation`、`defaultSize`、`minSize` 等能力 |
| 固定比例媒体 | `Aspect Ratio` | 适合封面、视频、预览图 |
| 多段折叠内容 | `Accordion` | FAQ、说明区、设置分节 |
| 单段轻量折叠 | `Collapsible` | 适合工具块、日志详情 |

决策要点：

- `Accordion` 适合分组式展开内容
- `Collapsible` 更适合单块内容的展开与收起

### 9. Media & Time

| 场景 | 组件 | 关键点 |
| --- | --- | --- |
| 日期视图 | `Calendar` | 单选、范围、禁用日期等 |
| 轮播内容 | `Carousel` | 适合横向卡片、图片、推荐内容 |

## 常见组合模式

### 模式 1：启动台首页

```text
Card × N → 统计摘要
Badge / Avatar / Skeleton → 状态辅助块
Button / Link → 快捷入口
```

适用场景：

- 脚手架首页
- 运营概览
- 项目启动台

### 模式 2：表单弹窗

```text
Button (DialogTrigger) → Dialog → DialogContent → [Label + Input / Textarea / Select] → DialogFooter → [取消, 提交]
```

### 模式 3：确认删除

```text
Button (AlertDialogTrigger) → AlertDialog → AlertDialogContent → AlertDialogFooter → [AlertDialogCancel, AlertDialogAction]
```

### 模式 4：表格 + 行内状态

```text
Table → TableHeader + TableBody → TableRow → TableCell → Badge / Button / Avatar
```

### 模式 5：表格 + 分页

```text
Table → 数据行列表
表格页脚 → 结果摘要 + Pagination
```

适用场景：

- 后台列表页
- 成员管理
- 订单记录

说明：

- 当前仓库 `table` 页面已经包含 `Table + Pagination` 的完整 demo
- `Pagination` 主要作为交互控件使用，可与筛选、统计、批量操作一起放在列表页脚

### 模式 6：设置页

```text
ScrollArea → 分节容器 → [Label + Switch / Select / RadioGroup] → Sonner 反馈
```

### 模式 7：日期选择器

```text
Popover → PopoverTrigger (Button) → PopoverContent → Calendar
```

### 模式 8：命令面板

```text
Button / Shortcut → Command / CommandDialog → CommandInput → CommandList → CommandItem
```

### 模式 9：顶部主导航

```text
NavigationMenu → NavigationMenuList → NavigationMenuItem → NavigationMenuTrigger / NavigationMenuLink
```

## 选择速查

| 如果需求是... | 优先组件 |
| --- | --- |
| 提交、保存、创建 | `Button` |
| 删除前确认 | `Alert Dialog` |
| 弹窗编辑表单 | `Dialog` |
| 侧边滑出详情或设置 | `Sheet` |
| 多步骤配置流程 | `Stepper` |
| 同页内容切换 | `Tabs` |
| 顶部站点主导航 | `Navigation Menu` |
| 列表分页 | `Pagination` |
| 表格数据展示 | `Table` |
| 表格底部分页 | `Table + Pagination` |
| 右键操作菜单 | `Context Menu` |
| 全局搜索或快捷跳转 | `Command` |
| 操作成功轻提示 | `Sonner` |
| 页面内错误提示 | `Alert` |
| 数据未返回占位 | `Skeleton` |
| 页面首页概览 | `Card + Badge + Avatar + Button` |
