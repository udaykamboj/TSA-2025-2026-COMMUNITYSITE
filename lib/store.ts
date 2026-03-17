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
} from "./mock-data"
import {
  currentUser as defaultUser,
  organizations as defaultOrgs,
  volunteerApplications as defaultApps,
  participationHistory as defaultHistory,
  assignedRolesData as defaultAssignedRoles,
  detailedApplicationsData as defaultDetailedApplications,
} from "./mock-data"

interface AppState {
  // Auth
  user: User | null
  isAdmin: boolean
  setUser: (user: User | null) => void
  toggleRole: () => void

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
  detailedApplications: DetailedApplication[]
  removeDetailedApplication: (id: string) => void

  // Participation
  participationHistory: ParticipationRecord[]
  addParticipation: (record: Omit<ParticipationRecord, "id">) => void

  // Admin
  allUsers: User[]
  pendingOrganizations: () => Organization[]
  pendingApplications: () => VolunteerApplication[]
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Auth
      user: defaultUser,
      isAdmin: false,
      setUser: (user) => set({ user }),
      toggleRole: () => set((state) => ({
        isAdmin: !state.isAdmin,
        user: state.user ? { ...state.user, role: state.isAdmin ? "user" : "admin" } : null
      })),

      // Organizations
      organizations: defaultOrgs,
      userOrganizations: ["org-1"],
      addOrganization: (org) =>
        set((state) => ({
          organizations: [
            ...state.organizations,
            {
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
            },
          ],
        })),
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
          }))
          return true
        }
        return false
      },
      approveOrganization: (id) =>
        set((state) => ({
          organizations: state.organizations.map((o) =>
            o.id === id ? { ...o, status: "approved" } : o
          ),
        })),
      rejectOrganization: (id) =>
        set((state) => ({
          organizations: state.organizations.map((o) =>
            o.id === id ? { ...o, status: "rejected" } : o
          ),
        })),

      // Applications & Roles
      applications: defaultApps,
      addApplication: (app) =>
        set((state) => ({
          applications: [
            ...state.applications,
            {
              ...app,
              id: `app-${Date.now()}`,
              status: "pending",
              appliedAt: new Date().toISOString().split("T")[0],
            },
          ],
        })),
      updateApplicationStatus: (id, status) =>
        set((state) => ({
          applications: state.applications.map((a) =>
            a.id === id ? { ...a, status } : a
          ),
        })),
      assignedRoles: defaultAssignedRoles,
      removeAssignedRole: (id) =>
        set((state) => ({
          assignedRoles: state.assignedRoles.filter((r) => r.id !== id),
        })),
      detailedApplications: defaultDetailedApplications,
      removeDetailedApplication: (id) =>
        set((state) => ({
          detailedApplications: state.detailedApplications.filter((a) => a.id !== id),
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
        { id: "user-2", name: "Jane Smith", email: "jane@example.com", role: "user", volunteerSince: 2023, totalHours: 24 },
        { id: "user-3", name: "Bob Johnson", email: "bob@example.com", role: "user", volunteerSince: 2024, totalHours: 12 },
      ],
      pendingOrganizations: () =>
        get().organizations.filter((o) => o.status === "pending"),
      pendingApplications: () =>
        get().applications.filter((a) => a.status === "pending"),
    }),
    {
      name: "volunteer-app-storage",
      version: 1,
    }
  )
)
