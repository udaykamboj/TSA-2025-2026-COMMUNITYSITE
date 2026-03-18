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
    name: "FIRST Robotics PNW",
    description: "Pacific Northwest regional FIRST Robotics organization supporting FRC, FTC, and FLL teams.",
    status: "approved",
    memberCount: 245,
    createdAt: "2024-01-15",
    code: "PNW2024",
  },
  {
    id: "org-2",
    name: "Maplewood Robotics Society",
    description: "Supporting local robotics teams and STEM education.",
    contactPerson: "contact@maplewoodrobotics.org",
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
    eventName: "PNW District Bonney Lake Event",
    eventType: "District Event - FRC",
    status: "PENDING",
    role: "Judge",
    daysAssigned: [],
    setupDate: "TBA",
    eventStart: "3/6/2026",
    eventEnd: "3/8/2026",
    tearDown: "TBA",
    location: "Bonney Lake High School",
    address: "10920 - 199th Ave Ct E",
    city: "Bonney Lake",
    state: "WA",
    zip: "98391",
    country: "USA",
    website: "http://www.firstwa.org",
    hasMissingCertifications: true,
    outstandingTasks: [
      { id: "t1", label: "Complete YPP Certification", completed: false, link: "#" },
      { id: "t2", label: "Submit Background Check", completed: false, link: "#" },
      { id: "t3", label: "Complete Judge Training Module", completed: false, link: "#" },
    ],
  },
  {
    id: "role-2",
    userEmail: "demo@example.com",
    eventName: "Pasteur League Tournament",
    eventType: "League Tournament - FTC",
    status: "ASSIGNED",
    role: "Sunday Night Teardown",
    daysAssigned: ["Sun: 5:00 PM - 9:00 PM"],
    setupDate: "TBA",
    eventStart: "12/7/2025",
    eventEnd: "12/7/2025",
    tearDown: "TBA",
    location: "Henry M. Jackson High School",
    address: "1508 136th St SE",
    city: "Mill Creek",
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
    eventName: "Feynman League Tournament",
    eventType: "League Tournament - FTC",
    status: "ASSIGNED",
    role: "Robot Inspector",
    daysAssigned: ["Sat: 8:00 AM - 12:00 PM"],
    additionalRoles: [
      { role: "Friday Night Set Up", days: ["Fri: 5:00 PM - 9:00 PM"] }
    ],
    setupDate: "TBA",
    eventStart: "12/6/2025",
    eventEnd: "12/6/2025",
    tearDown: "TBA",
    location: "Henry M. Jackson High School",
    address: "1508 136th St SE",
    city: "Mill Creek",
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
    eventName: "High Definition Invitational",
    eventType: "Scrimmage - FTC",
    status: "ASSIGNED",
    role: "Field Resetter",
    daysAssigned: [],
    setupDate: "TBA",
    eventStart: "1/11/2026",
    eventEnd: "1/11/2026",
    tearDown: "TBA",
    location: "Interlake High School",
    address: "16245 NE 24th St",
    city: "Bellevue",
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
    eventName: "FIRST Championship",
    eventType: "Championship - FRC",
    status: "ASSIGNED",
    role: "Lead Robot Inspector",
    daysAssigned: ["Wed: 8:00 AM - 6:00 PM", "Thu: 7:00 AM - 5:00 PM"],
    setupDate: "TBA",
    eventStart: "4/15/2026",
    eventEnd: "4/18/2026",
    tearDown: "TBA",
    location: "George R. Brown Convention Center",
    address: "1001 Avenida De Las Americas",
    city: "Houston",
    state: "TX",
    zip: "77010",
    country: "USA",
    website: "https://www.firstchampionship.org",
    hasMissingCertifications: false,
    outstandingTasks: [],
  },
  {
    id: "role-admin-2",
    userEmail: "admin@example.com",
    eventName: "PNW District Event",
    eventType: "District Event - FRC",
    status: "PENDING",
    role: "Judge Advisor",
    daysAssigned: [],
    setupDate: "TBA",
    eventStart: "3/20/2026",
    eventEnd: "3/22/2026",
    tearDown: "TBA",
    location: "Glacier Peak High School",
    address: "7401 144th Pl SE",
    city: "Snohomish",
    state: "WA",
    zip: "98296",
    country: "USA",
    website: "http://www.firstwa.org",
    hasMissingCertifications: true,
    outstandingTasks: [
      { id: "a-t1", label: "Complete Judge Advisor Training", completed: false, link: "#" },
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
    eventName: "PNW District Bonney Lake Event",
    eventType: "District Event - FRC",
    status: "PENDING",
    roles: [{ name: "Judge", days: [] }],
    setupDate: "TBA",
    eventStart: "3/6/2026",
    eventEnd: "3/8/2026",
    tearDown: "TBA",
    location: "Bonney Lake High School",
    address: "10920 - 199th Ave Ct E",
    city: "Bonney Lake",
    state: "WA",
    zip: "98391",
    country: "USA",
    website: "http://www.firstwa.org",
    appliedAt: "2026-02-15",
  },
  {
    id: "app-2",
    userEmail: "demo@example.com",
    eventName: "Pasteur League Tournament",
    eventType: "League Tournament - FTC",
    status: "ASSIGNED",
    roles: [{ name: "Sunday Night Teardown", days: ["Sun: 5:00 PM - 9:00 PM"] }],
    setupDate: "TBA",
    eventStart: "12/7/2025",
    eventEnd: "12/7/2025",
    tearDown: "TBA",
    location: "Henry M. Jackson High School",
    address: "1508 136th St SE",
    city: "Mill Creek",
    state: "WA",
    zip: "98012",
    country: "USA",
    website: "",
    appliedAt: "2025-11-15",
  },
  {
    id: "app-3",
    userEmail: "demo@example.com",
    eventName: "Feynman League Tournament",
    eventType: "League Tournament - FTC",
    status: "ASSIGNED",
    roles: [
      { name: "Robot Inspector", days: ["Sat: 8:00 AM - 12:00 PM"] },
      { name: "Friday Night Set Up", days: ["Fri: 5:00 PM - 9:00 PM"] },
    ],
    setupDate: "TBA",
    eventStart: "12/6/2025",
    eventEnd: "12/6/2025",
    tearDown: "TBA",
    location: "Henry M. Jackson High School",
    address: "1508 136th St SE",
    city: "Mill Creek",
    state: "WA",
    zip: "98012",
    country: "USA",
    website: "",
    appliedAt: "2025-11-20",
  },
  {
    id: "app-4",
    userEmail: "demo@example.com",
    eventName: "High Definition Invitational",
    eventType: "Scrimmage - FTC",
    status: "ASSIGNED",
    roles: [{ name: "Field Resetter", days: [] }],
    setupDate: "TBA",
    eventStart: "1/11/2026",
    eventEnd: "1/11/2026",
    tearDown: "TBA",
    location: "Interlake High School",
    address: "16245 NE 24th St",
    city: "Bellevue",
    state: "WA",
    zip: "98008",
    country: "USA",
    website: "",
    appliedAt: "2025-12-28",
  },
  {
    id: "app-admin-1",
    userEmail: "admin@example.com",
    eventName: "FIRST Championship",
    eventType: "Championship - FRC",
    status: "ASSIGNED",
    roles: [{ name: "Lead Robot Inspector", days: ["Wed: 8:00 AM - 6:00 PM", "Thu: 7:00 AM - 5:00 PM"] }],
    setupDate: "TBA",
    eventStart: "4/15/2026",
    eventEnd: "4/18/2026",
    tearDown: "TBA",
    location: "George R. Brown Convention Center",
    address: "1001 Avenida De Las Americas",
    city: "Houston",
    state: "TX",
    zip: "77010",
    country: "USA",
    website: "https://www.firstchampionship.org",
    appliedAt: "2026-01-10",
  },
  {
    id: "app-admin-2",
    userEmail: "admin@example.com",
    eventName: "PNW District Event",
    eventType: "District Event - FRC",
    status: "PENDING",
    roles: [{ name: "Judge Advisor", days: [] }],
    setupDate: "TBA",
    eventStart: "3/20/2026",
    eventEnd: "3/22/2026",
    tearDown: "TBA",
    location: "Glacier Peak High School",
    address: "7401 144th Pl SE",
    city: "Snohomish",
    state: "WA",
    zip: "98296",
    country: "USA",
    website: "http://www.firstwa.org",
    appliedAt: "2026-02-01",
  },
]

