import { motion } from "framer-motion";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { TestimonialType } from "@/lib/types";
import Image from "next/image";

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Joshua Akinsola",
    role: "Kaadi",
    comment: "Great working with the team, They treat the project like it's their own, a real pleasure to work with!",
    rating: 5,
    image: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "Brian",
    role: "Lend with aloha",
    comment: "The Zulu team is excellent - skilled engineers, great to work with. I look forward to continuing our collaboration through a new contract.",
    rating: 5,
    image: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Abe Rubarts",
    role: "Locus Digital",
    comment: "Great team, highly organized! I would love the opportunity to collaborate with them again.",
    rating: 5,
    image: "/placeholder3.webp",
  },
];

export const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-20 bg-gray-50 dark:text-white dark:bg-[#05132e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Customer Testimonial</h2>
          <p className="text-gray-600">
            Our Customers Think, Our Greatest Asset
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center justify-center content-center md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 dark:bg-[#032157] dark:text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-white">
                      {`"${testimonial.role}"`}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-white">
                  {`"${testimonial.comment}"`}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
