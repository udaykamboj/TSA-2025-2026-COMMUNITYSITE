"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Users, FileText, Building2 } from "lucide-react"
import SectionTitle from "@/components/section-title"
import { MotionSection } from "@/components/ui/motion-section"
import { staggerContainer, staggerItem } from "@/lib/animations"

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
    link: "/main/services",
  },
]

const iconMap: { [key: string]: any } = {
  Users: Users,
  Building2: Building2,
  FileText: FileText,
}

export default function CTASection() {
  return (
    <MotionSection className="py-24 bg-white border-t border-slate-200">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionTitle title="How We Support the Community" linkText="Learn More" linkHref="/main/services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 bg-slate-200 shadow-sm mt-12">
          {stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon]
            return (
              <motion.div
                key={idx}
                className="h-full flex flex-col bg-white hover:bg-card transition-colors duration-300 p-10 lg:p-14 border border-transparent hover:border-slate-200 group"
                variants={staggerItem}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="mb-8 flex justify-center text-primary">
                  <IconComponent
                    style={{
                      width: '48px',
                      height: '48px',
                      strokeWidth: 1.5,
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col items-center text-center">
                  <h3 className="font-playfair font-bold text-2xl text-secondary mb-4 leading-snug">
                    {stat.number}
                  </h3>
                  <p className="font-poppins text-gray-500 font-light mb-10">
                    {stat.label}
                  </p>
                  <div className="mt-auto w-full">
                    <Link
                      href={stat.link}
                      className="box-button w-full block text-sm tracking-widest font-bold text-center"
                    >
                      {stat.description}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </MotionSection>
  )
}