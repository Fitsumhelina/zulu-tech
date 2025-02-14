"use client"

import { useState ,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [scrollPosition, setScrollPosition] = useState(0)

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
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])


  return (
    <div className="relative h-200 bg-[#05132e] dark:bg-white text-white overflow-hidden rounded-xl w-70 m-8">

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl dark:text-black md:text-5xl font-bold leading-tight mb-6">
            Discover, Compare, and Launch Your Next Big Idea!
          </h1>
          <p className="text-gray-400 mb-8 text-lg dark:text-black">
            Explore a curated selection of web apps, mobile apps, and software projects tailored to meet your needs.
            Whether you're looking for inspiration or ready-to-go solutions, we've got you covered.
          </p>
          {/* Searchspace */}
          <div className="relative inline-block">
            <Input
              type="text"
              placeholder="Search..."
              className="w-72 p-5 rounded-full text-black dark:text-white bg-white dark:bg-[#707071] border-none shadow-md focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <Button
              type="submit"
              className="absolute top-0 right-0 bg-[#2D2B2A] text-white dark:text-black dark:bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-105 m-0.5"
            >
              Explore
            </Button>
          </div>

        </div>
      </div>

      {/* Floating Images */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] ">
        <div className="relative w-full h-full">
          <img
            src={images[currentImageIndex]}
            alt="Website and mobile app mockups"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-100 h-80 object-contain"
          />
        </div>
      </div>
    
    </div>
  )
}

