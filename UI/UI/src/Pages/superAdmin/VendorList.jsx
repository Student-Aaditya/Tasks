import axios from 'axios';
import React, { useEffect, useState } from 'react';

function VendorList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAdmins() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://127.0.0.1:7069/superAdmin/api/vendors", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(res.data.result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAdmins();
  }, []);

  const Delete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const del = await axios.delete(`http://127.0.0.1:7069/admin/api/vendors/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      alert("User deleted successfully!");


    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen bg-sky-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-sky-800">Admin Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-sky-300">
            <tr>
              <th className="text-left py-3 px-6 font-semibold text-white">#</th>
              <th className="text-left py-3 px-6 font-semibold text-white">Name</th>
              <th className="text-left py-3 px-6 font-semibold text-white">Role</th>
              <th className="text-left py-3 px-6 font-semibold text-white">Username</th>
              <th className="text-left py-3 px-6 font-semibold text-white">Password</th>
              <th className="text-left py-3 px-6 font-semibold text-white">Delete</th>

            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-sky-200 hover:bg-sky-100 transition-colors duration-200"
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">{item.role}</td>
                <td className="py-3 px-6">{item.username}</td>
                <td className="py-3 px-6">{item.password}</td>
                <td className="py-3 px-6">{item.created_by}</td>
                <td> <button onClick={() => Delete(item.id)} >Delete</button></td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VendorList;
