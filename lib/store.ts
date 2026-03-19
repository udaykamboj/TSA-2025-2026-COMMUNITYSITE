"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type {
  User,
  Organization,
  VolunteerApplication,
  ParticipationRecord,
  AssignedRole,
  DetailedApplication,
  Notification,
  UserProfile,
  UserSettings,
} from "./mock-data"
import {
  currentUser as defaultUser,
  organizations as defaultOrgs,
  volunteerApplications as defaultApps,
  participationHistory as defaultHistory,
  assignedRolesData as defaultAssignedRoles,
  detailedApplicationsData as defaultDetailedApplications,
  defaultNotifications,
  demoUserProfile,
  adminUserProfile,
  emptyUserProfile,
  defaultUserSettings,
  events,
} from "./mock-data"

interface AppState {
  // Auth
  user: User | null
  isAdmin: boolean
  currentUserEmail: string | null
  setUser: (user: User | null) => void
  toggleRole: () => void
  initializeForUser: (email: string) => void

  // Organizations
  organizations: Organization[]
  userOrganizations: string[]
  addOrganization: (org: Omit<Organization, "id" | "status" | "memberCount" | "createdAt" | "code"> & Partial<Pick<Organization, "serviceTypes" | "contactPerson" | "email" | "phone" | "website" | "address" | "hours" | "ageGroups" | "isFree" | "eligibility">>) => void
  joinOrganization: (code: string) => boolean
  approveOrganization: (id: string) => void
  rejectOrganization: (id: string) => void

  // Applications & Roles
  applications: VolunteerApplication[]
  addApplication: (app: Omit<VolunteerApplication, "id" | "status" | "appliedAt">) => void
  updateApplicationStatus: (id: string, status: VolunteerApplication["status"]) => void
  assignedRoles: AssignedRole[]
  removeAssignedRole: (id: string) => void
  addAssignedRole: (role: AssignedRole) => void
  detailedApplications: DetailedApplication[]
  removeDetailedApplication: (id: string) => void
  addDetailedApplication: (app: DetailedApplication) => void

  // Participation
  participationHistory: ParticipationRecord[]
  addParticipation: (record: Omit<ParticipationRecord, "id">) => void

  // Admin
  allUsers: User[]
  pendingOrganizations: () => Organization[]
  pendingApplications: () => VolunteerApplication[]

  // Notifications
  notifications: Notification[]
  addNotification: (notif: Omit<Notification, "id" | "createdAt" | "read">) => void
  markNotificationRead: (id: string) => void
  markAllNotificationsRead: (email: string) => void
  unreadNotificationCount: (email: string) => number

  // Profile
  userProfile: UserProfile
  updateProfile: (profile: Partial<UserProfile>) => void

  // Settings
  userSettings: UserSettings
  updateSettings: (settings: Partial<UserSettings>) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Auth
      user: defaultUser,
      isAdmin: false,
      currentUserEmail: null,
      setUser: (user) => set({ user }),
      toggleRole: () => set((state) => ({
        isAdmin: !state.isAdmin,
        user: state.user ? { ...state.user, role: state.isAdmin ? "user" : "admin" } : null
      })),

      initializeForUser: (email: string) => {
        const current = get().currentUserEmail
        if (current === email) return // already initialized

        if (email === "demo@example.com") {
          set({
            currentUserEmail: email,
            applications: defaultApps,
            assignedRoles: defaultAssignedRoles,
            detailedApplications: defaultDetailedApplications,
            participationHistory: defaultHistory,
            organizations: defaultOrgs,
            userOrganizations: ["org-1"],
            notifications: defaultNotifications,
            userProfile: demoUserProfile,
            userSettings: defaultUserSettings,
            isAdmin: false,
          })
        } else if (email === "admin@example.com") {
          set({
            currentUserEmail: email,
            applications: defaultApps,
            assignedRoles: defaultAssignedRoles,
            detailedApplications: defaultDetailedApplications,
            participationHistory: defaultHistory,
            organizations: defaultOrgs,
            userOrganizations: ["org-1"],
            notifications: defaultNotifications,
            userProfile: adminUserProfile,
            userSettings: defaultUserSettings,
            isAdmin: true,
          })
        } else {
          // Fresh user — empty state
          set({
            currentUserEmail: email,
            applications: [],
            assignedRoles: [],
            detailedApplications: [],
            participationHistory: [],
            organizations: defaultOrgs, // they can still see existing orgs
            userOrganizations: [],
            notifications: [{
              id: `notif-welcome-${Date.now()}`,
              userEmail: email,
              message: "Welcome to the Mill Creek Community Volunteer System! Start by exploring events or completing your profile.",
              type: "info",
              read: false,
              createdAt: new Date().toISOString(),
              link: "/dashboard/profile",
            }],
            userProfile: { ...emptyUserProfile, displayName: email.split("@")[0] },
            userSettings: defaultUserSettings,
            isAdmin: false,
          })
        }
      },

