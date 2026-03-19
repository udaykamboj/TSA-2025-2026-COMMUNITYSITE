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
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"

const navAdmin = [
    {
        title: "Dashboard",
        url: "/admin",
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

export function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { user, signOut } = useAuth()
    const router = useRouter()

    return (
        <Sidebar collapsible="none" className="bg-white border-r" {...props}>
            <SidebarHeader className="border-b p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        {/* Logo */}
                        <Link href="/admin" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">A</span>
                            </div>
                            <span className="text-lg font-bold text-primary">Admin</span>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>

                {/* User Info */}
                <div className="mt-4 flex items-center gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 text-left w-full hover:bg-gray-100 p-2 rounded-md transition-colors">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-primary-foreground font-semibold text-sm uppercase">
                                    {user?.email?.charAt(0) ?? "A"}
                                </span>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-semibold text-secondary truncate">{user?.email ?? "Admin"}</p>
                                <p className="text-xs text-primary">Administrator</p>
                            </div>
                            <IconChevronDown className="size-4 text-muted-foreground" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                            <DropdownMenuItem asChild>
                                <Link href="/admin">Admin Profile</Link>
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
            </SidebarHeader>

            <SidebarContent className="p-2">
                <NavMain items={navAdmin} />
                <NavSecondary items={navSecondary} className="mt-auto" />
            </SidebarContent>

            <SidebarFooter className="border-t p-4">
                <div className="text-xs text-muted-foreground">
                    <p>Admin Portal</p>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
