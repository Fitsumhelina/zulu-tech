"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cn("relative overflow-hidden w-full", className)}>
      <CarouselPrevious scrollRef={scrollRef} />
      <CarouselContent scrollRef={scrollRef}>{children}</CarouselContent>
      <CarouselNext scrollRef={scrollRef} />

      {/* Hide scrollbar styles */}
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

export function CarouselContent({
  children,
  scrollRef,
}: {
  children: React.ReactNode;
  scrollRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={scrollRef}
      id="nav-container"
      className="flex gap-4 overflow-x-auto scroll-smooth px-8"
    >
      {children}
    </div>
  );
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
  return <div className="w-[300px] flex-shrink-0">{children}</div>;
}

export function CarouselPrevious({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement>;
}) {
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <Button
      size="icon"
      onClick={scrollLeft}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black hover:text-white bg-[#B9B8B8]"
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
  );
}

export function CarouselNext({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement>;
}) {
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Button
      size="icon"
      onClick={scrollRight}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-black hover:text-white bg-[#B9B8B8]"
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  );
}
