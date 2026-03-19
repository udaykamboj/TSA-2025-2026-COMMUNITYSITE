// Mock data for volunteer management system

export interface User {
  id: string
  name: string
  email: string
  role: "user" | "admin" | "organization"
  organizationId?: string
  volunteerSince: number
  totalHours: number
  avatar?: string
}

export interface Organization {
  id: string
  name: string
  description: string
  status: "pending" | "approved" | "rejected"
  memberCount: number
  createdAt: string
  code: string
  // Extended fields for registration
  serviceTypes?: string[]
  contactPerson?: string
  email?: string
  phone?: string
  website?: string
  address?: string
  hours?: string
  ageGroups?: string[]
  isFree?: boolean
  eligibility?: string
}

export interface Event {
  id: string
  name: string
  program: string
  type: string
  location: string
  address: string
  city: string
  state: string
  zip: string
  startDate: string
  endDate: string
  setupDate: string | null
  teardownDate: string | null
  organizationId?: string
  createdBy?: string
}

export interface Resource {
  id: string
  organizationId: string
  title: string
  description: string
  type: "document" | "link" | "guide" | "other"
  url?: string
  createdAt: string
}

export interface VolunteerRole {
  id: string
  eventId: string
  name: string
  description: string
  spotsAvailable: number
  spotsFilled: number
}

export interface VolunteerApplication {
  id: string
  userId: string
  eventId: string
  eventName: string
  roles: string[]
  status: "pending" | "assigned" | "rejected"
  datesAvailable: string[]
  notes: string
  appliedAt: string
}

export interface ParticipationRecord {
  id: string
  userEmail: string
  program: string
  season: string
  event: string
  eventDate: string
  role: string
  hours: number
}

export const currentUser: User = {
  id: "user-1",
  name: "Uday Kamboj",
  email: "uday@example.com",
  role: "user",
  volunteerSince: 2022,
  totalHours: 48,
}

export const organizations: Organization[] = [
  {
    id: "org-1",
    name: "Maplewood Food Bank",
    description: "Local food bank serving families in need across the Maplewood area.",
    status: "approved",
    memberCount: 245,
    createdAt: "2024-01-15",
    code: "MFB2024",
  },
  {
    id: "org-2",
    name: "Green Parks Initiative",
    description: "Dedicated to keeping our local parks clean and accessible for everyone.",
    contactPerson: "contact@greenparks.org",
    status: "pending",
    memberCount: 0,
    createdAt: "2026-02-28",
    code: "GPI2026",
  },
]

export const events: Event[] = [
  {
    id: "event-1",
    name: "Spring Community Food Drive",
    program: "Food Distribution",
    type: "Community Event",
    location: "Maplewood Community Center",
    address: "100 Main St",
    city: "Maplewood",
    state: "WA",
    zip: "98391",
    startDate: "2026-03-06",
    endDate: "2026-03-08",
    setupDate: null,
    teardownDate: null,
    organizationId: "org-1",
  },
  {
    id: "event-2",
    name: "Downtown Park Cleanup",
    program: "Environmental",
    type: "Outdoor Volunteer",
    location: "Centennial Park",
    address: "200 Park Ave",
    city: "Maplewood",
    state: "WA",
    zip: "98296",
    startDate: "2026-03-13",
    endDate: "2026-03-15",
    setupDate: null,
    teardownDate: null,
  },
  {
    id: "event-3",
    name: "Senior Center Tech Help",
    program: "Digital Literacy",
    type: "Skills Based",
    location: "Maplewood Senior Center",
    address: "300 Elder Way",
    city: "Maplewood",
    state: "WA",
    zip: "98901",
    startDate: "2026-03-19",
    endDate: "2026-03-21",
    setupDate: null,
    teardownDate: null,
  },
  {
    id: "event-4",
    name: "Library Book Sale Setup",
    program: "Education Support",
    type: "Fundraising",
    location: "Maplewood Public Library",
    address: "400 Learn Rd",
    city: "Maplewood",
    state: "WA",
    zip: "98005",
    startDate: "2026-03-20",
    endDate: "2026-03-22",
    setupDate: null,
    teardownDate: null,
  },
  {
    id: "event-5",
    name: "Riverfront Revitalization",
    program: "Environmental",
    type: "Outdoor Volunteer",
    location: "Riverfront Trail",
    address: "500 Water St",
    city: "Maplewood",
    state: "WA",
    zip: "98011",
    startDate: "2026-03-21",
    endDate: "2026-03-21",
    setupDate: null,
    teardownDate: null,
  },
  {
    id: "event-6",
    name: "Youth Mentorship Kickoff",
    program: "Youth Development",
    type: "Mentorship",
    location: "Maplewood High School",
    address: "600 School Ln",
    city: "Maplewood",
    state: "WA",
    zip: "98002",
    startDate: "2026-03-27",
    endDate: "2026-03-29",
    setupDate: null,
    teardownDate: null,
  },
]

