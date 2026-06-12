import * as React from 'react'
import { ChevronRightIcon, FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface TreeItemData {
  id: string
  label: string
  icon?: React.ReactNode
  children?: TreeItemData[]
}

interface TreeProps {
  items: TreeItemData[]
  className?: string
}

function Tree({ items, className }: TreeProps) {
  return (
    <div
      data-slot="tree"
      className={cn('flex flex-col gap-1 text-sm', className)}
      role="tree"
    >
      {items.map((item) => (
        <TreeNode key={item.id} item={item} depth={0} />
      ))}
    </div>
  )
}

function TreeNode({
  item,
  depth,
}: {
  item: TreeItemData
  depth: number
}) {
  const [expanded, setExpanded] = React.useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div data-slot="tree-node" role="treeitem">
      <button
        type="button"
        className={cn(
          'flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left hover:bg-accent hover:text-accent-foreground transition-colors',
          hasChildren && 'cursor-pointer'
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren ? (
          <ChevronRightIcon
            className={cn(
              'size-4 shrink-0 transition-transform',
              expanded && 'rotate-90'
            )}
          />
        ) : (
          <span className="size-4 shrink-0" />
        )}
        {hasChildren ? (
          expanded ? (
            <FolderOpenIcon className="size-4 shrink-0 text-muted-foreground" />
          ) : (
            <FolderIcon className="size-4 shrink-0 text-muted-foreground" />
          )
        ) : (
          item.icon ?? <FileIcon className="size-4 shrink-0 text-muted-foreground" />
        )}
        <span className="truncate">{item.label}</span>
      </button>
      {expanded && hasChildren && (
        <div role="group">
          {item.children!.map((child) => (
            <TreeNode key={child.id} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export { Tree, type TreeItemData }
