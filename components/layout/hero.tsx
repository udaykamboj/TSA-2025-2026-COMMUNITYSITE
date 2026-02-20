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
    <section className="relative text-white py-16 px-4 min-h-[520px] overflow-hidden">
      {/* City of Mill Creek background image */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-slate-900 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/mill-creek.png)',
        }}
      />
      {/* Blue overlay - semi-translucent so the image shows through */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-slate-900/50"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="max-w-2xl">
            <h1
              className=" mb-6 leading-tight text-balance text-[3rem] font-extra-bold italic"
              style={{
                textShadow: '2px 2px 10px rgba(0,0,0,0.6)'
              }}
            >
              Reach Your Community on Community Hub
            </h1>

            <form onSubmit={handleSearch} className="mb-8">
              <div
                className="bg-white rounded-[20px] overflow-hidden border border-gray-200 flex"
                style={{
                  boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.2)',
                  borderColor: '#ddd',
                }}
              >
                <div className="px-6 py-3.5 flex items-center bg-white">
                  <span className="text-gray-800 font-semibold text-base whitespace-nowrap">Find Resources</span>
                </div>

                <input
                  type="text"
                  placeholder="Search for..."
                  className="flex-1 px-4 py-3.5 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-[#103fef] hover:bg-blue-700 text-white font-bold px-6 sm:px-10 py-3.5 transition text-base flex items-center justify-center"
                >
                  Go!
                </button>
              </div>
              <Link href="/resources" className="text-gray-300 hover:text-white transition text-sm underline mt-3 inline-block">
                Browse all resources
              </Link>
            </form>

            {/* Quick Stats */}
            {/* <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-600">
              <div>
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-300">Resources</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">8</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Available</div>
              </div>
            </div> */}
          </div> 

          {/* Right side - Status Widget */}
          <div className="flex items-center justify-center">
            <Widget {...widgetData} />
          </div>
        </div>
      </div>
    </section>
  )
}
