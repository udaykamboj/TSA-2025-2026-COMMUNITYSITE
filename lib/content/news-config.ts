import type { NewsConfig } from "./types"

export const newsConfig: NewsConfig[] = [
  {
    slug: "city-council-infrastructure",
    title: "City Council Approves New Infrastructure Plan",
    date: "January 15, 2026",
    excerpt:
      "The city council has unanimously approved a comprehensive infrastructure improvement plan that will modernize key public facilities and improve transportation networks over the next five years. The plan includes over 40 miles of road resurfacing, structural upgrades for three aging bridges, two new multipurpose community centers in underserved neighborhoods, and major expansions to the riverfront trail and five parks. Funding is secured through federal grants and existing capital budgets with no new general tax increase.",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Infrastructure", "Development"],
    sections: [
      { id: "key-projects", title: "Key projects" },
      { id: "timeline", title: "Timeline" },
      { id: "get-involved", title: "How to get involved" },
    ],
  },
  {
    slug: "public-transit-routes-spring",
    title: "New Public Transit Routes Announced for Spring",
    date: "January 12, 2026",
    excerpt:
      "Enhanced public transportation services will connect underserved neighborhoods starting next month, with three new bus routes—North Corridor, East–West Express, and Riverfront Loop—and extended service hours across the city. The expansion follows a year-long pilot and direct community feedback, with weekday service from 5:30 a.m. to 10:00 p.m. on new routes and extended hours on 12 existing high-ridership routes until 11:00 p.m. Fares remain unchanged, with reduced and free options for youth, seniors, and eligible low-income riders.",
    heroImage:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    tags: ["Transit", "Community"],
    sections: [
      { id: "overview", title: "Overview" },
      { id: "new-routes", title: "New routes" },
      { id: "schedule", title: "Schedule and hours" },
      { id: "feedback", title: "Feedback" },
    ],
  },
  {
    slug: "community-health-initiative",
    title: "Community Health Initiative Launches Citywide",
    date: "January 10, 2026",
    excerpt:
      "A new health and wellness program aims to improve access to healthcare for all residents through mobile clinics, free telemedicine visits, and monthly health fairs. The initiative brings basic exams, vaccinations, and screenings to libraries, community centers, and senior housing on a rotating schedule—no insurance or ID required for basic services. Same-day and next-day telemedicine slots are available in multiple languages, with referrals to primary and specialty care when needed. The program is funded by city funds, federal grants, and hospital community benefit commitments.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Health", "Services"],
    sections: [
      { id: "overview", title: "Overview" },
      { id: "services", title: "Services offered" },
      { id: "locations", title: "Locations and hours" },
      { id: "eligibility", title: "Eligibility" },
    ],
  },
  {
    slug: "affordable-housing-expansion",
    title: "Affordable Housing Expansion to Create 500 New Units",
    date: "January 8, 2026",
    excerpt:
      "The city is partnering with developers to build 500 new mixed-income rental units across five sites: Northside Commons, East Gate Village, Riverside Apartments, Downtown Heights, and South Park Homes. Households earning 30–80% of area median income may qualify, with preference for families with children, essential workers in healthcare and education, and veterans. A centralized application portal opens in March 2026; all developments are transit-oriented and include one-, two-, and three-bedroom options with modern amenities and community spaces.",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    tags: ["Housing", "Development"],
    sections: [
      { id: "overview", title: "Overview" },
      { id: "locations", title: "Project locations" },
      { id: "eligibility", title: "Eligibility and application" },
    ],
  },
  {
    slug: "free-job-training-program-2026",
    title: "Free Job Training Program Opens Enrollment for 2026",
    date: "January 5, 2026",
    excerpt:
      "City residents 18 and older can now sign up for tuition-free certification programs in healthcare (CNA, Medical Assistant, Pharmacy Technician), technology (IT Support, Data Analytics, Web Development), skilled trades (Electrical, Plumbing, HVAC, Construction), and business. Programs run from 6 weeks to 12 months with childcare vouchers and transportation assistance for eligible participants. Monthly info sessions are held virtually and in person; cohorts start quarterly and include job placement assistance upon completion. Apply online at workforce.city.gov or at any city community center.",
    heroImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    tags: ["Employment", "Education"],
    sections: [
      { id: "overview", title: "Overview" },
      { id: "programs", title: "Available programs" },
      { id: "apply", title: "How to apply" },
    ],
  },
  {
    slug: "winter-weather-resource-guide",
    title: "Winter Weather Resource Guide: Shelters and Warming Centers",
    date: "January 3, 2026",
    excerpt:
      "Extended hours at city warming centers and additional outreach teams are in place to help residents stay safe during cold weather. Central Community Center and South Shelter are open 24/7 during cold alerts (under 32°F); North Library, East Recreation Center, and West Warming Site offer extended hours. Free rides to warming centers are available by calling 311 when alerts are active; street outreach teams provide warm blankets, hot drinks, and transport to shelters. Cold weather alerts are issued when temperatures fall below 32°F or wind chill creates dangerous conditions—sign up at weather.city.gov.",
    heroImage:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&h=600&fit=crop",
    tags: ["Community", "Safety"],
    sections: [
      { id: "overview", title: "Overview" },
      { id: "locations", title: "Locations and hours" },
      { id: "transportation", title: "Transportation" },
    ],
  },
]

export function getNewsBySlug(slug: string): NewsConfig | undefined {
  return newsConfig.find((n) => n.slug === slug)
}

export function getNewsSlugs(): string[] {
  return newsConfig.map((n) => n.slug)
}
