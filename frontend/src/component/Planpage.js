import React, { useState } from 'react';
import styles from './Planpage.module.css';
import Header from './Header';
import Footer from './Footer';
const Planpage = () => {
  const categories = ['clothes', 'electronics', 'documents', 'food', 'toiletries', 'miscellaneous'];

  // State to manage items for each category
  const [items, setItems] = useState({
    clothes: [],
    electronics: [],
    documents: [],
    food: [],
    toiletries: [],
    miscellaneous: [],
  });

  // Function to add an item to a category
  const addItem = (category) => {
    const input = document.getElementById(`${category}-input`);
    const newItem = input.value.trim();

    if (newItem === '') {
      alert('Please enter an item.');
      return;
    }

    setItems((prevItems) => ({
      ...prevItems,
      [category]: [...prevItems[category], newItem],
    }));

    input.value = ''; // Clear input
    updateProgress(category);
  };

  // Function to delete an item from a category
  const deleteItem = (category, index) => {
    setItems((prevItems) => ({
      ...prevItems,
      [category]: prevItems[category].filter((_, i) => i !== index),
    }));
    updateProgress(category);
  };

  // Function to clear all items in a category
  const clearAll = (category) => {
    setItems((prevItems) => ({
      ...prevItems,
      [category]: [],
    }));
    updateProgress(category);
  };

  // Function to update progress bar and item count
  const updateProgress = (category) => {
    const progress = document.getElementById(`${category}-progress`);
    const count = document.getElementById(`${category}-count`);
    const itemCount = items[category].length;

    // Update progress bar width (max 10 items for 100%)
    const progressWidth = (itemCount / 10) * 100;
    progress.style.width = `${progressWidth}%`;

    // Update item count
    count.textContent = itemCount;

    // Change progress color based on completion
    if (progressWidth >= 100) {
      progress.style.backgroundColor = '#4caf50';
    } else if (progressWidth >= 50) {
      progress.style.backgroundColor = '#ffeb3b';
    } else {
      progress.style.backgroundColor = '#76c7c0';
    }
  };

  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerImage}>
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Traveler with Backpack"
          />
        </div>
        <h1 className={styles.heading}>Budget Traveler Packing List</h1>
        <div className={styles.introText}>
          <p>The packing list to help you (and your forgetful friend)</p>
          <p>Enjoy your trips care-free</p>
          <div className={styles.checkpoints}>
            <div className={styles.checkpoint}>
              <span>✔</span> Use predefined lists and categories that suit your trip
            </div>
            <div className={styles.checkpoint}>
              <span>✔</span> Pack together: create shared packing checklists
            </div>
            <div className={styles.checkpoint}>
              <span>✔</span> Assign items to different people so nothing is left behind
            </div>
          </div>
          <p>Create custom lists according to your needs</p>
        </div>

        {/* Grid Container with Categories */}
        <div className={styles.gridContainer}>
          {categories.map((category) => (
            <div key={category} className={styles.category}>
              <h2>
                {category.charAt(0).toUpperCase() + category.slice(1)}{' '}
                <span className={styles.itemCount} id={`${category}-count`}>
                  {items[category].length}
                </span>
              </h2>
              <div className={styles.progressBar}>
                <div className={styles.progress} id={`${category}-progress`}></div>
              </div>
              <input
                type="text"
                id={`${category}-input`}
                placeholder="Add an item..."
                className={styles.input}
              />
              <button onClick={() => addItem(category)} className={styles.button}>
                Add
              </button>
              <button
                onClick={() => clearAll(category)}
                className={`${styles.button} ${styles.clearButton}`}
              >
                Clear All
              </button>
              <ul className={styles.list}>
                {items[category].map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    {item}
                    <button
                      onClick={() => deleteItem(category, index)}
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Planpage; 
