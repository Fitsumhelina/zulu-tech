"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [difficulty, setDifficulty] = useState("all");
  const [rating, setRating] = useState("all");
  const [budget, setBudget] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const filterProducts = () => {
    return products.filter((product) => {
      const categoryMatch = category === "all" || product.category === category;
      const difficultyMatch = difficulty === "all" || product.difficulty === difficulty;
      const ratingMatch = rating === "all" || product.rating >= parseFloat(rating);
      const budgetMatch =
        budget === "all" ||
        (budget === "40-200" && product.price >= 40 && product.price <= 200) ||
        (budget === "201-500" && product.price > 200 && product.price <= 500) ||
        (budget === "501+" && product.price > 500);

      return categoryMatch && difficultyMatch && ratingMatch && budgetMatch;
    });
  };

  const filteredProducts = filterProducts();
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Select onValueChange={setCategory} value={category}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="saas-development">SaaS Development</SelectItem>
            <SelectItem value="webapp-development">Webapp Development</SelectItem>
            <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
            <SelectItem value="software-development">Software Development</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setDifficulty} value={difficulty}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setRating} value={rating}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setBudget} value={budget}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="40-200">$40 - $200</SelectItem>
            <SelectItem value="201-500">$201 - $500</SelectItem>
            <SelectItem value="501+">$501+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
