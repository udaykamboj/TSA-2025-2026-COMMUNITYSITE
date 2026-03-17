"use client"

import { useAppStore } from "@/lib/store"
import { Button } from "@/components/dashboard/ui/button"
import {
  IconUsers,
  IconBuilding,
  IconClipboardList,
  IconShield,
  IconArrowRight,
  IconCheck,
  IconX,
} from "@tabler/icons-react"
import Link from "next/link"
import { toast } from "sonner"

export function AdminDashboardContent() {
  const {
    allUsers,
    organizations,
    applications,
    approveOrganization,
    rejectOrganization,
    updateApplicationStatus,
    isAdmin,
    toggleRole
  } = useAppStore()

  const pendingOrgs = organizations.filter((o) => o.status === "pending")
  const pendingApps = applications.filter((a) => a.status === "pending")

  const handleApproveOrg = (id: string) => {
    approveOrganization(id)
    toast.success("Organization approved!")
  }

  const handleRejectOrg = (id: string) => {
    rejectOrganization(id)
    toast.success("Organization rejected")
  }

  const handleApproveApp = (id: string) => {
    updateApplicationStatus(id, "assigned")
    toast.success("Application approved!")
  }

  const handleRejectApp = (id: string) => {
    updateApplicationStatus(id, "rejected")
    toast.success("Application rejected")
  }

  return (
    <div className="min-h-screen bg-[#e8eef3]">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0066b2] rounded flex items-center justify-center">
              <IconShield className="size-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1a3a5c]">Admin Dashboard</h1>
              <p className="text-sm text-[#4a5568]">
                Manage users, organizations, and applications
              </p>
            </div>
          </div>
          <Button
            onClick={toggleRole}
            variant="outline"
            className="border-[#0066b2] text-[#0066b2]"
          >
            {isAdmin ? "Switch to User View" : "Switch to Admin View"}
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#4a5568]">Total Users</span>
              <IconUsers className="size-4 text-[#0066b2]" />
            </div>
            <p className="text-2xl font-bold text-[#1a3a5c]">{allUsers.length}</p>
            <p className="text-xs text-[#4a5568]">Registered volunteers</p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#4a5568]">Organizations</span>
              <IconBuilding className="size-4 text-[#0066b2]" />
            </div>
            <p className="text-2xl font-bold text-[#1a3a5c]">{organizations.length}</p>
            <p className="text-xs text-[#e87722]">{pendingOrgs.length} pending approval</p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#4a5568]">Applications</span>
              <IconClipboardList className="size-4 text-[#0066b2]" />
            </div>
            <p className="text-2xl font-bold text-[#1a3a5c]">{applications.length}</p>
            <p className="text-xs text-[#e87722]">{pendingApps.length} pending review</p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#4a5568]">Pending Actions</span>
              <IconShield className="size-4 text-[#e87722]" />
            </div>
            <p className="text-2xl font-bold text-[#e87722]">{pendingOrgs.length + pendingApps.length}</p>
            <p className="text-xs text-[#4a5568]">Items needing attention</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Pending Organizations */}
          <div className="bg-white rounded shadow-sm">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <div>
                <h2 className="font-bold text-[#1a3a5c]">Pending Organizations</h2>
                <p className="text-sm text-[#4a5568]">Review and approve new organizations</p>
              </div>
              <Link href="/admin/organizations" className="text-sm text-[#0066b2] hover:underline flex items-center gap-1">
                View All <IconArrowRight className="size-4" />
              </Link>
            </div>
            <div className="p-4">
              {pendingOrgs.length > 0 ? (
                <div className="space-y-3">
                  {pendingOrgs.slice(0, 3).map((org) => (
                    <div key={org.id} className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <h4 className="font-semibold text-[#1a3a5c]">{org.name}</h4>
                        <p className="text-sm text-[#4a5568] line-clamp-1">
                          {org.description || "No description"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500 text-red-500 hover:bg-red-50"
                          onClick={() => handleRejectOrg(org.id)}
                        >
                          <IconX className="size-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleApproveOrg(org.id)}
                        >
                          <IconCheck className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[#4a5568] py-8">
                  No pending organizations
                </p>
              )}
            </div>
          </div>

          {/* Pending Applications */}
          <div className="bg-white rounded shadow-sm">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <div>
                <h2 className="font-bold text-[#1a3a5c]">Pending Applications</h2>
                <p className="text-sm text-[#4a5568]">Review volunteer applications</p>
              </div>
              <Link href="/admin/applications" className="text-sm text-[#0066b2] hover:underline flex items-center gap-1">
                View All <IconArrowRight className="size-4" />
              </Link>
            </div>
            <div className="p-4">
              {pendingApps.length > 0 ? (
                <div className="space-y-3">
                  {pendingApps.slice(0, 3).map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <h4 className="font-semibold text-[#1a3a5c]">{app.eventName}</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {app.roles.slice(0, 2).map((role) => (
                            <span key={role} className="text-xs bg-[#e8eef3] text-[#1a3a5c] px-2 py-0.5 rounded">
                              {role}
                            </span>
                          ))}
                          {app.roles.length > 2 && (
                            <span className="text-xs bg-[#e8eef3] text-[#1a3a5c] px-2 py-0.5 rounded">
                              +{app.roles.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500 text-red-500 hover:bg-red-50"
                          onClick={() => handleRejectApp(app.id)}
                        >
                          <IconX className="size-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleApproveApp(app.id)}
                        >
                          <IconCheck className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[#4a5568] py-8">
                  No pending applications
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Recent Users */}
        <div className="bg-white rounded shadow-sm">
          <div className="px-6 py-4 border-b flex items-center justify-between">
            <div>
              <h2 className="font-bold text-[#1a3a5c]">Recent Users</h2>
              <p className="text-sm text-[#4a5568]">Recently registered volunteers</p>
            </div>
            <Link href="/admin/users" className="text-sm text-[#0066b2] hover:underline flex items-center gap-1">
              View All <IconArrowRight className="size-4" />
            </Link>
          </div>
          <div className="p-4 space-y-3">
            {allUsers.slice(0, 5).map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0066b2] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{user.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a3a5c]">{user.name}</h4>
                    <p className="text-sm text-[#4a5568]">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-0.5 rounded ${user.role === "admin"
                    ? "bg-[#0066b2] text-white"
                    : "bg-[#e8eef3] text-[#1a3a5c]"
                    }`}>
                    {user.role}
                  </span>
                  <p className="text-xs text-[#4a5568] mt-1">
                    {user.totalHours} hours
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
