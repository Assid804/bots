import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import loo from "@/components/img/logo/who-img.png"
import li from "@/components/img/bg/single-icon-02.png"
import l from "@/components/img/bg/single-icon-01.png"

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-4 sm:px-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* Image */}
        <Card className="overflow-hidden border-0 rounded-2xl shadow-2xl bg-transparent w-full max-w-[500px] mx-auto">
          <img
            src={loo}
            alt="AI illustration"
            className="w-full h-auto object-cover"
          />
        </Card>

        {/* Content */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-gradient-to-r from-orange-900 to-purple-900 text-zinc-200 w-fit mx-auto lg:mx-0">
            <Sparkles className="w-4 h-4" />
            who we are
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            AI-Powered Automation for <br className="hidden sm:block" /> Modern Businesses
          </h1>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <CardContent className="p-6 space-y-4 text-center sm:text-left">
              <img src={li} className="mx-auto sm:mx-0" />
              <h3 className="text-xl md:text-2xl font-bold">AI Development</h3>
              <p className="text-base md:text-lg text-zinc-400">
                Builds AI-powered apps, automation tools, recommendation engines, chatbots, etc.
              </p>
            </CardContent>

            <CardContent className="p-6 space-y-4 text-center sm:text-left">
              <img src={l} className="mx-auto sm:mx-0" />
              <h3 className="text-xl md:text-2xl font-semibold">AI Integrations</h3>
              <p className="text-base md:text-lg text-zinc-400">
                Connects AI tools with CRMs, ERPs, websites, and mobile applications.
              </p>
            </CardContent>
          </div>
        </div>
      </div>
    </section>
  )
}
