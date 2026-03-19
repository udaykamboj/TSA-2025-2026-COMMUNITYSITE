import { HelpContent } from '@/components/dashboard/help-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help | Mill Creek Community Resource Hub',
  description: 'Get help and find answers',
}

export default async function HelpPage({
  params,
  searchParams,
}: PageProps<"/dashboard/help">) {
  await Promise.all([params, searchParams])
  return <HelpContent basePath="/dashboard" />
}
