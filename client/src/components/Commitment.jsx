import {
    FaShieldHalved,
    FaScrewdriverWrench,
    FaTags,
} from "react-icons/fa6"

const Commitment = () => {
    return (
        <section className="w-full bg-white py-16 sm:py-24">
            <div className="mx-auto w-[92%] max-w-6xl">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-10 h-[3px] bg-[#C9A24D]" />
                        <span className="text-sm font-semibold tracking-wider uppercase text-[#C9A24D]">
                            Our Commitment
                        </span>
                        <span className="w-10 h-[3px] bg-[#C9A24D]" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45]">
                        What You Can Always Expect From Us
                    </h2>
                </div>

                {/* ================= MOBILE VIEW ================= */}
                <div className="grid grid-cols-1 gap-6 md:hidden">

                    <MobileCard
                        icon={<FaShieldHalved />}
                        title="Reliable Products"
                        text="We use only high-quality materials built for long-term daily use."
                    />

                    <MobileCard
                        icon={<FaScrewdriverWrench />}
                        title="Neat Installation"
                        text="Our work is clean, precise, and respectful of your home environment."
                    />

                    <MobileCard
                        icon={<FaTags />}
                        title="Affordable Pricing"
                        text="Customer-focused service at prices that fit your budget."
                    />

                </div>

                {/* ================= DESKTOP VIEW ================= */}
                <div className="hidden md:block relative mt-20">

                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#C9A24D]/40 -translate-x-1/2" />

                    {/* Item 1 */}
                    <TimelineItem
                        align="right"
                        icon={<FaShieldHalved />}
                        title="Reliable Products"
                        text="We use only high-quality materials built for long-term daily use."
                    />

                    {/* Item 2 */}
                    <TimelineItem
                        align="left"
                        icon={<FaScrewdriverWrench />}
                        title="Neat Installation"
                        text="Our work is clean, precise, and respectful of your home environment."
                    />

                    {/* Item 3 */}
                    <TimelineItem
                        align="right"
                        icon={<FaTags />}
                        title="Affordable Pricing"
                        text="Customer-focused service at prices that fit your budget."
                    />

                </div>
            </div>
        </section>
    )
}

export default Commitment

/* ================= Components ================= */

const MobileCard = ({ icon, title, text }) => (
    <div className="commitment-card text-center bg-[#F6F3ED] p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition">
        <div className="commitment-icon mx-auto text-xl mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#1F2F45] text-[#F6F3ED]">
            {icon}
        </div>
        <h3 className="font-semibold text-[#1F2F45] mb-2">{title}</h3>
        <p className="text-sm text-[#2B2B2B]/80">{text}</p>
    </div>
)

const TimelineItem = ({ align, icon, title, text }) => {
    const isRight = align === "right"

    return (
        <div className="grid grid-cols-2 items-center gap-5 mb-20">
            {isRight && (
                <div className="pr-14 text-right">
                    <div className="commitment-card ml-auto bg-[#F6F3ED] p-5 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition">
                        <h3 className="text-[#1F2F45] font-extrabold text-2xl mb-2">{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
            )}

            <div className={`flex ${isRight ? "justify-start" : "justify-end"}`}>
                <div className="timeline-icon bg-[#1F2F45] text-white p-3 rounded-full text-3xl">
                    {icon}
                </div>
            </div>

            {!isRight && (
                <div className="pl-14">
                    <div className="commitment-card bg-[#F6F3ED] p-5 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition">
                        <h3 className="text-[#1F2F45] font-extrabold text-2xl mb-2">{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
