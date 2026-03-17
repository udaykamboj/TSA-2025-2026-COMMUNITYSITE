"use client"

import { useState, use } from "react"
import { events, volunteerRoles } from "@/lib/mock-data"
import { useAppStore } from "@/lib/store"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/dashboard/ui/button"
import { Checkbox } from "@/components/dashboard/ui/checkbox"
import { Label } from "@/components/dashboard/ui/label"
import { Textarea } from "@/components/dashboard/ui/textarea"
import {
  IconArrowLeft,
  IconExternalLink,
  IconArrowUp,
  IconGripVertical,
  IconChevronDown,
} from "@tabler/icons-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dashboard/ui/dropdown-menu"
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface EventDetailContentProps {
  params: Promise<{ id: string }>
}

export function EventDetailContent({ params }: EventDetailContentProps) {
  const { id } = use(params)
  const router = useRouter()
  const { addApplication } = useAppStore()
  const { user } = useAuth()
  const [selectedDates, setSelectedDates] = useState<string[]>([])
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [rolePreferences, setRolePreferences] = useState<string[]>([])
  const [notes, setNotes] = useState("")
  const [allDates, setAllDates] = useState(false)
  const [volunteeringWithEmployer, setVolunteeringWithEmployer] = useState(false)

  const event = events.find((e) => e.id === id)
  const roles = volunteerRoles.filter((r) => r.eventId === id)

  // Add fallback roles if none exist for this event
  const displayRoles = roles.length > 0 ? roles : [
    { id: "role-1", eventId: id, name: "Field Assembly", description: "Help set up the competition field", spotsAvailable: 10, spotsFilled: 6 },
    { id: "role-2", eventId: id, name: "Field Disassembly", description: "Help tear down the competition field", spotsAvailable: 10, spotsFilled: 4 },
    { id: "role-3", eventId: id, name: "Judge", description: "Evaluate team presentations", spotsAvailable: 8, spotsFilled: 5 },
    { id: "role-4", eventId: id, name: "Judge Advisor Assistant", description: "Support the judging process", spotsAvailable: 4, spotsFilled: 2 },
    { id: "role-5", eventId: id, name: "Robot Inspector", description: "Verify robots meet competition specs", spotsAvailable: 6, spotsFilled: 3 },
    { id: "role-6", eventId: id, name: "Field Resetter", description: "Reset field elements between matches", spotsAvailable: 12, spotsFilled: 8 },
  ]

  if (!event) {
    return (
      <div className="min-h-screen bg-[#e8eef3] p-6">
        <div className="bg-white rounded shadow-sm p-12 text-center">
          <h3 className="text-lg font-semibold text-[#1a3a5c]">Event Not Found</h3>
          <p className="text-[#4a5568] mt-1">The event you are looking for does not exist.</p>
          <Link href="/dashboard/events">
            <Button className="mt-4 bg-[#0066b2] hover:bg-[#005091]">Back to Events</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Generate dates between start and end
  const getEventDates = () => {
    const dates: string[] = []
    const start = new Date(event.startDate)
    const end = new Date(event.endDate)
    const current = new Date(start)

    while (current <= end) {
      dates.push(current.toISOString().split("T")[0])
      current.setDate(current.getDate() + 1)
    }
    return dates
  }

  const eventDates = getEventDates()

  const handleAllDatesToggle = (checked: boolean) => {
    setAllDates(checked)
    if (checked) {
      setSelectedDates(eventDates)
    } else {
      setSelectedDates([])
    }
  }

  const handleDateToggle = (date: string, checked: boolean) => {
    if (checked) {
      setSelectedDates([...selectedDates, date])
    } else {
      setSelectedDates(selectedDates.filter((d) => d !== date))
      setAllDates(false)
    }
  }

  const handleRoleToggle = (roleName: string, checked: boolean) => {
    if (checked) {
      if (selectedRoles.length < 5) {
        setSelectedRoles([...selectedRoles, roleName])
        setRolePreferences([...rolePreferences, roleName])
      } else {
        toast.error("You can select up to 5 roles")
      }
    } else {
      setSelectedRoles(selectedRoles.filter((r) => r !== roleName))
      setRolePreferences(rolePreferences.filter((r) => r !== roleName))
    }
  }

  const moveRoleUp = (index: number) => {
    if (index === 0) return
    const newPreferences = [...rolePreferences]
    const temp = newPreferences[index - 1]
    newPreferences[index - 1] = newPreferences[index]
    newPreferences[index] = temp
    setRolePreferences(newPreferences)
  }

  const handleSubmit = () => {
    if (selectedDates.length === 0) {
      toast.error("Please select at least one date")
      return
    }
    if (selectedRoles.length === 0) {
      toast.error("Please select at least one role")
      return
    }

    addApplication({
      userId: user?.id ?? "user-1",
      eventId: event.id,
      eventName: event.name,
      roles: rolePreferences,
      datesAvailable: selectedDates,
      notes,
    })

    toast.success("Application submitted successfully!")
    router.push("/dashboard/applications")
  }

  const getGoogleMapsUrl = () => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${event.address}, ${event.city}, ${event.state} ${event.zip}`
    )}`
  }

  return (
    <div className="min-h-screen bg-[#e8eef3]">
      {/* Back Link */}
      <div className="px-6 py-4">
        <Link
          href="/dashboard/events"
          className="inline-flex items-center gap-1 text-[#0066b2] hover:underline text-sm"
        >
          <IconArrowLeft className="size-4" />
          Back to Event Search Results
        </Link>
      </div>

      <div className="px-6 pb-6">
        <div className="grid grid-cols-[400px_1fr] gap-6">
          {/* Left Column - Event Details */}
          <div className="space-y-4">
            <div className="bg-white rounded shadow-sm p-6">
              <h1 className="text-xl font-bold text-[#1a3a5c] mb-2">{event.name}</h1>
              <p className="text-sm text-[#4a5568] font-semibold mb-4">EVENT DETAILS:</p>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-[#4a5568]">Program: </span>
                  <span className="text-[#0066b2]">{event.program}</span>
                </div>
                <div>
                  <span className="text-[#4a5568]">Type: </span>
                  <span className="text-[#0066b2]">{event.type}</span>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm">
                <div>
                  <span className="text-[#4a5568]">Set Up Date: </span>
                  <span className="text-[#e87722]">{event.setupDate ?? "TBA"}</span>
                </div>
                <div>
                  <span className="text-[#4a5568]">Event Dates: </span>
                  <span className="text-[#e87722]">
                    {new Date(event.startDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })} - {new Date(event.endDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })}
                  </span>
                </div>
                <div>
                  <span className="text-[#4a5568]">Tear Down Date: </span>
                  <span className="text-[#e87722]">{event.teardownDate ?? "TBA"}</span>
                </div>
              </div>

              {/* Map Actions */}
              <div className="mt-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full text-[#0066b2] border-[#0066b2] hover:bg-[#0066b2] hover:text-white text-sm flex items-center justify-center gap-2">
                      <IconExternalLink className="size-4" />
                      Open in Maps
                      <IconChevronDown className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <a
                        href={getGoogleMapsUrl()}
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
                          `${event.address}, ${event.city}, ${event.state} ${event.zip}`
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
                        navigator.clipboard.writeText(`${event.address}, ${event.city}, ${event.state} ${event.zip}`)
                        toast.info("Address copied to clipboard")
                      }}
                    >
                      Copy Address
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Address */}
              <div className="mt-4">
                <p className="font-bold text-sm text-[#1a3a5c]">{event.location}</p>
                <p className="text-sm text-[#4a5568]">{event.address}</p>
                <p className="text-sm text-[#4a5568]">{event.city}, {event.state} {event.zip}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="bg-white rounded shadow-sm p-6">
            {/* Dates Available */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Dates Available</h2>
              <p className="text-sm text-[#4a5568] mb-4">What days are you available?</p>

              <button
                onClick={() => handleAllDatesToggle(!allDates)}
                className={`w-48 py-2 px-4 border rounded text-sm font-medium transition-colors ${allDates
                  ? "bg-[#0066b2] text-white border-[#0066b2]"
                  : "bg-white text-[#1a3a5c] border-gray-300 hover:border-[#0066b2]"
                  }`}
              >
                ALL DATES
              </button>

              <p className="text-sm text-[#4a5568] mt-4 mb-3">OR Choose specific</p>

              <div className="flex flex-wrap gap-2">
                {eventDates.map((date, index) => (
                  <button
                    key={date}
                    onClick={() => handleDateToggle(date, !selectedDates.includes(date))}
                    className={`py-2 px-4 border rounded text-sm font-medium transition-colors ${selectedDates.includes(date)
                      ? "bg-[#0066b2] text-white border-[#0066b2]"
                      : "bg-white text-[#1a3a5c] border-gray-300 hover:border-[#0066b2]"
                      }`}
                  >
                    EVENT DAY {new Date(date).toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "numeric" })}
                  </button>
                ))}
              </div>
            </div>

            {/* Specific Availability */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[#1a3a5c] mb-2">Specific Availability Times / Details</h3>
              <Textarea
                placeholder="Enter any time availability or notes to volunteer coordinator (optional)."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border-gray-300 min-h-[80px]"
              />
            </div>

            {/* Employer */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[#1a3a5c] mb-2">Employer</h3>
              <p className="text-sm text-[#4a5568] mb-2">
                Your employer is listed as: <span className="text-[#0066b2]">Full-time Student</span>{" "}
                <button className="text-[#e87722] hover:underline">Edit</button>
              </p>
              <label className="flex items-center gap-2">
                <Checkbox
                  checked={volunteeringWithEmployer}
                  onCheckedChange={(checked) => setVolunteeringWithEmployer(checked === true)}
                  className="border-gray-400"
                />
                <span className="text-sm text-[#4a5568]">{"I'm volunteering with my employer."}</span>
              </label>
            </div>

            {/* Select Roles */}
            <div className="grid grid-cols-[1fr_300px] gap-8">
              <div>
                <h3 className="text-sm font-bold text-[#1a3a5c] mb-2">Select Roles</h3>
                <p className="text-sm text-[#4a5568] mb-4">Select up to 5 roles from the list below.</p>

                <div className="border rounded divide-y max-h-[300px] overflow-y-auto">
                  {displayRoles.map((role) => (
                    <div
                      key={role.id}
                      className="flex items-center justify-between p-3 hover:bg-gray-50"
                    >
                      <label className="flex items-center gap-3 cursor-pointer flex-1">
                        <Checkbox
                          checked={selectedRoles.includes(role.name)}
                          onCheckedChange={(checked) => handleRoleToggle(role.name, checked === true)}
                          className="border-gray-400"
                        />
                        <span className="text-sm text-[#1a3a5c]">{role.name}</span>
                      </label>
                      <button className="text-[#0066b2] hover:text-[#005091]">
                        <IconArrowUp className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role Preferences */}
              <div>
                <h3 className="text-sm font-bold text-[#1a3a5c] mb-2">Role Preferences</h3>
                <p className="text-sm text-[#4a5568] mb-4">Drag and drop to rearrange.</p>

                <div className="border rounded min-h-[200px] p-2">
                  {rolePreferences.length > 0 ? (
                    <div className="space-y-2">
                      {rolePreferences.map((role, index) => (
                        <div
                          key={role}
                          className="flex items-center gap-2 p-2 bg-gray-50 rounded border cursor-move"
                        >
                          <IconGripVertical className="size-4 text-gray-400" />
                          <span className="text-sm text-[#1a3a5c]">{index + 1}. {role}</span>
                          <button
                            onClick={() => moveRoleUp(index)}
                            className="ml-auto text-[#0066b2] hover:text-[#005091]"
                          >
                            <IconArrowUp className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 text-center py-8">
                      Selected roles will appear here
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <Button
                onClick={handleSubmit}
                className="bg-[#0066b2] hover:bg-[#005091] text-white px-12 py-3 text-lg font-semibold"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
