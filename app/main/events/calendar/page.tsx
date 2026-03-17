"use client"

import { useMemo, useState } from "react"
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import { format, parse, startOfWeek, getDay } from "date-fns"
import { enUS } from "date-fns/locale"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { eventsConfig } from "@/lib/content/events-config"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./calendar-styles.css"

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { "en-US": enUS },
})

function parseEventDateTime(dateStr: string, timeStr: string): { start: Date; end: Date } {
  const [startTime, endTime] = timeStr.split(" - ").map((s) => s.trim())
  const start = parse(`${dateStr} ${startTime}`, "yyyy-MM-dd h:mm a", new Date())
  const end = parse(`${dateStr} ${endTime}`, "yyyy-MM-dd h:mm a", new Date())
  return { start, end }
}

// Default to April 2026 (first month with events) so events are visible immediately
const DEFAULT_DATE = new Date(2026, 3, 1)

export default function EventsCalendarPage() {
  const [date, setDate] = useState<Date>(DEFAULT_DATE)
  const [view, setView] = useState<"month" | "agenda">("month")

  const handleViewChange = (newView: string) => {
    if (newView === "month" || newView === "agenda") setView(newView)
  }

  const events = useMemo(() => {
    return eventsConfig.map((ev) => {
      const { start, end } = parseEventDateTime(ev.date, ev.time)
      return {
        title: ev.title,
        start,
        end,
        resource: { slug: ev.slug, location: ev.location },
      }
    })
  }, [])

  const EventComponent = ({ event }: { event: (typeof events)[0] }) => (
    <Link
      href={`/main/events/${event.resource.slug}`}
      className="rbc-event-link"
      onClick={(e) => e.stopPropagation()}
    >
      {event.title}
    </Link>
  )

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Events Calendar</h1>
          <p className="text-lg text-slate-700">
            Browse community events by date. Click an event to view details.
          </p>
        </div>
        <div className="calendar-page-wrapper">
          <Calendar
            localizer={localizer}
            events={events}
            date={date}
            onNavigate={setDate}
            view={view}
            onView={handleViewChange}
            defaultView="month"
            views={["month", "agenda"]}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            eventPropGetter={() => ({
              style: {
                backgroundColor: "#103fef",
                borderRadius: "4px",
                color: "#fff",
              },
            })}
            components={{
              event: EventComponent,
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
