"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export interface JumpSection {
  id: string
  title: string
  depth?: number
}

interface JumpToSectionProps {
  sections: JumpSection[]
}

export default function JumpToSection({ sections }: JumpToSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null)

  useEffect(() => {
    if (sections.length === 0) return

    const updateActive = () => {
      const offset = 120
      let current: string | null = null
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= offset) current = section.id
      }
      if (current) setActiveId(current)
      else if (sections.length) setActiveId(sections[0].id)
    }

    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    return () => window.removeEventListener("scroll", updateActive)
  }, [sections])

  return (
    <aside className="md:w-52 lg:w-56 flex-shrink-0 order-1" aria-label="Jump to section sidebar">
      <nav
        className="sticky top-[100px] p-4 rounded-lg bg-slate-50 border border-slate-200 overflow-x-hidden min-w-0"
        aria-label="On this page"
      >
        <h2 className="font-bold text-slate-900 text-xl tracking-tight mb-4 border-b border-slate-200 pb-2">
          Jump to step
        </h2>
        <motion.ul
          className="space-y-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-8rem)] pr-1 scrollbar-hide"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section) => {
            const isActive = activeId === section.id
            const depth = section.depth ?? 2
            const indent = depth >= 3 ? "pl-3" : ""
            const match = section.title.match(/^(\d+)\.\s*(.*)/)
            const isStep = !!match
            const num = match ? match[1] : ""
            const titleWithoutNum = match ? match[2] : section.title
            
            return (
              <motion.li key={section.id} className={indent} variants={staggerItem}>
                <a
                  href={`#${section.id}`}
                  className={`text-base flex items-start gap-3 py-2 px-3 tracking-wide rounded-r-lg transition-colors ${
                    isActive
                      ? "text-primary font-bold bg-primary/5 border-l-4 border-primary"
                      : "text-slate-600 font-medium hover:text-secondary hover:bg-slate-100 border-l-4 border-transparent"
                  }`}
                >
                  {isStep && (
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${isActive ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                      {num}
                    </span>
                  )}
                  <span>{titleWithoutNum}</span>
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </nav>
    </aside>
  )
}
