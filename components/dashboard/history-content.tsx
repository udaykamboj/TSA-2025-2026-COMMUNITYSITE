"use client"

import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { useAuth } from "@/context/AuthContext"
import { programs } from "@/lib/mock-data"
import { Button } from "@/components/dashboard/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/dashboard/ui/select"
import {
  IconHistory,
  IconPrinter,
  IconClock,
  IconTrophy,
  IconCalendarEvent,
} from "@tabler/icons-react"
import Link from "next/link"

export function HistoryContent() {
  const { participationHistory } = useAppStore()
  const { user } = useAuth()
  const [filterProgram, setFilterProgram] = useState("")
  const [filterSeason, setFilterSeason] = useState("")

  const seasons = [...new Set(participationHistory.map((p) => p.season))].sort().reverse()

  const targetEmail = user?.email || "demo@example.com"
  const filteredHistory = participationHistory.filter((record) => {
    if (record.userEmail !== targetEmail) return false
    if (filterProgram && record.program !== filterProgram) return false
    if (filterSeason && record.season !== filterSeason) return false
    return true
  })

  const totalHours = filteredHistory.reduce((acc, p) => acc + p.hours, 0)
  const totalEvents = [...new Set(filteredHistory.map((p) => p.event))].length

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-secondary">My Participation History</h1>
            <p className="text-sm text-muted-foreground">
              View your complete volunteer history and hours
            </p>
          </div>
          <Button onClick={handlePrint} className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white">
            <IconPrinter className="size-4 mr-2" />
            Print History
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Summary */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-secondary mb-4">Profile Summary</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs text-muted-foreground">Name</p>
              <p className="font-semibold text-secondary">{user?.email ?? "Guest"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Volunteer Since</p>
              <p className="font-semibold text-secondary">{user?.created_at ? new Date(user.created_at).getFullYear() : "N/A"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Current Season Total Hours</p>
              <p className="font-semibold text-secondary">{totalHours}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Events</p>
              <p className="font-semibold text-secondary">{totalEvents}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <IconClock className="size-4" />
              Total Hours
            </div>
            <p className="text-2xl font-bold text-secondary">{totalHours}</p>
            <p className="text-xs text-muted-foreground">
              Across {filteredHistory.length} volunteer roles
            </p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <IconCalendarEvent className="size-4" />
              Events Attended
            </div>
            <p className="text-2xl font-bold text-secondary">{totalEvents}</p>
            <p className="text-xs text-muted-foreground">
              Unique events volunteered
            </p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <IconTrophy className="size-4" />
              Years Active
            </div>
            <p className="text-2xl font-bold text-secondary">
              {new Date().getFullYear() - (user?.created_at ? new Date(user.created_at).getFullYear() : 2024)}
            </p>
            <p className="text-xs text-muted-foreground">
              Since {user?.created_at ? new Date(user.created_at).getFullYear() : 2024}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-secondary mb-4">Filter History</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Select
                value={filterProgram}
                onValueChange={(value) => setFilterProgram(value === "all" ? "" : value)}
              >
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Select Program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Select
                value={filterSeason}
                onValueChange={(value) => setFilterSeason(value === "all" ? "" : value)}
              >
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Select Season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Seasons</SelectItem>
                  {seasons.map((season) => (
                    <SelectItem key={season} value={season}>
                      {season}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white">
              Search
            </Button>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white rounded shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-bold text-secondary">Participation Records</h2>
            <p className="text-sm text-muted-foreground">
              {filteredHistory.length} record(s) found
            </p>
          </div>

          {filteredHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f8fafc] border-b">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Program</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Season</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Event</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Event Date</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Role</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground">Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredHistory.map((record) => (
                    <tr key={record.id} className="hover:bg-[#f8fafc]">
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-muted text-secondary">
                          {record.program}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-secondary">{record.season}</td>
                      <td className="px-4 py-3 text-sm font-medium text-primary">{record.event}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{record.eventDate}</td>
                      <td className="px-4 py-3 text-sm text-secondary">{record.role}</td>
                      <td className="px-4 py-3 text-sm font-bold text-secondary text-right">{record.hours}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-[#f8fafc] border-t">
                  <tr>
                    <td colSpan={5} className="px-4 py-3 text-sm font-bold text-secondary">Total Hours</td>
                    <td className="px-4 py-3 text-sm font-bold text-primary text-right">{totalHours}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <IconHistory className="size-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary">No Records Found</h3>
              <p className="text-muted-foreground max-w-sm mx-auto mt-1">
                {filterProgram || filterSeason
                  ? "Try adjusting your filters"
                  : "Start volunteering to build your history"}
              </p>
              <Link href="/dashboard/events">
                <Button className="mt-4 bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white">
                  Find Events
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-[#e8f5e9] rounded shadow-sm p-4">
          <p className="text-sm text-secondary">
            Did you know that you can increase the impact of your volunteer hours?
            Search below to find out if your employer will match your volunteer hours.
          </p>
        </div>
      </div>
    </div>
  )
}
