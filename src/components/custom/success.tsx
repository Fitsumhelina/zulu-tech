"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SuccessStory } from "@/lib/types";
import { Button } from "../ui/button";
import { MoveUpRight, View } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const successStories: SuccessStory[] = [
  {
    id: 2,
    title: "E-Commerce Platform ",
    description:
      "We develop fully customized e-commerce applications that cater to your specific business needs. From small online stores to large marketplaces, we design and develop solutions that scale with your business growth. Cross-Platform Solutions: We create cross-platform e-commerce applications that provide a consistent shopping experience across web, iOS, and Android platforms. Our apps are designed to work smoothly on any device, ensuring accessibility and convenience for your customers. User Persona Integration:    ",
    image: "/images/e-com.png",
    liveUrl: "https://trendyboutique.com",
    techStack: [
      {
        name: "TypeScript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },

      {
        name: "Python",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    id: 3,
    title: "C02 footprint Analysis.",
    description:
      "The CO2 Footprint application is a web platform built with a Solidity backend for storing analysis results, a React.js frontend for user interaction, and Python for running the LLM model to perform data analysis.",
    image: "/images/carbon.png",
    liveUrl: "https://techsolutions.com",
    techStack: [
      {
        name: "Django",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },

      {
        name: "PostgreSQL",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },

      {
        name: "AWS",
        url: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Vue.js",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
    ],
  },
];

export const Success = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#05132e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Customer Success Stories{" "}
            <span className="text-blue-500 underline italic font-serif">
              @Zulu
            </span>
          </h2>
          <p className="text-gray-600">
            Real-world stories of our client achievements in software
            development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#0b224d] rounded-lg p-6 shadow-lg flex flex-col"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Project Screenshots */}
              <div
                className="aspect-square bg-gray-100 dark:bg-[#05132e] rounded-lg"
                style={{
                  backgroundImage: "url(/images/carbon.png)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="aspect-square bg-gray-100 dark:bg-[#05132e] rounded-lg"
                style={{
                  backgroundImage: "url(/images/e-com.png)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">15+</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Active Projects
              </p>
            </div>
            <Button className="mx-auto mt-2 items-center flex justify-center">
              View More <MoveUpRight size={40} />{" "}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {successStories.map((story) => (
              <Card
                key={story.id}
                className="p-4 hover:shadow-lg transition-shadow duration-300 dark:bg-[#05132e] dark:border-gray-400"
              >
                <Link href={story.liveUrl}>
                  <div className="flex max-sm:flex-col items-center gap-4">
                    <div className=" bg-purple-100 p-8 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{story.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {story.description}
                      </p>
                      <div className="flex mt-4 gap-1">
                        {story.techStack.map((link, index) => (
                          <div key={index} className="">
                            <Image
                              src={link.url}
                              className="text-lg h-8 w-14"
                              alt={link.name}
                              width={100}
                              height={100}
                            />
                          </div>
                        ))}{" "}
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
