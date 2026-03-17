"use client"

import { governmentUpdates } from "@/lib/sample-data"
import { Button } from "@/components/ui/button"

export default function GovernmentUpdatesSection() {
  return (
    <section className="bg-slate-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">What's New From City Government?</h2>
        <p className="text-gray-200 mb-12">Important updates and announcements you should know about</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {governmentUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white text-slate-900 border-2 border-slate-400 overflow-hidden hover:border-slate-600 transition-all"
            >
              <div className="aspect-video bg-slate-200 overflow-hidden">
                <img
                  src={update.image || "/placeholder.svg"}
                  alt={update.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-slate-600 mb-2">{update.date}</p>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{update.title}</h3>
                <p className="text-xs text-slate-700 mb-3">{update.subtitle}</p>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs py-1 border border-slate-900">
                  {update.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
