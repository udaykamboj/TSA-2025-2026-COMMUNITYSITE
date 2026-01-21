"use client"

import { benefitPrograms } from "@/lib/sample-data"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from '@/components/section-title'

export default function BenefitProgramsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Benefit Programs for You" linkText="See More" linkHref="/main/services" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left info card (static card styling like featured/services) */}
          <aside className="md:col-span-1">
            <div
              className="p-6 h-full"
              style={{
                backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                border: '2px solid #ddd',
                borderRadius: '8px',
                boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.12)',
                boxSizing: 'border-box'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#e6e6e6] flex items-center justify-center text-slate-700 bg-white">?</div>
                <div>
                  <h4 className="clash-grotesk text-lg font-semibold">Still Have Questions?</h4>
                  <p className="text-sm text-slate-600 mt-2">Still have questions? Feel free to get in touch with us today!</p>
                </div>
              </div>

              <div className="mt-6">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">Ask A Question</Button>
              </div>
            </div>
          </aside>

          {/* Right accordion list */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              {benefitPrograms.map((program) => (
                <div
                  key={program.id}
                  className="overflow-hidden"
                  style={{
                    backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.06)',
                    boxSizing: 'border-box'
                  }}
                >
                  <button
                    onClick={() => toggleExpand(program.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-white"
                  >
                    <span className="font-medium text-[1.25rem]" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>{program.title}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedId === program.id ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedId === program.id && (
                    <div className="px-6 pb-6 pt-0 bg-white">
                      <p className="text-slate-700 mb-4 leading-relaxed">{program.description}</p>
                      <Button className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold">Check Eligibility</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
