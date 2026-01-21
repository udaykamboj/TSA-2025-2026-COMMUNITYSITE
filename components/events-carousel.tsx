"use client"

import React, { useRef } from "react"
import { upcomingEvents } from "@/lib/sample-data"
import SectionTitle from '@/components/section-title'

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
    <section className="py-20 bg-white" style={{ overflow: 'visible' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Upcoming Events" pbClass="pb-2"
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
          className="carousel-slides flex gap-5 pl-3 pr-12 m-0 list-none overflow-x-auto scroll-smooth snap-x snap-mandatory items-start"
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
                className="carousel-slide flex-none w-[340px] max-w-[340px] min-w-[340px] box-border snap-start h-[420px] flex items-center justify-center"
                key={ev.id}
              >
                <div
                  className={`cmp-teaser--event group flex flex-col relative transition-all duration-300 ease-in-out min-h-[360px] h-auto text-black bg-transparent rounded-[8px]`}
                  style={{ backdropFilter: "blur(12.5px)" }}
                >
                  <div
                    className="cmp-teaser__content box-border backdrop-blur-[12.5px] bg-[hsla(0,0%,100%,0.749)] rounded-[8px] shadow-[4px_4px_12px_rgba(0,0,0,0.2)] flex flex-col flex-none text-base p-4 h-[360px] justify-between gap-[10px] overflow-hidden pb-[30px] border-0 transition-all duration-300 ease-in-out"
                    style={{
                      backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                      border: '2px solid #ddd',
                      borderRadius: '8px',
                      padding: '16px',
                      boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      const t = e.currentTarget as HTMLDivElement
                      t.style.backgroundColor = '#fff'
                      t.style.border = '2px solid #555'
                      t.style.borderRadius = '16px'
                    }}
                    onMouseLeave={(e) => {
                      const t = e.currentTarget as HTMLDivElement
                      t.style.backgroundColor = 'hsla(0, 0%, 100%, 0.749)'
                      t.style.border = '2px solid #ddd'
                      t.style.borderRadius = '8px'
                    }}
                  >
                    <div className="cmp-teaser__desc flex flex-col h-full justify-between">
                      <div>
                        <h3 className="cmp-teaser__title flex items-start text-inherit font-medium gap-[0.75rem] justify-between tracking-[0.01em] leading-[1.25] mb-[15px] mt-[10px] w-full break-words no-underline text-[clamp(1.375rem,1.2192rem+0.7792vw,1.75rem)]" style={{ fontFamily: '"Clash Grotesk", sans-serif' }}>
                          <a href={`#event-${ev.id}`}>{ev.title}</a>
                        </h3>
                        <p>{ev.description}</p>
                      </div>
                      <div>
                        <div className="cmp-teaser__aux mt-auto">
                          <p className="has-icon flex gap-[5px] mt-0 items-center">
                            <svg className="fill-black min-w-[20px] flex-shrink-0 translate-y-[10%]" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 2 21 20" fill="none" aria-hidden="true">
                              <path d="M16.5385 5.23077H14.6923V4.61538C14.6923 4.45217 14.6275 4.29565 14.5121 4.18024C14.3967 4.06483 14.2401 4 14.0769 4C13.9137 4 13.7572 4.06483 13.6418 4.18024C13.5264 4.29565 13.4615 4.45217 13.4615 4.61538V5.23077H7.30769V4.61538C7.30769 4.45217 7.24286 4.29565 7.12745 4.18024C7.01204 4.06483 6.85552 4 6.69231 4C6.5291 4 6.37257 4.06483 6.25717 4.18024C6.14176 4.29565 6.07692 4.45217 6.07692 4.61538V5.23077H4.23077C3.90435 5.23077 3.5913 5.36044 3.36048 5.59125C3.12967 5.82207 3 6.13512 3 6.46154V18.7692C3 19.0957 3.12967 19.4087 3.36048 19.6395C3.5913 19.8703 3.90435 20 4.23077 20H16.5385C16.8649 20 17.1779 19.8703 17.4087 19.6395C17.6396 19.4087 17.7692 19.0957 17.7692 18.7692V6.46154C17.7692 6.13512 17.6396 5.82207 17.4087 5.59125C17.1779 5.36044 16.8649 5.23077 16.5385 5.23077ZM16.5385 8.92308H4.23077V6.46154H6.07692V7.07692C6.07692 7.24013 6.14176 7.39666 6.25717 7.51207C6.37257 7.62747 6.5291 7.69231 6.69231 7.69231C6.85552 7.69231 7.01204 7.62747 7.12745 7.51207C7.24286 7.39666 7.30769 7.24013 7.30769 7.07692V6.46154H13.4615V7.07692C13.4615 7.24013 13.5264 7.39666 13.6418 7.51207C13.7572 7.62747 13.9137 7.69231 14.0769 7.69231C14.2401 7.69231 14.3967 7.62747 14.5121 7.51207C14.6275 7.39666 14.6923 7.24013 14.6923 7.07692V6.46154H16.5385V8.92308Z" />
                            </svg>
                            <span style={{
                              clip: 'rect(0, 0, 0, 0)',
                              border: 0,
                              height: 0,
                              opacity: 0,
                              outline: 'none',
                              overflow: 'hidden',
                              padding: 0,
                              position: 'absolute',
                              whiteSpace: 'nowrap',
                              width: 0,
                              zIndex: -1
                            }}>Date</span>
                            <span>{dateText}, {timeText}</span>
                          </p>
                          <p className="has-icon flex gap-[5px] mt-0 items-center">
                            <svg className="fill-black min-w-[20px] flex-shrink-0 translate-y-[10%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                              <path d="M10 1.25C8.17727 1.25207 6.42979 1.97706 5.14092 3.26592C3.85206 4.55479 3.12707 6.30227 3.125 8.125C3.125 14.0078 9.375 18.4508 9.64141 18.6367C9.74649 18.7103 9.87169 18.7498 10 18.7498C10.1283 18.7498 10.2535 18.7103 10.3586 18.6367C10.625 18.4508 16.875 14.0078 16.875 8.125C16.8729 6.30227 16.1479 4.55479 14.8591 3.26592C13.5702 1.97706 11.8227 1.25207 10 1.25ZM10 5.625C10.4945 5.625 10.9778 5.77162 11.3889 6.04633C11.8 6.32103 12.1205 6.71148 12.3097 7.16829C12.4989 7.62511 12.5484 8.12777 12.452 8.61273C12.3555 9.09768 12.1174 9.54314 11.7678 9.89277C11.4181 10.2424 10.9727 10.4805 10.4877 10.577C10.0028 10.6734 9.50011 10.6239 9.04329 10.4347C8.58648 10.2455 8.19603 9.92505 7.92133 9.51393C7.64662 9.1028 7.5 8.61945 7.5 8.125C7.5 7.46196 7.76339 6.82607 8.23223 6.35723C8.70107 5.88839 9.33696 5.625 10 5.625Z" />
                            </svg>
                            <span style={{
                              clip: 'rect(0, 0, 0, 0)',
                              border: 0,
                              height: 0,
                              opacity: 0,
                              outline: 'none',
                              overflow: 'hidden',
                              padding: 0,
                              position: 'absolute',
                              whiteSpace: 'nowrap',
                              width: 0,
                              zIndex: -1
                            }}>Location</span>
                            <span>{ev.location}</span>
                          </p>
                        </div>
                        <div className="tags inline-flex gap-[6px] mt-[10px]">
                          {(ev.tags || []).map((t) => (
                            <span className="tag bg-[#ddd] rounded-[4px] text-black inline-block text-[14px] font-bold px-[8px] py-[4px]" key={t}>{t}</span>
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
          .carousel-slide {
            height: auto;
            min-height: 340px;
            align-items: stretch;
          }
          .cmp-teaser__content {
            height: auto;
            min-height: 320px;
          }
        }

        .carousel-slides::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}