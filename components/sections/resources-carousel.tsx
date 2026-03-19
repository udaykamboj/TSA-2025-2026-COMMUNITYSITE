"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { allResources, type Resource } from "@/lib/resources-data"
import { ResourceCardWrapper } from "@/components/resources/resource-card-wrapper"
import ResourceDetailModal from "@/components/resources/resource-detail-modal"
import SectionTitle from "@/components/section-title"
import { MotionSection } from "@/components/ui/motion-section"
import { staggerContainer, staggerItem } from "@/lib/animations"

const SCROLL_AMOUNT = 364 // ~card width + gap-6

export default function ResourcesCarousel() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const tolerance = 2
    setAtStart(scrollLeft <= tolerance)
    setAtEnd(scrollLeft >= scrollWidth - clientWidth - tolerance)
  }, [])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener("scroll", updateScrollState)
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    return () => {
      el.removeEventListener("scroll", updateScrollState)
      ro.disconnect()
    }
  }, [updateScrollState])

  const scrollBy = (direction: "left" | "right") => {
    const el = carouselRef.current
    if (!el) return
    const amount = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  const handleCardClick = (resource: Resource) => {
    setSelectedResource(resource)
    setModalOpen(true)
  }

  return (
    <>
      <MotionSection className="py-20 bg-gray-50" style={{ overflow: "visible" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Community Resources"
            pbClass="pb-8"
            rightNode={
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <button
                    aria-label="Scroll left"
                    onClick={() => !atStart && scrollBy("left")}
                    disabled={atStart}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${
                      atStart
                        ? "border border-gray-200 text-gray-300 cursor-default opacity-50"
                        : "border border-gray-400 text-gray-600 hover:bg-gray-100 hover:border-gray-500"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    aria-label="Scroll right"
                    onClick={() => !atEnd && scrollBy("right")}
                    disabled={atEnd}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${
                      atEnd
                        ? "border border-gray-200 text-gray-300 cursor-default opacity-50"
                        : "border border-gray-400 text-gray-600 hover:bg-gray-100 hover:border-gray-500"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <Link
                  href="/resources"
                  className="text-[var(--primary)] hover:opacity-90 font-medium text-lg underline"
                >
                  View all
                </Link>
              </div>
            }
          />

          <motion.div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {allResources.map((resource) => (
              <motion.div key={resource.id} variants={staggerItem} className="flex-shrink-0">
                <ResourceCardWrapper
                  resource={resource}
                  onClick={() => handleCardClick(resource)}
                  variant="carousel"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      <ResourceDetailModal
        resource={selectedResource}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}
