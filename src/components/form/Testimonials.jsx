import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowLeft, ArrowRight, Sparkle, Sparkles } from "lucide-react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Modern Smith",
    role: "Co-founder, Wellness Brand",
    image: "https://i.pravatar.cc/150?img=32",
    text: "I was ready to give up on VA hiring until I met my AVA grad. She changed the way I run my business.",
  },
  {
    name: "Jonathon Doe",
    role: "Co-founder, Wellness Brand",
    image: "https://i.pravatar.cc/150?img=12",
    text: "The SOP we received as part of the final exam was so good, I printed it out and gave it to every hire after.",
  },
  {
    name: "Sarah Lee",
    role: "Founder, SaaS Startup",
    image: "https://i.pravatar.cc/150?img=45",
    text: "This completely replaced two internal roles. The efficiency gain was unreal.",
  },
  {
    name: "Jonathon Doe",
    role: "Co-Executive",
    image: "https://i.pravatar.cc/150?img=12",
    text: "The SOP we received as part of the final exam was so good, I printed it out and gave it to every hire after.",
  },
]

export default function Testimonials() {
  const scrollRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    const amount = dir === "left" ? -420 : 420
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return

    const percent = el.scrollLeft / (el.scrollWidth - el.clientWidth)
    setProgress(percent * 100)
  }

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#080b14] via-[#12162a] to-[#2a1838] text-white px-8 py-24 overflow-hidden">
      {/* glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-lg border border-white/20 text-sm bg-gradient-to-r from-orange-950 to-purple-900 backdrop-blur">
          <Sparkles size={16} className="text-purple-400" /> Our Clients Review
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Seamless Integration
            <br />
            Maximum Efficiency
          </h2>
          <p className="text-white/70 max-w-xl">
            We build intelligent AI agents that automate tasks, streamline workflows,
            and think like your best employee — only faster.
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className=" flex gap-8 overflow-hidden scroll-smooth pb-10 "
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </div>

          {/* Progress Line */}
          <div className="relative h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-400 to-purple-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-6">
            <Button
              size="icon"
              className="rounded-full w-14 h-14 cursor-pointer hover:bg-gradient-to-r from-purple-950 to-orange-900"
              onClick={() => scroll("left")}
            >
              <ArrowLeft className="w-6 h-6 text-white ci" />
            </Button>
            <Button
              size="icon"
              className="rounded-full w-14 h-14 cursor-pointer hover:bg-gradient-to-r  from-orange-950 to-purple-900"
              onClick={() => scroll("right")}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, role, image, text }) {
  return (
    <Card className="min-w-[380px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-xl">
      <CardContent className="p-8 space-y-6">
        <div className="flex justify-center">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full border-2 border-orange-400"
          />
        </div>

        <div className="flex justify-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400" />
          ))}
        </div>

        <p className="text-white/80 text-center leading-relaxed">“{text}”</p>

        <div className="text-center">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
