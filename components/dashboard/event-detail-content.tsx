"use client"

import { useState } from "react"
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
  id: string
}

export function EventDetailContent({ id }: EventDetailContentProps) {
  const router = useRouter()
  const { addApplication } = useAppStore()
  const { user } = useAuth()
  const [step, setStep] = useState<1 | 2>(1)
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null)
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
    { id: "role-1", eventId: id, name: "Site Setup", description: "Help set up the event area", spotsAvailable: 10, spotsFilled: 6 },
    { id: "role-2", eventId: id, name: "Site Teardown", description: "Help clean up after the event", spotsAvailable: 10, spotsFilled: 4 },
    { id: "role-3", eventId: id, name: "Greeter", description: "Welcome attendees and provide info", spotsAvailable: 8, spotsFilled: 5 },
    { id: "role-4", eventId: id, name: "Activity Lead", description: "Lead specific group activities", spotsAvailable: 4, spotsFilled: 2 },
    { id: "role-5", eventId: id, name: "Safety Officer", description: "Monitor safety and provide assistance", spotsAvailable: 6, spotsFilled: 3 },
    { id: "role-6", eventId: id, name: "Logistics Assistant", description: "Help with various event logistics tasks", spotsAvailable: 12, spotsFilled: 8 },
  ]

  if (!event) {
    return (
      <div className="min-h-screen bg-muted p-6">
        <div className="bg-white rounded shadow-sm p-12 text-center">
          <h3 className="text-lg font-semibold text-secondary">Event Not Found</h3>
          <p className="text-muted-foreground mt-1">The event you are looking for does not exist.</p>
          <Link href="/dashboard/events">
            <Button className="mt-4 bg-primary hover:bg-[#386109]">Back to Events</Button>
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

  const handleNext = () => {
    if (selectedDates.length === 0) {
      toast.error("Please select at least one date")
      return
    }
    if (selectedRoles.length === 0) {
      toast.error("Please select at least one role")
      return
    }
    setStep(2)
  }

  const handleConfirmSubmit = () => {
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

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedItemIndex(index)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()
    if (draggedItemIndex === null || draggedItemIndex === index) return

    const newPreferences = [...rolePreferences]
    const draggedItem = newPreferences[draggedItemIndex]

    // Remove the dragged item
    newPreferences.splice(draggedItemIndex, 1)
    // Insert it at the new position
    newPreferences.splice(index, 0, draggedItem)

    setDraggedItemIndex(index)
    setRolePreferences(newPreferences)
  }

  const handleDragEnd = () => {
    setDraggedItemIndex(null)
  }

  const getGoogleMapsUrl = () => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${event.address}, ${event.city}, ${event.state} ${event.zip}`
    )}`
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Back Link */}
      <div className="px-6 py-4">
        <Link
          href="/dashboard/events"
          className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
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
              <h1 className="text-xl font-bold text-secondary mb-2">{event.name}</h1>
              <p className="text-sm text-muted-foreground font-semibold mb-4">EVENT DETAILS:</p>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Program: </span>
                  <span className="text-primary">{event.program}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Type: </span>
                  <span className="text-primary">{event.type}</span>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Set Up Date: </span>
                  <span className="text-[#e87722]">{event.setupDate ?? "TBA"}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Event Dates: </span>
                  <span className="text-[#e87722]">
                    {new Date(event.startDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })} - {new Date(event.endDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tear Down Date: </span>
                  <span className="text-[#e87722]">{event.teardownDate ?? "TBA"}</span>
                </div>
              </div>

              {/* Map Actions */}
              <div className="mt-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white text-sm flex items-center justify-center gap-2">
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
                <p className="font-bold text-sm text-secondary">{event.location}</p>
                <p className="text-sm text-muted-foreground">{event.address}</p>
                <p className="text-sm text-muted-foreground">{event.city}, {event.state} {event.zip}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Application Form or Confirmation */}
          <div className="bg-white rounded shadow-sm p-6">
            {step === 1 ? (
              <>
                {/* Dates Available */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-secondary mb-2">Dates Available</h2>
              <p className="text-sm text-muted-foreground mb-4">What days are you available?</p>

              <button
                onClick={() => handleAllDatesToggle(!allDates)}
                className={`w-48 py-2 px-4 border rounded text-sm font-medium transition-colors ${allDates
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-secondary border-gray-300 hover:border-primary"
                  }`}
              >
                ALL DATES
              </button>

              <p className="text-sm text-muted-foreground mt-4 mb-3">OR Choose specific</p>

              <div className="flex flex-wrap gap-2">
                {eventDates.map((date, index) => (
                  <button
                    key={date}
                    onClick={() => handleDateToggle(date, !selectedDates.includes(date))}
                    className={`py-2 px-4 border rounded text-sm font-medium transition-colors ${selectedDates.includes(date)
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-secondary border-gray-300 hover:border-primary"
                      }`}
                  >
                    EVENT DAY {new Date(date).toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "numeric" })}
                  </button>
                ))}
              </div>
            </div>

            {/* Specific Availability */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-secondary mb-2">Specific Availability Times / Details</h3>
              <Textarea
                placeholder="Enter any time availability or notes to volunteer coordinator (optional)."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border-gray-300 min-h-[80px]"
              />
            </div>

            {/* Employer */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-secondary mb-2">Employer</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Your employer is listed as: <span className="text-primary">Full-time Student</span>{" "}
                <button className="text-[#e87722] hover:underline">Edit</button>
              </p>
              <label className="flex items-center gap-2">
                <Checkbox
                  checked={volunteeringWithEmployer}
                  onCheckedChange={(checked) => setVolunteeringWithEmployer(checked === true)}
                  className="border-gray-400"
                />
                <span className="text-sm text-muted-foreground">{"I'm volunteering with my employer."}</span>
              </label>
            </div>

            {/* Select Roles */}
            <div className="grid grid-cols-[1fr_300px] gap-8">
              <div>
                <h3 className="text-sm font-bold text-secondary mb-2">Select Roles</h3>
                <p className="text-sm text-muted-foreground mb-4">Select up to 5 roles from the list below.</p>

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
                        <span className="text-sm text-secondary">{role.name}</span>
                      </label>
                      <button className="text-primary hover:text-[#386109]">
                        <IconArrowUp className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role Preferences */}
              <div>
                <h3 className="text-sm font-bold text-secondary mb-2">Role Preferences</h3>
                <p className="text-sm text-muted-foreground mb-4">Drag and drop to rearrange.</p>

                <div className="border rounded min-h-[200px] p-2">
                  {rolePreferences.length > 0 ? (
                    <div className="space-y-2">
                      {rolePreferences.map((role, index) => (
                        <div
                          key={role}
                          draggable
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragEnter={(e) => handleDragEnter(e, index)}
                          onDragOver={(e) => handleDragOver(e, index)}
                          onDragEnd={handleDragEnd}
                          className={`flex items-center gap-2 p-2 bg-gray-50 rounded border cursor-move transition-opacity ${draggedItemIndex === index ? 'opacity-50' : ''}`}
                        >
                          <IconGripVertical className="size-4 text-gray-400" />
                          <span className="text-sm text-secondary">{index + 1}. {role}</span>
                          <button
                            onClick={() => moveRoleUp(index)}
                            className="ml-auto text-primary hover:text-[#386109]"
                            type="button"
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
                onClick={handleNext}
                className="bg-primary hover:bg-[#386109] text-white px-12 py-3 text-lg font-semibold"
              >
                Next
              </Button>
            </div>
            </>
            ) : (
              <>
                {/* Confirmation Screen */}
                <h2 className="text-xl font-bold text-secondary mb-4">Confirm Your Signup</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-secondary">Event</h3>
                    <p className="text-sm text-muted-foreground">{event.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-secondary">Selected Dates</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {selectedDates.map((date) => (
                        <li key={date}>
                          {new Date(date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-secondary">Roles (In Order of Preference)</h3>
                    <ol className="list-decimal list-inside text-sm text-muted-foreground">
                      {rolePreferences.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ol>
                  </div>
                  {notes && (
                    <div>
                      <h3 className="text-sm font-bold text-secondary">Notes to Coordinator</h3>
                      <p className="text-sm text-muted-foreground">{notes}</p>
                    </div>
                  )}
                  {volunteeringWithEmployer && (
                    <div>
                      <h3 className="text-sm font-bold text-secondary">Employer details</h3>
                      <p className="text-sm text-muted-foreground">
                        Volunteering with Full-time Student
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="border-primary text-primary"
                  >
                    Back to Edit
                  </Button>
                  <Button
                    onClick={handleConfirmSubmit}
                    className="bg-primary hover:bg-[#386109] text-white px-8 py-2 font-semibold"
                  >
                    Confirm & Submit
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
