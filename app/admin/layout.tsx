"use client"

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { AdminSidebar } from '@/components/dashboard/admin-sidebar'
import { SiteHeader } from '@/components/dashboard/site-header'
import {
    SidebarInset,
    SidebarProvider,
} from '@/components/dashboard/ui/sidebar'

export default function AdminLayout({
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
            } else if (user.email !== 'admin@example.com') {
                router.push('/dashboard')
            }
        }
    }, [user, loading, router, pathname])

    if (loading || !user || user.email !== 'admin@example.com') {
        return null // or a loading spinner
    }

    return (
        <div className="dashboard-scope">
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "280px",
                    } as React.CSSProperties
                }
            >
                <AdminSidebar variant="inset" />
                <SidebarInset>
                    <SiteHeader />
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}
