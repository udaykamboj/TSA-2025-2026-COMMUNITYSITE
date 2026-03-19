"use client"

import type React from "react"
import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/dashboard/ui/button"
import { Input } from "@/components/dashboard/ui/input"
import { Label } from "@/components/dashboard/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dashboard/ui/dialog"
import {
  IconBuilding,
  IconCheck,
  IconClock,
  IconX,
  IconCheckbox,
} from "@tabler/icons-react"
import { toast } from "sonner"
import { CheckCircle } from "lucide-react"

interface OrgFormData {
  orgName: string
  serviceType: string[]
  description: string
  contactPerson: string
  email: string
  phone: string
  website: string
  address: string
  hours: string
  ageGroups: string[]
  isFree: boolean
  eligibility: string
  agree: boolean
}

const serviceTypes = [
  "Food Assistance",
  "Housing",
  "Healthcare",
  "Education",
  "Employment",
  "Mental Health",
  "Youth Programs",
  "Financial Aid",
  "Legal Services",
  "Other",
]

const ageGroupOptions = ["Families", "Teens", "Seniors", "Children", "Young Adults"]

import { useRouter } from "next/navigation"

interface OrganizationsContentProps {
  defaultShowCreateForm?: boolean
}

export function OrganizationsContent({ defaultShowCreateForm = false }: OrganizationsContentProps) {
  const { organizations, userOrganizations, joinOrganization, addOrganization } = useAppStore()
  const router = useRouter()
  const [joinCode, setJoinCode] = useState("")
  const [joinDialogOpen, setJoinDialogOpen] = useState(false)
  const [showCreateForm, setShowCreateForm] = useState(defaultShowCreateForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleBack = () => {
    if (defaultShowCreateForm) {
      router.push("/dashboard/organizations")
    } else {
      setShowCreateForm(false)
    }
  }

  const [formData, setFormData] = useState<OrgFormData>({
    orgName: "",
    serviceType: [],
    description: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    hours: "",
    ageGroups: [],
    isFree: false,
    eligibility: "",
    agree: false,
  })

  const myOrgs = organizations.filter((org) => userOrganizations.includes(org.id))

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.orgName.trim()) newErrors.orgName = "Organization name is required"
    if (formData.serviceType.length === 0) newErrors.serviceType = "Select at least one service type"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person name is required"
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.hours.trim()) newErrors.hours = "Operating hours are required"
    if (!formData.agree) newErrors.agree = "You must agree to the terms"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleServiceTypeChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: prev.serviceType.includes(type) ? prev.serviceType.filter((t) => t !== type) : [...prev.serviceType, type],
    }))
    if (errors.serviceType) {
      setErrors({ ...errors, serviceType: "" })
    }
  }

  const handleAgeGroupChange = (ageGroup: string) => {
    setFormData((prev) => ({
      ...prev,
      ageGroups: prev.ageGroups.includes(ageGroup) ? prev.ageGroups.filter((ag) => ag !== ageGroup) : [...prev.ageGroups, ageGroup],
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    addOrganization({
      name: formData.orgName,
      description: formData.description,
      serviceTypes: formData.serviceType,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      address: formData.address,
      hours: formData.hours,
      ageGroups: formData.ageGroups,
      isFree: formData.isFree,
      eligibility: formData.eligibility,
    })

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setShowCreateForm(false)
      setFormData({
        orgName: "",
        serviceType: [],
        description: "",
        contactPerson: "",
        email: "",
        phone: "",
        website: "",
        address: "",
        hours: "",
        ageGroups: [],
        isFree: false,
        eligibility: "",
        agree: false,
      })
    }, 4000)
  }

  const handleJoin = () => {
    if (joinOrganization(joinCode)) {
      toast.success("Successfully joined organization!")
      setJoinCode("")
      setJoinDialogOpen(false)
    } else {
      toast.error("Invalid code or organization not found")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
            <IconCheck className="size-3" /> Approved
          </span>
        )
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
            <IconClock className="size-3" /> Pending
          </span>
        )
      case "rejected":
        return (
          <span className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
            <IconX className="size-3" /> Rejected
          </span>
        )
      default:
        return null
    }
  }

  if (showCreateForm) {
    return (
      <div className="min-h-screen bg-muted">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-secondary">Create Organization</h1>
              <p className="text-sm text-muted-foreground">
                Register a new organization for volunteer management
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleBack}
              className="border-primary text-primary"
            >
              Back to Organizations
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="w-full max-w-3xl mx-auto bg-white rounded-md shadow-sm p-6 sm:p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Submit Organization</h2>
            <p className="text-base text-slate-700 mb-4">Fill out the form below to register your organization for our volunteer system.</p>

            {submitted && (
              <div className="mb-4 p-4 rounded bg-green-100 border border-green-200 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Thank you for your submission</h3>
                  <p className="text-slate-700 text-sm">We have received your organization registration and will review it within a few business days.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Organization Information</h3>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-900">Organization Name <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="orgName"
                    value={formData.orgName}
                    onChange={handleChange}
                    className={`mt-1 w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-primary hover:border-slate-400 rounded ${errors.orgName ? "border-red-600 bg-red-50" : ""}`}
                    placeholder="Name of the organization"
                  />
                  {errors.orgName && <p className="text-red-600 text-sm mt-1">{errors.orgName}</p>}
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-900">Primary Service Type(s) <span className="text-red-600">*</span></label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    {serviceTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer p-2 border border-slate-200 bg-transparent hover:bg-slate-50 rounded">
                        <input
                          type="checkbox"
                          checked={formData.serviceType.includes(type)}
                          onChange={() => handleServiceTypeChange(type)}
                          className="w-4 h-4 border border-slate-300 focus:outline-none accent-primary"
                        />
                        <span className="text-sm text-slate-700">{type}</span>
                      </label>
                    ))}
                  </div>
                  {errors.serviceType && <p className="text-red-600 text-sm mt-2">{errors.serviceType}</p>}
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-900">Organization Description <span className="text-red-600">*</span></label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className={`mt-1 w-full border border-slate-300 px-3 py-2 text-sm resize-none focus:outline-none focus:border-primary rounded ${errors.description ? "border-red-600 bg-red-50" : ""}`}
                    placeholder="Describe your organization's mission, services, and how volunteers can contribute..."
                  />
                  {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
                  <p className="text-xs text-slate-600 mt-1">Minimum 20 characters recommended</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-900">Contact Person <span className="text-red-600">*</span></label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={`mt-1 w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-primary rounded ${errors.contactPerson ? "border-red-600 bg-red-50" : ""}`}
                      placeholder="Full name"
                    />
                    {errors.contactPerson && <p className="text-red-600 text-sm mt-1">{errors.contactPerson}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900">Email <span className="text-red-600">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-primary rounded ${errors.email ? "border-red-600 bg-red-50" : ""}`}
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900">Phone <span className="text-red-600">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`mt-1 w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-primary rounded ${errors.phone ? "border-red-600 bg-red-50" : ""}`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900">Website (Optional)</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="mt-1 w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-primary rounded"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Service Details</h3>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-900">Address <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`mt-1 w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-primary rounded ${errors.address ? "border-red-600 bg-red-50" : ""}`}
                    placeholder="Full address"
                  />
                  {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-900">Operating Hours <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="hours"
                    value={formData.hours}
                    onChange={handleChange}
                    className={`mt-1 w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-primary rounded ${errors.hours ? "border-red-600 bg-red-50" : ""}`}
                    placeholder="e.g., Mon-Fri 9am-5pm, Sat 10am-3pm"
                  />
                  {errors.hours && <p className="text-red-600 text-sm mt-1">{errors.hours}</p>}
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-900">Age Groups Served (Optional)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    {ageGroupOptions.map((ageGroup) => (
                      <label key={ageGroup} className="flex items-center gap-2 cursor-pointer p-2 border border-slate-200 bg-transparent hover:bg-slate-50 rounded">
                        <input
                          type="checkbox"
                          checked={formData.ageGroups.includes(ageGroup)}
                          onChange={() => handleAgeGroupChange(ageGroup)}
                          className="w-4 h-4 border border-slate-300 focus:outline-none accent-primary"
                        />
                        <span className="text-sm text-slate-700">{ageGroup}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-900">Eligibility Requirements (Optional)</label>
                  <textarea
                    name="eligibility"
                    value={formData.eligibility}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 w-full border border-slate-300 px-3 py-2 text-sm resize-none focus:outline-none focus:border-primary rounded"
                    placeholder="Describe any eligibility requirements for volunteers..."
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="isFree" className="flex items-start gap-2 cursor-pointer p-2 border border-slate-100 bg-transparent rounded">
                    <input
                      type="checkbox"
                      name="isFree"
                      checked={formData.isFree}
                      onChange={handleChange}
                      id="isFree"
                      className="w-4 h-4 border border-slate-300 mt-1 flex-shrink-0 accent-primary"
                    />
                    <span className="text-sm text-slate-700 font-normal">This organization provides free services</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="flex items-start gap-2 cursor-pointer p-2 border border-slate-100 bg-transparent rounded">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="w-4 h-4 border border-slate-300 mt-1 flex-shrink-0 accent-primary"
                  />
                  <span className="text-sm text-slate-700 font-normal">I confirm that the information provided is accurate and that the organization operates legally in our jurisdiction. <span className="text-red-600">*</span></span>
                </label>
                {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button type="submit" className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-white rounded px-6 py-2">
                  Submit Organization
                </Button>
                 <Button 
                  type="button" 
                  variant="outline"
                  onClick={handleBack} 
                  className="border border-slate-300 bg-white text-slate-900 rounded px-4 py-2"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-secondary">Your Organizations</h1>
            <p className="text-sm text-muted-foreground">
              Join an organization to get started
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Empty State */}
        {myOrgs.length === 0 && (
          <div className="bg-white rounded shadow-sm p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#e8f5e9] rounded-lg flex items-center justify-center">
              <IconBuilding className="size-8 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-secondary mb-2">No Organizations Yet</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Join an organization with a code or create your own to get started with volunteer events.
            </p>
            <Dialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-secondary font-semibold px-8">
                  Join Organization
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join Organization</DialogTitle>
                  <DialogDescription>
                    Enter the organization code to join
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="code">Organization Code</Label>
                    <Input
                      id="code"
                      placeholder="Enter code (e.g., PNW2024)"
                      value={joinCode}
                      onChange={(e) => setJoinCode(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setJoinDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleJoin} className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217]">
                    Join
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}

        {/* After Joining Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* After Joining Steps */}
          <div className="bg-white rounded shadow-sm p-6">
            <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">?</span>
              After Joining
            </h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-bold text-primary">1.</span>
                <span>If you were sent to your new dashboard</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">2.</span>
                <span>Logout and log back in to see it</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">3.</span>
                <span>If you were sent to your new dashboard</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">4.</span>
                <span>You can go to your dashboard via the Organizations dropdown</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">5.</span>
                <span>Connect what is email or what conditions</span>
              </li>
            </ol>
          </div>

          {/* Need Help Section */}
          <div className="bg-white rounded shadow-sm p-6">
            <h3 className="text-lg font-bold text-secondary mb-4">Need Help?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span>{"•"}</span>
                <span>Ask your organization/school admin for their join code</span>
              </li>
              <li className="flex gap-2">
                <span>{"•"}</span>
                <span>Make sure to use uppercase letters and numbers</span>
              </li>
              <li className="flex gap-2">
                <span>{"•"}</span>
                <span>Contact your organization if the code does not work</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Create Organization Section */}
        <div className="bg-white rounded shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center shrink-0">
              <IconBuilding className="size-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-secondary mb-1">Create Organization</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Want to start your own organization? Create one and get your unique code to share with members.
              </p>
              <Button 
                onClick={() => setShowCreateForm(true)}
                variant="outline" 
                className="border-primary text-secondary hover:bg-[#e8f5e9]"
              >
                Create New Organization
              </Button>
            </div>
          </div>
        </div>

        {/* My Organizations Grid */}
        {myOrgs.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-secondary mb-4">My Organizations</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {myOrgs.map((org) => (
                <div key={org.id} className="bg-white rounded shadow-sm overflow-hidden">
                  <div className="bg-primary text-white px-4 py-3">
                    <div className="flex items-center gap-2">
                      <IconBuilding className="size-5" />
                      <span className="font-bold">{org.name}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">{org.memberCount} members</span>
                      {getStatusBadge(org.status)}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {org.description || "No description provided"}
                    </p>
                    {org.status === "approved" && (
                      <div className="pt-3 border-t">
                        <p className="text-xs text-muted-foreground">
                          Organization Code: <span className="font-mono font-bold text-primary">{org.code}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Join Organization Card (when user has organizations) */}
        {myOrgs.length > 0 && (
          <div className="flex justify-center">
            <Dialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217] text-secondary font-semibold px-8">
                  Join Another Organization
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join Organization</DialogTitle>
                  <DialogDescription>
                    Enter the organization code to join
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="code2">Organization Code</Label>
                    <Input
                      id="code2"
                      placeholder="Enter code (e.g., PNW2024)"
                      value={joinCode}
                      onChange={(e) => setJoinCode(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setJoinDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleJoin} className="bg-[#1B4A32] hover:bg-[#133524] active:bg-[#0C2217]">
                    Join
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  )
}
