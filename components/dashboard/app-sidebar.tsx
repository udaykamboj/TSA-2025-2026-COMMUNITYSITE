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
    url: "#",
    icon: IconSettings,
  },
  {
    title: "Get Help",
    url: "#",
    icon: IconHelp,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { organizations, userOrganizations } = useAppStore()
  const { user, signOut } = useAuth()
  const router = useRouter()

  const myOrgs = organizations.filter((org) => userOrganizations.includes(org.id))

  return (
    <Sidebar collapsible="none" className="bg-white border-r" {...props}>
      <SidebarHeader className="border-b p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-bold text-primary">Maplewood</span>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* User Info */}
        <div className="mt-4 flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-left hover:bg-gray-100 p-2 rounded-md transition-colors">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm uppercase">
                  {user?.email?.charAt(0) ?? "U"}
                </span>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold text-secondary truncate">{user?.email ?? "Guest"}</p>
              </div>
              <IconChevronDown className="size-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/dashboard">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/applications">My Applications</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/history">Volunteer History</Link>
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
            <DropdownMenuTrigger className="w-full flex items-center justify-between px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">
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

        {/* Home Link */}
        <div className="mt-3 flex items-center gap-3 text-xs">
          <Link href="/dashboard" className="text-primary hover:underline flex items-center gap-1">
            <IconHome className="size-3" />
            Home
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="text-xs text-muted-foreground">
          <p>Community Volunteer System</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
