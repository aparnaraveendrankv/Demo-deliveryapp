// Desserts.js
import React, { useState } from 'react';
import "./Navbar.css";
import dessertsData from './DesertData.json';

const Desserts = ({ onPriceUpdate }) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [itemQuantity, setItemQuantity] = useState({});
  
    const toggleCategory = () => {
      setIsCategoryOpen(!isCategoryOpen);
    };
  
    const addItem = (itemId, price) => {
      setItemQuantity(prevState => ({
        ...prevState,
        [itemId]: (prevState[itemId] || 0) + 1
      }));
      onPriceUpdate((prevPrice) => prevPrice + parseFloat(price));
    };
  
    const removeItem = (itemId, price) => {
      if (itemQuantity[itemId] > 0) {
        setItemQuantity(prevState => ({
          ...prevState,
          [itemId]: prevState[itemId] - 1
        }));
        onPriceUpdate((prevPrice) => prevPrice - parseFloat(price));
      }
    };

  // Function to format price to Indian Rupees format
  const formatPriceToRupees = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <div className="container">
      <div id="Desserts">
        <h3 className={`fw-bold categoryName ${isCategoryOpen ? 'open' : ''}`} onClick={toggleCategory}>
          Desserts
        </h3>
        {isCategoryOpen && (
          <div className="categoryContent">
            {dessertsData.map((dessert) => (
              <div className="menuItem" key={dessert.id}>
                <div className="itemDetails">
                  <div className="itemTypeMeta">
                    <img src={dessert.meta.image} alt={dessert.meta.type} className={dessert.meta.type.toLowerCase()} />
                    <span className="itemMeta">{dessert.meta.tag}</span>
                  </div>
                  <p className="itemName">{dessert.name}</p>
                  <p className="itemDescription">{dessert.description}</p>
                  <p className="itemPrice">{formatPriceToRupees(dessert.price)}</p> {/* Format price to Rs */}
                </div>
                
                <div className="itemImageBuy">
                  <img loading="lazy" className="itemImage" src={dessert.image} alt={dessert.name} />
                  <span className="btn-add">
                    {itemQuantity[dessert.id] > 0 ? (
                      <div className="QtyBtn">
                        <button className="btn-qty" onClick={() => removeItem(dessert.id, dessert.price)}>–</button>
                        <span className="qty">{itemQuantity[dessert.id]}</span>
                        <button className="btn-qty" onClick={() => addItem(dessert.id, dessert.price)}>+</button>
                      </div>
                    ) : (
                        <div className="AddBtn">
                          <button onClick={() => addItem(dessert.id, dessert.price)} className="add-btn">ADD</button>
                        </div>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Desserts;
