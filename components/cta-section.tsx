"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, FileText, Building2 } from "lucide-react"

const stats = [
  {
    icon: <Users className="w-8 h-8 text-slate-900" />,
    title: "For Residents",
    label: "Browse Resources",
    description: "Easily find services and programs tailored to your needs.",
    link: "/resources",
    outline: false,
  },
  {
    icon: <Building2 className="w-8 h-8 text-slate-900" />,
    title: "For Organizations",
    label: "Submit Resource",
    description: "Add your organization so residents can discover your services.",
    link: "/submit",
    outline: false,
  },
  {
    icon: <FileText className="w-8 h-8 text-slate-900" />,
    title: "About This Hub",
    label: "Learn More",
    description: "Understand how we connect the community with vital resources.",
    link: "#",
    outline: true,
  },
]

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">How We Support the Community</h2>
          <p className="text-slate-700">Helping residents and organizations access essential resources.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white border-2 border-slate-300 p-6 hover:border-slate-500 transition flex flex-col justify-between h-full"
            >
              {/* Top section: Icon in circle and title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-200 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{stat.title}</h3>
              </div>

              {/* Middle: Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">{stat.description}</p>

              {/* Bottom: Button */}
              <div>
                <Link href={stat.link}>
                  {stat.outline ? (
                    <Button className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-white w-full">
                      {stat.label}
                    </Button>
                  ) : (
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold border-2 border-slate-900 w-full">
                      {stat.label}
                    </Button>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
