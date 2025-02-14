"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./../../components/ui/carousel"

const projects = [
  {
    title: "Super Market e-commerce web app",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-14%20205018-SKJUZ0V7vW1y2ZRQs11cWel7hArnlb.png",
    tag: "React Development",
  },
  {
    title: "Autohub",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-14%20205018-SKJUZ0V7vW1y2ZRQs11cWel7hArnlb.png",
    tag: "React Development",
  },
  {
    title: "Hakimhub",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-14%20205018-SKJUZ0V7vW1y2ZRQs11cWel7hArnlb.png",
    tag: "React Development",
  },
]

export default function ProjectsCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Popular Projects</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border rounded-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-white/90 text-xs px-2 py-1 rounded-full">{project.tag}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{project.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}

