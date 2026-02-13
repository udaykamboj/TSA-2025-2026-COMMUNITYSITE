

    "use client"

    import { useState } from "react"
    import Link from "next/link"
    import { ChevronDown, ChevronRight } from "lucide-react"
    import SectionTitle from "@/components/section-title"

    // Sample data
    const benefitPrograms = [
      {

        id: 1,
        title: "Food Assistance",
        description: "Meals, groceries, and nutritional support for families and seniors"
      },
      {
        id: 2,
        title: "Housing Support",
        description: "Emergency housing, rental assistance, and permanent housing programs."
      },
      {
        id: 3,
        title: "Healthcare Services",
        description: "Free and low-cost medical, dental, and mental health services."
      },
      {
        id: 4,
        title: "Youth Programs",
        description: "Job training, mentoring, education, and recreational activities."
      }
    ]

    export default function BenefitProgramsSection() {
      const [expandedId, setExpandedId] = useState<number | null>(null)

      const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id)
      }

      return (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Benefit Programs for You" linkText="See More" linkHref="/main/services" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left info card */}
              <aside className="md:col-span-1">
                <div
                  className="p-6 h-full backdrop-blur-[12.5px] border-2 transition-all duration-300"
                      style={{
                        backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                        borderColor: '#ddd',
                        borderRadius: '14px',
                        boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.2)',
                        boxSizing: 'border-box'
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
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex items-center justify-center rounded-full px-5 py-5"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#0d28ff',
                        color: '#ffffff',
                        fontSize: '24px',
                        fontWeight: '700',
                        border: 'none'
                      }}
                    >
                      ?
                    </div>
                    <div>
                      <h4 
                        className="clash-grotesk font-bold mb-2"
                        style={{ 
                          fontSize: '20px', 
                          letterSpacing: '-0.01em',
                          lineHeight: '1.2',
                          color: '#1a1a1a'
                        }}
                      >
                        Still Have Questions?
                      </h4>
                      <p style={{ 
                        fontSize: '15px', 
                        color: '#4b5563', 
                        lineHeight: '1.4',
                        fontWeight: '500'
                      }}>
                        Still have questions? Feel free to get in touch with us today!
                      </p>
                    </div>
                  </div>

                    <div className="mt-4">
                    <Link 
                      href="/main/services"
                      className="inline-flex items-center justify-center gap-2 transition-all duration-200 rounded-full"
                      style={{ 
                          textDecoration: 'none',
                          fontSize: '16px',
                          fontWeight: '700',
                          backgroundColor: '#0d28ff',
                          color: '#ffffff',
                          padding: '12px 28px',
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
                      Ask A Question
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Right accordion list */}
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {benefitPrograms.map((program) => (
                    <div
                      key={program.id}
                      className="overflow-hidden backdrop-blur-[12.5px] border-2 transition-all duration-300"
                      style={{
                        backgroundColor: 'hsla(0, 0%, 100%, 0.749)',
                        borderColor: '#ddd',
                        borderRadius: '8px',
                        boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.2)',
                        boxSizing: 'border-box'
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
                      <button
                        onClick={() => toggleExpand(program.id)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left bg-transparent transition-colors"
                      >
                        <span 
                          className="clash-grotesk font-bold"
                          style={{ 
                            fontSize: '20px',
                            letterSpacing: '-0.01em',
                            lineHeight: '1.2',
                            color: '#000000'
                          }}
                        >
                          {program.title}
                        </span>
                        <ChevronDown 
                          className="transition-transform duration-300" 
                          style={{
                            width: '24px',
                            height: '24px',
                            transform: expandedId === program.id ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        />
                      </button>

                      {expandedId === program.id && (
                        <div className="px-6 pb-6 pt-0 bg-transparent">
                          <p 
                            className="mb-4"
                            style={{ 
                              color: '#1a1a1a',
                              fontSize: '16px',
                              lineHeight: '1.5',
                              fontWeight: '500'
                            }}
                          >
                            {program.description}
                          </p>
                          <Link 
                            href="/main/services"
                            className="inline-flex items-center justify-center gap-2 transition-all duration-200 rounded-full"
                            style={{ 
                              textDecoration: 'none',
                              fontSize: '16px',
                              fontWeight: '700',
                              backgroundColor: '#0d28ff',
                              color: '#ffffff',
                              padding: '12px 28px',
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
                            Check Eligibility
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
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
