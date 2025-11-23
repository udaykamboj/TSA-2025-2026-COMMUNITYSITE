"use client"

import { upcomingEvents } from "@/lib/sample-data"
import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function UpcomingEventsSection() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 10, 22))

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const days = Array.from({ length: getDaysInMonth(selectedDate) }, (_, i) => i + 1)
  const firstDay = getFirstDayOfMonth(selectedDate)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => null)

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Upcoming Events</h2>
          <Link href="/events">
            <button className="box-button-view-all">View all events</button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 border-2 border-slate-900 p-4">
            <div className="text-center mb-4">
              <h3 className="font-bold text-sm text-slate-900">
                {selectedDate.toLocaleString("default", { month: "long", year: "numeric" })}
              </h3>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-xs font-bold text-slate-900 py-2">
                  {day}
                </div>
              ))}
              {emptyDays.map((_, i) => (
                <div key={`empty-${i}`}></div>
              ))}
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
                  className={`text-center py-2 text-sm font-semibold cursor-pointer border transition ${
                    day === selectedDate.getDate()
                      ? "bg-slate-900 text-white border-2 border-slate-900"
                      : "hover:border-2 hover:border-slate-900 text-slate-900 border border-gray-300"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Events grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-2 border-slate-900 p-4 hover:bg-slate-50 transition">
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{event.title}</h3>
                  <p className="text-xs text-slate-700 mb-3 line-clamp-2">{event.description}</p>

                  <div className="space-y-2 text-xs text-slate-700 mb-3">
                    <div className="flex items-start gap-2">
                      <Calendar size={14} className="flex-shrink-0 mt-0.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={14} className="flex-shrink-0 mt-0.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {event.tags.map((tag) => (
                      <span key={tag} className="tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/events/${event.id}`}>
                    <button className="box-button-primary w-full">Learn More</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