export const volunteerRoles: VolunteerRole[] = [
  { id: "role-1", eventId: "event-1", name: "Donation Sorter", description: "Sort incoming food donations by category", spotsAvailable: 10, spotsFilled: 6 },
  { id: "role-2", eventId: "event-1", name: "Box Packer", description: "Pack food boxes for distribution", spotsAvailable: 10, spotsFilled: 4 },
  { id: "role-3", eventId: "event-1", name: "Greeter", description: "Welcome donors and provide directions", spotsAvailable: 8, spotsFilled: 5 },
  { id: "role-4", eventId: "event-1", name: "Traffic Control", description: "Direct vehicles in the drop-off lane", spotsAvailable: 4, spotsFilled: 2 },
  { id: "role-5", eventId: "event-1", name: "Intake Coordinator", description: "Register donors and distribute receipts", spotsAvailable: 6, spotsFilled: 3 },
  { id: "role-6", eventId: "event-1", name: "Cleanup Crew", description: "Help clean the center after the drive", spotsAvailable: 12, spotsFilled: 8 },
  { id: "role-7", eventId: "event-2", name: "Litter Collection", description: "Collect trash along the park trails", spotsAvailable: 10, spotsFilled: 4 },
  { id: "role-8", eventId: "event-2", name: "Tree Planter", description: "Assist with planting new saplings", spotsAvailable: 6, spotsFilled: 2 },
]

export const volunteerApplications: VolunteerApplication[] = [
  {
    id: "app-1",
    userId: "user-1",
    eventId: "event-past-1",
    eventName: "Winter Coat Drive",
    roles: ["Donation Sorting"],
    status: "assigned",
    datesAvailable: ["2025-12-07"],
    notes: "",
    appliedAt: "2025-11-15",
  },
  {
    id: "app-2",
    userId: "user-1",
    eventId: "event-past-2",
    eventName: "Holiday Meals Delivery",
    roles: ["Delivery Driver", "Meal Packer"],
    status: "assigned",
    datesAvailable: ["2025-12-06"],
    notes: "",
    appliedAt: "2025-11-20",
  },
  {
    id: "app-3",
    userId: "user-1",
    eventId: "event-past-3",
    eventName: "New Year Neighborhood Cleanup",
    roles: ["Litter Collection"],
    status: "assigned",
    datesAvailable: ["2026-01-11"],
    notes: "",
    appliedAt: "2025-12-28",
  },
]

export interface OutstandingTask {
  id: string
  label: string
  completed: boolean
  link: string
}

export interface AdditionalRole {
  role: string
  days: string[]
}

export interface AssignedRole {
  id: string
  userEmail: string
  eventName: string
  eventType: string
  status: string
  role: string
  daysAssigned: string[]
  additionalRoles?: AdditionalRole[]
  setupDate: string
  eventStart: string
  eventEnd: string
  tearDown: string
  location: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  website: string
  hasMissingCertifications: boolean
  outstandingTasks: OutstandingTask[]
}

