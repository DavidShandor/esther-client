// sections/TestimonialsSection.js
import React from 'react';
import Slider from 'react-slick';
import './TestimonialsSection.css';

// טוען את כל הקבצים מהתיקייה ../assets/testimonials עם סיומות תמונה נפוצות
function importAll(r) {
  // ממפה לנתיבי תמונה (URLs שנוצרים בבילד) וממיין לפי שם קובץ
  return r.keys()
    .sort()                      // ממיין אלפביתית: review1, review2...
    .map((key) => ({ 
      src: r(key), 
      name: key.replace('./', '') 
    }));
}

const images = importAll(
  require.context('../assets/testimonials', false, /\.(png|jpe?g|webp|gif)$/)
);

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

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>מה מספרים על הספר וההרצאה?</h2>
      <Slider {...settings} className="testimonial-slider">
        {images.map((img, i) => (
          <div key={img.name || i} className="testimonial-slide">
            <img src={img.src} alt={`המלצה: ${img.name}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSection;
