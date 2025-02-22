"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from "@/lib/data"; // Ensure products are correctly structured
import { ProductCard } from "./product_card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // State for filters
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [difficulty, setDifficulty] = useState(searchParams.get("difficulty") || "all");
  const [rating, setRating] = useState(searchParams.get("rating") || "all");
  const [priceRange, setPriceRange] = useState(searchParams.get("price") || "all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Update filters when the URL changes
  useEffect(() => {
    setCategory(searchParams.get("category") || "all");
    setDifficulty(searchParams.get("difficulty") || "all");
    setRating(searchParams.get("rating") || "all");
    setPriceRange(searchParams.get("price") || "all");
    setCurrentPage(Number(searchParams.get("page")) || 1);
  }, [searchParams]);

  // Update URL when filters change
  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    params.set("page", "1"); // Reset pagination on filter change
    router.push(`/ProductsPage?${params.toString()}`);
  };

  // Filter function
  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;
    const difficultyMatch = difficulty === "all" || product.difficulty === difficulty;
    const ratingMatch = rating === "all" || (Number(rating) && product.rating >= Number(rating));
    const priceMatch =
      priceRange === "all" ||
      (priceRange === "40-300" && product.currentPrice <= 300) ||
      (priceRange === "301-600" && product.currentPrice > 300 && product.currentPrice <= 600) ||
      (priceRange === "601+" && product.currentPrice > 600);

    return categoryMatch && difficultyMatch && ratingMatch && priceMatch;
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        {/* Category Filter */}
        <Select onValueChange={(value) => updateQueryParams("category", value)} value={category}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="saas-development">SaaS Development</SelectItem>
            <SelectItem value="webapp-development">Webapp Development</SelectItem>
            <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
            <SelectItem value="software-development">Software Development</SelectItem>
          </SelectContent>
        </Select>

        {/* Difficulty Filter */}
        <Select onValueChange={(value) => updateQueryParams("difficulty", value)} value={difficulty}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>

        {/* Rating Filter */}
        <Select onValueChange={(value) => updateQueryParams("rating", value)} value={rating}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ratings</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4.5">4.5 and up</SelectItem>
            <SelectItem value="4">4 and up</SelectItem>
          </SelectContent>
        </Select>

        {/* Price Range Filter */}
        <Select onValueChange={(value) => updateQueryParams("price", value)} value={priceRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="40-300">$40 - $300</SelectItem>
            <SelectItem value="301-600">$301 - $600</SelectItem>
            <SelectItem value="601+">$601+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted-foreground">{filteredProducts.length} results</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => updateQueryParams("page", String(i + 1))}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
