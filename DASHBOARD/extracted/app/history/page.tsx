import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { HistoryContent } from '@/components/history-content'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'

export default function HistoryPage() {
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
        <HistoryContent />
      </SidebarInset>
    </SidebarProvider>
  )
}
