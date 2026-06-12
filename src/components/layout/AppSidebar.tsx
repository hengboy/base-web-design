import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  MousePointer,
  FormInput,
  Bell,
  Navigation,
  Table,
  Layers,
  Menu,
  Box,
  BarChart3,
  MessageSquare,
  CalendarDays,
  Terminal,
  PanelRight,
  KeyRound,
  Images,
  ListOrdered,
  Clock,
  FolderTree,
} from 'lucide-react'

const navItems = [
  { title: 'Dashboard', path: '/', icon: LayoutDashboard },
  { title: 'Buttons & Actions', path: '/buttons', icon: MousePointer },
  { title: 'Form Inputs', path: '/forms', icon: FormInput },
  { title: 'Feedback & Status', path: '/feedback', icon: Bell },
  { title: 'Navigation', path: '/navigation', icon: Navigation },
  { title: 'Data Display', path: '/data-display', icon: Table },
  { title: 'Overlays', path: '/overlays', icon: Layers },
  { title: 'Menus', path: '/menus', icon: Menu },
  { title: 'Layout', path: '/layout', icon: Box },
]

const newNavItems = [
  { title: 'Calendar', path: '/calendar', icon: CalendarDays },
  { title: 'Command', path: '/command', icon: Terminal },
  { title: 'Drawer', path: '/drawer', icon: PanelRight },
  { title: 'Input OTP', path: '/input-otp', icon: KeyRound },
  { title: 'Carousel', path: '/carousel', icon: Images },
  { title: 'Stepper', path: '/stepper', icon: ListOrdered },
  { title: 'Timeline', path: '/timeline', icon: Clock },
  { title: 'Tree', path: '/tree', icon: FolderTree },
  { title: 'Charts', path: '/charts', icon: BarChart3 },
  { title: 'AI Chat', path: '/ai-chat', icon: MessageSquare },
]

export function AppSidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-border bg-sidebar h-screen">
      <div className="p-6 border-b border-border">
        <h1 className="text-lg font-bold tracking-tight">Base Web Framework</h1>
        <p className="text-sm text-muted-foreground mt-1">组件演示</p>
      </div>
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              {item.title}
            </NavLink>
          )
        })}

        <div className="pt-3 pb-1 px-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
            New
          </p>
        </div>

        {newNavItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              {item.title}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
