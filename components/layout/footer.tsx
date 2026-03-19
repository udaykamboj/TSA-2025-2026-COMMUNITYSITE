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
        { label: "Submit a resource", href: "/dashboard/organizations/submit" },
        { label: "Featured services", href: "/main/services" },
        { label: "Latest news", href: "/main/news" },
      ],
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  /** Tight backdrop blur hugging text only (no full-width “frame”) */
  const textBackdrop =
    "border border-white/15 bg-white/10 shadow-[0_8px_44px_-10px_rgba(15,31,25,0.28)] backdrop-blur-md"

  return (
    <motion.footer
      className="relative overflow-hidden px-4 text-[#0f1f19] sm:px-6"
      style={{ fontFamily: '"Poppins", Verdana, sans-serif' }}
      initial="visible"
      animate="visible"
      variants={animateFadeUp}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url(/footer-bg.png)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center bottom",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[90rem] px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="md:w-1/4 md:max-w-md">
            <div
              className={`inline-block max-w-full rounded-2xl px-5 py-4 ${textBackdrop}`}
            >
              <h2
                className="text-lg font-semibold tracking-wide uppercase"
                style={{ color: "#0f1f19", letterSpacing: "0.04em" }}
              >
                Mill Creek Community Hub
              </h2>
              <p className="mt-2 hidden md:block" style={{ color: "rgba(15,31,25,0.82)", fontSize: "0.9rem" }}>
                Connecting residents to local services and support through our Community Resource Hub.
              </p>
            </div>
          </div>

          {/* Desktop — blur only behind the link column */}
          <div className="hidden md:flex md:w-3/4 md:justify-start">
            <div className={`grid w-fit max-w-full ${columns.length > 1 ? "grid-cols-2 gap-8" : "grid-cols-1"}`}>
              {columns.map((col, i) => (
                <div key={i} className={`rounded-2xl px-5 py-4 ${textBackdrop}`}>
                  <ul className="space-y-2">
                    <li
                      className="text-sm font-semibold pb-2 uppercase tracking-wide"
                      style={{ color: "#14532d" }}
                    >
                      {col.title}
                    </li>
                    {col.items.map((link) => (
                      <li key={getLinkLabel(link)}>
                        <Link
                          href={getLinkHref(link)}
                          className="text-sm font-normal transition-colors duration-200 text-[#0f1f19]/90 hover:text-[#14532d]"
                        >
                          {getLinkLabel(link)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile — single compact blob around explore + links */}
          <div className="md:hidden">
            <div className={`w-fit max-w-full rounded-2xl px-5 py-4 ${textBackdrop}`}>
              <div className="space-y-1">
                {columns.map((col, i) => {
                  const isAccordion = columns.length > 1
                  return (
                    <div key={i} className={i > 0 ? "border-t border-[#14532d]/20 pt-3" : ""}>
                      {isAccordion ? (
                        <button
                          className="flex w-full items-center justify-between py-2 text-left text-sm font-medium"
                          style={{ color: "#0f1f19" }}
                          aria-expanded={openIndex === i}
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                          <span>{col.title}</span>
                          <span style={{ color: "#14532d" }}>{openIndex === i ? "−" : "+"}</span>
                        </button>
                      ) : (
                        <div className="pb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: "#14532d" }}>
                          {col.title}
                        </div>
                      )}
                      {(!isAccordion || openIndex === i) && (
                        <ul className="mt-1 space-y-0.5">
                          {col.items.map((link) => (
                            <li key={getLinkLabel(link)}>
                              <Link
                                href={getLinkHref(link)}
                                className="block py-2 text-sm font-normal"
                                style={{ color: "rgba(15,31,25,0.88)" }}
                              >
                                {getLinkLabel(link)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className={`rounded-full px-6 py-2 ${textBackdrop}`}>
            <p className="text-center text-sm font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
              &copy; Mill Creek Community Hub &middot; 2026
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
