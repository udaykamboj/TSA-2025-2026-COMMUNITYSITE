"use client"

import React from "react"
import { Calendar, Car, Trash2, BookOpen, Bus } from "lucide-react"

type Item = {
  id?: string
  icon?: "Car" | "Trash2" | "BookOpen" | "Bus"
  title: string
  status?: string | null
  color?: "black" | "blue"
  showBadge?: boolean
}

type WidgetProps = {
  date?: string
  highlightLink?: { text: string; href?: string } | null
  showSelect?: boolean
  items: Item[]
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Car: <Car className="w-6 h-6" />,
  Trash2: <Trash2 className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Bus: <Bus className="w-6 h-6" />,
}

export default function NYCStatusWidget({
  date = "Saturday, January 17, 2026", 
  highlightLink = null,
  showSelect = true,
  items = [],
}: WidgetProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[540px] rounded-[20px] p-6 sm:p-8 text-slate-900 font-normal shadow-sm">
        <div className="flex items-start justify-between mb-6">
          <h3 className="flex flex-col leading-tight">
            <span className="text-[1.75rem] font-bold">{date.split(',')[0] ?? 'Saturday'},</span>
            <span className="text-[1.75rem] font-bold mt-1">{date.split(',')[1]?.trim() ?? date}</span>
          </h3>

          {showSelect && (
            <button className="text-white rounded-full flex items-center flex-shrink-0 bg-[#103fef] px-4 py-2 sm:px-5 sm:py-3 text-[1.25rem] font-bold">
              <Calendar className="w-5 h-5" />
              <span className="ml-2">Select date</span>
            </button>
          )}
        </div>

        {highlightLink && (
          <div className="bg-gray-100 p-3 rounded-md mb-4">
            <a href={highlightLink.href ?? '#'} className="text-[#103fef] underline text-sm leading-snug text-[1rem] font-bold">
              {highlightLink.text}
            </a>
          </div>
        )}


        <ul className="flex flex-col m-0 p-0">
          {items.map((item, index) => (
            <li key={item.id ?? index} className={index > 0 ? 'border-t-2 border-[#ddd]' : ''}>
                
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3 max-w-[70%]">
                  <span className={`${item.color === 'blue' ? 'text-[#103fef]' : 'text-slate-700'} flex-shrink-0`}>{ICON_MAP[item.icon ?? 'Car']}</span>
                  <a className={`underline ${item.color === 'black' ? 'text-slate-900' : 'text-[#103fef]'} font-bold text-[1.125rem] leading-tight`} href="#">
                    {item.title}
                  </a>
                </div>

                {item.showBadge && item.status && (
                  <span className="bg-[#ddd] text-slate-900 rounded-md px-3 py-1 text-sm font-bold">
                    {item.status}
                  </span>
                )}
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
