"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-between px-6 md:px-12 lg:px-24 relative">
      <div className="flex-1 max-w-4xl">
        <div className="overflow-hidden">
          <h1
            className={`text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black leading-none tracking-tighter transform transition-transform duration-2000 ease-out ${
              isVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="overflow-hidden">
              <span
                className={`block transform transition-transform duration-1500 delay-300 ease-out ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                DESIGN
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                className={`block transform transition-transform duration-1500 delay-500 ease-out ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                DECLARES
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                className={`block text-orange-500 transform transition-transform duration-1500 delay-700 ease-out ${
                  isVisible ? "translate-y-0" : "translate-y-full"
                }`}
              >
                UK
              </span>
            </div>
          </h1>
        </div>
      </div>

      <div className="flex-1 max-w-2xl ml-8">
        <div
          className={`transform transition-all duration-1000 delay-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a
            climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the
            tools of our industry to reimagine, rebuild and heal our world.
          </p>
        </div>
      </div>

      <div className="fixed top-8 right-8 z-50 flex flex-col gap-2">
        <Button
          variant="outline"
          className="bg-white text-black border-white hover:bg-gray-100 px-8 py-3 text-lg font-medium"
        >
          Menu
        </Button>
        <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium">Declare Now</Button>
      </div>
    </section>
  )
}
