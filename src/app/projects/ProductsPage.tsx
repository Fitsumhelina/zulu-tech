"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data";
import { ProductCard } from "./product_card";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all"; // Get category from URL

  // Filter products based on category
  const filteredProducts = category === "all"
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">
        {category === "all" ? "All Projects" : `${category} Projects`}
      </h1>

      {/* Display Filtered Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.thumbnail}
              title={product.title}
              description={product.description}
              rating={product.rating}
              reviews={product.reviews}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              techStack={product.techStack}
              category={product.category}
            />
          ))
        ) : (
          <p className="text-center col-span-3">No products found.</p>
        )}
      </div>
    </div>
  );
}
