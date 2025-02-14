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
              imageUrl={`/projects/ketex.png`}
              title={`Product ${i}`}
              description={`Description for product ${i}`}
              rating={4.5}
              price={99.99}
              onAddToCart={() => console.log(`Added product ${i} to cart`)}
            />
          ))}
      </div>
    </div>
  )
}

