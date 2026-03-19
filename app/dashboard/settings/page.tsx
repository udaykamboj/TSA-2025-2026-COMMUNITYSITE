import { SettingsContent } from '@/components/dashboard/settings-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings | Mill Creek Community Resource Hub',
  description: 'Manage your account settings',
}

export default async function SettingsPage({
  params,
  searchParams,
}: PageProps<"/dashboard/settings">) {
  await Promise.all([params, searchParams])
  return <SettingsContent />
}
