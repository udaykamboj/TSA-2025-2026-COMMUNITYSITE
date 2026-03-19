"use client"

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { AppSidebar } from '@/components/dashboard/app-sidebar'
import { SiteHeader } from '@/components/dashboard/site-header'
import {
    SidebarInset,
    SidebarProvider,
} from '@/components/dashboard/ui/sidebar'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { user, loading } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push(`/login?redirect=${pathname}`)
            } else if (user.email === 'admin@example.com') {
                router.push('/admin')
            }
        }
    }, [user, loading, router, pathname])

    if (loading || !user || user.email === 'admin@example.com') {
        return null
    }

    return (
        <div className="dashboard-scope flex flex-col min-h-screen">
            <Header />
            <SidebarProvider
                className="flex-1 min-h-0"
                style={
                    {
                        "--sidebar-width": "280px",
                    } as React.CSSProperties
                }
            >
                <AppSidebar variant="inset" />
                <SidebarInset>
                    <SiteHeader />
                    {children}
                </SidebarInset>
            </SidebarProvider>
            <Footer />
        </div>
    )
}
