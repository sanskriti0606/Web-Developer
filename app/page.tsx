"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { BreakdownSection } from "@/components/breakdown-section"
import { DonationSection } from "@/components/donation-section"
import { ActsSection } from "@/components/acts-section"
import { DeclarationSection } from "@/components/declaration-section"
import { LatestSection } from "@/components/latest-section"
import { ToolkitSection } from "@/components/toolkit-section"
import { SignatoriesSection } from "@/components/signatories-section"
import { Footer } from "@/components/footer"
import { Menu } from "@/components/menu"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Menu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />

      <main className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
        <BreakdownSection />
        <DonationSection />
        <ActsSection />
        <DeclarationSection />
        <LatestSection />
        <ToolkitSection />
        <SignatoriesSection />
        <Footer />
      </main>
    </div>
  )
}
