// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     otp: "",
//   });

//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const navigate = useNavigate();

//   // Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Send OTP
//   const sendOTP = async () => {
//     if (!formData.email) {
//       toast.error("Please enter your email", { position: "top-right" });
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/send-otp", {
//         email: formData.email,
//       });

//       if (response.data.success) {
//         toast.success("OTP sent to your email!", { position: "top-right" });
//         setOtpSent(true);
//       } else {
//         toast.error("Failed to send OTP", { position: "top-right" });
//       }
//     } catch (error) {
//       toast.error("Error sending OTP", { position: "top-right" });
//     }
//   };

//   // Verify OTP
//   const verifyOTP = async () => {
//     if (!formData.otp) {
//       toast.error("Please enter the OTP", { position: "top-right" });
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/verify-otp", {
//         email: formData.email,
//         otp: formData.otp,
//       });

//       if (response.data.success) {
//         toast.success("OTP Verified!", { position: "top-right" });
//         setOtpVerified(true);
//       } else {
//         toast.error("Invalid OTP", { position: "top-right" });
//       }
//     } catch (error) {
//       toast.error("Error verifying OTP", { position: "top-right" });
//     }
//   };

//   // Submit Registration
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!otpVerified) {
//       toast.error("Please verify OTP first", { position: "top-right" });
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/register", {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//       });

//       if (response.data.success) {
//         toast.success("Registration successful!", { position: "top-right" });
//         navigate("/home"); // Redirect to Home Page
//       } else {
//         toast.error("Registration failed", { position: "top-right" });
//       }
//     } catch (error) {
//       toast.error("Error registering user", { position: "top-right" });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Username */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter your username"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Send OTP Button */}
//           {!otpSent && (
//             <button
//               type="button"
//               onClick={sendOTP}
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-4"
//             >
//               Send OTP
//             </button>
//           )}

//           {/* OTP Input & Verify Button */}
//           {otpSent && (
//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium">Enter OTP</label>
//               <input
//                 type="text"
//                 name="otp"
//                 value={formData.otp}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter OTP"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={verifyOTP}
//                 className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//               >
//                 Verify OTP
//               </button>
//             </div>
//           )}

//           {/* Password */}
//           {otpVerified && (
//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//           )}

//           {/* Submit Button */}
//           {otpVerified && (
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//             >
//               Register
//             </button>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { IoAirplaneOutline } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import flight from "../images/flightimage.jpg";
import Header from "../component/Header";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOTP = async () => {
    if (!formData.email) {
      toast.error("Please enter your email", { position: "top-right" });
      return;
    }
    setOtpSent(true);
    toast.success("OTP sent to your email!", { position: "top-right" });
  };

  const verifyOTP = async () => {
    if (!formData.otp) {
      toast.error("Please enter the OTP", { position: "top-right" });
      return;
    }
    setOtpVerified(true);
    toast.success("OTP Verified!", { position: "top-right" });
  };

  // Submit Registration
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!otpVerified) {
    toast.error("Please verify OTP first", { position: "top-right" });
    return;
  }

  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    toast.success("Registration successful!", { position: "top-right" });

    // Delay navigation after showing toast
    setTimeout(() => {
      navigate("/"); // Redirect after showing toast
    }, 3000);
  }, 5000); // Simulating a 5-sec loader before toast
};


  return (
    <>
      <ToastContainer />
      <Header />
      <div className="relative flex justify-center items-center h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${flight})`, opacity: 0.4 }}
        ></div>
        <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-96">
          <div className="flex flex-col items-center mb-4">
            <IoAirplaneOutline className="text-blue-600 text-5xl" />
            <h2 className="text-2xl font-bold text-center mt-2">Create an Account</h2>
            <p className="text-gray-600 text-sm">Join us to explore smart travel planning</p>
          </div>
          <form onSubmit={handleSubmit}>
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
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            {!otpSent && (
              <button
                type="button"
                onClick={sendOTP}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg hover:opacity-90 transition mb-4"
              >
                Send OTP
              </button>
            )}
            {otpSent && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Enter OTP</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter OTP"
                    required
                  />
                  {!otpVerified ? (
                    <button
                      type="button"
                      onClick={verifyOTP}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                      Verify
                    </button>
                  ) : (
                    <FaCheckCircle className="text-green-500 text-2xl" />
                  )}
                </div>
              </div>
            )}
            {otpVerified && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
              </div>
            )}
            {otpVerified && (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-lg hover:opacity-90 transition flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full"
                      viewBox="0 0 24 24"
                    ></svg>
                    Processing...
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
