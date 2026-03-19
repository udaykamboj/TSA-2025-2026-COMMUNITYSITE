import { HelpContent } from '@/components/dashboard/help-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Help | Mill Creek Community Resource Hub',
  description: 'Admin help center',
}

export default function AdminHelpPage() {
  return <HelpContent basePath="/admin" />
}
