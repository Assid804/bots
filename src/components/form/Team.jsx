import React from "react"
import { Home, Share2 } from "lucide-react"
import { FaFacebookF, FaXTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import Hero from "./Hero"
import Footer from "./Footer"

const teamMembers = [
  {
    name: "Alister Cook",
    role: "Business & Management",
    img: "https://htmldemo.zcubethemes.com/bots/img/team/team01.png",
  },
  {
    name: "Theresa Webb",
    role: "Health & Care",
    img: "https://htmldemo.zcubethemes.com/bots/img/team/team02.png",
  },
  {
    name: "Darrell Steward",
    role: "Bachelor Law",
    img: "https://htmldemo.zcubethemes.com/bots/img/team/team03.png",
  },
  {
    name: "Cameron Diaz",
    role: "AI Engineer",
    img: "https://htmldemo.zcubethemes.com/bots/img/team/team04.png",
  },
  {
    name: "Robert Fox",
    role: "Product Designer",
    img: "https://htmldemo.zcubethemes.com/bots/img/team/team05.png",
  },
  {
    name: "Bessie Cooper",
    role: "Data Scientist",
    img: "https://htmldemo.zcubethemes.com/bots/img/team/team06.png",
  },
]

const Team = () => {
  const navigate = useNavigate()

  return (
    <main className="w-full bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">Team</h1>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-sm">
            <Home size={16} />
            <p onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </p>
            • Team
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="px-6 md:px-20 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
           <div
            key={i}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-black group"
            >
            {/* Image */}
            <img
                src={member.img}
                alt={member.name}
                className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Social Icons (HOVER) */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-3 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                {[
                <FaPinterestP />,
                <FaInstagram />,
                <FaXTwitter />,
                <FaFacebookF />,
                ].map((Icon, idx) => (
                <div
                    key={idx}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition"
                >
                    {Icon}
                </div>
                ))}
            </div>

            {/* Info */}
            <div className="p-6 bg-gradient-to-r from-blue-950 to-orange-900">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-white/70 text-sm mt-1">{member.role}</p>
            </div>
            </div>

          ))}
        </div>
      </section>
      <Hero />
      <Footer />
    </main>
  )
}

export default Team
