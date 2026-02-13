import type { EventConfig } from "./types"

export const eventsConfig: EventConfig[] = [
  {
    slug: "spring-resource-fair",
    title: "Spring Resource Fair",
    date: "2026-04-10",
    time: "10:00 AM - 2:00 PM",
    location: "Central Library",
    image: "/resource-fair.jpg",
    description: "Learn about available community resources, benefits, and services at our spring fair.",
    tags: ["Free"],
    month: "April",
    year: 2026,
    sections: [
      { id: "overview", title: "Overview" },
      { id: "what-to-expect", title: "What to expect" },
      { id: "location-parking", title: "Location and parking" },
      { id: "register", title: "How to register" },
    ],
  },
  {
    slug: "community-health-fair",
    title: "Community Health Fair",
    date: "2026-04-18",
    time: "10:00 AM - 4:00 PM",
    location: "Downtown Community Center",
    image: "/health-fair.jpg",
    description: "Free health screenings and flu shots for all ages.",
    tags: ["Free"],
    month: "April",
    year: 2026,
    sections: [
      { id: "overview", title: "Overview" },
      { id: "screenings", title: "Screenings and services" },
      { id: "location-parking", title: "Location and parking" },
    ],
  },
  {
    slug: "community-job-fair",
    title: "Community Job Fair",
    date: "2026-04-25",
    time: "9:00 AM - 3:00 PM",
    location: "Central Community Center",
    image: "/job-fair-event.jpg",
    description: "Meet with 50+ employers hiring now.",
    tags: ["Free"],
    month: "April",
    year: 2026,
    sections: [
      { id: "overview", title: "Overview" },
      { id: "employers", title: "Participating employers" },
      { id: "prepare", title: "How to prepare" },
    ],
  },
  {
    slug: "earth-day-cleanup",
    title: "Earth Day Community Cleanup",
    date: "2026-04-22",
    time: "9:00 AM - 12:00 PM",
    location: "City Park and riverfront",
    image: "/earth-day-cleanup.jpg",
    description: "Join neighbors for a morning of litter pickup and park beautification.",
    tags: ["Free", "Family-friendly"],
    month: "April",
    year: 2026,
    sections: [
      { id: "overview", title: "Overview" },
      { id: "what-to-bring", title: "What to bring" },
      { id: "meetup", title: "Meetup locations" },
    ],
  },
  {
    slug: "youth-arts-showcase",
    title: "Youth Arts Showcase",
    date: "2026-05-02",
    time: "2:00 PM - 6:00 PM",
    location: "City Arts Center",
    image: "/youth-arts-showcase.jpg",
    description: "Celebrate young artists with live performances, exhibits, and hands-on activities.",
    tags: ["Free", "Family-friendly"],
    month: "May",
    year: 2026,
    sections: [
      { id: "overview", title: "Overview" },
      { id: "schedule", title: "Schedule" },
      { id: "participate", title: "How to participate" },
    ],
  },
  {
    slug: "tax-help-workshop",
    title: "Tax Preparation Help",
    date: "2026-05-09",
    time: "9:00 AM - 5:00 PM",
    location: "Community Center",
    image: "/tax-help.jpg",
    description: "Free tax preparation assistance for families.",
    tags: ["Free"],
    month: "May",
    year: 2026,
    sections: [
      { id: "overview", title: "Overview" },
      { id: "what-to-bring", title: "What to bring" },
      { id: "appointments", title: "Appointments" },
    ],
  },
  {
    slug: "senior-wellness-day",
    title: "Senior Wellness Day",
    date: "2026-05-15",
    time: "10:00 AM - 2:00 PM",
    location: "North Community Center",
    image: "/senior-wellness.jpg",
    description: "Health screenings, nutrition tips, and resource connections for older adults.",
    tags: ["Free", "Seniors"],
    month: "May",
    year: 2026,
    sections: [
      { id: "overview", title: "Overview" },
      { id: "activities", title: "Activities" },
      { id: "location-parking", title: "Location and parking" },
    ],
  },
]

export function getEventBySlug(slug: string): EventConfig | undefined {
  return eventsConfig.find((e) => e.slug === slug)
}

export function getEventSlugs(): string[] {
  return eventsConfig.map((e) => e.slug)
}

/** Events in the shape expected by carousel/hero (with id). */
export function getUpcomingEvents(): Array<EventConfig & { id: number }> {
  return eventsConfig.map((ev, i) => ({ ...ev, id: i + 1 }))
}
