"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
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
    <footer ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Design Declares</h2>

            <div className="space-y-4 mb-8">
              <a href="#" className="block hover:text-orange-500 transition-colors">
                Contact
              </a>
              <div className="flex gap-4">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <a href="#" className="block hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Sign up to the D! Newsletter</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email:*</label>
                <Input className="bg-transparent border-gray-600 text-white" type="email" />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="footer-newsletter" className="mt-1" />
                <label htmlFor="footer-newsletter" className="text-sm leading-relaxed">
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

        <div
          className={`mt-16 pt-8 border-t border-gray-800 text-sm text-gray-400 transform transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4">
            This website has been built following low-carbon principles of web development and hosted using serverless
            computing, by only allocating energy when needed and on demand. Learn more about our carbon footprint.
          </p>
          <p>Empowered by Driftime®</p>
        </div>
      </div>
    </footer>
  )
}
