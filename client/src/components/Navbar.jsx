import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
    FaBug,
    FaShoePrints,
    FaDoorOpen,
    FaWindowMaximize,
    FaLayerGroup,
    FaBox,
    FaBorderAll,
    FaIndustry,
    FaPhoneAlt,
} from "react-icons/fa"
import { GiHanger } from "react-icons/gi"
import { MdKeyboardArrowDown } from "react-icons/md"
import { HiMenuAlt3 } from "react-icons/hi"
import Logo from "../assets/hitech-logo-nav.png"
import ServiceLink from "./ServiceLink"

const MobileService = ({ to, icon, children }) => (
    <Link
        to={to}
        className="flex items-center gap-3 px-2 py-2 rounded-lg
               hover:bg-[#EDE9DF] transition text-[#1F2F45]"
    >
        <span className="text-[#C9A24D] text-lg">
            {icon}
        </span>
        <span className="font-medium">
            {children}
        </span>
    </Link>
)


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // scrolling DOWN
                setShowNavbar(false)
            } else {
                // scrolling UP
                setShowNavbar(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <nav
            className={`w-full flex justify-center pt-6 fixed top-0 left-0 z-50
      transition-transform duration-300 ease-in-out
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="w-[92%] max-w-7xl bg-[#F6F3ED] border border-black rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="md:h-20 h-16" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10 font-medium text-[#2B2B2B]">
                    <li><Link to="/" className="hover:text-[#C9A24D]">Home</Link></li>
                    {/* <li><a href="/#about-us" className="hover:text-[#C9A24D]">About Us</a></li> */}
                    <li>
                        <Link
                            to="/#about-us"
                            className="hover:text-[#C9A24D]"
                        >
                            About Us
                        </Link>
                    </li>
                    <li><Link to="/blog" className="hover:text-[#C9A24D]">Blog</Link></li>

                    {/* Services */}
                    <li className="relative group">
                        <button className="flex items-center gap-2 hover:text-[#C9A24D] cursor-pointer">
                            Services
                            <MdKeyboardArrowDown
                                size={18}
                                className="transition-transform group-hover:rotate-180"
                            />
                        </button>

                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[540px]
              bg-white rounded-2xl shadow-2xl opacity-0 invisible
              group-hover:opacity-100 group-hover:visible transition-all duration-300">

                            <div className="px-6 py-4 border-b border-black/10">
                                <p className="text-sm font-semibold text-[#1F2F45] uppercase tracking-wide">
                                    Our Services
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 p-6 text-sm">
                                <ServiceLink to="/mosquito-nets" icon={<FaBug />}>Mosquito Nets</ServiceLink>
                                <ServiceLink to="/ceiling-cloth" icon={<GiHanger />}>Ceiling Cloth Hangers</ServiceLink>
                                <ServiceLink to="/shoe-rack" icon={<FaShoePrints />}>Wall Mounted Shoe Racks</ServiceLink>
                                <ServiceLink to="/toughened-glass" icon={<FaDoorOpen />}>Toughened Glass Doors</ServiceLink>
                                <ServiceLink to="/upvc" icon={<FaWindowMaximize />}>UPVC Windows & Doors</ServiceLink>
                                <ServiceLink to="/acp" icon={<FaLayerGroup />}>ACP Cladding Works</ServiceLink>
                                <ServiceLink to="/pvc" icon={<FaBox />}>PVC Loft Cupboards</ServiceLink>
                                <ServiceLink to="/false-ceiling" icon={<FaBorderAll />}>False Ceiling Works</ServiceLink>
                                <ServiceLink to="/aluminum" icon={<FaIndustry />} full>
                                    All Kinds of Aluminum Fabrication Works
                                </ServiceLink>
                            </div>
                        </div>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="hidden md:flex gap-4">
                    <a
                        href="tel:+916374335075"
                        className="border border-[#C9A24D] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#C9A24D]"
                    >
                        <FaPhoneAlt /> Call
                    </a>

                    <Link
                        to="/contact"
                        className="rounded-full bg-[#1F2F45] px-6 py-2 text-white hover:bg-[#162235]"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden w-12 h-12 rounded-full flex items-center justify-center bg-[#1F2F45]"
                >
                    <HiMenuAlt3 className="text-white text-2xl" />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden absolute top-[140px] w-[92%] bg-[#F6F3ED] rounded-2xl shadow-xl p-6 border border-black">
                    <ul className="flex flex-col gap-5 font-medium">
                        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link to="/#about-us" onClick={() => setOpen(false)}>About Us</Link></li>
                        <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
                        <li>
                            <details>
                                <summary className="cursor-pointer">Services</summary>
                                <div className="mt-4 flex flex-col gap-3 text-sm">
                                    <MobileService to="/mosquito-nets" icon={<FaBug />}>Mosquito Nets</MobileService>
                                    <MobileService to="/ceiling-cloth" icon={<GiHanger />}>Ceiling Cloth </MobileService>
                                    <MobileService to="/shoe-rack" icon={<FaShoePrints />}>Wall Mounted Shoe Racks</MobileService>
                                    <MobileService to="/toughened-glass" icon={<FaDoorOpen />}>Toughened Glass Doors</MobileService>
                                    <MobileService to="/upvc" icon={<FaWindowMaximize />}>UPVC Windows & Doors</MobileService>
                                    <MobileService to="/acp" icon={<FaLayerGroup />}>ACP Cladding Works</MobileService>
                                    <MobileService to="/pvc" icon={<FaBox />}>PVC Loft Cupboards</MobileService>
                                    <MobileService to="/false-ceiling" icon={<FaBorderAll />}>False Ceiling Works</MobileService>
                                    <MobileService to="/aluminum" icon={<FaIndustry />}>All Kinds of Aluminum Fabrication Works</MobileService>
                                </div>

                            </details>
                        </li>
                        <li>  <div className="flex gap-4">
                            <a
                                href="tel:+916374335075"
                                className="border border-[#C9A24D] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#C9A24D]"
                            >
                                <FaPhoneAlt /> Call
                            </a>

                            <Link
                                to="/contact"
                                className="rounded-full bg-[#1F2F45] px-6 py-2 text-white hover:bg-[#162235]"
                            >
                                Contact Us
                            </Link>
                        </div></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
