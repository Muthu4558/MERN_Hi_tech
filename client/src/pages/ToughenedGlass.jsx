import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Images
import t1 from "../assets/images/toughenedGlass/t1.jpeg";
import t2 from "../assets/images/toughenedGlass/t2.jpeg";
import t3 from "../assets/images/toughenedGlass/t3.jpeg";
import t4 from "../assets/images/toughenedGlass/t4.jpeg";
import t5 from "../assets/images/toughenedGlass/t5.jpeg";
import t6 from "../assets/images/toughenedGlass/t6.jpeg";

const ToughenedGlass = () => {
    const images = [t1, t2, t3, t4, t5, t6];

    // const images = [t1, t2, t3, t4, t5, t6, t7];

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
                                Toughened Glass Doors
                            </h1>

                            <p className="text-[#F6F3ED]/85 text-lg leading-relaxed">
                                Elegantly engineered toughened glass doors, delivering clarity,
                                resilience, and refined design with sturdy, neat installation.
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
                                <div
                                    key={index}
                                    className="mosquito-strip-card"
                                >
                                    <img
                                        src={img}
                                        alt={`Toughened Glass Door ${index + 1}`}
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
                            Space Saving Solutions
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mt-2">
                            Toughened Glass Doors
                        </h2>

                        <p className="text-[#1F2F45]/80 mt-4 max-w-3xl">
                            Premium toughened glass doors designed to enhance safety,
                            maximize natural light, and add a sleek modern finish to homes and commercial spaces.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left: Key Benefits */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                                Key Benefits
                            </h3>

                            <ul className="space-y-4 text-sm text-[#1F2F45]/85">
                                <li>
                                    <strong>Exceptional Strength:</strong>{" "}
                                    Manufactured through a controlled thermal process, making the glass
                                    up to five times stronger than normal glass.
                                </li>

                                <li>
                                    <strong>Enhanced Safety:</strong>{" "}
                                    Breaks into small, blunt pebble-like pieces, reducing injury risk.
                                </li>

                                <li>
                                    <strong>Thermal Resistance:</strong>{" "}
                                    Withstands sudden temperature changes up to 250°C.
                                </li>

                                <li>
                                    <strong>Optimal Security:</strong>{" "}
                                    Acts as a strong deterrent against forced entry and vandalism.
                                </li>

                                <li>
                                    <strong>Easy Maintenance:</strong>{" "}
                                    Scratch-resistant, stain-resistant, and easy to clean.
                                </li>
                            </ul>
                        </div>

                        {/* Right: Applications */}
                        <div className="bg-[#1F2F45] rounded-2xl p-8 text-[#F6F3ED]">
                            <h3 className="text-xl font-bold mb-6 text-[#C9A24D]">
                                Applications
                            </h3>

                            <ul className="space-y-4 text-sm">
                                <li>✔ Patio & Main Entry Doors</li>
                                <li>✔ Shower Enclosures</li>
                                <li>✔ Interior Glass Partitions</li>
                                <li>✔ Storefronts & Commercial Entrances</li>
                                <li>✔ Office Cabins & Meeting Rooms</li>
                                <li>✔ Facades, Balustrades & Elevator Doors</li>
                            </ul>
                        </div>

                    </div>

                    {/* Customization Options */}
                    <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-xl font-bold text-[#1F2F45] mb-6">
                            Customization & Design Options
                        </h3>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <span className="service-pill text-black">Clear Glass</span>
                            <span className="service-pill text-black">Frosted / Etched Glass</span>
                            <span className="service-pill text-black">Tinted / Colored Glass</span>
                            <span className="service-pill text-black">Framed Designs</span>
                            <span className="service-pill text-black">Frameless Designs</span>
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
                                    alt={`Toughened Glass Door ${index + 1}`}
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

export default ToughenedGlass;
