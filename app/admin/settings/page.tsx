import { SettingsContent } from '@/components/dashboard/settings-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Settings | Mill Creek Community Resource Hub',
  description: 'Admin account settings',
}

export default async function AdminSettingsPage({
  params,
  searchParams,
}: PageProps<"/admin/settings">) {
  await Promise.all([params, searchParams])
  return <SettingsContent />
}
