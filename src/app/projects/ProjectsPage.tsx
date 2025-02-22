"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import ProductGrid from "./ProductGrid";
import Hero from "./hero";
import Category from "./Catagory";
import ProjectsCarousel from "./projects-carousel";

const ProjectsPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all"; // Get category from URL

  return (
    <div>
      <div className="h-20 md:h-10"></div>
      <Category />
      <Hero />
      <ProjectsCarousel />

      {/* Show Product Grid based on Category */}
      <h1 className="text-2xl font-bold text-center mt-6">
        {category === "all" ? "All Projects" : `${category} Projects`}
      </h1>
      <ProductGrid category={category} />
    </div>
  );
};

export default ProjectsPage;
