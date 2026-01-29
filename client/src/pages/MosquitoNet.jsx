import React, { useState } from "react";
import ImageLightbox from "../components/ImageLightbox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mn1 from "../assets/images/mosquito/mn1.jpeg";
import mn2 from "../assets/images/mosquito/mn2.jpeg";
import mn3 from "../assets/images/mosquito/mn3.jpeg";
import mn4 from "../assets/images/mosquito/mn4.jpeg";

import mg1 from "../assets/images/mosquito/mg1.jpeg";
import mg2 from "../assets/images/mosquito/mg2.jpeg";
import mg3 from "../assets/images/mosquito/mg3.jpeg";
import mg4 from "../assets/images/mosquito/mg4.jpeg";

import md1 from "../assets/images/mosquito/md1.jpeg";
import md2 from "../assets/images/mosquito/md2.jpeg";
import md3 from "../assets/images/mosquito/md3.jpeg";
import md4 from "../assets/images/mosquito/md4.jpeg";

import wo1 from "../assets/images/mosquito/wo1.jpeg";
import wo2 from "../assets/images/mosquito/wo2.jpeg";
import wo3 from "../assets/images/mosquito/wo3.jpeg";
import wo4 from "../assets/images/mosquito/wo4.jpeg";

import cd1 from "../assets/images/mosquito/cd1.jpeg";
import ps2 from "../assets/images/mosquito/ps2.jpeg";
import rs4 from "../assets/images/mosquito/rs4.jpeg";
import ss1 from "../assets/images/mosquito/ss1.jpeg";

import co1 from "../assets/images/mosquito/co1.jpeg";
import co2 from "../assets/images/mosquito/co2.jpeg";
import co3 from "../assets/images/mosquito/co3.jpeg";
import co4 from "../assets/images/mosquito/co4.jpeg";

import mo1 from "../assets/images/mosquito/mo1.jpeg";
import mo2 from "../assets/images/mosquito/mo2.jpeg";
import mo3 from "../assets/images/mosquito/mo3.jpeg";
import mo4 from "../assets/images/mosquito/mo4.jpeg";

import sd1 from "../assets/images/mosquito/sd1.jpeg";

import gd1 from "../assets/images/mosquito/gd1.jpeg";

import ps1 from "../assets/images/mosquito/ps1.jpeg";
import ps3 from "../assets/images/mosquito/ps3.jpeg";
import ps4 from "../assets/images/mosquito/ps4.jpeg";

import dp1 from "../assets/images/mosquito/dp1.jpeg";
import dp2 from "../assets/images/mosquito/dp2.jpeg";
import dp3 from "../assets/images/mosquito/dp3.jpeg";
import dp4 from "../assets/images/mosquito/dp4.jpeg";

import rs1 from "../assets/images/mosquito/rs1.jpeg";
import rs2 from "../assets/images/mosquito/rs2.jpeg";
import rs5 from "../assets/images/mosquito/rs5.jpeg";

import bs2 from "../assets/images/mosquito/bs2.jpeg";
import bs3 from "../assets/images/mosquito/bs3.jpeg";
import bs4 from "../assets/images/mosquito/bs4.jpeg";
import bs5 from "../assets/images/mosquito/bs5.jpeg";

import hp1 from "../assets/images/mosquito/hp1.jpeg";
import hp2 from "../assets/images/mosquito/hp2.jpeg";
import hp3 from "../assets/images/mosquito/hp3.jpeg";
import hp4 from "../assets/images/mosquito/hp4.jpeg";

import ss2 from "../assets/images/mosquito/ss2.jpeg";
import ss3 from "../assets/images/mosquito/ss3.jpeg";
import ss4 from "../assets/images/mosquito/ss4.jpeg";

import q1 from "../assets/images/quality/1.png";
import q2 from "../assets/images/quality/2.png";
import q3 from "../assets/images/quality/3.png";
import q4 from "../assets/images/quality/4.png";

