"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { useRef } from "react";
import { products } from "@/lib/data";

export default function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-8xl mx-auto px-4 py-4 bg-white-500 overflow-hidden mt-10 mr-8 ml-8">
      <div className="relative">
        <Button
          size="icon"
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 text-black hover:text-white bg-[#B9B8B8]"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div
          ref={scrollRef}
          id="nav-container"
          className="flex gap-6 px-8 overflow-x-auto scrollbar-hide justify-center"
        >
          {products
            .filter((product) => product.rating > 4)
            .map((product, index) => (
              <div key={index} className="max-w-[250px] flex-shrink-0">
                <div className="border rounded-lg overflow-hidden">
                  <div className="relative aspect-[16/9] whitespace-nowrap text-sm text-black dark:text-white px-4 py-2 m-4">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-white/90 text-xs px-2 py-1 rounded-full">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.title}</h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Button
          size="icon"
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 text-black hover:text-white bg-[#B9B8B8]"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <style jsx>{`
        #nav-container::-webkit-scrollbar {
          display: none;
        }
        #nav-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
