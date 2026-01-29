import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE = `${import.meta.env.VITE_APP_BASE_URL}`;

const categories = [
    "Mosquito Nets",
    "Ceiling Cloth Hangers",
    "Wall Mounted Shoe Racks",
    "Toughened Glass Doors",
    "UPVC Windows & Doors",
    "ACP Cladding Works",
    "PVC Loft Cupboards",
    "False Ceiling Works",
    "All Kinds of Aluminum Fabrication Works",
];

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");

    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        category: "",
        content: "",
    });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const { data } = await axios.get(`${API_BASE}/api/blogs`);
                const blog = data.find((b) => b._id === id);

                setFormData({
                    title: blog.title,
                    subtitle: blog.subtitle,
                    category: blog.category,
                    content: blog.content,
                });
                setPreview(`${API_BASE}${blog.image}`);
            } catch (error) {
                alert("Failed to load blog");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) =>
            data.append(key, value)
        );
        if (image) data.append("image", image);

        try {
            await axios.put(`${API_BASE}/api/blogs/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            navigate("/admin/dashboard");
        } catch (error) {
            alert("Update failed");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F6F3ED] text-gray-600">
                Loading blog…
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F6F3ED] px-6 py-10">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold text-[#1F2F45]">
                        Edit Blog
                    </h1>
                    <p className="text-sm text-gray-600 mt-2">
                        Update the blog details and image
                    </p>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => navigate("/admin/dashboard")}
                    className="inline-flex items-center gap-2 border border-[#1F2F45] text-[#1F2F45] px-4 py-2 rounded-lg hover:bg-[#1F2F45] hover:text-white transition cursor-pointer"
                >
                    ← Back
                </button>
            </div>

            {/* Form */}
            <form
                onSubmit={submitHandler}
                className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                {/* Left – Content */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[#1F2F45] mb-2">
                            Blog Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C9A24D] outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#1F2F45] mb-2">
                            Blog Subtitle
                        </label>
                        <input
                            type="text"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C9A24D] outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#1F2F45] mb-2">
                            Category
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C9A24D] outline-none"
                            required
                        >
                            {categories.map((cat, i) => (
                                <option key={i} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#1F2F45] mb-2">
                            Blog Content
                        </label>
                        <textarea
                            name="content"
                            rows="8"
                            value={formData.content}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C9A24D] outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Right – Image */}
                <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col">
                    <label className="block text-sm font-medium text-[#1F2F45] mb-3">
                        Blog Image
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mb-4 border p-2 rounded-xl"
                    />

                    {preview ? (
                        <img
                            src={preview}
                            alt="Preview"
                            className="rounded-xl object-cover h-48 w-full"
                        />
                    ) : (
                        <div className="h-48 w-full border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400 text-sm">
                            Image preview will appear here
                        </div>
                    )}

                    <button
                        type="submit"
                        className="mt-6 bg-[#1F2F45] text-white py-3 rounded-lg hover:opacity-90 transition cursor-pointer"
                    >
                        Update Blog
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditBlog;
