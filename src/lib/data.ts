import { ReactElement } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaUser } from "react-icons/fa";

export const products = [
  {
    title: "product 1",
    description: "A powerful tool for mastering Tailwind CSS with pre-built components and templates.",
    rating: 5,
    reviews: 50,
    currentPrice: 150,
    originalPrice: 200,
    techStack: ["Tailwind CSS", "HTML", "CSS"],
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "product 2",
    description: "An innovative platform for bridging the gap between technology and business solutions.",
    rating: 4,
    reviews: 40,
    currentPrice: 500,
    originalPrice: 600,
    techStack: ["React", "Node.js", "Express"],
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "product 3",
    description: "A creative studio offering high-quality rendering and design services.",
    rating: 5,
    reviews: 25,
    currentPrice: 700,
    originalPrice: 800,
    techStack: ["Blender", "3ds Max", "Photoshop"],
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "product 4",
    description: "A digital marketing agency specializing in SEO, content creation, and social media management.",
    rating: 4,
    reviews: 35,
    currentPrice: 400,
    originalPrice: 500,
    techStack: ["WordPress", "SEO Tools", "Google Analytics"],
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "product 5",
    description: "An online academy offering a wide range of courses for skill development.",
    rating: 5,
    reviews: 60,
    currentPrice: 100,
    originalPrice: 150,
    techStack: ["Moodle", "PHP", "MySQL"],
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "product 6",
    description: "A gaming platform providing a variety of online games and tournaments.",
    rating: 4,
    reviews: 45,
    currentPrice: 200,
    originalPrice: 250,
    techStack: ["Unity", "C#", "Photon"],
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "product 7",
    description: "A free invoicing tool for freelancers and small businesses.",
    rating: 5,
    reviews: 55,
    currentPrice: 50,
    originalPrice: 100,
    techStack: ["React", "Node.js", "MongoDB"],
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  }
  // {
  //   title: "9",
  //   link: "https://tailwindmasterkit.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  // },
  // {
  //   title: "10",
  //   link: "https://smartbridgetech.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  // },
  // {
  //   title: "11",
  //   link: "https://renderwork.studio",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },
  // {
  //   title: "12",
  //   link: "https://cremedigital.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "13",
  //   link: "https://goldenbellsacademy.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  // },
  // {
  //   title: "14",
  //   link: "https://invoker.lol",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  // },
  // {
  //   title: "15",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
];

export const testimonials = [
  {
    image: "https://avatar.iran.liara.run/public",
    text: "Using this component library has significantly speed up our development process. The quality and ease of integration are remarkable!",
    name: "David Smith",
    jobtitle: "UI Designer",
    rating: 2,
  },
  {
    image: "https://avatar.iran.liara.run/public",
    text: "I love  how intuitive and well-documented this component library is. It has significantly improved our UI consistency across projects.",
    name: "James Wilson",
    jobtitle: "Product Manager",
    rating: 2,
  },
  {
    image: "https://avatar.iran.liara.run/public",
    text: "Using this library has been a game-changer for our product development.",
    name: "Michael Davis",
    jobtitle: "Full Stack Developer",
    rating: 5,
  },
  {
    image: "https://avatar.iran.liara.run/public",
    text: "The components are highly responsive and work seamlessly across different devices and screen sizes.",
    name: "Emily Chen",
    jobtitle: "Mobile App Developer",
    rating: 5,
  },
  {
    image: "https://avatar.iran.liara.run/public",
    text: "This library has saved us a significant amount of time and effort. The components are well-documented and easy to integrate.",
    name: "Sarah Taylor",
    jobtitle: "Backend Developer",
    rating: 5,
  },
  {
    image: "https://avatar.iran.liara.run/public",
    text: "I appreciate the attention to detail in the design. The components are visually appealing and professional.",
    name: "Kevin White",
    jobtitle: "UI/UX Designer",
    rating: 5,
  },
  {
    image: "https://avatar.iran.liara.run/public",
    text: "The components are highly customizable and can be easily integrated with our existing UI framework.",
    name: "Rachel Patel",
    jobtitle: "Full Stack Developer",
    rating: 4,
  },
  {
    image: "https://avatar.iran.liara.run/public",
    text: "I love how the components are designed to be highly responsive and work well across different screen sizes.",
    name: "Brian Kim",
    jobtitle: "Mobile App Developer",
    rating: 5,
  },
];

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
