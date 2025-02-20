// import React from "react";
// import { useNavigate } from "react-router-dom";
// import logo from '../images/logoweb.webp'
// function Header() {
//   const navigate = useNavigate();
//   return (
//     <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
//       {/* Left Side - Logo & Company Name */}
//       <div className="flex items-center space-x-3">
//         <img src={logo} alt="Logo" className="h-10 w-10" />
//         <span className="text-2xl font-bold text-black">Assan Safar</span>
//       </div>

//       {/* Right Side - Navigation Menu */}
//       <nav className="flex items-center space-x-6">
//         {["Home", "Plan My Trip", "Deals & Discounts", "Swap & Save", "About Us", "Contact"].map((item, index) => (
//           <a 
//             key={index} 
//             href="#" 
//             className="text-black text-lg font-medium hover:text-gray-600 transition duration-300"
//           >
//             {item}
//           </a>
//         ))}
//         <button className="px-5 py-2 border border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition duration-300"
//           onClick={() => {
//                           navigate("/login");
                          
//                         }}>
//           Login
//         </button>
//       </nav>
//     </header>
//   );
// }

// export default Header;


import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/logoweb.webp';

function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* Left Side - Logo & Company Name */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-black">Assan Safar</span>
      </div>

      {/* Right Side - Navigation Menu */}
      <nav className="flex items-center space-x-6">
        <NavLink to="/" className={({ isActive }) => `text-lg font-medium transition duration-300 ${isActive ? 'text-gray-600' : 'text-black hover:text-gray-600'}`}>Home</NavLink>
        <a 
  href="http://localhost:8501/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-lg font-medium transition duration-300 text-black hover:text-gray-600"
>
    Trip Visualizer
</a>
        <NavLink to="/splitter" className={({ isActive }) => `text-lg font-medium transition duration-300 ${isActive ? 'text-gray-600' : 'text-black hover:text-gray-600'}`}>Splitter</NavLink>
        <NavLink to="/list" className={({ isActive }) => `text-lg font-medium transition duration-300 ${isActive ? 'text-gray-600' : 'text-black hover:text-gray-600'}`}>Tripkit</NavLink>
        <NavLink to="/weather" className={({ isActive }) => `text-lg font-medium transition duration-300 ${isActive ? 'text-gray-600' : 'text-black hover:text-gray-600'}`}>Weather</NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => `text-lg font-medium transition duration-300 ${isActive ? 'text-gray-600' : 'text-black hover:text-gray-600'}`}>About Us</NavLink>

        <NavLink to="/login" className={({ isActive }) => `px-5 py-2 border border-black font-semibold rounded-lg transition duration-300 ${isActive ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white'}`}>Login</NavLink>
      </nav>
    </header>
  );
}

export default Header;
