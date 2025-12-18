import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/components/img/bg/sr-img-01.png";
import logo2 from "@/components/img/bg/sr-img-02.png";
import logo3 from "@/components/img/bg/sr-img-03.png";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const cards = [
    {
      image: logo,
      title: "AI Strategy & Consultation",
      description:
        "We help businesses define a clear and achievable AI strategy tailored to their industry.",
    },
    {
      image: logo2,
      title: "AI-Powered Chatbots",
      description:
        "Boost customer engagement with intelligent chatbots powered by NLP.",
    },
    {
      image: logo3,
      title: "Computer Vision Solutions",
      description:
        "From facial recognition to object detection, we analyze visual data in real time.",
    },
  ];

  const tags = [
    "MACHINE LEARNING",
    "IMAGE INNOVATORS",
    "DEEP LEARNING",
    "NEURAL NETWORKS",
    "COMPUTER VISION",
    "GENERATIVE AI",
    "AI MODELS",
  ];

  return (
    <motion.section
      className="bg-black text-white px-4 sm:px-6 md:px-16 py-16"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl leading-tight text-center md:text-left">
          From Ideas to Intelligent <br className="hidden sm:block" /> Automation
        </h1>

        <Button
          className="bg-transparent border border-white/40 w-full md:w-[200px] h-[50px] md:h-[70px] rounded-full text-base md:text-lg font-semibold hover:border-white active:scale-95 active:opacity-80 transition flex items-center justify-center gap-3"
         onClick={() => navigate("/get-started")}
        >
          All Service
          <span className="bg-gradient-to-r from-orange-900 to-purple-900 p-2 rounded-full">
            <ArrowRight size={22} className="md:w-7 md:h-7" />
          </span>
        </Button>
      </motion.div>

      {/* Cards */}
      <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div key={i} variants={fadeUp}>
            <Card className="bg-black shadow-2xl border-zinc-800 rounded-2xl min-h-[420px] hover:scale-[1.02] active:scale-95 transition">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-white font-semibold text-center">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-center">
                <p className="text-base md:text-lg text-zinc-300">{card.description}</p>
                <div className="flex justify-center pt-8 lg:pt-14">
                  <img
                    src={card.image}
                    alt=""
                    className="w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-[320px] transition-transform hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Tags */}
      <motion.div variants={fadeUp} className="mt-14 flex flex-wrap gap-3 justify-center">
        {tags.map((tag, i) => (
          <motion.span
            key={i}
            variants={fadeUp}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl cursor-pointer text-xs sm:text-sm font-semibold text-white border border-white/20 bg-gradient-to-r from-orange-900/40 to-purple-900/40 backdrop-blur-md hover:border-white active:scale-95 transition"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
