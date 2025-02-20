import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
function WebChatbot() {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/chatbot/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponses([...responses, { question: input, answer: data.answer }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponses([...responses, { question: input, answer: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Assan Safar Trip Planner</h1>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-lg">
        <div className="h-96 overflow-y-auto border-b border-gray-600 p-2">
          {responses.map((res, index) => (
            <div key={index} className="mb-2">
              <p className="text-blue-400">You: {res.question}</p>
              <p className="text-green-400">Bot: {res.answer}</p>
            </div>
          ))}
          {loading && <p className="text-gray-400">Loading...</p>}
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 bg-gray-700 text-white rounded-l focus:outline-none"
            placeholder="Ask something..."
          />
          <button type="submit" className="p-2 bg-blue-500 hover:bg-blue-600 rounded-r">
            Send
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default WebChatbot;
