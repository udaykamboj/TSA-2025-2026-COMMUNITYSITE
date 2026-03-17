import type { PageConfig } from "./types"

const baseBreadcrumb = { label: "Services", href: "/main/services" }

export const pagesConfig: PageConfig[] = [
  {
    slug: "parking-or-camera-tickets",
    title: "Parking or camera tickets",
    description: "Pay, dispute, or check the status of parking and camera tickets online. Avoid late fees by paying within 30 days.",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Pay ticket online", href: "#" },
    sections: [
      { id: "pay-ticket", title: "Pay ticket" },
      { id: "dispute-ticket", title: "Dispute ticket" },
      { id: "check-ticket-status", title: "Check ticket status" },
      { id: "frequently-asked-questions", title: "Frequently asked questions" },
      { id: "get-help", title: "Get help" },
    ],
    infoBox: {
      title: "You should know",
      body: "It takes time for tickets to appear in the system. If you recently received a ticket, check back in a few days.",
    },
  },
  {
    slug: "noise-complaint",
    title: "Noise complaint",
    breadcrumb: baseBreadcrumb,
    sections: [
      { id: "report", title: "Report noise" },
      { id: "hours", title: "Quiet hours" },
      { id: "faq", title: "Frequently asked questions" },
    ],
  },
  {
    slug: "get-rid-of-waste",
    title: "Get rid of waste",
    description: "Schedule pickups, learn recycling rules, and find out how to dispose of bulk items and hazardous waste safely.",
    breadcrumb: baseBreadcrumb,
    sections: [
      { id: "schedule-pickup", title: "Schedule pickup" },
      { id: "bulk-items", title: "Bulk items" },
      { id: "recycling", title: "Recycling" },
    ],
  },
  {
    slug: "illegal-parking-complaint",
    title: "Illegal parking complaint",
    breadcrumb: baseBreadcrumb,
    sections: [
      { id: "report", title: "Report illegal parking" },
      { id: "what-to-include", title: "What to include" },
    ],
  },
  {
    slug: "apartment-complaint",
    title: "Apartment complaint",
    description: "File a complaint about housing conditions, learn about housing standards, and get help with landlord issues.",
    breadcrumb: baseBreadcrumb,
    sections: [
      { id: "file-complaint", title: "File a complaint" },
      { id: "housing-standards", title: "Housing standards" },
      { id: "get-help", title: "Get help" },
    ],
  },
  {
    slug: "birth-certificates",
    title: "Birth certificates",
    description: "Request certified copies of birth certificates online, by mail, or in person. Expedited service available for an extra fee.",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Request a certificate", href: "#" },
    sections: [
      { id: "request", title: "Request a certificate" },
      { id: "eligibility", title: "Eligibility" },
      { id: "fees", title: "Fees and processing time" },
    ],
  },
  {
    slug: "rent-increase-help",
    title: "Rent increase help",
    description: "Understand your rights when rent goes up, how to dispute an increase, and where to find rental assistance.",
    breadcrumb: baseBreadcrumb,
    sections: [
      { id: "understand-your-rights", title: "Understand your rights" },
      { id: "dispute", title: "Dispute an increase" },
      { id: "assistance", title: "Rental assistance" },
    ],
  },
  {
    slug: "snap-benefits",
    title: "SNAP benefits",
    description: "Apply for food assistance (SNAP) online, by mail, or in person. Check eligibility and renew benefits before they expire.",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Apply for SNAP", href: "#" },
    sections: [
      { id: "apply", title: "Apply" },
      { id: "eligibility", title: "Eligibility" },
      { id: "renewal", title: "Renewal" },
    ],
  },
  {
    slug: "voter-registration",
    title: "Voter registration",
    description: "Register to vote, check your status, or sign up for absentee and mail-in voting. Deadlines vary by state.",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Register to vote", href: "#" },
    sections: [
      { id: "register-to-vote", title: "Register to vote" },
      { id: "check-your-status", title: "Check your status" },
      { id: "absentee-and-mail-in-voting", title: "Absentee and mail-in voting" },
      { id: "frequently-asked-questions", title: "Frequently asked questions" },
    ],
    infoBox: {
      title: "You should know",
      body: "Voter registration deadlines vary by state. Check your local election office for the cutoff date before the next election.",
    },
  },
  {
    slug: "building-permits",
    title: "Building permits",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Apply for a permit", href: "#" },
    sections: [
      { id: "apply-for-a-permit", title: "Apply for a permit" },
      { id: "permit-types", title: "Permit types" },
      { id: "inspections", title: "Inspections" },
      { id: "check-permit-status", title: "Check permit status" },
    ],
  },
  {
    slug: "street-cleaning-schedule",
    title: "Street cleaning schedule",
    breadcrumb: baseBreadcrumb,
    sections: [
      { id: "find-your-schedule", title: "Find your schedule" },
      { id: "parking-rules", title: "Parking rules" },
      { id: "holidays-and-exceptions", title: "Holidays and exceptions" },
    ],
  },
  {
    slug: "marriage-licenses",
    title: "Marriage licenses",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Apply for a license", href: "#" },
    sections: [
      { id: "apply-for-a-license", title: "Apply for a license" },
      { id: "requirements", title: "Requirements" },
      { id: "fees-and-waiting-period", title: "Fees and waiting period" },
    ],
  },
  {
    slug: "report-pothole-or-street-issue",
    title: "Report a pothole or street issue",
    description: "Report potholes, broken sidewalks, and other street issues. Track repair status and get updates by email or phone.",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Report an issue", href: "#" },
    sections: [
      { id: "report-an-issue", title: "Report an issue" },
      { id: "what-to-include", title: "What to include" },
      { id: "track-repair-status", title: "Track repair status" },
    ],
  },
  {
    slug: "business-licenses",
    title: "Business licenses",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Apply or renew", href: "#" },
    sections: [
      { id: "apply-for-a-license", title: "Apply for a license" },
      { id: "renew-a-license", title: "Renew a license" },
      { id: "license-types", title: "License types" },
      { id: "frequently-asked-questions", title: "Frequently asked questions" },
    ],
  },
  {
    slug: "public-records-request",
    title: "Public records request",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Submit a request", href: "#" },
    sections: [
      { id: "submit-a-request", title: "Submit a request" },
      { id: "what-is-available", title: "What is available" },
      { id: "response-time-and-fees", title: "Response time and fees" },
    ],
  },
  {
    slug: "child-care-assistance",
    title: "Child care assistance",
    breadcrumb: baseBreadcrumb,
    callToAction: { label: "Apply for assistance", href: "#" },
    sections: [
      { id: "apply", title: "Apply" },
      { id: "eligibility", title: "Eligibility" },
      { id: "find-approved-providers", title: "Find approved providers" },
      { id: "frequently-asked-questions", title: "Frequently asked questions" },
    ],
    infoBox: {
      title: "You should know",
      body: "Child care assistance can cover part or all of the cost of care for eligible families. Income and work or school requirements apply.",
    },
  },
]

export function getPageBySlug(slug: string): PageConfig | undefined {
  return pagesConfig.find((p) => p.slug === slug)
}

export function getAllPageSlugs(): string[] {
  return pagesConfig.map((p) => p.slug)
}

/** Slugs that are content pages (have Markdown). The "services" index is handled separately. */
export function getContentPageSlugs(): string[] {
  return pagesConfig.map((p) => p.slug)
}
