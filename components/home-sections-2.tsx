"use client"

import React, { useRef } from "react"
import Link from "next/link"

export function EventsCarousel() {
  const listRef = useRef<HTMLOListElement>(null)

  const evScroll = (dir: 'next' | 'prev') => {
    if (!listRef.current) return
    const amount = (340 + 20) * (dir === 'next' ? 1 : -1)
    listRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <>
      <hr className="rule" />
      <section className="bg-light events-section" aria-labelledby="events-title">
        <div className="wrap">
          <div className="events-head">
            <div>
              <span className="eyebrow">What&apos;s Happening</span>
              <h2 className="sec-title" id="events-title">Upcoming Events</h2>
            </div>
            <div className="events-arrows">
              <button className="arrow-btn" aria-label="Previous" onClick={() => evScroll('prev')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="arrow-btn arrow-next" aria-label="Next" onClick={() => evScroll('next')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <ol className="ev-list" id="ev-list" ref={listRef}>
            {[
              {
                title: "Thanksgiving Food Drive",
                desc: "Help distribute Thanksgiving meals to families in need. All volunteers welcome — no experience needed. Join your neighbors for a morning of giving.",
                date: "November 22, 9:00 AM – 5:00 PM",
                location: "City Food Bank",
                tags: ["Free", "Volunteer"]
              },
              {
                title: "Community Health Fair",
                desc: "Free health screenings and flu shots for all ages. No appointment required — bring the whole family for checkups, referrals, and wellness resources.",
                date: "November 29, 10:00 AM – 4:00 PM",
                location: "Downtown Community Center",
                tags: ["Free", "Health"]
              },
              {
                title: "Winter Coat Distribution",
                desc: "Free warm coats for families in need as we head into winter. First come, first served at each location — multiple sites citywide for your convenience.",
                date: "November 30, 10:00 AM – 6:00 PM",
                location: "Multiple Locations Citywide",
                tags: ["Free", "Clothing"]
              },
              {
                title: "Community Job Fair",
                desc: "Meet with 50+ employers hiring now across healthcare, tech, construction, and services. Resume review station on-site.",
                date: "December 4, 9:00 AM – 3:00 PM",
                location: "Central Community Center",
                tags: ["Free", "Employment"]
              },
              {
                title: "Holiday Family Celebration",
                desc: "Family celebration with crafts, live music, and hot chocolate. Neighbors of all backgrounds welcome for an evening of seasonal joy and community.",
                date: "December 14, 2:00 PM – 6:00 PM",
                location: "City Park",
                tags: ["Free", "Family"]
              },
              {
                title: "New Year Resource Fair",
                desc: "Learn about available community resources for 2026 — housing, health, job training, and financial support services all under one roof.",
                date: "January 9, 10:00 AM – 2:00 PM",
                location: "Central Library",
                tags: ["Resources"]
              },
              {
                title: "Free Tax Preparation Help",
                desc: "Free tax preparation assistance for qualifying families. Certified IRS-trained volunteers help you maximize your return. Multilingual support available.",
                date: "January 24, 9:00 AM – 5:00 PM",
                location: "Community Center",
                tags: ["Free", "Finance"]
              },
              {
                title: "Heart Health Day",
                desc: "Free heart health screenings, wellness education, and tips from cardiologists and dietitians serving our community — no referral needed.",
                date: "February 13, 9:00 AM – 3:00 PM",
                location: "Health Center",
                tags: ["Free", "Health"]
              },
              {
                title: "Job Skills Training Workshop",
                desc: "Resume building and interview skills workshop led by HR professionals. Walk-ins welcome, seating limited. LinkedIn profile tips included.",
                date: "February 19, 6:00 PM – 8:00 PM",
                location: "Employment Center",
                tags: ["Free", "Employment"]
              }
            ].map((event, i) => (
              <li className="ev-item" key={i}>
                <div className="ev-card">
                  <div className="ev-card-inner">
                    <div className="ev-card-top">
                      <h3><Link href="/">{event.title}</Link></h3>
                      <p className="ev-card-desc">{event.desc}</p>
                    </div>
                    <div>
                      <div className="ev-card-bottom">
                        <div className="ev-meta">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 2 21 20" fill="var(--green)" aria-hidden="true" style={{flexShrink:0, marginTop:"1px"}}>
                            <path d="M16.5385 5.23077H14.6923V4.61538C14.6923 4.45217 14.6275 4.29565 14.5121 4.18024C14.3967 4.06483 14.2401 4 14.0769 4C13.9137 4 13.7572 4.06483 13.6418 4.18024C13.5264 4.29565 13.4615 4.45217 13.4615 4.61538V5.23077H7.30769V4.61538C7.30769 4.45217 7.24286 4.29565 7.12745 4.18024C7.01204 4.06483 6.85552 4 6.69231 4C6.5291 4 6.37257 4.06483 6.25717 4.18024C6.14176 4.29565 6.07692 4.45217 6.07692 4.61538V5.23077H4.23077C3.90435 5.23077 3.5913 5.36044 3.36048 5.59125C3.12967 5.82207 3 6.13512 3 6.46154V18.7692C3 19.0957 3.12967 19.4087 3.36048 19.6395C3.5913 19.8703 3.90435 20 4.23077 20H16.5385C16.8649 20 17.1779 19.8703 17.4087 19.6395C17.6396 19.4087 17.7692 19.0957 17.7692 18.7692V6.46154C17.7692 6.13512 17.6396 5.82207 17.4087 5.59125C17.1779 5.36044 16.8649 5.23077 16.5385 5.23077ZM16.5385 8.92308H4.23077V6.46154H6.07692V7.07692C6.07692 7.24013 6.14176 7.39666 6.25717 7.51207C6.37257 7.62747 6.5291 7.69231 6.69231 7.69231C6.85552 7.69231 7.01204 7.62747 7.12745 7.51207C7.24286 7.39666 7.30769 7.24013 7.30769 7.07692V6.46154H13.4615V7.07692C13.4615 7.24013 13.5264 7.39666 13.6418 7.51207C13.7572 7.62747 13.9137 7.69231 14.0769 7.69231C14.2401 7.69231 14.3967 7.62747 14.5121 7.51207C14.6275 7.39666 14.6923 7.24013 14.6923 7.07692V6.46154H16.5385V8.92308Z"/>
                          </svg>
                          <span className="ev-meta-text">{event.date}</span>
                        </div>
                        <div className="ev-meta">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="var(--green)" aria-hidden="true" style={{flexShrink:0, marginTop:"1px"}}>
                            <path d="M10 1.25C8.17727 1.25207 6.42979 1.97706 5.14092 3.26592C3.85206 4.55479 3.12707 6.30227 3.125 8.125C3.125 14.0078 9.375 18.4508 9.64141 18.6367C9.74649 18.7103 9.87169 18.7498 10 18.7498C10.1283 18.7498 10.2535 18.7103 10.3586 18.6367C10.625 18.4508 16.875 14.0078 16.875 8.125C16.8729 6.30227 16.1479 4.55479 14.8591 3.26592C13.5702 1.97706 11.8227 1.25207 10 1.25ZM10 5.625C10.4945 5.625 10.9778 5.77162 11.3889 6.04633C11.8 6.32103 12.1205 6.71148 12.3097 7.16829C12.4989 7.62511 12.5484 8.12777 12.452 8.61273C12.3555 9.09768 12.1174 9.54314 11.7678 9.89277C11.4181 10.2424 10.9727 10.4805 10.4877 10.577C10.0028 10.6734 9.50011 10.6239 9.04329 10.4347C8.58648 10.2455 8.19603 9.92505 7.92133 9.51393C7.64662 9.1028 7.5 8.61945 7.5 8.125C7.5 7.46196 7.76339 6.82607 8.23223 6.35723C8.70107 5.88839 9.33696 5.625 10 5.625Z"/>
                          </svg>
                          <span className="ev-meta-text">{event.location}</span>
                        </div>
                      </div>
                      <div className="ev-tags">
                        {event.tags.map(tag => <span key={tag} className="ev-tag">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="view-all">
            <Link href="/" className="btn btn-ghost-green">View All Upcoming Events 📣</Link>
          </div>
        </div>
      </section>
    </>
  )
}
