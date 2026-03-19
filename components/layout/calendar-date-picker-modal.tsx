"use client"

import { useMemo, useState } from "react"
import { X, Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { upcomingEvents } from "@/lib/sample-data"
import { isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, format, isSameMonth, addMonths, subMonths } from "date-fns"
import { motion, AnimatePresence } from "framer-motion"

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export type CalendarDatePickerModalProps = {
  selectedDate: Date
  onSelectDate: (date: Date) => void
  onClose: () => void
}

export function CalendarDatePickerModal({
  selectedDate,
  onSelectDate,
  onClose,
}: CalendarDatePickerModalProps) {
  // previewDate drives the events panel — it changes on every calendar click
  // but does NOT update the parent's selectedDate until confirm/close
  const [previewDate, setPreviewDate] = useState<Date>(selectedDate)
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(selectedDate))

  const goToToday = () => {
    const today = new Date()
    setPreviewDate(today)
    setViewMonth(startOfMonth(today))
  }

  const handleConfirmAndClose = () => {
    onSelectDate(previewDate)
    onClose()
  }

  const handleDayClick = (day: Date) => {
    setPreviewDate(day)
  }

  const eventsOnPreviewDate = useMemo(() => {
    return upcomingEvents
      .filter((ev) => {
        const evDate = new Date(ev.date)
        return isSameDay(evDate, previewDate)
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [previewDate])

  const eventsWithDates = upcomingEvents.map((ev) => new Date(ev.date))
  const hasEvent = (date: Date) =>
    eventsWithDates.some((d) => isSameDay(d, date))

  const calendarDays = useMemo(() => {
    const start = startOfMonth(viewMonth)
    const end = endOfMonth(viewMonth)
    const days = eachDayOfInterval({ start, end })
    const firstDayOfWeek = start.getDay()
    const leadingEmpty = Array(firstDayOfWeek).fill(null)
    return [...leadingEmpty, ...days.map((d) => d)]
  }, [viewMonth])

  const goPrevMonth = () => setViewMonth((m) => subMonths(m, 1))
  const goNextMonth = () => setViewMonth((m) => addMonths(m, 1))

  // Check if the preview date differs from the original selected date
  const hasChanges = !isSameDay(previewDate, selectedDate)

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 flex-shrink-0 bg-slate-50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-[var(--primary)]/10">
            <CalendarIcon className="w-5 h-5 text-[var(--primary)]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Select a date</h2>
            <p className="text-sm text-slate-600">
              Pick a date to view events, then confirm to update
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToToday}
            className="border-slate-300 text-slate-700 hover:bg-slate-100"
          >
            Today
          </Button>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-md transition"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Content: Calendar + Events */}
      <div className="flex-1 overflow-hidden flex flex-col md:flex-row min-h-0">
        {/* Left: Custom calendar grid */}
        <div className="flex-shrink-0 p-4 border-b md:border-b-0 md:border-r border-slate-200 bg-white">
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={goPrevMonth}
              className="p-2 hover:bg-slate-100 rounded-md transition"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <span className="font-semibold text-slate-900 text-sm">
              {format(viewMonth, "MMMM yyyy")}
            </span>
            <button
              type="button"
              onClick={goNextMonth}
              className="p-2 hover:bg-slate-100 rounded-md transition"
              aria-label="Next month"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {WEEKDAYS.map((d) => (
              <div key={d} className="text-xs font-medium text-slate-500 py-1">
                {d}
              </div>
            ))}
            {calendarDays.map((day, i) => {
              if (day === null) {
                return <div key={`empty-${i}`} />
              }
              const isPreview = isSameDay(day, previewDate)
              const isToday = isSameDay(day, new Date())
              const isCurrentMonth = isSameMonth(day, viewMonth)
              const hasEv = hasEvent(day)
              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  onClick={() => handleDayClick(day)}
                  className={`
                    relative aspect-square min-w-[2rem] flex items-center justify-center text-sm rounded-md transition
                    ${!isCurrentMonth ? "text-slate-300" : "text-slate-900"}
                    ${isPreview ? "bg-[var(--primary)] text-white hover:bg-[var(--primary)]" : "hover:bg-slate-100"}
                    ${isToday && !isPreview ? "border-2 border-[var(--primary)] font-semibold" : ""}
                    ${hasEv && !isPreview ? "after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-[var(--primary)]" : ""}
                  `}
                >
                  {format(day, "d")}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: Events for preview date */}
        <div className="flex-1 overflow-y-auto min-h-[200px]">
          <div className="p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={previewDate.toISOString()}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {previewDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h3>
                {eventsOnPreviewDate.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CalendarIcon className="w-12 h-12 text-slate-300 mb-3" />
                    <p className="text-slate-600 font-medium">
                      No events on this date
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Select another date
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {eventsOnPreviewDate.map((event) => (
                      <li key={event.id}>
                        <div className="block p-4 rounded-xl border border-slate-200 bg-slate-50 shadow-sm relative">
                          <h4 className="font-bold text-[var(--primary)] text-base">
                            {event.title}
                          </h4>
                          <p className="text-sm text-slate-600 mt-1 line-clamp-3 leading-relaxed">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-slate-200/60 text-xs font-semibold text-slate-700">
                            <span className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-md border border-slate-200">
                              <Clock className="w-3.5 h-3.5 text-[var(--primary)]" />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-md border border-slate-200">
                              <MapPin className="w-3.5 h-3.5 text-[var(--primary)]" />
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer: Confirm button */}
      <div className="flex items-center justify-between p-4 border-t border-slate-200 bg-slate-50 flex-shrink-0">
        <p className="text-sm text-slate-500">
          {hasChanges ? (
            <>
              Selected:{" "}
              <span className="font-semibold text-slate-800">
                {previewDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </>
          ) : (
            "Click a date to preview events"
          )}
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="border-slate-300 text-slate-700 hover:bg-slate-100"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleConfirmAndClose}
            className="bg-[var(--primary)] text-white hover:opacity-90 transition-opacity gap-1.5"
          >
            <Check className="w-4 h-4" />
            {hasChanges ? "Confirm date" : "Done"}
          </Button>
        </div>
      </div>
    </div>
  )
}
