export interface Resource {
  id: string
  name: string
  category: string
  description: string
  address: string
  phone: string
  email: string
  website: string
  tags: string[]
  hours: string
  distance?: number
  isFree: boolean
  ageGroups: string[]
  featured?: boolean
  logo?: string
}

export const sampleResources: Resource[] = [
  {
    id: "1",
    name: "Resource Center Alpha",
    category: "Youth Programs",
    description: "Offering after-school programs, sports, arts, and mentoring for youth.",
    address: "123 Example Boulevard",
    phone: "(555) 123-4567",
    email: "alpha@example.com",
    website: "https://example.com/alpha",
    tags: ["Youth", "Sports", "Arts", "Free"],
    hours: "Mon-Fri 3pm-8pm, Sat 10am-6pm",
    distance: 0.5,
    isFree: true,
    ageGroups: ["Teens", "Families"],
    featured: true,
    logo: "🏢",
  },
  {
    id: "2",
    name: "Food Assistance Hub",
    category: "Food",
    description: "Emergency food assistance and nutrition programs for residents.",
    address: "456 Sample Avenue",
    phone: "(555) 234-5678",
    email: "food@example.com",
    website: "https://example.com/food",
    tags: ["Food", "Free", "Emergency"],
    hours: "Mon-Sat 9am-5pm",
    distance: 1.2,
    isFree: true,
    ageGroups: ["Families", "Seniors"],
    featured: true,
    logo: "🍎",
  },
  {
    id: "3",
    name: "Mental Health Network",
    category: "Mental Health",
    description: "Counseling, therapy, and crisis support services for all ages.",
    address: "789 Mock Street",
    phone: "(555) 345-6789",
    email: "mentalhealth@example.com",
    website: "https://example.com/health",
    tags: ["Mental Health", "Counseling", "Support"],
    hours: "Mon-Fri 8am-6pm, Sat 10am-4pm",
    distance: 0.8,
    isFree: false,
    ageGroups: ["Teens", "Families", "Seniors"],
    featured: true,
    logo: "💭",
  },
  {
    id: "4",
    name: "Senior Housing Support",
    category: "Housing",
    description: "Affordable housing options and support services specifically for seniors.",
    address: "321 Placeholder Elm",
    phone: "(555) 456-7890",
    email: "housing@example.com",
    website: "https://example.com/housing",
    tags: ["Housing", "Seniors", "Affordable"],
    hours: "Mon-Fri 9am-5pm",
    distance: 2.1,
    isFree: false,
    ageGroups: ["Seniors"],
    logo: "🏠",
  },
  {
    id: "5",
    name: "Education Access Initiative",
    category: "Education",
    description: "Educational scholarships and mentoring programs for youth.",
    address: "555 Birch Road",
    phone: "(555) 567-8901",
    email: "education@example.com",
    website: "https://example.com/edu",
    tags: ["Education", "Youth", "Scholarships"],
    hours: "Mon-Fri 10am-6pm",
    distance: 1.5,
    isFree: true,
    ageGroups: ["Teens"],
    logo: "📚",
  },
  {
    id: "6",
    name: "Emergency Care Helpline",
    category: "Financial Aid",
    description: "Financial assistance, rent support, and utility bill help.",
    address: "Online & Phone",
    phone: "(555) 678-9012",
    email: "emergency@example.com",
    website: "https://example.com/emergency",
    tags: ["Financial Aid", "Emergency", "Utilities"],
    hours: "24/7",
    distance: 0,
    isFree: true,
    ageGroups: ["Families", "Seniors"],
    logo: "💰",
  },
]
