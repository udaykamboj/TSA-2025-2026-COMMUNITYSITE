"use client"

import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/dashboard/ui/button"
import { Input } from "@/components/dashboard/ui/input"
import { Label } from "@/components/dashboard/ui/label"
import { Textarea } from "@/components/dashboard/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/dashboard/ui/select"
import {
  IconUser,
  IconEdit,
  IconCheck,
  IconX,
  IconClock,
  IconTrophy,
  IconCalendarEvent,
  IconMail,
  IconPhone,
  IconShirt,
  IconFirstAidKit,
  IconBriefcase,
} from "@tabler/icons-react"
import { toast } from "sonner"

export function ProfileContent() {
  const { userProfile, updateProfile, participationHistory, assignedRoles } = useAppStore()
  const { user } = useAuth()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(userProfile)

  const targetEmail = user?.email || "demo@example.com"
  const userHistory = participationHistory.filter((r) => r.userEmail === targetEmail)
  const userRoles = assignedRoles.filter((r) => r.userEmail === targetEmail)
  const totalHours = userHistory.reduce((acc, p) => acc + p.hours, 0)
  const totalEvents = [...new Set(userHistory.map((p) => p.event))].length

  const handleSave = () => {
    updateProfile(form)
    setEditing(false)
    toast.success("Profile updated successfully!")
  }

  const handleCancel = () => {
    setForm(userProfile)
    setEditing(false)
  }

  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-secondary">My Profile</h1>
            <p className="text-sm text-muted-foreground">
              Manage your personal information and volunteer details
            </p>
          </div>
          {!editing ? (
            <Button onClick={() => setEditing(true)} className="bg-primary hover:bg-[#386109] text-white">
              <IconEdit className="size-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCancel}>
                <IconX className="size-4 mr-2" />Cancel
              </Button>
              <Button onClick={handleSave} className="bg-primary hover:bg-[#386109] text-white">
                <IconCheck className="size-4 mr-2" />Save Changes
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Header Card */}
        <div className="bg-white rounded shadow-sm p-6">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-3xl uppercase">
                {(userProfile.displayName || user?.email || "U").charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              {editing ? (
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-secondary">Display Name</Label>
                    <Input
                      className="mt-1"
                      value={form.displayName}
                      onChange={(e) => setForm({ ...form, displayName: e.target.value })}
                      placeholder="Your display name"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-secondary">Bio</Label>
                    <Textarea
                      className="mt-1"
                      rows={3}
                      value={form.bio}
                      onChange={(e) => setForm({ ...form, bio: e.target.value })}
                      placeholder="Tell us about yourself and your volunteer experience..."
                    />
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-secondary">
                    {userProfile.displayName || user?.email?.split("@")[0] || "Volunteer"}
                  </h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <IconMail className="size-3" />
                    {user?.email}
                  </p>
                  {userProfile.bio && (
                    <p className="text-sm text-muted-foreground mt-3">{userProfile.bio}</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-4">
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <IconClock className="size-4" />Total Hours
            </div>
            <p className="text-2xl font-bold text-secondary">{totalHours}</p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <IconCalendarEvent className="size-4" />Events
            </div>
            <p className="text-2xl font-bold text-secondary">{totalEvents}</p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <IconTrophy className="size-4" />Active Roles
            </div>
            <p className="text-2xl font-bold text-secondary">{userRoles.length}</p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
              <IconUser className="size-4" />Member Since
            </div>
            <p className="text-2xl font-bold text-secondary">
              {user?.created_at ? new Date(user.created_at).getFullYear() : "2025"}
            </p>
          </div>
        </div>

        {/* Contact & Details */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="bg-white rounded shadow-sm p-6">
            <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
              <IconPhone className="size-5" />Contact Information
            </h3>
            {editing ? (
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-secondary">Phone Number</Label>
                  <Input className="mt-1" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">Employer</Label>
                  <Input className="mt-1" value={form.employer} onChange={(e) => setForm({ ...form, employer: e.target.value })} placeholder="Your employer or school" />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <IconMail className="size-4 text-muted-foreground" />
                  <span className="text-sm text-secondary">{user?.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconPhone className="size-4 text-muted-foreground" />
                  <span className="text-sm text-secondary">{userProfile.phone || "Not set"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconBriefcase className="size-4 text-muted-foreground" />
                  <span className="text-sm text-secondary">{userProfile.employer || "Not set"}</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded shadow-sm p-6">
            <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
              <IconFirstAidKit className="size-5" />Emergency & Preferences
            </h3>
            {editing ? (
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-secondary">Emergency Contact</Label>
                  <Input className="mt-1" value={form.emergencyContact} onChange={(e) => setForm({ ...form, emergencyContact: e.target.value })} placeholder="Contact name" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">Emergency Phone</Label>
                  <Input className="mt-1" value={form.emergencyPhone} onChange={(e) => setForm({ ...form, emergencyPhone: e.target.value })} placeholder="(555) 000-0000" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-secondary">Shirt Size</Label>
                  <Select value={form.shirtSize} onValueChange={(v) => setForm({ ...form, shirtSize: v })}>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select size" /></SelectTrigger>
                    <SelectContent>
                      {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Emergency Contact</p>
                  <p className="text-sm font-medium text-secondary">{userProfile.emergencyContact || "Not set"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Emergency Phone</p>
                  <p className="text-sm font-medium text-secondary">{userProfile.emergencyPhone || "Not set"}</p>
                </div>
                <div className="flex items-center gap-3">
                  <IconShirt className="size-4 text-muted-foreground" />
                  <span className="text-sm text-secondary">Shirt Size: {userProfile.shirtSize || "Not set"}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
