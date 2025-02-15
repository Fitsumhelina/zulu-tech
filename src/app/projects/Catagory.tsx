"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const navItems = [
  // { name: "All", link: "/all" },
  { name: "SaaS Development", link: "/saas-development" },
  { name: "Webapp Development", link: "/webapp-development" },
  { name: "Mobile App Development", link: "/mobile-app-development" },
  { name: "Software Development", link: "/software-development" },
  { name: "SaaS Development", link: "/saas-development" },
  { name: "Webapp Development", link: "/webapp-development" },
  { name: "Mobile App Development", link: "/mobile-app-development" },
  { name: "Software Development", link: "/software-development" },
];

function Category() {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scroll = (direction: "left" | "right") => {
    if (navContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      navContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-8xl mx-auto px-4 py-4 bg-white overflow-hidden mt-10">
      <div className="flex items-center relative">
        <Button size="icon" onClick={() => scroll("left")} className="absolute left-0 z-10 bg-gray-300">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div ref={navContainerRef} className="flex gap-6 px-8 overflow-x-auto scrollbar-hide justify-center">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="whitespace-nowrap text-sm px-4 py-2 m-4 hover:cursor-pointer hover:underline"
              onClick={() => router.push(item.link)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <Button size="icon" onClick={() => scroll("right")} className="absolute right-0 z-10 bg-gray-300">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Category;
