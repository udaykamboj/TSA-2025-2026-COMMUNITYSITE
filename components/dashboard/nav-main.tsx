"use client"

import { type Icon } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from '@/lib/utils'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/dashboard/ui/sidebar'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            // Only exact match for top-level items (e.g. /dashboard) so Dashboard isn't "always" green on subpages
            const isActive = pathname === item.url || (item.url !== "/dashboard" && pathname.startsWith(item.url + "/"))
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive}
                  tooltip={item.title}
                  className={cn(
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground font-semibold"
                  )}
                >
                  <Link href={item.url}>
                    {item.icon && <item.icon className="size-4" />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
