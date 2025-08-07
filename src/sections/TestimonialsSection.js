import React from 'react';
import Slider from 'react-slick';
import './TestimonialsSection.css';

import img1 from '../assets/review1.jpg';
import img2 from '../assets/review2.jpg';
import img3 from '../assets/review3.jpg';
import img4 from '../assets/review4.jpg';
import img5 from '../assets/review5.jpg';



const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [img1, img2, img3, img4, img5];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>מה מספרים על הספר?</h2>
      <Slider {...settings} className="testimonial-slider">
        {images.map((img, index) => (
          <div key={index} className="testimonial-slide">
            <img src={img} alt={`המלצה ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSection;
