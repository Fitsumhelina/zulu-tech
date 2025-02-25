"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/app/context/CartContext"; // Import useCart

interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  currentPrice: number;
  originalPrice: number;
  techStack: string[];
  category: string;
}

export function ProductCard({
  id,
  imageUrl = "/projects/ketex.png",
  title = "AI-Powered CO2 Footprint Analysis",
  description = "Need a responsive, SEO-optimized, and fast-loading eCommerce website using ReactJS and Tailwind? Look no further! Perfect for grocery stores, makeup shops.",
  rating = 4,
  reviews = 30,
  currentPrice = 300,
  originalPrice = 400,
  techStack = ["React", "NextJS", "Tailwind CSS"],
  category = "Web Development",
}: ProductCardProps) {
  const router = useRouter(); // Initialize useRouter
  const { addToCart } = useCart(); // Initialize useCart

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the Link from navigating
    // Add the product to the cart
    addToCart({
      id,
      title,
      price: currentPrice,
      discount: originalPrice - currentPrice,
      thumbnail: imageUrl,
    });

    // Navigate to the cart page
    router.push("/cart");
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-12 cursor-pointer">
      <div>

    <Link href={`/projects/${id}`} passHref> {/* Wrap the body in a Link */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg mt-10">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <p className="mb-2">{category}</p>
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
              </div>
          </Link>
            
          <div className="flex items-center justify-between mb-4 mr-2 ml-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">${currentPrice}</span>
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            </div>
            <Button onClick={handleBuyNow}>Buy Now</Button> {/* Add onClick handler */}
          </div>
          <div className="flex items-center gap-2 mb-3">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="outline">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
  );
}