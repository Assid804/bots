import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from '@/components/img/bg/sr-img-01.png';
import logo2 from '@/components/img/bg/sr-img-02.png';
import logo3 from '@/components/img/bg/sr-img-03.png';

export default function ServicesSection() {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-16 py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl leading-tight text-center md:text-left">
          From Ideas to Intelligent <br className="hidden sm:block" /> Automation
        </h1>

        <Button className="bg-transparent border border-white/40 w-full md:w-[200px] h-[50px] md:h-[70px] rounded-full text-base md:text-lg font-semibold hover:border-white transition flex items-center justify-center gap-3">
          All Service
          <span className="bg-gradient-to-r from-orange-900 to-purple-900 p-2 rounded-full cursor-pointer">
            <ArrowRight size={22} className="md:w-7 md:h-7" />
          </span>
        </Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <Card className="bg-black shadow-2xl border-zinc-800 rounded-2xl min-h-[420px]">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-white font-semibold text-center">
              AI Strategy & Consultation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-base md:text-lg text-zinc-300">
              We help businesses define a clear and achievable AI strategy tailored to their industry.
            </p>
            <div className="flex justify-center pt-8 lg:pt-14">
              <img
                src={logo}
                className="w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-[320px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="bg-black shadow-2xl border-zinc-800 rounded-2xl min-h-[420px]">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-white font-semibold text-center">
              AI-Powered Chatbots
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-base md:text-lg text-zinc-300">
              Boost customer engagement with intelligent chatbots powered by NLP.
            </p>
            <div className="flex justify-center pt-8 lg:pt-14">
              <img
                src={logo2}
                className="w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-[320px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="bg-black shadow-2xl border-zinc-800 rounded-2xl min-h-[420px]">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-white font-semibold text-center">
              Computer Vision Solutions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-base md:text-lg text-zinc-300">
              From facial recognition to object detection, we analyze visual data in real time.
            </p>
            <div className="flex justify-center pt-8 lg:pt-14">
              <img
                src={logo3}
                className="w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-[320px]"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tags */}
      <div className="mt-14 flex flex-wrap gap-3 justify-center">
        {[
          "MACHINE LEARNING",
          "IMAGE INNOVATORS",
          "DEEP LEARNING",
          "NEURAL NETWORKS",
          "COMPUTER VISION",
          "GENERATIVE AI",
          "AI MODELS",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl cursor-pointer text-xs sm:text-sm font-semibold text-white border border-white/20 bg-gradient-to-r from-orange-900/40 to-purple-900/40 backdrop-blur-md hover:border-white transition"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
