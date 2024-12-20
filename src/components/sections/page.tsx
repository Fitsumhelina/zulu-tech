"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import Hero from "@/components/sections/hero";
import Features from "@/components/sections/Features";
import TestimonialsSection from "@/components/sections/testimonials-section";
import { Services } from "@/components/custom/service-card";
import { Success } from "@/components/custom/success";
import { Stats } from "@/components/custom/stats";
import { Trial } from "@/components/custom/Trial";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Whether the animation happens only once
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-12">
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-right">
        <Services />
      </div>
      <div data-aos="flip-right">
        <Stats />
      </div>
     
      <div data-aos="fade-up">
        <Features />
      </div>
      <div data-aos="flip-left">
        <TestimonialsSection />
      </div>
    </div>
  );
}
