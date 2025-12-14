import {
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Send,
  MapPin,
  Phone,
} from "lucide-react"
import bgImage from "@/components/img/bg/footer-bg.png"
import logo from "@/components/img/logo/logo.png"

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-16 pt-24 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10">

        {/* Logo + Newsletter */}
        <div className="space-y-6">
          <img src={logo} alt="Logo" className="w-32" />

          <h4 className="text-lg font-medium">
            Subscribe our <br /> Newsletter
          </h4>

          <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your Email..."
              className="bg-transparent px-4 py-3 text-sm outline-none flex-1 text-white placeholder:text-white/50"
            />
            <button className="w-12 h-12 cursor-pointer flex items-center justify-center bg-gradient-to-r from-orange-500 to-purple-600">
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h5 className="font-semibold">Services</h5>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="hover:text-white cursor-pointer">Wizards</li>
            <li className="hover:text-white cursor-pointer">Creative</li>
            <li className="hover:text-white cursor-pointer">Blueprint</li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h5 className="font-semibold">Company</h5>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Latest Service</li>
            <li className="hover:text-white cursor-pointer">Work Process</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <div>
            <h5 className="font-semibold flex items-center gap-2">
              <MapPin size={16} className="text-orange-500" />
              Address
            </h5>
            <p className="text-sm text-white/70 mt-2">
              4517 Washington Ave.
              <br />
              Manchester, Kentucky 39495
            </p>
          </div>

          <div>
            <h5 className="font-semibold flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              Call
            </h5>
            <p className="text-sm text-white/70 mt-2">
              (239) 555-0108
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <SocialIcon><Facebook size={16} /></SocialIcon>
            <SocialIcon><Instagram size={16} /></SocialIcon>
            <SocialIcon><Twitter size={16} /></SocialIcon>
            <SocialIcon><Dribbble size={16} /></SocialIcon>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>
          Copyright & Design By{" "}
          <span className="text-white">@Zcubethemes</span> – 2025. All Rights Reserved
        </p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Use</span>
          <span className="hover:text-white cursor-pointer">Security</span>
        </div>
      </div>
    </footer>
  )
}

/* Social Icon */
function SocialIcon({ children }) {
  return (
    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gradient-to-r from-orange-900 to-purple-900 transition cursor-pointer">
      {children}
    </div>
  )
}
