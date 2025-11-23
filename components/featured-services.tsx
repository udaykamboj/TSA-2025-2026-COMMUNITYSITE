"use client"

import Link from "next/link"
import { Users, Home, DollarSign, Heart, BookOpen, Briefcase } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Food Assistance",
    icon: Users,
    description: "Emergency meals & groceries",
    category: "Food",
    count: "12 resources",
  },
  {
    id: 2,
    name: "Housing Support",
    icon: Home,
    description: "Affordable housing & rentals",
    category: "Housing",
    count: "8 resources",
  },
  {
    id: 3,
    name: "Financial Aid",
    icon: DollarSign,
    description: "Emergency assistance & bills",
    category: "Financial Aid",
    count: "6 resources",
  },
  {
    id: 4,
    name: "Mental Health",
    icon: Heart,
    description: "Counseling & support services",
    category: "Mental Health",
    count: "9 resources",
  },
  {
    id: 5,
    name: "Education",
    icon: BookOpen,
    description: "Learning & skill development",
    category: "Education",
    count: "10 resources",
  },
  {
    id: 6,
    name: "Employment",
    icon: Briefcase,
    description: "Jobs & training programs",
    category: "Employment",
    count: "7 resources",
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Browse by Category</h2>
          <p className="text-slate-700">Find resources in your area of need</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.id} href={`/resources?category=${encodeURIComponent(service.category)}`}>
                <button className="w-full flex flex-col items-center gap-3 p-6 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition cursor-pointer group h-full bg-white">
                  <div className="p-3">
                    <Icon className="w-6 h-6 text-slate-900 group-hover:text-white transition" />
                  </div>
                  <div className="text-center w-full">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-white transition">{service.name}</p>
                    <p className="text-xs text-slate-600 mt-1 group-hover:text-gray-200 transition">
                      {service.description}
                    </p>
                    <p className="text-xs text-slate-900 font-semibold mt-2 group-hover:text-white transition">
                      {service.count}
                    </p>
                  </div>
                </button>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
