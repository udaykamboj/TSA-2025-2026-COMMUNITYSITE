import { HelpContent } from '@/components/dashboard/help-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help | Maplewood Community Resource Hub',
  description: 'Get help and find answers',
}

export default function HelpPage() {
  return <HelpContent basePath="/dashboard" />
}
