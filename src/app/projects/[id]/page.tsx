"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/data";
import ProductDetails from "@/components/ProductDetails";
import ProjectsCarousel from "@/components/projects-carousel";

export default function ProductDetailPage() {
  const params = useParams(); // Get the dynamic route parameters
  const { id } = params; // Destructure the `id` from params

  // Debugging: Log the ID from the URL
  console.log("ID from URL:", id);

  // Find the product by ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetails
        id={product.id}
        title={product.title}
        description={product.description}
        rating={product.rating}
        reviews={product.reviews}
        currentPrice={product.currentPrice}
        originalPrice={product.originalPrice}
        techStack={product.techStack}
        category={product.category}
        difficulty={product.difficulty}
        thumbnail={product.thumbnail}
      />
    </div>
  );
}