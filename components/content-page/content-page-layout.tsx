"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { staggerContainer, staggerItem } from "@/lib/animations"
import MarkdownContent from "./markdown-content"
import InfoBox from "./info-box"
import JumpToSection from "./jump-to-section"
import type { PageConfig } from "@/lib/content/types"
import type { HeadingEntry } from "@/lib/content/extract-headings"

interface ContentPageLayoutProps {
  config: PageConfig
  content: string
  /** Table-of-contents entries derived from content headings. Falls back to config.sections when empty. */
  sections?: HeadingEntry[]
}

export default function ContentPageLayout({
  config,
  content,
  sections: sectionsProp,
}: ContentPageLayoutProps) {
  const { title, breadcrumb, callToAction, heroImage, sections: configSections, infoBox } =
    config
  const sections = (sectionsProp && sectionsProp.length > 0)
    ? sectionsProp
    : configSections.map((s) => ({ id: s.id, title: s.title, depth: 2 }))

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-white overflow-x-hidden">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb */}
          <motion.div variants={staggerItem}>
            <Link
              href={breadcrumb.href}
              className="inline-block text-blue-600 hover:text-blue-700 text-sm font-medium mb-4"
            >
              ← {breadcrumb.label}
            </Link>
          </motion.div>

          {/* Hero: title + optional CTA + optional image */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <motion.div className="flex-1" variants={staggerItem}>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {title}
              </h1>
              {callToAction && (
                <Link
                  href={callToAction.href}
                  className="inline-flex items-center justify-center rounded-lg font-semibold text-white transition-colors hover:opacity-90 px-5 py-2.5 text-base"
                  style={{ backgroundColor: "#0d28ff" }}
                >
                  {callToAction.label}
                </Link>
              )}
            </motion.div>
            {heroImage && (
              <motion.div className="flex-shrink-0 w-full md:w-48 aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-100" variants={staggerItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </div>

          {/* Two-column: Jump to section (left) + content (right) */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            <JumpToSection sections={sections} />

            {/* Main content - right column */}
            <motion.div className="flex-1 min-w-0 order-2" variants={staggerItem}>
              <MarkdownContent content={content} />

              {infoBox && (
                <div className="mt-8">
                  <InfoBox title={infoBox.title}>
                    {infoBox.body ?? ""}
                  </InfoBox>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
