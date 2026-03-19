import { NotificationsContent } from '@/components/dashboard/notifications-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Notifications | Mill Creek Community Resource Hub',
  description: 'Admin notifications',
}

export default async function AdminNotificationsPage({
  params,
  searchParams,
}: PageProps<"/admin/notifications">) {
  await Promise.all([params, searchParams])
  return <NotificationsContent basePath="/admin" />
}
