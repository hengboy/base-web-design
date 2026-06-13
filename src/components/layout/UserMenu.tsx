import {
  LogOut,
  Settings,
  User,
  ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/hooks/use-i18n'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function UserMenu() {
  const { t } = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-accent rounded-full"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/random-user-avatar.png" alt={t('user.avatarAlt')} />
            <AvatarFallback className="text-xs">U</AvatarFallback>
          </Avatar>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <span>{t('user.name')}</span>
            <span className="text-xs font-normal text-muted-foreground">
              user@example.com
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="h-4 w-4" />
            {t('user.profile')}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="h-4 w-4" />
            {t('user.settings')}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut className="h-4 w-4" />
          {t('user.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
