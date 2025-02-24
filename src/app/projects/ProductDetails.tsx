import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"; // Ensure this is imported correctly
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
    <div className="container mx-auto p-4 max-w-6xl">
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
                      className={`w-5 h-5 ${i < rating ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                    />
                  ))}
              </div>
              <span className="text-sm text-muted-foreground">({reviews} Reviews)</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold">${currentPrice}</div>
            <div className="flex gap-2">
              <Button>Preview</Button>
              <Button variant="outline">Source</Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            priority // Add priority for above-the-fold images
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - About & Features */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">About the Project</h2>
              <p className="text-muted-foreground">{description}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Category & Difficulty</h2>
              <div className="flex gap-4">
                <Badge variant="secondary">{category}</Badge>
                <Badge variant="outline">{difficulty}</Badge>
              </div>
            </section>
          </div>

          {/* Right Column - Price & Actions */}
          <div className="space-y-6">
            <div className="rounded-lg border p-4 space-y-4">
              <h3 className="font-semibold">Price</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${currentPrice}</span>
                <span className="text-muted-foreground line-through">${originalPrice}</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Quality Checked
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Future Updates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  6 Months Support
                </li>
              </ul>
              <Button className="w-full">Purchase Now</Button>
            </div>
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
                  <Star className="w-4 h-4 fill-primary" />
                  <Progress value={star * 20} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-12">{star * 10}%</span>
                </div>
              ))}
            </div>

            {/* Overall Rating */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-bold mb-2">{rating}.0</div>
              <div className="flex gap-1 mb-2">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${i < rating ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                    />
                  ))}
              </div>
              <span className="text-sm text-muted-foreground">{reviews} Ratings</span>
            </div>
          </div>

          {/* Review Form */}
          <div className="space-y-4">
            <h3 className="font-semibold">Add Your Review</h3>
            <div className="flex gap-2 mb-4">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star key={i} className="w-6 h-6 cursor-pointer hover:fill-primary transition-colors" />
                ))}
            </div>
            <Textarea placeholder="Write your review here..." className="min-h-[100px]" />
            <Button className="w-full">Submit</Button>
          </div>
        </section>
      </div>
    </div>
  );
}