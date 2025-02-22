"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import Hero from "./hero";
import Catagory from "./Catagory";
import ProjectsCarousel from "./projects-carousel";
import ProductGrid from "./ProductGrid";
import ProductsPage from "./ProductsPage"; // Import the ProductsPage

const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category"); // Get category from URL

  return (
    <div className="">
      <div className="h-20 md:h-10"></div>

      {/* Hide Hero and ProjectsCarousel if a category is clicked */}
      {!category && (
        <>
          <Catagory />
          <Hero />
          <ProjectsCarousel />
        </>
      )}

      {/* Show ProductsPage only when a category is clicked, otherwise show ProductGrid */}
      {category ? <ProductsPage /> : <ProductGrid />}
    </div>
  );
};

export default Page;
