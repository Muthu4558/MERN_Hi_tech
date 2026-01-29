import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Images
import s1 from "../assets/images/ceilingCloth/s1.jpeg";
import s2 from "../assets/images/ceilingCloth/s2.jpeg";
import s3 from "../assets/images/ceilingCloth/s3.jpeg";
import s4 from "../assets/images/ceilingCloth/s4.jpeg";
import s5 from "../assets/images/ceilingCloth/s5.jpeg";
import s6 from "../assets/images/ceilingCloth/s6.jpeg";

const images = [s1, s2, s3, s4, s5, s6];

const CeilingCloth = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % images.length);

    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );

    // Keyboard support
    useEffect(() => {
        if (!isOpen) return;

        const handleKey = (e) => {
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeModal();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen]);

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
                                Ceiling Cloth Hangers
                            </h1>

                            <p className="text-[#F6F3ED]/85 text-lg leading-relaxed">
                                Elegantly engineered ceiling-mounted cloth hangers,
                                offering effortless drying, better ventilation, and
                                a clean aesthetic with sturdy installation.
                            </p>
                        </div>

                        {/* Decorative Blur */}
                        <span className="absolute bottom-0 right-0 w-40 h-40 bg-[#C9A24D]/20 rounded-full blur-3xl"></span>
                    </div>

                    {/* Available Items */}
                    <div className="relative">
                        <h3 className="text-2xl font-extrabold text-[#1F2F45] mb-8">
                            Available Items
                        </h3>

                        <div className="mosquito-scroll">
                            {[s1, s2, s3, s4, s5, s6].map((img, index) => (
                                <div className="mosquito-strip-card" key={index}>
                                    <img
                                        src={img}
                                        alt={`Ceiling Cloth Hanger ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="strip-content"></div>
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

            <section className="py-20 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-14">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            Space Saving Solutions
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            Ceiling Cloth Hangers
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-4 max-w-3xl">
                            Smart ceiling-mounted drying systems designed to save floor space,
                            keep clothes clean, and make daily laundry effortless for modern homes.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left: Specifications */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                Specifications
                            </h3>

                            <ul className="space-y-4 text-sm text-[#1F2F45]/85">
                                <li>
                                    <strong>Rods:</strong> Stainless steel non-magnetic rods, 18 gauge,
                                    3/4 inch strong rust-free construction
                                </li>

                                <li>
                                    <strong>Brackets:</strong> Metal brackets with 6 mm nylon wheel
                                </li>

                                <li>
                                    <strong>Ropes:</strong> Polypropylene ropes, 6 mm thickness,
                                    water-resistant
                                </li>

                                <li>
                                    <strong>Clips:</strong> Heavy-duty metal wall clips
                                </li>

                                <li>
                                    <strong>Warranty:</strong> 3 Years replacement warranty
                                </li>
                            </ul>

                            {/* Service Badges */}
                            <div className="flex flex-wrap gap-3 mt-6">
                                <span className="service-pill">Free Delivery</span>
                                <span className="service-pill text-black">Free Installation</span>
                                <span className="service-pill text-black">COD Available</span>
                            </div>
                        </div>

                        {/* Right: Benefits */}
                        <div className="bg-[#1F2F45] rounded-2xl p-8 text-[#F6F3ED]">
                            <h3 className="text-xl font-bold mb-6 text-[#C9A24D]">
                                Why Choose Our Cloth Hangers
                            </h3>

                            <ul className="space-y-4 text-sm">
                                <li>✔ Saves your floor space</li>
                                <li>✔ Keeps clothes away from dust and pets</li>
                                <li>✔ Rust-proof and long-lasting design</li>
                                <li>✔ Easy-to-use pulley system</li>
                                <li>✔ Ideal for apartments and compact homes</li>
                                <li>✔ Flexible height settings for easy access</li>
                                <li>✔ Dry more clothes without clutter</li>
                                <li>✔ Compact and stylish – complements modern interiors</li>
                            </ul>
                        </div>

                    </div>

                    {/* Size Variants */}
                    <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                            Size Variants
                        </h3>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <span className="service-pill text-black">4 Ft × 6 Rods</span>
                            <span className="service-pill text-black">5 Ft × 6 Rods</span>
                            <span className="service-pill text-black">6 Ft × 6 Rods</span>
                            <span className="service-pill text-black">7 Ft × 6 Rods</span>
                            <span className="service-pill text-black">8 Ft × 6 Rods</span>
                        </div>

                        <p className="mt-6 text-sm text-[#1F2F45]/80">
                            Available in <strong>Stainless Steel 202 Grade</strong> and{" "}
                            <strong>Stainless Steel 304 Grade</strong>.
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2F45]">
                            Product Gallery
                        </h3>
                        <p className="text-[#1F2F45]/70 mt-2">
                            Click any image to view in full size
                        </p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="image-card cursor-pointer"
                                onClick={() => openModal(index)}
                            >
                                <img
                                    src={img}
                                    alt={`Ceiling Cloth Hanger ${index + 1}`}
                                    className="w-full h-96 object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ===== MODAL ===== */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-3 -right-3 bg-white w-9 h-9 rounded-full
              flex items-center justify-center text-xl font-bold shadow z-10"
                        >
                            ×
                        </button>

                        {/* Image */}
                        <img
                            src={images[currentIndex]}
                            alt="Preview"
                            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
                        />

                        {/* Desktop Navigation */}
                        <button
                            onClick={prevImage}
                            className="hidden md:flex absolute left-[-3rem] top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full bg-white text-black shadow text-xl font-bold
              items-center justify-center"
                        >
                            ‹
                        </button>

                        <button
                            onClick={nextImage}
                            className="hidden md:flex absolute right-[-3rem] top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full bg-white text-black shadow text-xl font-bold
              items-center justify-center"
                        >
                            ›
                        </button>

                        {/* Mobile Navigation */}
                        <div className="flex gap-3 justify-end mt-4 md:hidden">
                            <button
                                onClick={prevImage}
                                className="w-9 h-9 rounded-full bg-white text-black shadow
                flex items-center justify-center text-xl font-bold"
                            >
                                ‹
                            </button>

                            <button
                                onClick={nextImage}
                                className="w-9 h-9 rounded-full bg-white text-black shadow
                flex items-center justify-center text-xl font-bold"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default CeilingCloth;
