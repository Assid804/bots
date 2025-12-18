// src/pages/GetStarted.jsx
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bgImage from "@/components/img/bg/faq-bg.png";
import TimelineImg from "@/components/img/logo/mission.png";
import { motion } from "framer-motion";
import logo from "@/components/img/logo/logo.png";
import vision from "@/components/img/logo/vision.png";
import Footer from "@/components/form/Footer";

export default function GetStarted() {
  const navigate = useNavigate();
  const missionRef = useRef(null);

  const milestones = [
    {
      year: "2025",
      description:
        "We help businesses define a clear and achievable AI strategy tailored to their industry. From identifying opportunities to creating actionable AI plans.",
    },
    {
      year: "2026",
      description:
        "Boost customer engagement with intelligent chatbots powered by NLP. These bots understand context and improve user experience.",
    },
  ];

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section
        className="w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-6 sm:px-8"
        style={{ backgroundImage: `url(${bgImage})` }}
      >

        <div className="w-[120px] sm:w-[150px]">
                  <img src={logo} alt="Logo" />
                </div>


        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
          Welcome to Zynko!
        </h1>
        <p className="text-white/70 text-center max-w-2xl mb-12">
          You’re just a few steps away from starting your journey with AI-powered
          solutions for your business. Let’s make your workflow smarter, faster, and
          more efficient.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            className="bg-gradient-to-r from-orange-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 hover:scale-105 transition"
            onClick={() => navigate("/")}
          >
            Go Back Home
            <ArrowRight size={20} />
          </Button>

          <Button
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 hover:scale-105 transition"
            onClick={scrollToMission}
          >
            See Our Mission
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* VISION SECTION */}
<section className="px-6 sm:px-8 md:px-16 py-24 bg-black">
  <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-600 via-purple-700 to-blue-700">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">

      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <img
          src={vision}
          alt="AI Automation"
          className="rounded-2xl w-full object-cover shadow-2xl"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <span className="inline-block text-sm border border-white/40 px-3 py-1 rounded-md">
          Our vision
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Next-Level Automation <br /> Starts Here
        </h2>

        {/* YEAR TOGGLE */}
        <div className="flex items-center gap-10 pt-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-orange-400" />
            <span className="font-semibold">2025</span>
          </div>

          <div className="h-px w-20 bg-white/30" />

          <div className="flex items-center gap-3 opacity-70">
            <span className="w-3 h-3 rounded-full border border-white" />
            <span className="font-semibold">2026</span>
          </div>
        </div>

        <p className="text-white/80 max-w-xl">
          In today’s fast-paced digital world, AI agencies play a crucial role
          in helping companies remain competitive. They build custom AI tools
          such as chatbots, recommendation engines, and fraud detection systems.
        </p>

        <Button className="mt-4 bg-black/40 border border-white/30 hover:bg-black/60 px-8 py-4 rounded-full">
          Learn More
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </motion.div>
    </div>
  </div>
</section>


      {/* Mission/Timeline Section */}
      <section
        ref={missionRef}
        className="bg-black text-white px-6 sm:px-8 md:px-16 py-20 flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Left: Timeline */}
        <div className="flex-1 space-y-12">
          <span className="text-sm text-white/50 border border-white/20 px-2 py-1 rounded">
            Our mission
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Reimagine What’s <br /> Possible with AI
          </h2>

          <div className="space-y-8 mt-6">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex gap-4 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-orange-500 bg-black mt-1" />
                  {i !== milestones.length - 1 && (
                    <div className="w-px flex-1 bg-white/20 mt-1" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.year}</h3>
                  <p className="text-white/70 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={TimelineImg}
            alt="AI concept"
            className="rounded-xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
