import { Link } from "react-router-dom"
import {
//   FaPhoneAlt,
  FaEnvelope,
  FaLocationDot,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6"
import { MdCall } from "react-icons/md"
import FooterLogo from "../assets/hitech-logo-footer.jpeg"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#1F2F45] text-[#F6F3ED] mt-20">

      {/* Curve */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[80px] sm:h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,20 480,20 720,50 960,80 1200,80 1440,40 L1440,0 L0,0 Z"
            fill="#F6F3ED"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative pt-24 sm:pt-32 pb-10">
        <div className="mx-auto w-[92%] max-w-7xl">

          {/* Top Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-10 border-b border-white/20 text-center sm:text-left">

            {/* Brand */}
            <div className="flex flex-col items-center sm:items-start">
              <img
                src={FooterLogo}
                alt="Hi Tech Enterprises"
                width={140}
                className="rounded-2xl mb-5"
              />
              <p className="text-sm text-[#F6F3ED]/80 leading-relaxed max-w-xs">
                Practical, space-saving, and everyday home solutions designed for
                modern living with quality and care.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-[#C9A24D]">Services</h4>
              <ul className="space-y-2 text-sm text-[#F6F3ED]/80">
                <li><Link to="/mosquito-nets" className="hover:text-[#C9A24D] transition">Mosquito Nets</Link></li>
                <li><Link to="/ceiling-cloth" className="hover:text-[#C9A24D] transition">Ceiling Cloth Hangers</Link></li>
                <li><Link to="/shoe-rack" className="hover:text-[#C9A24D] transition">Wall Mounted Shoe Racks</Link></li>
                <li><Link to="/upvc" className="hover:text-[#C9A24D] transition">Windows & Doors</Link></li>
                <li><Link to="/aluminum" className="hover:text-[#C9A24D] transition">Fabrication Works</Link></li>
                <li><Link to="/pvc" className="hover:text-[#C9A24D] transition">PVC Interiors</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-[#C9A24D]">Contact</h4>
              <ul className="space-y-3 text-sm text-[#F6F3ED]/80">

                <li className="flex items-center justify-center sm:justify-start gap-3">
                  <MdCall className="text-[#C9A24D]" />
                  <a href="tel:+916374335075" className="hover:text-[#C9A24D] transition">
                    +91 63743 35075
                  </a>
                </li>

                <li className="flex items-center justify-center sm:justify-start gap-3">
                  <FaEnvelope className="text-[#C9A24D]" />
                  <a href="mailto:mailtohitech15@gmail.com" className="hover:text-[#C9A24D] transition">
                    mailtohitech15@gmail.com
                  </a>
                </li>

                <li className="flex items-center justify-center sm:justify-start gap-3">
                  <FaLocationDot className="text-[#C9A24D]" />
                  <span>Chennai, Tamil Nadu</span>
                </li>

              </ul>
            </div>

            {/* CTA + Social */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="font-semibold mb-4 text-[#C9A24D]">Get in Touch</h4>
              <p className="text-sm text-[#F6F3ED]/80 mb-4 max-w-xs">
                Ready to upgrade your home? Contact us today.
              </p>

              <Link
                to="/contact"
                className="inline-block rounded-full bg-[#C9A24D] px-6 py-2 text-[#1F2F45] font-semibold shadow hover:bg-[#d9b463] transition mb-6"
              >
                Contact Us
              </Link>

              {/* Social */}
              <div className="flex gap-4">
                <SocialIcon href="#" icon={<FaInstagram />} />
                <SocialIcon href="https://wa.me/916374335075" icon={<FaWhatsapp />} />
                <SocialIcon href="#" icon={<FaXTwitter />} />
              </div>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#F6F3ED]/70 text-center sm:text-left">

            <p>© {year} Hi Tech Enterprises. All rights reserved.</p>

            <p>
              Developed by{" "}
              <a
                href="https://musitechhub.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#C9A24D] hover:underline"
              >
                musitechhub
              </a>
            </p>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

/* ---------- Reusable ---------- */

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full border border-[#C9A24D]
               flex items-center justify-center
               text-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#1F2F45]
               transition"
  >
    {icon}
  </a>
)
