import React from "react";
import image from "../images/footer.svg";
import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="text-gray-700 pt-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Signup Section */}
        <div className="text-center mb-12">
          <h4 className="text-sm font-semibold tracking-wide text-gray-500">SIGN UP NOW</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Start your journey</h2>
          <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full mt-4">
            Sign up free
          </button>
          <p className="text-gray-500 mt-3">or download the app</p>
          <div className="flex justify-center gap-3 mt-4">
          <a href="#"><FaInstagram className="text-xl" /></a>
<a href="#"><FaTiktok className="text-xl" /></a>
<a href="#"><FaFacebook className="text-xl" /></a>
<a href="#"><FaLinkedin className="text-xl" /></a>

          </div>
        </div>

        {/* Footer Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-300 pt-10">
          {/* Logo & Social Links */}
          <div>
           
            <div className="flex gap-3 mt-3">
   
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-gray-900 font-semibold">Product</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Itinerary planner</li>
              <li>Budget planner</li>
              <li>Packing list</li>
              <li>Your map</li>
              <li>Travel profile</li>
            </ul>
          </div>

          {/* Work With Us */}
          <div>
            <h3 className="text-gray-900 font-semibold">Work with us</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Travel bloggers</li>
              <li>Influencers</li>
              <li>DMOs</li>
              <li>Travel agents</li>
              <li>Hotels</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Blog</li>
              <li>About us</li>
              <li>Give us feedback</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-10 py-6 text-sm text-gray-500 flex justify-between">
          <p>© Copyright 2024 YourBrand. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
