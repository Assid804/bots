import BlogSection from '@/components/form/Blog'
import CustomAISolutions from '@/components/form/Custom'
import FAQSection from '@/components/form/Faq'
import Footer from '@/components/form/Footer'
import Hero from '@/components/form/Hero'
import HeroSection from '@/components/form/HeroSection'
import Imaes from '@/components/form/Imaes'
import Navbar from '@/components/form/Navbar'
import ServicesSection from '@/components/form/ServicesSection'
import Showcase from '@/components/form/Showcase'
import ClientReviews from '@/components/form/Testimonials'
import Work from '@/components/form/Work'
import React from 'react'

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col gap-16 md:gap-24">
        <HeroSection />
        <Hero />
        <ServicesSection />
        <ClientReviews />
        <Imaes />
        <Showcase />
        <CustomAISolutions />
        <FAQSection />
        <Work />
        <BlogSection />
        <Footer />
      </main>
    </div>
  )
}

export default Home
