import React, { useState } from "react";
import axios from "axios";
import { Lock, Eye, EyeOff } from "lucide-react";
import Logo from "../assets/hitech-logo-footer.jpeg"

const API_BASE = `${import.meta.env.VITE_APP_BASE_URL}`;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(`${API_BASE}/api/admin/login`, {
        email,
        password,
      });

      localStorage.setItem("adminToken", data.token);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F3ED] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4">
            <img width={160} className="rounded-xl" src={Logo} alt="logo" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-[#1F2F45]">
          Admin Login
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          Secure access to admin dashboard
        </p>

        {/* Error */}
        {error && (
          <p className="bg-red-100 text-red-600 text-sm p-3 rounded mt-4">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={submitHandler} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-[#1F2F45] mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#C9A24D] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-[#1F2F45] mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#C9A24D] outline-none pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1F2F45] cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1F2F45] text-white py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Authorized personnel only
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
