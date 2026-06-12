import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Cloud, CreditCard, GitBranch, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from 'lucide-react'
import { useState } from 'react'

export function MenusPage() {
  const [position, setPosition] = useState('bottom')
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivityBar, setShowActivityBar] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Menus</h1>
        <p className="text-muted-foreground mt-1">
          DropdownMenu 下拉菜单、ContextMenu 右键菜单、Menubar 菜单栏
        </p>
      </div>

      {/* DropdownMenu */}
      <Card>
        <CardHeader>
          <CardTitle>DropdownMenu 下拉菜单</CardTitle>
          <CardDescription>点击触发的下拉选项菜单</CardDescription>
        </CardHeader>
        <CardContent>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">打开菜单</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>我的账户</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>个人资料</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>账单</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>设置</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>快捷键</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>团队</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>邀请用户</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>邮件</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>消息</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>新建团队</span>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <GitBranch className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>帮助</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>退出登录</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>

      {/* Checkbox & Radio Dropdown */}
      <Card>
        <CardHeader>
          <CardTitle>菜单选项</CardTitle>
          <CardDescription>复选框和单选框菜单项</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">视图设置</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>显示面板</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                状态栏
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                活动栏（已禁用）
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
        </CardContent>
      </Card>

      {/* ContextMenu */}
      <Card>
        <CardHeader>
          <CardTitle>ContextMenu 右键菜单</CardTitle>
          <CardDescription>在下方区域右键点击触发菜单</CardDescription>
        </CardHeader>
        <CardContent>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[200px] w-full items-center justify-center rounded-lg border border-dashed">
              <p className="text-sm text-muted-foreground">在此区域右键点击</p>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                <PlusCircle className="mr-2 h-4 w-4" />
                新建文件
              </ContextMenuItem>
              <ContextMenuItem inset>
                粘贴
                <ContextMenuShortcut>⌘V</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem inset>重命名</ContextMenuItem>
              <ContextMenuItem inset>删除</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem inset>
                <Cloud className="mr-2 h-4 w-4" />
                上传到云端
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </CardContent>
      </Card>

      {/* Menubar */}
      <Card>
        <CardHeader>
          <CardTitle>Menubar 菜单栏</CardTitle>
          <CardDescription>桌面应用风格的顶部菜单栏</CardDescription>
        </CardHeader>
        <CardContent>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem inset>
                  新建窗口
                  <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem inset>
                  新建标签页
                  <MenubarShortcut>⇧⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>打开文件...</MenubarItem>
                <MenubarItem inset>打开文件夹...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>保存</MenubarItem>
                <MenubarItem inset>另存为...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>退出</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>编辑</MenubarTrigger>
              <MenubarContent>
                <MenubarItem inset>
                  撤销
                  <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem inset>
                  重做
                  <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>
                  剪切
                  <MenubarShortcut>⌘X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem inset>
                  复制
                  <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem inset>
                  粘贴
                  <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>视图</MenubarTrigger>
              <MenubarContent>
                <MenubarItem inset>重新加载</MenubarItem>
                <MenubarItem inset>强制重新加载</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>开发者工具</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>帮助</MenubarTrigger>
              <MenubarContent>
                <MenubarItem inset>文档</MenubarItem>
                <MenubarItem inset>反馈</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>关于 ReUI</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </CardContent>
      </Card>
    </div>
  )
}
