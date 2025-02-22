"use client";

import { useSearchParams } from "next/navigation"; 
import { products } from "@/lib/data";
import { ProductCard } from "./product_card";

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all"; // Get category from URL

  // Filter products based on selected category
  const filteredProducts = category === "all"
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        {category === "all" ? "All Projects" : `${category} Projects`}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, i) => (
            <ProductCard
              key={i}
              imageUrl={product.thumbnail}
              title={product.title}
              description={product.description ?? ""}
              rating={product.rating ?? 0}
              reviews={product.reviews ?? 0}
              currentPrice={product.currentPrice ?? 0}
              originalPrice={product.originalPrice ?? 0}
              techStack={Array.isArray(product.techStack) ? product.techStack : [product.techStack ?? ""]}
              category={product.category ?? ""}
            />
          ))
        ) : (
          <p className="text-center col-span-3">No products found.</p>
        )}
      </div>
    </div>
  );
}
