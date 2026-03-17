import React from "react"
import Link from "next/link"

export default function NewsHubPage() {
  const news = [
    {
      title: "Seattle Approves $45M for Affordable Housing Construction in 5 Neighborhoods",
      category: "Housing",
      thumb: "affordable-housing",
      date: "March 15, 2026",
      excerpt: "The City Council unanimously voted to fund new multi-family housing projects in Aurora Licton Springs, Rainer Beach, and three others."
    },
    {
      title: "New Light Rail Extension: What Ballard Residents Need to Know",
      category: "Transit",
      thumb: "light-rail",
      date: "March 12, 2026",
      excerpt: "As construction begins on the new Sound Transit extension, here are the expected impacts on local traffic, parking, and business access."
    },
    {
      title: "Community Fridges Network Expands to 12 New Locations Citywide",
      category: "Food Access",
      thumb: "community-fridge",
      date: "March 10, 2026",
      excerpt: "Local volunteers and food rescue programs launch a dozen new 24/7 free food access points across the city to combat food insecurity."
    },
    {
      title: "Parks Department Announces Summer 2026 Program Registration Dates",
      category: "Parks & Rec",
      thumb: "parks-dept",
      date: "March 8, 2026",
      excerpt: "Get ready for summer reading programs, outdoor movie nights, and youth sports leagues. Registration for all summer activities opens April 1st."
    },
    {
      title: "City Extends Operating Hours for 4 Major Public Libraries",
      category: "Public Services",
      thumb: "library",
      date: "March 5, 2026",
      excerpt: "The downtown central library and three regional branches will now be open until 9 PM on weeknights to better serve community needs."
    },
    {
      title: "New Small Business Grant Program Opens for Applications",
      category: "Economic Dev",
      thumb: "small-business",
      date: "March 1, 2026",
      excerpt: "Local storefronts recovering from transit construction impacts or looking to upgrade facade security can now apply for up to $10,000 in microgrants."
    }
  ]

  return (
    <div className="min-h-screen bg-[#edeae4]">
      {/* News Hero */}
      <section className="bg-white py-16 border-b border-[#d6d3cc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="text-[#3b5c1e] font-semibold tracking-wider uppercase text-sm mb-2 block">Community Updates</span>
          <h1 className="font-sans text-5xl md:text-6xl font-extrabold text-[#1c1c1a] tracking-tight uppercase leading-none mb-6">
            Latest Seattle News
          </h1>
          <p className="text-xl text-[#4a4a45] max-w-2xl leading-relaxed">
            Stay informed on city council decisions, neighborhood updates, event announcements, and everything happening in Seattle.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <article key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#d6d3cc] flex flex-col h-full">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={`https://picsum.photos/seed/${item.thumb}/450/300`} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3b5c1e] bg-green-50 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#4a4a45] font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1c1c1a] mb-3 leading-tight hover:text-[#3b5c1e] cursor-pointer transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a45] text-sm leading-relaxed mb-6 flex-grow">
                    {item.excerpt}
                  </p>
                  <Link href="#" className="font-bold text-[#3b5c1e] flex items-center hover:underline text-sm uppercase tracking-wide">
                    Read Full Story <svg className="ml-1 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-white border-2 border-[#1c1c1a] text-[#1c1c1a] font-bold uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#1c1c1a] hover:text-white transition-colors">
              Load Older Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
