
// import React, { useState } from 'react';
// import Header from './Header';
// function Chatbotgemini() {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     setLoading(true);
//     setResponse('');
//     console.log("question",input)
    

//     try {
//       // Replace with your backend API endpoint
    
//       const response = await fetch( `${process.env.REACT_APP_API_URL}/chatbot/answer`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ question: input }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log("result ->",response)
//       setResponse(data.answer); // Assuming the backend returns an object with an 'answer' field
//     } catch (error) {
//       console.error('Error fetching response:', error);
//       setResponse('Sorry, something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//     <Header/>
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-4">Chatbot</h1>
//       <form onSubmit={handleSubmit} className="flex gap-2">
//         <input
//           type="text"
//           value={input}
//           onChange={handleInputChange}
//           placeholder="Ask me anything..."
//           disabled={loading}
//           className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           {loading ? 'Sending...' : 'Send'}
//         </button>
//       </form>

//       {loading && (
//         <div className="mt-4 text-center text-gray-600 italic">Loading...</div>
//       )}

//       {response && (
//         <div className="mt-4 p-4 bg-gray-100 rounded-lg">
//           <strong className="font-semibold">Response:</strong> {response}
//         </div>
//       )}
//     </div>
//     </>
//   );
// }

// export default Chatbotgemini;

import React, { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import Header from './Header';

function ChatbotGemini() {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    console.log("question", input);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/chatbot/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponses(prevResponses => [...prevResponses, { question: input, answer: data.answer }]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponses(prevResponses => [...prevResponses, { question: input, answer: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <>
      
      <div className="fixed bottom-5 right-5 z-50">
        {!isOpen && (
          <button
            onClick={toggleChatbox}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            <BsChatDots size={24} />
          </button>
        )}

        {isOpen && (
          <div className=" w-96 h-[400px] bg-white shadow-lg rounded-lg p-4 fixed bottom-16 right-5 border border-gray-300 flex flex-col">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-bold">Chatbot</h2>
              <button onClick={toggleChatbox} className="text-gray-500 hover:text-red-500">
                <IoMdClose size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-2" style={{ maxHeight: '70%' }}>
              {responses.map((res, index) => (
                <div key={index} className="p-2 bg-gray-100 rounded-lg">
                  <strong className="font-semibold">You:</strong> {res.question}
                  <br />
                  <strong className="font-semibold">Bot:</strong> {res.answer}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything..."
                disabled={loading}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default ChatbotGemini;
