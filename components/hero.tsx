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
              <div className="flex gap-0 mb-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search by service (e.g., 'food', 'housing', 'jobs')"
                    className="w-full px-5 py-3 border-2 border-slate-700 bg-slate-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 border-2 border-slate-700 h-auto"
                >
                  Search
                </Button>
              </div>
              <Link href="/resources" className="text-gray-300 hover:text-white transition flex items-center gap-2">
                Browse all resources
                <ArrowRight className="w-4 h-4" />
              </Link>
            </form>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-600">
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
            </div>
          </div>

          {/* Right side - Simple box */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full border-4 border-slate-700 bg-slate-800 p-12 text-center">
              <div className="text-6xl mb-6">IMAGE HERE</div>
              <p className="text-2xl font-bold mb-2">cool image here</p>
              <p className="text-gray-300">i love the images here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
