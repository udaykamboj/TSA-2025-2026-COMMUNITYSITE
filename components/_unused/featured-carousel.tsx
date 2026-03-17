"use client"

import React from "react"
import SectionTitle from '@/components/section-title'

export default function FeaturedCarousel() {
  return (

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Popular services" linkText="View all services" linkHref="/main/services" />
      </div>
    </section>
  )
}
