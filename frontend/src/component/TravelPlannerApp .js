
import React, { useState } from "react";

const packingItems = [
  { category: "Clothing", items: ["T-Shirts", "Jeans", "Jacket", "Shoes", "Socks"] },
  { category: "Toiletries", items: ["Toothbrush", "Toothpaste", "Shampoo", "Soap", "Towel"] },
  { category: "Essentials", items: ["Phone Charger", "Wallet", "Passport", "Sunglasses", "Keys"] },
  { category: "Miscellaneous", items: ["Snacks", "Headphones", "Notebook", "Water Bottle", "Umbrella"] }
];

const TravelPlannerApp = () => {
  const [checkedItems, setCheckedItems] = useState({});
  
  const handleCheck = (category, item) => {
    setCheckedItems(prev => ({
      ...prev,
      [`${category}-${item}`]: !prev[`${category}-${item}`]
    }));
  };
  
  const resetList = () => setCheckedItems({});
  
  const markAllPacked = () => {
    let allChecked = {};
    packingItems.forEach(({ category, items }) => {
      items.forEach(item => {
        allChecked[`${category}-${item}`] = true;
      });
    });
    setCheckedItems(allChecked);
  };
  
  const packedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalItems = packingItems.reduce((sum, { items }) => sum + items.length, 0);
  const progress = Math.round((packedCount / totalItems) * 100);
  
  return (
    <div className="packing-container">
      <h2>Packing List</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>{progress}%</div>
      </div>
      {packingItems.map(({ category, items }) => (
        <div key={category} className="category">
          <h3>{category}</h3>
          <ul>
            {items.map(item => (
              <li key={item}>
                <label>
                  <input 
                    type="checkbox" 
                    checked={!!checkedItems[`${category}-${item}`]} 
                    onChange={() => handleCheck(category, item)}
                  />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="buttons">
        <button onClick={resetList}>Reset List</button>
        <button onClick={markAllPacked}>Mark All Packed</button>
      </div>
    </div>
  );
};

export default TravelPlannerApp;

