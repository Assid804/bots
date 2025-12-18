import { ArrowRight, ArrowLeft, Play, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function HomePage() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -520, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 520, behavior: "smooth" });
  };

  return (
    <main className="w-full bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <Navbar />
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-24 gap-20 relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
          <span className="text-gray-500 tracking-widest">01</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">Think Net A</h1>
          <p className="text-gray-400 max-w-md">Intelligent neural automation for next-generation businesses</p>
          <Button className="rounded-full w-16 h-16 p-0 bg-gradient-to-br from-orange-500 to-purple-600">
            <ArrowRight />
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
          <img src="https://htmldemo.zcubethemes.com/bots/img/bg/sert-img-01.jpg" alt="AI Head" className="rounded-2xl shadow-2xl" />
        </motion.div>
      </section>

      {/* FEATURE STRIPS */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800">
        {["NEURO FLOW", "SYNAPTI CORE", "BRAIN GRID"].map((item, i) => (
          <div key={i} className="h-72 flex items-center justify-center border-r border-gray-800 relative">
            <span className="absolute top-6 left-6 text-gray-600">0{i + 2}</span>
            <span className="rotate-90 text-2xl tracking-[0.3em] text-white">{item}</span>
          </div>
        ))}
      </section>

      {/* DEEP LEARNING SECTION */}
      <section className="min-h-screen px-6 lg:px-24 flex items-center relative bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="max-w-4xl space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold">Building Smarter Systems with Deep Learning</h2>
          <p className="text-gray-400 text-lg">Build, train, and deploy intelligent models that solve complex problems—faster, smarter, and at scale.</p>
          <div className="flex items-center gap-6">
            <Button className="px-10 py-6 text-lg bg-gradient-to-r from-orange-500 to-purple-600">Get Started</Button>
           <a
            href="https://youtu.be/gyGsPlt06bo"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-20 h-20 rounded-full border border-gray-700 flex items-center justify-center hover:scale-110 transition cursor-pointer"
            >
            <Play />
            </a>

          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
<section className="px-6 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-black">
  
  {/* LEFT IMAGE */}
  <div className="relative">
    <img
      src="https://htmldemo.zcubethemes.com/bots/img/gallery/protfolio-img06.png"
      alt="Neural Network"
      className="rounded-2xl shadow-2xl"
    />
  </div>

  {/* RIGHT ACCORDION */}
  <div className="space-y-6">
    {[
      {
        id: "01",
        title: "Data Collection",
        content: "Gathering high-quality structured and unstructured data from multiple sources.",
      },
      {
        id: "02",
        title: "Model Design & Training",
        content:
          "This step involves choosing the right architecture and training the network on the data.",
      },
      {
        id: "03",
        title: "Evaluation & Tuning",
        content:
          "Optimizing performance through validation, fine-tuning, and iterative improvements.",
      },
      {
        id: "04",
        title: "Deployment & Monitoring",
        content:
          "Deploying models into production and continuously monitoring performance.",
      },
    ].map((item, index) => (
      <AccordionItem key={index} item={item} />
    ))}
    </div>
    </section>


      {/* STATS */}
      <section className="px-6 lg:px-24 py-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        <img src="https://htmldemo.zcubethemes.com/bots/img/features/about-img-02.png" className="rounded-xl object-cover h-full" />
        <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl flex flex-col items-center justify-center text-center p-8">
          <h3 className="text-5xl font-bold">50k+</h3>
          <span className="text-gray-400">Happy Clients</span>
        </div>
        <img src="https://htmldemo.zcubethemes.com/bots/img/features/about-img-03.png" className="rounded-xl object-cover h-full" />
        <div className="bg-gradient-to-br from-slate-900 to-black rounded-xl flex flex-col items-center justify-center text-center p-8">
          <h3 className="text-5xl font-bold">4.9★</h3>
          <span className="text-gray-400">100+ Reviews</span>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 lg:px-24 py-24 space-y-12">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-500">Our Clients Review</span>
            <h2 className="text-4xl font-bold mt-2">Seamless Integration<br />Maximum Efficiency</h2>
          </div>
          <div className="flex gap-4">
            <Button onClick={scrollLeft} size="icon" className="bg-gradient-to-br from-orange-500 to-purple-600"><ArrowLeft /></Button>
            <Button onClick={scrollRight} size="icon" className="bg-gradient-to-br from-orange-500 to-purple-600"><ArrowRight /></Button>
          </div>
        </div>

        <div ref={sliderRef} className="flex gap-10 overflow-hidden scroll-smooth no-scrollbar py-4">
          {[{ name: "Robert Fox", role: "President of Sales", img: "https://randomuser.me/api/portraits/men/32.jpg" },{ name: "Bessie Cooper", role: "President of Sales", img: "https://randomuser.me/api/portraits/women/44.jpg" },{ name: "Cameron Diaz", role: "Product Manager", img: "https://randomuser.me/api/portraits/women/68.jpg" }].map((user, i) => (
            <div key={i} className="min-w-[320px] md:min-w-[520px] bg-gradient-to-br from-slate-900 to-black rounded-2xl p-10 space-y-6 relative flex-shrink-0">
              <div className="flex gap-1 text-yellow-400">★ ★ ★ ★ ☆</div>
              <p className="text-gray-400 text-lg">The vibe here is top-tier, and the team actually listens to what you want. Definitely my go-to spot from now on.</p>
              <div className="flex items-center gap-4">
                <img src={user.img} alt={user.name} className="w-12 h-12 rounded-full object-cover border border-gray-700" />
                <div>
                  <h4 className="font-semibold text-lg">{user.name}</h4>
                  <span className="text-sm text-gray-500">{user.role}</span>
                </div>
              </div>
              <span className="absolute bottom-6 right-6 text-6xl text-gray-800">“</span>
            </div>
          ))}
        </div>
         
      </section>
      <Footer className="" />
    </main>

  );

  function AccordionItem({ item }) {
  const [open, setOpen] = useState(item.id === "02");

  return (
    <div
      className={`rounded-xl border border-gray-700 transition-all overflow-hidden
        ${open ? "bg-gradient-to-br from-orange-500/30 to-purple-600/30" : "bg-transparent"}
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-lg">{item.id}</span>
          <h3 className="text-xl font-semibold">{item.title}</h3>
        </div>

        <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
          {open ? <Minus /> : <Plus />}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-gray-200 leading-relaxed">
          {item.content}
        </div>
      )}
    </div>
  );
}

}

