import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import LeftContactBar from "../components/LeftContactBar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AOS from "aos"
import About from "../components/About"
import Services from "../components/Services"
import Commitment from "../components/Commitment"
import Contact from "../components/Contact"

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    return (
        <div className="font-['Poppins'] bg-[#F6F3ED]">
            <LeftContactBar />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Commitment />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Home
