import React, { useState } from 'react';
import "./Navbar.css";
import beveragesData from './Beverage Data.json';
import Footer from './Footer'; // Import the Footer component

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (beverage) => {
    const updatedCart = [...cart, beverage];
    setCart(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const updateTotalPrice = (updatedCart) => {
    const total = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <div>
      <Beverage 
        cart={cart}
        addItem={addItem}
        removeItem={removeItem}
      />
      <Footer totalPrice={totalPrice} />
    </div>
  );
};

export default App;
