"use client"

import { useState, useMemo } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import SearchAutocomplete from "@/components/resources/search-autocomplete"
import ResourceFilters from "@/components/resources/resource-filters"
import { MapPin, Phone, Mail, Heart, Share2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Resource {
  id: string
  name: string
  category: string
  description: string
  address: string
  phone: string
  email: string
  website: string
  tags: string[]
  hours: string
  distance?: number
  isFree: boolean
  ageGroups: string[]
  featured?: boolean
}

const allResources: Resource[] = [
  {
    id: "1",
    name: "Downtown Community Center",
    category: "Youth Programs",
    description: "Offering after-school programs, sports, arts, and mentoring for youth ages 6-18.",
    address: "123 Main Street, Downtown",
    phone: "(206) 555-0100",
    email: "info@dtcc.org",
    website: "www.dtcc.org",
    tags: ["Youth", "Sports", "Arts", "Free"],
    hours: "Mon-Fri 3pm-8pm, Sat 10am-6pm",
    distance: 0.5,
    isFree: true,
    ageGroups: ["Teens", "Families"],
  },
  {
    id: "2",
    name: "City Food Bank",
    category: "Food",
    description: "Emergency food assistance and nutrition programs for residents in need.",
    address: "456 Oak Avenue",
    phone: "(206) 555-0101",
    email: "help@cityfoodbank.org",
    website: "www.cityfoodbank.org",
    tags: ["Food", "Free", "Emergency"],
    hours: "Mon-Sat 9am-5pm",
    distance: 1.2,
    isFree: true,
    ageGroups: ["Families", "Seniors"],
  },
  {
    id: "3",
    name: "Community Mental Health Services",
    category: "Mental Health",
    description: "Counseling, therapy, and crisis support services for all ages.",
    address: "789 Pine Street",
    phone: "(206) 555-0102",
    email: "support@cmhs.org",
    website: "www.cmhs.org",
    tags: ["Mental Health", "Counseling", "Support"],
    hours: "Mon-Fri 8am-6pm, Sat 10am-4pm",
    distance: 0.8,
    isFree: false,
    ageGroups: ["Teens", "Families", "Seniors"],
  },
  {
    id: "4",
    name: "Senior Housing Initiative",
    category: "Housing",
    description: "Affordable housing options and support services specifically for seniors.",
    address: "321 Elm Street",
    phone: "(206) 555-0103",
    email: "info@seniorhousing.org",
    website: "www.seniorhousing.org",
    tags: ["Housing", "Seniors", "Affordable"],
    hours: "Mon-Fri 9am-5pm",
    distance: 2.1,
    isFree: false,
    ageGroups: ["Seniors"],
  },
  {
    id: "5",
    name: "Youth Scholarship Fund",
    category: "Education",
    description: "Educational scholarships and mentoring programs for youth from underserved communities.",
    address: "555 Birch Road",
    phone: "(206) 555-0104",
    email: "scholarships@ysf.org",
    website: "www.ysf.org",
    tags: ["Education", "Youth", "Scholarships", "Free"],
    hours: "Mon-Fri 10am-6pm",
    distance: 1.5,
    isFree: true,
    ageGroups: ["Teens"],
  },
  {
    id: "6",
    name: "Emergency Assistance Hotline",
    category: "Financial Aid",
    description: "Financial assistance, rent support, and utility bill help for qualified residents.",
    address: "Online & Phone",
    phone: "(206) 555-0105",
    email: "aid@emergencyassist.org",
    website: "www.emergencyassist.org",
    tags: ["Financial Aid", "Emergency", "Utilities", "Free"],
    hours: "24/7",
    distance: 0,
    isFree: true,
    ageGroups: ["Families", "Seniors"],
  },
  {
    id: "7",
    name: "Healthcare for All Clinic",
    category: "Healthcare",
    description: "Free and low-cost medical services including preventive care and vaccinations.",
    address: "234 Wellness Lane",
    phone: "(206) 555-0106",
    email: "care@healthcareforall.org",
    website: "www.healthcareforall.org",
    tags: ["Healthcare", "Low-cost", "Vaccines"],
    hours: "Mon-Fri 8am-5pm, Sat 10am-2pm",
    distance: 0.9,
    isFree: false,
    ageGroups: ["Families", "Seniors", "Teens"],
  },
  {
    id: "8",
    name: "Job Training Academy",
    category: "Employment",
    description: "Professional skills training and job placement assistance for all ages.",
    address: "888 Career Boulevard",
    phone: "(206) 555-0107",
    email: "enroll@jobtraining.org",
    website: "www.jobtraining.org",
    tags: ["Employment", "Training", "Free"],
    hours: "Mon-Fri 9am-6pm, Sat 10am-3pm",
    distance: 1.8,
    isFree: true,
    ageGroups: ["Teens", "Families"],
  },
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([])
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>([])
  const [selectedOperatingHours, setSelectedOperatingHours] = useState("all")
  const [sortBy, setSortBy] = useState("distance")
  const [savedResources, setSavedResources] = useState<string[]>([])

  const categories = ["all", ...new Set(allResources.map((r) => r.category))]
  const ageGroups = ["Families", "Teens", "Seniors"]
  const serviceTypes = ["Free", "Low-cost", "Membership-based"]

  const searchSuggestions = useMemo(
    () => [
      ...new Set(allResources.map((r) => r.name)),
      "Food",
      "Housing",
      "Mental Health",
      "Education",
      "Employment",
      "Youth Programs",
    ],
    [],
  )

  const filtered = useMemo(() => {
    return allResources
      .filter((r) => {
        const matchesSearch =
          searchTerm === "" ||
          r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

        const matchesCategory = selectedCategory === "all" || r.category === selectedCategory

        const matchesAgeGroups =
          selectedAgeGroups.length === 0 || selectedAgeGroups.some((ag) => r.ageGroups.includes(ag))

        const matchesServiceTypes =
          selectedServiceTypes.length === 0 ||
          selectedServiceTypes.some((st) => {
            if (st === "Free") return r.isFree
            if (st === "Low-cost") return !r.isFree && r.tags.includes("Low-cost")
            return r.tags.includes(st)
          })

        return matchesSearch && matchesCategory && matchesAgeGroups && matchesServiceTypes
      })
      .sort((a, b) => {
        if (sortBy === "distance") {
          return (a.distance || 0) - (b.distance || 0)
        }
        return a.name.localeCompare(b.name)
      })
  }, [searchTerm, selectedCategory, selectedAgeGroups, selectedServiceTypes, sortBy])

  const toggleSaveResource = (id: string) => {
    setSavedResources((prev) => (prev.includes(id) ? prev.filter((rid) => rid !== id) : [...prev, id]))
  }

  const handleReset = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedAgeGroups([])
    setSelectedServiceTypes([])
    setSelectedOperatingHours("all")
    setSortBy("distance")
  }

  const getMapLink = (address: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(address)}`
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1">
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Find Resources</h1>
            <p className="text-lg text-slate-700">Search and filter community resources available to you</p>
          </div>

          <div className="mb-8">
            <SearchAutocomplete
              items={searchSuggestions}
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search by organization name, type of service (e.g., 'food', 'counseling'), or tag..."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <ResourceFilters
                categories={categories}
                ageGroups={ageGroups}
                serviceTypes={serviceTypes}
                selectedCategory={selectedCategory}
                selectedAgeGroups={selectedAgeGroups}
                selectedServiceTypes={selectedServiceTypes}
                selectedOperatingHours={selectedOperatingHours}
                onCategoryChange={setSelectedCategory}
                onAgeGroupToggle={(ag) =>
                  setSelectedAgeGroups((prev) => (prev.includes(ag) ? prev.filter((x) => x !== ag) : [...prev, ag]))
                }
                onServiceTypeToggle={(st) =>
                  setSelectedServiceTypes((prev) => (prev.includes(st) ? prev.filter((x) => x !== st) : [...prev, st]))
                }
                onOperatingHoursChange={setSelectedOperatingHours}
                onReset={handleReset}
              />
            </aside>

            <main className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm font-semibold text-slate-900">
                  Showing {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-slate-100 rounded-md text-sm font-semibold focus:outline-none focus:bg-slate-50"
                >
                  <option value="distance">Closest First</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>

              {/* Resource Cards */}
              <div className="space-y-6">
                {filtered.length > 0 ? (
                  filtered.map((resource) => (
                    <div key={resource.id} className="bg-white rounded-md shadow-sm border border-slate-100">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-1">{resource.name}</h3>
                            <p className="text-sm text-slate-500">{resource.category}</p>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <button
                              onClick={() => toggleSaveResource(resource.id)}
                              className={`p-2 rounded border transition ${
                                savedResources.includes(resource.id)
                                  ? "border-slate-200 bg-slate-900 text-white"
                                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                              }`}
                              title="Save resource"
                            >
                              <Heart
                                className="w-5 h-5"
                                fill={savedResources.includes(resource.id) ? "currentColor" : "none"}
                              />
                            </button>
                            <button
                              onClick={() => {
                                const text = `Check out ${resource.name}: ${resource.description}. Phone: ${resource.phone}`
                                navigator.share?.({
                                  title: resource.name,
                                  text,
                                  url: window.location.href,
                                }) || navigator.clipboard.writeText(text)
                              }}
                              className="p-2 rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
                              title="Share resource"
                            >
                              <Share2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-700 mb-4 leading-relaxed">{resource.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {resource.tags.map((tag) => (
                            <span key={tag} className="tag-badge">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Contact Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900">Address</p>
                              <a
                                href={getMapLink(resource.address)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-slate-700 hover:underline flex items-center gap-1"
                              >
                                {resource.address}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                              {resource.distance !== undefined && resource.distance > 0 && (
                                <p className="text-xs text-slate-500 mt-1">{resource.distance} miles away</p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900">Phone</p>
                              <a
                                href={`tel:${resource.phone}`}
                                className="text-sm text-slate-700 hover:underline"
                              >
                                {resource.phone}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900">Email</p>
                              <a
                                href={`mailto:${resource.email}`}
                                className="text-sm text-slate-700 hover:underline break-all"
                              >
                                {resource.email}
                              </a>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-1">Operating Hours</p>
                            <p className="text-sm text-slate-700">{resource.hours}</p>
                          </div>
                        </div>

                        {/* View Details Button */}
                        <div className="mt-6 flex gap-3">
                          <Button
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-3 font-semibold"
                            onClick={() => {
                              window.location.href = `/resources/${resource.id}`
                            }}
                          >
                            View Full Details
                          </Button>
                          <Button
                            className="flex-1 border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-semibold rounded px-4 py-3"
                            onClick={() => window.open(resource.website)}
                          >
                            Visit Website
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-md border border-slate-100 p-12 text-center shadow-sm">
                    <p className="text-slate-700 text-lg mb-2">No resources found matching your criteria.</p>
                    <p className="text-slate-600 text-sm">Try adjusting your filters or search terms.</p>
                    <Button
                      onClick={handleReset}
                      className="mt-4 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 font-semibold rounded px-4 py-2"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
