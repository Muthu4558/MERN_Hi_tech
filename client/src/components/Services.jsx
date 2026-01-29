import {
    FaBug,
    FaRulerCombined,
    FaWindowMaximize,
    FaIndustry,
    FaBox,
    FaScrewdriverWrench,
} from "react-icons/fa6"

const Services = () => {
    return (
        <section id="service" className="w-full bg-[#F6F3ED] py-16 sm:py-24">
            <div className="mx-auto w-[92%] max-w-7xl">

                {/* Section Header */}
                <div className="max-w-3xl mb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-[3px] bg-[#C9A24D]" />
                        <span className="text-sm font-semibold tracking-wider uppercase text-[#C9A24D]">
                            Our Services
                        </span>
                        <span className="w-10 h-[3px] bg-[#C9A24D]" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] leading-tight mb-4">
                        Comprehensive fabrication and netting solutions for your home.
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <ServiceCard
                        icon={<FaBug />}
                        title="Mosquito Net Solutions"
                        text="High-quality velcro and frame-based mosquito nets for windows and doors. Keep your home safe and airy."
                    />

                    <ServiceCard
                        icon={<FaRulerCombined />}
                        title="Space Saving Solutions"
                        text="Custom wall-mounted metal shoe racks and ceiling cloth hangers designed for durability and efficient space usage."
                    />

                    <ServiceCard
                        icon={<FaWindowMaximize />}
                        title="Windows & Doors"
                        text="Professional installation of UPVC windows and doors, as well as Toughened Glass door solutions."
                    />

                    <ServiceCard
                        icon={<FaIndustry />}
                        title="Fabrication Works"
                        text="We handle ACP cladding, false ceiling works, and other aluminum-based solutions for homes and offices."
                    />

                    <ServiceCard
                        icon={<FaBox />}
                        title="PVC Interiors"
                        text="Durable and neat PVC loft cupboards and doors to organize your storage space effectively."
                    />

                    <ServiceCard
                        icon={<FaScrewdriverWrench />}
                        title="General Maintenance"
                        text="Netlon services and fabrication repairs delivered with neat installation and customer-focused service."
                    />

                </div>
            </div>
        </section>
    )
}

export default Services

/* ---------------- Reusable Card ---------------- */

const ServiceCard = ({ icon, title, text }) => {
    return (
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition">

            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1F2F45] flex items-center justify-center text-[#F6F3ED] text-lg">
                    {icon}
                </div>

                <h3 className="font-semibold text-[#1F2F45]">
                    {title}
                </h3>
            </div>

            <p className="text-sm text-[#2B2B2B]/80 leading-relaxed">
                {text}
            </p>
        </div>
    )
}

