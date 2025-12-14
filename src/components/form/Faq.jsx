import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Images from "@/components/img/gallery/pr-icon-arrow.png"

const faqs = [
  {
    id: "01",
    question: "What types of businesses can benefit from AI solutions?",
    answer:
      "Almost any business can benefit from AI—especially those in e-commerce, finance, healthcare, logistics, and customer service. If you have repetitive tasks, AI can help automate and optimize them.",
  },
  {
    id: "02",
    question: "How long does it take to build a custom AI solution?",
    answer:
      "Timelines vary based on complexity, but most custom AI solutions take between 4–12 weeks from discovery to deployment.",
  },
  {
    id: "03",
    question: "Do I need technical knowledge to work with your agency?",
    answer:
      "No technical background is required. We handle all the technical complexity and guide you through every step.",
  },
  {
    id: "04",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer continuous monitoring, optimization, and support to ensure your AI solution delivers long-term value.",
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            FAQ
          </h2>

          <img
            src={Images}
            alt=""
            className="rotate-180 w-24 sm:w-32 md:w-40 mt-6 opacity-60"
          />
        </div>

        {/* Right */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={faq.id}
              className="border border-white/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-md text-sm font-medium bg-gradient-to-r from-orange-600 to-purple-600">
                    {faq.id}
                  </span>
                  <span className="text-sm sm:text-lg font-medium">
                    {faq.question}
                  </span>
                </div>

                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-10 h-10 cursor-pointer rounded-full border border-white/20 flex items-center justify-center hover:bg-gradient-to-r from-purple-950 to-orange-900"
                >
                  {open === i ? <Minus /> : <Plus />}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/70 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 