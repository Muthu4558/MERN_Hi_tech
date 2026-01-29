import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE = `${import.meta.env.VITE_APP_BASE_URL}`;

const AdminEnquiries = () => {
    const [enquiries, setEnquiries] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");

    useEffect(() => {
        if (!token) return navigate("/admin/login");

        const fetchData = async () => {
            const { data } = await axios.get(`${API_BASE}/api/enquiries`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setEnquiries(data);
        };

        fetchData();
    }, [token, navigate]);

    return (
        <div className="min-h-screen bg-[#F6F3ED] px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-semibold text-[#1F2F45]">
                        Enquiries
                    </h1>

                    <button
                        onClick={() => navigate("/admin/dashboard")}
                        className="border px-4 py-2 rounded-lg cursor-pointer"
                    >
                        ← Back
                    </button>
                </div>

                {enquiries.length === 0 ? (
                    <p>No enquiries found.</p>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-[#1F2F45] text-white">
                                <tr>
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">Phone</th>
                                    <th className="p-3 text-left">Email</th>
                                    <th className="p-3 text-left">Location</th>
                                    <th className="p-3 text-left">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enquiries.map((e) => (
                                    <tr key={e._id} className="border-b">
                                        <td className="p-3">{e.name}</td>
                                        <td className="p-3">{e.phone}</td>
                                        <td className="p-3">{e.email}</td>
                                        <td className="p-3">{e.location}</td>
                                        <td className="p-3">{e.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminEnquiries;