      // Organizations
      organizations: defaultOrgs,
      userOrganizations: ["org-1"],
      addOrganization: (org) =>
        set((state) => {
          const newOrg: Organization = {
            name: org.name,
            description: org.description,
            serviceTypes: org.serviceTypes,
            contactPerson: org.contactPerson,
            email: org.email,
            phone: org.phone,
            website: org.website,
            address: org.address,
            hours: org.hours,
            ageGroups: org.ageGroups,
            isFree: org.isFree,
            eligibility: org.eligibility,
            id: `org-${Date.now()}`,
            status: "pending",
            memberCount: 1,
            createdAt: new Date().toISOString().split("T")[0],
            code: Math.random().toString(36).substring(2, 8).toUpperCase(),
          }
          return {
            organizations: [...state.organizations, newOrg],
            notifications: [...state.notifications, {
              id: `notif-${Date.now()}`,
              userEmail: state.currentUserEmail || "demo@example.com",
              message: `Your organization "${org.name}" has been submitted for review.`,
              type: "info" as const,
              read: false,
              createdAt: new Date().toISOString(),
              link: "/dashboard/organizations",
            }],
          }
        }),
      joinOrganization: (code) => {
        const org = get().organizations.find(
          (o) => o.code.toLowerCase() === code.toLowerCase() && o.status === "approved"
        )
        if (org && !get().userOrganizations.includes(org.id)) {
          set((state) => ({
            userOrganizations: [...state.userOrganizations, org.id],
            organizations: state.organizations.map((o) =>
              o.id === org.id ? { ...o, memberCount: o.memberCount + 1 } : o
            ),
            notifications: [...state.notifications, {
              id: `notif-${Date.now()}`,
              userEmail: state.currentUserEmail || "demo@example.com",
              message: `You have joined "${org.name}" successfully!`,
              type: "success" as const,
              read: false,
              createdAt: new Date().toISOString(),
              link: "/dashboard/organizations",
            }],
          }))
          return true
        }
        return false
      },
      approveOrganization: (id) =>
        set((state) => {
          const org = state.organizations.find((o) => o.id === id)
          return {
            organizations: state.organizations.map((o) =>
              o.id === id ? { ...o, status: "approved" } : o
            ),
            notifications: org ? [...state.notifications, {
              id: `notif-${Date.now()}`,
              userEmail: state.currentUserEmail || "admin@example.com",
              message: `Organization "${org.name}" has been approved.`,
              type: "success" as const,
              read: false,
              createdAt: new Date().toISOString(),
              link: "/admin/organizations",
            }] : state.notifications,
          }
        }),
      rejectOrganization: (id) =>
        set((state) => ({
          organizations: state.organizations.map((o) =>
            o.id === id ? { ...o, status: "rejected" } : o
          ),
        })),

