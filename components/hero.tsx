"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import Widget from "./widget"
import Dither from "./Dither"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      window.location.href = `/resources?search=${encodeURIComponent(searchTerm)}`
    }
  }

  // Simple JSON-driven widget configuration
  const widgetData: any = {
    date: 'Monday, January 19, 2026',
    highlightLink: { text: 'Martin Luther King Jr. Day service changes', href: '#' },
    showSelect: true,
    items: [
      { icon: 'Car', title: 'Alternate side parking', status: 'Suspended', color: 'blue', showBadge: true },
      { icon: 'Trash2', title: 'Trash, recycling, and compost collection', status: 'Suspended', color: 'blue', showBadge: true },
      { icon: 'BookOpen', title: 'Public schools', status: 'Closed', color: 'blue', showBadge: true },
      { icon: 'Bus', title: 'Check transit alerts', status: null, color: 'black', showBadge: false },
    ],
  }

  return (
    <section className="relative bg-slate-900 text-white py-16 px-4 min-h-[520px]">
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, zIndex: 0 }} className="pointer-events-none">
        {/* <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        /> */}
      </div>
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
              Reach Your Community on Resource Hub
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
