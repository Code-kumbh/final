import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "./Header";
import image from '../images/splitter.jpg'
import Footer from "./Footer";
function Splitter() {
  const [members, setMembers] = useState([{ name: "", amount: "" }]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [amount1, setAmount1] = useState();
  const [payloader, setPayloader] = useState(false);
  const [price, setPrice] = useState(0);

  const addMember = () => {
    setMembers([...members, { name: "", amount: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const calculateSplit = () => {
    const totalAmount = members.reduce((sum, member) => sum + (parseFloat(member.amount) || 0), 0);
    const average = totalAmount / members.length;
    setPrice(totalAmount); // Set price for Razorpay
    
    const balances = members.map((member) => ({
      name: member.name || "Unknown",
      balance: (parseFloat(member.amount) || 0) - average,
    }));

    const debtors = balances.filter((p) => p.balance < 0).sort((a, b) => a.balance - b.balance);
    const creditors = balances.filter((p) => p.balance > 0).sort((a, b) => b.balance - a.balance);

    const transactions = [];
    while (debtors.length && creditors.length) {
      const debtor = debtors[0];
      const creditor = creditors[0];
      const amount = Math.min(-debtor.balance, creditor.balance);
      setAmount1(amount)
      transactions.push({
        from: debtor.name,
        to: creditor.name,
        amount: Number(amount.toFixed(2)),
      });

      debtor.balance += amount;
      creditor.balance -= amount;

      if (debtor.balance >= -0.01) debtors.shift();
      if (creditor.balance <= 0.01) creditors.shift();
    }
    setTransactions(transactions);
  };


  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) {
        resolve(true);
        return;
      }
  
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const handlePayNow = async () => {
    setPayloader(true);
    
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      toast.error("Failed to load Razorpay. Please check your internet connection.");
      setPayloader(false);
      return;
    }
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/payment/create-order`, {
        amount: amount1 , // Convert to paise
        currency: "INR",
      });
  
      const { amount, currency, id: order_id } = response.data;
     console.log(amount,currency,order_id,"mohit")
      const options = {
        key: "rzp_test_PkF9BQAUC6ab47", // Replace with your Razorpay Key ID
        amount: amount,
        currency: currency,
        name: "Aasan Safar Payment",
        description: `Payment for ₹${price}`,
        order_id: order_id,
        handler: async function (response) {
          toast.success("Payment Successful!");
          setPayloader(false);
          await axios.post(`${process.env.REACT_APP_API_URL}/payment/verify-payment`, response);
          toast.success("Your payment has been verified.");
        },
        prefill: {
          name: "User",
          email: "user@example.com",
        },
        theme: {
          color: "#0b7bfa",
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment initiation failed. Please try again.");
      setPayloader(false);
    }
  };
  return (
    <>
    <div
 style={{
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  }}
    >

    
      <Header />
      <div
  
       className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-[100px] border-2 border-black">
        <h2 className="text-xl font-bold mb-4">Bill Splitter</h2>
        {members.map((member, index) => (
          <div key={index} className="mb-2 flex space-x-2">
            <input
              type="text"
              placeholder="Person Name"
              value={member.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
            <input
              type="number"
              placeholder="Amount"
              value={member.amount}
              onChange={(e) => handleChange(index, "amount", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
          </div>
        ))}
        <button onClick={addMember} className="bg-blue-500 text-white p-2 rounded mt-5">Add Member</button>
        <button onClick={calculateSplit} className="bg-green-500 text-white p-2 rounded mt-2 ml-5">Calculate Payments</button>

        {transactions.length > 0 && (
          <div className="mt-4 p-3 bg-gray-100 rounded">
            <h3 className="font-bold mb-2">Payment Transactions</h3>
            {transactions.map((transaction, index) => (
              <div key={index} className="flex justify-between items-center mt-2 p-2 bg-white rounded">
                <div>
                  <span className="font-medium">{transaction.from}</span> should pay
                  <span className="font-medium"> {transaction.to}</span>: ₹{transaction.amount}
                </div>
                <button
                  className={`px-3 py-1 rounded ml-4 text-white transition ${payloader ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}
                  onClick={handlePayNow}
                  disabled={payloader}
                >
                  {payloader ? "Processing..." : "Pay Now"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Splitter

    