import { ProjectsPage } from "@/components/custom/projects";
import React from "react";
import Hero from "./hero";
import Catagory from "./Catagory";
import ProjectsCarousel from "./projects-carousel";
import ProductGrid from "./product_grid";

const page = () => {
  return (
    <div className="">
    <div className="h-20 md:h-10"></div>
    <Catagory/>
   <Hero/>
   <ProjectsCarousel/>
   <ProductGrid/>
    </div>
  );
};

export default page;
