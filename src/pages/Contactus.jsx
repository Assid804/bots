import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ArrowUpRight, Home } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function ContactPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isFormValid =
    formData.firstName.trim() &&
    formData.email.includes("@") &&
    formData.phone.trim() &&
    formData.subject.trim() &&
    formData.message.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isFormValid) return

    setSubmitted(true)
    console.log("Form submitted:", formData)

    // reset if you want
    setFormData({
      firstName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-slate-900 to-orange-900 text-white">

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-blue-600 px-4 py-2 text-sm">
            <Home className="w-4 h-4" />
            <p onClick={() => navigate("/")} className="cursor-pointer">Home</p>
            • Contact Us
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-6">
          {[
            { icon: <MapPin />, title: "Address", text: "Mirpur 12, Dhaka, Bangladesh" },
            { icon: <Phone />, title: "Phone Number", text: "+(008) 012589631" },
            { icon: <Mail />, title: "E-mail", text: "example@gmail.com" },
          ].map((item, i) => (
            <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-xl">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FORM */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Send Us Free Message</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white/10 border-white/10"
                />
                <Input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/10"
                />
                <Input
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border-white/10"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/10 border-white/10"
                />
              </div>

              <Textarea
                name="message"
                placeholder="Write comments"
                value={formData.message}
                onChange={handleChange}
                className="mt-4 bg-white/10 border-white/10 min-h-[120px]"
              />

              <Button
                type="submit"
                disabled={!isFormValid}
                className={`mt-6 w-full ${
                  isFormValid
                    ? "bg-black hover:bg-black/80"
                    : "bg-black/40 cursor-not-allowed"
                }`}
              >
                SEND NOW <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>

              {submitted && (
                <p className="mt-4 text-green-400 text-sm text-center">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </section>

      <section className="relative h-[60vh]">
        <iframe
          title="map"
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps?q=Scottsdale&output=embed"
        />

        <div className="absolute bottom-6 left-6 bg-orange-600 text-white rounded-xl p-4 flex items-center gap-3 shadow-lg">
          <Phone />
          <div>
            <p className="text-xs">Need help?</p>
            <p className="font-semibold">(406) 555-0120</p>
          </div>
        </div>
      </section>

      {/* SCROLL TO TOP */}
      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shadow-lg">
        <ArrowUpRight />
      </button>
    </div>
  )
}