export const participationHistory: ParticipationRecord[] = [
  {
    id: "part-1",
    userEmail: "demo@example.com",
    program: "FTC",
    season: "2025",
    event: "Feynman League Tournament",
    eventDate: "12/6/2025 - 12/6/2025",
    role: "Robot Inspector",
    hours: 8,
  },
  {
    id: "part-2",
    userEmail: "demo@example.com",
    program: "FTC",
    season: "2025",
    event: "Feynman League Tournament",
    eventDate: "12/6/2025 - 12/6/2025",
    role: "Friday Night Set Up",
    hours: 4,
  },
  {
    id: "part-3",
    userEmail: "demo@example.com",
    program: "FTC",
    season: "2025",
    event: "Pasteur League Tournament",
    eventDate: "12/7/2025 - 12/7/2025",
    role: "Sunday Night Teardown",
    hours: 4,
  },
  {
    id: "part-4",
    userEmail: "demo@example.com",
    program: "FTC",
    season: "2025",
    event: "High Definition Invitational",
    eventDate: "1/11/2026 - 1/11/2026",
    role: "Field Resetter",
    hours: 8,
  },
  {
    id: "part-admin-1",
    userEmail: "admin@example.com",
    program: "FRC",
    season: "2025",
    event: "FIRST Championship",
    eventDate: "4/16/2025 - 4/19/2025",
    role: "Lead Robot Inspector",
    hours: 40,
  },
  {
    id: "part-admin-2",
    userEmail: "admin@example.com",
    program: "FRC",
    season: "2025",
    event: "PNW District Championship",
    eventDate: "4/3/2025 - 4/5/2025",
    role: "Judge Advisor",
    hours: 24,
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