export const assignedRolesData: AssignedRole[] = [
  {
    id: "role-1",
    userEmail: "demo@example.com",
    eventName: "Spring Community Food Drive",
    eventType: "Community Event",
    status: "PENDING",
    role: "Donation Sorter",
    daysAssigned: [],
    setupDate: "TBA",
    eventStart: "3/6/2026",
    eventEnd: "3/8/2026",
    tearDown: "TBA",
    location: "Maplewood Community Center",
    address: "100 Main St",
    city: "Maplewood",
    state: "WA",
    zip: "98391",
    country: "USA",
    website: "https://www.maplewoodfoodbank.org",
    hasMissingCertifications: true,
    outstandingTasks: [
      { id: "t1", label: "Complete Food Safety Training", completed: false, link: "#" },
      { id: "t2", label: "Submit Background Check", completed: false, link: "#" },
      { id: "t3", label: "Read Volunteer Handbook", completed: false, link: "#" },
    ],
  },
  {
    id: "role-2",
    userEmail: "demo@example.com",
    eventName: "Winter Coat Drive",
    eventType: "Community Support",
    status: "ASSIGNED",
    role: "Donation Sorter",
    daysAssigned: ["Sun: 5:00 PM - 9:00 PM"],
    setupDate: "TBA",
    eventStart: "12/7/2025",
    eventEnd: "12/7/2025",
    tearDown: "TBA",
    location: "South Maplewood High School",
    address: "1508 136th St SE",
    city: "Maplewood",
    state: "WA",
    zip: "98012",
    country: "USA",
    website: "",
    hasMissingCertifications: false,
    outstandingTasks: [],
  },
  {
    id: "role-3",
    userEmail: "demo@example.com",
    eventName: "Holiday Meals Delivery",
    eventType: "Community Service",
    status: "ASSIGNED",
    role: "Delivery Driver",
    daysAssigned: ["Sat: 8:00 AM - 12:00 PM"],
    additionalRoles: [
      { role: "Meal Packer", days: ["Fri: 5:00 PM - 9:00 PM"] }
    ],
    setupDate: "TBA",
    eventStart: "12/6/2025",
    eventEnd: "12/6/2025",
    tearDown: "TBA",
    location: "Community Resource Center",
    address: "1508 136th St SE",
    city: "Maplewood",
    state: "WA",
    zip: "98012",
    country: "USA",
    website: "",
    hasMissingCertifications: false,
    outstandingTasks: [],
  },
  {
    id: "role-4",
    userEmail: "demo@example.com",
    eventName: "New Year Neighborhood Cleanup",
    eventType: "Environmental",
    status: "ASSIGNED",
    role: "Litter Collection",
    daysAssigned: [],
    setupDate: "TBA",
    eventStart: "1/11/2026",
    eventEnd: "1/11/2026",
    tearDown: "TBA",
    location: "East Maplewood Park",
    address: "16245 NE 24th St",
    city: "Maplewood",
    state: "WA",
    zip: "98008",
    country: "USA",
    website: "",
    hasMissingCertifications: false,
    outstandingTasks: [],
  },
  {
    id: "role-admin-1",
    userEmail: "admin@example.com",
    eventName: "Annual City Charity Gala",
    eventType: "Citywide Fundraising",
    status: "ASSIGNED",
    role: "Event Coordinator",
    daysAssigned: ["Wed: 8:00 AM - 6:00 PM", "Thu: 7:00 AM - 5:00 PM"],
    setupDate: "TBA",
    eventStart: "4/15/2026",
    eventEnd: "4/18/2026",
    tearDown: "TBA",
    location: "Grand Ballroom, City Hall",
    address: "1001 Avenida De Las Americas",
    city: "Maplewood",
    state: "WA",
    zip: "77010",
    country: "USA",
    website: "https://www.maplewoodgala.org",
    hasMissingCertifications: false,
    outstandingTasks: [],
  },
  {
    id: "role-admin-2",
    userEmail: "admin@example.com",
    eventName: "Downtown Park Cleanup",
    eventType: "Environmental",
    status: "PENDING",
    role: "Team Lead",
    daysAssigned: [],
    setupDate: "TBA",
    eventStart: "3/20/2026",
    eventEnd: "3/22/2026",
    tearDown: "TBA",
    location: "Centennial Park",
    address: "7401 144th Pl SE",
    city: "Maplewood",
    state: "WA",
    zip: "98296",
    country: "USA",
    website: "https://www.greenparks.org",
    hasMissingCertifications: true,
    outstandingTasks: [
      { id: "a-t1", label: "Complete Safety Briefing", completed: false, link: "#" },
    ],
  },
]

export interface DetailedApplicationRole {
  name: string
  days: string[]
}

export interface DetailedApplication {
  id: string
  userEmail: string
  eventName: string
  eventType: string
  status: string
  roles: DetailedApplicationRole[]
  setupDate: string
  eventStart: string
  eventEnd: string
  tearDown: string
  location: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  website: string
  appliedAt: string
}

