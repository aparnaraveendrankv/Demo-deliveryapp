// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Footer = ({ totalPrice }) => {
  const formattedPrice = `Rs ${isNaN(totalPrice) ? '0.00' : totalPrice.toFixed(2)}`;

  return (
    <div className="container">
      <div className="footer">
        <Link to="/" className="option">
          <img src="https://yenu.menu/demo/images/menu.svg" alt="menu page link" />
          <span className="small">Menu</span>
        </Link>
        <Link to="/about" className="option">
          <img src="https://yenu.menu/demo/images/about.svg" alt="about page link" />
          <span className="small">About</span>
        </Link>
        <Link to="/pay" className="option">
          <img src="https://yenu.menu/demo/images/pay.svg" alt="cart page link" />
          <span className="small">Pay Us</span>
        </Link>
        <Link to="/checkout" className="option">
          <img src="https://yenu.menu/demo/images/cart.svg" alt="checkout page link" />
          <span className="small">Total: <span className="hover-total-price">{formattedPrice}</span></span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
