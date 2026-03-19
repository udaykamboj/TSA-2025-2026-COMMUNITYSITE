"use client"

import * as React from "react"
import {
  IconBuilding,
  IconCalendar,
  IconClipboardList,
  IconDashboard,
  IconHelp,
  IconHistory,
  IconSearch,
  IconSettings,
  IconShield,
  IconUsers,
  IconLogout,
  IconChevronDown,
  IconHome,
  IconBell,
  IconUser,
} from "@tabler/icons-react"

import { NavMain } from '@/components/dashboard/nav-main'
import { NavSecondary } from '@/components/dashboard/nav-secondary'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/dashboard/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dashboard/ui/dropdown-menu"
import { useAppStore } from "@/lib/store"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Search Events",
    url: "/dashboard/events",
    icon: IconSearch,
  },
  {
    title: "My Applications",
    url: "/dashboard/applications",
    icon: IconClipboardList,
  },
  {
    title: "Volunteer History",
    url: "/dashboard/history",
    icon: IconHistory,
  },
  {
    title: "Organizations",
    url: "/dashboard/organizations",
    icon: IconBuilding,
  },
  {
    title: "Calendar",
    url: "/dashboard/calendar",
    icon: IconCalendar,
  },
]

const navSecondary = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: IconSettings,
  },
  {
    title: "Get Help",
    url: "/dashboard/help",
    icon: IconHelp,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { organizations, userOrganizations, notifications, userProfile } = useAppStore()
  const { user, signOut } = useAuth()
  const router = useRouter()

  const myOrgs = organizations.filter((org) => userOrganizations.includes(org.id))
  const targetEmail = user?.email || "demo@example.com"
  const unreadCount = notifications.filter((n) => n.userEmail === targetEmail && !n.read).length

  return (
    <Sidebar collapsible="none" className="bg-white border-r" {...props}>
      <SidebarHeader className="border-b p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">Dashboard</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* User Info */}
        <div className="mt-4 flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-left hover:bg-gray-100 p-2 rounded-md transition-colors">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm uppercase">
                  {(userProfile.displayName || user?.email || "U").charAt(0)}
                </span>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold text-secondary truncate">
                  {userProfile.displayName || user?.email || "Guest"}
                </p>
                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              </div>
              <IconChevronDown className="size-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <IconUser className="size-4 mr-2" />My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/applications">
                  <IconClipboardList className="size-4 mr-2" />My Applications
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/history">
                  <IconHistory className="size-4 mr-2" />Volunteer History
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <IconSettings className="size-4 mr-2" />Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-600 cursor-pointer"
                onClick={async () => { await signOut(); router.push('/login'); }}
              >
                <IconLogout className="size-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Select Organization */}
        <div className="mt-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-center justify-between px-3 py-2 bg-[#1B4A32] text-white active:bg-[#0C2217] rounded-lg text-sm font-semibold">
              <span>Select Organization</span>
              <IconChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {myOrgs.map((org) => (
                <DropdownMenuItem key={org.id}>
                  {org.name}
                </DropdownMenuItem>
              ))}
              {myOrgs.length === 0 && (
                <DropdownMenuItem disabled>
                  No organizations joined
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/organizations">Manage Organizations</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </SidebarHeader>

      <SidebarContent className="p-2">
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter className="border-t p-4 text-center">
        <div className="text-xs text-muted-foreground">
          <p>© 2026 Dashboard</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
