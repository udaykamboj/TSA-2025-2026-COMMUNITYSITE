"use client"

import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/dashboard/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/dashboard/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dashboard/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/dashboard/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/dashboard/ui/select"
import { Textarea } from "@/components/dashboard/ui/textarea"
import { Input } from "@/components/dashboard/ui/input"
import { Label } from "@/components/dashboard/ui/label"
import { Checkbox } from "@/components/dashboard/ui/checkbox"
import {
  IconChevronDown,
  IconChevronRight,
  IconExternalLink,
  IconAlertTriangle,
  IconEdit,
  IconMail,
  IconChecklist,
  IconCheck,
  IconX,
} from "@tabler/icons-react"
import Link from "next/link"
import { toast } from "sonner"
import type { AssignedRole } from "@/lib/mock-data"



const availableRoles = [
  "Judge",
  "Judge Advisor Assistant",
  "Robot Inspector",
  "Field Resetter",
  "Field Assembly",
  "Field Disassembly",
  "Friday Night Set Up",
  "Sunday Night Teardown",
  "Scorekeeper",
  "Referee",
  "Emcee",
  "AV / Tech Support",
]

export function DashboardContent() {
  const { assignedRoles: allAssignedRoles, removeAssignedRole, userProfile } = useAppStore()
  const { user } = useAuth()

  const targetEmail = user?.email || "demo@example.com"
  const assignedRoles = allAssignedRoles.filter(r => r.userEmail === targetEmail)
  const [missingCertsOpen, setMissingCertsOpen] = useState(true)
  const [assignedRolesOpen, setAssignedRolesOpen] = useState(true)

  // Edit Application Dialog State
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [editingRole, setEditingRole] = useState<AssignedRole | null>(null)
  const [editForm, setEditForm] = useState({
    preferredRole: "",
    alternateRole: "",
    availability: "",
    notes: "",
    shirtSize: "",
    dietaryRestrictions: "",
  })

  // Message Coordinator Dialog State
  const [messageDialogOpen, setMessageDialogOpen] = useState(false)
  const [messagingRole, setMessagingRole] = useState<AssignedRole | null>(null)
  const [messageForm, setMessageForm] = useState({
    subject: "",
    message: "",
    priority: "normal",
  })

  // Outstanding Tasks Dialog State
  const [tasksDialogOpen, setTasksDialogOpen] = useState(false)
  const [tasksRole, setTasksRole] = useState<AssignedRole | null>(null)
  const [taskStates, setTaskStates] = useState<Record<string, boolean>>({})

  const rolesMissingCerts = assignedRoles.filter(r => r.hasMissingCertifications)
  const rolesWithCerts = assignedRoles.filter(r => !r.hasMissingCertifications)

  const handleWithdraw = (roleId: string) => {
    removeAssignedRole(roleId)
    toast.success("Application withdrawn successfully")
  }

  const handleEditApplication = (role: AssignedRole) => {
    setEditingRole(role)
    setEditForm({
      preferredRole: role.role,
      alternateRole: "",
      availability: role.daysAssigned.join(", ") || "",
      notes: "",
      shirtSize: "M",
      dietaryRestrictions: "",
    })
    setEditDialogOpen(true)
  }

  const handleSaveEdit = () => {
    toast.success(`Application for "${editingRole?.eventName}" updated successfully`)
    setEditDialogOpen(false)
    setEditingRole(null)
  }

  const handleMessageCoordinator = (role: AssignedRole) => {
    setMessagingRole(role)
    setMessageForm({
      subject: `Re: ${role.role} - ${role.eventName}`,
      message: "",
      priority: "normal",
    })
    setMessageDialogOpen(true)
  }

  const handleSendMessage = () => {
    if (!messageForm.message.trim()) {
      toast.error("Please enter a message")
      return
    }
    toast.success(`Message sent to the coordinator for "${messagingRole?.eventName}"`)
    setMessageDialogOpen(false)
    setMessagingRole(null)
  }

  const handleReviewTasks = (role: AssignedRole) => {
    setTasksRole(role)
    const initialStates: Record<string, boolean> = {}
    role.outstandingTasks.forEach((t) => {
      initialStates[t.id] = t.completed
    })
    setTaskStates(initialStates)
    setTasksDialogOpen(true)
  }

  const handleToggleTask = (taskId: string) => {
    setTaskStates((prev) => ({ ...prev, [taskId]: !prev[taskId] }))
  }

  const handleSaveTasks = () => {
    const completedCount = Object.values(taskStates).filter(Boolean).length
    const totalCount = Object.keys(taskStates).length
    toast.success(`Progress saved: ${completedCount}/${totalCount} tasks completed`)
    setTasksDialogOpen(false)
    setTasksRole(null)
  }

  const getGoogleMapsUrl = (role: AssignedRole) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${role.address}, ${role.city}, ${role.state} ${role.zip}`
    )}`
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-secondary">
              Welcome back, {userProfile.displayName || user?.email?.split("@")[0] || "Volunteer"}!
            </h1>
            <p className="text-sm text-muted-foreground">
              Here is an overview of your volunteer activities
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard/events">
              <Button className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white">
                Find Events
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Roles Missing Certifications Section */}
        {rolesMissingCerts.length > 0 && (
          <Collapsible open={missingCertsOpen} onOpenChange={setMissingCertsOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 w-full text-left bg-[#d1d5db] px-4 py-2 rounded-t">
              {missingCertsOpen ? (
                <IconChevronDown className="size-4 text-secondary" />
              ) : (
                <IconChevronRight className="size-4 text-secondary" />
              )}
              <IconAlertTriangle className="size-4 text-[#dc2626]" />
              <span className="text-sm font-semibold text-secondary">Roles Missing Certifications</span>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-0">
                {rolesMissingCerts.map((role) => (
                  <EventRoleCard
                    key={role.id}
                    role={role}
                    onWithdraw={handleWithdraw}
                    onEdit={handleEditApplication}
                    onMessage={handleMessageCoordinator}
                    onReviewTasks={handleReviewTasks}
                    getGoogleMapsUrl={getGoogleMapsUrl}
                  />
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}

        {/* Assigned Event Roles Section */}
        <Collapsible open={assignedRolesOpen} onOpenChange={setAssignedRolesOpen}>
          <CollapsibleTrigger className="flex items-center gap-2 w-full text-left bg-[#d1d5db] px-4 py-2 rounded-t">
            {assignedRolesOpen ? (
              <IconChevronDown className="size-4 text-secondary" />
            ) : (
              <IconChevronRight className="size-4 text-secondary" />
            )}
            <span className="text-sm font-semibold text-secondary">Assigned Event Roles</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-0">
              {rolesWithCerts.map((role) => (
                <EventRoleCard
                  key={role.id}
                  role={role}
                  onWithdraw={handleWithdraw}
                  onEdit={handleEditApplication}
                  onMessage={handleMessageCoordinator}
                  onReviewTasks={handleReviewTasks}
                  getGoogleMapsUrl={getGoogleMapsUrl}
                />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {assignedRoles.length === 0 && (
          <div className="bg-white rounded shadow-sm p-12 text-center">
            <p className="text-muted-foreground mb-4">You have no assigned volunteer roles yet.</p>
            <Link href="/dashboard/events">
              <Button className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white">
                Find Events to Volunteer
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Edit Application Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-secondary">Edit Application</DialogTitle>
            {editingRole && (
              <p className="text-sm text-muted-foreground">{editingRole.eventName}</p>
            )}
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <Label className="text-sm font-medium text-secondary">Preferred Role <span className="text-red-600">*</span></Label>
              <Select value={editForm.preferredRole} onValueChange={(v) => setEditForm((p) => ({ ...p, preferredRole: v }))}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  {availableRoles.map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-secondary">Alternate Role (Optional)</Label>
              <Select value={editForm.alternateRole} onValueChange={(v) => setEditForm((p) => ({ ...p, alternateRole: v }))}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select alternate role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {availableRoles.filter((r) => r !== editForm.preferredRole).map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-secondary">Availability</Label>
              <Input
                className="mt-1"
                placeholder="e.g., All day Saturday, Sunday morning only"
                value={editForm.availability}
                onChange={(e) => setEditForm((p) => ({ ...p, availability: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-secondary">Shirt Size</Label>
                <Select value={editForm.shirtSize} onValueChange={(v) => setEditForm((p) => ({ ...p, shirtSize: v }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-secondary">Dietary Restrictions</Label>
                <Input
                  className="mt-1"
                  placeholder="None"
                  value={editForm.dietaryRestrictions}
                  onChange={(e) => setEditForm((p) => ({ ...p, dietaryRestrictions: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-secondary">Additional Notes</Label>
              <Textarea
                className="mt-1"
                rows={3}
                placeholder="Any additional information for the coordinator..."
                value={editForm.notes}
                onChange={(e) => setEditForm((p) => ({ ...p, notes: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>Cancel</Button>
            <Button className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white" onClick={handleSaveEdit}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Message Coordinator Dialog */}
      <Dialog open={messageDialogOpen} onOpenChange={setMessageDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-secondary flex items-center gap-2">
              <IconMail className="size-5" />
              Message Coordinator
            </DialogTitle>
            {messagingRole && (
              <p className="text-sm text-muted-foreground">{messagingRole.eventName}</p>
            )}
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <Label className="text-sm font-medium text-secondary">To</Label>
              <Input
                className="mt-1 bg-[#f8fafc]"
                value="Event Coordinator"
                readOnly
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-secondary">Subject</Label>
              <Input
                className="mt-1"
                value={messageForm.subject}
                onChange={(e) => setMessageForm((p) => ({ ...p, subject: e.target.value }))}
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-secondary">Priority</Label>
              <Select value={messageForm.priority} onValueChange={(v) => setMessageForm((p) => ({ ...p, priority: v }))}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-secondary">Message <span className="text-red-600">*</span></Label>
              <Textarea
                className="mt-1"
                rows={5}
                placeholder="Type your message to the event coordinator..."
                value={messageForm.message}
                onChange={(e) => setMessageForm((p) => ({ ...p, message: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setMessageDialogOpen(false)}>Cancel</Button>
            <Button className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white" onClick={handleSendMessage}>
              <IconMail className="size-4 mr-2" />
              Send Message
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Review Outstanding Tasks Dialog */}
      <Dialog open={tasksDialogOpen} onOpenChange={setTasksDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-secondary flex items-center gap-2">
              <IconChecklist className="size-5" />
              Outstanding Tasks
            </DialogTitle>
            {tasksRole && (
              <p className="text-sm text-muted-foreground">{tasksRole.eventName} - {tasksRole.role}</p>
            )}
          </DialogHeader>
          <div className="py-2">
            {tasksRole && tasksRole.outstandingTasks.length > 0 ? (
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground mb-3">
                  Complete the following requirements before the event. Check items as you complete them.
                </p>
                {tasksRole.outstandingTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-3 p-3 rounded border ${taskStates[task.id] ? "bg-green-50 border-green-200" : "bg-white border-[#e2e8f0]"
                      }`}
                  >
                    <Checkbox
                      checked={taskStates[task.id] || false}
                      onCheckedChange={() => handleToggleTask(task.id)}
                      className="border-primary data-[state=checked]:bg-primary"
                    />
                    <span className={`flex-1 text-sm ${taskStates[task.id] ? "line-through text-muted-foreground" : "text-secondary"}`}>
                      {task.label}
                    </span>
                    {taskStates[task.id] ? (
                      <IconCheck className="size-4 text-green-600" />
                    ) : (
                      <a href={task.link} className="text-xs text-primary hover:underline">Start</a>
                    )}
                  </div>
                ))}
                <div className="mt-4 p-3 bg-[#e8f5e9] rounded border border-[#fde68a]">
                  <p className="text-sm text-[#92400e]">
                    {Object.values(taskStates).filter(Boolean).length} of {Object.keys(taskStates).length} tasks completed.
                    {Object.values(taskStates).every(Boolean)
                      ? " All tasks are complete!"
                      : " Please complete all tasks before the event."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <IconCheck className="size-12 text-green-600 mx-auto mb-2" />
                <p className="text-secondary font-semibold">All tasks completed!</p>
                <p className="text-sm text-muted-foreground">You are all set for this event.</p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setTasksDialogOpen(false)}>Close</Button>
            {tasksRole && tasksRole.outstandingTasks.length > 0 && (
              <Button className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white" onClick={handleSaveTasks}>
                Save Progress
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface EventRoleCardProps {
  role: AssignedRole
  onWithdraw: (id: string) => void
  onEdit: (role: AssignedRole) => void
  onMessage: (role: AssignedRole) => void
  onReviewTasks: (role: AssignedRole) => void
  getGoogleMapsUrl: (role: AssignedRole) => string
}

function EventRoleCard({ role, onWithdraw, onEdit, onMessage, onReviewTasks, getGoogleMapsUrl }: EventRoleCardProps) {
  return (
    <div className="bg-white border-b">
      {/* Orange Header */}
      <div className="bg-[#2E7D52] text-white px-4 py-2">
        <p className="font-bold text-sm">{role.eventName}</p>
        <p className="text-xs">{role.eventType}</p>
      </div>

      {/* Content Grid */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_200px] gap-6">
        {/* Status Column */}
        <div className="space-y-2">
          <div>
            <span className="text-xs text-muted-foreground">Status: </span>
            <span className={`text-sm font-semibold ${role.status === "PENDING" ? "text-[#2E7D52]" : "text-secondary"
              }`}>
              {role.status}
            </span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Role: </span>
            <span className="text-sm text-primary">{role.role}</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Days Assigned:</span>
            {role.daysAssigned.length > 0 ? (
              role.daysAssigned.map((day, i) => (
                <p key={i} className="text-sm text-primary">{day}</p>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">-</p>
            )}
          </div>
          {(role as any).additionalRoles?.map((ar: any, i: number) => (
            <div key={i}>
              <div>
                <span className="text-xs text-muted-foreground">Role: </span>
                <span className="text-sm text-primary">{ar.role}</span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Days Assigned:</span>
                {ar.days.map((day: string, j: number) => (
                  <p key={j} className="text-sm text-primary">{day}</p>
                ))}
              </div>
            </div>
          ))}
          {role.hasMissingCertifications && (
            <button
              onClick={() => onReviewTasks(role)}
              className="text-sm text-[#2E7D52] hover:underline block mt-2 text-left"
            >
              Review Outstanding Tasks
            </button>
          )}
        </div>

        {/* Dates Column */}
        <div className="space-y-2">
          <div>
            <span className="text-xs text-muted-foreground">Setup Date: </span>
            <span className="text-sm text-secondary">{role.setupDate}</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Event Start: </span>
            <span className="text-sm text-secondary">{role.eventStart}</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Event End: </span>
            <span className="text-sm text-secondary">{role.eventEnd}</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Tear Down: </span>
            <span className="text-sm text-secondary">{role.tearDown}</span>
          </div>
        </div>

        {/* Location Column */}
        <div className="space-y-1">
          <div>
            <span className="text-xs text-muted-foreground">Location: </span>
            <span className="text-sm text-primary">{role.location}</span>
          </div>
          <p className="text-sm text-secondary pl-12">{role.address}</p>
          <p className="text-sm text-secondary pl-12">{role.city}, {role.state} {role.zip} {role.country}</p>
          {role.website && (
            <div>
              <span className="text-xs text-muted-foreground">Website: </span>
              <a href={role.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                {role.website}
              </a>
            </div>
          )}
        </div>

        {/* Actions Column */}
        <div className="space-y-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full text-primary border-primary hover:bg-[#1B4A32] hover:border-[#1B4A32] hover:text-white text-sm flex items-center justify-center gap-1">
                <IconExternalLink className="size-4" />
                Maps
                <IconChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <a
                  href={getGoogleMapsUrl(role)}
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
                    `${role.address}, ${role.city}, ${role.state} ${role.zip}`
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
                  navigator.clipboard.writeText(`${role.address}, ${role.city}, ${role.state} ${role.zip}`)
                  toast.success("Address copied to clipboard")
                }}
              >
                Copy Address
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-full bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white text-sm flex items-center justify-center gap-1">
                ROLE OPTIONS
                <IconChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem onClick={() => onEdit(role)} className="flex items-center gap-2">
                <IconEdit className="size-4" />
                Edit Application
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMessage(role)} className="flex items-center gap-2">
                <IconMail className="size-4" />
                Message Coordinator
              </DropdownMenuItem>
              {role.hasMissingCertifications && (
                <DropdownMenuItem onClick={() => onReviewTasks(role)} className="flex items-center gap-2">
                  <IconChecklist className="size-4" />
                  Review Outstanding Tasks
                </DropdownMenuItem>
              )}
              <DropdownMenuItem onClick={() => onWithdraw(role.id)} className="flex items-center gap-2 text-red-600">
                <IconX className="size-4" />
                Withdraw Application
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
