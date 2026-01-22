"use client"

import { Search, Menu, X, ChevronDown, Globe, Type } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isLangModalOpen, setIsLangModalOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("English")
  const [isLargeFont, setIsLargeFont] = useState(false)
  const dropdownRef = useRef(null)

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
    {
      label: "Submit Resource",
      href: "/submit",
    },
    {
      label: "Resource",
      href: "/resources",
    },
    {
      label: "Reference",
      href: "/reference",
    },
  ]

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleLargeFont = () => {
    const newValue = !isLargeFont
    setIsLargeFont(newValue)
  }

  const changeLanguage = (langCode, langLabel) => {
    setCurrentLang(langLabel)
    setIsLangModalOpen(false)
  }

  return (
    <>
      <style>{`
        .clash-grotesk {
          font-family: "Clash Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
      `}</style>
      
      <header className="w-full bg-white border-b-4 border-slate-900">
        {/* Language Modal */}
        {isLangModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-start justify-center pt-20">
            <div className="bg-white w-full max-w-2xl mx-4 border border-gray-400 max-h-[80vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
                <h2 className="text-lg font-semibold text-black">Select Language</h2>
                <button
                  onClick={() => setIsLangModalOpen(false)}
                  className="p-1 hover:bg-gray-200 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Languages List */}
              <div className="overflow-y-auto p-4">
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code, lang.label)}
                      className={`w-full text-left p-3 border transition ${
                        currentLang === lang.label
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-medium">{lang.label}</span>
                      <span className="text-gray-600 text-sm ml-2">({lang.nativeName})</span>
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
              {" "}
            </p>
            
            {/* Accessibility and Language Buttons */}
            <div className="flex items-center gap-3">
              {/* Large Font Toggle Button */}
              <button
                onClick={toggleLargeFont}
                className="rounded-full transition-all duration-200"
                style={{ 
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#0d28ff',
                  color: '#ffffff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a1fd9'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0d28ff'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                aria-label="Toggle large font"
                title="Toggle large font for better readability"
              >
                <Type className="w-5 h-5" />
              </button>

              {/* Language Button */}
              <button
                onClick={() => setIsLangModalOpen(true)}
                className="rounded-full transition-all duration-200"
                style={{ 
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#0d28ff',
                  color: '#ffffff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a1fd9'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0d28ff'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-6 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8 flex-1">
                <a
                  href="/"
                  className="clash-grotesk text-xl font-bold text-slate-900 whitespace-nowrap"
                  style={{ textDecoration: 'none' }}
                >
                  Community Hub
                </a>
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
                  {navLinks.map((link) => (
                    <div key={link.label} className="relative">
                      {link.submenu ? (
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                          className="clash-grotesk text-slate-900 font-medium hover:text-slate-600 transition-colors duration-200 flex items-center gap-1"
                          style={{ fontSize: '16px', background: 'none', border: 'none', padding: 0 }}
                        >
                          {link.label}
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="clash-grotesk text-slate-900 font-medium hover:text-slate-600 transition-colors duration-200"
                          style={{ fontSize: '16px', textDecoration: 'none' }}
                        >
                          {link.label}
                        </a>
                      )}

                      {link.submenu && openDropdown === link.label && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 shadow-lg z-50">
                          <div className="max-w-7xl mx-auto p-6">
                            <div className="grid grid-cols-2 gap-6">
                              {link.submenu.map((column) => (
                                <div key={column.column}>
                                  <h3 className="clash-grotesk font-semibold text-slate-900 mb-3" style={{ fontSize: '14px' }}>
                                    {column.column}
                                  </h3>
                                  <ul className="space-y-2">
                                    {column.items.map((item) => (
                                      <li key={item.label}>
                                        <a
                                          href={item.href}
                                          className="text-slate-700 hover:text-slate-900 transition-colors duration-200"
                                          style={{ fontSize: '14px', textDecoration: 'none' }}
                                          onClick={() => setOpenDropdown(null)}
                                        >
                                          {item.label}
                                        </a>
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
                    className="px-4 py-2 border border-gray-300 bg-white transition-colors duration-200 focus:border-gray-500 focus:outline-none"
                    style={{ fontSize: '14px' }}
                  />
                  <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-900" />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <nav className="lg:hidden mt-4 flex flex-col gap-2 pb-4 border-t border-gray-200 pt-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.submenu ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                          className="clash-grotesk w-full text-left text-slate-900 font-medium px-4 py-3 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                          style={{ fontSize: '16px', background: 'none', border: 'none' }}
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                          />
                        </button>
                        {openDropdown === link.label && (
                          <div className="bg-gray-50 border-l-2 border-gray-300 ml-4 pl-4 py-2">
                            {link.submenu.map((column) => (
                              <div key={column.column} className="mb-4 last:mb-0">
                                <h4 className="clash-grotesk font-semibold text-slate-900 mb-2" style={{ fontSize: '14px' }}>
                                  {column.column}
                                </h4>
                                {column.items.map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.href}
                                    className="block py-2 text-slate-700 hover:text-slate-900 transition-colors duration-200"
                                    style={{ fontSize: '14px', textDecoration: 'none' }}
                                    onClick={() => {
                                      setIsMenuOpen(false)
                                      setOpenDropdown(null)
                                    }}
                                  >
                                    {item.label}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className="clash-grotesk text-slate-900 font-medium px-4 py-3 hover:bg-gray-100 transition-colors duration-200 block"
                        style={{ fontSize: '16px', textDecoration: 'none' }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
