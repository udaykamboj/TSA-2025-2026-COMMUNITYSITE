import { AdminDashboardContent } from '@/components/dashboard/admin-dashboard-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Mill Creek Community Resource Hub',
  description: 'Admin dashboard',
}

export default async function AdminPage({
  params,
  searchParams,
}: PageProps<"/admin">) {
  await Promise.all([params, searchParams])
  return <AdminDashboardContent />
}
