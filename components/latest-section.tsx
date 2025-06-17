"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function LatestSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const articles = [
    {
      category: "Events",
      location: "D! UK",
      date: "24.04.2025, 03 PM:30",
      title: "SD4P Collective: How can Service Design drive meaningful sustainability impact",
      subtitle: "Recap: SD4P Collective working session – 28th March 2025",
      link: "Read story",
    },
    {
      category: "Events",
      location: "D! UK",
      date: "06.12.2024, 02 PM:30",
      title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
      subtitle: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
      link: "Read story",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Latest</h2>
            </div>
          </div>

          <div className="space-y-12">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">{article.category}</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">{article.location}</span>
                  <span className="text-gray-400 text-sm">{article.date}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{article.title}</h3>

                <div className="flex items-start justify-between">
                  <p className="text-gray-300 text-lg leading-relaxed flex-1 mr-8">{article.subtitle}</p>
                  <a
                    href="#"
                    className="text-white underline hover:text-orange-500 transition-colors whitespace-nowrap"
                  >
                    {article.link}
                  </a>
                </div>
              </div>
            ))}

            <div
              className={`transform transition-all duration-1000 delay-700 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full">
                See all the latest
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
