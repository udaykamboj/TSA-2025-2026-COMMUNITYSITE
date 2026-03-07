'use client'

import Link from "next/link";
import { LayoutDashboard, Users, FileText, Settings, LogOut, ArrowRightLeft } from "lucide-react";
import { AuthProvider } from "@/context/AuthContext";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-950 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 flex flex-col border-r bg-white dark:bg-slate-900 shadow-sm">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <LayoutDashboard className="w-5 h-5 text-indigo-600" />
                        My App
                    </h2>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                    <Link href="/dashboard/user" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors">
                        <UserIcon /> User Dashboard
                    </Link>
                    <Link href="/dashboard/admin" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors">
                        <ShieldIcon /> Admin Panel
                    </Link>
                    <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Internal Views</p>
                        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <ArrowRightLeft className="w-4 h-4" /> Role Switcher
                        </Link>
                    </div>
                </nav>

                <div className="p-4 border-t">
                    <button className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex justify-center overflow-y-auto">
                <div className="w-full max-w-6xl p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}

function UserIcon() {
    return <Users className="w-4 h-4" />;
}

function ShieldIcon() {
    return <Settings className="w-4 h-4" />;
}
