"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Hero from "@/components/layout/hero"
import UpcomingEventsSection from "@/components/_unused/upcoming-events-section"

export default function HeroWithEvents() {
  const [isEventsOpen, setIsEventsOpen] = useState(false)

  return (
    <>
      <Hero onSelectDateClick={() => setIsEventsOpen(true)} />
      {isEventsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/10"
          onClick={() => setIsEventsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Community Events Calendar"
        >
          <div
            className="bg-white w-full max-w-7xl max-h-[85vh] overflow-hidden flex flex-col rounded-lg shadow-xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 flex-shrink-0">
              <h2 className="text-lg font-semibold text-slate-900">Select date</h2>
              <button
                type="button"
                onClick={() => setIsEventsOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 min-h-0">
              <UpcomingEventsSection />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
