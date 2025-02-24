import { useRouter } from "next/router";
import { products } from "@/lib/data";
import ProductDetail from "./ProductDetails";
import ProjectsCarousel from "./projects-carousel";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the product by ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetail
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
      <ProjectsCarousel />
    </div>
  );
}