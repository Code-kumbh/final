
// import { useState } from "react";
// import Header from "./Header";
// const Weather = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const API_KEY = "d758dec8ef4cd41c6832a068077a0058";
//   const fetchWeather = async () => {
//     if (!city) {
//       setError("Please enter a city name");
//       return;
//     }
//     setError(null);
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       if (!response.ok) {
//         throw new Error("City not found");
//       }
//       const data = await response.json();
//       setWeather(data);
//     } catch (error) {
//       setError(error.message);
//       setWeather(null);
//     }
//   };

//   return (
//     <>
//     <Header/>
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
//         <h2 className="text-xl font-bold mb-4">Weather Checker</h2>
//         <input
//           type="text"
//           className="border p-2 rounded w-full mb-4"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
//           onClick={fetchWeather}
//         >
//           Get Weather
//         </button>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//         {weather && (
//           <div className="mt-4">
//             <h3 className="text-lg font-semibold">{weather.name}</h3>
//             <p>Temperature: {weather.main.temp}°C</p>
//             <p>Humidity: {weather.main.humidity}%</p>
//             <p>Condition: {weather.weather[0].description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Weather;



import { useState } from "react";
import Header from "./Header";
import image from '../images/weather.jpg'
import Footer from "./Footer";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "d758dec8ef4cd41c6832a068077a0058";
  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };

  return (
    <>
      <Header />
      <div
  style={{
    backgroundImage: `url(${image})`,  // ✅ Corrected this line
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  }}
  className="flex flex-col items-center justify-center min-h-screen p-4"
>
        <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-xl shadow-lg w-96 text-center border border-white/20">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Weather Checker</h2>
          <input
            type="text"
            className="border p-2 rounded w-full mb-4 text-black"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full transition"
            onClick={fetchWeather}
          >
            Get Weather
          </button>
          {error && <p className="text-red-400 mt-2">{error}</p>}
          {weather && (
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold">{weather.name}</h3>
              <p className="text-lg">🌡 Temperature: {weather.main.temp}°C</p>
              <p className="text-lg">💧 Humidity: {weather.main.humidity}%</p>
              <p className="text-lg">☁ Condition: {weather.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Weather;
