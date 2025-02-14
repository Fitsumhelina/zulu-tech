"use client"

import { useState ,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Component() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const navItems = [
    "SaaS Development",
    "Webapp Development",
    "Mobile App Development",
    "SaaS Development",
    "Webapp Development",
    "Mobile App Development",
  ]
  const images = [
    "https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg",
    "https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg"
  ]

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("nav-container")
    if (container) {
      const scrollAmount = 200
      const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setScrollPosition(newPosition)
    }
  }
 
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])


  return (
    <div className="relative min-h-[400px] bg-[#0a0f1c] text-white overflow-hidden min-w-[30]">
      {/* Navigation */}
      <div className="relative max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 text-white hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div id="nav-container" className="flex overflow-x-hidden scroll-smooth gap-6 px-8">
            {navItems.map((item, index) => (
              <div key={index} className="whitespace-nowrap text-sm text-gray-400">
                {item}
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 text-white hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Discover, Compare, and Launch Your Next Big Idea!
          </h1>
          <p className="text-gray-400 mb-8 text-lg">
            Explore a curated selection of web apps, mobile apps, and software projects tailored to meet your needs.
            Whether you're looking for inspiration or ready-to-go solutions, we've got you covered.
          </p>
          <div className="flex gap-2 max-w-xl">
            <Input
              placeholder="Search here ..."
              className="bg-white/10 border-0 focus-visible:ring-1 focus-visible:ring-white/20"
            />
            <Button className="bg-white text-[#0a0f1c] hover:bg-white/90">Explore</Button>
          </div>
        </div>
      </div>

      {/* Floating Images */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px]">
        <div className="relative w-full h-full">
          <img
            src={images[currentImageIndex]}
            alt="Website and mobile app mockups"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-auto object-contain"
          />
        </div>
      </div>
    
    </div>
  )
}

