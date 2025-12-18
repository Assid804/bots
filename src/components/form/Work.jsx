import { ArrowRight, Sparkles } from "lucide-react";
import bgImage from "@/components/img/bg/faq-bg.png";
import { useNavigate } from "react-router-dom";

export default function Work() {
  const navigate = useNavigate();
  return (
    <header
      className="relative w-full min-h-screen bg-cover bg-center text-white px-4 sm:px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center pt-32 sm:pt-40 md:pt-44">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-md border border-orange-900 bg-gradient-to-r to-purple-900 px-4 py-2 text-xs sm:text-sm text-white/80 mb-6 sm:mb-8">
          <Sparkles size={16} className="text-purple-400" />
          Work Process
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          Smarter Solutions,
          <br />
          <span className="block mt-2">Powered by Intelligence</span>
        </h1>

        {/* Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          
          {/* Book a Call */}
          <button
            className="
              group flex items-center gap-4 rounded-full
              bg-gradient-to-r from-orange-900 to-purple-900
              px-7 sm:px-8 py-3 sm:py-4
              text-sm sm:text-base font-medium
              shadow-2xl
              transition
              hover:scale-105
              active:scale-95
            "

             onClick={() => navigate("/contact")}
          >
            BOOK A CALL
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </button>

          {/* Get Started */}
          <button
            className="
              group flex items-center gap-4 rounded-full
              border border-white/30
              px-7 sm:px-8 py-3 sm:py-4
              text-sm sm:text-base font-medium
              shadow-xl
              transition
              hover:bg-gradient-to-r from-orange-900 to-purple-900
              active:scale-95
            "
             onClick={() => navigate("/get-started")}
          >
            GET STARTED
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/40 transition group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </button>

        </div>
      </div>
    </header>
  );
}
