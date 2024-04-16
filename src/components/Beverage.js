import React, { useState } from 'react';
import "./Navbar.css";
import beveragesData from './Beverage Data.json';

const Beverage = ({ onPriceUpdate }) => {
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
      <div id="Beverages">
        <h3 className={`fw-bold categoryName ${isCategoryOpen ? 'open' : ''}`} onClick={toggleCategory}>Beverages</h3>
        {isCategoryOpen && (
          <div>
            {beveragesData.map((beverage) => (
              <div className="menuItem" key={beverage.id}>
                <div className="itemDetails">
                  <div className="itemTypeMeta">
                    <img src={`https://yenu.menu/demo/images/vegetarian.svg`} alt={beverage.meta.type} className={beverage.meta.type.toLowerCase()} />
                    <span className="itemMeta">{beverage.meta.tag}</span>
                  </div>
                  <p className="itemName">{beverage.name}</p>
                  <p className="itemDescription">{beverage.description}</p>
                  <p className="itemPrice">{formatPriceToRupees(beverage.price)}</p>
                </div>
                <div className="itemImageBuy">
                  <img loading="lazy" className="itemImage" src={beverage.image} alt={beverage.name} />
                  <span className="btn-add">
                    {itemQuantity[beverage.id] > 0 ? (
                      <div className="QtyBtn">
                        <button className="btn-qty" onClick={() => removeItem(beverage.id, beverage.price)}>–</button>
                        <span className="qty">{itemQuantity[beverage.id]}</span>
                        <button className="btn-qty" onClick={() => addItem(beverage.id, beverage.price)}>+</button>
                      </div>
                    ) : (
                      <div className="AddBtn">
                        <button onClick={() => addItem(beverage.id, beverage.price)} className="add-btn">ADD</button>
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

export default Beverage;
