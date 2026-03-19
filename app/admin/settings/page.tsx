import { SettingsContent } from '@/components/dashboard/settings-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Settings | Mill Creek Community Resource Hub',
  description: 'Admin account settings',
}

export default function AdminSettingsPage() {
  return <SettingsContent />
}
