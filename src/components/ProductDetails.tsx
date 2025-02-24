import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"; 
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import ProjectsCarousel from "./projects-carousel";

interface ProductDetailProps {
  id: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  currentPrice: number;
  originalPrice: number;
  techStack: string[];
  category: string;
  difficulty: string;
  thumbnail: string;
}

export default function ProductDetail({
  title,
  description,
  rating,
  reviews,
  currentPrice,
  originalPrice,
  techStack,
  category,
  difficulty,
  thumbnail,
}: ProductDetailProps) {
  return (
    <div className="container mx-auto p-4 max-w-6xl bg-white text-black dark:bg-gray-900 dark:text-gray-100">
      <div className="grid gap-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < rating ? "fill-yellow-500" : "fill-gray-300 dark:fill-gray-600"
                      }`}
                    />
                  ))}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">({reviews} Reviews)</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold">${currentPrice}</div>
            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Preview</Button>
              <Button className="border border-gray-400 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Source
              </Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative aspect-[12/8] w-full overflow-hidden rounded-lg">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - About & Features */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">About the Project</h2>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">{tech}</Badge>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Category & Difficulty</h2>
              <div className="flex gap-4">
                <Badge className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white">{category}</Badge>
                <Badge className="border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300">{difficulty}</Badge>
              </div>
            </section>
          </div>

          {/* Right Column - Price & Actions */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">Price</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-black dark:text-white">${currentPrice}</span>
              <span className="text-gray-500 dark:text-gray-400 line-through">${originalPrice}</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>✅ Quality Checked</li>
              <li>🔄 Future Updates</li>
              <li>⏳ 6 Months Support</li>
            </ul>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">Buy Now</Button>
          </div>
        </div>

        {/* Similar Projects */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Similar Projects</h2>
          <ProjectsCarousel />
        </section>

        {/* Reviews Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Review and Comments</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rating Breakdown */}
            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4">
                  <span className="w-4">{star}</span>
                  <Star className="w-4 h-4 fill-yellow-500" />
                  <Progress value={star * 20} className="flex-1 bg-gray-200 dark:bg-gray-700" />
                  <span className="text-sm text-gray-500 dark:text-gray-400 w-12">{star * 10}%</span>
                </div>
              ))}
            </div>

            {/* Overall Rating */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-bold mb-2 text-black dark:text-white">{rating}.0</div>
              <div className="flex gap-1 mb-2">
                {Array(5).fill(null).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < rating ? "fill-yellow-500" : "fill-gray-300 dark:fill-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{reviews} Ratings</span>
            </div>
          </div>

          {/* Review Form */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">Add Your Review</h3>
            <div className="flex gap-2 mb-4">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} className="w-6 h-6 cursor-pointer hover:fill-yellow-500 transition-colors" />
              ))}
            </div>
            <Textarea placeholder="Write your review here..." className="min-h-[100px] bg-gray-200 dark:bg-gray-700 text-black dark:text-white" />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">Submit</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
