"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MenuProps {
  isOpen: boolean
  onToggle: () => void
}

export function Menu({ isOpen, onToggle }: MenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <Button
        onClick={onToggle}
        variant="ghost"
        size="icon"
        className="absolute top-8 right-8 text-white hover:text-orange-500"
      >
        <X className="w-8 h-8" />
      </Button>

      <div className="text-center">
        <nav className="space-y-8">
          <a
            href="#breakdown"
            className="block text-4xl md:text-6xl font-bold hover:text-orange-500 transition-colors"
            onClick={onToggle}
          >
            This is Breakdown
          </a>
          <a
            href="#donate"
            className="block text-4xl md:text-6xl font-bold hover:text-orange-500 transition-colors"
            onClick={onToggle}
          >
            Donate
          </a>
          <a
            href="#acts"
            className="block text-4xl md:text-6xl font-bold hover:text-orange-500 transition-colors"
            onClick={onToggle}
          >
            8 Acts of Emergency
          </a>
          <a
            href="#declare"
            className="block text-4xl md:text-6xl font-bold hover:text-orange-500 transition-colors"
            onClick={onToggle}
          >
            Declare Now
          </a>
          <a
            href="#latest"
            className="block text-4xl md:text-6xl font-bold hover:text-orange-500 transition-colors"
            onClick={onToggle}
          >
            Latest
          </a>
          <a
            href="#toolkit"
            className="block text-4xl md:text-6xl font-bold hover:text-orange-500 transition-colors"
            onClick={onToggle}
          >
            Toolkit
          </a>
        </nav>
      </div>
    </div>
  )
}
