"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { name: "SaaS Development", link: "/saas-development" },
  { name: "Webapp Development", link: "/webapp-development" },
  { name: "Mobile App Development", link: "/mobile-app-development" },
  { name: "SaaS Development", link: "/saas-development" },
  { name: "Webapp Development", link: "/webapp-development" },
  { name: "Mobile App Development", link: "/mobile-app-development" },
  { name: "SaaS Development", link: "/saas-development" },
  { name: "Webapp Development", link: "/webapp-development" },
  { name: "Mobile App Development", link: "/mobile-app-development" },
  { name: "SaaS Development", link: "/saas-development" },
  { name: "Webapp Development", link: "/webapp-development" },
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

  const handleClick = (link: string) => {
  router.push(link);
  };

  return (
  <>
    {/* Navigation */}
    <div className="relative max-w-7xl mx-auto px-4 py-4  bg-white-500 overflow-hidden mt-10">
    <div className="flex items-center relative">
      <Button
      size="icon"
      onClick={() => scroll("left")}
      className="absolute left-0 z-10 text-black hover:text-white bg-[#B9B8B8]"
      >
      <ChevronLeft className="h-4 w-4" />
      </Button>
      <div ref={navContainerRef} id="nav-container" className="flex gap-6 px-8 overflow-x-auto scrollbar-hide justify-center">
      {navItems.map((item, index) => (
        <div 
        key={index} 
        className="whitespace-nowrap text-sm text-black dark:text-white px-4 py-2 m-4 hover:cursor-pointer hover hover:underline"
        onClick={() => handleClick(item.link)}
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
