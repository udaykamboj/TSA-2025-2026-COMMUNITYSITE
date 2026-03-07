"use client"

import Header from "@/components/layout/header"
import { PortalDashboard } from "@/components/portal-dashboard"

export default function PortalPage() {
    return (
        <main className="w-full">
            <Header />
            <PortalDashboard />
        </main>
    )
}
