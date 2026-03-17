"use client"

import { useAppStore } from "@/lib/store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  IconBuilding,
  IconCheck,
  IconX,
  IconArrowLeft,
  IconClock,
} from "@tabler/icons-react"
import Link from "next/link"
import { toast } from "sonner"

export function AdminOrganizationsContent() {
  const { organizations, approveOrganization, rejectOrganization } = useAppStore()

  const pendingOrgs = organizations.filter((o) => o.status === "pending")
  const approvedOrgs = organizations.filter((o) => o.status === "approved")
  const rejectedOrgs = organizations.filter((o) => o.status === "rejected")

  const handleApprove = (id: string) => {
    approveOrganization(id)
    toast.success("Organization approved!")
  }

  const handleReject = (id: string) => {
    rejectOrganization(id)
    toast.success("Organization rejected")
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500 text-white"><IconCheck className="size-3 mr-1" /> Approved</Badge>
      case "pending":
        return <Badge variant="secondary"><IconClock className="size-3 mr-1" /> Pending</Badge>
      case "rejected":
        return <Badge variant="destructive"><IconX className="size-3 mr-1" /> Rejected</Badge>
      default:
        return null
    }
  }

  return (
    <div className="px-4 lg:px-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/admin" className="flex items-center gap-1">
            <IconArrowLeft className="size-4" />
            Back to Admin
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Organization Management</h1>
          <p className="text-muted-foreground">
            Review and manage organization applications
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{organizations.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingOrgs.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{approvedOrgs.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Organizations */}
      {pendingOrgs.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Approval</CardTitle>
            <CardDescription>Organizations waiting for review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingOrgs.map((org) => (
                <div key={org.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                      <IconBuilding className="size-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{org.name}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {org.description || "No description provided"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Submitted: {org.createdAt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button variant="outline" onClick={() => handleReject(org.id)}>
                      <IconX className="size-4 mr-1" /> Reject
                    </Button>
                    <Button onClick={() => handleApprove(org.id)}>
                      <IconCheck className="size-4 mr-1" /> Approve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Organizations Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Organizations</CardTitle>
          <CardDescription>{organizations.length} organization(s)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Organization</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {organizations.map((org) => (
                  <TableRow key={org.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-muted">
                          <IconBuilding className="size-4 text-muted-foreground" />
                        </div>
                        <div>
                          <span className="font-medium">{org.name}</span>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {org.description || "No description"}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(org.status)}</TableCell>
                    <TableCell>
                      <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                        {org.code}
                      </code>
                    </TableCell>
                    <TableCell>{org.memberCount}</TableCell>
                    <TableCell>{org.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
