// src/Pages/SuperAdmin.jsx
import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const SuperAdmin = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     // navigate("/");
//   };

  return (
    <div>
      <nav className="bg-black text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-6">
          <Link to="Admin" className="hover:underline">
            Create Admin
          </Link>
          <Link to="Manager" className="hover:underline">
            Create Manager
          </Link>
          <Link to="Vendor" className="hover:underline">
            Create Vendor
          </Link>
          <Link to="adminList" className="hover:underline">
            Admin List
          </Link>
          <Link to="managerList" className="hover:underline">
            Manager List
          </Link>
          <Link to="vendorList" className="hover:underline">
            Vendor List
          </Link>
           <Link to="/" className="hover:underline ml-30">
            logout
          </Link>
        </div>

        {/* <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded"
        >
          Logout
        </button> */}
      </nav>

      {/* Main content */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default SuperAdmin;
