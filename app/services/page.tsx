import React from "react"
import Link from "next/link"

export default function ServicesHubPage() {
  return (
    <div className="min-h-screen bg-[#edeae4]">
      {/* Services Hero */}
      <section className="bg-white py-16 border-b border-[#d6d3cc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="text-[#3b5c1e] font-semibold tracking-wider uppercase text-sm mb-2 block">City Resources</span>
          <h1 className="font-sans text-5xl md:text-6xl font-extrabold text-[#1c1c1a] tracking-tight uppercase leading-none mb-6">
            Services &amp; Support Hub
          </h1>
          <p className="text-xl text-[#4a4a45] max-w-2xl leading-relaxed">
            Find permits, request assistance, report issues, and explore benefit programs designed to support everyone who calls Seattle home.
          </p>
        </div>
      </section>

      {/* City Services Grid */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-[#1c1c1a] uppercase tracking-tight mb-8">Popular City Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🅿️', name: 'Parking or Camera Tickets', href: '#' },
              { icon: '🔇', name: 'Noise Complaint', href: '#' },
              { icon: '♻️', name: 'Get Rid of Waste', href: '#' },
              { icon: '🚗', name: 'Illegal Parking Complaint', href: '#' },
              { icon: '🏠', name: 'Apartment Complaint', href: '#' },
              { icon: '📄', name: 'Birth Certificates', href: '#' },
              { icon: '📈', name: 'Rent Increase Help', href: '#' },
              { icon: '🍎', name: 'SNAP Benefits', href: '#' },
            ].map((svc) => (
              <Link href={svc.href} key={svc.name} className="bg-white p-4 rounded-lg flex items-center shadow-sm border border-[#d6d3cc] hover:border-[#3b5c1e] hover:-translate-y-1 transition-all">
                <div className="text-2xl mr-4">{svc.icon}</div>
                <div className="font-bold text-[#1c1c1a]">{svc.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefit Programs Grid */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-[#1c1c1a] uppercase tracking-tight mb-8">Benefit Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🍽️', title: 'Food Assistance', desc: 'SNAP benefits, food banks, and emergency food pantries in your zip code.', href: '#' },
              { icon: '🏠', title: 'Housing Support', desc: 'Rental assistance, eviction prevention, and affordable housing applications.', href: '#' },
              { icon: '🩺', title: 'Healthcare Services', desc: 'Low-cost clinics, Medicaid enrollment help, and mental health resources.', href: '#' },
              { icon: '👧', title: 'Youth Programs', desc: 'After-school programs, summer camps, tutoring, and mentorship opportunities.', href: '#' },
            ].map((prog) => (
              <Link href={prog.href} key={prog.title} className="bg-[#edeae4] p-6 rounded-lg text-center border border-[#d6d3cc] shadow-sm hover:border-[#3b5c1e] hover:shadow-md transition-all cursor-pointer block">
                <div className="text-4xl mb-4">{prog.icon}</div>
                <h3 className="font-bold text-xl text-[#1c1c1a] mb-2">{prog.title}</h3>
                <p className="text-[#4a4a45] text-sm leading-relaxed">{prog.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ask a Question / Help Section */}
      <section id="help" className="py-16 bg-[#3b5c1e] text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-4 text-white">Need More Help?</h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
            Our community navigators can help you find the right resource, program, or service — in your preferred language.
          </p>
          <button className="bg-white text-[#3b5c1e] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
            Contact Support Team
          </button>
        </div>
      </section>
    </div>
  )
}
