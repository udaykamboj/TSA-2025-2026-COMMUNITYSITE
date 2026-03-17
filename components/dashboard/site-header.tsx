"use client"

import { SidebarTrigger } from '@/components/dashboard/ui/sidebar'
import { useAppStore } from '@/lib/store'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import {
  IconSearch,
  IconBell,
} from '@tabler/icons-react'

export function SiteHeader() {
  const { user } = useAuth()

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-white transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-2 px-4">

        {/* Logo for mobile */}
        <Link href="/dashboard" className="flex items-center gap-2 sm:hidden">
          <div className="w-6 h-6 bg-[#0066b2] rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-sm font-bold text-[#fbbf24]">HIVE</span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <IconSearch className="size-5 text-[#4a5568]" />
        </button>

        {/* Notifications */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
          <IconBell className="size-5 text-[#4a5568]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Avatar */}
        <div className="w-8 h-8 bg-[#0066b2] rounded-full flex items-center justify-center ml-2">
          <span className="text-white font-semibold text-sm uppercase">
            {user?.email?.charAt(0) ?? "U"}
          </span>
        </div>
      </div>
    </header>
  )
}
