"use client";
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct

const navItems = [
    "SaaS Development",
    "Webapp Development",
    "Mobile App Development",
    "SaaS Development",
    "Webapp Development",
    "Mobile App Development",
    "SaaS Development",
    "Webapp Development",
    "Mobile App Development",
    "SaaS Development",
    "Webapp Development",
];

function Navigation() {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (navContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      navContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  return (
    <>
      {/* Navigation */}
      <div className="relative max-w-7xl mx-auto px-4 py-4  bg-white-500 overflow-hidden">
        <div className="flex items-center relative">
          <Button
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 text-black hover:text-white bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div ref={navContainerRef} id="nav-container" className="flex gap-6 px-8 overflow-x-auto scrollbar-hide justify-center">
            {navItems.map((item, index) => (
              <div key={index} className="whitespace-nowrap text-sm text-black px-4 py-2 m-4">
                {item}
              </div>
            ))}
          </div>

          <Button
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 text-black hover:text-white bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <style jsx>{`
        #nav-container::-webkit-scrollbar {
          display: none;
        }
        #nav-container {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </>
  );
}

export default Navigation;
