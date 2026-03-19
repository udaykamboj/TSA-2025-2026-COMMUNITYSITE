import { SettingsContent } from '@/components/dashboard/settings-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings | Maplewood Community Resource Hub',
  description: 'Manage your account settings',
}

export default function SettingsPage() {
  return <SettingsContent />
}
