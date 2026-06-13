# Base Web Design

一个面向业务项目落地的前端组件框架示例仓库。它不是单纯的 UI 组件清单，也不是空白脚手架，而是把常用组件、页面骨架、交互模式和演示页面组织在一起，方便团队统一视觉和交互实现方式。

当前仓库基于 `React 19`、`TypeScript`、`Vite`、`Tailwind CSS 4`、`Radix UI` 构建，适合作为中后台、工具台、内容管理和 AI 应用前端的基础起点。

## 项目定位

这个仓库主要解决三类问题：

- 为业务页面提供可直接复用的基础组件和组合模式
- 为新页面开发提供统一的布局骨架、主题能力和交互范式
- 为团队提供一个可浏览、可对照、可扩展的组件演示入口

如果你正在找的是：

- 一个可以直接开始开发的 React 前端基础框架
- 一套按场景整理好的常用组件集合
- 一份能帮助开发者快速找到页面入口和复用路径的说明文档

那么这个仓库就是为这些目标准备的。

## 核心能力

### 1. 组件体系完整

仓库已按业务常见场景划分组件能力，包括：

- Buttons & Actions
- Form Inputs
- Feedback & Status
- Navigation
- Data Display
- Overlays
- Menus
- Layout
- Calendar
- Command
- Drawer
- Input OTP
- Carousel
- Stepper
- Timeline
- Tree
- Charts
- AI Chat

这些能力已经以独立页面的形式挂到路由中，既能作为演示站使用，也能作为业务页面开发时的查阅入口。

### 2. 带布局骨架

仓库内置了应用级布局结构：

- `src/components/layout/AppLayout.tsx`
- `src/components/layout/AppSidebar.tsx`
- `src/components/layout/AppHeader.tsx`

这意味着它不只是“组件库”，还提供了一个可直接承接业务页面的基础壳层。

### 3. 可直接复用

大部分基础组件位于：

- `src/components/ui/`

演示级或业务化示例组件位于：

- `src/components/demo/`

页面级示例位于：

- `src/pages/`

通常的复用方式是：

1. 从 `src/components/ui/` 直接引入基础组件
2. 在业务页面中按现有页面示例进行组合
3. 需要应用壳层时复用 `src/components/layout/`

## 技术栈

- `React 19`
- `TypeScript`
- `Vite 8`
- `Tailwind CSS 4`
- `Radix UI`
- `React Router 7`
- `Recharts`
- `Sonner`
- `Motion`

## 目录结构

```text
src/
  components/
    demo/        业务化演示组件
    layout/      应用布局组件
    ui/          基础 UI 组件
  hooks/         通用 hooks
  lib/           主题、工具函数
  pages/         各组件分类演示页面
docs/            项目文档
```

## 快速启动

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

### 构建生产包

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

## 页面入口

当前路由入口如下，可作为查找组件和交互示例的第一入口：

| 页面 | 路由 | 说明 |
| --- | --- | --- |
| Dashboard | `/` | 组合型总览页，展示 Card、Badge、Button、Avatar、Skeleton 等基础能力 |
| Buttons & Actions | `/buttons` | 按钮、切换、操作类组件 |
| Form Inputs | `/forms` | 输入、选择、校验类组件 |
| Feedback & Status | `/feedback` | 告警、通知、加载、进度反馈 |
| Navigation | `/navigation` | 面包屑、标签页、分页、步骤导航 |
| Data Display | `/data-display` | 表格、头像、标签、层级内容展示 |
| Overlays | `/overlays` | Dialog、AlertDialog、Sheet 等浮层能力 |
| Menus | `/menus` | Dropdown、ContextMenu、Menubar、NavigationMenu |
| Layout | `/layout` | 分隔、滚动、可调整布局等结构组件 |
| Calendar | `/calendar` | 日期选择与日历相关能力 |
| Command | `/command` | 命令面板与快速检索交互 |
| Drawer | `/drawer` | 抽屉类交互 |
| Input OTP | `/input-otp` | 验证码输入场景 |
| Carousel | `/carousel` | 轮播与内容切换 |
| Stepper | `/stepper` | 多步骤流程 |
| Timeline | `/timeline` | 时间线与事件序列展示 |
| Tree | `/tree` | 树形数据展示 |
| Charts | `/charts` | 基于 Recharts 的图表展示 |
| AI Chat | `/ai-chat` | AI 对话类界面示例 |

