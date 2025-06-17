"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function ToolkitSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                The Design Declares Newsletter and Toolkit
              </h2>
            </div>
          </div>

          <div className="relative">
            {/* Large TOOLKIT text overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transform transition-all duration-1500 delay-300 ease-out ${
                isVisible ? "scale-100 opacity-20" : "scale-110 opacity-0"
              }`}
            >
              <span className="text-[8rem] md:text-[12rem] font-black text-white whitespace-nowrap">TOOLKIT</span>
            </div>

            <div
              className={`relative z-10 bg-white text-black p-8 max-w-md ml-auto transform transition-all duration-1000 delay-500 ease-out ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-black">D!</span>
                  <span className="text-lg font-bold">DESIGN DECLARES</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Design Declares Toolkit</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Welcome to the Design Declares Toolkit. Your space to work towards positive change to reduce the
                  climate impact through design accountability and advocacy.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold mb-2">Resources to take action</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• A breakdown of each of the 8 Acts of the Declaration</li>
                    <li>• Digital Toolkit</li>
                    <li>• Material Toolkit</li>
                    <li>• Service Design</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Community Resources</h4>
                  <p className="text-gray-600">By the community, for the heart of the community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl">
          <div
            className={`transform transition-all duration-1000 delay-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you
              will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our
              community. It is filled with the latest resources and methods to help you on your journey to
              climate-positive design.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to
              declare emergency quite yet, you can still access the Toolkit - just register below.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Email:*</label>
                <Input className="bg-transparent border-gray-600 text-white" type="email" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="newsletter-signup" className="mt-1" />
                <label htmlFor="newsletter-signup" className="text-sm leading-relaxed">
                  I would like to be added to the Design Declares! newsletter and receive further updates.
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="underline hover:text-orange-500 transition-colors">
                  View our Privacy Policy
                </a>
              </div>

              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
