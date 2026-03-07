import { ShieldCheck, Users, Activity, AlertTriangle, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
    const supabase = await createClient();

    // We'll attempt to fetch users from a custom "profiles" table with efficient column selection (.select('id, name, role, status, created_at')).
    // Best Practice: Avoid .select('*') to minimize data transfer size. Use React Server Components to fetch this data securely on the backend without exposing keys.
    let usersData = [];
    try {
        const { data, error } = await supabase
            .from("profiles")
            .select("id, name, role, status, created_at")
            .limit(50); // Optimization: Always paginate or cap results!

        if (!error && data) {
            usersData = data;
        }
    } catch (err) {
        console.error("Profiles table might not exist yet:", err);
    }

    // Fallback to dummy data if DB isn't fully configured yet
    const displayUsers = usersData.length > 0 ? usersData : [
        { id: '1', name: "Alice Smith", role: "Contributor", status: "Active", created_at: "2024-01-12" },
        { id: '2', name: "Bob Johnson", role: "Moderator", status: "Active", created_at: "2023-11-05" },
        { id: '3', name: "Charlie Davis", role: "User", status: "Suspended", created_at: "2024-02-28" },
        { id: '4', name: "Diana Prince", role: "User", status: "Active", created_at: "2024-03-01" },
    ];

    const statCards = [
        { title: "Total Users", value: "1,248", icon: <Users className="w-6 h-6 text-indigo-500" />, trend: "+12%" },
        { title: "Active Sessions", value: "43", icon: <Activity className="w-6 h-6 text-green-500" />, trend: "-2%" },
        { title: "Pending Reports", value: "8", icon: <AlertTriangle className="w-6 h-6 text-amber-500" />, trend: "+1" },
        { title: "System Status", value: "Healthy", icon: <CheckCircle className="w-6 h-6 text-emerald-500" />, trend: "99.9% Uptime" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-rose-500" /> Administrative Dashboard
                    </h1>
                    <p className="text-slate-500 mt-2">Manage the platform, users, and overall system health.</p>
                </div>
                <button className="px-5 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Generate Report
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : stat.trend.startsWith('-') ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <h3 className="text-slate-500 text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* User Management Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-950/50">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Users className="w-5 h-5 text-indigo-500" /> Global User Directory
                    </h2>
                    <button className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-900 text-slate-500 text-sm">
                                <th className="p-4 font-semibold border-b border-slate-200 dark:border-slate-800">Name</th>
                                <th className="p-4 font-semibold border-b border-slate-200 dark:border-slate-800">Role</th>
                                <th className="p-4 font-semibold border-b border-slate-200 dark:border-slate-800">Status</th>
                                <th className="p-4 font-semibold border-b border-slate-200 dark:border-slate-800">Joined</th>
                                <th className="p-4 border-b border-slate-200 dark:border-slate-800"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {displayUsers.map(user => (
                                <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="p-4 font-medium text-slate-900 dark:text-slate-100">{user.name}</td>
                                    <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">{user.role}</td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${user.status === 'Active'
                                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-slate-500">
                                        {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 text-sm font-medium">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