const MosquitoNet = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImages, setCurrentImages] = useState([]);

    const systems = [
        { img: mn4, title: "Velcro System" },
        { img: mo4, title: "Window Openable System" },
        { img: cd1, title: "Door Openable System" },
        { img: ps2, title: "Pleated System" },
        { img: rs4, title: "Retractable System" },
        { img: ss1, title: "Sliding System" },
    ];

    const velcroImages = [mn1, mn2, mn3, mn4];
    const magneticImages = [mg1, mg2, mg3, mg4];
    const doorImages = [md1, md2, md3, md4];
    const windowOpenableImages = [wo1, wo2, wo3, wo4];
    const magneticOpenableImages = [mo1, mo2, mo3, mo4];
    const classicOpenableImages = [co1, co2, co3, co4];
    const doorOpenableImages = [cd1];
    const smartDoorImages = [sd1];
    const grillDoorImages = [gd1];
    const pleatedImages = [ps1, ps2, ps3, ps4];
    const dualPleatedImages = [dp1, dp2, dp3, dp4];
    const retractableImages = [rs1, rs2, rs4, rs5];
    const barrierfreeImages = [bs5, bs2, bs3, bs4];
    const honeycombImages = [hp1, hp2, hp3, hp4];
    const slidingImages = [ss1, ss2, ss3, ss4];


    const openLightbox = (images, index) => {
        setCurrentImages(images);
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const prevImage = () =>
        setCurrentIndex((i) => (i === 0 ? currentImages.length - 1 : i - 1));

    const nextImage = () =>
        setCurrentIndex((i) => (i === currentImages.length - 1 ? 0 : i + 1));

    return (
        <>
            <Navbar />

            {/* Mosquito Nets Page */}
            <section className="mosquito-page">
                <div className="container">

                    {/* Feature Strip */}
                    <div className="feature-strip">
                        <div className="feature-content">
                            <span className="feature-label">Our Services</span>

                            <h1 className="feature-title">Mosquito Net Systems</h1>

                            <p className="feature-desc">
                                Thoughtfully designed mosquito net solutions for windows and doors,
                                combining safety, airflow, and everyday comfort with neat installation.
                            </p>

                            <div className="feature-types">
                                <h4>
                                    6 Types of Mosquito Nets{" "}
                                    <span>(Click to View)</span>
                                </h4>

                                <div className="pill-group">
                                    <a href="#velcro" className="service-pill">Velcro</a>
                                    <a href="#window-openable" className="service-pill">Window Openable</a>
                                    <a href="#smart-door-openable" className="service-pill">Door Openable</a>
                                    <a href="#pleated-system" className="service-pill">Pleated</a>
                                    <a href="#retractable" className="service-pill">Retractable</a>
                                    <a href="#sliding" className="service-pill">Sliding</a>
                                </div>
                            </div>
                        </div>

                        <span className="feature-glow"></span>
                    </div>

                    {/* Horizontal Systems */}
                    <div className="systems-section">
                        <h3 className="systems-title">Available Systems</h3>

                        <div className="mosquito-scroll">
                            {systems.map((item, index) => (
                                <div className="mosquito-strip-card" key={index}>
                                    <img src={item.img} alt={item.title} />
                                    <div className="strip-content">
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="cta-section">
                        <a href="/contact" className="cta-btn">
                            Book a Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* 1 - Velcro System */}
            <section id="velcro" className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                1 - Velcro System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Velcro Mosquito Nets
                            </h2>

                            <p className="text-sm text-[#1F2F45]/80 mt-2">
                                Magnetic Velcro Mosquito Net • Magnetic Door Screen
                            </p>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            Velcro mosquito net is a simple yet effective insect protection solution that uses
                            hook-and-loop (Velcro) fastening for easy installation and removal. It provides a
                            cost-effective way to keep mosquitoes, flies, and other insects out while allowing
                            fresh air and natural light to pass through.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {velcroImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Velcro ${index + 1}`}
                                onClick={() => openLightbox(velcroImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}

                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Mesh */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Mesh</h4>
                            <ul className="space-y-1">
                                <li><strong>Fiberglass:</strong> Durable, tear-resistant, and weatherproof.</li>
                                <li><strong>Polyester:</strong> Lightweight and cost-effective.</li>
                                <li><strong>Stainless Steel:</strong> For heavy-duty applications and extra durability.</li>
                            </ul>
                        </div>

                        {/* Design & Size */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Design Features</h4>
                            <p className="mb-4">
                                <strong>Color Options:</strong> Typically available in black or gray for better
                                visibility and aesthetics. The net is attached using Velcro strips, enabling quick
                                installation without drilling.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Size</h4>
                            <p>
                                Fully customizable for various window dimensions.
                                Standard sizes are also available for faster installation.
                            </p>
                        </div>

                        {/* Installation & More */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Installation</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Tool-Free:</strong> Adhesive-based setup.</li>
                                <li><strong>Flexible Fit:</strong> Works on wood, aluminum, or PVC frames.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Maintenance</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Washable:</strong> Easy to remove and clean.</li>
                                <li><strong>UV-Resistant:</strong> Long-lasting under sunlight.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Applications</h4>
                            <p className="mb-3">
                                <strong>Windows:</strong> Prevents insect entry while allowing airflow.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Advantages</h4>
                            <ul className="space-y-1">
                                <li>Easy installation and removal</li>
                                <li>No gaps for insects</li>
                                <li>Cost-effective solution</li>
                                <li>Ideal for homes and offices</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2 - Magnetic Mesh */}
            <section className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                Magnetic Mesh
                            </span>
                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Magnetic Velcro Mosquito Net
                            </h2>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            The Magnetic Velcro Mosquito Net is a smart and convenient solution to keep mosquitoes,
                            flies, and insects out while allowing fresh air to circulate. Designed with Velcro
                            fastening for easy installation and built-in magnets for strong closure, this net
                            provides a hands-free, durable, and removable insect barrier for windows and doors.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {magneticImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Magnetic Mesh ${index + 1}`}
                                onClick={() => openLightbox(magneticImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Mesh + Frame */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Mesh</h4>
                            <ul className="space-y-1">
                                <li><strong>Fiberglass:</strong> Durable, tear-resistant, and weatherproof.</li>
                                <li><strong>Polyester:</strong> Lightweight and cost-effective.</li>
                                <li><strong>Stainless Steel:</strong> For heavy-duty applications.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mt-4 mb-2">Frame</h4>
                            <p>Magnetic strips or PVC edging for secure attachment.</p>
                        </div>

                        {/* Magnetic + Design */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Magnetic Features</h4>
                            <ul className="space-y-1 mb-4">
                                <li>
                                    <strong>Closure System:</strong> Embedded magnets align automatically for seamless
                                    opening and closing.
                                </li>
                                <li>Strong magnetic force ensures secure closure.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Design Features</h4>
                            <ul className="space-y-1">
                                <li><strong>Color Options:</strong> Black or gray for better visibility.</li>
                                <li><strong>Hands-Free Operation:</strong> Automatic magnetic closure.</li>
                            </ul>
                        </div>

                        {/* Size + Installation + More */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Size</h4>
                            <p className="mb-4">
                                Fully customizable for various window dimensions.
                                Standard sizes available for quick installation.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Installation</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Tool-Free:</strong> Magnetic strips or Velcro attachment.</li>
                                <li>Adhesive-based non-invasive setup.</li>
                                <li><strong>Flexible Fit:</strong> Works on wood, aluminum, or PVC frames.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Maintenance</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Washable:</strong> Easy to remove and clean.</li>
                                <li><strong>UV-Resistant:</strong> Long-lasting outdoors.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Applications</h4>
                            <p className="mb-3">
                                <strong>Windows:</strong> Allows airflow while blocking insects.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Advantages</h4>
                            <ul className="space-y-1">
                                <li>Easy installation and removal</li>
                                <li>Magnetic closure prevents gaps</li>
                                <li>Cost-effective and low maintenance</li>
                                <li>Ideal for homes and offices</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3 - Magnetic Door Screen */}
            <section className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                Magnetic Door Screen
                            </span>
                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Magnetic Door Screen
                            </h2>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            A magnetic door net is a mesh screen that covers a doorway, allowing fresh air to
                            circulate while keeping insects, bugs, and debris out. Built-in magnetic strips
                            enable hands-free opening and automatic closure after passing through.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {doorImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Magnetic Door ${index + 1}`}
                                onClick={() => openLightbox(doorImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Mesh */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Mesh</h4>
                            <ul className="space-y-1">
                                <li><strong>Fiberglass:</strong> Durable, tear-resistant, and weatherproof.</li>
                                <li><strong>Polyester:</strong> Lightweight and cost-effective.</li>
                            </ul>
                        </div>

                        {/* Design + Size */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Design Features</h4>
                            <p className="mb-4">
                                <strong>Color Options:</strong> Black or gray for better visibility and aesthetics.
                                Velcro attachment allows quick installation without drilling.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Size</h4>
                            <p>
                                Fully customizable for various door dimensions.
                                Standard sizes available for fast installation.
                            </p>
                        </div>

                        {/* Installation + Maintenance + More */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Installation</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Tool-Free:</strong> Adhesive-based setup.</li>
                                <li><strong>Flexible Fit:</strong> Works on wood, aluminum, or PVC doors.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Maintenance</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Washable:</strong> Easy to remove and clean.</li>
                                <li><strong>UV-Resistant:</strong> Long-lasting under sunlight.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Applications</h4>
                            <p className="mb-3">
                                <strong>Doors:</strong> Allows airflow while blocking insects.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Advantages</h4>
                            <ul className="space-y-1">
                                <li>Easy installation and removal</li>
                                <li>No gaps due to magnetic closure</li>
                                <li>Cost-effective and low maintenance</li>
                                <li>Suitable for homes and offices</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4 - Window Openable System */}
            <section id="window-openable" className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                2 - Window Openable System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Window Openable System
                            </h2>

                            <p className="text-sm text-[#1F2F45]/80 mt-2">
                                Sleek Openable • Magnetic Openable • Classic Openable
                            </p>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            This mosquito net is designed to resemble a window door, opening inward for
                            convenience. It is constructed using high-quality powder-coated channel bars
                            reinforced with durable fibre L corners on all four sides.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {windowOpenableImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Window Openable ${index + 1}`}
                                onClick={() => openLightbox(windowOpenableImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Frame + Mesh */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Frame Material</h4>
                            <ul className="space-y-1 mb-4">
                                <li>
                                    <strong>Material:</strong> Aluminum powder-coated frame for durability and
                                    corrosion resistance.
                                </li>
                                <li>
                                    <strong>Finish:</strong> Powder-coated or wooden finish in various colors.
                                </li>
                                <li>
                                    <strong>Thickness:</strong> 4–12 mm lightweight yet sturdy construction.
                                </li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Mesh Material</h4>
                            <ul className="space-y-1">
                                <li>
                                    <strong>Material Options:</strong> Stainless steel mesh for added strength.
                                </li>
                                <li>
                                    <strong>Mesh Aperture:</strong> 18 × 18 for effective insect protection.
                                </li>
                                <li>UV-resistant for long-term use.</li>
                                <li>Washable and easy to maintain.</li>
                            </ul>
                        </div>

                        {/* Opening + Dimensions + Installation */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Opening Mechanism</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Type:</strong> Hinged openable system.</li>
                                <li><strong>Hinged:</strong> Swings open like windows or French doors.</li>
                                <li><strong>Handle / Knob:</strong> Ergonomic design.</li>
                                <li><strong>Stay Arm (Optional):</strong> Controls opening angle.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Dimensions</h4>
                            <p className="mb-4">
                                <strong>Custom Fit:</strong> Tailored to window size and shape.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Installation</h4>
                            <ul className="space-y-1">
                                <li>
                                    <strong>Mounting:</strong> Inside frame, outside frame, or flush-mounted.
                                </li>
                                <li>
                                    <strong>Sealing:</strong> Rubber or silicone gaskets prevent insect entry.
                                </li>
                            </ul>
                        </div>

                        {/* Durability + Aesthetic */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Durability</h4>
                            <ul className="space-y-1 mb-4">
                                <li>
                                    <strong>Weather Resistant:</strong> Withstands rain, heat, and humidity.
                                </li>
                                <li>
                                    <strong>Corrosion Resistant:</strong> Ideal for coastal environments.
                                </li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Aesthetic Options</h4>
                            <ul className="space-y-1">
                                <li>
                                    <strong>Frame Colors:</strong> White, black, brown, or custom finishes.
                                </li>
                                <li>
                                    <strong>Mesh Visibility:</strong> Clear or tinted mesh options.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5 - Magnetic Openable System */}
            <section className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                Window Openable System
                            </span>
                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Magnetic Openable System
                            </h2>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {magneticOpenableImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Magnetic Openable ${index + 1}`}
                                onClick={() => openLightbox(magneticOpenableImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Frame + Mesh */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Frame Material</h4>
                            <ul className="space-y-1 mb-4">
                                <li>
                                    <strong>Material:</strong> Aluminum powder-coated frame for durability and corrosion resistance.
                                </li>
                                <li>
                                    <strong>Finish:</strong> Powder-coated or wooden finish available in various colors.
                                </li>
                                <li>
                                    <strong>Thickness:</strong> 4–12 mm for lightweight yet sturdy construction.
                                </li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Mesh Material</h4>
                            <ul className="space-y-1">
                                <li>
                                    <strong>Material Options:</strong> Stainless steel mesh for enhanced strength and security.
                                </li>
                                <li>
                                    <strong>Mesh Aperture:</strong> 18 × 18 for effective mosquito protection.
                                </li>
                                <li>UV-resistant for long-term use.</li>
                                <li>Washable and easy to maintain.</li>
                            </ul>
                        </div>

                        {/* Opening + Dimensions */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Opening Mechanism</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Type:</strong> Hinged and magnetic openable systems.</li>
                                <li><strong>Hinged:</strong> Swings open like windows or French doors.</li>
                                <li><strong>Handle / Knob:</strong> Ergonomic design for smooth operation.</li>
                                <li><strong>Stay Arm (Optional):</strong> Controls the opening angle.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Dimensions</h4>
                            <p className="mb-4">
                                <strong>Custom Fit:</strong> Tailored to the specific window size and shape.
                            </p>
                        </div>

                        {/* Installation + Durability + Aesthetic */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Installation</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Mounting:</strong> Inside frame, outside frame, or flush-mounted.</li>
                                <li><strong>Sealing:</strong> Rubber or silicone gaskets ensure tight sealing.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Durability</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Weather Resistant:</strong> Withstands rain and heat.</li>
                                <li><strong>Corrosion Resistant:</strong> Ideal for humid or coastal areas.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Aesthetic Options</h4>
                            <ul className="space-y-1">
                                <li><strong>Frame Colors:</strong> White, black, brown, or custom finishes.</li>
                                <li><strong>Mesh Visibility:</strong> Clear or tinted mesh options.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6 - Classic Openable System */}
            <section className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                Window Openable System
                            </span>
                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Classic Openable System
                            </h2>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {classicOpenableImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Classic Openable ${index + 1}`}
                                onClick={() => openLightbox(classicOpenableImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Frame + Mesh */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Frame Material</h4>
                            <ul className="space-y-1 mb-4">
                                <li>
                                    <strong>Material:</strong> Aluminum powder-coated frame for durability and corrosion resistance.
                                </li>
                                <li>
                                    <strong>Finish:</strong> Powder-coated or wooden finish available in various colors.
                                </li>
                                <li>
                                    <strong>Thickness:</strong> 4–12 mm for lightweight yet sturdy construction.
                                </li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Mesh Material</h4>
                            <ul className="space-y-1">
                                <li>
                                    <strong>Material Options:</strong> Stainless steel mesh for enhanced strength and security.
                                </li>
                                <li>
                                    <strong>Mesh Aperture:</strong> 18 × 18 for effective insect protection.
                                </li>
                                <li>UV-resistant for long-term use.</li>
                                <li>Washable and easy to maintain.</li>
                            </ul>
                        </div>

                        {/* Opening + Dimensions */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Opening Mechanism</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Type:</strong> Hinged openable systems.</li>
                                <li><strong>Hinged:</strong> Swings open like windows or French doors.</li>
                                <li><strong>Handle / Knob:</strong> Ergonomic design for smooth operation.</li>
                                <li><strong>Stay Arm (Optional):</strong> Controls the opening angle.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Dimensions</h4>
                            <p className="mb-4">
                                <strong>Custom Fit:</strong> Tailored to the specific window size and shape.
                            </p>
                        </div>

                        {/* Installation + Durability + Aesthetic */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Installation</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Mounting:</strong> Inside frame, outside frame, or flush-mounted.</li>
                                <li><strong>Sealing:</strong> Rubber or silicone gaskets ensure tight sealing.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Durability</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Weather Resistant:</strong> Withstands rain, heat, and harsh conditions.</li>
                                <li><strong>Corrosion Resistant:</strong> Ideal for humid or coastal environments.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Aesthetic Options</h4>
                            <ul className="space-y-1">
                                <li><strong>Frame Colors:</strong> White, black, brown, or customized.</li>
                                <li><strong>Mesh Visibility:</strong> Clear or tinted mesh options.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 7 - Door Openable System */}
            <section id="smart-door-openable" className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                3 - Door Openable System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Classic Door Openable
                            </h2>

                            <p className="text-sm text-[#1F2F45]/80 mt-2">
                                Classic Door Openable • Smart Door Openable • Grill Door Openable
                            </p>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            Hinged insect screens for doors offer complete protection against insects.
                            Crafted using high-quality materials, these doors are durable, easy to
                            maintain, and customizable to match specific requirements.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {doorOpenableImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Door Openable ${index + 1}`}
                                onClick={() => openLightbox(doorOpenableImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Frame + Mesh */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Frame Material</h4>
                            <ul className="space-y-1 mb-4">
                                <li>
                                    <strong>Material:</strong> Aluminum powder-coated frame for durability and corrosion resistance.
                                </li>
                                <li>
                                    <strong>Finish:</strong> Powder-coated or wooden finish available in various colors.
                                </li>
                                <li>
                                    <strong>Thickness:</strong> Typically 12 mm for enhanced stability.
                                </li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Mesh Material</h4>
                            <ul className="space-y-1">
                                <li><strong>Stainless Steel Mesh:</strong> Strong and secure.</li>
                                <li><strong>Mesh Aperture:</strong> 18 × 18 mm for insect protection.</li>
                                <li>UV-resistant and weatherproof.</li>
                                <li>Washable and easy to maintain.</li>
                            </ul>
                        </div>

                        {/* Opening + Dimensions */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Opening Mechanism</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Type:</strong> Hinged or magnetic openable systems.</li>
                                <li><strong>Hinged Door:</strong> Traditional swing-open design.</li>
                                <li><strong>Magnetic Door:</strong> Magnetic strips or latches.</li>
                                <li><strong>Self-Closing:</strong> Spring-loaded or hydraulic hinges.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Dimensions</h4>
                            <p className="mb-4">
                                <strong>Custom Fit:</strong> Tailored to door size and design.
                            </p>
                        </div>

                        {/* Installation + Durability + Extras */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Installation</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Mounting:</strong> Inside, outside, or flush-mounted.</li>
                                <li><strong>Sealing:</strong> Rubber or silicone gaskets.</li>
                                <li><strong>Fixing:</strong> Stainless steel screws or brackets.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Durability</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Weather Resistant:</strong> Handles rain, wind, and sun.</li>
                                <li><strong>Corrosion Resistant:</strong> Ideal for humid or coastal areas.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Aesthetic & Extras</h4>
                            <ul className="space-y-1">
                                <li><strong>Frame Colors:</strong> Standard & custom options.</li>
                                <li><strong>Mesh Transparency:</strong> Clear or tinted mesh.</li>
                                <li><strong>Child Lock:</strong> Safety enhancement.</li>
                                <li><strong>Pet Door:</strong> Optional integrated flap.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 8 - Smart Door Openable */}
            <section className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                Door Openable System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Smart Door Openable
                            </h2>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {smartDoorImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Smart Door ${index + 1}`}
                                onClick={() => openLightbox(smartDoorImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Frame + Mesh */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Frame Material</h4>
                            <p className="mb-4">
                                High-quality aluminum profiles with a smart design, featuring 45mm width
                                and 18mm thickness for durability and strength.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Mesh</h4>
                            <p>
                                Stainless steel 304-grade black-coated mesh with 18 × 18 holes per inch,
                                ensuring maximum protection while maintaining ventilation.
                            </p>
                        </div>

                        {/* Smart Features */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Smart Features</h4>
                            <p className="mb-4">
                                Bigger middle supporting profiles and high-durability hinges enable
                                automatic closing or smooth opening for added convenience and security.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Opening Mechanism</h4>
                            <p>
                                Hinged door design with a smooth, easy-to-open mechanism allowing
                                effortless entry and exit while keeping insects out.
                            </p>
                        </div>

                        {/* Installation + Weather + Types */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Installation</h4>
                            <p className="mb-4">
                                Simple screw-mounting system for quick installation on door frames,
                                suitable for both wooden and metal doors.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Weather Resistant</h4>
                            <p className="mb-4">
                                UV-resistant coating on the frame and mesh ensures durability against
                                environmental elements and long-lasting performance.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Types</h4>
                            <p>
                                Single open, double open, foldable open, double foldable open, and other
                                customizable configurations.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 9 - Grill Door Openable */}
            <section className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                Door Openable System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Grill Door Openable
                            </h2>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            Open grill design made from steel or iron grills, providing security and aesthetics
                            while allowing airflow. Integrated mosquito mesh blocks insects, and the hinged
                            mechanism ensures easy access with a secure latch or locking system.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {grillDoorImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Grill Door ${index + 1}`}
                                onClick={() => openLightbox(grillDoorImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* 10 - Pleated System */}
            <section id="pleated-system" className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                4 - Pleated System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Single Pleated
                            </h2>

                            <p className="text-sm text-[#1F2F45]/80 mt-2">
                                Single Pleated • Dual Pleated
                            </p>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            Pleated mosquito nets are innovative and stylish solutions designed to keep
                            mosquitoes and insects out while enhancing aesthetics. Commonly used for
                            windows, doors, and balconies.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {pleatedImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Pleated System ${index + 1}`}
                                onClick={() => openLightbox(pleatedImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Material */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Material</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Mesh:</strong> Fiberglass or polyester.</li>
                                <li>Stainless steel mesh for enhanced durability (optional).</li>
                                <li><strong>Frame:</strong> Powder-coated aluminium profiles.</li>
                            </ul>
                        </div>

                        {/* Pleating + Mesh Specs */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Pleating Mechanism</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Type:</strong> Accordion-style pleats.</li>
                                <li><strong>Cord System:</strong> High-tensile cords for smooth movement.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Mesh Specifications</h4>
                            <ul className="space-y-1">
                                <li><strong>Weave Size:</strong> 18×18 or 20×20.</li>
                                <li><strong>Colour:</strong> Black, grey, printed options.</li>
                                <li><strong>Fire Resistance:</strong> Flame-retardant variants available.</li>
                            </ul>
                        </div>

                        {/* Dimensions + Operation + Extras */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Dimensions</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Custom Sizes:</strong> For windows and doors.</li>
                                <li><strong>Maximum:</strong> Up to 12 ft (W) × 10 ft (H).</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Operation Type</h4>
                            <p className="mb-4">Manual push–pull operation.</p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Additional Features</h4>
                            <ul className="space-y-1 mb-4">
                                <li>UV protection coating.</li>
                                <li>Anti-dust coating.</li>
                                <li>Washable & replaceable mesh.</li>
                                <li>Silent operation.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Installation</h4>
                            <p className="mb-4">
                                Inside or outside mounting based on frame structure.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Applications</h4>
                            <ul className="space-y-1">
                                <li><strong>Residential:</strong> Living rooms, kitchens, bedrooms, balconies.</li>
                                <li><strong>Commercial:</strong> Offices, restaurants, hospitals.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 11 - Pleated System (Dual Pleated) */}
            <section className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                Pleated System
                            </span>
                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Dual Pleated
                            </h2>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {dualPleatedImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Dual Pleated ${index + 1}`}
                                onClick={() => openLightbox(dualPleatedImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Material */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Material</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Mesh:</strong> Fiberglass or polyester.</li>
                                <li>Stainless steel mesh for enhanced durability (optional).</li>
                                <li><strong>Frame:</strong> Powder-coated aluminum profiles.</li>
                            </ul>
                        </div>

                        {/* Pleating + Mesh Specs */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Pleating Mechanism</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Type:</strong> Accordion-style pleats.</li>
                                <li><strong>Cord System:</strong> High-tensile cords for smooth alignment.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Mesh Specifications</h4>
                            <ul className="space-y-1">
                                <li><strong>Weave Size:</strong> 18 × 18.</li>
                                <li><strong>Color:</strong> Black, grey, printed options.</li>
                                <li><strong>Fire Resistance:</strong> Flame-retardant variants.</li>
                            </ul>
                        </div>

                        {/* Dimensions + Operation + Extras */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Dimensions</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Custom Sizes:</strong> Windows and doors.</li>
                                <li><strong>Maximum:</strong> Up to 12 ft (W) × 10 ft (H).</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Operation Type</h4>
                            <p className="mb-4">Manual push–pull operation.</p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Additional Features</h4>
                            <ul className="space-y-1 mb-4">
                                <li>UV protection coating.</li>
                                <li>Anti-dust coating.</li>
                                <li>Washable & replaceable mesh.</li>
                                <li>Silent operation.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Installation</h4>
                            <p className="mb-4">
                                Inside or outside mounting based on frame structure.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Applications</h4>
                            <ul className="space-y-1">
                                <li>Residential: living rooms, kitchens, bedrooms, balconies.</li>
                                <li>Commercial: offices, restaurants, hospitals.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 12 - Retractable System */}
            <section id="retractable" className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                5 - Retractable System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Roller Shutter System
                            </h2>

                            <p className="text-sm text-[#1F2F45]/80 mt-2">
                                Roller Shutter System • Barrierfree System • Honeycomb Partition
                            </p>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            Spring-loaded vertical screens designed for narrow windows and sun slits,
                            allowing natural light and airflow. Operates like a roller shutter using a
                            spring mechanism—washable, low maintenance, and ideal for insect protection
                            on wooden, aluminium, or UPVC windows.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {retractableImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Retractable System ${index + 1}`}
                                onClick={() => openLightbox(retractableImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Material */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Material</h4>
                            <ul className="space-y-1">
                                <li><strong>Frame:</strong> Aluminum (lightweight, rust-resistant).</li>
                                <li>
                                    <strong>Net:</strong> Fiberglass, polyester, or stainless steel for
                                    durability and airflow.
                                </li>
                            </ul>
                        </div>

                        {/* Mechanism + Mesh */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Mechanism</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Roller System:</strong> Spring-loaded retractable mechanism.</li>
                                <li><strong>Operation:</strong> Manual or motorised.</li>
                                <li><strong>Positioning:</strong> Vertical operation.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Mesh Features</h4>
                            <ul className="space-y-1">
                                <li><strong>Density:</strong> 18×16 or 20×20 mesh.</li>
                                <li>UV-resistant and tear-resistant.</li>
                                <li>Available in black or grey.</li>
                            </ul>
                        </div>

                        {/* Frame + Size + Installation + Extras */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Frame Features</h4>
                            <ul className="space-y-1 mb-4">
                                <li>Powder-coated for corrosion resistance.</li>
                                <li>Compact cassette housing.</li>
                                <li>Guide rails for smooth movement.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Size</h4>
                            <p className="mb-4">
                                Customizable for various window and door dimensions.
                                Standard sizes available.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Installation</h4>
                            <p className="mb-4">
                                Wall-mounted or recessed into the frame. Easy to remove
                                for cleaning and maintenance.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Additional Features</h4>
                            <ul className="space-y-1 mb-4">
                                <li>Noise-free operation.</li>
                                <li>Child-friendly and safe.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Advantages</h4>
                            <ul className="space-y-1">
                                <li>Space-saving and visually clean.</li>
                                <li>Ideal for frequently used openings.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 13 - Retractable System (Barrierfree) */}
            <section className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                Retractable System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Barrierfree System
                            </h2>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            Barrier-free retractable mosquito nets are designed for large openings,
                            allowing sunlight and fresh air while preventing insects. This spring-less
                            system uses a PVC-based chain with a trackless design, ensuring safety
                            without tripping hazards—ideal for doors, balconies, and French doors.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {barrierfreeImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Barrierfree System ${index + 1}`}
                                onClick={() => openLightbox(barrierfreeImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Material */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Material</h4>
                            <ul className="space-y-1">
                                <li><strong>Frame:</strong> Heavy-duty aluminum.</li>
                                <li>
                                    <strong>Net:</strong> Fiberglass, polyester, or stainless steel mesh.
                                </li>
                            </ul>
                        </div>

                        {/* Design Features */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Design Features</h4>
                            <ul className="space-y-1">
                                <li><strong>Flat Base:</strong> No raised tracks or thresholds.</li>
                                <li><strong>Smooth Sliding:</strong> Rollers or rails for easy movement.</li>
                                <li><strong>Closure:</strong> Magnetic strips or soft-close systems.</li>
                                <li><strong>Barrier-Free Tracks:</strong> Prevents tripping hazards.</li>
                            </ul>
                        </div>

                        {/* Size + Installation + Extras */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Size</h4>
                            <p className="mb-4">
                                Customizable for wide doorways and balcony openings.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Installation</h4>
                            <p className="mb-4">
                                Screw-fixed frames or adhesive mounting options for easy installation.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Additional Features</h4>
                            <ul className="space-y-1">
                                <li>UV-resistant and washable mesh.</li>
                                <li>Noise-free, durable operation.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 14 - Retractable System (Honeycomb Partition) */}
            <section className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                Retractable System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Honeycomb Partition
                            </h2>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            Honeycomb blinds and partition doors offer warmth, comfort, and insulation
                            throughout the year. These cellular shades are available in translucent and
                            blackout options, providing energy efficiency and user-friendly operation
                            for partitions, sunshades, and blinds.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {honeycombImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Honeycomb Partition ${index + 1}`}
                                onClick={() => openLightbox(honeycombImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Features */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Key Features</h4>
                            <ul className="space-y-1">
                                <li>User-friendly and energy efficient.</li>
                                <li>Ideal for partitions, sunshades, and blinds.</li>
                                <li>Available in translucent and blackout variants.</li>
                            </ul>
                        </div>

                        {/* Performance */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Performance Benefits</h4>
                            <ul className="space-y-1">
                                <li>UV protection.</li>
                                <li>Low-noise operation.</li>
                                <li>Flame-retardant fabric options.</li>
                            </ul>
                        </div>

                        {/* Design & Operation */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Design & Operation</h4>
                            <ul className="space-y-1">
                                <li>No floor guides for easy cleaning and movement.</li>
                                <li>Manual operation system.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 15 - Sliding System */}
            <section id="sliding" className="py-16 bg-[#F6F3ED]">
                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-semibold">
                                6 - Sliding System
                            </span>

                            <h2 className="text-3xl font-extrabold text-[#1F2F45] mt-2">
                                Sliding System
                            </h2>
                        </div>

                        <p className="max-w-2xl text-sm text-[#1F2F45]/80 leading-relaxed">
                            Sliding systems for windows, doors, and balconies are designed with
                            double cassette frames and smooth bottom-rolling wheels. They allow
                            sunlight and fresh air while keeping insects out with effortless operation.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {slidingImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Sliding System ${index + 1}`}
                                onClick={() => openLightbox(slidingImages, index)}
                                className="rounded-xl cursor-pointer hover:scale-105 transition shadow"
                            />
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#1F2F45]/85">

                        {/* Material */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Material</h4>
                            <ul className="space-y-1">
                                <li>
                                    <strong>Frame:</strong> Aluminum powder-coated for durability and corrosion resistance.
                                </li>
                                <li>
                                    <strong>Mesh:</strong> Heavy-duty stainless steel mesh for high-security applications.
                                </li>
                            </ul>
                        </div>

                        {/* Mechanism */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Mechanism</h4>
                            <ul className="space-y-1 mb-4">
                                <li>
                                    <strong>Sliding Panels:</strong> Horizontal movement with smooth rollers.
                                </li>
                                <li>
                                    <strong>Track Design:</strong> Dual or multi-track options.
                                </li>
                                <li>
                                    <strong>Closure:</strong> Magnetic or latch-based locking.
                                </li>
                                <li>Optional soft-close for noise-free operation.</li>
                            </ul>
                        </div>

                        {/* Size + Design + Installation + Extras */}
                        <div>
                            <h4 className="font-bold text-[#C9A24D] mb-2">Size</h4>
                            <p className="mb-4">
                                Customizable for large doorways, windows, and balconies.
                                Standard sizes available for common openings.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Design Features</h4>
                            <ul className="space-y-1 mb-4">
                                <li><strong>Multi-Panel Layout:</strong> Wide coverage.</li>
                                <li><strong>Slim Frames:</strong> Maximum visibility and airflow.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Installation</h4>
                            <p className="mb-4">
                                Wall-mounted or integrated into existing frames with a modular system.
                            </p>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Additional Features</h4>
                            <ul className="space-y-1 mb-4">
                                <li>Weather-resistant for indoor & outdoor use.</li>
                                <li>UV protection to prevent mesh degradation.</li>
                                <li>Low maintenance and easy cleaning.</li>
                                <li>Child & pet-friendly sturdy design.</li>
                            </ul>

                            <h4 className="font-bold text-[#1F2F45] mb-2">Advantages</h4>
                            <ul className="space-y-1">
                                <li>Space-efficient modern design.</li>
                                <li>Durable build with smooth operation.</li>
                                <li>Effective insect protection with natural ventilation.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="w-full py-16">
                <div className="mx-auto w-[92%] max-w-7xl">

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-14">

                        {/* Left: Icons Grid */}
                        <div className="grid grid-cols-2 gap-6 p-6 border-2 border-dashed border-[#1F2F45] rounded-[28px]">
                            {[q1, q2, q3, q4].map((img, index) => (
                                <div
                                    key={index}
                                    className="w-[110px] h-[110px] bg-white rounded-2xl flex items-center justify-center shadow-sm hover:-translate-y-1 transition"
                                >
                                    <img
                                        src={img}
                                        alt={`Quality ${index + 1}`}
                                        className="w-[60px] h-[60px] object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right: Highlight Panel */}
                        <div className="bg-[#1F2F45] text-[#F6F3ED] px-10 py-8 rounded-[28px] min-w-[260px] shadow-lg text-center lg:text-left">
                            <h3 className="text-2xl font-extrabold mb-6">
                                Why Choose Us
                            </h3>

                            <ul className="space-y-4 font-semibold">
                                <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2.5 before:h-2.5 before:bg-[#C9A24D] before:rounded-full">
                                    Best Quality
                                </li>
                                <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2.5 before:h-2.5 before:bg-[#C9A24D] before:rounded-full">
                                    Professional Services
                                </li>
                                <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2.5 before:h-2.5 before:bg-[#C9A24D] before:rounded-full">
                                    Reasonable Pricing
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>

            {lightboxOpen && (
                <ImageLightbox
                    images={currentImages}
                    currentIndex={currentIndex}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}

            <Footer />
        </>
    );
};

export default MosquitoNet;