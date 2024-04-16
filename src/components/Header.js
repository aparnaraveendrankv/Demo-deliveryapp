import React from 'react';
import './Header.css'; // Import your CSS file for styling

function Header() {
  return (
    <div className="container">
      <header className="site-header">
        <div className="titleDesc">
          <h1 className="name">Demo Restaurant</h1>
          <p className="shortDescription">
            Multi cuisine restaurant situated in the heart of the city
          </p>
        </div>
        <img className="logo" src="https://yenu.menu/demo/images/logo.jpg" alt="logo" />
      </header>
    </div>
  );
}

export default Header;
