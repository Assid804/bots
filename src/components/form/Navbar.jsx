import { useState } from "react";
import bgImage from "@/components/img/bg/faq-bg.png";
import logo from "@/components/img/logo/logo.png";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Sparkles, Menu, X } from "lucide-react";
import google from "@/components/img/bg/about-sicon.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* NAVBAR */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-8 pt-8 flex items-center justify-between relative">
        {/* Logo */}
        <div className="w-[120px] sm:w-[150px]">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent p-6 md:p-0 gap-6 md:gap-8 rounded-b-xl md:rounded-none transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-sm font-medium">
            {/* HOME */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-orange-900">
                HOME <ChevronDown size={14} />
              </div>
              <ul className="absolute left-0 mt-3 w-48 rounded-md bg-black/90 border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 md:block md:absolute">
                <li className="px-4 py-2 hover:bg-white/10">Main Home</li>
                <li className="px-4 py-2 hover:bg-white/10">Home Details</li>
              </ul>
            </li>

            {/* ABOUT */}
            <li className="cursor-pointer hover:text-orange-900">ABOUT</li>

            {/* SERVICES */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-orange-900">
                SERVICES <ChevronDown size={14} />
              </div>
              <ul className="absolute left-0 mt-3 w-48 rounded-md bg-black/90 border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 md:block md:absolute">
                <li className="px-4 py-2 hover:bg-white/10">Service Details</li>
              </ul>
            </li>

            {/* PAGES */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-orange-900">
                PAGES <ChevronDown size={14} />
              </div>
              <ul className="absolute left-0 mt-3 w-48 rounded-md bg-black/90 border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 md:block md:absolute">
                <li className="px-4 py-2 hover:bg-white/10">Case</li>
                <li className="px-4 py-2 hover:bg-white/10">Team</li>
                <li className="px-4 py-2 hover:bg-white/10">FAQ</li>
              </ul>
            </li>

            {/* BLOG */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-orange-900">
                BLOG <ChevronDown size={14} />
              </div>
              <ul className="absolute left-0 mt-3 w-48 rounded-md bg-black/90 border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 md:block md:absolute">
                <li className="px-4 py-2 hover:bg-white/10">Blog Details</li>
              </ul>
            </li>

            {/* CONTACT */}
            <li className="cursor-pointer hover:text-orange-900">CONTACT</li>
          </ul>

          {/* Button */}
          <Button className="mt-4 md:mt-0 bg-transparent border border-white/40 w-full md:w-[200px] h-[50px] md:h-[70px] rounded-full text-lg font-semibold hover:border-white transition flex items-center justify-center gap-3 cursor-pointer">
            GET STARTED
            <span className="bg-gradient-to-r from-orange-900 to-purple-900 p-2 rounded-full">
              <ArrowRight size={28} />
            </span>
          </Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 mt-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 bg-black/40 mb-6 text-sm mx-auto hover:bg-gradient-to-r from-orange-900 to-purple-900 cursor-pointer">
          <Sparkles size={16} className="text-purple-400" />
          More than 1k Project Finished
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Your AI Partner for the
          <br />
          Future of Work
        </h1>

        <p className="mt-6 text-white/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          We build intelligent AI agents that automate tasks, streamline workflows,
          and think like your best employee — only faster.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button className="h-[50px] sm:h-[60px] px-6 sm:px-8 rounded-full text-base font-semibold cursor-pointer bg-gradient-to-r from-orange-900 to-purple-900 flex items-center gap-3">
            BOOK A CALL
            <span className="bg-white text-black p-2 rounded-full">
              <ArrowRight size={18} />
            </span>
          </Button>

          <img src={google} alt="" className="h-12 sm:h-16" />

          <div className="flex items-center gap-3 text-sm sm:text-base text-white/80">
            <span className="text-xl font-semibold">5</span>
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span>100+ 5 star</span>
          </div>
        </div>
      </section>
    </header>
  );
}
