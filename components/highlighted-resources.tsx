"use client"

import Link from "next/link"
import { ChevronRight, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    id: 1,
    title: "City Food Bank",
    category: "Food Assistance",
    shortDescription: "Emergency meals and groceries",
    description:
      "Access emergency food assistance and meal programs across the community with free groceries delivered weekly.",
    image: "/placeholder.svg?key=highlight1",
    location: "Multiple Locations",
    served: "2,000+ families/month",
    tags: ["Free", "Food", "Families"],
  },
  {
    id: 2,
    title: "Youth Development Center",
    category: "Youth Programs",
    shortDescription: "Mentoring and career prep",
    description: "After-school programs, mentoring, career development workshops, and internship placements for teens.",
    image: "/placeholder.svg?key=highlight2",
    location: "3 Community Centers",
    served: "500+ youth annually",
    tags: ["Youth", "Education", "Free"],
  },
  {
    id: 3,
    title: "Community Health Clinic",
    category: "Healthcare",
    shortDescription: "Affordable health services",
    description: "Affordable healthcare services for uninsured and underinsured residents including preventive care.",
    image: "/placeholder.svg?key=highlight3",
    location: "Downtown & North Branch",
    served: "5,000+ patients/year",
    tags: ["Healthcare", "Low-cost", "All Ages"],
  },
]

export default function HighlightedResources() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Spotlight on Resources</h2>
          <p className="text-gray-600">Popular services and organizations in our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((resource) => (
            <article
              key={resource.id}
              className="bg-white border-2 border-slate-300 overflow-hidden flex flex-col hover:border-slate-500 transition"
            >
              {/* Image */}
              <div className="aspect-video bg-gray-200 overflow-hidden border-b-2 border-slate-300">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 mb-3 w-fit uppercase tracking-wide border border-slate-300">
                  {resource.category}
                </span>

                <h3 className="text-xl font-bold text-foreground mb-1">{resource.title}</h3>
                <p className="text-slate-700 font-medium text-sm mb-3">{resource.shortDescription}</p>

                <p className="text-gray-700 text-sm mb-4 flex-1 line-clamp-2">{resource.description}</p>

                {/* Stats */}
                <div className="space-y-2 mb-4 pb-4 border-b-2 border-slate-300">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-slate-700 flex-shrink-0" />
                    <span>{resource.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-slate-700 flex-shrink-0" />
                    <span>{resource.served}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 font-medium border border-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link href={`/resources/${resource.id}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
