// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import ReviewSection from "./ReviewSection";
// import { Link, useNavigate } from "react-router-dom";
// import Runfile from "./Runfile";
// import ChatbotGemini from "./Chatbot";
// function Home() {


//   const navigate  = useNavigate();

//   return (
//     <div className="bg-white min-h-screen">
 
//       {/* Header */}
//       <Header />
//       <ChatbotGemini/>
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center px-4 py-20">
//         <h1 className="text-7xl font-extrabold text-black mb-4">
//           Discover Amazing Places <br /> Around the World
//         </h1>
//         <p className="text-gray-500 text-lg max-w-2xl mt-[10px]">
//           Your trusted trip planner and adventure guide. Start your journey today and
//           create unforgettable memories.
//         </p>

//         {/* Buttons */}
//         <div className="mt-6 flex space-x-4 mt-[50px]">
//           <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition">
//             Plan a Trip - It's Free
//           </button>
//           <button className="px-6 py-3 border border-black text-black text-lg font-semibold rounded-lg hover:bg-gray-100 transition"
//            onClick={() => {
//                       navigate("/chatbot");
                    
//                     }}
//           >
//             Support Us
//           </button>
//         </div>
//       </section>

//       {/* Placeholder for Popular Destinations */}
//       <section className="text-center py-12">
//         <h2 className="text-3xl font-bold text-black">Popular Destinations</h2>
//         {/* Add destination components here */}
//       </section>
 
    
//  <Runfile/>
//  <ReviewSection/>
// <Footer/>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReviewSection from "./ReviewSection";
import { Link, useNavigate } from "react-router-dom";
import Runfile from "./Runfile";
import ChatbotGemini from "./Chatbot";
// import "./Home.css"; // Import the CSS file for additional styles

function Home() {
  const navigate = useNavigate();

  return (
    <div className=" min-h-screen relative overflow-hidden">
      {/* Starry Background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Header */}
      <Header />

      {/* Chatbot */}
      <ChatbotGemini />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-black text-center px-4 py-20 relative z-10">
        <h1 className="text-7xl font-extrabold text-white mb-4">
          Discover Amazing Places <br /> Around the World
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mt-[10px]">
          Your trusted trip planner and adventure guide. Start your journey today and
          create unforgettable memories.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4 mt-[50px]">
        <button
          className="px-6 py-3 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition"
          onClick={() =>navigate("/chatbot")}
        >
          Plan a Trip - It's Free
        </button>
          <button
            className="px-6 py-3 border border-white text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
            onClick={() => navigate("/chatbot")}
          >
            Support Us
          </button>
        </div>
      </section>

      {/* Placeholder for Popular Destinations */}
      <section className="text-center py-12 relative z-10 bg-black">
        <h2 className="text-3xl font-bold text-white ">Popular Destinations</h2>
        {/* Add destination components here */}
      </section>

      {/* Additional Components */}
      <Runfile />
      <ReviewSection />
      <Footer />
    </div>
  );
}

export default Home;