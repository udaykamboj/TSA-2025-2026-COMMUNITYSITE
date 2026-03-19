import { AdminDashboardContent } from '@/components/dashboard/admin-dashboard-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Mill Creek Community Resource Hub',
  description: 'Admin dashboard',
}

export default function AdminPage() {
    return (
        <AdminDashboardContent />
    )
}
