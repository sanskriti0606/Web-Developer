"use client"

import { useEffect, useRef, useState } from "react"

export function SignatoriesSection() {
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

  // Sample signatories data
  const signatories = [
    "21–87",
    "216 Signs",
    "31% Wool",
    "400",
    "A–Side.",
    "Aalia Ahamed",
    "Abbie Williams",
    "abc",
    "ACRE – A Creative Endeavour Ltd",
    "Active Matter",
    "ACX",
    "Adele Kelly",
    "AdesignStorie",
    "Advocate Design Agency",
    "Aetha Design",
    "Aileron Design Ltd",
    "Alan Pitchforth",
    "Alex Kimber Design",
    "Alexander Miller",
    "Alexandra Lunn Studio",
    "Alexie Sommer",
    "Alexis Bardini",
    "Ali Adair",
    "Andrew Carr",
    "ANdy Parker",
    "Andy Thornton",
    "Anja Klüver",
    "Annabelle Vuille",
    "Apfel",
    "Applied Works",
    "Archetype Accessories",
    "Arif Yusop",
    "Arrival",
    "Avery & Brown",
    "BA (Hons) Design for Sustainable Futures at Arts University Bournemouth",
    "BA Graphic Design at Kingston School of Art",
    "Badfish Labs",
    "Baines Design LTD",
    "Barbara Chandler",
    "Barry Bloye",
    "Batch.Works",
    "Baxter & Bailey",
    "Be The Future",
    "Beco",
    "Beehive Green",
    "Ben Clarke",
    "Ben Jessop",
    "Bencium Limited",
    "Benedict Povey",
    "Beta Design Office",
    "BIB Design",
    "big fish",
    "Big Motive",
    "Bill Searle",
    "Biomimicry Innovation Lab",
    "Bliss",
    "Blunt Crayon",
    "Bold Studio",
    "Boyle & Perks",
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-12">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4">#513</h2>
            <p className="text-xl md:text-2xl">
              Signatories and counting in <span className="bg-orange-500 text-black px-2 py-1 rounded">D! UK</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-2 text-sm">
            {signatories.map((signatory, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ease-out hover:text-orange-500 cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${Math.min(index * 50, 2000)}ms` }}
              >
                {signatory}
              </div>
            ))}
          </div>

          <div
            className={`mt-16 transform transition-all duration-1000 delay-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">#659 Global Supporters</h3>
            <p className="text-lg text-gray-400">
              Supporters from Argentina, Australia, Austria, Bangladesh, Belgium, Brazil, Bulgaria, Canada, China,
              Colombia, Croatia, Czechia, Denmark, Finland, France, Germany, Gibraltar, Guatemala, India, Indonesia,
              Ireland, Isle of Man, Italy, Japan, Latvia, Lebanon, Lithuania, Luxembourg, Malta, Mexico, Morocco,
              Netherlands, New Zealand, Nicaragua, Nigeria, Norway, Pakistan, Philippines, Poland, Portugal, Romania,
              Singapore, Slovenia, South Africa, Spain, Sweden, Switzerland, Thailand, Turkey, United States, Uruguay,
              Vietnam and more...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
