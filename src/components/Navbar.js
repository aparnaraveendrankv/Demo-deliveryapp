import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="menu_categories">
        <ul id="categories" className="horizontal_list keen-slider">
          <li className="category keen-slider__slide" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
            <a href="#Beverages">Beverages</a>
          </li>
          <li className="category keen-slider__slide" style={{ transform: 'translate3d(10px, 0px, 0px)' }}>
            <a href="#Starters">Starters</a>
          </li>
          <li className="category keen-slider__slide" style={{ transform: 'translate3d(20px, 0px, 0px))' }}>
            <a href="#MainCourse">Main Course</a>
          </li>
          <li className="category keen-slider__slide hidden-mobile">
            <a href="#Soups">Soups</a>
          </li>
          <li className="category keen-slider__slide hidden-mobile">
            <a href="#Desserts">Desserts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
