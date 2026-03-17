import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { ApplicationsContent } from '@/components/applications-content'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'

export default function ApplicationsPage() {
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
        <ApplicationsContent />
      </SidebarInset>
    </SidebarProvider>
  )
}
