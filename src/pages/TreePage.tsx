import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tree, type TreeItemData } from '@/components/ui/tree'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Search } from 'lucide-react'

const basicTreeData: TreeItemData[] = [
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

const largeTreeData: TreeItemData[] = [
  {
    id: 'project',
    label: 'base-web-framework',
    children: [
      { id: 'src', label: 'src', children: [
        { id: 'components', label: 'components', children: [
          { id: 'ui', label: 'ui', children: [
            { id: 'alert', label: 'alert.tsx' },
            { id: 'ai-chat', label: 'ai-chat-dialog.tsx' },
            { id: 'avatar', label: 'avatar.tsx' },
            { id: 'badge', label: 'badge.tsx' },
            { id: 'button', label: 'button.tsx' },
            { id: 'calendar', label: 'calendar.tsx' },
            { id: 'card', label: 'card.tsx' },
            { id: 'carousel', label: 'carousel.tsx' },
            { id: 'checkbox', label: 'checkbox.tsx' },
            { id: 'command', label: 'command.tsx' },
            { id: 'dialog', label: 'dialog.tsx' },
            { id: 'drawer', label: 'drawer.tsx' },
            { id: 'dropdown', label: 'dropdown-menu.tsx' },
          ]},
          { id: 'layout', label: 'layout', children: [
            { id: 'app-header', label: 'AppHeader.tsx' },
            { id: 'app-layout', label: 'AppLayout.tsx' },
            { id: 'app-sidebar', label: 'AppSidebar.tsx' },
          ]},
        ]},
        { id: 'pages', label: 'pages', children: [
          { id: 'dashboard', label: 'Dashboard.tsx' },
          { id: 'buttons', label: 'ButtonsPage.tsx' },
          { id: 'forms', label: 'FormsPage.tsx' },
          { id: 'feedback', label: 'FeedbackPage.tsx' },
          { id: 'navigation', label: 'NavigationPage.tsx' },
          { id: 'data-display', label: 'DataDisplayPage.tsx' },
          { id: 'overlays', label: 'OverlaysPage.tsx' },
          { id: 'menus', label: 'MenusPage.tsx' },
          { id: 'layout', label: 'LayoutPage.tsx' },
        ]},
        { id: 'lib', label: 'lib', children: [
          { id: 'utils', label: 'utils.ts' },
          { id: 'theme', label: 'theme.tsx' },
        ]},
      ]},
      { id: 'public', label: 'public', children: [
        { id: 'favicon', label: 'favicon.ico' },
        { id: 'robots', label: 'robots.txt' },
      ]},
      { id: 'package', label: 'package.json' },
      { id: 'tsconfig', label: 'tsconfig.json' },
      { id: 'vite', label: 'vite.config.ts' },
    ],
  },
]

export function TreePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filterTree = (items: TreeItemData[], term: string): TreeItemData[] => {
    if (!term) return items
    return items.reduce<TreeItemData[]>((acc, item) => {
      const matchLabel = item.label.toLowerCase().includes(term.toLowerCase())
      const filteredChildren = item.children
        ? filterTree(item.children, term)
        : undefined
      if (matchLabel || (filteredChildren && filteredChildren.length > 0)) {
        acc.push({ ...item, children: filteredChildren })
      }
      return acc
    }, [])
  }

  const filteredData = filterTree(largeTreeData, searchTerm)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tree 树形结构</h1>
        <p className="text-muted-foreground mt-1">可展开的目录树组件，支持搜索过滤</p>
      </div>

      {/* 基础目录树 */}
      <Card>
        <CardHeader>
          <CardTitle>基础目录</CardTitle>
          <CardDescription>简单的文件目录展示</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border p-3">
            <Tree items={basicTreeData} />
          </div>
        </CardContent>
      </Card>

      {/* 大规模目录 */}
      <Card>
        <CardHeader>
          <CardTitle>完整项目结构</CardTitle>
          <CardDescription>展示完整的项目目录和文件列表</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border p-3">
            <Tree items={largeTreeData} />
          </div>
          <div className="mt-3 flex gap-2">
            <Badge variant="secondary">3 个目录</Badge>
            <Badge variant="secondary">12 个组件文件</Badge>
            <Badge variant="secondary">9 个页面文件</Badge>
          </div>
        </CardContent>
      </Card>

      {/* 带搜索过滤的树 */}
      <Card>
        <CardHeader>
          <CardTitle>搜索过滤</CardTitle>
          <CardDescription>输入关键字过滤树节点</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="搜索文件或目录名..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="rounded-lg border p-3 min-h-[200px]">
            {filteredData.length > 0 ? (
              <Tree items={filteredData} />
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">
                未找到匹配的节点
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
