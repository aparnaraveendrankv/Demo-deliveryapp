// Home.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Beverage from './Beverage'; // Import Beverage component
import Starters from './Starter';
import Soups from './Soup';
import Desserts from './Desert';
import MainCourse from './MainCourses';
import Footer from './Footer';

const Home = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceUpdate = (price) => {
    setTotalPrice(price);
  };

  return (
    <div>
      <Navbar />
      <Beverage onPriceUpdate={handlePriceUpdate} /> 
      <Starters onPriceUpdate={handlePriceUpdate} />
      <MainCourse onPriceUpdate={handlePriceUpdate}  />
      <Soups onPriceUpdate={handlePriceUpdate}  />
      <Desserts onPriceUpdate={handlePriceUpdate} />
      <Footer totalPrice={totalPrice} />
    </div>
  );
}

export default Home;
