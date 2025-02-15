"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { name: "All", value: "all" },
  { name: "SaaS Development", value: "saas-development" },
  { name: "Webapp Development", value: "webapp-development" },
  { name: "Mobile App Development", value: "mobile-app-development" },
  { name: "Software Development", value: "software-development" },
  { name: "All", value: "all" },
  { name: "SaaS Development", value: "saas-development" },
  { name: "Webapp Development", value: "webapp-development" },
  { name: "Mobile App Development", value: "mobile-app-development" },
  { name: "Software Development", value: "software-development" },
];

function Category() {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  const scroll = (direction: 'left' | 'right') => {
    if (navContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      navContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNavigation = (category: string) => {
    router.push(`/product_page?category=${category}`);
  };

  return (
    <>
      {/* Navigation */}
      <div className="relative max-w-8xl mx-auto px-4 py-4  bg-white-500 overflow-hidden mt-10 mr-8 ml-8">
        <div className="flex items-center relative">
          <Button
            size="icon"
            onClick={() => scroll("left")}
            className="absolute mr-8 left-0 z-10 text-black hover:text-white bg-[#B9B8B8]"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div ref={navContainerRef} id="nav-container" className="flex gap-6 px-8 overflow-x-auto scrollbar-hide justify-center">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="whitespace-nowrap text-sm text-black dark:text-white px-4 py-2 m-4 hover:cursor-pointer  hover:underline"
                onClick={() => handleNavigation(item.value)}
              >
                {item.name}
              </div>
            ))}
          </div>

          <Button
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 text-black hover:text-white bg-[#B9B8B8]"
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

export default Category;
