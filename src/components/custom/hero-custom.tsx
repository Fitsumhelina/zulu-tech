"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedLogoCloud from "./animated-icons";
// import heroImage from "@/public/images/hero-illustration.png";

const HeroCustom = () => {
  return (
    <section className="relative bg-white dark:bg-[#05132e] dark:text-white  text-gray-800 py-16 md:py-24 lg:py-32 pb-0">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Turning Vision into Reality
          </motion.h1>
          <p className="text-lg md:text-xl mt-4">
            Achieving your project goals with precision and timely delivery.
          </p>
          <div className="mt-8 flex  max-sm:flex-col gap-2 max-sm:justify-center items-stretch">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-500 transition">
              Bring Your Idea to Life
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md shadow-lg hover:bg-gray-200 transition">
              Request a Consultation
            </button>
          </div>
        </div>
        <motion.div className="lg:w-1/2 flex justify-center relative">
          <Image
            src={"/images/web-bg.png"}
            alt="Hero Illustration"
            width={600}
            height={400}
            className="rounded-lg "
          />
        </motion.div>
      </div>
      <div className="text-center mt-24">
        {/* <motion.h1 className="text-4xl font-semibold mb-2">
          Our Clients
        </motion.h1>
        <motion.p className="text-xl text-gray-500">
          Trusted By 1000 clients all over the world
        </motion.p> */}
        <AnimatedLogoCloud />
        </div>
    </section>
  );
};

export default HeroCustom;
