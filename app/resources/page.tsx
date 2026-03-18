"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import SearchAutocomplete from "@/components/resources/search-autocomplete"
import ResourceFilters from "@/components/resources/resource-filters"
import ResourceCard from "@/components/resources/resource-card"
import { ResourceCardWrapper } from "@/components/resources/resource-card-wrapper"
import ResourceDetailModal from "@/components/resources/resource-detail-modal"
import { Button } from "@/components/ui/button"
import { allResources } from "@/lib/resources-data"
import { staggerContainer, staggerItem } from "@/lib/animations"

type Resource = (typeof allResources)[number]

export default function ResourcesPage() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get("search") ?? ""
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  useEffect(() => {
    const q = searchParams.get("search") ?? ""
    setSearchTerm((prev) => (prev !== q ? q : prev))
  }, [searchParams])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([])
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>([])
  const [selectedOperatingHours, setSelectedOperatingHours] = useState("all")
  const [sortBy, setSortBy] = useState("distance")
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

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

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource)
    setModalOpen(true)
  }

  const handleReset = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedAgeGroups([])
    setSelectedServiceTypes([])
    setSelectedOperatingHours("all")
    setSortBy("distance")
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1">
        {/* Green curved header - same contained width as City Services card below */}
        <div className="w-full max-w-7xl mx-auto px-4 pt-4 pb-0">
          <motion.section
            className="relative rounded-2xl overflow-hidden px-6 py-10 md:px-10 md:py-12 mb-8"
            style={{
              background: "linear-gradient(135deg, #0a3c00 0%, #1a5c10 50%, #0d4a05 100%)",
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative z-10 text-white">
              <h1 className="text-4xl font-bold md:text-5xl mb-3 drop-shadow-sm" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
                Support & Resources
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Search and filter community resources available to you—food, housing, health, education, and more.
              </p>
            </div>
            {/* Decorative circle (small circle to the right) */}
            <div
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/20"
              aria-hidden
            />
          </motion.section>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 pb-12">
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

            <main className="lg:col-span-3 bg-gray-50 rounded-2xl py-8 px-6 -mt-2">
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

              {/* Resource Cards - same dimensions and layout as homepage carousel */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {filtered.length > 0 ? (
                  filtered.map((resource) => (
                    <motion.div key={resource.id} variants={staggerItem}>
                      <ResourceCardWrapper
                        resource={resource}
                        onClick={() => handleResourceClick(resource)}
                        variant="grid"
                      />
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full bg-white rounded-2xl border border-slate-100 p-12 text-center shadow-sm">
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
              </motion.div>
            </main>
          </div>
        </div>
      </div>

      <ResourceDetailModal
        resource={selectedResource}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />

      <Footer />
    </div>
  )
}
