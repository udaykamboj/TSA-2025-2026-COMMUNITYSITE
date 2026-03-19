"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Widget from "@/components/widget"
import { upcomingEvents } from "@/lib/sample-data"
import { newsConfig } from "@/lib/content/news-config"
import { isSameDay, isAfter } from "date-fns"

type HeroProps = {
  selectedDate?: Date
  onSelectDateClick?: () => void
}

export default function Hero({ selectedDate: selectedDateProp, onSelectDateClick }: HeroProps = {}) {
  const [searchTerm, setSearchTerm] = useState("")
  const selectedDate = selectedDateProp ?? new Date()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      window.location.href = `/resources?search=${encodeURIComponent(searchTerm)}`
    }
  }

  const widgetData = useMemo(() => {
    const sel = new Date(selectedDate)
    sel.setHours(0, 0, 0, 0)

    // Show events on the selected date first, then upcoming from that date
    const onSelectedDate = upcomingEvents.filter((ev) =>
      isSameDay(new Date(ev.date), sel)
    )
    const upcomingFromSelected = upcomingEvents
      .filter((ev) => isAfter(new Date(ev.date), sel))
      .slice(0, Math.max(0, 5 - onSelectedDate.length))

    const itemsToShow = [...onSelectedDate, ...upcomingFromSelected].slice(0, 5)

    const upcoming = itemsToShow.map((ev) => ({
        id: String(ev.id),
        icon: "CalendarDays" as const,
        title: ev.title,
        status: ev.date ? new Date(ev.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : null,
        color: "blue" as const,
        showBadge: true,
      }))

    const highlight = newsConfig[0]
    return {
      date: new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(selectedDate),
      highlightLink: highlight ? { text: highlight.title, href: `/main/news/${highlight.slug}` } : null,
      showSelect: true,
      onSelectDateClick,
      items: upcoming,
    }
  }, [selectedDate, onSelectDateClick])

  return (
    <section className="relative text-white py-20 lg:py-32 px-4 min-h-[520px] overflow-hidden">
      {/* Community background image */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-slate-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/mill-creek.png)' }}
      />
      {/* Dark overlay so the image shows through but text remains legible */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-black/60"
      />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="mb-8 leading-tight text-white drop-shadow-xl !font-black !text-5xl lg:!text-6xl">
              Find your local support on the Mill Creek Community Hub
            </h1>

            <form onSubmit={handleSearch} className="mb-8 max-w-xl">
              <div className="flex items-center bg-background rounded-full p-2 pl-6 shadow-2xl border border-border/10 focus-within:ring-4 focus-within:ring-[var(--primary)]/30 transition-shadow">
                <span className="text-foreground font-bold whitespace-nowrap mr-3 hidden sm:block">Find Resources</span>
                <input
                  type="text"
                  placeholder="Search for..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder-gray-500 font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="box-button-primary !rounded-full !px-8 sm:!px-10 ml-2 shadow-md hover:shadow-lg"
                >
                  Go!
                </button>
              </div>
              <Link href="/resources" className="text-gray-300 hover:text-white font-bold transition text-sm underline mt-4 inline-block drop-shadow-md">
                Browse all resources
              </Link>
            </form>
          </motion.div>

          {/* Right side - Status Widget */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full max-w-md shadow-2xl rounded-[20px] bg-background overflow-hidden text-foreground">
              <Widget {...widgetData} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
