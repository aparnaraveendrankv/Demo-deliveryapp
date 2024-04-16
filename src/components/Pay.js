// Pay.js
import React from 'react';
import "./Navbar.css";
import Footer from './Footer';

const Pay = () => {
  return (
    <div className="container">
      <img className="qr-image" src="https://yenu.menu/demo/images/qr.jpg" alt="QR Code" />
      <p className="qr-helper-text">Scan the QR code to pay</p>
      <div className="payment-options boxes">
        <div className="box">
          <img src="https://yenu.menu/demo/images/payment_processors/googlepay.png" alt="Google Pay" />
          <h3 className="fw-bold">Google Pay</h3>
          <p>yenumenu@icici</p>
        </div>
        <div className="box">
          <img src="https://yenu.menu/demo/images/payment_processors/phonepe.png" alt="PhonePe" />
          <h3 className="fw-bold">PhonePe</h3>
          <p>yenumenu@icici</p>
        </div>
        <div className="box">
          <img src="https://yenu.menu/demo/images/payment_processors/amazonpay.png" alt="Amazon Pay" />
          <h3 className="fw-bold">Amazon Pay</h3>
          <p>yenumenu@icici</p>
        </div>
        <div className="box">
          <img src="https://yenu.menu/demo/images/payment_processors/paytm.png" alt="Paytm" />
          <h3 className="fw-bold">Paytm</h3>
          <p>yenumenu@icici</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Pay;
