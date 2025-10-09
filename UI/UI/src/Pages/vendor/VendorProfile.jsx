import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaIdBadge, FaBriefcase, FaUserPlus } from "react-icons/fa";

function VendorProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function profile() {
      try {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("userId");
        const role = localStorage.getItem("role");

        const res = await axios.get("http://127.0.0.1:7069/vendor/api/profile", {
          params: { id, role },
          headers: { Authorization: `Bearer ${token}` },
        });

        setData(res.data);
      } catch (err) {
        console.log("Error fetching profile:", err || err.message);
      } finally {
        setLoading(false);
      }
    }

    profile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">Failed to load vendor profile 😞</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-all hover:scale-[1.02]">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-6 text-center">
          Vendor Profile
        </h1>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <FaIdBadge className="text-blue-500" />
            <p><span className="font-semibold">ID:</span> {data.id}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaUser className="text-blue-500" />
            <p><span className="font-semibold">Name:</span> {data.name}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <p><span className="font-semibold">Username:</span> {data.username}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaBriefcase className="text-blue-500" />
            <p><span className="font-semibold">Role:</span> {data.role}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaUserPlus className="text-blue-500" />
            <p><span className="font-semibold">Created By:</span> {data.created_by}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Refresh Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default VendorProfile;
