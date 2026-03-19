"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Zap, ChevronRight } from "lucide-react"

const CITY_SERVICES = [
  { slug: "parking-or-camera-tickets", title: "Parking or Camera Tickets" },
  { slug: "street-cleaning-schedule", title: "Street Cleaning Schedule" },
  { slug: "report-pothole-or-street-issue", title: "Report a Pothole" },
  { slug: "get-rid-of-waste", title: "Get Rid of Waste" },
  { slug: "noise-complaint", title: "Noise Complaint" },
  { slug: "snap-benefits", title: "SNAP Benefits" },
  { slug: "rent-increase-help", title: "Rent Increase Help" },
  { slug: "voter-registration", title: "Voter Registration" },
  { slug: "apartment-complaint", title: "Apartment Complaint" },
  { slug: "birth-certificates", title: "Birth Certificates" },
]

export default function ServicesHero({ count }: { count: number }) {
  return (
    <motion.section
      className="relative rounded-2xl overflow-hidden p-8 md:p-10 mb-10"
      style={{
        background: "linear-gradient(135deg, #2E7D52 0%, #4cc388 100%)",
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative z-10 text-white">

        <h1 className="text-3xl font-bold md:text-4xl mb-3 drop-shadow-sm">
          Mill Creek Services
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mb-6">
          Streets, parking, waste, housing, benefits, and more — find what you need for everyday city services.
        </p>
        <div className="flex flex-wrap gap-2">
          {CITY_SERVICES.slice(0, 8).map((svc) => (
            <Link
              key={svc.slug}
              href={`/main/${svc.slug}`}
              className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              {svc.title}
              <ChevronRight className="h-3.5 w-3.5 opacity-70" />
            </Link>
          ))}
          {count > 8 && (
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80">
              +{count - 8} more
            </span>
          )}
        </div>
      </div>

    </motion.section>
  )
}
