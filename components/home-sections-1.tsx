"use client"

import React from "react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-body">
        <p className="hero-eyebrow">Welcome to the Emerald City</p>
        <h1>Your Seattle.<br /><em>Your Community.</em></h1>
        <p className="hero-sub">News, resources, and connections for everyone who calls the Emerald City home.</p>
        <div className="hero-ctas">
          <Link href="/resources" className="btn btn-solid">Explore Resources →</Link>
          <Link href="#neighborhoods" className="btn btn-ghost-white">Find Your Neighborhood →</Link>
        </div>
      </div>
    </section>
  )
}

export function AlertBar() {
  return (
    <div className="alert-bar" role="alert">
      <span className="alert-label">Community Notice</span>
      <p>Community input needed: Seattle Parks 2025 Master Plan — Public comment period open through April 15.</p>
      <Link href="/news">Learn More →</Link>
    </div>
  )
}

export function PopularServices() {
  return (
    <section className="bg-white">
      <div className="wrap border-b border-light pb-8 mb-[-32px]">
        <div className="sec-head">
          <div className="sec-head-left">
            <span className="eyebrow">Quick Access</span>
            <h2 className="sec-title">Popular Services</h2>
          </div>
          <Link href="/services" className="more">
            View All Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
          </Link>
        </div>
        <div className="services-grid">
          {[
            { icon: '🅿️', name: 'Parking or Camera Tickets', href: '#' },
            { icon: '🔇', name: 'Noise Complaint', href: '#' },
            { icon: '♻️', name: 'Get Rid of Waste', href: '#' },
            { icon: '🚗', name: 'Illegal Parking Complaint', href: '#' },
            { icon: '🏠', name: 'Apartment Complaint', href: '#' },
            { icon: '📄', name: 'Birth Certificates', href: '#' },
            { icon: '📈', name: 'Rent Increase Help', href: '#' },
            { icon: '🍎', name: 'SNAP Benefits', href: '#' },
          ].map((svc) => (
            <Link href={svc.href} key={svc.name} className="svc-chip">
              <div className="svc-icon">{svc.icon}</div>
              <span className="svc-label">{svc.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedSpotlight() {
  return (
    <>
      <hr className="rule" />
      <section className="bg-mid">
        <div className="wrap">
          <div className="spotlight">
            <div className="spotlight-img">
              <img src="https://picsum.photos/seed/seattle-budget/700/500" alt="Seattle City Hall" />
            </div>
            <div className="spotlight-body">
              <span className="eyebrow">Featured Story</span>
              <h2>Seattle&apos;s 2025 Community Budget: What It Means for Your Neighborhood</h2>
              <p>The city council approved a landmark $1.9 billion budget this year, with significant investments directed toward affordable housing, transit expansion, and community health services across all 37 neighborhoods. Here&apos;s what&apos;s changing in your zip code.</p>
              <Link href="/news" className="more">
                Read More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function PlanYourResources() {
  return (
    <>
      <hr className="rule" />
      <section className="bg-white">
        <div className="wrap">
          <div className="sec-divider">
            <span className="sec-divider-text">Plan Your Resources</span>
          </div>
          <div className="plan-grid">
            <Link href="#" className="plan-card">
              <img src="https://picsum.photos/seed/city-hall-svc/450/300" alt="City Services" className="plan-card-img" />
              <div className="plan-card-body">
                <div className="plan-card-title">City Services Directory</div>
                <p className="plan-card-desc">Find permits, utilities, local government contacts, and every city service in one place.</p>
                <span className="more" style={{ display: "inline-flex", marginTop: "6px" }}>
                  More
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
                </span>
              </div>
            </Link>

            <Link href="/services" className="plan-card">
              <img src="https://picsum.photos/seed/seattle-transit/450/300" alt="Getting Around" className="plan-card-img" />
              <div className="plan-card-body">
                <div className="plan-card-title">Getting Around</div>
                <p className="plan-card-desc">Seattle is easy to navigate with transit routes, bike lanes, and smart transportation options.</p>
                <span className="more" style={{ display: "inline-flex", marginTop: "6px" }}>
                  More
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
                </span>
              </div>
            </Link>

            <Link href="#" className="plan-card">
              <img src="https://picsum.photos/seed/health-community/450/300" alt="Health and Wellness" className="plan-card-img" />
              <div className="plan-card-body">
                <div className="plan-card-title">Health &amp; Wellness</div>
                <p className="plan-card-desc">Community clinics, mental health resources, free screenings, and social services citywide.</p>
                <span className="more" style={{ display: "inline-flex", marginTop: "6px" }}>
                  More
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
                </span>
              </div>
            </Link>

            <Link href="#" className="plan-card">
              <img src="https://picsum.photos/seed/seattle-maps/450/300" alt="Maps and Guides" className="plan-card-img" />
              <div className="plan-card-body">
                <div className="plan-card-title">Maps &amp; Guides</div>
                <p className="plan-card-desc">Your one-stop resource for neighborhood maps, zoning, and on-the-ground planning information.</p>
                <span className="more" style={{ display: "inline-flex", marginTop: "6px" }}>
                  More
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
