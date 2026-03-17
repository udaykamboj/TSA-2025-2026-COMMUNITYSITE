"use client"
import { Users, Droplet, TreePine, Dog } from "lucide-react"
import Link from "next/link"
import SectionTitle from '@/components/section-title'

const stats = [
  {
    number: "737,000+",
    label: "residents in the city as of 2020",
    description: "View demographics",
    icon: "Users",
    link: "/demographics",
  },
  {
    number: "over 45 billion",
    label: "gallons of drinking water treated per year",
    description: "Learn about water quality",
    icon: "Droplet",
    link: "/water-quality",
  },
  {
    number: "Over 485 parks",
    label: "managed by Parks and Recreation",
    description: "Find a park",
    icon: "TreePine",
    link: "/parks",
  },
  {
    number: "Over 5,000 animals",
    label: "served annually by the Animal Shelter",
    description: "Visit an animal shelter",
    icon: "Dog",
    link: "/animal-shelter",
  },
]

const iconMap: { [key: string]: any } = {
  Users: Users,
  Droplet: Droplet,
  TreePine: TreePine,
  Dog: Dog,
}

export default function StatisticsSection() {
  return (

        <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Community Impact" linkText="View all services" linkHref="/main/services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon]
            return (
              <div
                key={idx}
                className="bg-white rounded-md shadow-sm border border-slate-100 p-8 text-center hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-16 h-16 text-slate-700" strokeWidth={1.5} />
                </div>
                <div className="mb-2">
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <p className="text-base text-slate-700 mb-3">
                    {stat.label}
                  </p>
                </div>
                <Link 
                  href={stat.link}
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2 transition text-sm rounded-md"
                >
                  {stat.description}
                </Link>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Ready to find the resources you need?</p>
          <Link href="/resources">
            <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-semibold transition rounded-md">
              Explore All Resources
            </button>
          </Link>
        </div>
        </div>
    </section>
  )
}
