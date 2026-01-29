import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Shoe rack images
import r3jb from "../assets/images/shoe-rack/3r2.jpeg"
import r3ji from "../assets/images/shoe-rack/3rr2.jpeg"
import r3jg from "../assets/images/shoe-rack/jg3-2.jpeg"
import r4jb from "../assets/images/shoe-rack/4r2.jpeg"
import r4ji from "../assets/images/shoe-rack/4rr2.jpeg"
import r5jb from "../assets/images/shoe-rack/5r2.jpeg"
import r5ji from "../assets/images/shoe-rack/5rr2.jpeg"
import r5jg from "../assets/images/shoe-rack/jg5-2.jpeg"

import r2_1 from "../assets/images/shoe-rack/2r1.jpeg"
import r2_2 from "../assets/images/shoe-rack/2r2.jpeg"
import r2_3 from "../assets/images/shoe-rack/2r3.jpeg"
import r2_4 from "../assets/images/shoe-rack/2r4.jpeg"

import r2rr2 from "../assets/images/shoe-rack/2rr2.jpeg"
import r2rr3 from "../assets/images/shoe-rack/2rr3.jpeg"
import r2rr4 from "../assets/images/shoe-rack/2rr4.jpeg"
import r2rr5 from "../assets/images/shoe-rack/2rr5.jpeg"

import jg2_1 from "../assets/images/shoe-rack/jg2-1.jpeg"
import jg2_2 from "../assets/images/shoe-rack/jg2-2.jpeg"
import jg2_3 from "../assets/images/shoe-rack/jg2-3.jpeg"
import jg2_4 from "../assets/images/shoe-rack/jg2-4.jpeg"

import r3_1 from "../assets/images/shoe-rack/3r1.jpeg"
import r3_2 from "../assets/images/shoe-rack/3r2.jpeg"
import r3_3 from "../assets/images/shoe-rack/3r3.jpeg"
import r3_4 from "../assets/images/shoe-rack/3r4.jpeg"

import r3ji_1 from "../assets/images/shoe-rack/3rr1.jpeg"
import r3ji_2 from "../assets/images/shoe-rack/3rr2.jpeg"
import r3ji_3 from "../assets/images/shoe-rack/3rr3.jpeg"
import r3ji_4 from "../assets/images/shoe-rack/3rr4.jpeg"

import r3jg_1 from "../assets/images/shoe-rack/jg31.jpeg"
import r3jg_2 from "../assets/images/shoe-rack/jg32.jpeg"
import r3jg_3 from "../assets/images/shoe-rack/jg33.jpeg"
import r3jg_4 from "../assets/images/shoe-rack/jg34.jpeg"

import r4jb_1 from "../assets/images/shoe-rack/4r1.jpeg"
import r4jb_2 from "../assets/images/shoe-rack/4r2.jpeg"
import r4jb_3 from "../assets/images/shoe-rack/4r3.jpeg"
import r4jb_4 from "../assets/images/shoe-rack/4r4.jpeg"

import r4ji_1 from "../assets/images/shoe-rack/4rr1.jpeg"
import r4ji_2 from "../assets/images/shoe-rack/4rr2.jpeg"
import r4ji_3 from "../assets/images/shoe-rack/4rr3.jpeg"
import r4ji_4 from "../assets/images/shoe-rack/4rr4.jpeg"

import r4jg_1 from "../assets/images/shoe-rack/jg3-1.jpeg"
import r4jg_2 from "../assets/images/shoe-rack/jg3-2.jpeg"
import r4jg_3 from "../assets/images/shoe-rack/jg3-3.jpeg"
import r4jg_4 from "../assets/images/shoe-rack/jg3-4.jpeg"

import r5jb_1 from "../assets/images/shoe-rack/5r1.jpeg"
import r5jb_2 from "../assets/images/shoe-rack/5r2.jpeg"
import r5jb_3 from "../assets/images/shoe-rack/5r3.jpeg"
import r5jb_4 from "../assets/images/shoe-rack/5r4.jpeg"

