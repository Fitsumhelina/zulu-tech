import { products } from "@/lib/data";
import { ProductCard } from "./product_card";

export default function ProductGrid() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            id={product.id} // Ensure the `id` is passed here
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
        ))}
      </div>
    </div>
  );
}