import { DashboardContent } from '@/components/dashboard/dashboard-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Maplewood Community Resource Hub',
  description: 'Your volunteer dashboard',
}

export default function DashboardPage() {
  return (
    <DashboardContent />
  )
}