// src/Pages/AdminCreate.jsx
import React, { useState } from "react";
import axios from "axios";

const AdminCreate = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    role: "admin",
    created_by: "", // optional: could be superAdmin id
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
        const token = localStorage.getItem("token"); // get token from login

      const res = await axios.post("http://localhost:7069/superAdmin/api/admins", formData,{
         
    headers: {
      Authorization: `Bearer ${token}` // your JWT token from login
    }
      }); 
      setMessage(res.data.message);
    //   setFormData({ name: "", username: "", password: "", role: "admin", created_by: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Admin</h2>

      {message && <p className="text-green-500 mb-2">{message}</p>}
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="vendor">Vendors</option>

          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Created By (Optional)</label>
          <input
            type="text"
            name="created_by"
            value={formData.created_by}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Admin
        </button>
      </form>
    </div>
  );
};

export default AdminCreate;
