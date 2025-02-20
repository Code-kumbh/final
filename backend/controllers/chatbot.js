import axios from 'axios'

export const chatbot = async (req,res) => {
    console.log("insider chatbot")
    const { question } = req.body;
    console.log("questionn",question)
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }
    
  
    try {
      // Call a third-party API (e.g., OpenAI, ChatGPT, or any other API)
      
  
         // Replace with the actual third-party API URL
         const thirdPartyResponse = await axios.post(process.env.CHATBOT_SERVER, {
          question: question, // Send question at the root level
      });
      console.log("done❤️❤️❤️")
  
      // Extract the response from the third-party API
      const answer = thirdPartyResponse.data; // Adjust based on the third-party API response structure
  
      // Send the response back to the frontend
      console.log("result ->",answer.answer)
     
      res.json({ answer: answer.answer });
    } catch (error) {
      console.error('Error calling third-party API:', error);
      res.status(500).json({ error: 'Failed to fetch response from the third-party API' });
    }
  
}