"use client"

import { useEffect, useState } from "react"

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
        className="sticky top-6 p-4 rounded-lg bg-slate-50 border border-slate-200 overflow-x-hidden min-w-0"
        aria-label="On this page"
      >
        <h2 className="font-bold text-slate-900 text-sm mb-3">
          Jump to section
        </h2>
        <ul className="space-y-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-8rem)] pr-1 scrollbar-hide">
          {sections.map((section) => {
            const isActive = activeId === section.id
            const depth = section.depth ?? 2
            const indent = depth >= 3 ? "pl-3" : ""
            return (
              <li key={section.id} className={indent}>
                <a
                  href={`#${section.id}`}
                  className={`text-sm block py-0.5 px-2 -mx-2 rounded ${
                    isActive
                      ? "text-blue-700 font-semibold bg-blue-50"
                      : "text-blue-600 hover:text-blue-700 hover:underline"
                  }`}
                >
                  {section.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
