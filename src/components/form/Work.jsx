import { ArrowRight, Sparkles } from "lucide-react"
import bgImage from "@/components/img/bg/faq-bg.png";

export default function Work() {
  return (
     <header
         className="w-full min-h-screen bg-cover bg-center text-white"
         style={{ backgroundImage: `url(${bgImage})` }}
       >
      
      {/* Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center mt-[150px]">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-md border border-orange-900 bg-gradient-to-r  to-purple-900 px-4 py-2 text-sm text-white/80 mb-8">
          <Sparkles size={16} className="text-purple-400" /> Work Process
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
          Smarter Solutions,
          <br />
          <span className="block mt-2">Powered by Intelligence</span>
        </h1>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* Book a Call */}
          <button className="group flex items-center cursor-pointer gap-4 rounded-full bg-gradient-to-r from-orange-900 to-purple-900 px-8 py-4 text-white font-medium shadow-2xl transition hover:scale-105 ">
            BOOK A CALL
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </button>

          {/* Get Started */}
          <button className="group flex items-center cursor-pointer gap-4 rounded-full border border-white/30 px-8 py-4 text-white font-medium transition shadow-xl hover:bg-gradient-to-r from-orange-900 to-purple-900">
            GET STARTED
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 transition group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </button>

        </div>
      </div>
    </header>
  )
}
