"use client"

import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"

interface SearchAutocompleteProps {
  items: string[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchAutocomplete({
  items,
  value,
  onChange,
  placeholder = "Search...",
}: SearchAutocompleteProps) {
  const [open, setOpen] = useState(false)
  const [filtered, setFiltered] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (value) {
      const matches = items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      setFiltered(matches)
      setOpen(true)
    } else {
      setFiltered([])
      setOpen(false)
    }
  }, [value, items])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => value && setOpen(true)}
          className="w-full px-4 py-3 border-2 border-slate-900 bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none transition text-sm font-normal"
        />
        <Search className="absolute right-3 top-3.5 w-5 h-5 text-slate-900" />
      </div>

      {open && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-900 shadow-lg z-50 max-h-60 overflow-y-auto">
          {filtered.map((item) => (
            <button
              key={item}
              onClick={() => {
                onChange(item)
                setOpen(false)
              }}
              className="w-full text-left px-4 py-3 hover:bg-slate-100 border-b-2 border-slate-200 last:border-b-0 transition text-sm text-slate-900 font-semibold"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
