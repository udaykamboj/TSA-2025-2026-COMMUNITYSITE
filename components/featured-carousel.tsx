"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeaturedResource {
  id: string
  name: string
  category: string
  description: string
  shortDescription: string
  address: string
  phone: string
  website: string
  image: string
  tags: string[]
  ageGroups: string[]
  hours: string
  whyImportant: string
}

const featuredResources: FeaturedResource[] = [
  {
    id: "1",
    name: "Downtown Community Center",
    category: "Youth Programs",
    description: "Offering comprehensive after-school programs, sports, arts, and mentoring for youth ages 6-18.",
    shortDescription: "Resource of the Month",
    address: "123 Main Street, Downtown",
    phone: "(206) 555-0100",
    website: "www.dtcc.org",
    image: "/placeholder.svg?key=carousel1",
    tags: ["Youth", "Sports", "Arts", "Free"],
    ageGroups: ["Teens", "Families"],
    hours: "Mon-Fri 3pm-8pm, Sat 10am-6pm",
    whyImportant:
      "This center serves over 500 youth annually, providing safe spaces for learning, recreation, and community building. They focus on underserved neighborhoods.",
  },
  {
    id: "2",
    name: "City Food Bank",
    category: "Food",
    description:
      "Emergency food assistance and nutrition programs providing fresh groceries and meal support for residents in need.",
    shortDescription: "Featured Organization",
    address: "456 Oak Avenue",
    phone: "(206) 555-0101",
    website: "www.cityfoodbank.org",
    image: "/placeholder.svg?key=carousel2",
    tags: ["Food", "Free", "Emergency"],
    ageGroups: ["Families", "Seniors"],
    hours: "Mon-Sat 9am-5pm",
    whyImportant:
      "Distributed over 2 million meals last year and serves as a critical resource for food-insecure families in our community.",
  },
  {
    id: "3",
    name: "Community Mental Health Services",
    category: "Mental Health",
    description:
      "Professional counseling, therapy, and crisis support services available for all ages with sliding scale fees.",
    shortDescription: "Upcoming Event Highlight",
    address: "789 Pine Street",
    phone: "(206) 555-0102",
    website: "www.cmhs.org",
    image: "/placeholder.svg?key=carousel3",
    tags: ["Mental Health", "Counseling", "Support"],
    ageGroups: ["Teens", "Families", "Seniors"],
    hours: "Mon-Fri 8am-6pm, Sat 10am-4pm",
    whyImportant:
      "Expanded their services this year to include peer support groups and crisis hotline available 24/7 for emergencies.",
  },
]

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredResources.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredResources.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredResources.length) % featuredResources.length)
    setAutoPlay(false)
  }

  const current = featuredResources[currentIndex]

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Featured Resources</h2>
          <p className="text-gray-600">Spotlight on organizations making a difference</p>
        </div>

        <div className="relative">
          <div className="bg-white border-4 border-slate-900 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-96">
              {/* Image Side */}
              <div className="bg-slate-200 relative overflow-hidden">
                <img
                  src={current.image || "/placeholder.svg"}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-6">
                  <div>
                    <span className="inline-block bg-slate-900 text-white px-4 py-2 text-sm font-semibold mb-2">
                      {current.shortDescription}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="inline-block bg-slate-100 text-slate-900 px-3 py-1 text-xs font-bold mb-3 uppercase tracking-wide border border-slate-300">
                      Featured
                    </span>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{current.name}</h3>
                    <p className="text-slate-700 font-semibold text-lg">{current.category}</p>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed text-base">{current.description}</p>

                  <div className="bg-slate-50 border-2 border-slate-700 p-4 mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Why it's important:</p>
                    <p className="text-sm text-gray-700">{current.whyImportant}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white text-slate-700 px-2 py-1 border border-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-6 pb-6 border-b-2 border-slate-300 pt-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-foreground">Hours:</span> {current.hours}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-foreground">Phone:</span>{" "}
                    <a href={`tel:${current.phone}`} className="text-slate-700 hover:underline font-semibold">
                      {current.phone}
                    </a>
                  </p>
                </div>

                {/* CTA Button */}
                <Link href={`/resources/${current.id}`} className="w-full">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                    View Full Resource
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Indicator Dots and Bottom Navigation */}
          <div className="flex flex-col items-center gap-4 mt-8">
            {/* Navigation Buttons at Bottom */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="bg-slate-900 text-white p-3 hover:bg-slate-800 transition flex items-center justify-center border-2 border-slate-900"
                aria-label="Previous featured resource"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots in the middle */}
              <div className="flex gap-3">
                {featuredResources.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx)
                      setAutoPlay(false)
                    }}
                    className={`transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 h-3 bg-slate-900 border-2 border-slate-900"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400 border border-gray-400"
                    }`}
                    aria-label={`Go to featured resource ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="bg-slate-900 text-white p-3 hover:bg-slate-800 transition flex items-center justify-center border-2 border-slate-900"
                aria-label="Next featured resource"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Auto-play Resume Hint */}
          {!autoPlay && (
            <button
              onClick={() => setAutoPlay(true)}
              className="mt-4 text-center w-full text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Resume auto-play
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
