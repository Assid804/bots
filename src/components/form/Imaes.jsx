import React from 'react'
import Image from '@/components/img/brand/b-logo1.png'
import Image2 from '@/components/img/brand/b-logo2.png'
import Image3 from '@/components/img/brand/b-logo3.png'
import Image4 from '@/components/img/brand/b-logo4.png'

const Images = () => {
  const logos = [Image, Image2, Image3, Image4]

  return (
    <section className="bg-black w-full py-12 px-4 sm:px-6 md:px-16 rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center place-items-center">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Brand logo ${i + 1}`}
            className="max-h-12 sm:max-h-14 md:max-h-16 opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  )
}

export default Images
