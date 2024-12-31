"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
const blogs = [
  {
    id: 1,
    title: "How We Went from Zero to $2,000/Week in Just 2 Months ",
    description:
      "They said freelancing would be tough. They said building a team would be harder. But here we are, started making $2,000 per week and just crossed $5,000 on Upwork! 🎉\nWhat’s the secret sauce? ",
    add: "  It’s simple:\n1️⃣ Find the right team.\n2️⃣ Fly to the sky. ✈️\n...and occasionally yell “SHOW ME THE MONEY!” for motivation. 💼✨\nAt this rate, we're wondering:\n🤔 When do we hit the millionaire milestone? Next year? Next month? Next week?\n(Hey, math is hard, but freelancing isn't when you love what you do!)\nTo anyone out there hustling:\nKeep grinding.\nSurround yourself with rockstars.\nAnd remember, the sky’s the limit (or at least until we run out of coffee ☕).\nHere’s to smashing more milestones and, who knows, maybe launching our own rocket someday. 🚀💼 #Teamwork #Success #ZuluTech\nWhat’s your favorite freelancing moment? Drop it below 👇",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQHossJ0_iuQOA/feedshare-shrink_800/feedshare-shrink_800/0/1733815154041?e=2147483647&v=beta&t=pAfp_zB0tsSLuVssG6u5FpKOraaV4kK_Q2gfGx89T9Y",
    date: "December 13, 2024",
    author: "Ketema G ",
    link: "https://www.linkedin.com/posts/zulu-software_teamwork-success-zulutech-activity-7272147846055788544-QV10?utm_source=share&utm_medium=member_android"
  },
  {
    id: 2,
    title:
      "🌟 Together We Achieve More: 100% JSS, 3 New Contracts, and New Zuluwers! 🚀",
    description:
      "This Monday was a testament to the power of collaboration:\n✅ Secured three new contracts 📝\n✅ Maintained an inspiring 100% Job Success Score 🌟\n✅ Welcomed brilliant new Zuluwers to the family! Henok Belachew and Abel Kidanemariam🥳 \nWhen great minds come together,",
    add: 'the possibilities are endless. As the African proverb says, "If you want to go fast, go alone. If you want to go far, go together."\nBy collaborating, supporting one another, and sharing our strengths, we can achieve extraordinary things. Here\'s to making Zulu Tech a force to be reckoned with! 💪',
    image:
      "https://images.ctfassets.net/pdf29us7flmy/dnl4o6zfF0zRWbY441wV0/f25aacef71cf7b39eb3126ee6c7f846d/datawarehouse1_GettyImages-482872096_.jpeg?w=720&q=100&fm=jpg",
    date: "November 28, 2024",
    author: "Admasu A.",
    link: "https://www.linkedin.com/posts/zulu-software_teamwork-success-zulutech-activity-7269574411433689088-WswR?utm_source=share&utm_medium=member_android"
  },
  {
    id: 3,
    title: " 🎉From $150 to $600 to $20/hour! 🎉",
    description:
      'Our first Upwork project was like stepping into the ring! The client started at $150, but one bold Zuluwer came in swinging with a $1000 offer. The client countered, "How about $500 and done in a week?"\nWith McGregor-like confidence, we replied, "Listen, mate.',
    add: ' It’s $600 for top-quality, delivered in two weeks. You want cheap, you’ll get knocked out in round one!" The client agreed, and even though it took four weeks, we delivered a project they absolutely loved.\nNow? They’ve signed us for $20/hour and left us glowing feedback. 🥳\nRemember you decide your worth, not the client. Don’t fall for cheap; show them what you’re worth, and they’ll pay for it! 💪✨\nAs McGregor would say, "We’re not here to take part; we’re here to take OVER!" 🥂\n#KnowYourWorth #UpworkSuccess #ZuluAgency',
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhZamBXaYeXmChQ7nMTF8RlFhTULcw43FAQ&sg",
    date: "October 15, 2024",
    author: "Tesfaye A",
    link: "https://www.linkedin.com/posts/zulu-software_knowyourworth-upworksuccess-zuluagency-activity-7266836129977450497-rUiV?utm_source=share&utm_medium=member_android"
  },
];

export const BlogsPage = () => {
  const { theme } = useTheme();
  const bgColor =
    theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800";

  const router = useRouter;
  return (
    <section className={`${bgColor} min-h-screen dark:bg-[#05132e]`}>
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
                Zulu Tech Blogs

          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-200"
          >
          Insights, Innovations, and Stories from Zulu Tech

          </motion.p>
        </div>
      </div>

      {/* 
      */}

      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto ">
        {/* Blog List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.a
              href={blog.link} key={blog.id}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow overflow-hidden flex flex-col h-full"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-400">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {blog.description}
                </p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{blog.date}</span>
                  <span>By {blog.author}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
