"use client"

import { useState } from "react"
import { events, programs, usStates } from "@/lib/mock-data"
import { Button } from "@/components/dashboard/ui/button"
import { Input } from "@/components/dashboard/ui/input"
import { Label } from "@/components/dashboard/ui/label"
import { Checkbox } from "@/components/dashboard/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/dashboard/ui/select"
import {
  IconArrowLeft,
} from "@tabler/icons-react"
import Link from "next/link"

export function EventsContent() {
  const [filters, setFilters] = useState({
    programs: [] as string[],
    country: "United States",
    state: "Washington",
    zip: "",
    fromDate: "",
    toDate: "",
  })

  const filteredEvents = events.filter((event) => {
    if (filters.programs.length > 0 && !filters.programs.includes(event.program)) return false
    if (filters.state && event.state !== "WA") return false
    return true
  })

  const clearFilters = () => {
    setFilters({
      programs: [],
      country: "United States",
      state: "",
      zip: "",
      fromDate: "",
      toDate: "",
    })
  }

  const toggleProgram = (program: string) => {
    setFilters((prev) => ({
      ...prev,
      programs: prev.programs.includes(program)
        ? prev.programs.filter((p) => p !== program)
        : [...prev.programs, program],
    }))
  }

  // Get color for program header
  const getProgramHeaderColor = (program: string) => {
    if (program.includes("Robotics Competition")) return "bg-[#e87722]"
    if (program.includes("Tech Challenge")) return "bg-[#e87722]"
    if (program.includes("Challenge")) return "bg-[#e87722]"
    if (program.includes("Explore")) return "bg-[#009cde]"
    return "bg-[#e87722]"
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header Banner */}
      <div className="relative h-16 bg-gradient-to-r from-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-xl font-bold text-white tracking-wide">SEARCH FOR AN EVENT</h1>
        </div>
      </div>

      <div className="px-6 py-4">
        {/* Back Link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1 text-primary hover:underline text-sm mb-4"
        >
          <IconArrowLeft className="size-4" />
          Back to Dashboard
        </Link>

        {/* Info Text */}
        <p className="text-sm text-muted-foreground mb-6 text-center max-w-4xl mx-auto">
          {"Don't see an event in your area? Click here to "}
          <Link href="#" className="text-primary hover:underline">
            Apply to a Program
          </Link>
          {". This option will allow you to complete your volunteer registration information, youth protection screening, and indicate your interest in volunteering at local events. Check back often for new events!"}
        </p>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 shrink-0">
            <div className="bg-white rounded shadow-sm">
              <div className="p-4 flex items-center justify-between border-b">
                <h2 className="text-lg font-semibold text-secondary">Event Filters</h2>
                <Button
                  onClick={clearFilters}
                  className="bg-primary hover:bg-[#386109] text-white px-4 py-1.5 text-sm"
                >
                  CLEAR FILTERS
                </Button>
              </div>

              {/* Programs Section */}
              <div className="p-4 border-b">
                <h3 className="text-sm font-semibold text-secondary mb-3">Program(s)</h3>
                <div className="space-y-2">
                  {programs.map((program) => (
                    <label
                      key={program}
                      className={`flex items-center gap-3 p-2.5 border rounded cursor-pointer transition-colors ${filters.programs.includes(program)
                          ? "border-[#e87722] bg-[#fff8f3]"
                          : "border-gray-300 hover:border-[#e87722]"
                        }`}
                    >
                      <Checkbox
                        checked={filters.programs.includes(program)}
                        onCheckedChange={() => toggleProgram(program)}
                        className="border-gray-400 data-[state=checked]:bg-[#e87722] data-[state=checked]:border-[#e87722]"
                      />
                      <span className="text-sm text-secondary">
                        <span className="italic">FIRST</span>
                        <sup className="text-[10px]">®</sup>{" "}
                        {program.replace("FIRST ", "")}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location Section */}
              <div className="p-4 border-b">
                <h3 className="text-sm font-semibold text-secondary mb-3">Location</h3>
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1 block">Country</Label>
                    <Select
                      value={filters.country}
                      onValueChange={(value) => setFilters({ ...filters, country: value })}
                    >
                      <SelectTrigger className="w-full border-gray-300">
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="United States">United States</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1 block">State</Label>
                    <Select
                      value={filters.state}
                      onValueChange={(value) => setFilters({ ...filters, state: value })}
                    >
                      <SelectTrigger className="w-full border-gray-300">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        {usStates.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1 block">Zip / Postal Code</Label>
                    <Input
                      placeholder="Zip Code / Postal Code"
                      value={filters.zip}
                      onChange={(e) => setFilters({ ...filters, zip: e.target.value })}
                      className="border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Date Section */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-secondary mb-3">Date</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1 block">From</Label>
                    <Input
                      type="date"
                      value={filters.fromDate}
                      onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
                      className="border-gray-300 text-sm"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1 block">To</Label>
                    <Input
                      type="date"
                      value={filters.toDate}
                      onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
                      className="border-gray-300 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">
              {filteredEvents.length} Event(s) located
            </p>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded shadow-sm overflow-hidden flex flex-col">
                  {/* Colored Header */}
                  <div className={`${getProgramHeaderColor(event.program)} text-white px-4 py-3 text-center`}>
                    <p className="text-sm font-semibold">{event.program}</p>
                    <p className="text-sm font-bold">{event.name}</p>
                  </div>

                  {/* Event Details */}
                  <div className="p-4 flex-1 space-y-3">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground font-semibold">EVENT LOCATION:</p>
                      <p className="text-sm text-secondary">{event.location}</p>
                      <p className="text-sm text-secondary">{event.city}, {event.state}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground font-semibold">EVENT DATE(S):</p>
                      <p className="text-sm text-secondary">
                        {new Date(event.startDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })} - {new Date(event.endDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground font-semibold">SET UP DATE:</p>
                      <p className="text-sm text-secondary">{event.setupDate ?? "TBA"}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground font-semibold">TEAR DOWN DATE:</p>
                      <p className="text-sm text-secondary">{event.teardownDate ?? "TBA"}</p>
                    </div>
                  </div>

                  {/* Volunteer Button */}
                  <div className="p-4 pt-0">
                    <Link href={`/dashboard/events/${event.id}`}>
                      <Button className="w-full bg-primary hover:bg-[#386109] text-white font-semibold">
                        VOLUNTEER
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="bg-white rounded shadow-sm p-12 text-center">
                <p className="text-muted-foreground">No events found matching your criteria.</p>
                <Button onClick={clearFilters} variant="outline" className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
