"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from "@/lib/data";
import { ProductCard } from "./product_card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Catagory from "@/components/Catagory";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // States for filters
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [difficulty, setDifficulty] = useState(searchParams.get("difficulty") || "all");
  const [rating, setRating] = useState(searchParams.get("rating") || "all");
  const [priceRange, setPriceRange] = useState(searchParams.get("price") || "all");
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);

  const productsPerPage = 6;

  useEffect(() => {
    setCategory(searchParams.get("category") || "all");
    setDifficulty(searchParams.get("difficulty") || "all");
    setRating(searchParams.get("rating") || "all");
    setPriceRange(searchParams.get("price") || "all");
    setCurrentPage(Number(searchParams.get("page")) || 1);
  }, [searchParams]);

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    params.set("page", "1"); // Reset pagination
    router.push(`/ProductsPage?${params.toString()}`);
  };

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    return (
      (category === "all" || product.category === category) &&
      (difficulty === "all" || product.difficulty === difficulty) &&
      (rating === "all" || (Number(rating) && product.rating >= Number(rating))) &&
      (priceRange === "all" ||
        (priceRange === "40-300" && product.currentPrice <= 300) ||
        (priceRange === "301-600" && product.currentPrice > 300 && product.currentPrice <= 600) ||
        (priceRange === "601+" && product.currentPrice > 600))
    );
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="container mx-auto py-8 px-4">
        <Catagory />
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg mt-4">
            <Input
              type="text"
              placeholder="Search..."
              className="w-xl p-5 rounded-full text-black dark:text-white bg-white dark:bg-[#707071] border-none shadow-md focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <Button
              type="submit"
              className="absolute top-0 right-0 bg-[#2D2B2A] text-white dark:text-black dark:bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-105 m-0.5"
            >
              Explore
            </Button>
          </div>
        </div>

      <h1 className="text-3xl font-bold text-start mb-8 mt-4">Result for Our Products</h1>

      {/* Filters Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-8 dark:text-black w-full max-w-md">
        <h2 className="text-lg font-semibold mb-3">Filters</h2>
        <div className="flex flex-row">
          {/* Category Filter */}
          <Select onValueChange={(value) => updateQueryParams("category", value)} value={category}>
        <SelectTrigger className="w-full">
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
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Levels</SelectItem>
          <SelectItem value="easy">Easy</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="hard">Hard</SelectItem>
        </SelectContent>
          </Select>

          {/* Rating Filter */}
          <Select onValueChange={(value) => updateQueryParams("rating", value)} value={rating}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Ratings</SelectItem>
          <SelectItem value="5">5 Stars</SelectItem>
          <SelectItem value="4.5">4.5+ Stars</SelectItem>
          <SelectItem value="4">4+ Stars</SelectItem>
        </SelectContent>
          </Select>

          {/* Price Filter */}
          <Select onValueChange={(value) => updateQueryParams("price", value)} value={priceRange}>
        <SelectTrigger className="w-full">
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
      </div>

      {/* Results Info */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">{filteredProducts.length} results found</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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
          <p className="text-center col-span-3 text-gray-600">No products found.</p>
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
