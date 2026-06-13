# Base Web Design

一个面向业务项目落地的前端组件脚手架示例仓库。它提供可直接复用的 `ui` 组件、应用级布局骨架，以及一套按组件拆分的演示页面，方便把设计系统能力快速落到实际页面中。

当前项目基于 `React 19`、`TypeScript`、`Vite`、`Tailwind CSS 4`、`Radix UI` 构建，适合作为中后台、工具台、内容管理和 AI 应用前端的起点。

## 当前结构

项目已经改为“一组件一路由”的演示结构：

- `Dashboard` 使用 `/`，作为脚手架首页和启动台，展示统计卡片、状态摘要、快捷入口与首页常见组合块
- `src/components/ui/` 下的组件页面由注册表统一驱动，路由使用组件文件名对应的短横线路径，例如 `/button`、`/alert-dialog`、`/ai-chat-dialog`
- `Charts` 保留为独立页面，使用 `/charts`
- 左侧菜单保留分组展示，但页面内容不再按旧的混合 demo 页组织

侧栏当前分组为：

- `Overview`
- `Buttons & Actions`
- `Form Inputs`
- `Feedback & Status`
- `Navigation`
- `Data Display`
- `Overlays`
- `Menus`
- `Layout`
- `Media & Time`
- `Charts`

组件演示页的单一事实来源是 [src/pages/components/registry.ts](/Users/yuqiyu/AiHistorys/base-web-design/src/pages/components/registry.ts)，它同时驱动：

- `App.tsx` 路由注册
- `AppSidebar.tsx` 左侧菜单
- 页面标题、描述、分组、图标与顺序

## 技术栈

- `React 19`
- `TypeScript`
- `Vite`
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
    layout/      应用布局组件
    ui/          基础 UI 组件
  hooks/         通用 hooks
  lib/           主题与工具函数
  pages/
    components/  一组件一路由的演示页面体系
    Dashboard.tsx
    ChartsPage.tsx
docs/
  README.md
  ai-component-guide.md
```

说明：

- 不再使用旧的 `src/components/demo/`
- 不再保留 `/buttons`、`/forms`、`/feedback`、`/navigation` 等混合分组页
- 组件演示页面统一收敛到 `src/pages/components/`

## 快速启动

```bash
npm install
npm run dev
```

常用命令：

```bash
npm run lint
npx tsc -p tsconfig.app.json --noEmit --ignoreDeprecations 6.0
```

构建命令：

```bash
npm run build
```

当前仓库存在一个已知的独立问题：如果 `tsconfig.app.json` 未处理 TypeScript 6 的 `baseUrl` 弃用提示，`npm run build` 可能因为该配置报错。这不是本次组件拆分本身导致的问题。

## 页面与路由

根路由结构很简单：

| 页面类型 | 路由规则 | 说明 |
| --- | --- | --- |
| Dashboard | `/` | 启动台首页，展示统计、卡片、摘要和常用入口 |
| 组件页 | `/<ui-file-slug>` | 例如 `/button`、`/table`、`/navigation-menu`、`/ai-chat-dialog` |
| Charts | `/charts` | 图表独立页面 |

当前组件页来自 `src/components/ui/` 的 47 个组件文件，页面按注册表定义分组展示。示例包括：

- `/button`
- `/input`
- `/table`
- `/navigation-menu`
- `/sonner`
- `/tree`
- `/ai-chat-dialog`

## 复用方式

常见复用路径如下：

1. 直接从 `src/components/ui/` 引入基础组件
2. 参考 `src/pages/components/ComponentDemoPage.tsx` 中对应组件的真实 demo 组合方式
3. 需要应用壳层时复用 `src/components/layout/`
4. 需要首页模板时参考 [src/pages/Dashboard.tsx](/Users/yuqiyu/AiHistorys/base-web-design/src/pages/Dashboard.tsx)

几个当前约定：

- `Command` 页面使用真实 `command.tsx` 导出，不是手写替代外观
- `Navigation Menu` 页面直接基于真实 `navigation-menu.tsx`
- `Sonner` 页面演示 `toast` 调用方式，全局 `Toaster` 已挂载在 `App.tsx`
- `Table` 页面包含和 `Pagination` 组合的后台列表 demo

## 文档

- 根目录 [README.md](/Users/yuqiyu/AiHistorys/base-web-design/README.md)：项目定位、目录、路由与运行方式
- [docs/README.md](/Users/yuqiyu/AiHistorys/base-web-design/docs/README.md)：文档索引
- [docs/ai-component-guide.md](/Users/yuqiyu/AiHistorys/base-web-design/docs/ai-component-guide.md)：组件选择、分组与常见组合模式
