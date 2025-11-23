"use client"

import { benefitPrograms } from "@/lib/sample-data"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BenefitProgramsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-12 px-4 md:px-8 bg-white border-slate-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Benefit Programs for You</h2>
          <p className="text-slate-700">
            You may be eligible for help with food, money, housing, or work. Click any program below to learn more.
          </p>
        </div>

        <div className="space-y-3">
          {benefitPrograms.map((program) => (
            <div key={program.id} className="border-2 border-slate-900 bg-white">
              {/* Header - always visible and clickable */}
              <button
                onClick={() => toggleExpand(program.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition font-semibold text-slate-900"
              >
                <span className="text-left text-lg">{program.title}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-900 transition-transform ${
                    expandedId === program.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expanded content */}
              {expandedId === program.id && (
                <div className="border-t-2 border-slate-300 px-6 py-4 bg-slate-50">
                  <p className="text-slate-700 mb-4 leading-relaxed">{program.description}</p>
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 text-sm font-semibold border-2 border-slate-900">
                    Check Eligibility
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-8 border-t-2 border-slate-300 pt-8">
          <p className="text-slate-700 mb-4">
            Not sure which programs you qualify for? Use our eligibility checker to find out.
          </p>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-semibold border-2 border-slate-900">
            Check Your Eligibility
          </Button>
        </div>
      </div>
    </section>
  )
}
