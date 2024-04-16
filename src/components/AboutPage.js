// AboutPage.js
import React from 'react';
import ImageSlider from './ImageSlider';
import "./Navbar.css";
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="container">
      <ImageSlider />
      <div className="about-1">
        <p className="about-title">Timings:</p>
        <p className="about-desc">07:00 - 20:00</p>
        <p className="about-title mt-20">Address:</p>
        <p className="about-desc">2nd Floor, Arogya Soudha Opposite Kulshekar Post Office Kulshekar Mangaluru Karnataka India - 575001</p>
        <p className="about-title mt-20">Phone:</p>
        <p className="about-desc"><a href="tel:+918197628777">+918197628777</a></p>
        <p className="about-title mt-20">Whatsapp:</p>
        <p className="about-desc"><a target="_blank" href="https://wa.me/918762582739" previewlistener="true">918762582739</a></p>
      </div>

      {/* Add social media links */}
      <ul id="social" className="keen-slider horizontal_list social">
        <li className="facebook keen-slider__slide"><a href="https://www.facebook.com/MyYenuMenu/" previewlistener="true">facebook</a></li>
        <li className="instagram keen-slider__slide"><a href="https://www.instagram.com/yenumenu/" previewlistener="true">instagram</a></li>
        <li className="youtube keen-slider__slide"><a href="youtube.com" previewlistener="true">youtube</a></li>
        <li className="twitter keen-slider__slide"><a href="twitter.com" previewlistener="true">twitter</a></li>
        <li className="linkedin keen-slider__slide"><a href="linkedin.com" previewlistener="true">linkedin</a></li>
      </ul>

      {/* Add services and take away */}
      <div className="about-1">
        <p className="about-title mt-20">Services:</p>
        <p className="about-desc">Dine-in, Takeaway, Delivery</p>
        <p className="about-title mt-20">Cuisines:</p>
        <p className="about-desc">South Indian Vegetarian, North Indian Vegetarian</p>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutPage;
