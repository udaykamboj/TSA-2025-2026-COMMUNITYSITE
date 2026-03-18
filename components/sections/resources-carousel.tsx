"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { allResources, type Resource } from "@/lib/resources-data"
import { ResourceCardWrapper } from "@/components/resources/resource-card-wrapper"
import ResourceDetailModal from "@/components/resources/resource-detail-modal"
import SectionTitle from "@/components/section-title"
import { MotionSection } from "@/components/ui/motion-section"
import { staggerContainer, staggerItem } from "@/lib/animations"

export default function ResourcesCarousel() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

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
              <Link
                href="/resources"
                className="text-[var(--primary)] hover:opacity-90 font-medium text-lg underline"
              >
                View all
              </Link>
            }
          />

          <motion.div
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
