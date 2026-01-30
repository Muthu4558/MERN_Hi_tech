import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import mn2 from "../assets/images/hero/hero-b-1.jpeg"
import s3 from "../assets/images/hero/hero-b-3.jpeg"
import r3 from "../assets/images/shoe-rack/3r2.jpeg"
import t1 from "../assets/images/toughenedGlass/t1.jpeg"
import u3 from "../assets/images/hero/hero-b-4.jpeg"
import a3 from "../assets/images/acp/a3.jpeg"
import p8 from "../assets/images/pvc/p8.jpeg"
import f5 from "../assets/images/false-ceiling/f5.jpeg"
import af4 from "../assets/images/aluminum/af4.jpeg"
import Logo from "../assets/hitech-logo-footer.jpeg"

const slides = [
  { img: Logo, label: "HiTech Enterprises" },
  { img: mn2, label: "Mosquito Nets" },
  { img: s3, label: "Ceiling Cloth Hangers" },
  { img: r3, label: "Wall Mounted Shoe Rack" },
  { img: t1, label: "Toughened Glass Doors" },
  { img: u3, label: "UPVC Windows & Doors" },
  { img: a3, label: "ACP Cladding Works" },
  { img: p8, label: "PVC Loft Cupboards" },
  { img: f5, label: "False Ceiling Works" },
  { img: af4, label: "Aluminium Fabrication" },
]

const Hero = () => {
  return (
    <section className="w-full bg-[#F6F3ED] pt-36 sm:pt-44 pb-16 sm:pb-24">
      <div className="mx-auto w-[92%] max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left */}
        <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="w-8 h-[3px] bg-[#C9A24D]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#C9A24D] uppercase">
              Trusted Fabrication Experts
            </span>
            <span className="w-10 h-[3px] bg-[#C9A24D]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-[#1F2F45]">
            Practical Home Solutions <br className="hidden sm:block" />
            <span className="text-[#C9A24D]">& Fabrication</span>
          </h1>

          <p className="text-base sm:text-lg text-[#2B2B2B]/80 max-w-xl mx-auto lg:mx-0">
            Specialists in <strong>Mosquito Nets</strong>, <strong>Safety Doors</strong>, and{" "}
            <strong>Smart Space-Saving Installations</strong> designed for modern homes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="rounded-full bg-[#1F2F45] px-8 py-3 text-[#F6F3ED] font-semibold shadow-lg hover:bg-[#162235] transition"
            >
              Contact Us Today
            </a>

            <a
              href="#service"
              className="rounded-full border-2 border-[#C9A24D] px-8 py-3 text-[#1F2F45] font-semibold hover:bg-[#C9A24D] transition"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="order-2 bg-white rounded-3xl shadow-xl p-4 sm:p-6 w-full max-w-md sm:max-w-lg">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={20}
            className="rounded-2xl overflow-hidden"
          >
            {slides.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="relative">
                  <img
                    src={s.img}
                    alt={s.label}
                    className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {s.label}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4 bg-[#1F2F45] rounded-xl p-3 sm:p-4 text-[#F6F3ED]">
            <p className="font-semibold text-sm sm:text-base">
              Space • Comfort • Quality
            </p>
            <p className="text-xs sm:text-sm opacity-90">
              Custom solutions tailored for your home
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
