"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function DeclarationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedType, setSelectedType] = useState("")
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

  const declarationTypes = ["As a business", "As an individual", "As a public institution", "As a team or department"]

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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Declare Emergency Now</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                Design Declares is open to individuals and institutions working in industrial, digital, graphic,
                communication and service design. To declare here, you must be a company with an office in the UK
                employing at least one full-time designer. We also welcome declarations from practising freelance
                designers who are registered as self-employed in the UK, and global supporters from other countries. All
                declarations will be named and published on this site.
              </p>
            </div>
          </div>

          <div>
            <div
              className={`border border-gray-600 p-8 transform transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-8">I am Declaring Emergency</h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {declarationTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`border border-gray-600 p-4 text-left transition-colors duration-300 ${
                        selectedType === type ? "bg-white text-black" : "hover:border-gray-400"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Website:*</label>
                  <Input className="bg-transparent border-gray-600 text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Country:*</label>
                  <Select>
                    <SelectTrigger className="bg-transparent border-gray-600 text-white">
                      <SelectValue placeholder="United Kingdom" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Discipline:*</label>
                  <Select>
                    <SelectTrigger className="bg-transparent border-gray-600 text-white">
                      <SelectValue placeholder="Select discipline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="graphic">Graphic Design</SelectItem>
                      <SelectItem value="digital">Digital Design</SelectItem>
                      <SelectItem value="industrial">Industrial Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email:*</label>
                  <Input className="bg-transparent border-gray-600 text-white" type="email" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Why are you declaring? In a sentence or two, tell us why you're joining Design Declares.
                  </label>
                  <Textarea
                    className="bg-transparent border-gray-600 text-white min-h-[120px]"
                    placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="consent" className="mt-1" />
                    <label htmlFor="consent" className="text-sm leading-relaxed">
                      I consent for my data to be used for the purpose of the Declaration, and for my name and reason
                      for joining to be used in the promotion of the Declaration on this site and across our social
                      channels.
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="newsletter" className="mt-1" />
                    <label htmlFor="newsletter" className="text-sm leading-relaxed">
                      I would like to be added to the Design Declares! newsletter and receive further updates.
                    </label>
                  </div>
                </div>

                <div className="text-sm">
                  <a href="#" className="underline hover:text-orange-500 transition-colors">
                    View our Privacy Policy
                  </a>
                </div>

                <Button className="w-full bg-white text-black hover:bg-gray-100 py-4 text-lg font-medium rounded-full">
                  Declare Emergency Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
