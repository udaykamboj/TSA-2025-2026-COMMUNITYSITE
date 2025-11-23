"use client"
import { ArrowRight } from "react-feather"
import Link from "next/link"

const stats = [
  {
    number: "100+",
    label: "Resources Listed",
    description: "Comprehensive directory of vetted community services",
    icon: "📋",
  },
  {
    number: "8",
    label: "Service Categories",
    description: "From food to employment assistance",
    icon: "🏷️",
  },
  {
    number: "50+",
    label: "Community Partners",
    description: "Organizations dedicated to serving residents",
    icon: "🤝",
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Crisis services and emergency assistance anytime",
    icon: "⏰",
  },
]

export default function StatisticsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Community Impact</h2>
          <p className="text-slate-700">Making a difference through accessible resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white border-2 border-slate-300 overflow-hidden p-8 hover:border-slate-500 transition"
            >
              <div className="relative">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="mb-3">
                  <div className="text-4xl font-bold text-foreground">{stat.number}</div>
                  <p className="text-sm font-semibold text-slate-700 mt-1 uppercase tracking-wide border-b-2 border-slate-300 pb-2">
                    {stat.label}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Ready to find the resources you need?</p>
          <Link href="/resources">
            <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-semibold transition border-2 border-slate-900">
              Explore All Resources
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
