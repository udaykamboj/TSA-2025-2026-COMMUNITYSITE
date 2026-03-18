export type CategorySummarySlug =
  | "licenses-permits"
  | "support-resources"

export interface CategorySummary {
  slug: CategorySummarySlug
  title: string
  description: string
  serviceSlugs: string[]
  /** Featured callout block (image + text, like Visit Seattle's Dog-Friendly Hotels) */
  featuredCallout?: {
    title: string
    description: string
    image: string
    href: string
    imagePosition: "left" | "right"
  }
  /** Alternating image+text blocks */
  spotlightBlocks?: Array<{
    title: string
    description: string
    image: string
    href: string
    imagePosition: "left" | "right"
  }>
  /** Image cards — layout varies per category for organic feel */
  imageCards?: Array<{
    title: string
    description: string
    image: string
    href: string
    caption?: string
  }>
  /**
   * Layout variant for image section — each category gets a different composition:
   * - asymmetric: 1 large left + 2 small stacked right (Things to Do style)
   * - visitor-resources: 1 tall left + 2 stacked right (Explore Seattle style)
   * - featured-pair: 1 large + 1 small side-by-side (Food & Drink style)
   */
  imageLayoutVariant?: "asymmetric" | "visitor-resources" | "featured-pair"
  /** Section order — varies per page to avoid repetition */
  sectionOrder?: ("image" | "featured" | "spotlight" | "quick" | "slider" | "grid")[]
}

export const categorySummaries: Record<CategorySummarySlug, CategorySummary> = {
  "licenses-permits": {
    slug: "licenses-permits",
    title: "Licenses & Permits",
    description:
      "Birth certificates, marriage licenses, business licenses, and building permits. Apply online or in person.",
    serviceSlugs: [
      "birth-certificates",
      "marriage-licenses",
      "business-licenses",
      "building-permits",
    ],
    featuredCallout: {
      title: "Birth & Marriage Records",
      description:
        "Request certified copies of birth or marriage certificates online, by mail, or in person. Most requests are processed within a few weeks; expedited service is available.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      href: "/main/birth-certificates",
      imagePosition: "right",
    },
    spotlightBlocks: [
      {
        title: "Business Licenses",
        description:
          "Starting or growing a business? Apply for or renew your business license online. Find license types, fees, and requirements in one place.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
        href: "/main/business-licenses",
        imagePosition: "left",
      },
      {
        title: "Building Permits",
        description:
          "Planning a renovation or new construction? Apply for permits, schedule inspections, and check status online.",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
        href: "/main/building-permits",
        imagePosition: "right",
      },
    ],
    imageCards: [
      {
        title: "Birth & Marriage Records",
        description: "Certified copies for passports, school, benefits, or life events.",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
        href: "/main/birth-certificates",
        caption: "Vital records office",
      },
      {
        title: "Business & Building",
        description: "Business licenses and building permits for your project.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=500&fit=crop",
        href: "/main/business-licenses",
      },
    ],
    imageLayoutVariant: "featured-pair",
    sectionOrder: ["featured", "image", "spotlight", "slider", "quick", "grid"],
  },
  "support-resources": {
    slug: "support-resources",
    title: "Support & Resources",
    description:
      "Child care, food assistance, housing help, voter registration, and more. Get the support you need.",
    serviceSlugs: [
      "child-care-assistance",
      "snap-benefits",
      "apartment-complaint",
      "rent-increase-help",
      "voter-registration",
      "public-records-request",
    ],
    featuredCallout: {
      title: "Food & Child Care Assistance",
      description:
        "SNAP benefits help put food on the table for eligible families. Child care assistance can cover part or all of the cost of care—apply online or in person.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      href: "/main/snap-benefits",
      imagePosition: "left",
    },
    spotlightBlocks: [
      {
        title: "Housing & Rent Help",
        description:
          "Having trouble with your landlord or facing a rent increase? Learn your rights, file a complaint, or get connected to rental assistance programs.",
        image:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        href: "/main/rent-increase-help",
        imagePosition: "right",
      },
      {
        title: "Voter Registration & Public Records",
        description:
          "Register to vote, check your status, or request public records. Deadlines and requirements vary—we'll point you to the right resources.",
        image:
          "https://images.unsplash.com/photo-1540914124281-342587941389?w=800&h=600&fit=crop",
        href: "/main/voter-registration",
        imagePosition: "left",
      },
    ],
    imageCards: [
      {
        title: "Community Support",
        description: "Food assistance, child care, and housing help for residents.",
        image:
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=800&fit=crop",
        href: "/main/snap-benefits",
        caption: "Community resources",
      },
      {
        title: "Child Care & Housing",
        description: "Child care assistance and rental help.",
        image:
          "https://images.unsplash.com/photo-1587616211892-fdba2f4d2c9f?w=600&h=400&fit=crop",
        href: "/main/child-care-assistance",
      },
      {
        title: "Civic & Records",
        description: "Voter registration and public records.",
        image:
          "https://images.unsplash.com/photo-1540914124281-342587941389?w=600&h=400&fit=crop",
        href: "/main/voter-registration",
      },
    ],
    imageLayoutVariant: "visitor-resources",
    sectionOrder: ["image", "spotlight", "featured", "quick", "slider", "grid"],
  },
}

export const SUMMARY_SLUGS: CategorySummarySlug[] = [
  "licenses-permits",
  "support-resources",
]

export function getCategorySummaryBySlug(
  slug: string
): CategorySummary | undefined {
  if (SUMMARY_SLUGS.includes(slug as CategorySummarySlug)) {
    return categorySummaries[slug as CategorySummarySlug]
  }
  return undefined
}
