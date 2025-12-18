import { ArrowRight, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Images from "@/components/img/logo/process-img.png";
import services from "@/components/img/logo/sevices-side-banner.png";
import sinle from "@/components/img/bg/single-icon-01.png";
import sinle2 from "@/components/img/bg/single-icon-02.png";
import FAQSection from "@/components/form/Faq";
import Footer from "@/components/form/Footer";
import { useNavigate } from "react-router-dom";

export default function ServiceDetails() {
     const navigate = useNavigate()
  return (
    <main className="w-full bg-black text-white overflow-hidden">

      {/* HEADER */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">Services Details</h1>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-sm">
            <Home size={16} /> <p onClick={() => navigate("/")} className="cursor-pointer"> Home </p>• Services Details
          </div>
        </div>
      </section>

      {/* SERVICES + CALL */}
      <section className="px-6 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden bg-gradient-to-br from-orange-600 to-blue-700"
        >
          
          <div className="relative">
            <img
              src={services}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>
        </motion.div>

        {/* SERVICE CARDS */}
        
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
            {
            title: "Voice Recognition & AI Speech Systems",
            img: sinle,
            },
            {
            title: "AI Integration for Web & Mobile Apps",
            img: sinle2,
            },
        ].map((item, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-black border border-white/10"
            >
            {/* Image */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
                />
            </div>

            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-white/70">
                For example, in e-commerce, an AI agency may implement a product
                recommendation engine to improve conversions and customer engagement.
            </p>
            </motion.div>
        ))}
        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 lg:px-24 pb-24 space-y-6">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="text-white/70 max-w-4xl">
          In today’s fast-paced digital world, AI agencies play a crucial role in helping
          companies remain competitive. We build custom AI tools such as chatbots,
          recommendation engines, fraud detection systems, predictive analytics models,
          virtual assistants, and AI-generated content platforms.
        </p>
      </section>

      {/* TURNING IDEAS */}
      <section className="px-6 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={Images}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* STEPS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-4xl font-bold">Turning Ideas into Intelligent Systems</h2>

          {["A fully customized Executive Assistant SOP", "A fresh operational perspective on your workflows", "Early access to hire top graduates"].map((text, i) => (
            <div key={i} className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-br from-slate-900 to-black border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center text-xl font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-semibold">{text}</p>
            </div>
          ))}
        </motion.div>
      </section>
      <FAQSection />
      <Footer />
    </main>
  );
}
