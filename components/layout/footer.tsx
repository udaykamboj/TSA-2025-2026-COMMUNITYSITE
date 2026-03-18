"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { animateFadeUp } from "@/lib/animations"

type FooterLink = string | { label: string; href: string }

function getLinkHref(link: FooterLink): string {
  return typeof link === "string" ? "#" : link.href
}

function getLinkLabel(link: FooterLink): string {
  return typeof link === "string" ? link : link.label
}

export default function Footer() {
  const columns: { title: string; items: FooterLink[] }[] = [
    {
      title: "Explore",
      items: [
        { label: "Browse resources", href: "/resources" },
        { label: "Submit a resource", href: "/submit" },
        { label: "Featured services", href: "/main/services" },
        { label: "Events", href: "/main/events/calendar" },
        { label: "Latest news", href: "/main/news" },
      ],
    },
    {
      title: "Get Involved",
      items: [
        { label: "Volunteer", href: "/main/services" },
        { label: "Partner with us", href: "/main/services" },
        { label: "Donate", href: "/main/services" },
        { label: "Careers", href: "/main/services" },
      ],
    },
    {
      title: "About",
      items: ["Accessibility", "Privacy policy", "Terms of use", "Website feedback", "Help & FAQ"],
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <motion.footer
      className="text-white"
      style={{
        background: "#0a3c00",
        fontFamily: '"Poppins", Verdana, sans-serif',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={animateFadeUp}
    >
      <div className="max-w-[90rem] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:w-1/4">
            <h2
              className="text-lg font-semibold tracking-wide uppercase"
              style={{ color: "#fff", letterSpacing: "0.04em" }}
            >
              The City of Maplewood
            </h2>
            <p className="mt-2 hidden md:block" style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" }}>
              Connecting residents to local services and support through our Community Resource Hub.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:block md:w-3/4">
            <div className="grid grid-cols-3 gap-8">
              {columns.map((col, i) => (
                <ul key={i} className="space-y-2">
                  <li
                    className="text-sm font-semibold pb-2 uppercase tracking-wide"
                    style={{ color: "#9bc730" }}
                  >
                    {col.title}
                  </li>
                  {col.items.map((link) => (
                    <li key={getLinkLabel(link)}>
                      <Link
                        href={getLinkHref(link)}
                        className="text-sm font-normal transition-colors duration-200 text-white/88 hover:text-[#9bc730]"
                      >
                        {getLinkLabel(link)}
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
                <div key={i} className="pt-3" style={{ borderTop: "1px solid rgba(155,199,48,0.3)" }}>
                  <button
                    className="w-full flex items-center justify-between text-left text-sm font-medium py-2"
                    style={{ color: "#fff" }}
                    aria-expanded={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span>{col.title}</span>
                    <span style={{ color: "#9bc730" }}>{openIndex === i ? '−' : '+'}</span>
                  </button>
                  {openIndex === i && (
                    <ul className="mt-2 space-y-1">
                      {col.items.map((link) => (
                        <li key={getLinkLabel(link)}>
                          <Link
                            href={getLinkHref(link)}
                            className="block py-2 text-sm font-normal"
                            style={{ color: "rgba(255,255,255,0.88)" }}
                          >
                            {getLinkLabel(link)}
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

        <hr className="my-8" style={{ borderColor: "rgba(155,199,48,0.35)", borderTopWidth: "1px" }} />

        <div
          className="text-center text-sm"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          © The City of Maplewood · Community Resource Hub · 2026
        </div>
      </div>
    </motion.footer>
  )
}
