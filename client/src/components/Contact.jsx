import { useState } from "react";
import axios from "axios";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const API_BASE = `${import.meta.env.VITE_APP_BASE_URL}`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try {
            await axios.post(`${API_BASE}/api/enquiries`, formData);
            setSuccess("Thank you! We will contact you soon.");

            setFormData({
                name: "",
                phone: "",
                email: "",
                location: "",
                message: "",
            });
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="w-full bg-[#F6F3ED] py-16 sm:py-24">
            <div className="mx-auto w-[92%] max-w-7xl">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-10 h-[3px] bg-[#C9A24D]" />
                        <span className="text-sm font-semibold tracking-wider uppercase text-[#C9A24D]">
                            Contact Us
                        </span>
                        <span className="w-10 h-[3px] bg-[#C9A24D]" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mb-4">
                        Ready to upgrade your home?
                    </h2>

                    <p className="text-[#2B2B2B]/80">
                        Call us for a free consultation.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <div className="mt-0 md:mt-32 space-y-8">

                        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-[#1F2F45] flex items-center justify-center text-[#F6F3ED]">
                                <FaPhone />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wide text-[#2B2B2B]/60">Phone</p>
                                <p className="font-semibold text-[#1F2F45]">+91 6374335075</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-[#1F2F45] flex items-center justify-center text-[#F6F3ED]">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wide text-[#2B2B2B]/60">Email</p>
                                <p className="font-semibold text-[#1F2F45]">
                                    mailtohitech15@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-[#1F2F45] flex items-center justify-center text-[#F6F3ED]">
                                <FaLocationDot />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wide text-[#2B2B2B]/60">Location</p>
                                <p className="font-semibold text-[#1F2F45]">No.251, Shop No-2, Triplicane Highroad, Triplicane, <br /> Chennai - 600005, Tamil Nadu</p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h3 className="text-xl font-extrabold text-[#1F2F45] mb-6">
                            Request a Visit
                        </h3>

                        {success && (
                            <p className="mb-4 text-green-600 font-medium">
                                {success}
                            </p>
                        )}

                        <form
                            onSubmit={submitHandler}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        >

                            <div className="sm:col-span-2">
                                <label className="text-sm font-medium text-[#1F2F45]">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    required
                                    className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-[#1F2F45]">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91"
                                    required
                                    className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-[#1F2F45]">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                    className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="text-sm font-medium text-[#1F2F45]">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Your area / city"
                                    className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="text-sm font-medium text-[#1F2F45]">Your Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message"
                                    className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
                                />
                            </div>

                            <div className="sm:col-span-2 pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-full bg-[#1F2F45] px-6 py-3 text-[#F6F3ED] font-semibold shadow-lg hover:bg-[#162235] transition disabled:opacity-50 cursor-pointer"
                                >
                                    {loading ? "Submitting..." : "Book Free Consultation"}
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
