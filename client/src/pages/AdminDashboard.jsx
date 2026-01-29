import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Edit2Icon } from "lucide-react";
import { MdDelete } from "react-icons/md";

const API_BASE = `${import.meta.env.VITE_APP_BASE_URL}`;

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null); // 👈 modal control
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${API_BASE}/api/blogs`);
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [token, navigate]);

  const confirmDelete = async () => {
    try {
      await axios.delete(`${API_BASE}/api/blogs/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBlogs((prev) => prev.filter((b) => b._id !== deleteId));
      setDeleteId(null);
    } catch (error) {
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F3ED] text-gray-600">
        Loading dashboard…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F3ED] px-6 py-10">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-[#1F2F45]">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage blogs published on the website
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate("/")}
            className="border border-[#1F2F45] text-[#1F2F45] px-4 py-2 rounded-lg hover:bg-[#1F2F45] hover:text-white transition cursor-pointer"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/blog")}
            className="border border-[#1F2F45] text-[#1F2F45] px-4 py-2 rounded-lg hover:bg-[#1F2F45] hover:text-white transition cursor-pointer"
          >
            Blog
          </button>

          <button
            onClick={() => navigate("/admin/enquiries")}
            className="bg-[#1F2F45] text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Enquiries
          </button>

          <button
            onClick={() => navigate("/admin/create")}
            className="bg-[#1F2F45] text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            + New Blog
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              navigate("/admin/login");
            }}
            className="text-sm text-red-600 border border-red-400 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto">
        {blogs.length === 0 ? (
          <p className="text-gray-600">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={`${API_BASE}${blog.image}`}
                  alt={blog.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-5">
                  <span className="text-xs text-[#C9A24D] font-medium">
                    {blog.category}
                  </span>

                  <h2 className="text-base font-semibold text-[#1F2F45] mt-2 line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {blog.subtitle}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() =>
                        navigate(`/admin/edit/${blog._id}`)
                      }
                      className="text-sm text-blue-600 flex items-center gap-1 cursor-pointer"
                    >
                      <Edit2Icon size={14} /> Edit
                    </button>

                    <button
                      onClick={() => setDeleteId(blog._id)}
                      className="text-sm text-red-600 flex items-center gap-1 cursor-pointer"
                    >
                      <MdDelete size={16} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold text-[#1F2F45] mb-3">
              Delete Blog?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              This action cannot be undone. Are you sure you want to delete
              this blog?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 border rounded-lg cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
