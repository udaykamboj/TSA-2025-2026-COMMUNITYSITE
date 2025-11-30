"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      window.location.href = `/resources?search=${encodeURIComponent(searchTerm)}`
    }
  }

  return (
    <section className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              Find the Community Resources You Need
            </h1>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Access comprehensive information about local services, programs, and support. From food assistance to
              youth programs, job training to housing support—find what you need.
            </p>

            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex items-stretch">
                <div className="bg-white px-6 py-3.5 border-2 border-r-0 border-gray-300 flex items-center">
                  <span className="text-gray-800 font-semibold text-base whitespace-nowrap">Find Resources</span>
                </div>
                <input
                  type="text"
                  placeholder="Search for..."
                  className="flex-1 px-4 py-3.5 border-2 border-l-0 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-300 text-base shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3.5 transition text-base shadow-sm"
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

          {/* Right side - Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full h-[500px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop"
                alt="Community helping hands together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
