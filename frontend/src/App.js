// import React from 'react';
// import { useEffect,useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// import Pramble from './pages/Pramble';
// import Fduties from './pages/fduties';


// const App = () => {
 
//   return (
//     <Router>
//       <Routes>
//       <Route path='/duties' element={<Fduties/>}/>
    
//       </Routes>
//       {/* <ToastContainer /> */}
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './component/Header';
import Home from './component/Home';
import Splitter from './component/Splitter';
import Register from './loginpages/Register';
// import UserLogin from './LoginRegisterPages/UserLogin';
import Login from './loginpages/Login';
import Chatbotgemini from './component/Chatbot';
import TravelPlannerApp from './component/TravelPlannerApp ';
import About from './component/About';
import Weather from './component/Weather';
import Planpage from './component/Planpage';
import WebChatbot from './component/WebChatbot';
function App() {
  return (
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/login' element={<UserLogin/>}/> */}
    <Route path='/splitter' element={<Splitter/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/chatbot' element={<WebChatbot/>}/>
    <Route path='/travel' element={<TravelPlannerApp/>}/>
    <Route path='/aboutus' element={<About/>}/>
    <Route path='/weather' element={<Weather/>}/>
    <Route path='/list' element={<Planpage/>}/>
    </Routes>
  );
}

export default App;