export const detailedApplicationsData: DetailedApplication[] = [
  {
    id: "app-1",
    userEmail: "demo@example.com",
    eventName: "Spring Community Food Drive",
    eventType: "Community Event",
    status: "PENDING",
    roles: [{ name: "Donation Sorter", days: [] }],
    setupDate: "TBA",
    eventStart: "3/6/2026",
    eventEnd: "3/8/2026",
    tearDown: "TBA",
    location: "Maplewood Community Center",
    address: "100 Main St",
    city: "Maplewood",
    state: "WA",
    zip: "98391",
    country: "USA",
    website: "https://www.maplewoodfoodbank.org",
    appliedAt: "2026-02-15",
  },
  {
    id: "app-2",
    userEmail: "demo@example.com",
    eventName: "Winter Coat Drive",
    eventType: "Community Support",
    status: "ASSIGNED",
    roles: [{ name: "Donation Sorter", days: ["Sun: 5:00 PM - 9:00 PM"] }],
    setupDate: "TBA",
    eventStart: "12/7/2025",
    eventEnd: "12/7/2025",
    tearDown: "TBA",
    location: "South Maplewood High School",
    address: "1508 136th St SE",
    city: "Maplewood",
    state: "WA",
    zip: "98012",
    country: "USA",
    website: "",
    appliedAt: "2025-11-15",
  },
  {
    id: "app-3",
    userEmail: "demo@example.com",
    eventName: "Holiday Meals Delivery",
    eventType: "Community Service",
    status: "ASSIGNED",
    roles: [
      { name: "Delivery Driver", days: ["Sat: 8:00 AM - 12:00 PM"] },
      { name: "Meal Packer", days: ["Fri: 5:00 PM - 9:00 PM"] },
    ],
    setupDate: "TBA",
    eventStart: "12/6/2025",
    eventEnd: "12/6/2025",
    tearDown: "TBA",
    location: "Resource Hub",
    address: "1508 136th St SE",
    city: "Maplewood",
    state: "WA",
    zip: "98012",
    country: "USA",
    website: "",
    appliedAt: "2025-11-20",
  },
  {
    id: "app-4",
    userEmail: "demo@example.com",
    eventName: "New Year Neighborhood Cleanup",
    eventType: "Environmental",
    status: "ASSIGNED",
    roles: [{ name: "Litter Collection", days: [] }],
    setupDate: "TBA",
    eventStart: "1/11/2026",
    eventEnd: "1/11/2026",
    tearDown: "TBA",
    location: "East Maplewood Park",
    address: "16245 NE 24th St",
    city: "Maplewood",
    state: "WA",
    zip: "98008",
    country: "USA",
    website: "",
    appliedAt: "2025-12-28",
  },
  {
    id: "app-admin-1",
    userEmail: "admin@example.com",
    eventName: "Annual City Charity Gala",
    eventType: "Citywide Fundraising",
    status: "ASSIGNED",
    roles: [{ name: "Event Coordinator", days: ["Wed: 8:00 AM - 6:00 PM", "Thu: 7:00 AM - 5:00 PM"] }],
    setupDate: "TBA",
    eventStart: "4/15/2026",
    eventEnd: "4/18/2026",
    tearDown: "TBA",
    location: "Grand Ballroom, City Hall",
    address: "1001 Avenida De Las Americas",
    city: "Maplewood",
    state: "WA",
    zip: "77010",
    country: "USA",
    website: "https://www.maplewoodgala.org",
    appliedAt: "2026-01-10",
  },
  {
    id: "app-admin-2",
    userEmail: "admin@example.com",
    eventName: "Downtown Park Cleanup",
    eventType: "Environmental",
    status: "PENDING",
    roles: [{ name: "Team Lead", days: [] }],
    setupDate: "TBA",
    eventStart: "3/20/2026",
    eventEnd: "3/22/2026",
    tearDown: "TBA",
    location: "Centennial Park",
    address: "7401 144th Pl SE",
    city: "Maplewood",
    state: "WA",
    zip: "98296",
    country: "USA",
    website: "https://www.greenparks.org",
    appliedAt: "2026-02-01",
  },
]

export const participationHistory: ParticipationRecord[] = [
  {
    id: "part-1",
    userEmail: "demo@example.com",
    program: "Community Service",
    season: "2025",
    event: "Holiday Meals Delivery",
    eventDate: "12/6/2025 - 12/6/2025",
    role: "Delivery Driver",
    hours: 8,
  },
  {
    id: "part-2",
    userEmail: "demo@example.com",
    program: "Community Service",
    season: "2025",
    event: "Holiday Meals Delivery",
    eventDate: "12/6/2025 - 12/6/2025",
    role: "Meal Packer",
    hours: 4,
  },
  {
    id: "part-3",
    userEmail: "demo@example.com",
    program: "Community Support",
    season: "2025",
    event: "Winter Coat Drive",
    eventDate: "12/7/2025 - 12/7/2025",
    role: "Donation Sorter",
    hours: 4,
  },
  {
    id: "part-4",
    userEmail: "demo@example.com",
    program: "Environmental",
    season: "2026",
    event: "New Year Neighborhood Cleanup",
    eventDate: "1/11/2026 - 1/11/2026",
    role: "Litter Collection",
    hours: 8,
  },
  {
    id: "part-admin-1",
    userEmail: "admin@example.com",
    program: "Fundraising",
    season: "2025",
    event: "Annual City Charity Gala",
    eventDate: "4/16/2025 - 4/19/2025",
    role: "Event Coordinator",
    hours: 40,
  },
  {
    id: "part-admin-2",
    userEmail: "admin@example.com",
    program: "Environmental",
    season: "2025",
    event: "Spring River Sweep",
    eventDate: "4/3/2025 - 4/5/2025",
    role: "Team Lead",
    hours: 24,
  },
]

