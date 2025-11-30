"use client"

import { popularServices } from "@/lib/sample-data"
import Link from "next/link"
import { Button } from "./ui/button"
import { ClipboardList, AlertTriangle, CreditCard, Calendar, MapPin, Briefcase, CalendarDays, Scale } from "lucide-react"

// Icon mapping
const iconMap = {
  ClipboardList,
  AlertTriangle,
  CreditCard,
  Calendar,
  MapPin,
  Briefcase,
  CalendarDays,
  Scale,
} as const

export default function PopularServicesSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center">
          <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Popular Services</h2>
          <p className="text-slate-700">Quick access to most-used city services</p>
        </div>
          <Link href="/services">
            <Button variant="link" className="text-slate-900 p-0 font-semibold hover:underline">
              See All Services
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularServices.map((service) => (
            <button
              key={service.id}
              className="bg-white border-2 border-slate-900 hover:bg-slate-900 transition-all overflow-hidden group flex flex-col"
            >
              {/* Teal header bar */}
              <div className="bg-blue-600 h-3 w-full group-hover:bg-blue-500 transition-colors"></div>
              
              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center flex-1">
                {(() => {
                  const Icon = iconMap[service.icon as keyof typeof iconMap]
                  return Icon ? <Icon className="w-12 h-12 mb-4 text-blue-600 group-hover:text-white transition-colors" /> : null
                })()}
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-white leading-tight transition-colors">
                  {service.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
