import logo from '@/components/img/icon/c-icon-01.png';
import logo3 from '@/components/img/bg/who-ani-02.png';
import logo2 from '@/components/img/icon/c-icon-02.png';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';



export default function HeroSection() {
  return (
    <section className="bg-black text-white px-6 sm:px-8 py-16 flex flex-col md:flex-row items-center md:justify-between min-h-[800px]">
      
      {/* Left side - Logo & Headline */}
      <div className="flex flex-col md:w-1/2 space-y-6 items-center md:items-start">
        {/* Logo */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 -mt-16 sm:-mt-32">
          <img src={logo3} alt="Zynko Logo" className="w-full h-full object-contain" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left leading-snug">
          Powering <br /> Possibilities with<br/> AI
        </h1>

        <Button
          className="bg-transparent border border-white/40
          w-[180px] sm:w-[200px] h-[50px] sm:h-[70px] rounded-full
          text-lg font-semibold
          hover:border-white transition
          flex items-center justify-center gap-3 cursor-pointer"
        >
          READ MORE
          <span className="bg-gradient-to-r from-orange-500 to-purple-600 p-2 rounded-full">
            <ArrowRight size={28} />
          </span>
        </Button>
      </div>

      {/* Right side - Description */}
      <div className="md:w-1/2 mt-10 md:mt-0 space-y-6">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
          At Zynko, we are a <span className="text-orange-500">team of passionate</span> 
          <span className="text-purple-600"> innovators</span>, engineers, and strategists dedicated to transforming businesses through the power of Artificial Intelligence
        </p>
        <p className="text-gray-400 text-lg sm:text-2xl md:text-3xl text-center md:text-left">
          Our agency blends deep technical expertise with creative thinking to build tailored AI systems that enhance productivity, optimize operations, and unlock new growth opportunities.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0 mt-6 justify-center md:justify-start">
          {/* Happy Clients */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full flex items-center justify-center">
              <img src={logo} alt="Happy Clients" className="w-16 sm:w-20 h-16 sm:h-20" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl sm:text-4xl">50k+</span>
              <span className="text-gray-400 text-sm sm:text-xl">Happy Clients</span>
            </div>
          </div>

          {/* Successful Projects */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full flex items-center justify-center">
              <img src={logo2} alt="Successful Projects" className="w-16 sm:w-20 h-16 sm:h-20" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl sm:text-4xl">20k+</span>
              <span className="text-gray-400 text-sm sm:text-xl">Successful Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
