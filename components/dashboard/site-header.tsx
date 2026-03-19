"use client"

import { SidebarTrigger } from '@/components/dashboard/ui/sidebar'
import { useAppStore } from '@/lib/store'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import {
  IconBell,
  IconCheck,
} from '@tabler/icons-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/dashboard/ui/popover"
import { ScrollArea } from "@/components/dashboard/ui/scroll-area"

export function SiteHeader() {
  const { user } = useAuth()
  const { notifications, markNotificationRead, markAllNotificationsRead } = useAppStore()

  const targetEmail = user?.email || "demo@example.com"
  const userNotifications = notifications
    .filter((n) => n.userEmail === targetEmail)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  
  const unreadCount = userNotifications.filter((n) => !n.read).length

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-white transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-2 px-4">

        <div className="flex items-center gap-2 sm:hidden">
          <SidebarTrigger />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Notifications Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <IconBell className="size-5 text-muted-foreground" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-80 p-0">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h4 className="font-semibold text-sm">Notifications {unreadCount > 0 && `(${unreadCount})`}</h4>
              {unreadCount > 0 && (
                <button
                  onClick={() => markAllNotificationsRead(targetEmail)}
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  <IconCheck className="size-3" />
                  Mark all read
                </button>
              )}
            </div>
            <ScrollArea className="h-80">
              {userNotifications.length > 0 ? (
                <div className="flex flex-col">
                  {userNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors ${
                        !notification.read ? "bg-muted/10 outline-l outline-primary outline-l-4" : ""
                      }`}
                      onClick={() => !notification.read && markNotificationRead(notification.id)}
                      style={!notification.read ? { borderLeft: '4px solid #7cb518' } : {}}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <p className={`text-sm ${!notification.read ? "font-medium text-secondary" : "text-muted-foreground"}`}>
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(notification.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1.5" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-sm text-muted-foreground">
                  No notifications yet
                </div>
              )}
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}
