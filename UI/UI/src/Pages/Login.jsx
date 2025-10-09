import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bgImage from "../assets/image.png";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      role: "super_admin",
    },
  });

  const onSubmit = async (data) => {
    console.log("Submitting login data:", data); 

    try {
      
      const res = await axios.post("http://127.0.0.1:7069/api/login", {
        username: data.name,
        password: data.password,
        role: data.role,
      });

      console.log("Backend response:", res.data); 
      const { token, user } = res.data;

      if (!user || !user.role) {
        alert("User data missing in response");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
       localStorage.setItem("userId", user.id);      
      localStorage.setItem("role", user.role); 

      switch (user.role.toLowerCase()) {
        case "super_admin":
          navigate("/superAdmin");
          break;
        case "admin":
          navigate("/admin");
          break;
        case "manager":
          navigate("/manager");
          break;
        case "vendor":
          navigate("/vendor");
          break;
        default:
          alert("Unknown role. Contact admin.");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err);
      alert(err || "Invalid login credentials");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      <div className="relative z-10 bg-white/90 p-8 rounded-xl shadow-lg w-96">
        <h3 className="text-center text-2xl font-bold mb-6 text-blue-600">
          Task
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Username</label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", { required: "Username is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", { required: "Password is required" })}
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Login as</label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("role", { required: "Role is required" })}
            >
              <option value="super_admin">Super_Admin</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
