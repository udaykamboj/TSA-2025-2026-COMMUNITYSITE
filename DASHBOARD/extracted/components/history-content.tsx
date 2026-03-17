"use client"

import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { programs } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  IconHistory,
  IconPrinter,
  IconClock,
  IconTrophy,
  IconCalendarEvent,
} from "@tabler/icons-react"
import Link from "next/link"

export function HistoryContent() {
  const { user, participationHistory } = useAppStore()
  const [filterProgram, setFilterProgram] = useState("")
  const [filterSeason, setFilterSeason] = useState("")

  const seasons = [...new Set(participationHistory.map((p) => p.season))].sort().reverse()
  
  const filteredHistory = participationHistory.filter((record) => {
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
    <div className="min-h-screen bg-[#e8eef3]">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#1a3a5c]">My Participation History</h1>
            <p className="text-sm text-[#4a5568]">
              View your complete volunteer history and hours
            </p>
          </div>
          <Button onClick={handlePrint} className="bg-[#0066b2] hover:bg-[#005091] text-white">
            <IconPrinter className="size-4 mr-2" />
            Print History
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Summary */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#1a3a5c] mb-4">Profile Summary</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs text-[#4a5568]">Name</p>
              <p className="font-semibold text-[#1a3a5c]">{user?.name ?? "Guest"}</p>
            </div>
            <div>
              <p className="text-xs text-[#4a5568]">Volunteer Since</p>
              <p className="font-semibold text-[#1a3a5c]">{user?.volunteerSince ?? "N/A"}</p>
            </div>
            <div>
              <p className="text-xs text-[#4a5568]">Current Season Total Hours</p>
              <p className="font-semibold text-[#1a3a5c]">{totalHours}</p>
            </div>
            <div>
              <p className="text-xs text-[#4a5568]">Total Events</p>
              <p className="font-semibold text-[#1a3a5c]">{totalEvents}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-[#4a5568] text-sm mb-1">
              <IconClock className="size-4" />
              Total Hours
            </div>
            <p className="text-2xl font-bold text-[#1a3a5c]">{totalHours}</p>
            <p className="text-xs text-[#4a5568]">
              Across {filteredHistory.length} volunteer roles
            </p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-[#4a5568] text-sm mb-1">
              <IconCalendarEvent className="size-4" />
              Events Attended
            </div>
            <p className="text-2xl font-bold text-[#1a3a5c]">{totalEvents}</p>
            <p className="text-xs text-[#4a5568]">
              Unique events volunteered
            </p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-[#4a5568] text-sm mb-1">
              <IconTrophy className="size-4" />
              Years Active
            </div>
            <p className="text-2xl font-bold text-[#1a3a5c]">
              {new Date().getFullYear() - (user?.volunteerSince ?? 2022)}
            </p>
            <p className="text-xs text-[#4a5568]">
              Since {user?.volunteerSince ?? 2022}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#1a3a5c] mb-4">Filter History</h2>
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
            <Button className="bg-[#0066b2] hover:bg-[#005091] text-white">
              Search
            </Button>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white rounded shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-bold text-[#1a3a5c]">Participation Records</h2>
            <p className="text-sm text-[#4a5568]">
              {filteredHistory.length} record(s) found
            </p>
          </div>
          
          {filteredHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f8fafc] border-b">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a5568]">Program</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a5568]">Season</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a5568]">Event</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a5568]">Event Date</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a5568]">Role</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-[#4a5568]">Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredHistory.map((record) => (
                    <tr key={record.id} className="hover:bg-[#f8fafc]">
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#e8eef3] text-[#1a3a5c]">
                          {record.program}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#1a3a5c]">{record.season}</td>
                      <td className="px-4 py-3 text-sm font-medium text-[#0066b2]">{record.event}</td>
                      <td className="px-4 py-3 text-sm text-[#4a5568]">{record.eventDate}</td>
                      <td className="px-4 py-3 text-sm text-[#1a3a5c]">{record.role}</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#1a3a5c] text-right">{record.hours}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-[#f8fafc] border-t">
                  <tr>
                    <td colSpan={5} className="px-4 py-3 text-sm font-bold text-[#1a3a5c]">Total Hours</td>
                    <td className="px-4 py-3 text-sm font-bold text-[#0066b2] text-right">{totalHours}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <IconHistory className="size-12 text-[#4a5568] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#1a3a5c]">No Records Found</h3>
              <p className="text-[#4a5568] max-w-sm mx-auto mt-1">
                {filterProgram || filterSeason
                  ? "Try adjusting your filters"
                  : "Start volunteering to build your history"}
              </p>
              <Link href="/events">
                <Button className="mt-4 bg-[#0066b2] hover:bg-[#005091] text-white">
                  Find Events
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-[#fef3c7] rounded shadow-sm p-4">
          <p className="text-sm text-[#1a3a5c]">
            Did you know that you can increase the impact of your volunteer hours? 
            Search below to find out if your employer will match your volunteer hours.
          </p>
        </div>
      </div>
    </div>
  )
}
