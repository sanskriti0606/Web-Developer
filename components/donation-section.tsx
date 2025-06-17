"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function DonationSection() {
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Donate to D!</h2>
            </div>
          </div>

          <div>
            <div
              className={`transform transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and
                our passionate community working towards change in the creative industry. Your support can go a long
                way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe
                in the work we do, please consider a small donation to help us on our journey for a more equitable and
                just planet.
              </p>

              <div
                className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full">
                  Donate £10
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full">
                  Donate £20
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full">
                  Donate £50
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
