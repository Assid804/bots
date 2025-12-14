import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import Image from "@/components/img/logo/inner_b1.jpg"
import Image2 from "@/components/img/logo/inner_b2.jpg"
import Image3 from "@/components/img/logo/inner_b3.jpg"
import Image4 from "@/components/img/logo/inner_b2.jpg" // ← add image

const posts = [
  {
    image: Image,
    title: "We Build with Intelligence, Not Just Code",
    date: "MAY 22, 2025",
    author: "Admin",
  },
  {
    image: Image2,
    title: "From Ideas to Intelligent Automation",
    date: "MAY 22, 2025",
    author: "Admin",
  },
  {
    image: Image3,
    title: "Smarter AI for Modern Businesses",
    date: "MAY 22, 2025",
    author: "Admin",
  },
  {
    image: Image4,
    title: "Transforming Workflows with Automation",
    date: "MAY 22, 2025",
    author: "Admin",
  },
]

export default function BlogSection() {
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (!sliderRef.current) return
    const { clientWidth } = sliderRef.current
    sliderRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    })
  }

  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Smarter Automation for
            <br />
            Smarter Businesses
          </h2>

          {/* Arrows */}
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Scroll Area */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
        >
          {posts.map((post, i) => (
            <div
              key={i}
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-[32%] snap-start
                         group rounded-2xl border border-white/20 bg-black overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl m-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-orange-500" />
                  <span>{post.author}</span>
                </div>

                <h3 className="text-xl font-semibold leading-snug">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
