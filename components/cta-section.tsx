"use client"

import Link from "next/link"
import { Users, FileText, Building2 } from "lucide-react"

const stats = [
  {
    number: "For Residents",
    label: "Easily find services and programs tailored to your needs",
    description: "Browse Resources",
    icon: "Users",
    link: "/resources",
  },
  {
    number: "For Organizations",
    label: "Add your organization so residents can discover your services",
    description: "Submit Resource",
    icon: "Building2",
    link: "/submit",
  },
  {
    number: "About This Hub",
    label: "Understand how we connect the community with vital resources",
    description: "Learn More",
    icon: "FileText",
    link: "#",
  },
]

const iconMap: { [key: string]: any } = {
  Users: Users,
  Building2: Building2,
  FileText: FileText,
}

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">How We Support the Community</h2>
            <p className="text-slate-700">Helping residents and organizations access essential resources.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon]
            return (
              <div
                key={idx}
                className="bg-white border-2 border-slate-300 p-8 text-center hover:border-slate-500 transition-colors"
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
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2 transition text-sm border-2 border-slate-900"
                >
                  {stat.description}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
