import {
    FaHouseChimney,
    FaBug,
    FaRulerCombined,
    FaLayerGroup,
    FaHandshake,
    FaExpand,
    FaAward,
    FaScrewdriverWrench,
    FaUsers,
} from "react-icons/fa6"

const About = () => {
    return (
        <section id="about-us" className="w-full bg-white py-16 sm:py-24">
            <div className="mx-auto w-[92%] max-w-7xl">

                {/* Section Header */}
                <div className="max-w-3xl mb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-[3px] bg-[#C9A24D]" />
                        <span className="text-sm font-semibold tracking-wider uppercase text-[#C9A24D]">
                            Who We Are
                        </span>
                        <span className="w-10 h-[3px] bg-[#C9A24D]" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] leading-tight">
                        Practical Home Solutions <br className="hidden sm:block" />
                        Built for Everyday Living
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    {/* Left Content */}
                    <div className="space-y-6 text-[#2B2B2B]/90 leading-relaxed">

                        <Item icon={<FaHouseChimney />}>
                            <strong>Hi Tech Enterprises</strong> delivers{" "}
                            <strong>practical, space-saving home solutions</strong> that improve
                            comfort, hygiene, and convenience in modern homes.
                        </Item>

                        <Item icon={<FaBug />}>
                            We specialize in premium <strong>mosquito nets</strong> that ensure a
                            mosquito-free environment while maintaining airflow and natural light.
                        </Item>

                        <Item icon={<FaRulerCombined />}>
                            Our <strong>wall-mounted shoe racks</strong> and{" "}
                            <strong>ceiling cloth hangers</strong> are designed for durability,
                            space efficiency, and daily use.
                        </Item>

                        <Item icon={<FaLayerGroup />}>
                            We also provide <strong>toughened glass doors</strong>,{" "}
                            <strong>UPVC windows & doors</strong>, <strong>ACP cladding</strong>,{" "}
                            <strong>PVC loft cupboards</strong>,{" "}
                            <strong>false ceiling works</strong>, and other{" "}
                            <strong>aluminum fabrication solutions</strong>.
                        </Item>

                        <Item icon={<FaHandshake />} bold>
                            Our promise is <strong>reliable products</strong>,{" "}
                            <strong>neat installation</strong>, and{" "}
                            <strong>customer-focused service</strong> at affordable prices.
                        </Item>

                    </div>

                    {/* Right Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <Card
                            icon={<FaExpand />}
                            title="Space-Saving Design"
                            text="Smart designs that maximize usable space without compromising comfort."
                        />

                        <Card
                            icon={<FaAward />}
                            title="Quality Materials"
                            text="Durable materials chosen for long-term use and low maintenance."
                        />

                        <Card
                            icon={<FaScrewdriverWrench />}
                            title="Neat Installation"
                            text="Clean, precise installation with attention to every detail."
                        />

                        <Card
                            icon={<FaUsers />}
                            title="Customer-Focused"
                            text="Honest advice, fair pricing, and solutions tailored to your needs."
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

/* ---------------- Reusable Components ---------------- */

const Item = ({ icon, children, bold }) => (
    <div className={`flex gap-4 ${bold ? "font-medium" : ""}`}>
        <span className="text-[#C9A24D] text-xl mt-1">{icon}</span>
        <p>{children}</p>
    </div>
)

const Card = ({ icon, title, text }) => (
    <div className="bg-[#F6F3ED] rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#1F2F45] flex items-center justify-center text-[#F6F3ED]">
                {icon}
            </div>
            <h3 className="font-semibold text-[#1F2F45]">{title}</h3>
        </div>
        <p className="text-sm text-[#2B2B2B]/80">{text}</p>
    </div>
)
