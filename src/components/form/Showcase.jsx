import React from "react";
import Image from "@/components/img/logo/protfolio-img01.png";
import Image2 from "@/components/img/logo/protfolio-img02.png";
import Image3 from "@/components/img/logo/protfolio-img03.png";
import Image4 from "@/components/img/logo/protfolio-img04.png";
import Image5 from "@/components/img/logo/protfolio-img05.png";

const Showcase = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-16 py-20">
      
      {/* Heading */}
      <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-12 sm:mb-16 text-center md:text-left md:ml-[-53px]">
        Work <br className="hidden md:block" /> Showcase
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {[Image, Image3, Image5].map((img, i) => (
            <div
              key={i}
              className="
                overflow-hidden rounded-xl
                transition-transform duration-300
                active:scale-[0.98]
              "
            >
              <img
                src={img}
                alt=""
                className="
                  w-full
                  transition-transform duration-500 ease-out
                  hover:scale-110
                  active:scale-105
                  cursor-pointer
                "
              />
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {[Image2, Image4].map((img, i) => (
            <div
              key={i}
              className="
                overflow-hidden rounded-xl
                transition-transform duration-300
                active:scale-[0.98]
              "
            >
              <img
                src={img}
                alt=""
                className="
                  w-full
                  transition-transform duration-500 ease-out
                  hover:scale-110
                  active:scale-105
                  cursor-pointer
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Showcase;
