"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import Hero from "@/components/hero";

const projects = [
  {
    id: 1,
    title: "Super Market e-commerce web app",
    description:
      "Need a responsive, SEO-optimized, and fast-loading eCommerce website using ReactJS and tailwind ? Look no further! Perfect for grocery stores, makeup shops, clothing boutiques, real estate agencies, furniture stores, and bookshops",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "ExpressJS"],
    image: "/projects/ketex.png",
    liveUrl: "https://katemagirma-market.netlify.app/",
    category: "SaaS Development",
  },
  {
    id: 2,
    title: "AI-Powered CO2 Footprint Analysis",
    description:
      "a web platform built with a Solidity backend for storing analysis results, a React.js frontend for user interaction, and Python for running the LLM model to perform data analysis.",
    techStack: ["React", "Next.js", "Tailwind css ", "Blockchain", "Solidity"],
    image: "/projects/AI.jpg",
    liveUrl: "https://www.upwork.com/freelancers/~0192ef87525f9b27cf?p=1840031986426974208",
    category: "Webapp Development",
  },
  {
    id: 3,
    title: "Career Net Africa",
    description:
      "a platform dedicated to offering mentorship and valuable guidance to young African students. It leverages the robust capabilities and flexibility of React.js and Express.js to create an interactive and dynamic environment for fostering mentor-student interactions, skill development, and career guidance tailored to the African context.",
    techStack: ["NodeJS", "ReactJS", "Firebase", "MediaPipe"],
    image: "/projects/Career.jpg",
    liveUrl: "https://careernet-africa.netlify.app/",
    category: "Webapp Development",
  },
  {
    id: 4,
    title: "Autohub",
    description:
      " a versatile platform tailored for buying, selling, and renting vehicles and vehicle accessories. Developed using React.js and Node.js/Express.js, it integrates a local payment system called Chapa, offering seamless transactions. Moreover, it incorporates a chat functionality and notification sending feature. The admin page provides in-depth analysis, including order details, customer insights based on geographical location percentages, and various other insightful metrics, making it a comprehensive solution for the automotive industry. ",
    techStack: ["React", "Next.js", "Node.js", "ExpressJS", "socket.io","Tailwind CSS"],
    image: "/projects/autohub.jpg",
    liveUrl: "https://www.upwork.com/freelancers/~0192ef87525f9b27cf?p=1735585418849554432",
    category: "Webapp Development",
  },
  {
    id: 5,
    title: "HakimHub",
    description:
      "Africa's pioneering medical information recommendation system, setting a new standard in healthcare technology. Utilized advanced LLM technology to personalize symptom assessments and follow-up questions. Provided precise recommendations for specialized doctors and hospitals nearby. The platform, accessible via both web and mobile applications, will prompt users to input their symptoms and preferences.",
    techStack: ["LLM Prompt Engineering", "Flutter", "Chatbot"],
    image: "/projects/hakim.jpg",
    liveUrl: "https://www.upwork.com/freelancers/~0192ef87525f9b27cf?p=1771552917874495488",
    category: "Mobile App Development",
  },
  {
    id: 6,
    title: "House Rental app",
    description:
      "",
    techStack: ["React", "Node.js", "CSS", "ExpressJS"],
    image: "/projects/rental.png",
    liveUrl: "https://www.upwork.com/freelancers/~0192ef87525f9b27cf?p=1735672950379515904",
    category: "Webapp Development",
  },

];

export const ProjectsPage = () => {
  return (
    <section className="min-h-screen dark:bg-[#05132e]">
      {/* Hero Section */}
      {/* <div className="relative w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
        <div
          className="absolute inset-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 80%)" }}
        ></div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-white mb-4"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-200"
          >
            Selected success stories from our project portfolio
          </motion.p>
        </div>
      </div> */}
      <Hero />


      {/* Projects Grid */}
      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  h-[600px]">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl flex flex-col  shadow-lg bg-gray-100 dark:bg-gray-800 overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-56 w-full relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col justify-between h-[400px]">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>


                {/* Project Footer */}
                <div className=" mt-6 flex items-center justify-between">
                  <span className="text-blue-500 text-sm font-semibold">
                    {project.category}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
