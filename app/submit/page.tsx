"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FormData {
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
  tags: string
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

export default function ContactMayorPage() {
  const [formData, setFormData] = useState<FormData>({
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
    tags: "",
    eligibility: "",
    agree: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.orgName.trim()) newErrors.orgName = "Organization name is required"
    if (formData.serviceType.length === 0) newErrors.serviceType = "Select at least one service type"
    if (!formData.description.trim()) newErrors.description = "Service description is required"
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
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleServiceTypeChange = (type: string) => {
    setFormData((prev: any) => ({
      ...prev,
      serviceType: prev.serviceType.includes(type) ? prev.serviceType.filter((t: string) => t !== type) : [...prev.serviceType, type],
    }))
    if (errors.serviceType) {
      setErrors({ ...errors, serviceType: "" })
    }
  }

  const handleAgeGroupChange = (ageGroup: string) => {
    setFormData((prev: any) => ({
      ...prev,
      ageGroups: prev.ageGroups.includes(ageGroup) ? prev.ageGroups.filter((ag: string) => ag !== ageGroup) : [...prev.ageGroups, ageGroup],
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    console.log("Form submitted:", formData)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
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
        tags: "",
        eligibility: "",
        agree: false,
      })
    }, 4000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex justify-center py-12 px-4">
        <div className="w-full max-w-3xl bg-white rounded-md shadow-sm p-6 sm:p-8 border border-slate-100">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Submit a Resource</h1>
          <p className="text-base text-slate-700 mb-4">Help us expand our community resource hub by submitting new organizations and services.</p>

          {submitted && (
            <div className="mb-4 p-4 rounded bg-green-100 border border-green-200 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-slate-900 mb-1">Thank you for your submission</h3>
                <p className="text-slate-700 text-sm">We've received your submission and will review it within a few business days.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Organization Information</h2>

              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-900">Organization Name <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  className={`mt-1 w-full border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:border-slate-400 hover:border-slate-300 ${errors.orgName ? "border-red-600 bg-red-50" : ""}`}
                  placeholder="Name of the organization"
                />
                {errors.orgName && <p className="text-red-600 text-sm mt-1">{errors.orgName}</p>}
              </div>

                <div className="mb-5">
                <label className="block text-sm font-medium text-slate-900">Primary Service Type(s) <span className="text-red-600">*</span></label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                  {serviceTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer p-2 border border-slate-200 bg-transparent hover:text-slate-800">
                      <input
                        type="checkbox"
                        checked={formData.serviceType.includes(type)}
                        onChange={() => handleServiceTypeChange(type)}
                        className="w-4 h-4 border border-slate-300 focus:outline-none"
                      />
                      <span className="text-sm text-slate-700">{type}</span>
                    </label>
                  ))}
                </div>
                {errors.serviceType && <p className="text-red-600 text-sm mt-2">{errors.serviceType}</p>}
              </div>

                <div className="mb-5">
                <label className="block text-sm font-medium text-slate-900">Service Description <span className="text-red-600">*</span></label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className={`mt-1 w-full border border-slate-300 px-2 py-2 text-sm resize-none focus:outline-none focus:border-slate-400 ${errors.description ? "border-red-600 bg-red-50" : ""}`}
                  placeholder="Describe the services provided, mission, and how people can access these services..."
                />
                {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
                <p className="text-xs text-slate-600 mt-1">Minimum 20 characters recommended</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-900">Contact Person <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={`mt-1 w-full border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:border-slate-400 ${errors.contactPerson ? "border-red-600 bg-red-50" : ""}`}
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
                    className={`mt-1 w-full border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:border-slate-400 ${errors.email ? "border-red-600 bg-red-50" : ""}`}
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
                    className={`mt-1 w-full border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:border-slate-400 ${errors.phone ? "border-red-600 bg-red-50" : ""}`}
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
                    className="mt-1 w-full border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:border-slate-400"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Service Details</h2>

              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-900">Address <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`mt-1 w-full border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:border-slate-400 ${errors.address ? "border-red-600 bg-red-50" : ""}`}
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
                  className={`mt-1 w-full border border-slate-300 px-2 py-1 text-sm focus:outline-none focus:border-slate-400 ${errors.hours ? "border-red-600 bg-red-50" : ""}`}
                  placeholder="e.g., Mon-Fri 9am-5pm, Sat 10am-3pm"
                />
                {errors.hours && <p className="text-red-600 text-sm mt-1">{errors.hours}</p>}
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-900">Age Groups Served (Optional)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                  {ageGroupOptions.map((ageGroup) => (
                    <label key={ageGroup} className="flex items-center gap-2 cursor-pointer p-2 border border-slate-200 bg-transparent hover:text-slate-800">
                      <input
                        type="checkbox"
                        checked={formData.ageGroups.includes(ageGroup)}
                        onChange={() => handleAgeGroupChange(ageGroup)}
                        className="w-4 h-4 border border-slate-300 focus:outline-none"
                      />
                      <span className="text-sm text-slate-700">{ageGroup}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="isFree" className="flex items-start gap-2 cursor-pointer p-2 border border-slate-100 bg-transparent">
                  <input
                    type="checkbox"
                    name="isFree"
                    checked={formData.isFree}
                    onChange={handleChange}
                    id="isFree"
                    className="w-4 h-4 border border-slate-300 mt-1 flex-shrink-0"
                  />
                  <span className="text-sm text-slate-700 font-normal">This service is free</span>
                </label>
              </div>
            </div>

            <div>
              <label className="flex items-start gap-2 cursor-pointer p-2 border border-slate-100 bg-transparent">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-4 h-4 border border-slate-300 mt-1 flex-shrink-0"
                />
                <span className="text-sm text-slate-700 font-normal">I confirm that the information provided is accurate and that the organization operates legally in our jurisdiction. <span className="text-slate-600">*</span></span>
              </label>
              {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}
            </div>

            <div className="flex gap-3 pt-4 border-t pt-4">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2">Submit Resource</Button>
              <Button type="reset" onClick={() => window.location.reload()} className="border border-slate-300 bg-white text-slate-900 rounded px-4 py-2">Clear</Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
