// Total.js
import React from 'react';
import "./Navbar.css";
import Footer from './Footer';

const Total = () => {
  return (
    <div className="container">
    <div className="taxTotal">
      <p className="subTotalContainer">Sub Total: <span className="subTotal price">0</span></p>
      <p className="taxes">Taxes: <span id="calcTax"></span></p>
      <p className="fw-bold finalTotal">Total: <span className="total price">0</span></p>

      {/* Action Buttons */}
      <div className="action">
        <button  className="btn copy">Copy Order</button>
        <button className="btn buy">Order via Whatsapp</button>
      </div>

      {/* Cart Notice */}
      <p className="small cart_notice"></p>
    </div>
</div>
  );
}

export default Total;
