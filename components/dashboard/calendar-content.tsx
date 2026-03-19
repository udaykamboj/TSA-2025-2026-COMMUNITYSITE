"use client"

import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { events } from "@/lib/mock-data"
import { Button } from "@/components/dashboard/ui/button"
import {
  IconChevronLeft,
  IconChevronRight,
  IconCalendarEvent,
  IconMapPin,
} from "@tabler/icons-react"
import Link from "next/link"

export function CalendarContent() {
  const { applications } = useAppStore()
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)) // February 2026

  // Get assigned event IDs
  const assignedEventIds = applications
    .filter((a) => a.status === "assigned")
    .map((a) => a.eventId)

  // Get all events with their dates
  const eventsByDate = new Map<string, typeof events>()
  events.forEach((event) => {
    const start = new Date(event.startDate)
    const end = new Date(event.endDate)
    const current = new Date(start)

    while (current <= end) {
      const dateKey = current.toISOString().split("T")[0]
      const existing = eventsByDate.get(dateKey) || []
      if (!existing.find((e) => e.id === event.id)) {
        eventsByDate.set(dateKey, [...existing, event])
      }
      current.setDate(current.getDate() + 1)
    }
  })

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const handleToday = () => {
    setCurrentDate(new Date())
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDayOfWeek = firstDay.getDay()
    const daysInMonth = lastDay.getDate()

    const days: (number | null)[] = []

    // Add empty cells for days before the first of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  const days = generateCalendarDays()
  const monthYear = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getEventsForDay = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return eventsByDate.get(dateStr) || []
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-secondary">Calendar</h1>
            <p className="text-sm text-muted-foreground">
              View and manage your volunteer events
            </p>
          </div>
          <Link href="/dashboard/events">
            <Button className="bg-primary hover:bg-[#386109] text-white">
              Find Events
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded shadow-sm overflow-hidden">
          {/* Calendar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-lg font-bold text-secondary">{monthYear}</h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevMonth}
                className="border-gray-300"
              >
                <IconChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleToday}
                className="border-gray-300 px-4"
              >
                Today
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextMonth}
                className="border-gray-300"
              >
                <IconChevronRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7">
            {/* Weekday Headers */}
            {weekDays.map((day) => (
              <div
                key={day}
                className="py-3 text-center text-sm font-semibold text-muted-foreground border-b bg-[#f8fafc]"
              >
                {day}
              </div>
            ))}

            {/* Calendar Days */}
            {days.map((day, index) => {
              const eventsForDay = day ? getEventsForDay(day) : []
              const isToday = day &&
                new Date().getDate() === day &&
                new Date().getMonth() === currentDate.getMonth() &&
                new Date().getFullYear() === currentDate.getFullYear()

              return (
                <div
                  key={index}
                  className={`min-h-[120px] border-b border-r p-2 ${day ? "bg-white" : "bg-[#f8fafc]"
                    }`}
                >
                  {day && (
                    <>
                      <div className={`text-sm mb-1 ${isToday
                          ? "bg-[#e87722] text-white w-7 h-7 rounded-full flex items-center justify-center font-bold"
                          : "text-muted-foreground"
                        }`}>
                        {day}
                      </div>
                      <div className="space-y-1">
                        {eventsForDay.slice(0, 3).map((event) => (
                          <Link
                            key={event.id}
                            href={`/dashboard/events/${event.id}`}
                            className="block text-primary hover:underline"
                          >
                            <div className={`text-xs px-2 py-1 rounded truncate ${assignedEventIds.includes(event.id)
                                ? "bg-primary text-primary-foreground font-semibold"
                                : "bg-primary/10 text-secondary"
                              }`}>
                              {event.name}
                            </div>
                          </Link>
                        ))}
                        {eventsForDay.length > 3 && (
                          <div className="text-xs text-muted-foreground px-2">
                            +{eventsForDay.length - 3} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="px-6 py-3 border-t bg-[#f8fafc] flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#fef3c7]" />
              <span className="text-sm text-muted-foreground">Available Events</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary" />
              <span className="text-sm text-muted-foreground">Your Assigned Events</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="mt-6 bg-white rounded shadow-sm">
          <div className="px-6 py-4 border-b">
            <h3 className="font-bold text-secondary">Upcoming Events This Month</h3>
          </div>
          <div className="p-4 space-y-3">
            {events
              .filter((e) => {
                const eventDate = new Date(e.startDate)
                return (
                  eventDate.getMonth() === currentDate.getMonth() &&
                  eventDate.getFullYear() === currentDate.getFullYear()
                )
              })
              .slice(0, 5)
              .map((event) => (
                <Link
                  key={event.id}
                  href={`/dashboard/events/${event.id}`}
                  className="flex items-start gap-3 p-3 border rounded hover:border-primary transition-colors"
                >
                  <div className={`w-1 h-full self-stretch rounded ${assignedEventIds.includes(event.id) ? "bg-primary" : "bg-secondary"
                    }`} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-secondary">{event.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <IconCalendarEvent className="size-3" />
                      {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <IconMapPin className="size-3" />
                      {event.city}, {event.state}
                    </div>
                  </div>
                  {assignedEventIds.includes(event.id) && (
                    <span className="text-xs bg-primary text-secondary px-2 py-0.5 rounded font-semibold">
                      Assigned
                    </span>
                  )}
                </Link>
              ))}
            {events.filter((e) => {
              const eventDate = new Date(e.startDate)
              return (
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear()
              )
            }).length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No events this month
                </p>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
