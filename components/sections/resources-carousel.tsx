"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { allResources } from "@/lib/resources-data"
import { ResourceCardWrapper } from "@/components/resources/resource-card-wrapper"
import SectionTitle from "@/components/section-title"
import { MotionSection } from "@/components/ui/motion-section"
import { staggerContainer, staggerItem } from "@/lib/animations"

export default function ResourcesCarousel() {
  const router = useRouter()

  return (
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {allResources.map((resource) => (
            <motion.div key={resource.id} variants={staggerItem}>
              <ResourceCardWrapper
                resource={resource}
                onClick={() => router.push(`/resources/${resource.id}`)}
                variant="grid"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
