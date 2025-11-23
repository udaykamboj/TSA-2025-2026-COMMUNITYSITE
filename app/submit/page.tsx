"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
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

export default function SubmitResourcePage() {
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
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    })
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleServiceTypeChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: prev.serviceType.includes(type)
        ? prev.serviceType.filter((t) => t !== type)
        : [...prev.serviceType, type],
    }))
    if (errors.serviceType) {
      setErrors({ ...errors, serviceType: "" })
    }
  }

  const handleAgeGroupChange = (ageGroup: string) => {
    setFormData((prev) => ({
      ...prev,
      ageGroups: prev.ageGroups.includes(ageGroup)
        ? prev.ageGroups.filter((ag) => ag !== ageGroup)
        : [...prev.ageGroups, ageGroup],
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

      <div className="flex-1">
        <div className="container-narrow py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Submit a Resource</h1>
            <p className="text-lg text-slate-700">
              Help us expand our community resource hub by submitting new organizations and services.
            </p>
          </div>

          {submitted && (
            <div className="mb-8 border-2 border-slate-900 bg-white p-6 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-slate-900 flex-shrink-0 mt-0.5 font-bold" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1 text-lg">Thank you for your submission!</h3>
                <p className="text-slate-700 text-sm">
                  We've received your resource submission and will review it within 2-3 business days. A confirmation
                  email has been sent to {formData.email}.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="border-2 border-slate-900 bg-white p-8 space-y-8">
            {/* Organization Information Section */}
            <div>
              <h2 className="form-section-title">Organization Information</h2>

              {/* Organization Name */}
              <div className="mb-6">
                <label className="form-label">
                  Organization Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  className={`w-full box-input ${errors.orgName ? "border-red-600 bg-red-50" : ""}`}
                  placeholder="Name of the organization"
                />
                {errors.orgName && <p className="form-error">{errors.orgName}</p>}
              </div>

              {/* Service Types */}
              <div className="mb-6">
                <label className="form-label">
                  Primary Service Type(s) <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer p-3 border-2 border-slate-900 bg-white hover:bg-slate-50 transition"
                    >
                      <input
                        type="checkbox"
                        checked={formData.serviceType.includes(type)}
                        onChange={() => handleServiceTypeChange(type)}
                        className="rounded border-2 border-slate-900 cursor-pointer"
                      />
                      <span className="text-sm text-slate-900 font-medium">{type}</span>
                    </label>
                  ))}
                </div>
                {errors.serviceType && <p className="form-error">{errors.serviceType}</p>}
              </div>

              {/* Service Description */}
              <div className="mb-6">
                <label className="form-label">
                  Service Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full box-input ${errors.description ? "border-red-600 bg-red-50" : ""}`}
                  placeholder="Describe the services provided, mission, and how people can access these services..."
                />
                {errors.description && <p className="form-error">{errors.description}</p>}
                <p className="text-xs text-slate-600 mt-1">Minimum 20 characters recommended</p>
              </div>
            </div>

            {/* Contact Information Section */}
            <div>
              <h2 className="form-section-title">Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">
                    Contact Person <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={`w-full box-input ${errors.contactPerson ? "border-red-600 bg-red-50" : ""}`}
                    placeholder="Full name"
                  />
                  {errors.contactPerson && <p className="form-error">{errors.contactPerson}</p>}
                </div>

                <div>
                  <label className="form-label">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full box-input ${errors.email ? "border-red-600 bg-red-50" : ""}`}
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                <div>
                  <label className="form-label">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full box-input ${errors.phone ? "border-red-600 bg-red-50" : ""}`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="form-error">{errors.phone}</p>}
                </div>

                <div>
                  <label className="form-label">Website (Optional)</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full box-input"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>

            {/* Service Details Section */}
            <div>
              <h2 className="form-section-title">Service Details</h2>

              <div className="mb-6">
                <label className="form-label">
                  Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full box-input ${errors.address ? "border-red-600 bg-red-50" : ""}`}
                  placeholder="Full address"
                />
                {errors.address && <p className="form-error">{errors.address}</p>}
              </div>

              <div className="mb-6">
                <label className="form-label">
                  Operating Hours <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  className={`w-full box-input ${errors.hours ? "border-red-600 bg-red-50" : ""}`}
                  placeholder="e.g., Mon-Fri 9am-5pm, Sat 10am-3pm"
                />
                {errors.hours && <p className="form-error">{errors.hours}</p>}
              </div>

              <div className="mb-6">
                <label className="form-label">Age Groups Served (Optional)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {ageGroupOptions.map((ageGroup) => (
                    <label
                      key={ageGroup}
                      className="flex items-center gap-2 cursor-pointer p-3 border-2 border-slate-900 bg-white hover:bg-slate-50 transition"
                    >
                      <input
                        type="checkbox"
                        checked={formData.ageGroups.includes(ageGroup)}
                        onChange={() => handleAgeGroupChange(ageGroup)}
                        className="rounded border-2 border-slate-900 cursor-pointer"
                      />
                      <span className="text-sm text-slate-900 font-medium">{ageGroup}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6 flex items-center gap-3 p-4 border-2 border-slate-900 bg-slate-50">
                <input
                  type="checkbox"
                  name="isFree"
                  checked={formData.isFree}
                  onChange={handleChange}
                  id="isFree"
                  className="w-5 h-5 border-2 border-slate-900 cursor-pointer"
                />
                <label htmlFor="isFree" className="cursor-pointer font-semibold text-slate-900">
                  This service is free
                </label>
              </div>
            </div>

            {/* Confirmation Section */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer p-4 border-2 border-slate-900 bg-slate-50">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-5 h-5 border-2 border-slate-900 cursor-pointer mt-1 flex-shrink-0"
                />
                <span className="text-sm text-slate-900">
                  I confirm that the information provided is accurate and that the organization operates legally in our
                  jurisdiction. <span className="text-red-600">*</span>
                </span>
              </label>
              {errors.agree && <p className="form-error ml-8">{errors.agree}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4 border-t-2 border-slate-300">
              <Button
                type="submit"
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white border-2 border-slate-900 font-semibold py-3"
              >
                Submit Resource
              </Button>
              <Button
                type="reset"
                className="flex-1 border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-50 font-semibold py-3"
              >
                Clear Form
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
