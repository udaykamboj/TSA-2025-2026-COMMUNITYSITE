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
    name: "Downtown Community Center",
    category: "Youth Programs",
    description: "Offering after-school programs, sports, arts, and mentoring for youth ages 6-18.",
    address: "123 Main Street, Downtown",
    phone: "(206) 555-0100",
    email: "info@dtcc.org",
    website: "www.dtcc.org",
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
    name: "City Food Bank",
    category: "Food",
    description: "Emergency food assistance and nutrition programs for residents in need.",
    address: "456 Oak Avenue",
    phone: "(206) 555-0101",
    email: "help@cityfoodbank.org",
    website: "www.cityfoodbank.org",
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
    name: "Community Mental Health Services",
    category: "Mental Health",
    description: "Counseling, therapy, and crisis support services for all ages.",
    address: "789 Pine Street",
    phone: "(206) 555-0102",
    email: "support@cmhs.org",
    website: "www.cmhs.org",
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
    name: "Senior Housing Initiative",
    category: "Housing",
    description: "Affordable housing options and support services specifically for seniors.",
    address: "321 Elm Street",
    phone: "(206) 555-0103",
    email: "info@seniorhousing.org",
    website: "www.seniorhousing.org",
    tags: ["Housing", "Seniors", "Affordable"],
    hours: "Mon-Fri 9am-5pm",
    distance: 2.1,
    isFree: false,
    ageGroups: ["Seniors"],
    logo: "🏠",
  },
  {
    id: "5",
    name: "Youth Scholarship Fund",
    category: "Education",
    description: "Educational scholarships and mentoring programs for youth from underserved communities.",
    address: "555 Birch Road",
    phone: "(206) 555-0104",
    email: "scholarships@ysf.org",
    website: "www.ysf.org",
    tags: ["Education", "Youth", "Scholarships"],
    hours: "Mon-Fri 10am-6pm",
    distance: 1.5,
    isFree: true,
    ageGroups: ["Teens"],
    logo: "📚",
  },
  {
    id: "6",
    name: "Emergency Assistance Hotline",
    category: "Financial Aid",
    description: "Financial assistance, rent support, and utility bill help for qualified residents.",
    address: "Online & Phone",
    phone: "(206) 555-0105",
    email: "aid@emergencyassist.org",
    website: "www.emergencyassist.org",
    tags: ["Financial Aid", "Emergency", "Utilities"],
    hours: "24/7",
    distance: 0,
    isFree: true,
    ageGroups: ["Families", "Seniors"],
    logo: "💰",
  },
]
