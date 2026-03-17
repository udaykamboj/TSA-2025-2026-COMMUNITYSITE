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
  IconClipboardList,
  IconCheck,
  IconX,
  IconArrowLeft,
  IconClock,
} from "@tabler/icons-react"
import Link from "next/link"
import { toast } from "sonner"

export function AdminApplicationsContent() {
  const { applications, updateApplicationStatus } = useAppStore()

  const pendingApps = applications.filter((a) => a.status === "pending")
  const assignedApps = applications.filter((a) => a.status === "assigned")
  const rejectedApps = applications.filter((a) => a.status === "rejected")

  const handleApprove = (id: string) => {
    updateApplicationStatus(id, "assigned")
    toast.success("Application approved!")
  }

  const handleReject = (id: string) => {
    updateApplicationStatus(id, "rejected")
    toast.success("Application rejected")
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "assigned":
        return <Badge className="bg-green-500 text-white"><IconCheck className="size-3 mr-1" /> Assigned</Badge>
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
          <h1 className="text-2xl font-bold tracking-tight">Application Management</h1>
          <p className="text-muted-foreground">
            Review and manage volunteer applications
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
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingApps.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Assigned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{assignedApps.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Applications */}
      {pendingApps.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Review</CardTitle>
            <CardDescription>Applications waiting for approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingApps.map((app) => (
                <div key={app.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                      <IconClipboardList className="size-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{app.eventName}</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {app.roles.map((role) => (
                          <Badge key={role} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {app.datesAvailable.length} day(s) available | Applied: {app.appliedAt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button variant="outline" onClick={() => handleReject(app.id)}>
                      <IconX className="size-4 mr-1" /> Reject
                    </Button>
                    <Button onClick={() => handleApprove(app.id)}>
                      <IconCheck className="size-4 mr-1" /> Approve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Applications</CardTitle>
          <CardDescription>{applications.length} application(s)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Roles</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Days Available</TableHead>
                  <TableHead>Applied</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.eventName}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {app.roles.slice(0, 2).map((role) => (
                          <Badge key={role} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                        {app.roles.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{app.roles.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(app.status)}</TableCell>
                    <TableCell>{app.datesAvailable.length}</TableCell>
                    <TableCell>{app.appliedAt}</TableCell>
                    <TableCell>
                      {app.status === "pending" && (
                        <div className="flex items-center gap-1">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="size-8"
                            onClick={() => handleReject(app.id)}
                          >
                            <IconX className="size-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="size-8"
                            onClick={() => handleApprove(app.id)}
                          >
                            <IconCheck className="size-4" />
                          </Button>
                        </div>
                      )}
                    </TableCell>
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
