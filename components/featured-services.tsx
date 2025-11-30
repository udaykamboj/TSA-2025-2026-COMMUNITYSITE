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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Browse by Category</h2>
            <p className="text-slate-700">Find resources in your area of need</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.id} href={`/resources?category=${encodeURIComponent(service.category)}`}>
                <div className="flex flex-col items-center text-center p-6 border-2 border-slate-900 hover:bg-slate-900 transition-all cursor-pointer bg-white group">
                  <Icon className="w-14 h-14 text-blue-600 group-hover:text-white mb-3 transition-colors" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-white mb-1 transition-colors">{service.name}</p>
                  <p className="text-xs text-slate-600 group-hover:text-gray-200 mb-2 transition-colors">{service.description}</p>
                  <p className="text-xs text-blue-600 group-hover:text-white font-medium transition-colors">{service.count}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
