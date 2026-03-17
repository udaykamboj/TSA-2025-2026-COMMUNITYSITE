import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { EventDetailContent } from '@/components/event-detail-content'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
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
        <EventDetailContent params={params} />
      </SidebarInset>
    </SidebarProvider>
  )
}
