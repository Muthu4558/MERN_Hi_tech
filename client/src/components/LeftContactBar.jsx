import { MdCall } from "react-icons/md"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"

const LeftContactBar = () => {
  return (
    <div className="fixed left-0 top-100 z-40 flex flex-col gap-4">

      <Item
        href="tel:+919047122225"
        bg="bg-[#1F2F45]"
        text="Call +91 90471 22225"
        icon={<MdCall size={20} />}
      />

      <Item
        href="https://wa.me/916374335075"
        bg="bg-[#25D366]"
        text="Chat on WhatsApp"
        icon={<FaWhatsapp size={20} />}
        external
      />

      <Item
        href="#"
        bg="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888]"
        text="Follow on Instagram"
        icon={<FaInstagram size={20} />}
        external
      />

    </div>
  )
}

export default LeftContactBar

/* ------------------------------------------------ */

const Item = ({ href, bg, text, icon, external }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    className="group relative flex items-center"
  >
    {/* ICON – only this is visible initially */}
    <div
      className={`w-12 h-12 rounded-r-3xl ${bg}
                  flex items-center justify-center
                  text-white shadow-lg z-10`}
    >
      {icon}
    </div>

    {/* SLIDING CONTENT – hidden initially */}
    <div
      className={`absolute left-0 h-12 ${bg}
                  rounded-full flex items-center
                  pl-14 pr-6 text-white text-sm font-medium
                  shadow-lg whitespace-nowrap
                  opacity-0 translate-x-[-10px]
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300 ease-out`}
    >
      {text}
    </div>
  </a>
)
