"use client"

import Link from "next/link"
import { Users, FileText, Building2, ChevronRight } from "lucide-react"
import SectionTitle from '@/components/section-title'

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="How We Support the Community" linkText="Learn More" linkHref="/main/services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon]
            return (
              <div
                key={idx}
                className="h-full flex flex-col backdrop-blur-[12.5px] border-2 transition-all duration-300"
                style={{
                  backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                  borderColor: '#ddd',
                  borderRadius: '8px',
                  padding: '22px',
                  boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff'
                  e.currentTarget.style.borderColor = '#555'
                  e.currentTarget.style.borderRadius = '16px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsla(0, 0%, 100%, 0.749)'
                  e.currentTarget.style.borderColor = '#ddd'
                  e.currentTarget.style.borderRadius = '8px'
                }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-3" style={{ backgroundColor: '#f0f0f0' }}>
                    <IconComponent 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        strokeWidth: 1.5,
                        color: '#051adb'
                      }} 
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center text-center">
                  <h3 
                    className="clash-grotesk font-medium leading-[1.25] mb-4" 
                    style={{ 
                      fontSize: '22px',
                      letterSpacing: '0.01em',
                      wordBreak: 'break-word',
                      hyphens: 'auto'
                    }}
                  >
                    {stat.number}
                  </h3>
                  <a 
                    href={stat.link}
                    className="inline-flex items-center justify-center gap-2 transition-all duration-200 rounded-full"
                    style={{ 
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: '700',
                      backgroundColor: '#0d28ff',
                      color: '#ffffff',
                      padding: '14px 32px',
                      border: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0a1fd9'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0d28ff'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {stat.description}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        .clash-grotesk {
          font-family: "Clash Grotesk", sans-serif;
        }
      `}</style>
    </section>
  )
}