"use client"

import { useEffect, useRef, useState } from "react"

export function ActsSection() {
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

  const acts = [
    {
      number: "1",
      title: "Sound the Alarm",
      description:
        "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
    },
    {
      number: "2",
      title: "Start the Journey",
      description:
        "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
    },
    {
      number: "3",
      title: "Bring Clients with Us",
      description:
        "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
    },
    {
      number: "4",
      title: "Measure What We Make",
      description:
        "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
    },
    {
      number: "5",
      title: "Redefine 'Good'",
      description:
        "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
    },
    {
      number: "6",
      title: "Educate, Accelerate",
      description:
        "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
    },
    {
      number: "7",
      title: "Design for Justice",
      description:
        "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
    },
    {
      number: "8",
      title: "Amplify Voices for Change",
      description:
        "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">8 Acts of Emergency</h2>
            </div>
          </div>

          <div>
            <div
              className={`transform transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-lg md:text-xl leading-relaxed mb-12">
                What does it take to Declare? It's accepting we are in an emergency of climate and nature, and a
                commitment to do something about it. Here are eight places to start:
              </p>
            </div>

            <div className="space-y-0">
              {acts.map((act, index) => (
                <div
                  key={act.number}
                  className={`border border-gray-600 transform transition-all duration-1000 ease-out ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="grid grid-cols-12 min-h-[120px]">
                    <div className="col-span-2 bg-white text-black flex items-center justify-center">
                      <span className="text-4xl md:text-5xl font-bold">{act.number}</span>
                    </div>
                    <div className="col-span-10 p-6 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">{act.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{act.description}</p>
                    </div>
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
