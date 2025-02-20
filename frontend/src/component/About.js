import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const About = () => {
  const features = [
    { title: "Expense Splitter", icon: "💰", description: "Easily divide expenses among travelers." },
    { title: "Smart Packing Tracker", icon: "🎒", description: "Never forget an essential item with our tracker." },
    { title: "Chatbox for Instant Help", icon: "💬", description: "Get real-time assistance on your journey." },
    { title: "Cheapest Travel Options", icon: "✈", description: "Find the best budget-friendly travel deals." },
    { title: "AI-based Itinerary Planner", icon: "🤖", description: "Plan your trip efficiently with AI suggestions." },
    { title: "Multi-city Route Optimization", icon: "🗺", description: "Optimize your routes for the best experience." },
    { title: "Currency Converter", icon: "💱", description: "Convert currencies on the go with ease." },
    { title: "Weather Forecast Integration", icon: "☀", description: "Stay updated with accurate weather forecasts." },
  ];

  return (
    <>
    <Header/>
    <section className="bg-[#F9F9F9] py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          About <span className="text-green-500">YourBrand</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          At <strong>YourBrand</strong>, we are passionate about making your
          journeys seamless. Our innovative tools help you plan your trips
          efficiently, ensuring a hassle-free travel experience.
        </p>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          From itinerary planning to budget tracking, we've got everything
          covered. Join thousands of travelers who trust us to make their
          adventures unforgettable!
        </p>
        
        {/* Features Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Our Features</h3>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <span className="text-4xl">{feature.icon}</span>
                <h4 className="text-lg font-semibold mt-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-6 bg-green-500 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-green-600 transition">
          Learn More
        </button>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;

