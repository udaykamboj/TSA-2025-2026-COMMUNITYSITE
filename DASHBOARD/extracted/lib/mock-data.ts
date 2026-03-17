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
  userId: string
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
    name: "FIRST Robotics PNW",
    description: "Pacific Northwest regional FIRST Robotics organization supporting FRC, FTC, and FLL teams.",
    status: "approved",
    memberCount: 245,
    createdAt: "2024-01-15",
    code: "PNW2024",
  },
  {
    id: "org-2",
    name: "Seattle Robotics Society",
    description: "Local robotics club focused on education and community outreach.",
    status: "pending",
    memberCount: 0,
    createdAt: "2026-02-28",
    code: "SRS2026",
  },
]

export const events: Event[] = [
  {
    id: "event-1",
    name: "PNW District Bonney Lake Event",
    program: "FIRST Robotics Competition",
    type: "District Event",
    location: "Bonney Lake High School",
    address: "10920 - 199th Ave Ct E",
    city: "Bonney Lake",
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
    name: "PNW District Glacier Peak Event",
    program: "FIRST Robotics Competition",
    type: "District Event",
    location: "Glacier Peak High School",
    address: "1508 136th St SE",
    city: "Snohomish",
    state: "WA",
    zip: "98296",
    startDate: "2026-03-13",
    endDate: "2026-03-15",
    setupDate: null,
    teardownDate: null,
  },
  {
    id: "event-3",
    name: "PNW District SunDome Event",
    program: "FIRST Robotics Competition",
    type: "District Event",
    location: "SunDome, State Fair Park",
    address: "1301 S Fair Ave",
    city: "Yakima",
    state: "WA",
    zip: "98901",
    startDate: "2026-03-19",
    endDate: "2026-03-21",
    setupDate: null,
    teardownDate: null,
  },
  {
    id: "event-4",
    name: "PNW District Sammamish Event",
    program: "FIRST Robotics Competition",
    type: "District Event",
    location: "Sammamish High School",
    address: "100 140th Ave SE",
    city: "Bellevue",
    state: "WA",
    zip: "98005",
    startDate: "2026-03-20",
    endDate: "2026-03-22",
    setupDate: null,
    teardownDate: null,
  },
  {
    id: "event-5",
    name: "Dig Deeper",
    program: "FIRST Tech Challenge",
    type: "League Tournament",
    location: "Bothell High School",
    address: "9130 NE 180th St",
    city: "Bothell",
    state: "WA",
    zip: "98011",
    startDate: "2026-03-21",
    endDate: "2026-03-21",
    setupDate: null,
    teardownDate: null,
  },
  {
    id: "event-6",
    name: "PNW District Auburn Event",
    program: "FIRST Robotics Competition",
    type: "District Event",
    location: "Auburn High School",
    address: "711 E Main St",
    city: "Auburn",
    state: "WA",
    zip: "98002",
    startDate: "2026-03-27",
    endDate: "2026-03-29",
    setupDate: null,
    teardownDate: null,
  },
]

export const volunteerRoles: VolunteerRole[] = [
  { id: "role-1", eventId: "event-1", name: "Field Assembly", description: "Help set up the competition field", spotsAvailable: 10, spotsFilled: 6 },
  { id: "role-2", eventId: "event-1", name: "Field Disassembly", description: "Help tear down the competition field", spotsAvailable: 10, spotsFilled: 4 },
  { id: "role-3", eventId: "event-1", name: "Judge", description: "Evaluate team presentations", spotsAvailable: 8, spotsFilled: 5 },
  { id: "role-4", eventId: "event-1", name: "Judge Advisor Assistant", description: "Support the judging process", spotsAvailable: 4, spotsFilled: 2 },
  { id: "role-5", eventId: "event-1", name: "Robot Inspector", description: "Verify robots meet competition specs", spotsAvailable: 6, spotsFilled: 3 },
  { id: "role-6", eventId: "event-1", name: "Field Resetter", description: "Reset field elements between matches", spotsAvailable: 12, spotsFilled: 8 },
  { id: "role-7", eventId: "event-2", name: "Field Assembly", description: "Help set up the competition field", spotsAvailable: 10, spotsFilled: 4 },
  { id: "role-8", eventId: "event-2", name: "Robot Inspector", description: "Verify robots meet competition specs", spotsAvailable: 6, spotsFilled: 2 },
]

export const volunteerApplications: VolunteerApplication[] = [
  {
    id: "app-1",
    userId: "user-1",
    eventId: "event-past-1",
    eventName: "Pasteur League Tournament",
    roles: ["Sunday Night Teardown"],
    status: "assigned",
    datesAvailable: ["2025-12-07"],
    notes: "",
    appliedAt: "2025-11-15",
  },
  {
    id: "app-2",
    userId: "user-1",
    eventId: "event-past-2",
    eventName: "Feynman League Tournament",
    roles: ["Robot Inspector", "Friday Night Set Up"],
    status: "assigned",
    datesAvailable: ["2025-12-06"],
    notes: "",
    appliedAt: "2025-11-20",
  },
  {
    id: "app-3",
    userId: "user-1",
    eventId: "event-past-3",
    eventName: "High Definition Invitational",
    roles: ["Field Resetter"],
    status: "assigned",
    datesAvailable: ["2026-01-11"],
    notes: "",
    appliedAt: "2025-12-28",
  },
]

export const participationHistory: ParticipationRecord[] = [
  {
    id: "part-1",
    userId: "user-1",
    program: "FTC",
    season: "2025",
    event: "Feynman League Tournament",
    eventDate: "12/6/2025 - 12/6/2025",
    role: "Robot Inspector",
    hours: 8,
  },
  {
    id: "part-2",
    userId: "user-1",
    program: "FTC",
    season: "2025",
    event: "Feynman League Tournament",
    eventDate: "12/6/2025 - 12/6/2025",
    role: "Friday Night Set Up",
    hours: 4,
  },
  {
    id: "part-3",
    userId: "user-1",
    program: "FTC",
    season: "2025",
    event: "Pasteur League Tournament",
    eventDate: "12/7/2025 - 12/7/2025",
    role: "Sunday Night Teardown",
    hours: 4,
  },
  {
    id: "part-4",
    userId: "user-1",
    program: "FTC",
    season: "2025",
    event: "High Definition Invitational",
    eventDate: "1/11/2026 - 1/11/2026",
    role: "Field Resetter",
    hours: 8,
  },
]

export const programs = [
  "FIRST LEGO League - Explore",
  "FIRST LEGO League - Challenge",
  "FIRST Tech Challenge",
  "FIRST Robotics Competition",
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
