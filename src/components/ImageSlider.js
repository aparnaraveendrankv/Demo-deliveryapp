// Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ImageSlider = () => {
  // Custom Next Arrow component
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-arrow-right"></i>
      </div>
    );
  };

  // Custom Previous Arrow component
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-arrow-left"></i>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true, // Enable touch-enabled sliding
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://yenu.menu/demo/images/gallery/4.webp" alt="Gallery 1" />
      </div>
      <div>
        <img src="https://yenu.menu/demo/images/gallery/5.webp" alt="Gallery 2" />
      </div>
      <div>
        <img src="https://yenu.menu/demo/images/gallery/1.webp" alt="Gallery 3" />
      </div>
      <div>
        <img src="https://yenu.menu/demo/images/gallery/2.webp" alt="Gallery 4" />
      </div>
      <div>
        <img src="https://yenu.menu/demo/images/gallery/3.webp" alt="Gallery 5" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
