import { ProjectsPage } from "@/components/custom/projects";
import React from "react";
import { ProjectCard } from "./card";
import Hero from "./hero";
import Catagory from "./Catagory";
import ProjectsCarousel from "./projects-carousel";
const projects = [
  {
    id: 1,
    title: "Super Market e-commerce web app",
    description:
      "Need a responsive, SEO-optimized, and fast-loading eCommerce website using ReactJS and Tailwind? Look no further! Perfect for grocery stores, makeup shops, clothing boutiques, real estate agencies, furniture stores, and bookshops.",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "ExpressJS"],
    image: "/projects/ketex.png",
    liveUrl: "https://katemagirma-market.netlify.app/",
    category: "SaaS Development",
  },
  {
    id: 2,
    title: "AI-Powered CO2 Footprint Analysis",
    description:
      "A web platform built with a Solidity backend for storing analysis results, a React.js frontend for user interaction, and Python for running the LLM model to perform data analysis.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Blockchain", "Solidity"],
    image: "/projects/AI.jpg",
    liveUrl: "https://www.upwork.com/freelancers/~0192ef87525f9b27cf?p=1840031986426974208",
    category: "Webapp Development",
  },
  {
    id: 3,
    title: "Career Net Africa",
    description:
      "A platform dedicated to offering mentorship and valuable guidance to young African students. It leverages the robust capabilities and flexibility of React.js and Express.js to create an interactive and dynamic environment for fostering mentor-student interactions, skill development, and career guidance tailored to the African context.",
    techStack: ["NodeJS", "ReactJS", "Firebase", "MediaPipe"],
    image: "/projects/Career.jpg",
    liveUrl: "https://careernet-africa.netlify.app/",
    category: "Webapp Development",
  },
  {
    id: 4,
    title: "Autohub",
    description:
      "A versatile platform tailored for buying, selling, and renting vehicles and vehicle accessories. Developed using React.js and Node.js/Express.js, it integrates a local payment system called Chapa, offering seamless transactions. Moreover, it incorporates a chat functionality and notification sending feature. The admin page provides in-depth analysis, including order details, customer insights based on geographical location percentages, and various other insightful metrics, making it a comprehensive solution for the automotive industry.",
    techStack: ["React", "Next.js", "Node.js", "ExpressJS", "socket.io", "Tailwind CSS"],
    image: "/projects/autohub.jpg",
    liveUrl: "https://www.upwork.com/freelancers/~0192ef87525f9b27cf?p=1735585418849554432",
    category: "Webapp Development",
  },
  {
    id: 5,
    title: "HakimHub",
    description:
      "Africa's pioneering medical information recommendation system, setting a new standard in healthcare technology. Utilized advanced LLM technology to personalize symptom assessments and follow-up questions. Provided precise recommendations for specialized doctors and hospitals nearby. The platform, accessible via both web and mobile applications, prompts users to input their symptoms and preferences.",
    techStack: ["LLM Prompt Engineering", "Flutter", "Chatbot"],
    image: "/projects/hakim.jpg",
    liveUrl: "https://www.upwork.com/freelancers/~0192ef87525f9b27cf?p=1771552917874495488",
    category: "Mobile App Development",
  },
  {
    id: 6,
    title: "House Rental App",
    description:
      "A comprehensive house rental application designed to streamline the process of finding and listing rental properties.",
    techStack: ["React", "Node.js", "CSS", "ExpressJS"],
    image: "/projects/rental.png",
    liveUrl: "https://www.upwork.com/freelancers/~0192ef87525f9b27cf?p=1735672950379515904",
    category: "Webapp Development",
  },
];

const page = () => {
  return (
    <div className="">
    <div className="h-20 md:h-10"></div>
    <Catagory/>
   <Hero/>
   <ProjectsCarousel/>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 md:mx-10 my-10">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
    </div>
  );
};

export default page;
