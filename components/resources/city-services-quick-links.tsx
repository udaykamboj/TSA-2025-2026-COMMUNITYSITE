"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Car, FileText, Heart, ChevronRight } from "lucide-react"
import { categorySummaries } from "@/lib/content/category-summaries"
import { staggerContainer, staggerItem } from "@/lib/animations"

const categoryIcons: Record<string, typeof Car> = {
  "city-services": Car,
  "licenses-permits": FileText,
  "support-resources": Heart,
}

export default function CityServicesQuickLinks() {
  const summaries = Object.values(categorySummaries)

  return (
    <section className="mb-10 rounded-lg border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-6 md:p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-2">
        Mill Creek Services & Permits
      </h2>
      <p className="text-slate-600 mb-6 max-w-2xl">
        Find permits, licenses, city services, and support programs. Each category
        has a summary page with quick actions, a service carousel, and links to
        detailed guides.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {summaries.map((summary) => {
          const Icon = categoryIcons[summary.slug] ?? FileText
          const href = summary.slug === "support-resources" ? "/resources" : `/main/${summary.slug}`
          const isResources = summary.slug === "support-resources"
          return (
            <motion.div key={summary.slug} variants={staggerItem} whileHover={{ y: -4 }}>
            <Link
              href={href}
              className="group flex flex-col rounded-lg border-2 border-slate-200 bg-white p-6 hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-slate-100 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors mb-4">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-[var(--primary)] transition-colors mb-2">
                {summary.title}
              </h3>
              <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
                {summary.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
                {isResources ? "Browse resources" : `View ${summary.serviceSlugs.length} services`}
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