export const programs = [
  "Food Distribution",
  "Digital Literacy",
  "Environment Conservation",
  "Education & Youth Support",
]

export const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
]

// --- Notification System ---
export interface Notification {
  id: string
  userEmail: string
  message: string
  type: "info" | "success" | "warning" | "error"
  read: boolean
  createdAt: string
  link?: string
}

export const defaultNotifications: Notification[] = [
  {
    id: "notif-1",
    userEmail: "demo@example.com",
    message: "Your application for Donation Sorter at Spring Community Food Drive is pending review.",
    type: "info",
    read: false,
    createdAt: "2026-02-15T10:00:00Z",
    link: "/dashboard/applications",
  },
  {
    id: "notif-2",
    userEmail: "demo@example.com",
    message: "You have been assigned as Delivery Driver for Holiday Meals Delivery.",
    type: "success",
    read: true,
    createdAt: "2025-11-22T14:30:00Z",
    link: "/dashboard",
  },
  {
    id: "notif-3",
    userEmail: "demo@example.com",
    message: "Missing training: Please complete Food Safety Training for Spring Community Food Drive.",
    type: "warning",
    read: false,
    createdAt: "2026-02-20T09:00:00Z",
    link: "/dashboard",
  },
  {
    id: "notif-4",
    userEmail: "demo@example.com",
    message: "Welcome to the Maplewood Community Hub! Complete your profile to get started.",
    type: "info",
    read: true,
    createdAt: "2025-10-01T08:00:00Z",
    link: "/dashboard/profile",
  },
  {
    id: "notif-admin-1",
    userEmail: "admin@example.com",
    message: "New organization 'Green Parks Initiative' is pending approval.",
    type: "info",
    read: false,
    createdAt: "2026-02-28T11:00:00Z",
    link: "/admin/organizations",
  },
  {
    id: "notif-admin-2",
    userEmail: "admin@example.com",
    message: "New volunteer application received for Spring Community Food Drive.",
    type: "info",
    read: false,
    createdAt: "2026-02-15T10:30:00Z",
    link: "/admin/applications",
  },
  {
    id: "notif-admin-3",
    userEmail: "admin@example.com",
    message: "Your application for Event Coordinator at City Charity Gala has been confirmed.",
    type: "success",
    read: true,
    createdAt: "2026-01-12T16:00:00Z",
    link: "/admin",
  },
]

// --- User Profile ---
export interface UserProfile {
  displayName: string
  phone: string
  bio: string
  shirtSize: string
  emergencyContact: string
  emergencyPhone: string
  employer: string
}

export const demoUserProfile: UserProfile = {
  displayName: "Demo Volunteer",
  phone: "(555) 123-4567",
  bio: "Passionate community volunteer since 2022. Experienced in food distribution and environmental cleanup.",
  shirtSize: "M",
  emergencyContact: "Jane Doe",
  emergencyPhone: "(555) 987-6543",
  employer: "Volunteer Coordinator",
}

export const adminUserProfile: UserProfile = {
  displayName: "Admin User",
  phone: "(555) 000-1111",
  bio: "Platform administrator and lead volunteer coordinator for Maplewood region.",
  shirtSize: "L",
  emergencyContact: "John Admin",
  emergencyPhone: "(555) 000-2222",
  employer: "Maplewood Hub",
}

export const emptyUserProfile: UserProfile = {
  displayName: "",
  phone: "",
  bio: "",
  shirtSize: "",
  emergencyContact: "",
  emergencyPhone: "",
  employer: "",
}

// --- User Settings ---
export interface UserSettings {
  emailNotifications: boolean
  inAppNotifications: boolean
  profileVisible: boolean
}

export const defaultUserSettings: UserSettings = {
  emailNotifications: true,
  inAppNotifications: true,
  profileVisible: true,
}
