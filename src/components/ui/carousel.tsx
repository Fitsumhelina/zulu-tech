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
  return (
    <div className={cn("relative overflow-hidden w-full", className)}>
      {children}
    </div>
  );
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-4 overflow-x-auto scroll-smooth px-8 scrollbar-hide">{children}</div>;
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[300px] flex-shrink-0">
      {children}
    </div>
  );
}

export function CarouselPrevious({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement> }) {
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <Button
      size="icon"
      onClick={scrollLeft}
      className="absolute left-0 z-10 bg-white text-black shadow-md"
    >
      <ChevronLeft className="h-5 w-5" />
    </Button>
  );
}

export function CarouselNext({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement> }) {
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Button
      size="icon"
      onClick={scrollRight}
      className="absolute right-0 z-10 bg-white text-black shadow-md"
    >
      <ChevronRight className="h-5 w-5" />
    </Button>
  );
}
