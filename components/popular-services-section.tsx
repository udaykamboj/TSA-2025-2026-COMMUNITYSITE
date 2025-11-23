"use client"

import { popularServices } from "@/lib/sample-data"
import Link from "next/link"
import { Button } from "./ui/button"

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularServices.map((service) => (
            <button
              key={service.id}
              className="bg-white p-6 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all text-left group"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-white transition-colors">
                {service.name}
              </h3>
              <p className="text-xs text-slate-600 mt-1 group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
