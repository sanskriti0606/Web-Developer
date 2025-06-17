"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function BreakdownSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const sections = [
    { id: "role", title: "The Role of Design" },
    { id: "change", title: "Time for Change" },
    { id: "urgency", title: "Act with Urgency" },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">This is Breakdown</h2>
            </div>
          </div>

          <div className="space-y-8">
            <div
              className={`transform transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12">
                The science is settled. We are in an emergency of climate and nature. The world is past breaking point;
                the breakdown has begun...
              </h3>
            </div>

            <div className="space-y-4">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`border-t border-gray-600 transform transition-all duration-1000 ease-out ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between py-6 text-left hover:text-orange-500 transition-colors duration-300"
                  >
                    <span className="text-xl md:text-2xl font-medium">{section.title}</span>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        expandedSections.includes(section.id) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      expandedSections.includes(section.id) ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Content for {section.title} would go here. This section would contain detailed information about
                      the specific topic.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
