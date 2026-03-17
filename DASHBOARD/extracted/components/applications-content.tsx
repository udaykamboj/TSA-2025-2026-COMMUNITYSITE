"use client"

import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  IconChevronDown,
  IconChevronRight,
  IconExternalLink,
  IconClock,
  IconCheck,
  IconX,
} from "@tabler/icons-react"
import Link from "next/link"
import { toast } from "sonner"

// Extended application data with full details
const detailedApplications = [
  {
    id: "app-1",
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
]

export function ApplicationsContent() {
  const [pendingOpen, setPendingOpen] = useState(true)
  const [assignedOpen, setAssignedOpen] = useState(true)

  const pendingApps = detailedApplications.filter((a) => a.status === "PENDING")
  const assignedApps = detailedApplications.filter((a) => a.status === "ASSIGNED")

  const handleWithdraw = (appId: string) => {
    toast.success("Application withdrawn successfully")
  }

  const handleEdit = (appId: string) => {
    toast.info("Edit application dialog would open here")
  }

  const handleMessage = (appId: string) => {
    toast.info("Message coordinator dialog would open here")
  }

  const getGoogleMapsUrl = (app: typeof detailedApplications[0]) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${app.address}, ${app.city}, ${app.state} ${app.zip}`
    )}`
  }

  return (
    <div className="min-h-screen bg-[#e8eef3]">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#1a3a5c]">My Applications</h1>
            <p className="text-sm text-[#4a5568]">
              Track the status of your volunteer applications
            </p>
          </div>
          <Link href="/events">
            <Button className="bg-[#0066b2] hover:bg-[#005091] text-white">
              Find More Events
            </Button>
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-6 py-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-[#4a5568] text-sm mb-1">
              <IconClock className="size-4" />
              Pending
            </div>
            <p className="text-2xl font-bold text-[#e87722]">{pendingApps.length}</p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="flex items-center gap-2 text-[#4a5568] text-sm mb-1">
              <IconCheck className="size-4" />
              Assigned
            </div>
            <p className="text-2xl font-bold text-green-600">{assignedApps.length}</p>
          </div>
          <div className="bg-white rounded shadow-sm p-4">
            <div className="text-[#4a5568] text-sm mb-1">Total Applications</div>
            <p className="text-2xl font-bold text-[#1a3a5c]">{detailedApplications.length}</p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 space-y-4">
        {/* Pending Applications Section */}
        <Collapsible open={pendingOpen} onOpenChange={setPendingOpen}>
          <CollapsibleTrigger className="flex items-center gap-2 w-full text-left bg-[#d1d5db] px-4 py-2 rounded-t">
            {pendingOpen ? (
              <IconChevronDown className="size-4 text-[#1a3a5c]" />
            ) : (
              <IconChevronRight className="size-4 text-[#1a3a5c]" />
            )}
            <IconClock className="size-4 text-[#e87722]" />
            <span className="text-sm font-semibold text-[#1a3a5c]">Pending Applications</span>
            <span className="ml-2 bg-[#e87722] text-white text-xs px-2 py-0.5 rounded">{pendingApps.length}</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {pendingApps.length > 0 ? (
              <div className="space-y-0">
                {pendingApps.map((app) => (
                  <ApplicationCard
                    key={app.id}
                    application={app}
                    onWithdraw={handleWithdraw}
                    onEdit={handleEdit}
                    onMessage={handleMessage}
                    getGoogleMapsUrl={getGoogleMapsUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 text-center text-[#4a5568]">
                No pending applications
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>

        {/* Assigned Applications Section */}
        <Collapsible open={assignedOpen} onOpenChange={setAssignedOpen}>
          <CollapsibleTrigger className="flex items-center gap-2 w-full text-left bg-[#d1d5db] px-4 py-2 rounded-t">
            {assignedOpen ? (
              <IconChevronDown className="size-4 text-[#1a3a5c]" />
            ) : (
              <IconChevronRight className="size-4 text-[#1a3a5c]" />
            )}
            <IconCheck className="size-4 text-green-600" />
            <span className="text-sm font-semibold text-[#1a3a5c]">Assigned Event Roles</span>
            <span className="ml-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">{assignedApps.length}</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {assignedApps.length > 0 ? (
              <div className="space-y-0">
                {assignedApps.map((app) => (
                  <ApplicationCard
                    key={app.id}
                    application={app}
                    onWithdraw={handleWithdraw}
                    onEdit={handleEdit}
                    onMessage={handleMessage}
                    getGoogleMapsUrl={getGoogleMapsUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 text-center text-[#4a5568]">
                No assigned roles yet
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>

        {detailedApplications.length === 0 && (
          <div className="bg-white rounded shadow-sm p-12 text-center">
            <p className="text-[#4a5568] mb-4">You have no volunteer applications yet.</p>
            <Link href="/events">
              <Button className="bg-[#0066b2] hover:bg-[#005091] text-white">
                Find Events to Volunteer
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

interface ApplicationCardProps {
  application: typeof detailedApplications[0]
  onWithdraw: (id: string) => void
  onEdit: (id: string) => void
  onMessage: (id: string) => void
  getGoogleMapsUrl: (app: typeof detailedApplications[0]) => string
}

function ApplicationCard({ 
  application, 
  onWithdraw, 
  onEdit, 
  onMessage, 
  getGoogleMapsUrl
}: ApplicationCardProps) {
  return (
    <div className="bg-white border-b">
      {/* Orange Header */}
      <div className="bg-[#e87722] text-white px-4 py-2">
        <p className="font-bold text-sm">{application.eventName}</p>
        <p className="text-xs">{application.eventType}</p>
      </div>

      {/* Content Grid */}
      <div className="p-4 grid grid-cols-[1fr_1fr_1fr_200px] gap-6">
        {/* Status Column */}
        <div className="space-y-2">
          <div>
            <span className="text-xs text-[#4a5568]">Status: </span>
            <span className={`text-sm font-semibold ${
              application.status === "PENDING" ? "text-[#e87722]" : "text-green-600"
            }`}>
              {application.status}
            </span>
          </div>
          {application.roles.map((role, i) => (
            <div key={i}>
              <div>
                <span className="text-xs text-[#4a5568]">Role: </span>
                <span className="text-sm text-[#0066b2]">{role.name}</span>
              </div>
              <div>
                <span className="text-xs text-[#4a5568]">Days Assigned:</span>
                {role.days.length > 0 ? (
                  role.days.map((day, j) => (
                    <p key={j} className="text-sm text-[#0066b2]">{day}</p>
                  ))
                ) : (
                  <p className="text-sm text-[#4a5568]">-</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dates Column */}
        <div className="space-y-2">
          <div>
            <span className="text-xs text-[#4a5568]">Setup Date: </span>
            <span className="text-sm text-[#1a3a5c]">{application.setupDate}</span>
          </div>
          <div>
            <span className="text-xs text-[#4a5568]">Event Start: </span>
            <span className="text-sm text-[#1a3a5c]">{application.eventStart}</span>
          </div>
          <div>
            <span className="text-xs text-[#4a5568]">Event End: </span>
            <span className="text-sm text-[#1a3a5c]">{application.eventEnd}</span>
          </div>
          <div>
            <span className="text-xs text-[#4a5568]">Tear Down: </span>
            <span className="text-sm text-[#1a3a5c]">{application.tearDown}</span>
          </div>
        </div>

        {/* Location Column */}
        <div className="space-y-1">
          <div>
            <span className="text-xs text-[#4a5568]">Location: </span>
            <span className="text-sm text-[#0066b2]">{application.location}</span>
          </div>
          <p className="text-sm text-[#1a3a5c] pl-12">{application.address}</p>
          <p className="text-sm text-[#1a3a5c] pl-12">{application.city}, {application.state} {application.zip} {application.country}</p>
          {application.website && (
            <div>
              <span className="text-xs text-[#4a5568]">Website: </span>
              <a href={application.website} target="_blank" rel="noopener noreferrer" className="text-sm text-[#0066b2] hover:underline">
                {application.website}
              </a>
            </div>
          )}
        </div>

        {/* Actions Column */}
        <div className="space-y-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full text-[#0066b2] border-[#0066b2] hover:bg-[#0066b2] hover:text-white text-sm flex items-center justify-center gap-1">
                <IconExternalLink className="size-4" />
                Maps
                <IconChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <a
                  href={getGoogleMapsUrl(application)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <IconExternalLink className="size-4" />
                  Open in Google Maps
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href={`https://www.apple.com/maps/place?q=${encodeURIComponent(
                    `${application.address}, ${application.city}, ${application.state} ${application.zip}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <IconExternalLink className="size-4" />
                  Open in Apple Maps
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard.writeText(`${application.address}, ${application.city}, ${application.state} ${application.zip}`)
                }}
              >
                Copy Address
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-full bg-[#0066b2] hover:bg-[#005091] text-white text-sm flex items-center justify-center gap-1">
                ROLE OPTIONS
                <IconChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => onWithdraw(application.id)}>
                Withdraw Application
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(application.id)}>
                Edit Application
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMessage(application.id)}>
                Message Coordinator
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