## 组件分类总览

### Buttons & Actions

适合承载提交、确认、取消、危险操作、图标操作和切换动作。主要组件包括：

- `Button`
- `Toggle`
- `ToggleGroup`
- `Spinner`

### Form Inputs

适合承载表单录入、条件筛选和设置修改。主要组件包括：

- `Input`
- `Textarea`
- `Checkbox`
- `RadioGroup`
- `Switch`
- `Select`
- `Slider`
- `InputOTP`
- `Calendar`
- `Label`

### Feedback & Status

适合承载提示、通知、加载和进度反馈。主要组件包括：

- `Alert`
- `Sonner`
- `Progress`
- `Skeleton`
- `Spinner`
- `Badge`

### Navigation

适合承载页面层级、模块切换和流程导引。主要组件包括：

- `Breadcrumb`
- `Tabs`
- `Pagination`
- `Stepper`
- `Accordion`
- `Collapsible`
- `Carousel`

### Data Display

适合承载结构化信息和轻量交互展示。主要组件包括：

- `Table`
- `Avatar`
- `Badge`
- `Tooltip`
- `HoverCard`
- `Popover`
- `Tree`
- `Card`

### Overlays

适合承载确认、编辑、详情和侧边面板类交互。主要组件包括：

- `Dialog`
- `AlertDialog`
- `Sheet`
- `Drawer`

### Menus

适合承载操作集合、右键菜单和快捷搜索。主要组件包括：

- `DropdownMenu`
- `ContextMenu`
- `Menubar`
- `NavigationMenu`
- `Command`

### Layout

适合承载内容组织、可滚动容器和面板分栏。主要组件包括：

- `Separator`
- `ScrollArea`
- `ResizablePanelGroup`
- `AspectRatio`

### 特殊能力

仓库还包含一些更偏业务表达的组件能力：

- `Timeline`
- `Tree`
- `Calendar`
- `Charts`
- `AIChatDialog`

## 如何直接复用

### 复用基础组件

直接从 `src/components/ui/` 引入：

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
```

适用场景：

- 新建业务页面
- 对已有页面进行局部 UI 升级
- 统一替换分散的按钮、表单、弹层实现

### 复用页面布局

如果你需要延续当前演示站的应用结构，可以复用：

- `AppLayout`
- `AppSidebar`
- `AppHeader`

适用场景：

- 中后台框架页
- 左侧导航 + 主内容区布局
- 需要统一 Header / Sidebar 结构的业务应用

### 参考页面示例进行组合

如果你不确定多个组件如何搭配，优先参考 `src/pages/` 里的页面实现。这些页面已经覆盖了大部分常见组合方式，例如：

- 仪表盘概览
- 表单输入
- 多步骤流程
- 对话框与抽屉
- 时间线与树形结构
- AI 对话界面

## 适用场景

这个仓库尤其适合以下项目作为起点：

- 中后台系统
- 管理后台
- 数据看板
- 内容运营工具
- AI 工作台或聊天型应用

如果你需要的是高度定制的品牌官网、营销落地页或视觉强驱动的展示站，这个仓库可以复用基础组件，但未必应该直接沿用整体布局结构。

## 文档索引

- [docs/README.md](docs/README.md)：`docs` 目录总索引
- [docs/ai-component-guide.md](docs/ai-component-guide.md)：AI 组件选择指南，按场景帮助选择合适组件

## 后续建议

如果这个仓库准备继续作为团队级组件框架演进，下一步优先级通常是：

1. 为每个组件补齐使用约定和边界说明
2. 增加组件状态、禁用态、空态、异常态演示
3. 补充统一的表单、表格、筛选栏、详情页组合模板
4. 建立从演示页到真实业务页面的最佳实践文档
