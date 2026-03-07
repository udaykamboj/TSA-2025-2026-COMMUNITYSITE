"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import Dither from "@/components/Dither"
import Widget from "@/components/widget"
import { Button } from "@/components/ui/button"
import { upcomingEvents, latestNews } from "@/lib/sample-data"

type HeroProps = {
  onSelectDateClick?: () => void
}

export default function Hero({ onSelectDateClick }: HeroProps = {}) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      window.location.href = `/resources?search=${encodeURIComponent(searchTerm)}`
    }
  }

  const widgetData = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const upcoming = upcomingEvents
      .filter((ev) => {
        const d = new Date(ev.date)
        d.setHours(0, 0, 0, 0)
        return d >= today
      })
      .slice(0, 5)
      .map((ev) => ({
        id: String(ev.id),
        icon: "CalendarDays" as const,
        title: ev.title,
        status: ev.date ? new Date(ev.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : null,
        color: "blue" as const,
        showBadge: true,
        href: `/main/events/${ev.slug}`,
      }))

    const highlight = latestNews[0]
    return {
      date: new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date()),
      highlightLink: highlight ? { text: highlight.title, href: highlight.link } : null,
      showSelect: true,
      onSelectDateClick,
      items: upcoming,
    }
  }, [onSelectDateClick])

  return (
    <section className="relative text-white py-20 lg:py-32 px-4 min-h-[520px] overflow-hidden">
      {/* City of Mill Creek background image */}
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
          <div className="max-w-2xl">
            <h1 className="mb-8 leading-tight text-white drop-shadow-xl !font-black !text-5xl lg:!text-6xl">
              Reach Your Community on Community Hub
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
                  className="box-button-primary !px-8 sm:!px-10 ml-2 shadow-md hover:shadow-lg"
                >
                  Go!
                </button>
              </div>
              <Link href="/resources" className="text-gray-300 hover:text-white font-bold transition text-sm underline mt-4 inline-block drop-shadow-md">
                Browse all resources
              </Link>
            </form>
          </div>

          {/* Right side - Status Widget */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md shadow-2xl rounded-[var(--radius-xl)] bg-background/95 backdrop-blur-md overflow-hidden text-foreground">
              <Widget {...widgetData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
