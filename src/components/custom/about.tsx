"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import TeamSection from "../team/TeamSection";

const teamMembers = [
  {
    id: 1,
    name: "Ketema G.",
    role: "CEO & Founder",
    image: "/images/ketema.jpg",
    fallback: "KG",
  },
  {
    id: 2,
    name: "",
    role: "Chief Technology Officer",
    image: "/images/tesfish.jpg",
    fallback: "TA",
  },
  {
    id: 3,
    name: "Admas G.",
    role: "Chief Operating Officer",
    image: "/images/admas_portrait.jpg",
    fallback: "AG",
  },
];


export const AboutUs = () => {
  const { theme } = useTheme();
  const bgColor =
    theme === "dark" ? "bg-gray-[#05132e] text-gray-100" : "bg-white text-gray-800";

  return (
    <section className={`${bgColor} min-h-screen`}>
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] ] 
             bg-cover bg-center z-0 flex items-center justify-center bg-blue-500"
      >
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-200"
          >
            Empowering Innovation through unparalleled software development expertise
          </motion.p>
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Story</h2>
          <p className="text-lg leading-7 text-gray-600 dark:text-white">
            Zulu Tech was founded in 2024 with a vision to bring innovative
            solutions to the tech industry. What started as a small group of
            passionate developers has grown into a global company serving
            thousands of clients worldwide. Our mission is to empower businesses
            through cutting-edge technology and exceptional customer support.
          </p>
        </section>

        {/* Meet the Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Meet Our Team
          </h2>
          <TeamSection />
        </section>

        {/* Vision and Mission */}
        <section className="text-blue-800 dark:text-white">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 ">
            Our Vision
          </h2>
          <div className="text-lg leading-7 text-gray-600 dark:text-white space-y-2">
            To be the leading provider of innovative software solutions, exceeding client expectations through exceptional African talent, while fostering sustainable growth and contributing positively to society and the environment.
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-blue-800 ">
            Our Goals
          </h2>
          <div className="text-md leading-7 text-gray-600 dark:text-white space-y-5">
            <ul className="list-disc pl-5 space-y-2">
              <li>
              Deliver cutting-edge technology solutions by consistently providing innovative software solutions that surpass client expectations.
              </li>
              <li>
              Foster continuous learning and development by cultivating a culture that encourages ongoing education and professional growth within our teams.
              </li>
              <li>
              Build long-term partnerships by establishing and maintaining relationships with clients based on trust, transparency, and shared success.
              </li>
              <li>
              Ensure timely project delivery by adhering to project timelines and ensuring punctual delivery without compromising quality.
              </li>
              <li>
              Utilize cutting-edge technologies by staying abreast of industry advancements and incorporating the latest technologies into our solutions.
              </li>
            </ul>
          </div>

        </section>
      </div>
    </section>
  );
};
