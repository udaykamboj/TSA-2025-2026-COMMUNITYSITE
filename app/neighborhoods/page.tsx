import React from "react"
import Link from "next/link"

export default function NeighborhoodsHubPage() {
  const neighborhoods = [
    { name: "Ballard", img: "ballard-seattle" },
    { name: "Capitol Hill", img: "caphill-seattle" },
    { name: "Central District", img: "cd-seattle" },
    { name: "Columbia City", img: "columbia-city" },
    { name: "Fremont", img: "fremont-seattle" },
    { name: "Queen Anne", img: "qa-seattle" },
    { name: "Rainier Valley", img: "rv-seattle" },
    { name: "South Lake Union", img: "slu-seattle" },
    { name: "University District", img: "udistrict" },
    { name: "Wallingford", img: "wallingford" },
    { name: "West Seattle", img: "west-seattle" },
    { name: "Beacon Hill", img: "beacon-hill" },
  ]

  return (
    <div className="min-h-screen bg-[#edeae4]">
      {/* Neighborhoods Hero */}
      <section className="bg-[#3b5c1e] text-white py-16 border-b border-[#2d4717]">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="text-green-200 font-semibold tracking-wider uppercase text-sm mb-2 block">Communities</span>
          <h1 className="font-sans text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-none mb-6">
            Seattle Neighborhoods
          </h1>
          <p className="text-xl text-green-50 max-w-2xl leading-relaxed">
            From the bustling streets of Capitol Hill to the scenic views of West Seattle, discover the unique communities that make up our city.
          </p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {neighborhoods.map((n) => (
              <div key={n.name} className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#d6d3cc] hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${n.img}/400/300`} 
                    alt={n.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">{n.name}</h3>
                </div>
                <div className="p-4">
                  <p className="text-[#4a4a45] text-sm mb-4">
                    Explore local events, community council updates, and resources specific to {n.name}.
                  </p>
                  <Link href={`/neighborhoods/${n.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#3b5c1e] font-bold text-sm hover:underline flex items-center">
                    Explore {n.name} <svg className="ml-1 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
