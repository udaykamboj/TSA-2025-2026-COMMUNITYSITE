"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { upcomingEvents } from "@/lib/sample-data"
import SectionTitle from "@/components/section-title"

export default function EventsCarousel() {
  const listRef = useRef<HTMLOListElement | null>(null)

  const scrollBySlide = (direction: "next" | "prev") => {
    const el = listRef.current
    if (!el) return

    const slideWidth = 340 + 20 // width + gap
    const scrollAmount = direction === "next" ? slideWidth : -slideWidth
    el.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gray-50" style={{ overflow: 'visible' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Upcoming Events" pbClass="pb-"
          rightNode={(
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous"
                onClick={() => scrollBySlide("prev")}
                className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                aria-label="Next"
                onClick={() => scrollBySlide("next")}
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        />

            {/* Navigation */}

        <ol
          className="carousel-slides flex gap-x-5 pl-0 pr-0 m-0 list-none overflow-x-auto scroll-smooth snap-x snap-mandatory items-start"
          ref={listRef}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {upcomingEvents.map((ev) => {
            const dateObj = ev.date ? new Date(ev.date) : null
            const dateText = dateObj
              ? dateObj.toLocaleDateString(undefined, { month: "long", day: "numeric" })
              : ev.date
            const timeText = ev.time ? ev.time : "All day"

            return (
              <li
                className="flex-none w-[340px] flex-shrink-0 box-border snap-start h-[420px] flex items-center justify-center mx-0"
                key={ev.id}
              >
                <div className="group w-full flex flex-col relative transition-all duration-300 ease-in-out min-h-[360px] h-auto text-black" >
                  <div 
                    className="w-full bg-white rounded-md shadow-sm border border-slate-100 p-4 h-[360px] flex flex-col justify-between gap-2 overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                      borderColor: '#ddd',
                      borderRadius: '8px',
                      padding: '16px',
                      borderWidth: '2px',
                      boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.2)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.borderColor = '#555';
                      e.currentTarget.style.borderRadius = '16px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'hsla(0, 0%, 100%, 0.749)';
                      e.currentTarget.style.borderColor = '#ddd';
                      e.currentTarget.style.borderRadius = '8px';
                    }}
                  >
                    <div className="flex flex-col h-full justify-between" >
                      <div>
                        <h3 
                          className="clash-grotesk font-bold mb-3 break-words"
                          style={{
                            fontSize: '24px',
                            letterSpacing: '-0.01em',
                            lineHeight: '1.2',
                            color: '#1a1a1a',
                            wordBreak: 'break-word'
                          }}
                        >
                          <Link href={`/main/events/${ev.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {ev.title}
                          </Link>
                        </h3>
                        <p className="break-words" style={{ 
                          fontSize: '16px', 
                          lineHeight: '1.5',
                          color: '#4b5563',
                          fontWeight: '500'
                        }}>
                          {ev.description}
                        </p>
                      </div>
                      <div>
                        <div className="mt-auto">
                          <p className="flex gap-[5px] mt-0 items-center mb-2">
                            <svg className="fill-black min-w-[20px] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 2 21 20" fill="none" aria-hidden="true">
                              <path d="M16.5385 5.23077H14.6923V4.61538C14.6923 4.45217 14.6275 4.29565 14.5121 4.18024C14.3967 4.06483 14.2401 4 14.0769 4C13.9137 4 13.7572 4.06483 13.6418 4.18024C13.5264 4.29565 13.4615 4.45217 13.4615 4.61538V5.23077H7.30769V4.61538C7.30769 4.45217 7.24286 4.29565 7.12745 4.18024C7.01204 4.06483 6.85552 4 6.69231 4C6.5291 4 6.37257 4.06483 6.25717 4.18024C6.14176 4.29565 6.07692 4.45217 6.07692 4.61538V5.23077H4.23077C3.90435 5.23077 3.5913 5.36044 3.36048 5.59125C3.12967 5.82207 3 6.13512 3 6.46154V18.7692C3 19.0957 3.12967 19.4087 3.36048 19.6395C3.5913 19.8703 3.90435 20 4.23077 20H16.5385C16.8649 20 17.1779 19.8703 17.4087 19.6395C17.6396 19.4087 17.7692 19.0957 17.7692 18.7692V6.46154C17.7692 6.13512 17.6396 5.82207 17.4087 5.59125C17.1779 5.36044 16.8649 5.23077 16.5385 5.23077ZM16.5385 8.92308H4.23077V6.46154H6.07692V7.07692C6.07692 7.24013 6.14176 7.39666 6.25717 7.51207C6.37257 7.62747 6.5291 7.69231 6.69231 7.69231C6.85552 7.69231 7.01204 7.62747 7.12745 7.51207C7.24286 7.39666 7.30769 7.24013 7.30769 7.07692V6.46154H13.4615V7.07692C13.4615 7.24013 13.5264 7.39666 13.6418 7.51207C13.7572 7.62747 13.9137 7.69231 14.0769 7.69231C14.2401 7.69231 14.3967 7.62747 14.5121 7.51207C14.6275 7.39666 14.6923 7.24013 14.6923 7.07692V6.46154H16.5385V8.92308Z" />
                            </svg>
                            <span style={{ fontSize: '15px', fontWeight: '500', color: '#1a1a1a' }}>
                              {dateText}, {timeText}
                            </span>
                          </p>
                          <p className="flex gap-[5px] mt-0 items-center">
                            <svg className="fill-black min-w-[20px] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                              <path d="M10 1.25C8.17727 1.25207 6.42979 1.97706 5.14092 3.26592C3.85206 4.55479 3.12707 6.30227 3.125 8.125C3.125 14.0078 9.375 18.4508 9.64141 18.6367C9.74649 18.7103 9.87169 18.7498 10 18.7498C10.1283 18.7498 10.2535 18.7103 10.3586 18.6367C10.625 18.4508 16.875 14.0078 16.875 8.125C16.8729 6.30227 16.1479 4.55479 14.8591 3.26592C13.5702 1.97706 11.8227 1.25207 10 1.25ZM10 5.625C10.4945 5.625 10.9778 5.77162 11.3889 6.04633C11.8 6.32103 12.1205 6.71148 12.3097 7.16829C12.4989 7.62511 12.5484 8.12777 12.452 8.61273C12.3555 9.09768 12.1174 9.54314 11.7678 9.89277C11.4181 10.2424 10.9727 10.4805 10.4877 10.577C10.0028 10.6734 9.50011 10.6239 9.04329 10.4347C8.58648 10.2455 8.19603 9.92505 7.92133 9.51393C7.64662 9.1028 7.5 8.61945 7.5 8.125C7.5 7.46196 7.76339 6.82607 8.23223 6.35723C8.70107 5.88839 9.33696 5.625 10 5.625Z" />
                            </svg>
                            <span style={{ fontSize: '15px', fontWeight: '500', color: '#1a1a1a' }}>
                              {ev.location}
                            </span>
                          </p>
                        </div>
                        <div className="inline-flex gap-2 mt-2">
                          {(ev.tags || []).map((t) => (
                            <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-sm font-semibold" key={t}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          li {
            height: auto;
            min-height: 340px;
            align-items: stretch;
          }
        }

        ol::-webkit-scrollbar { 
          display: none; 
        }
        
        .clash-grotesk {
          font-family: "Clash Grotesk", sans-serif;
        }
      `}</style>
    </section>
  )
}