import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import loo from "@/components/img/logo/who-img.png";
import li from "@/components/img/bg/single-icon-02.png";
import l from "@/components/img/bg/single-icon-01.png";

export default function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.section
      className="min-h-screen bg-black text-white flex items-center px-4 sm:px-6 md:px-16"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Image */}
        <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
          <Card className="overflow-hidden border-0 rounded-2xl shadow-2xl bg-transparent w-full max-w-[500px]">
            <img
              src={loo}
              alt="AI illustration"
              className="w-full h-auto object-cover"
            />
          </Card>
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeUp} className="space-y-6 md:space-y-8 text-center lg:text-left">
          {/* Badge */}
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-gradient-to-r from-orange-900 to-purple-900 text-zinc-200 w-fit mx-auto lg:mx-0">
            <Sparkles className="w-4 h-4" />
            who we are
          </motion.span>

          {/* Heading */}
          <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            AI-Powered Automation for <br className="hidden sm:block" /> Modern Businesses
          </motion.h1>

          {/* Feature cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <CardContent className="p-6 space-y-4 text-center sm:text-left hover:scale-105 transition-transform duration-500">
              <img src={li} className="mx-auto sm:mx-0" />
              <h3 className="text-xl md:text-2xl font-bold">AI Development</h3>
              <p className="text-base md:text-lg text-zinc-400">
                Builds AI-powered apps, automation tools, recommendation engines, chatbots, etc.
              </p>
            </CardContent>

            <CardContent className="p-6 space-y-4 text-center sm:text-left hover:scale-105 transition-transform duration-500">
              <img src={l} className="mx-auto sm:mx-0" />
              <h3 className="text-xl md:text-2xl font-semibold">AI Integrations</h3>
              <p className="text-base md:text-lg text-zinc-400">
                Connects AI tools with CRMs, ERPs, websites, and mobile applications.
              </p>
            </CardContent>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
