"use client"

import Link from "next/link"
import { Search, Menu, X, ChevronDown, Globe, Type } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isLangModalOpen, setIsLangModalOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("English")
  const [isLargeFont, setIsLargeFont] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: "en", label: "English", nativeName: "English" },
    { code: "es", label: "Español", nativeName: "Spanish" },
    { code: "zh-CN", label: "简体中文", nativeName: "Chinese (Simplified)" },
    { code: "zh-TW", label: "繁體中文", nativeName: "Chinese (Traditional)" },
    { code: "vi", label: "Tiếng Việt", nativeName: "Vietnamese" },
    { code: "tl", label: "Tagalog", nativeName: "Tagalog" },
    { code: "ko", label: "한국어", nativeName: "Korean" },
    { code: "ru", label: "Русский", nativeName: "Russian" },
    { code: "ar", label: "العربية", nativeName: "Arabic" },
    { code: "fr", label: "Français", nativeName: "French" },
    { code: "de", label: "Deutsch", nativeName: "German" },
    { code: "pt", label: "Português", nativeName: "Portuguese" },
    { code: "ja", label: "日本語", nativeName: "Japanese" },
    { code: "hi", label: "हिन्दी", nativeName: "Hindi" },
    { code: "bn", label: "বাংলা", nativeName: "Bengali" },
    { code: "pl", label: "Polski", nativeName: "Polish" },
    { code: "ur", label: "اردو", nativeName: "Urdu" },
  ]

  const navLinks = [
    /*
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
    */
    /*
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
    */
    {
      label: "Dropdown",
      href: "/resources",
      submenu: [
        {
          column: "Browse Resources",
          items: [
            { label: "All Resources", href: "/resource" },
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
    /*
    {
      label: "Events",
      href: "/events",
    },
    */
    {
      label: "Submit Resource",
      href: "/submit",
    },
    {
      label: "Resource",
      href: "/resources",
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

  useEffect(() => {
    // Add Google Translate script only once
    if (!(window as any).googleTranslateInit) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      
      ;(window as any).googleTranslateElementInit = function () {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,zh-CN,zh-TW,vi,tl,ko,ru,ar,fr,de,pt,ja,hi,bn,pl,ur",
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element",
        )
      }
      
      document.body.appendChild(script)
      ;(window as any).googleTranslateInit = true
    }

    // Check current language from cookie
    const cookies = document.cookie.split(";")
    const googtransCookie = cookies.find((c) => c.trim().startsWith("googtrans="))
    if (googtransCookie) {
      const langCode = googtransCookie.split("/")[2]
      const lang = languages.find((l) => l.code === langCode)
      if (lang) {
        setCurrentLang(lang.label)
      }
    }

    // Check if large font is enabled from localStorage
    const largeFontEnabled = localStorage.getItem("largeFontEnabled") === "true"
    setIsLargeFont(largeFontEnabled)
    if (largeFontEnabled) {
      document.documentElement.classList.add("large-font")
    }
  }, [])

  const toggleLargeFont = () => {
    const newValue = !isLargeFont
    setIsLargeFont(newValue)
    
    if (newValue) {
      document.documentElement.classList.add("large-font")
      localStorage.setItem("largeFontEnabled", "true")
    } else {
      document.documentElement.classList.remove("large-font")
      localStorage.setItem("largeFontEnabled", "false")
    }
  }

  const changeLanguage = (langCode: string, langLabel: string) => {
    setCurrentLang(langLabel)
    setIsLangModalOpen(false)
    
    // Set the cookie directly - this is the most reliable cross-browser method
    if (langCode === "en") {
      // Clear the translation cookie to return to English
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
    } else {
      // Set the translation cookie
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=` + window.location.hostname
      document.cookie = `googtrans=/en/${langCode}; path=/`
    }
    
    // Also try to trigger the select if it exists
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement
    if (selectElement) {
      selectElement.value = langCode
      selectElement.dispatchEvent(new Event("change"))
    }
    
    // Reload to apply translation immediately
    window.location.reload()
  }

  return (
    <header className="w-full bg-white border-b-4 border-slate-900">
      {/* Hidden Google Translate Element - Must be visible in DOM */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0, width: '1px', height: '1px', overflow: 'hidden' }}>
        <div id="google_translate_element"></div>
      </div>

      {/* Language Modal */}
      {isLangModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-start justify-center pt-20">
          <div className="bg-white w-full max-w-2xl mx-4 border-2 border-gray-400 shadow-lg max-h-[80vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-gray-50">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-700" />
                <h2 className="text-lg font-semibold text-gray-900">Select Language</h2>
              </div>
              <button
                onClick={() => setIsLangModalOpen(false)}
                className="p-1 hover:bg-gray-200 transition"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Languages List */}
            <div className="overflow-y-auto p-4">
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code, lang.label)}
                    className={`w-full flex items-center gap-3 p-3 border transition text-left ${
                      currentLang === lang.label
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      checked={currentLang === lang.label}
                      readOnly
                      className="w-4 h-4"
                    />
                    <div className="flex-1">
                      <span className="font-medium text-gray-900">{lang.label}</span>
                      <span className="text-gray-600 text-sm ml-2">({lang.nativeName})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top banner */}
      <div className="bg-slate-900 text-white text-sm py-3 px-4 border-b-2 border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="hidden md:block">
            An official community resource portal.{" "}
          </p>
          
          {/* Accessibility and Language Buttons */}
          <div className="flex items-center gap-3">
            {/* Large Font Toggle Button */}
            <button
              onClick={toggleLargeFont}
              className="flex items-center gap-2 bg-blue-700 text-white px-3 py-1.5 hover:bg-blue-800 transition font-medium text-sm border-2 border-blue-700"
              aria-label="Toggle large font"
              title="Toggle large font for better readability"
            >
              <Type className="w-4 h-4" />
              <span className="hidden sm:inline">Large Text</span>
              {isLargeFont && <span className="text-xs">✓</span>}
            </button>

            {/* Language Button */}
            <button
              onClick={() => setIsLangModalOpen(true)}
              className="flex items-center gap-2 bg-blue-700 text-white px-3 py-1.5 hover:bg-blue-800 transition font-medium text-sm border-2 border-blue-700"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
              </svg>
              <span className="hidden sm:inline">{currentLang}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
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
                    {link.submenu ? (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="text-slate-900 font-semibold px-4 py-3 hover:bg-slate-900 hover:text-white transition flex items-center gap-2 whitespace-nowrap"
                      >
                        {link.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-slate-900 font-semibold px-4 py-3 hover:bg-slate-900 hover:text-white transition flex items-center gap-2 whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    )}

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
              className="lg:hidden p-2 bg-white hover:bg-slate-900 hover:text-white transition"
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
                        className="w-full text-left text-slate-900 font-semibold px-4 py-3 bg-white hover:bg-slate-900 hover:text-white transition flex items-center justify-between"
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
                      className="text-slate-900 font-semibold px-4 py-3 bg-white hover:bg-slate-900 hover:text-white transition block"
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
