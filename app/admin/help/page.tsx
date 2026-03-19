import { HelpContent } from '@/components/dashboard/help-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Help | Mill Creek Community Resource Hub',
  description: 'Admin help center',
}

export default async function AdminHelpPage({
  params,
  searchParams,
}: PageProps<"/admin/help">) {
  await Promise.all([params, searchParams])
  return <HelpContent basePath="/admin" />
}
