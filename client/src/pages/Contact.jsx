import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

const API_BASE = `${import.meta.env.VITE_APP_BASE_URL}`;

const InfoItem = ({ icon, title, text }) => (
  <div className="flex items-start gap-4">
    <div className="text-white p-3 rounded-full bg-[#1F2F45] text-lg mt-1">
      {icon}
    </div>
    <div>
      <p className="font-semibold text-[#1F2F45]">{title}</p>
      <p className="text-sm text-[#2B2B2B]/70">{text}</p>
    </div>
  </div>
);

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
      setSuccess("Thank you! We will contact you shortly.");
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
    <div>
      <Navbar />

      <section className="w-full pt-36 sm:pt-52 pb-16 sm:pb-24 bg-[#F6F3ED]">
        <div className="mx-auto w-[92%] max-w-7xl">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2F45] mb-4">
                Get In Touch
              </h2>
              <p className="text-[#2B2B2B]/70 max-w-xl">
                Fill out the form below and our team will reach out to you
                for a free consultation.
              </p>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <InfoItem
                icon={<FaMapMarkerAlt />}
                title="Our Address"
                text="No.251, Shop No-2, Triplicane Highroad, Triplicane, Chennai - 600005 Tamil Nadu."
              />
              <InfoItem
                icon={<FaPhoneAlt />}
                title="Phone"
                text="+91 6374335075"
              />
              <InfoItem
                icon={<FaEnvelope />}
                title="Email"
                text="mailtohitech15@gmail.com"
              />
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg mb-20">
            {/* <iframe
              src="https://www.google.com/maps?q=Chennai,+India&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
              title="Google Map"
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3517.210554464375!2d80.27155807507793!3d13.058306187265083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzI5LjkiTiA4MMKwMTYnMjYuOSJF!5e1!3m2!1sen!2sin!4v1769788716083!5m2!1sen!2sin" 
            className="w-full h-[420px]"
            loading="lazy"
            title="Google Map"
             />
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-extrabold text-[#1F2F45] mb-8 text-center">
              Request a Visit
            </h3>

            {success && (
              <p className="mb-6 text-center text-green-600 font-medium">
                {success}
              </p>
            )}

            <form
              onSubmit={submitHandler}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="sm:col-span-2">
                <label className="block mb-1 font-medium text-[#1F2F45]">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-full border border-[#1F2F45]/20 py-3 px-5 outline-none focus:ring-2 focus:ring-[#1F2F45]/20"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-[#1F2F45]">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  required
                  className="w-full rounded-full border border-[#1F2F45]/20 py-3 px-5 outline-none focus:ring-2 focus:ring-[#1F2F45]/20"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-[#1F2F45]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full rounded-full border border-[#1F2F45]/20 py-3 px-5 outline-none focus:ring-2 focus:ring-[#1F2F45]/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-1 font-medium text-[#1F2F45]">
                  Location
                </label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your area / city"
                  className="w-full rounded-full border border-[#1F2F45]/20 py-3 px-5 outline-none focus:ring-2 focus:ring-[#1F2F45]/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-1 font-medium text-[#1F2F45]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  className="w-full rounded-3xl border border-[#1F2F45]/20 py-3 px-5 outline-none resize-none focus:ring-2 focus:ring-[#1F2F45]/20"
                />
              </div>

              <div className="sm:col-span-2 pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#1F2F45] py-3 text-[#F6F3ED] font-semibold hover:bg-[#162235] transition disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
