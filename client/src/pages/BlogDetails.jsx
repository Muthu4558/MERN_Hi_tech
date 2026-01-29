import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_BASE = `${import.meta.env.VITE_APP_BASE_URL}`;

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const { data } = await axios.get(`${API_BASE}/api/blogs`);
                const found = data.find((b) => b._id === id);
                setBlog(found);
            } catch (error) {
                console.error("Failed to load blog", error);
            }
        };
        fetchBlog();
    }, [id]);

    if (!blog) {
        return (
            <div className="bg-[#F6F3ED] min-h-screen">
                <Navbar />
                <div className="text-center py-32 text-gray-600">
                    Loading...
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-[#F6F3ED] min-h-screen">
            <Navbar />

            {/* Hero Image */}
            <section className="relative">
                {/* ✅ IMAGE FIXED */}
                <img
                    src={`${API_BASE}${blog.image}`}
                    alt={blog.title}
                    className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-4 -mt-28 relative z-10">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
                    <span className="inline-block text-xs uppercase tracking-widest text-[#C9A24D] font-medium mb-4">
                        {blog.category}
                    </span>

                    <h1 className="text-3xl md:text-4xl font-semibold text-[#1F2F45]">
                        {blog.title}
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        {blog.subtitle}
                    </p>

                    <div className="h-px bg-gray-200 my-8" />

                    <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                        {blog.content}
                    </div>

                    <Link
                        to="/blog"
                        className="inline-block mt-10 text-sm font-medium text-[#1F2F45] hover:text-[#C9A24D]"
                    >
                        ← Back to Blog
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogDetails;