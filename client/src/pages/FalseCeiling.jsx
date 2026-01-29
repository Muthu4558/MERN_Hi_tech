import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Images
import f1 from "../assets/images/false-ceiling/f1.jpeg";
import f2 from "../assets/images/false-ceiling/f2.jpeg";
import f3 from "../assets/images/false-ceiling/f3.jpeg";
import f4 from "../assets/images/false-ceiling/f4.jpeg";
import f5 from "../assets/images/false-ceiling/f5.jpeg";
import f6 from "../assets/images/false-ceiling/f6.jpeg";
import f7 from "../assets/images/false-ceiling/f7.jpeg";

const FalseCeiling = () => {
    const images = [f1, f2, f3, f4, f5, f6, f7];

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
                                False Ceiling Works
                            </h1>

                            <p className="text-[#F6F3ED]/85 text-lg leading-relaxed">
                                Elegantly crafted false ceiling works, offering long-lasting strength,
                                stylish design, and optimal performance with flawless installation.
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
                            {images.map((img, index) => (
                                <div className="mosquito-strip-card" key={index}>
                                    <img
                                        src={img}
                                        alt={`False Ceiling Work ${index + 1}`}
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
                            className="inline-flex items-center justify-center rounded-full
              bg-[#1F2F45] px-10 py-4 text-[#F6F3ED] font-semibold
              shadow-lg hover:bg-[#162235] transition"
                        >
                            Book a Free Consultation
                        </a>
                    </div>

                </div>
            </section>

            <section className="pt-20 pb-24 bg-[#F6F3ED] overflow-hidden">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="mb-14">
                        <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                            Elegant Interior Solutions
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            False Ceiling Works
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-4 max-w-3xl">
                            Expertly designed false ceiling solutions that enhance interiors,
                            improve acoustics and lighting, and bring a sleek, modern finish
                            to residential and commercial spaces.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left: Why Choose False Ceiling */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                Why Choose a False Ceiling?
                            </h3>

                            <ul className="space-y-4 text-sm text-[#1F2F45]/85">
                                <li>
                                    <strong>Hide Clutter:</strong>{" "}
                                    Conceals electrical wiring, AC ducts, pipes, and other
                                    structural elements for a clean finish.
                                </li>

                                <li>
                                    <strong>Energy Efficiency:</strong>{" "}
                                    Improves thermal insulation, keeping interiors cooler
                                    in summer and warmer in winter.
                                </li>

                                <li>
                                    <strong>Better Lighting:</strong>{" "}
                                    Seamlessly integrates recessed LEDs, cove lighting,
                                    spotlights, and chandeliers.
                                </li>

                                <li>
                                    <strong>Sound Control:</strong>{" "}
                                    Enhances acoustics and reduces echo in offices,
                                    conference rooms, and media spaces.
                                </li>
                            </ul>
                        </div>

                        {/* Right: Specialized Services */}
                        <div className="bg-[#1F2F45] rounded-2xl p-8 text-[#F6F3ED]">
                            <h3 className="text-xl font-bold mb-6 text-[#C9A24D]">
                                Our Specialized Services
                            </h3>

                            <ul className="space-y-4 text-sm">
                                <li>✔ Gypsum False Ceiling – Smooth, fire-resistant & lightweight</li>
                                <li>✔ POP (Plaster of Paris) – Ideal for curves & custom designs</li>
                                <li>✔ PVC Ceilings – Waterproof & low-maintenance</li>
                                <li>✔ Wooden & Metal Ceilings – Premium & durable finishes</li>
                                <li>✔ Grid (Drop) Ceilings – Easy maintenance for commercial spaces</li>
                            </ul>
                        </div>

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
                                    alt={`False Ceiling ${index + 1}`}
                                    className="w-full h-96 object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
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

export default FalseCeiling;
