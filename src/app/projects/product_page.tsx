"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data"; // Ensure products are correctly structured
import { ProductCard } from "./product_card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialDifficulty = searchParams.get("difficulty") || "all";
  const initialRating = searchParams.get("rating") || "all";
  const initialPriceRange = searchParams.get("price") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [rating, setRating] = useState(initialRating);
  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    setCategory(initialCategory);
    setDifficulty(initialDifficulty);
    setRating(initialRating);
    setPriceRange(initialPriceRange);
  }, [initialCategory, initialDifficulty, initialRating, initialPriceRange]);

  // Filter function
  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;
    const difficultyMatch = difficulty === "all" || product.difficulty === difficulty;
    const ratingMatch = rating === "all" || product.rating >= Number(rating);
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
        <Select onValueChange={setCategory} value={category}>
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
        <Select onValueChange={setDifficulty} value={difficulty}>
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
        <Select onValueChange={setRating} value={rating}>
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
        <Select onValueChange={setPriceRange} value={priceRange}>
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
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
