
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoAirplaneOutline } from "react-icons/io5";
import { PuffLoader } from "react-spinners";
import flight from "../images/flightimage.jpg";
import Header from "../component/Header";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Start loader

    // Show toast notification
    toast.success("Login successful!", { position: "top-right" });

    // Simulate a 5-second delay before navigating
    setTimeout(() => {
      setLoading(false); // Stop loader
      navigate("/");
    }, 5000);
  };

  return (
    <>
    <ToastContainer/>
      <Header />
      <div className="relative flex justify-center items-center h-screen">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${flight})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        >
          <div className="absolute inset-0 bg-white opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-96">
          <div className="flex flex-col items-center mb-4">
            <IoAirplaneOutline className="text-blue-600 text-5xl" />
            <h2 className="text-2xl font-bold text-center mt-2">Welcome Back</h2>
            <p className="text-gray-600 text-sm">
              Plan your journey with smart budgeting
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type={formData.showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
              <span
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {formData.showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Login Button with Loader */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg hover:opacity-90 transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? <PuffLoader color="#fff" size={20} /> : "Login"}
            </button>
          </form>

          <div className="flex justify-center items-center my-2">
            <span className="text-gray-500">or</span>
          </div>

          <button
            className="w-full bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300 transition"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

          <p className="text-center text-blue-600 text-sm mt-2 cursor-pointer hover:underline">
            Forgot your password?
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
