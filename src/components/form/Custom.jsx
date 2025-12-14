import { motion } from "framer-motion"
import Image3 from '@/components/img/logo/protfolio-img03.png'
import Image4 from '@/components/img/logo/protfolio-img04.png'

const steps = [
  {
    step: "STEP 01",
    title: "Discovery & Strategy",
    text: "We analyze your business goals, challenges, and data to design the best AI roadmap.",
  },
  {
    step: "STEP 02",
    title: "Design & Development",
    text: "We architect, design, and develop custom AI solutions tailored to your needs.",
  },
  {
    step: "STEP 03",
    title: "Integration & Testing",
    text: "We integrate AI into your systems and rigorously test for performance and reliability.",
  },
  {
    step: "STEP 04",
    title: "Launch & Optimization",
    text: "We deploy, monitor, and continuously optimize your AI solution for growth.",
  },
]

export default function CustomAISolutions() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-4 sm:px-6 md:px-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span>Custom AI</span>
          <img src={Image3} alt="" className="w-20 sm:w-24 h-auto inline-block" />
          <span>Solutions</span>
          <span className="w-full block"></span>
          <span>for</span>
          <img src={Image4} alt="" className="w-20 sm:w-24 h-auto inline-block" />
          <span>Every Industry</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-2xl border border-orange-500/40 bg-gradient-to-b from-black to-[#0b0b0b] p-6 min-h-[300px] overflow-hidden"
          >
            {/* Step badge */}
            <span className="inline-block text-xs px-3 py-1 rounded-md border border-white/20 text-white/70 mb-6">
              {item.step}
            </span>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-6">{item.title}</h3>

            {/* Bottom gradient box */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-gradient-to-br from-orange-900/40 to-blue-900/40 p-4 text-sm text-white/80">
              {item.text}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
