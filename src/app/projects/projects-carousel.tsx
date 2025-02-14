"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { useRef } from "react";

const projects = [
  {
    title: "Super Market e-commerce web app",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg",
    tag: "React Development",
  },
  {
    title: "Autohub",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg",
    tag: "React Development",
  },
  {
    title: "Hakimhub",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg",
    tag: "React Development",
  },
  {
    title: "Hakimhub",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg",
    tag: "React Development",
  },
  {
    title: "Hakimhub",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg",
    tag: "React Development",
  },
  {
    title: "Hakimhub",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg",
    tag: "React Development",
  },
];

export default function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-3xl ml-10 font-bold mb-3">Popular Projects</h3>
      <div className="relative">
        <Button
          size="icon"
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black hover:text-white bg-[#B9B8B8]"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div
          ref={scrollRef}
          id="nav-container"
          className="flex gap-4 overflow-x-auto scroll-smooth px-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="w-[300px] flex-shrink-0">
              <div className="border rounded-lg overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-white/90 text-xs px-2 py-1 rounded-full">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          size="icon"
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-black hover:text-white bg-[#B9B8B8]"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
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
    </div>
  );
}
