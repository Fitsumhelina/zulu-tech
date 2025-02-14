import Image from "next/image"
import { Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  imageUrl: string
  title: string
  description: string
  rating: number
  reviews: number
  currentPrice: number
  originalPrice: number
}

export function ProductCard({
  imageUrl = "/projects/ketex.png",
  title = "AI-Powered CO2 Footprint Analysis",
  description = "Need a responsive, SEO-optimized, and fast-loading eCommerce website using ReactJS and Tailwind? Look no further! Perfect for grocery stores, makeup shops.",
  rating = 4,
  reviews = 30,
  currentPrice = 300,
  originalPrice = 400,
}: ProductCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <Badge variant="secondary" className="mb-2">
          Webapp Develop...
        </Badge>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex items-center gap-1 mb-3">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
              />
            ))}
          <span className="text-sm text-muted-foreground ml-1">{reviews}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">${currentPrice}</span>
            <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
          </div>
          <Button>Buy Now</Button>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">NextJS</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
        </div>
      </div>
    </div>
  )
}

interface Product {
  id: number
  imageUrl: string
  title: string
  description: string
  rating: number
  reviews: number
  currentPrice: number
  originalPrice: number
}

const products: Product[] = [
  {
    id: 1,
    imageUrl: "/projects/ketex.png",
    title: "AI-Powered CO2 Footprint Analysis",
    description: "Need a responsive, SEO-optimized, and fast-loading eCommerce website using ReactJS and Tailwind? Look no further! Perfect for grocery stores, makeup shops.",
    rating: 4,
    reviews: 30,
    currentPrice: 300,
    originalPrice: 400,
  },
  {
    id: 2,
    imageUrl: "/projects/another.png",
    title: "E-Commerce Platform",
    description: "A robust e-commerce platform built with Next.js and Tailwind CSS.",
    rating: 5,
    reviews: 50,
    currentPrice: 500,
    originalPrice: 600,
  },
  // Add more products as needed
]

export function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          description={product.description}
          rating={product.rating}
          reviews={product.reviews}
          currentPrice={product.currentPrice}
          originalPrice={product.originalPrice}
        />
      ))}
    </div>
  )
}