import React from 'react'
import Showcase from './Showcase'
import Footer from './Footer'
import { Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Gallary = () => {
     const navigate = useNavigate()
  return (
    <main className="w-full bg-black text-white overflow-hidden">
              {/* HEADER */}
              <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black">
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="relative z-10 text-center space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold">Gallery</h1>
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-sm">
                    <Home size={16} /> <p onClick={() => navigate("/")} className="cursor-pointer"> Home</p> • Gallery
                  </div>
                </div>
              </section>
              <Showcase />
              <Footer />
    </main>
  )
}

export default Gallary