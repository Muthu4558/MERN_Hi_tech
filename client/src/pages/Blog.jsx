import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_BASE = `${import.meta.env.VITE_APP_BASE_URL}`;

const categories = [
  "All",
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

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${API_BASE}/api/blogs`);
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.subtitle.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F6F3ED] min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-[#1F2F45] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center mt-20">
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="mt-3 text-[#C9A24D]">
            Expert insights & modern interior ideas
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Search */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#1F2F45] mb-4">
              Search
            </h3>
            <input
              type="text"
              placeholder="Search blog..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C9A24D] outline-none"
            />
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#1F2F45] mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer px-4 py-2 rounded-xl transition ${selectedCategory === cat
                    ? "bg-[#1F2F45] text-white"
                    : "text-gray-700 hover:bg-[#F6F3ED]"
                    }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Blog Cards */}
        <div className="lg:col-span-3">
          {filteredBlogs.length === 0 ? (
            <p className="text-center text-gray-500">
              No blogs found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  {/* ✅ IMAGE FIXED */}
                  <img
                    src={`${API_BASE}${blog.image}`}
                    alt={blog.title}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-6">
                    <span className="text-xs text-[#C9A24D] font-medium">
                      {blog.category}
                    </span>

                    <h2 className="text-xl font-semibold text-[#1F2F45] mt-2">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 mt-3">
                      {blog.subtitle}
                    </p>

                    <Link
                      to={`/blog/${blog._id}`}
                      className="inline-block mt-6 text-[#C9A24D] font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
