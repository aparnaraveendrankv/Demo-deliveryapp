import React, { useState } from 'react';
import "./Navbar.css";
import soupsData from './SoupData.json';

const Soups = ({ onPriceUpdate }) => {
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

  return (
    <div className="container">
      <div id="Soups">
        <h3 className={`fw-bold categoryName ${isCategoryOpen ? 'open' : ''}`} onClick={toggleCategory}>Soups</h3>
        {isCategoryOpen && (
          <div>
            {soupsData.map((soup) => (
              <div className="menuItem" key={soup.id}>
                <div className="itemDetails">
                  <div className="itemTypeMeta">
                    <img src={soup.meta.image} alt={soup.meta.type} className={soup.meta.type.toLowerCase()} />
                    <span className="itemMeta">{soup.meta.tag}</span>
                  </div>
                  <p className="itemName">{soup.name}</p>
                  <p className="itemDescription">{soup.description}</p>
                  <p className="itemPrice">{soup.price}</p>
                </div>
                <div className="itemImageBuy">
                  <img loading="lazy" className="itemImage" src={soup.image} alt={soup.name} />
                  <span className="btn-add">
                    {itemQuantity[soup.id] > 0 ? (
                      <div className="QtyBtn">
                        <button className="btn-qty" onClick={() => removeItem(soup.id, soup.price)}>–</button>
                        <span className="qty">{itemQuantity[soup.id]}</span>
                        <button className="btn-qty" onClick={() => addItem(soup.id, soup.price)}>+</button>
                      </div>
                    ) : (
                      <div className="AddBtn">
                        <button onClick={() => addItem(soup.id, soup.price)} className="add-btn">ADD</button>
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

export default Soups;
