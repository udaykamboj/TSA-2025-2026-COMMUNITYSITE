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

import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAppStore } from "@/lib/store"
import Link from "next/link"

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Search Events",
    url: "/events",
    icon: IconSearch,
  },
  {
    title: "My Applications",
    url: "/applications",
    icon: IconClipboardList,
  },
  {
    title: "Volunteer History",
    url: "/history",
    icon: IconHistory,
  },
  {
    title: "Organizations",
    url: "/organizations",
    icon: IconBuilding,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: IconCalendar,
  },
]

const navAdmin = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "User Management",
    url: "/admin/users",
    icon: IconUsers,
  },
  {
    title: "Organizations",
    url: "/admin/organizations",
    icon: IconBuilding,
  },
  {
    title: "Applications",
    url: "/admin/applications",
    icon: IconClipboardList,
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
  const { user, isAdmin, organizations, userOrganizations } = useAppStore()
  
  const myOrgs = organizations.filter((org) => userOrganizations.includes(org.id))

  return (
    <Sidebar collapsible="offcanvas" className="bg-white border-r" {...props}>
      <SidebarHeader className="border-b p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0066b2] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-lg font-bold text-[#fbbf24]">HIVE</span>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* User Info */}
        <div className="mt-4 flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-left">
              <div className="w-8 h-8 bg-[#0066b2] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {user?.name?.charAt(0) ?? "U"}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#1a3a5c]">{user?.name ?? "Guest"}</p>
              </div>
              <IconChevronDown className="size-4 text-[#4a5568]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/dashboard">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/applications">My Applications</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/history">Volunteer History</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <IconLogout className="size-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Select Organization */}
        <div className="mt-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-center justify-between px-3 py-2 bg-[#fbbf24] rounded text-[#1a3a5c] text-sm font-semibold">
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
                <Link href="/organizations">Manage Organizations</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Home Link */}
        <div className="mt-3 flex items-center gap-3 text-xs">
          <Link href="/dashboard" className="text-[#0066b2] hover:underline flex items-center gap-1">
            <IconHome className="size-3" />
            Home
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <NavMain items={isAdmin ? navAdmin : navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="text-xs text-[#4a5568]">
          <p>HIVE Volunteer System</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
