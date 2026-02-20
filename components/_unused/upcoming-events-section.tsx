"use client"

import { upcomingEvents } from "@/lib/sample-data"
import Link from "next/link"
import { Calendar, MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useMemo, useEffect, type ReactNode } from "react"

const MONTH_ORDER = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getInitialMonthYear() {
  const now = new Date()
  return { month: MONTH_ORDER[now.getMonth()], year: now.getFullYear() }
}

export default function UpcomingEventsSection() {
  const initial = useMemo(() => getInitialMonthYear(), [])
  const [selectedMonth, setSelectedMonth] = useState(initial.month)
  const [selectedYear, setSelectedYear] = useState(initial.year)
  const [calendarKey, setCalendarKey] = useState(0)

  // All months in a range (current year - 1 through current year + 1) so every month is navigable
  const availableMonths = useMemo(() => {
    const startYear = initial.year - 1
    const endYear = initial.year + 1
    const months: { month: string; year: number }[] = []
    for (let y = startYear; y <= endYear; y++) {
      for (const month of MONTH_ORDER) {
        months.push({ month, year: y })
      }
    }
    return months
  }, [initial.year])

  const currentMonthIndex = availableMonths.findIndex(
    m => m.month === selectedMonth && m.year === selectedYear
  )

  const goToPreviousMonth = () => {
    if (currentMonthIndex > 0) {
      const prev = availableMonths[currentMonthIndex - 1]
      setSelectedMonth(prev.month)
      setSelectedYear(prev.year)
      setCalendarKey(prev => prev + 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonthIndex < availableMonths.length - 1) {
      const next = availableMonths[currentMonthIndex + 1]
      setSelectedMonth(next.month)
      setSelectedYear(next.year)
      setCalendarKey(prev => prev + 1)
    }
  }

  // Filter events by selected month
  const filteredEvents = useMemo(() => {
    return upcomingEvents.filter(
      event => event.month === selectedMonth && event.year === selectedYear
    ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [selectedMonth, selectedYear])

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Function to add event to Google Calendar
  const addToGoogleCalendar = (event: typeof upcomingEvents[0]) => {
    const startDate = new Date(event.date)
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // 2 hours duration
    
    const formatGoogleDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g, "")
    }

    const googleCalendarUrl = new URL("https://www.google.com/calendar/render")
    googleCalendarUrl.searchParams.append("action", "TEMPLATE")
    googleCalendarUrl.searchParams.append("text", event.title)
    googleCalendarUrl.searchParams.append("details", event.description)
    googleCalendarUrl.searchParams.append("location", event.location)
    googleCalendarUrl.searchParams.append("dates", `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`)
    
    window.open(googleCalendarUrl.toString(), "_blank")
  }

  // Create calendar URL that updates based on selected month
  const createCalendarUrl = () => {
    const monthNumber = MONTH_ORDER.indexOf(selectedMonth) + 1
    const monthStr = monthNumber.toString().padStart(2, '0')
    const yearStr = selectedYear.toString()
    
    // Create calendar ICS data URL with our events
    const eventsForCalendar = filteredEvents.map(event => {
      const startDate = new Date(event.date)
      const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000)
      return {
        title: event.title,
        start: startDate.toISOString().replace(/-|:|\.\d\d\d/g, ""),
        end: endDate.toISOString().replace(/-|:|\.\d\d\d/g, ""),
        description: event.description,
        location: event.location
      }
    }).map(e => 
      `&text=${encodeURIComponent(e.title)}&dates=${e.start}/${e.end}&details=${encodeURIComponent(e.description)}&location=${encodeURIComponent(e.location)}`
    ).join('')
    
    const baseUrl = "https://calendar.google.com/calendar/embed"
    const params = new URLSearchParams({
      height: "600",
      wkst: "1",
      ctz: "America/New_York",
      bgcolor: "#ffffff",
      src: "en.usa%23holiday%40group.v.calendar.google.com",
      color: "%23B1440E",
      showTitle: "0",
      showNav: "1",
      showDate: "1",
      showPrint: "0",
      showTabs: "0",
      showCalendars: "0",
      mode: "MONTH",
      dates: `${yearStr}${monthStr}01`
    })

    return `${baseUrl}?${params.toString()}`
  }

  // Listen for calendar navigation from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // This would handle messages from the calendar iframe if Google supported it
      // Currently Google Calendar embed doesn't send navigation events
    }
    
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Community Events Calendar</h2>
            <p className="text-slate-700">View upcoming events and add them to your calendar</p>
          </div>
          <Link href="/events">
            <Button variant="link" className="text-slate-900 p-0 font-semibold hover:underline">
              See All Events
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - Custom Calendar with Events */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden bg-white sticky top-4 rounded-md shadow-sm border border-slate-100">
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <Calendar size={16} />
                  {selectedMonth} {selectedYear}
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPreviousMonth}
                    disabled={currentMonthIndex === 0}
                    className="p-1 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition rounded"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={goToNextMonth}
                    disabled={currentMonthIndex === availableMonths.length - 1}
                    className="p-1 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition rounded"
                    aria-label="Next month"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              
              {/* Custom Calendar Grid */}
              <div className="p-5 bg-white flex flex-col">
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-sm font-bold text-slate-600 py-1">
                      {day}
                    </div>
                  ))}
                </div>
                {/* Fixed-height area: grid (complete shape only) + spacer below */}
                <div className="flex flex-col h-[240px] flex-shrink-0">
                  {(() => {
                    const monthNumber = MONTH_ORDER.indexOf(selectedMonth)
                    const firstDay = new Date(selectedYear, monthNumber, 1).getDay()
                    const daysInMonth = new Date(selectedYear, monthNumber + 1, 0).getDate()
                    const totalCells = firstDay + daysInMonth
                    const numRows = Math.ceil(totalCells / 7)
                    const rowHeight = 40
                    const days: ReactNode[] = []

                    // Empty cells for days before month starts
                    for (let i = 0; i < firstDay; i++) {
                      days.push(<div key={`empty-${i}`} className="flex items-center justify-center border border-transparent" />)
                    }

                    // Days of the month (no filler cells — grid ends after last day)
                    for (let day = 1; day <= daysInMonth; day++) {
                      const dateStr = `${selectedYear}-${(monthNumber + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
                      const hasEvent = upcomingEvents.some(e => e.date === dateStr)
                      const isToday = new Date().toDateString() === new Date(dateStr).toDateString()

                      days.push(
                        <div
                          key={day}
                          className={`flex items-center justify-center text-sm border transition ${
                            isToday
                              ? "bg-blue-600 text-white font-bold border-blue-700"
                              : hasEvent
                              ? "bg-blue-50 text-blue-900 font-semibold border-blue-200 cursor-pointer hover:bg-blue-100"
                              : "text-slate-700 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {day}
                        </div>
                      )
                    }

                    return (
                      <>
                        <div
                          className="grid grid-cols-7 gap-2 flex-shrink-0"
                          style={{ gridTemplateRows: `repeat(${numRows}, ${rowHeight}px)` }}
                        >
                          {days}
                        </div>
                        {/* Spacer below grid so card height stays consistent */}
                        <div className="flex-1 min-h-0 w-full" aria-hidden />
                      </>
                    )
                  })()}
                </div>

                {/* Legend — below the calendar shape and spacer */}
                <div className="mt-8 pt-5 border-t border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-50 border border-blue-200"></div>
                    <span className="text-slate-600">Has Events</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 border border-blue-700"></div>
                    <span className="text-slate-600">Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Upcoming Events List */}
          <div className="lg:col-span-3">
            <div className="mb-6 pb-4 border-b-2 border-slate-300 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {selectedMonth} {selectedYear} Events
                </h3>
                <p className="text-sm text-slate-600">
                  {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} this month
                </p>
              </div>
              
              {/* Month Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPreviousMonth}
                  disabled={currentMonthIndex === 0}
                  className="p-2 bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition rounded-md"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goToNextMonth}
                  disabled={currentMonthIndex === availableMonths.length - 1}
                  className="p-2 bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition rounded-md"
                  aria-label="Next month"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-md border border-slate-100">
                <Calendar size={48} className="mx-auto mb-4 text-slate-400" />
                <p className="text-slate-600 font-medium">No events scheduled for {selectedMonth} {selectedYear}</p>
                <p className="text-sm text-slate-500 mt-2">Check back soon for upcoming events!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-md shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Event Image */}
                      <div className="w-full md:w-32 h-32 flex-shrink-0 bg-slate-200 border border-slate-100 overflow-hidden rounded-md">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">{event.title}</h4>
                        <p className="text-sm text-slate-700 mb-3">{event.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700 mb-3">
                          <div className="flex items-start gap-2">
                            <Calendar size={16} className="flex-shrink-0 mt-0.5 text-blue-600" />
                            <span className="font-medium">{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Clock size={16} className="flex-shrink-0 mt-0.5 text-blue-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-start gap-2 md:col-span-2">
                            <MapPin size={16} className="flex-shrink-0 mt-0.5 text-blue-600" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          <button
                            onClick={() => addToGoogleCalendar(event)}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors rounded-md"
                            title="Add to Google Calendar"
                          >
                            <Calendar size={16} />
                            Add to Google Calendar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )}

            {/* View All Events CTA */}
            <div className="mt-8 text-center">
              <Link href="/events">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-semibold rounded-md">
                  View Full Events Calendar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
