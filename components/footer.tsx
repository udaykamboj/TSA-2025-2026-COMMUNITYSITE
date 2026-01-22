"use client"

import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const columns: { title: string; items: string[] }[] = [
    {
      title: "Explore",
      items: ["Browse resources", "Submit a resource", "Featured services", "Events", "Latest news"],
    },
    {
      title: "Get Involved",
      items: ["Volunteer", "Partner with us", "Donate", "Careers"],
    },
    {
      title: "About",
      items: ["Accessibility", "Privacy policy", "Terms of use", "Website feedback", "Help & FAQ"],
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="md:w-1/4">
            <h2 className="text-lg font-semibold">More on Community Resource Hub</h2>
            <p className="text-sm text-gray-300 mt-2 hidden md:block">Connecting residents to local services and support.</p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:block md:w-3/4">
            <div className="grid grid-cols-3 gap-6">
              {columns.map((col, i) => (
                <ul key={i} className="space-y-2">
                  <li className="text-sm font-semibold text-gray-100 pb-1">{col.title}</li>
                  {col.items.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm font-normal text-gray-200 hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Mobile accordion */}
          <div className="md:hidden w-full">
            <div className="space-y-2">
              {columns.map((col, i) => (
                <div key={i} className="border-t border-slate-700 pt-2">
                  <button
                    className="w-full flex items-center justify-between text-left text-sm font-medium text-gray-100 py-2"
                    aria-expanded={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span>{col.title}</span>
                    <span className="text-gray-300">{openIndex === i ? '−' : '+'}</span>
                  </button>
                  {openIndex === i && (
                    <ul className="mt-2 space-y-1">
                      {col.items.map((link) => (
                        <li key={link}>
                          <Link href="#" className="block py-2 text-sm font-normal text-gray-200">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-t border-slate-700 my-6 opacity-60" />

        <div className="text-center text-gray-300 text-sm">
          © Community Resource Hub. 2026 All rights reserved.
        </div>
      </div>
    </footer>
  )
}
