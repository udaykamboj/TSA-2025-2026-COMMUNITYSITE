import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { OrganizationsContent } from '@/components/organizations-content'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'

export default function OrganizationsPage() {
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
        <OrganizationsContent />
      </SidebarInset>
    </SidebarProvider>
  )
}
