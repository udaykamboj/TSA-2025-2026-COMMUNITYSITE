import { AdminDashboardContent } from '@/components/dashboard/admin-dashboard-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Maplewood Community Resource Hub',
  description: 'Admin dashboard',
}

export default function AdminPage() {
    return (
        <AdminDashboardContent />
    )
}
