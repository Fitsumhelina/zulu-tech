"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import Hero from "@/components/hero";
import Category from "@/components/Catagory";
import ProjectsCarousel from "@/components/projects-carousel";
import ProductGrid from "@/components/ProductGrid";
import ProductsPage from "@/components/ProductsPage";

const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category"); // Get category from URL

  return (
    <div className="">
      <div className="h-20 md:h-10"></div>

      {/* Hide Hero and ProjectsCarousel if a category is clicked */}
      {!category && (
        <>
          <Category />
          <Hero />
          <h3 className="text-3xl ml-10 font-bold mb-3">Popular Projects</h3>

          <ProjectsCarousel />
        </>
      )}

      {/* Show ProductsPage only when a category is clicked, otherwise show ProductGrid */}
      {category ? <ProductsPage /> : <ProductGrid />}
    </div>
  );
};

export default Page;
