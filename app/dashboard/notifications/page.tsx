import { NotificationsContent } from '@/components/dashboard/notifications-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notifications | Maplewood Community Resource Hub',
  description: 'View your notifications',
}

export default function NotificationsPage() {
  return <NotificationsContent basePath="/dashboard" />
}
