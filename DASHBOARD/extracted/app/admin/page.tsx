import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { AdminDashboardContent } from '@/components/admin-dashboard-content'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'

export default function AdminPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "280px",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <AdminDashboardContent />
      </SidebarInset>
    </SidebarProvider>
  )
}