import r5ji_1 from "../assets/images/shoe-rack/5rr1.jpeg"
import r5ji_2 from "../assets/images/shoe-rack/5rr2.jpeg"
import r5ji_3 from "../assets/images/shoe-rack/5rr3.jpeg"
import r5ji_4 from "../assets/images/shoe-rack/5rr4.jpeg"

import r5jg_1 from "../assets/images/shoe-rack/jg5-1.jpeg"
import r5jg_2 from "../assets/images/shoe-rack/jg5-2.jpeg"
import r5jg_3 from "../assets/images/shoe-rack/jg5-3.jpeg"
import r5jg_4 from "../assets/images/shoe-rack/jg5-4.jpeg"

import rb3_1 from "../assets/images/shoe-rack/rb3-1.jpeg"
import rb3_2 from "../assets/images/shoe-rack/rb3-2.jpeg"
import rb3_3 from "../assets/images/shoe-rack/rb3-3.jpeg"
import rb3_4 from "../assets/images/shoe-rack/rb3-4.jpeg"

import ri3_1 from "../assets/images/shoe-rack/ri3-1.jpeg"
import ri3_2 from "../assets/images/shoe-rack/ri3-2.jpeg"
import ri3_3 from "../assets/images/shoe-rack/ri3-3.jpeg"
import ri3_4 from "../assets/images/shoe-rack/ri3-4.jpeg"

import rg3_1 from "../assets/images/shoe-rack/rg3-1.jpeg"
import rg3_2 from "../assets/images/shoe-rack/rg3-2.jpeg"
import rg3_3 from "../assets/images/shoe-rack/rg3-3.jpeg"
import rg3_4 from "../assets/images/shoe-rack/rg3-4.jpeg"

import rb4_1 from "../assets/images/shoe-rack/rb4-1.jpeg"
import rb4_2 from "../assets/images/shoe-rack/rb4-2.jpeg"
import rb4_3 from "../assets/images/shoe-rack/rb4-3.jpeg"
import rb4_4 from "../assets/images/shoe-rack/rb4-4.jpeg"

import ri4_1 from "../assets/images/shoe-rack/ri4-1.jpeg"
import ri4_2 from "../assets/images/shoe-rack/ri4-2.jpeg"
import ri4_3 from "../assets/images/shoe-rack/ri4-3.jpeg"
import ri4_4 from "../assets/images/shoe-rack/ri4-4.jpeg"

import rg4_1 from "../assets/images/shoe-rack/rg4-1.jpeg"
import rg4_2 from "../assets/images/shoe-rack/rg4-2.jpeg"
import rg4_3 from "../assets/images/shoe-rack/rg4-3.jpeg"
import rg4_4 from "../assets/images/shoe-rack/rg4-4.jpeg"

import rb5_1 from "../assets/images/shoe-rack/rb5-1.jpeg"
import rb5_2 from "../assets/images/shoe-rack/rb5-2.jpeg"
import rb5_3 from "../assets/images/shoe-rack/rb5-3.jpeg"
import rb5_4 from "../assets/images/shoe-rack/rb5-4.jpeg"

import ri5_1 from "../assets/images/shoe-rack/ri5-1.jpeg"
import ri5_2 from "../assets/images/shoe-rack/ri5-2.jpeg"
import ri5_3 from "../assets/images/shoe-rack/ri5-3.jpeg"
import ri5_4 from "../assets/images/shoe-rack/ri5-4.jpeg"

import rg5_1 from "../assets/images/shoe-rack/rg5-1.jpeg"
import rg5_2 from "../assets/images/shoe-rack/rg5-2.jpeg"
import rg5_3 from "../assets/images/shoe-rack/rg5-3.jpeg"
import rg5_4 from "../assets/images/shoe-rack/rg5-4.jpeg"