      // Applications & Roles
      applications: defaultApps,
      addApplication: (app) =>
        set((state) => {
          const newId = `app-${Date.now()}`
          const appliedAt = new Date().toISOString().split("T")[0]
          const event = events.find((e) => e.id === app.eventId)

          // Create simple application
          const newApp: VolunteerApplication = {
            ...app,
            id: newId,
            status: "pending",
            appliedAt,
          }

          // Also create detailed application
          const newDetailedApp: DetailedApplication = {
            id: `detail-${Date.now()}`,
            userEmail: state.currentUserEmail || "demo@example.com",
            eventName: app.eventName,
            eventType: event ? `${event.type} - ${event.program.includes("Robotics Competition") ? "FRC" : event.program.includes("Tech Challenge") ? "FTC" : "FLL"}` : "Event",
            status: "PENDING",
            roles: app.roles.map((r) => ({ name: r, days: [] })),
            setupDate: event?.setupDate ?? "TBA",
            eventStart: event ? new Date(event.startDate).toLocaleDateString("en-US") : "TBA",
            eventEnd: event ? new Date(event.endDate).toLocaleDateString("en-US") : "TBA",
            tearDown: event?.teardownDate ?? "TBA",
            location: event?.location ?? "TBA",
            address: event?.address ?? "",
            city: event?.city ?? "",
            state: event?.state ?? "",
            zip: event?.zip ?? "",
            country: "USA",
            website: "",
            appliedAt,
          }

          // Create notification
          const notification: Notification = {
            id: `notif-${Date.now()}`,
            userEmail: state.currentUserEmail || "demo@example.com",
            message: `Your volunteer application for "${app.eventName}" has been submitted successfully.`,
            type: "success",
            read: false,
            createdAt: new Date().toISOString(),
            link: "/dashboard/applications",
          }

          return {
            applications: [...state.applications, newApp],
            detailedApplications: [...state.detailedApplications, newDetailedApp],
            notifications: [...state.notifications, notification],
          }
        }),
      updateApplicationStatus: (id, status) =>
        set((state) => {
          const app = state.applications.find((a) => a.id === id)
          const email = app?.userId ? state.allUsers.find((u) => u.id === app.userId)?.email : state.currentUserEmail

          return {
            applications: state.applications.map((a) =>
              a.id === id ? { ...a, status } : a
            ),
            detailedApplications: state.detailedApplications.map((a) =>
              a.eventName === app?.eventName && a.userEmail === (email || state.currentUserEmail)
                ? { ...a, status: status === "assigned" ? "ASSIGNED" : status === "rejected" ? "REJECTED" : "PENDING" }
                : a
            ),
            notifications: app ? [...state.notifications, {
              id: `notif-${Date.now()}`,
              userEmail: email || state.currentUserEmail || "demo@example.com",
              message: status === "assigned"
                ? `Your application for "${app.eventName}" has been approved! Check your dashboard for details.`
                : `Your application for "${app.eventName}" has been ${status}.`,
              type: (status === "assigned" ? "success" : status === "rejected" ? "error" : "info") as Notification["type"],
              read: false,
              createdAt: new Date().toISOString(),
              link: status === "assigned" ? "/dashboard" : "/dashboard/applications",
            }] : state.notifications,
          }
        }),
      assignedRoles: defaultAssignedRoles,
      removeAssignedRole: (id) =>
        set((state) => ({
          assignedRoles: state.assignedRoles.filter((r) => r.id !== id),
          notifications: [...state.notifications, {
            id: `notif-${Date.now()}`,
            userEmail: state.currentUserEmail || "demo@example.com",
            message: "You have withdrawn from a volunteer role.",
            type: "info" as const,
            read: false,
            createdAt: new Date().toISOString(),
            link: "/dashboard",
          }],
        })),
      addAssignedRole: (role) =>
        set((state) => ({
          assignedRoles: [...state.assignedRoles, role],
        })),
      detailedApplications: defaultDetailedApplications,
      removeDetailedApplication: (id) =>
        set((state) => ({
          detailedApplications: state.detailedApplications.filter((a) => a.id !== id),
          notifications: [...state.notifications, {
            id: `notif-${Date.now()}`,
            userEmail: state.currentUserEmail || "demo@example.com",
            message: "You have withdrawn a volunteer application.",
            type: "info" as const,
            read: false,
            createdAt: new Date().toISOString(),
            link: "/dashboard/applications",
          }],
        })),
      addDetailedApplication: (app) =>
        set((state) => ({
          detailedApplications: [...state.detailedApplications, app],
        })),

      // Participation
      participationHistory: defaultHistory,
      addParticipation: (record) =>
        set((state) => ({
          participationHistory: [
            ...state.participationHistory,
            { ...record, id: `part-${Date.now()}` },
          ],
        })),

      // Admin
      allUsers: [
        defaultUser,
        { id: "user-2", name: "Person 2", email: "jane@example.com", role: "user", volunteerSince: 2023, totalHours: 24 },
        { id: "user-3", name: "Person 3", email: "bob@example.com", role: "user", volunteerSince: 2024, totalHours: 12 },
      ],
      pendingOrganizations: () =>
        get().organizations.filter((o) => o.status === "pending"),
      pendingApplications: () =>
        get().applications.filter((a) => a.status === "pending"),

      // Notifications
      notifications: defaultNotifications,
      addNotification: (notif) =>
        set((state) => ({
          notifications: [
            {
              ...notif,
              id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
              createdAt: new Date().toISOString(),
              read: false,
            },
            ...state.notifications,
          ],
        })),
      markNotificationRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
          ),
        })),
      markAllNotificationsRead: (email) =>
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.userEmail === email ? { ...n, read: true } : n
          ),
        })),
      unreadNotificationCount: (email) =>
        get().notifications.filter((n) => n.userEmail === email && !n.read).length,

      // Profile
      userProfile: demoUserProfile,
      updateProfile: (profile) =>
        set((state) => ({
          userProfile: { ...state.userProfile, ...profile },
        })),

      // Settings
      userSettings: defaultUserSettings,
      updateSettings: (settings) =>
        set((state) => ({
          userSettings: { ...state.userSettings, ...settings },
        })),
    }),
    {
      name: "volunteer-app-storage",
      version: 3,
    }
  )
)
