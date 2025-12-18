import { useState } from "react";
import bgImage from "@/components/img/bg/faq-bg.png";
import logo from "@/components/img/logo/logo.png";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import google from "@/components/img/bg/about-sicon.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50 active:scale-95 transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto
          bg-black/95 md:bg-transparent p-6 md:p-0 gap-6 md:gap-8 rounded-b-xl`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm font-medium">
            {/* HOME */}
            <li className="relative group">
              <button
                onClick={() => toggleDropdown("home")}
                className="flex items-center gap-1 hover:text-orange-900 active:text-orange-700"
              >
                HOME <ChevronDown size={14} />
              </button>

              {/* Dropdown */}
              <ul
                className={`absolute left-0 mt-3 w-48 rounded-md bg-black/90 border border-white/10 transition-all duration-200
                  ${openDropdown === "home" ? "block" : "hidden"} md:group-hover:block`}
              >
                <li className="px-4 py-2 hover:bg-white/20 cursor-pointer" onClick={() => navigate("/")}>Main Home</li>
                <li className="px-4 py-2 hover:bg-white/20 cursor-pointer" onClick={() => navigate("/home")}>Home Details</li>
              </ul>
            </li>

            {/* ABOUT */}
            <li className="hover:text-orange-900 active:text-orange-700 cursor-pointer"  onClick={() => navigate("/get-started")}>
              ABOUT
            </li>

            {/* SERVICES */}
            <li className="relative group">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center gap-1 hover:text-orange-900 active:text-orange-700"
        
              >
                SERVICES <ChevronDown size={14} />
              </button>

              <ul
                className={`absolute left-0 mt-3 w-48 rounded-md bg-black/90 border border-white/10 transition-all duration-200
                  ${openDropdown === "services" ? "block" : "hidden"} md:group-hover:block`}
              >
                <li className="px-4 py-2 hover:bg-white/20 cursor-pointer" onClick={() => navigate("/services")}>Service Details</li>
              </ul>
            </li>

            {/* PAGES */}
            <li className="relative group">
              <button
                onClick={() => toggleDropdown("pages")}
                className="flex items-center gap-1 hover:text-orange-900 active:text-orange-700"
              >
                PAGES <ChevronDown size={14} />
              </button>

              <ul
                className={`absolute left-0 mt-3 w-48 rounded-md bg-black/90 border border-white/10 transition-all duration-200
                  ${openDropdown === "pages" ? "block" : "hidden"} md:group-hover:block`}
              >
                <li className="px-4 py-2 hover:bg-white/20 cursor-pointer" onClick={() => navigate("/gallery")}>Case</li>
                <li className="px-4 py-2 hover:bg-white/20 cursor-pointer" onClick={() => navigate("/team")}>Team</li>
                <li className="px-4 py-2 hover:bg-white/20 cursor-pointer" onClick={() => navigate("/faq-details")}>FAQ</li>
              </ul>
            </li>

            {/* BLOG */}
            <li className="relative group">
              <button
                onClick={() => toggleDropdown("blog")}
                className="flex items-center gap-1 hover:text-orange-900 active:text-orange-700"
              >
                BLOG <ChevronDown size={14} />
              </button>

              <ul
                className={`absolute left-0 mt-3 w-48 rounded-md bg-black/90 border border-white/10 transition-all duration-200
                  ${openDropdown === "blog" ? "block" : "hidden"} md:group-hover:block`}
              >
                <li className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                onClick={() => navigate("/blog")}>Blog Details</li>
              </ul>
            </li>

            {/* CONTACT */}
            <li className="hover:text-orange-900 active:text-orange-700 cursor-pointer"
            onClick={() => navigate("/contact")}>
              CONTACT
            </li>
          </ul>

          {/* CTA Button */}
          <Button
            className="mt-4 md:mt-0 w-full md:w-[200px] h-[50px] md:h-[70px] bg-transparent border border-white/40 rounded-full text-lg font-semibold hover:border-white active:scale-95 active:opacity-80 transition flex items-center justify-center gap-3"
            onClick={() => navigate("/get-started")}
          >
            GET STARTED
            <span className="bg-gradient-to-r from-orange-900 to-purple-900 p-2 rounded-full">
              <ArrowRight size={28} />
            </span>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 mt-28 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 bg-black/40 mb-6 text-sm cursor-pointer hover:bg-gradient-to-r hover:from-orange-900 hover:to-purple-900 active:bg-gradient-to-r active:from-orange-900 active:to-purple-900 transition-all duration-500 ease-in-out"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Sparkles size={16} />
          More than 1k Project Finished
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-700 ease-in-out"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Your AI Partner for the <br /> Future of Work
        </motion.h1>

        <motion.p
          className="mt-6 text-white/70 max-w-2xl mx-auto transition-all duration-700 ease-in-out"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          We build intelligent AI agents that automate tasks, streamline workflows,
          and think like your best employee — only faster.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button className="h-[50px] sm:h-[60px] px-8 rounded-full bg-gradient-to-r from-orange-900 to-purple-900 font-semibold transition-transform duration-300 ease-in-out active:scale-95 hover:scale-105 flex items-center gap-3"
           onClick={() => navigate("/contact")}>
            BOOK A CALL
            <span className="bg-white text-black p-2 rounded-full transition-transform duration-300 ease-in-out group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </Button>

          <motion.img
            src={google}
            alt=""
            className="h-12 sm:h-16 transition-transform duration-300 ease-in-out hover:scale-105"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div
            className="flex items-center gap-3 text-white/80 transition-all duration-500 ease-in-out"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold">5</span>
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span>100+ 5 star</span>
          </motion.div>
        </motion.div>
      </section>
    </header>
  );
}
