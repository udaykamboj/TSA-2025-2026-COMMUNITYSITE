"use client"

import Link from "next/link"
import { Search, Menu, X, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    {
      label: "Services",
      href: "/services",
      submenu: [
        {
          column: "Popular Services",
          items: [
            { label: "All Services", href: "/services" },
            { label: "Food & Nutrition", href: "/services?category=food" },
            { label: "Housing Assistance", href: "/services?category=housing" },
            { label: "Healthcare Programs", href: "/services?category=healthcare" },
          ],
        },
        {
          column: "Employment & Training",
          items: [
            { label: "Job Training", href: "/services?category=jobs" },
            { label: "Career Counseling", href: "/services?category=careers" },
            { label: "Apprenticeships", href: "/services?category=apprentice" },
          ],
        },
        {
          column: "Youth & Family",
          items: [
            { label: "Youth Programs", href: "/services?category=youth" },
            { label: "Childcare Support", href: "/services?category=childcare" },
            { label: "Family Services", href: "/services?category=family" },
            { label: "Senior Services", href: "/services?category=senior" },
          ],
        },
      ],
    },
    {
      label: "Benefits",
      href: "/benefits",
      submenu: [
        {
          column: "Financial Assistance",
          items: [
            { label: "Browse All Benefits", href: "/benefits" },
            { label: "Income Support", href: "/benefits?type=income" },
            { label: "Tax Credits", href: "/benefits?type=tax" },
            { label: "Utility Assistance", href: "/benefits?type=utility" },
          ],
        },
        {
          column: "Health & Insurance",
          items: [
            { label: "Healthcare Programs", href: "/benefits?type=healthcare" },
            { label: "Medicaid", href: "/benefits?type=medicaid" },
            { label: "Mental Health", href: "/benefits?type=mental" },
          ],
        },
        {
          column: "Education",
          items: [
            { label: "Educational Support", href: "/benefits?type=education" },
            { label: "Scholarships", href: "/benefits?type=scholarships" },
            { label: "Student Loans", href: "/benefits?type=loans" },
          ],
        },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      submenu: [
        {
          column: "Browse Resources",
          items: [
            { label: "All Resources", href: "/resources" },
            { label: "Featured", href: "/resources?featured=true" },
            { label: "Emergency Services", href: "/resources?category=emergency" },
            { label: "Legal Resources", href: "/resources?category=legal" },
          ],
        },
        {
          column: "Specialized Resources",
          items: [
            { label: "Immigrant Services", href: "/resources?category=immigrant" },
            { label: "Disability Services", href: "/resources?category=disability" },
            { label: "Veterans Services", href: "/resources?category=veterans" },
          ],
        },
      ],
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Submit Resource",
      href: "/submit",
    },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="w-full bg-white border-b-4 border-slate-900">
      {/* Top banner */}
      <div className="bg-slate-900 text-white text-sm py-3 px-4 border-b-2 border-slate-800">
        <p>
          An official community resource portal.{" "}
          <a href="#" className="underline hover:text-gray-300">
            Learn how to identify official government sites.
          </a>
        </p>
      </div>

      {/* Main header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 flex-1">
              <Link
                href="/"
                className="text-xl font-bold text-slate-900 border-b-4 border-slate-900 pb-1 whitespace-nowrap"
              >
                Community Hub
              </Link>
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-0" ref={dropdownRef}>
                {navLinks.map((link) => (
                  <div key={link.label} className="relative group">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="text-slate-900 font-semibold px-4 py-3 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition flex items-center gap-2 whitespace-nowrap"
                    >
                      {link.label}
                      {link.submenu && <ChevronDown className="w-4 h-4" />}
                    </button>

                    {link.submenu && openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-0 bg-white border-2 border-slate-900 shadow-lg z-50 w-full lg:w-[900px]">
                        <div className="p-8">
                          <div className="grid grid-cols-3 gap-8">
                            {link.submenu.map((column) => (
                              <div key={column.column}>
                                <h3 className="font-bold text-slate-900 text-sm mb-4">{column.column}</h3>
                                <ul className="space-y-2">
                                  {column.items.map((item) => (
                                    <li key={item.label}>
                                      <Link
                                        href={item.href}
                                        className="text-slate-900 text-sm hover:text-slate-600 transition"
                                        onClick={() => setOpenDropdown(null)}
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-4 ml-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 border-2 border-slate-900 bg-white text-sm font-normal"
                />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-900" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden border-2 border-slate-900 p-2 bg-white hover:bg-slate-900 hover:text-white transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 flex flex-col gap-2 pb-4 border-t-2 border-slate-900 pt-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="w-full text-left text-slate-900 font-semibold px-4 py-3 border-2 border-slate-900 bg-white hover:bg-slate-900 hover:text-white transition flex items-center justify-between"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition ${openDropdown === link.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === link.label && (
                        <div className="bg-slate-50 border-2 border-slate-900 border-t-0">
                          {link.submenu.map((column) => (
                            <div key={column.column} className="px-6 py-4 border-b border-slate-200 last:border-b-0">
                              <h4 className="font-semibold text-slate-900 text-sm mb-2">{column.column}</h4>
                              {column.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block px-0 py-2 text-slate-900 text-sm hover:text-slate-600"
                                  onClick={() => {
                                    setIsMenuOpen(false)
                                    setOpenDropdown(null)
                                  }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-900 font-semibold px-4 py-3 border-2 border-slate-900 bg-white hover:bg-slate-900 hover:text-white transition block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
