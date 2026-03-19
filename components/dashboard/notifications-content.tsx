"use client"

import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/dashboard/ui/button"
import {
  IconBell,
  IconCheck,
  IconCheckbox,
  IconInfoCircle,
  IconAlertTriangle,
  IconCircleCheck,
  IconCircleX,
  IconFilter,
} from "@tabler/icons-react"
import Link from "next/link"
import { toast } from "sonner"

interface NotificationsContentProps {
  basePath?: string
}

export function NotificationsContent({ basePath = "/dashboard" }: NotificationsContentProps) {
  const { notifications, markNotificationRead, markAllNotificationsRead } = useAppStore()
  const { user } = useAuth()
  const [filter, setFilter] = useState<string>("all")

  const targetEmail = user?.email || "demo@example.com"
  const userNotifs = notifications
    .filter((n) => n.userEmail === targetEmail)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const filteredNotifs = filter === "all"
    ? userNotifs
    : filter === "unread"
      ? userNotifs.filter((n) => !n.read)
      : userNotifs.filter((n) => n.type === filter)

  const unreadCount = userNotifs.filter((n) => !n.read).length

  const getIcon = (type: string) => {
    switch (type) {
      case "success": return <IconCircleCheck className="size-5 text-green-600" />
      case "warning": return <IconAlertTriangle className="size-5 text-[#e87722]" />
      case "error": return <IconCircleX className="size-5 text-red-600" />
      default: return <IconInfoCircle className="size-5 text-blue-600" />
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffHours < 1) return "Just now"
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const handleMarkAllRead = () => {
    markAllNotificationsRead(targetEmail)
    toast.success("All notifications marked as read")
  }

  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-secondary">Notifications</h1>
            <p className="text-sm text-muted-foreground">
              {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}` : "You're all caught up!"}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button onClick={handleMarkAllRead} variant="outline" className="border-primary text-primary">
              <IconCheckbox className="size-4 mr-2" />
              Mark All Read
            </Button>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <IconFilter className="size-4 text-muted-foreground" />
          {["all", "unread", "info", "success", "warning"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className={filter === f ? "bg-primary text-white" : ""}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f === "unread" && unreadCount > 0 && (
                <span className="ml-1 bg-white text-primary text-xs px-1.5 rounded-full font-bold">
                  {unreadCount}
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Notification List */}
        {filteredNotifs.length > 0 ? (
          <div className="space-y-2">
            {filteredNotifs.map((notif) => (
              <div
                key={notif.id}
                className={`bg-white rounded shadow-sm p-4 flex items-start gap-4 transition-colors ${
                  !notif.read ? "border-l-4 border-l-primary" : "border-l-4 border-l-transparent"
                }`}
              >
                <div className="mt-0.5">{getIcon(notif.type)}</div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${!notif.read ? "font-semibold text-secondary" : "text-muted-foreground"}`}>
                    {notif.message}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-muted-foreground">{formatDate(notif.createdAt)}</span>
                    {notif.link && (
                      <Link href={notif.link} className="text-xs text-primary hover:underline">
                        View Details →
                      </Link>
                    )}
                  </div>
                </div>
                {!notif.read && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      markNotificationRead(notif.id)
                    }}
                    className="shrink-0 text-xs text-muted-foreground hover:text-secondary"
                  >
                    <IconCheck className="size-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded shadow-sm p-12 text-center">
            <IconBell className="size-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-secondary">
              {filter === "all" ? "No Notifications" : `No ${filter} Notifications`}
            </h3>
            <p className="text-muted-foreground mt-1">
              {filter === "unread" ? "You've read all your notifications!" : "Notifications will appear here when there's activity on your account."}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
