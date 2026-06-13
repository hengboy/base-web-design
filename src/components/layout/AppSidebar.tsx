import { NavLink } from 'react-router-dom'
import {
  AppWindow,
  Badge,
  BadgeInfo,
  BarChart3,
  BellRing,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  ChevronDownSquare,
  ChevronsUpDown,
  CircleDot,
  CircleUserRound,
  Clock3,
  Command,
  Ellipsis,
  FolderTree,
  Folders,
  GalleryHorizontal,
  Group,
  KeyRound,
  LayoutDashboard,
  ListCollapse,
  ListFilter,
  ListOrdered,
  LoaderCircle,
  MenuSquare,
  MessageCircleMore,
  MessageSquare,
  MousePointer2,
  MousePointerClick,
  PanelBottomOpen,
  PanelLeftDashed,
  PanelRightOpen,
  PanelTop,
  Ratio,
  Route,
  ScanSearch,
  ScrollText,
  SeparatorHorizontal,
  ShieldAlert,
  SlidersHorizontal,
  SquareCheck,
  SquareMenu,
  SquareStack,
  Table2,
  Tags,
  Text,
  TextCursorInput,
  ToggleLeft,
  ToggleRight,
  TriangleAlert,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/hooks/use-i18n'
import {
  componentPageGroups,
  getComponentPagePath,
  type LocalizedLabel,
  type ComponentIconKey,
} from '@/pages/components/registry'

const topNavItems = [{ titleKey: 'nav.dashboard', path: '/', icon: LayoutDashboard }] as const
const bottomNavItems = [{ titleKey: 'nav.charts', path: '/charts', icon: BarChart3 }] as const
const componentGroupLabelKeys = {
  'Buttons & Actions': 'nav.group.buttonsActions',
  'Form Inputs': 'nav.group.formInputs',
  'Feedback & Status': 'nav.group.feedbackStatus',
  Navigation: 'nav.group.navigation',
  'Data Display': 'nav.group.dataDisplay',
  Overlays: 'nav.group.overlays',
  Menus: 'nav.group.menus',
  Layout: 'nav.group.layout',
  'Media & Time': 'nav.group.mediaTime',
} as const

const componentIcons: Record<ComponentIconKey, React.ComponentType<{ className?: string }>> = {
  appWindow: AppWindow,
  badge: Badge,
  badgeInfo: BadgeInfo,
  bellRing: BellRing,
  calendarDays: CalendarDays,
  chartNoAxesColumnIncreasing: ChartNoAxesColumnIncreasing,
  chevronDownSquare: ChevronDownSquare,
  chevronsUpDown: ChevronsUpDown,
  circleDot: CircleDot,
  circleUserRound: CircleUserRound,
  clock3: Clock3,
  command: Command,
  ellipsis: Ellipsis,
  folderTree: FolderTree,
  folders: Folders,
  galleryHorizontal: GalleryHorizontal,
  group: Group,
  keyRound: KeyRound,
  listCollapse: ListCollapse,
  listFilter: ListFilter,
  listOrdered: ListOrdered,
  loaderCircle: LoaderCircle,
  menuSquare: MenuSquare,
  messageCircleMore: MessageCircleMore,
  messageSquare: MessageSquare,
  mousePointer2: MousePointer2,
  mousePointerClick: MousePointerClick,
  panelBottomOpen: PanelBottomOpen,
  panelLeftDashed: PanelLeftDashed,
  panelRightOpen: PanelRightOpen,
  panelTop: PanelTop,
  ratio: Ratio,
  route: Route,
  scanSearch: ScanSearch,
  scrollText: ScrollText,
  separatorHorizontal: SeparatorHorizontal,
  shieldAlert: ShieldAlert,
  slidersHorizontal: SlidersHorizontal,
  squareCheck: SquareCheck,
  squareMenu: SquareMenu,
  squareStack: SquareStack,
  table2: Table2,
  tags: Tags,
  text: Text,
  textCursorInput: TextCursorInput,
  toggleLeft: ToggleLeft,
  toggleRight: ToggleRight,
  triangleAlert: TriangleAlert,
}

function SidebarNavItem({
  title,
  path,
  icon: Icon,
}: {
  title: string
  path: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          isActive
            ? 'bg-sidebar-accent text-sidebar-accent-foreground'
            : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
        )
      }
    >
      <Icon className="h-4 w-4 shrink-0" />
      {title}
    </NavLink>
  )
}

function SidebarGroupLabel({ title }: { title: string }) {
  return (
    <div className="px-3 pb-1 pt-3">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
        {title}
      </p>
    </div>
  )
}

export function AppSidebar() {
  const { locale, t } = useI18n()
  const getMenuTitle = (label: LocalizedLabel) => label[locale]

  return (
    <aside className="hidden min-h-screen w-64 flex-col self-stretch border-r border-border bg-sidebar md:flex">
      <div className="flex h-14 items-center border-b border-border px-6">
        <h1 className="text-base font-bold tracking-tight">Base Web Design</h1>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        <SidebarGroupLabel title={t('nav.overview')} />
        {topNavItems.map((item) => (
          <SidebarNavItem
            key={item.path}
            title={t(item.titleKey)}
            path={item.path}
            icon={item.icon}
          />
        ))}

        {componentPageGroups.map((section) => (
          <div key={section.group}>
            <SidebarGroupLabel title={t(componentGroupLabelKeys[section.group])} />
            {section.entries.map((entry) => (
              <SidebarNavItem
                key={entry.slug}
                title={getMenuTitle(entry.menuTitle)}
                path={getComponentPagePath(entry.slug)}
                icon={componentIcons[entry.icon]}
              />
            ))}
          </div>
        ))}

        <SidebarGroupLabel title={t('nav.charts')} />
        {bottomNavItems.map((item) => (
          <SidebarNavItem
            key={item.path}
            title={t(item.titleKey)}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </nav>
    </aside>
  )
}
