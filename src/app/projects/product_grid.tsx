import { products } from "@/lib/data"
import { ProductCard } from "./product_card"

export default function ProductGrid() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <ProductCard
              key={i}
              imageUrl={products[i % products.length].imageUrl}
              title={products[i % products.length].title}
              description={products[i % products.length].description}
              rating={products[i % products.length].rating}
              price={products[i % products.length].price}
              onAddToCart={() => console.log(`Added product ${i} to cart`)}
            />
          ))}
      </div>
    </div>
  )
}