const shoeRackItems = [
    { img: r2_2, label: "2 Rack Jumbo" },
    { img: r3jb, label: "3 Rack Jumbo" },
    { img: rb3_2, label: "3 Rack Regular" },
    { img: r4jb, label: "4 Rack Jumbo" },
    { img: rb4_2, label: "4 Rack Regular" },
    { img: r5jb, label: "5 Rack Jumbo" },
    { img: rb5_2, label: "5 Rack Regular" },
]


const ShoeRack = () => {
    const rack2Images = [r2_1, r2_2, r2_3, r2_4]
    const rack2JIImages = [r2rr2, r2rr3, r2rr4, r2rr5]
    const rack2JGImages = [jg2_1, jg2_2, jg2_3, jg2_4]
    const rack3JBImages = [r3_1, r3_2, r3_3, r3_4]
    const rack3JIImages = [r3ji_1, r3ji_2, r3ji_3, r3ji_4]
    const rack3JGImages = [r3jg_1, r3jg_2, r3jg_3, r3jg_4]
    const rack4JBImages = [r4jb_1, r4jb_2, r4jb_3, r4jb_4]
    const rack4JIImages = [r4ji_1, r4ji_2, r4ji_3, r4ji_4]
    const rack4JGImages = [r4jg_1, r4jg_2, r4jg_3, r4jg_4]
    const rack5JBImages = [r5jb_1, r5jb_2, r5jb_3, r5jb_4]
    const rack5JIImages = [r5ji_1, r5ji_2, r5ji_3, r5ji_4]
    const rack5JGImages = [r5jg_1, r5jg_2, r5jg_3, r5jg_4]
    const rack3RBImages = [rb3_1, rb3_2, rb3_3, rb3_4]
    const rack3RIImages = [ri3_1, ri3_2, ri3_3, ri3_4]
    const rack3RGImages = [rg3_1, rg3_2, rg3_3, rg3_4]
    const rack4RBImages = [rb4_1, rb4_2, rb4_3, rb4_4]
    const rack4RIImages = [ri4_1, ri4_2, ri4_3, ri4_4]
    const rack4RGImages = [rg4_1, rg4_2, rg4_3, rg4_4]
    const rack5RBImages = [rb5_1, rb5_2, rb5_3, rb5_4]
    const rack5RIImages = [ri5_1, ri5_2, ri5_3, ri5_4]
    const rack5RGImages = [rg5_1, rg5_2, rg5_3, rg5_4]

    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openModal = (index) => {
        setCurrentIndex(index)
        setIsOpen(true)
    }

    const closeModal = () => setIsOpen(false)
    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % rack2Images.length)
    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? rack2Images.length - 1 : prev - 1
        )
    return (
        <div>
            <Navbar />

            <section className="pt-40 bg-[#F6F3ED] overflow-hidden">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Feature Strip */}
                    <div className="relative rounded-[32px] bg-[#1F2F45] p-10 sm:p-14 mb-20 text-[#F6F3ED]">
                        <div className="max-w-2xl">

                            <span className="text-sm uppercase tracking-wider text-[#C9A24D] font-semibold">
                                Our Services
                            </span>

                            <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-5">
                                Wall Mounted Shoe Rack
                            </h1>

                            <p className="text-[#F6F3ED]/85 text-lg leading-relaxed">
                                Smartly crafted wall-mounted shoe racks that save floor space,
                                keep footwear organized, and blend seamlessly into everyday living
                                with neat, modern installation.
                            </p>

                            <div className="mt-8">
                                <h4 className="text-[#C9A24D] text-sm font-semibold mb-4 uppercase tracking-wide">
                                    Types of Shoe Racks{" "}
                                    <span className="text-[#F6F3ED]/70">(Click to View)</span>
                                </h4>

                                <div className="flex flex-wrap gap-3">
                                    <a href="#2rack" className="service-pill">2 Rack Jumbo</a>
                                    <a href="#3rack" className="service-pill">3 Rack Jumbo</a>
                                    <a href="#3rack-rb3" className="service-pill">3 Rack Regular</a>
                                    <a href="#4rack-jb4" className="service-pill">4 Rack Jumbo</a>
                                    <a href="#4rack-rb4" className="service-pill">4 Rack Regular</a>
                                    <a href="#5rack-jb5" className="service-pill">5 Rack Jumbo</a>
                                    <a href="#5rack-rb5" className="service-pill">5 Rack Regular</a>
                                </div>
                            </div>

                        </div>

                        <span className="absolute bottom-0 right-0 w-40 h-40 bg-[#C9A24D]/20 rounded-full blur-3xl"></span>
                    </div>

                    {/* Available Items */}
                    <div className="relative">
                        <h3 className="text-2xl font-extrabold text-[#1F2F45] mb-8">
                            Available Items
                        </h3>

                        <div className="mosquito-scroll">
                            {shoeRackItems.map((item, index) => (
                                <div className="mosquito-strip-card" key={index}>
                                    <img src={item.img} alt={item.label} />
                                    <div className="strip-content">
                                        <h4>{item.label}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 text-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-[#1F2F45] px-10 py-4 text-[#F6F3ED] font-semibold shadow-lg hover:bg-[#162235] transition"
                        >
                            Book a Free Consultation
                        </a>
                    </div>

                </div>
            </section>

            {/* 2-Rack Jumbo */}
            <section id="2rack" className="py-20 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            1 - 2 Rack
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            2-Rack Jumbo Shoe Rack – 6 Pairs (JB2)
                        </h2>
                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Compact and efficient wall-mounted shoe rack designed to save
                            floor space while neatly organizing everyday footwear.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Specs */}
                        <div className="flex items-center justify-center">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
                                <h3 className="text-xl font-bold mb-6">Product Specifications</h3>

                                <ul className="space-y-4 text-sm">
                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JB2</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 6 pairs of shoes</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-27½″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>9.200 kg</span>
                                    </li>
                                    <li>
                                        <strong className="font-semibold block mb-1">Raw Material:</strong>
                                        <p>
                                            Crafted from premium steel using
                                            <strong>0.6 mm panels</strong> and
                                            <strong>0.7 mm racks</strong>, finished with
                                            top-quality powder coating for lasting
                                            durability and superior quality.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Images */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack2Images.map((img, i) => (
                                <div
                                    key={i}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(i)}
                                >
                                    <img src={img} className="image-fit" alt="" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* 2-Rack Jumbo Shoe Rack – JI2 */}
            <section id="2rack-ji2" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            2 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            2-Rack Jumbo Shoe Rack – 6 Pairs (JI2)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Sleek wall-mounted shoe rack engineered for compact spaces,
                            offering efficient storage, sturdy steel construction, and a
                            clean modern finish with premium powder coating.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack2JIImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`2 Rack JI2 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JI2</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 6 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-27½″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>9.200 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">
                                            Raw Material
                                        </span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with
                                            top-quality powder coating for lasting
                                            durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2-Rack Jumbo Shoe Rack – JG2 */}
            <section id="2rack-jg2" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            2 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            2-Rack Jumbo Shoe Rack – 6 Pairs (JG2)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Strong and space-efficient wall-mounted shoe rack designed for
                            everyday use, combining sturdy steel construction with a
                            durable powder-coated finish for long-lasting performance.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JG2</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 6 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-27½″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>9.200 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">
                                            Raw Material
                                        </span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with
                                            top-quality powder coating for lasting
                                            durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Right: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack2JGImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`2 Rack JG2 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* 3-Rack Jumbo Shoe Rack – JB3 */}
            <section id="3rack" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            2 - 3 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            3-Rack Jumbo Shoe Rack – 9 Pairs (JB3)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Smartly designed wall-mounted shoe rack that saves floor space while securely
                            organizing footwear with premium steel construction and durable powder coating.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack3JBImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`3 Rack JB3 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JB3</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 9 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-41″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>13.100 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">
                                            Raw Material
                                        </span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder coating
                                            for superior durability and long-lasting performance.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 3-Rack Jumbo Shoe Rack – JI3 */}
            <section id="3rack-ji3" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            3 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            3-Rack Jumbo Shoe Rack – 9 Pairs (JI3)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Strong and space-saving wall-mounted shoe rack designed for everyday use,
                            offering durability, neat organization, and a premium powder-coated finish.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JI3</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 9 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-41″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>13.100 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">
                                            Raw Material
                                        </span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder coating
                                            for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Right: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack3JIImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`3 Rack JI3 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* 3-Rack Jumbo Shoe Rack – JG3 */}
            <section id="3rack-jg3" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            3 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            3-Rack Jumbo Shoe Rack – 9 Pairs (JG3)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Premium wall-mounted shoe rack engineered for strength and everyday
                            convenience, offering organized storage with a durable powder-coated
                            steel build.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack3JGImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`3 Rack JG3 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JG3</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 9 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-41″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>13.100 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">
                                            Raw Material
                                        </span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 3-Rack Regular Shoe Rack – RB3 */}
            <section id="3rack-rb3" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            3 Rack – Regular
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            3-Rack Regular Shoe Rack – 6 Pairs (RB3)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Compact and practical wall-mounted shoe rack designed for everyday use,
                            offering efficient storage with durable steel construction and a clean,
                            space-saving design.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>RB3</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 6 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-41″ × W-Out-19″ × W-In-18″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>21.400 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack3RBImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`3 Rack Regular RB3 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* 3-Rack Regular Shoe Rack – RI3 */}
            <section id="3rack-ri3" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            3 Rack – Regular
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            3-Rack Regular Shoe Rack – 6 Pairs (RI3)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Strong and space-efficient wall-mounted shoe rack designed for daily use,
                            offering neat organization, durable steel construction, and a premium
                            powder-coated finish.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Right: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack3RIImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`3 Rack Regular RI3 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Left: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>RI3</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 6 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-41″ × W-Out-19″ × W-In-18″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>21.400 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 3-Rack Regular Shoe Rack – RG3 */}
            <section id="3rack-rg3" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            3 Rack – Regular
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            3-Rack Regular Shoe Rack – 6 Pairs (RG3)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Compact and practical wall-mounted shoe rack designed for everyday use,
                            offering neat organization, durable steel construction, and a clean
                            powder-coated finish.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>RG3</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 6 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-41″ × W-Out-19″ × W-In-18″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>21.400 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Right: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack3RGImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`3 Rack Regular RG3 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* 4-Rack Jumbo Shoe Rack – JB4 */}
            <section id="4rack-jb4" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            3 - 4 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            4-Rack Jumbo Shoe Rack – 12 Pairs (JB4)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            A high-capacity wall-mounted shoe rack designed for larger households,
                            offering strong steel construction, neat organization, and a durable
                            powder-coated finish.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Right: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack4JBImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`4 Rack JB4 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Left: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JB4</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 12 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-54″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>16.800 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">
                                            Raw Material
                                        </span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 4-Rack Jumbo Shoe Rack – JI4 */}
            <section id="4rack-ji4" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            4 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            4-Rack Jumbo Shoe Rack – 12 Pairs (JI4)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            High-capacity wall-mounted shoe rack built for durability and daily
                            convenience, offering organized storage with a strong powder-coated
                            steel structure.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">



                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JI4</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 12 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-54″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>16.800 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">
                                            Raw Material
                                        </span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack4JIImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`4 Rack JI4 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* 4-Rack Jumbo Shoe Rack – JG4 */}
            <section id="4rack-jg4" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            4 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            4-Rack Jumbo Shoe Rack – 12 Pairs (JG4)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Heavy-duty wall-mounted shoe rack designed for higher storage needs,
                            combining strength, clean aesthetics, and long-lasting powder-coated steel.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Right: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack4JGImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`4 Rack JG4 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Left: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JG4</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 12 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-54″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>16.800 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 4-Rack Regular Shoe Rack – RB4 */}
            <section id="4rack-rb4" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            4 Rack – Regular
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            4-Rack Regular Shoe Rack – 8 Pairs (RB4)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Space-efficient wall-mounted shoe rack designed for medium-sized households,
                            offering organized storage, strong steel construction, and a neat
                            powder-coated finish for everyday durability.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>RB4</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 8 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-54″ × W-Out-19″ × W-In-18″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>14.50 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Right: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack4RBImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`4 Rack Regular RB4 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* 4-Rack Regular Shoe Rack – RI4 */}
            <section id="4rack-ri4" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            4 Rack – Regular
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            4-Rack Regular Shoe Rack – 8 Pairs (RI4)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Sleek wall-mounted shoe rack designed for everyday convenience,
                            offering organized storage, compact dimensions, and a durable
                            powder-coated steel finish suitable for modern homes.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack4RIImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`4 Rack Regular RI4 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>RI4</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 8 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-54″ × W-Out-19″ × W-In-18″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>14.50 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 4-Rack Regular Shoe Rack – RG4 */}
            <section id="4rack-rg4" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            4 Rack – Regular
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            4-Rack Regular Shoe Rack – 8 Pairs (RG4)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Strong and practical wall-mounted shoe rack designed for compact spaces,
                            providing reliable everyday storage with a clean design and durable
                            powder-coated steel construction.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">



                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>RG4</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 8 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-54″ × W-Out-19″ × W-In-18″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>14.50 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack4RGImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`4 Rack Regular RG4 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* 5-Rack Jumbo Shoe Rack – JB5 */}
            <section id="5rack-jb5" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            4 - 5 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            5-Rack Jumbo Shoe Rack – 15 Pairs (JB5)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Extra-large capacity wall-mounted shoe rack designed for spacious homes and
                            high-usage environments, offering superior strength, neat organization,
                            and long-lasting powder-coated steel construction.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack5JBImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`5 Rack JB5 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JB5</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 15 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-67″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>21.400 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 5-Rack Jumbo Shoe Rack – JI5 */}
            <section id="5rack-ji5" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            5 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            5-Rack Jumbo Shoe Rack – 15 Pairs (JI5)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Large-capacity wall-mounted shoe rack crafted for strength and convenience,
                            delivering reliable storage with a premium powder-coated steel finish.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JI5</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 15 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-67″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>21.400 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Right: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack5JIImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`5 Rack JI5 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* 5-Rack Jumbo Shoe Rack – JG5 */}
            <section id="5rack-jg5" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            5 Rack
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            5-Rack Jumbo Shoe Rack – 15 Pairs (JG5)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Heavy-duty wall-mounted shoe rack designed for maximum storage capacity,
                            combining robust steel construction with a clean, modern powder-coated finish.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack5JGImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`5 Rack JG5 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>JG5</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 15 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-67″ × W-Out-25″ × W-In-24″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>21.400 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 5-Rack Regular Shoe Rack – RB5 */}
            <section id="5rack-rb5" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            5 Rack – Regular
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            5-Rack Regular Shoe Rack – 10 Pairs (RB5)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Extra-capacity wall-mounted shoe rack designed for modern homes,
                            offering efficient organization, robust steel construction, and
                            a clean powder-coated finish for long-lasting everyday use.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>RB5</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 10 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-67″ × W-Out-19″ × W-In-18″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>17 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack5RBImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`5 Rack Regular RB5 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* 5-Rack Regular Shoe Rack – RI5 */}
            <section id="5rack-ri5" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            5 Rack – Regular
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            5-Rack Regular Shoe Rack – 10 Pairs (RI5)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            High-capacity wall-mounted shoe rack engineered for durability and
                            daily convenience, offering organized storage with a premium
                            powder-coated steel finish.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Right: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack5RIImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`5 Rack Regular RI5 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Left: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>RI5</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 10 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-67″ × W-Out-19″ × W-In-18″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>17 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 5-Rack Regular Shoe Rack – RG5 */}
            <section id="5rack-rg5" className="py-20 bg-[#F6F3ED] scroll-mt-40">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-12">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            5 Rack – Regular
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            5-Rack Regular Shoe Rack – 10 Pairs (RG5)
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-3 max-w-3xl">
                            Heavy-duty wall-mounted shoe rack designed for maximum storage capacity,
                            combining robust steel construction with a clean, modern powder-coated finish.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Right: Specifications */}
                        <div className="flex items-center justify-center py-8 lg:py-0">
                            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                                <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                    Product Specifications
                                </h3>

                                <ul className="space-y-4 text-sm text-[#1F2F45]/85">

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Model Number</span>
                                        <span>RG5</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Capacity</span>
                                        <span>Accommodates 10 pairs of shoes</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Dimensions</span>
                                        <span>H-67″ × W-Out-19″ × W-In-18″ × D-5″</span>
                                    </li>

                                    <li className="flex justify-between border-b pb-2">
                                        <span className="font-semibold">Shipping Weight</span>
                                        <span>17 kg</span>
                                    </li>

                                    <li className="pt-2">
                                        <span className="font-semibold block mb-1">Raw Material</span>
                                        <p>
                                            Crafted from premium steel using{" "}
                                            <strong>0.6 mm panels</strong> and{" "}
                                            <strong>0.7 mm racks</strong>, finished with top-quality powder
                                            coating for lasting durability and superior quality.
                                        </p>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        {/* Left: Image Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {rack5RGImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="image-card cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`5 Rack Regular RG5 image ${index + 1}`}
                                        className="image-fit"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* COMMON MODAL */}
            <ImageModal
                images={rack2Images}
                index={currentIndex}
                isOpen={isOpen}
                onClose={closeModal}
                onNext={nextImage}
                onPrev={prevImage}
            />

            <Footer />
        </div>
    )
}

export default ShoeRack


import { useState, useEffect } from "react"

const ImageModal = ({ images, index, isOpen, onClose, onNext, onPrev }) => {
    useEffect(() => {
        if (!isOpen) return

        const handleKey = (e) => {
            if (e.key === "ArrowRight") onNext()
            if (e.key === "ArrowLeft") onPrev()
            if (e.key === "Escape") onClose()
        }

        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4"
            onClick={onClose}
        >
            <div className="relative" onClick={(e) => e.stopPropagation()}>

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-white w-9 h-9 rounded-full
          flex items-center justify-center text-xl font-bold shadow z-10"
                >
                    ×
                </button>

                {/* Image */}
                <img
                    src={images[index]}
                    alt="Preview"
                    className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
                />

                {/* Desktop Nav */}
                <button
                    onClick={onPrev}
                    className="hidden md:flex absolute left-[-3rem] top-1/2 -translate-y-1/2
          w-10 h-10 rounded-full bg-white text-black shadow text-xl font-bold
          items-center justify-center"
                >
                    ‹
                </button>

                <button
                    onClick={onNext}
                    className="hidden md:flex absolute right-[-3rem] top-1/2 -translate-y-1/2
          w-10 h-10 rounded-full bg-white text-black shadow text-xl font-bold
          items-center justify-center"
                >
                    ›
                </button>

                {/* Mobile Nav */}
                <div className="flex gap-3 justify-end mt-4 md:hidden">
                    <button
                        onClick={onPrev}
                        className="w-9 h-9 rounded-full bg-white text-black shadow
            flex items-center justify-center text-xl font-bold"
                    >
                        ‹
                    </button>

                    <button
                        onClick={onNext}
                        className="w-9 h-9 rounded-full bg-white text-black shadow
            flex items-center justify-center text-xl font-bold"
                    >
                        ›
                    </button>
                </div>

            </div>
        </div>
    )
}