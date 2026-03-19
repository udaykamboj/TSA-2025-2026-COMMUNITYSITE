import { NotificationsContent } from '@/components/dashboard/notifications-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notifications | Mill Creek Community Resource Hub',
  description: 'View your notifications',
}

export default async function NotificationsPage({
  params,
  searchParams,
}: PageProps<"/dashboard/notifications">) {
  await Promise.all([params, searchParams])
  return <NotificationsContent basePath="/dashboard" />
}
