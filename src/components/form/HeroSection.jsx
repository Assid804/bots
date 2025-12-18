import { motion } from "framer-motion";
import logo from '@/components/img/icon/c-icon-01.png';
import logo3 from '@/components/img/bg/who-ani-02.png';
import logo2 from '@/components/img/icon/c-icon-02.png';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function HeroSection() {

  const navigate = useNavigate();


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
      className="bg-black text-white px-6 sm:px-8 py-16 flex flex-col md:flex-row items-center md:justify-between min-h-[800px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Left side */}
      <motion.div className="flex flex-col md:w-1/2 space-y-6 items-center md:items-start" variants={fadeUp}>
        {/* Logo */}
        <motion.div className="w-24 h-24 sm:w-32 sm:h-32 -mt-16 sm:-mt-32" variants={fadeUp}>
          <img src={logo3} alt="Zynko Logo" className="w-full h-full object-contain" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left leading-snug"
          variants={fadeUp}
        >
          Powering <br /> Possibilities with <br /> AI
        </motion.h1>

        {/* CTA Button */}
        <motion.div variants={fadeUp}>
          <Button
            className="
              bg-transparent border border-white/40
              w-[180px] sm:w-[200px] h-[50px] sm:h-[70px]
              rounded-full text-lg font-semibold
              hover:border-white
              active:scale-95 active:opacity-80
              transition
              flex items-center justify-center gap-3
            "
            onClick={() => navigate("/get-started")}
          >
            READ MORE
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 p-2 rounded-full">
              <ArrowRight size={28} />
            </span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right side */}
      <motion.div className="md:w-1/2 mt-10 md:mt-0 space-y-6" variants={fadeUp}>
        <motion.p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left" variants={fadeUp}>
          At Zynko, we are a <span className="text-orange-500">team of passionate</span>{" "}
          <span className="text-purple-600">innovators</span>, engineers, and strategists dedicated to transforming businesses through the power of Artificial Intelligence
        </motion.p>

        <motion.p className="text-gray-400 text-lg sm:text-2xl md:text-3xl text-center md:text-left" variants={fadeUp}>
          Our agency blends deep technical expertise with creative thinking to build tailored AI systems that enhance productivity, optimize operations, and unlock new growth opportunities.
        </motion.p>

        {/* Stats */}
        <motion.div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0 mt-6 justify-center md:justify-start" variants={fadeUp}>
          {/* Happy Clients */}
          <motion.div className="flex items-center gap-4 cursor-pointer hover:scale-105 active:scale-95 transition" variants={fadeUp}>
            <div className="p-3 rounded-full flex items-center justify-center">
              <img src={logo} alt="Happy Clients" className="w-16 sm:w-20 h-16 sm:h-20" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl sm:text-4xl">50k+</span>
              <span className="text-gray-400 text-sm sm:text-xl">Happy Clients</span>
            </div>
          </motion.div>

          {/* Successful Projects */}
          <motion.div className="flex items-center gap-4 cursor-pointer hover:scale-105 active:scale-95 transition" variants={fadeUp}>
            <div className="p-3 rounded-full flex items-center justify-center">
              <img src={logo2} alt="Successful Projects" className="w-16 sm:w-20 h-16 sm:h-20" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl sm:text-4xl">20k+</span>
              <span className="text-gray-400 text-sm sm:text-xl">Successful Projects</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
