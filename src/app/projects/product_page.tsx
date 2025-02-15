"use client"

import { useState } from "react"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star } from "lucide-react"

export default function ProductsPage() {
  const [category, setCategory] = useState<string>("all")
  const [difficulty, setDifficulty] = useState<string>("all")
  const [rating, setRating] = useState<string>("all")
  const [budget, setBudget] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  // Filter products based on selected criteria
  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === "all" || product.category === category
    const difficultyMatch = difficulty === "all" || product.difficulty === difficulty
    const ratingMatch = rating === "all" || product.rating >= Number.parseInt(rating)
    const budgetMatch =
      budget === "all" ||
      (budget === "0-300" && product.price <= 300) ||
      (budget === "301-600" && product.price > 300 && product.price <= 600) ||
      (budget === "601+" && product.price > 600)

    return categoryMatch && difficultyMatch && ratingMatch && budgetMatch
  })

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Result for E-commerce App</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Select onValueChange={setCategory} value={category}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="ecommerce">E-commerce</SelectItem>
            <SelectItem value="portfolio">Portfolio</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setDifficulty} value={difficulty}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setRating} value={rating}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ratings</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setBudget} value={budget}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-300">$0 - $300</SelectItem>
            <SelectItem value="301-600">$301 - $600</SelectItem>
            <SelectItem value="601+">$601+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results count and sort */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted-foreground">{filteredProducts.length} results</p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">{product.reviews}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-lg">${product.price}</span>
                  <span className="text-sm text-muted-foreground line-through ml-2">${product.originalPrice}</span>
                </div>
                <Button variant="default">Buy Now</Button>
              </div>
            </div>
          </div>
        ))}
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
  )
}

