

"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SectionTitle from "@/components/section-title"
import { MotionSection } from "@/components/ui/motion-section"
import { staggerContainer, staggerItem } from "@/lib/animations"

// Sample data
const benefitPrograms = [
  {

    id: 1,
    title: "Food Assistance",
    description: "Meals, groceries, and nutritional support for families and seniors"
  },
  {
    id: 2,
    title: "Housing Support",
    description: "Emergency housing, rental assistance, and permanent housing programs."
  },
  {
    id: 3,
    title: "Healthcare Services",
    description: "Free and low-cost medical, dental, and mental health services."
  },
  {
    id: 4,
    title: "Youth Programs",
    description: "Job training, mentoring, education, and recreational activities."
  }
]

export default function BenefitProgramsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <MotionSection className="py-24 bg-card">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionTitle title="Benefit Programs for You" linkText="See More" linkHref="/main/services" pbClass="" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left info card */}
          <motion.aside
            className="md:col-span-1 border border-slate-200 p-8 md:p-12 shadow-sm bg-white flex flex-col items-center text-center"
            variants={staggerItem}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-primary text-white font-playfair text-3xl font-bold mb-8">
              ?
            </div>
            <div>
              <h4 className="font-playfair text-2xl font-bold text-secondary mb-4 leading-snug">
                Still Have Questions?
              </h4>
              <p className="font-poppins text-gray-600 text-sm leading-relaxed mb-8">
                We're here to help you navigate our services. Feel free to get in touch with us today.
              </p>
            </div>

            <div className="mt-auto w-full">
              <Link
                href="/main/services"
                className="box-button w-full block text-center py-4 text-sm tracking-widest font-bold"
              >
                Ask A Question
              </Link>
            </div>
          </motion.aside>

          {/* Right accordion list */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              {benefitPrograms.map((program) => (
                <motion.div
                  key={program.id}
                  className="bg-white border border-slate-200 overflow-hidden transition-all duration-300"
                  variants={staggerItem}
                  whileHover={{ y: -2 }}
                >
                  <button
                    onClick={() => toggleExpand(program.id)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-playfair font-bold text-xl text-secondary">
                      {program.title}
                    </span>
                    <ChevronDown
                      className="transition-transform duration-300 text-primary"
                      style={{
                        width: '24px',
                        height: '24px',
                        transform: expandedId === program.id ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </button>

                  <div
                    className={`px-8 transition-all duration-300 overflow-hidden ${expandedId === program.id ? 'max-h-96 pb-8 border-t border-slate-100 pt-6' : 'max-h-0 py-0'}`}
                  >
                    <p className="font-poppins text-gray-600 leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <Link
                      href="/main/services"
                      className="box-button-primary text-sm px-6 py-3 tracking-widest"
                    >
                      Check Eligibility
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </MotionSection>
  )
}
