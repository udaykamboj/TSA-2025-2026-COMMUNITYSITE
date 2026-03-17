"use client"

import React from "react"
import Link from "next/link"

export function NeighborhoodCarousel() {
  const neighborhoods = [
    { name: "Capitol Hill", tag: "Arts & culture", img: "capitol-hill" },
    { name: "Ballard", tag: "Nordic roots", img: "ballard-wa" },
    { name: "Fremont", tag: "Center of the universe", img: "fremont" },
    { name: "Beacon Hill", tag: "Rich history", img: "beacon-hill" },
    { name: "Central District", tag: "Cultural heart", img: "central-dist" },
    { name: "Rainier Valley", tag: "Most diverse", img: "rainier-valley" },
    { name: "West Seattle", tag: "Views & beaches", img: "west-seattle" },
    { name: "South Lake Union", tag: "Innovation hub", img: "south-lake-union" },
    { name: "Queen Anne", tag: "Hilltop views", img: "queen-anne" },
    { name: "Columbia City", tag: "Village feel", img: "columbia-city" },
    { name: "Georgetown", tag: "Art & grit", img: "georgetown-seattle" },
    { name: "Magnolia", tag: "Quiet bluff", img: "magnolia" }
  ]

  return (
    <>
      <hr className="rule" />
      <section className="bg-white" id="neighborhoods">
        <div className="wrap">
          <div className="sec-head-center">
            <span className="eyebrow">Explore Seattle</span>
            <h2 className="sec-title">Your Neighborhood</h2>
            <p className="sec-subtitle">Discover what&apos;s happening across Seattle&apos;s diverse communities.</p>
          </div>
          <div className="nbhd-scroll">
            {neighborhoods.map((n) => (
              <Link href="/" key={n.name} className="nbhd-card">
                <img src={`https://picsum.photos/seed/${n.img}/210/290`} alt={n.name} />
                <div className="nbhd-overlay">
                  <div className="nbhd-name">{n.name}</div>
                  <div className="nbhd-tag">{n.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function CommunityNews() {
  return (
    <>
      <hr className="rule" />
      <section className="bg-mid">
        <div className="wrap border-b border-light pb-8 mb-[-32px]">
          <div className="sec-divider">
            <span className="sec-divider-text">Latest News</span>
          </div>
          <div className="news-grid">
            <article className="news-card">
              <div className="news-card-img"><img src="https://picsum.photos/seed/affordable-housing/450/300" alt="Affordable housing Seattle" /></div>
              <p className="photo-credit">Photo: Seattle DCI</p>
              <p className="news-cat">Housing</p>
              <h3 className="news-title"><Link href="/">Seattle Approves $45M for Affordable Housing Construction in 5 Neighborhoods</Link></h3>
              <p className="news-excerpt">The city council approved a major funding package aimed at accelerating affordable housing development across Capitol Hill, Rainier Valley, Beacon Hill, Ballard, and Central District.</p>
              <Link href="/" className="more">More <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg></Link>
            </article>
            <article className="news-card">
              <div className="news-card-img"><img src="https://picsum.photos/seed/light-rail/450/300" alt="Ballard Light Rail" /></div>
              <p className="photo-credit">Photo: Sound Transit</p>
              <p className="news-cat">Transit</p>
              <h3 className="news-title"><Link href="/">New Light Rail Extension: What Ballard Residents Need to Know</Link></h3>
              <p className="news-excerpt">Construction timelines, station locations, and disruptions to local streets — your guide to the Ballard Link Extension as work ramps up this spring.</p>
              <Link href="/" className="more">More <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg></Link>
            </article>
            <article className="news-card">
              <div className="news-card-img"><img src="https://picsum.photos/seed/community-fridge/450/300" alt="Community Fridges Network" /></div>
              <p className="photo-credit">Photo: Seattle Food Network</p>
              <p className="news-cat">Food Access</p>
              <h3 className="news-title"><Link href="/">Community Fridges Network Expands to 12 New Locations Citywide</Link></h3>
              <p className="news-excerpt">The grassroots community fridge initiative now reaches 28 neighborhoods, ensuring more residents have access to free fresh food seven days a week.</p>
              <Link href="/" className="more">More <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg></Link>
            </article>
          </div>
          <div className="carousel-nav">
            <button className="carousel-nav-btn">&lt;&lt; Previous</button>
            <button className="carousel-nav-btn">Next &gt;&gt;</button>
          </div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link href="/" className="btn btn-ghost-dark">Browse More News →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function BenefitPrograms() {
  return (
    <>
      <hr className="rule" />
      <section className="bg-white">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Available to You</span>
              <h2 className="sec-title">Benefit Programs For You</h2>
            </div>
            <Link href="/" className="more">See More <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg></Link>
          </div>
          <div className="benefit-grid">
            <Link href="/" className="benefit-card"><div className="benefit-icon">🍽️</div><div className="benefit-title">Food Assistance</div><p className="benefit-desc">SNAP benefits, food banks, and emergency food pantries in your zip code.</p></Link>
            <Link href="/" className="benefit-card"><div className="benefit-icon">🏠</div><div className="benefit-title">Housing Support</div><p className="benefit-desc">Rental assistance, eviction prevention, and affordable housing applications.</p></Link>
            <Link href="/" className="benefit-card"><div className="benefit-icon">🩺</div><div className="benefit-title">Healthcare Services</div><p className="benefit-desc">Low-cost clinics, Medicaid enrollment help, and mental health resources.</p></Link>
            <Link href="/" className="benefit-card"><div className="benefit-icon">👧</div><div className="benefit-title">Youth Programs</div><p className="benefit-desc">After-school programs, summer camps, tutoring, and mentorship opportunities.</p></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function PromoBlock() {
  return (
    <>
      <hr className="rule" />
      <section className="bg-mid">
        <div className="wrap">
          <div className="promo-block">
            <div className="promo-img">
              <img src="https://picsum.photos/seed/parks-summer/600/400" alt="Seattle Parks Summer Youth Programs" />
            </div>
            <div className="promo-body">
              <span className="eyebrow">Featured Program</span>
              <h2>Seattle Parks Summer Youth Programs — Registration Now Open</h2>
              <p>Free and subsidized summer programs for youth ages 6–18 at 60+ parks citywide. Swimming lessons, sports leagues, arts workshops, and leadership camps available. Income-based fee assistance guaranteed.</p>
              <Link href="/" className="btn btn-solid" style={{ width: "fit-content" }}>Register Now →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function NewsletterAndSocial() {
  return (
    <>
      <section className="newsletter">
        <div className="wrap">
          <div className="newsletter-inner">
            <span className="eyebrow">Stay in the Loop</span>
            <h2>Seattle in Your Inbox</h2>
            <p>The best community news, events, resources, and neighborhood updates — delivered monthly. No spam, just Seattle.</p>
            <div className="nl-form">
              <input className="nl-input" type="email" placeholder="Your email address" aria-label="Email address" />
              <input className="nl-input nl-input-zip" type="text" placeholder="Zip code" aria-label="Zip code" />
              <button className="nl-btn">Subscribe →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="social-sec bg-light">
        <div className="wrap">
          <span className="eyebrow">Follow Along</span>
          <h2 className="sec-title">@SeattleCommunity</h2>
          <p>Neighborhood stories, city updates, community voices, and real-time local news from across the Emerald City.</p>
          <div className="social-pills">
            <a href="https://instagram.com" className="spill spill-ig">📸 Instagram</a>
            <a href="https://twitter.com" className="spill spill-tw">𝕏 Twitter / X</a>
            <a href="https://facebook.com" className="spill spill-fb">👥 Facebook</a>
            <a href="https://nextdoor.com" className="spill spill-nd">🏘️ Nextdoor</a>
          </div>
        </div>
      </section>

      <div className="questions">
        <h2>Still Have Questions?</h2>
        <p>Our community navigators can help you find the right resource, program, or service — in your language.</p>
        <Link href="/" className="btn btn-ghost-white">Ask a Question →</Link>
      </div>
    </>
  )
}
