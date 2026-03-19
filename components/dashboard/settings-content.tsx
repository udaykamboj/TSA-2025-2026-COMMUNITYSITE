"use client"

import { useAppStore } from "@/lib/store"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/dashboard/ui/button"
import { Label } from "@/components/dashboard/ui/label"
import { Checkbox } from "@/components/dashboard/ui/checkbox"
import {
  IconSettings,
  IconBell,
  IconMail,
  IconEye,
  IconShield,
  IconUser,
} from "@tabler/icons-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function SettingsContent() {
  const { userSettings, updateSettings, userProfile } = useAppStore()
  const { user, signOut } = useAuth()
  const router = useRouter()

  const handleToggle = (key: keyof typeof userSettings) => {
    updateSettings({ [key]: !userSettings[key] })
    toast.success("Setting updated")
  }

  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-secondary">Settings</h1>
            <p className="text-sm text-muted-foreground">Manage your account preferences</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 max-w-3xl">
        {/* Account */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <IconUser className="size-5" />Account
          </h2>
          <div className="space-y-4">
            <div>
              <Label className="text-sm text-muted-foreground">Email Address</Label>
              <p className="text-sm font-medium text-secondary mt-1">{user?.email}</p>
            </div>
            <div>
              <Label className="text-sm text-muted-foreground">Display Name</Label>
              <p className="text-sm font-medium text-secondary mt-1">{userProfile.displayName || "Not set"}</p>
              <button
                onClick={() => router.push(user?.email === "admin@example.com" ? "/admin" : "/dashboard/profile")}
                className="text-xs text-primary hover:underline mt-1"
              >
                Edit in Profile →
              </button>
            </div>
            <div className="pt-4 border-t">
              <Button
                variant="outline"
                className="text-red-600 border-red-300 hover:bg-red-50"
                onClick={async () => {
                  await signOut()
                  router.push("/login")
                }}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <IconBell className="size-5" />Notifications
          </h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <IconMail className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-secondary">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive updates about your applications via email</p>
                </div>
              </div>
              <Checkbox
                checked={userSettings.emailNotifications}
                onCheckedChange={() => handleToggle("emailNotifications")}
                className="border-primary data-[state=checked]:bg-primary"
              />
            </label>
            <label className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <IconBell className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-secondary">In-App Notifications</p>
                  <p className="text-xs text-muted-foreground">Show notification badges and alerts within the dashboard</p>
                </div>
              </div>
              <Checkbox
                checked={userSettings.inAppNotifications}
                onCheckedChange={() => handleToggle("inAppNotifications")}
                className="border-primary data-[state=checked]:bg-primary"
              />
            </label>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <IconShield className="size-5" />Privacy
          </h2>
          <label className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <IconEye className="size-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-secondary">Profile Visibility</p>
                <p className="text-xs text-muted-foreground">Allow other volunteers and organizers to see your profile</p>
              </div>
            </div>
            <Checkbox
              checked={userSettings.profileVisible}
              onCheckedChange={() => handleToggle("profileVisible")}
              className="border-primary data-[state=checked]:bg-primary"
            />
          </label>
        </div>

        {/* About */}
        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <IconSettings className="size-5" />About
          </h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Community Resource Hub v1.0</p>
            <p>Built for community coordination and management.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
