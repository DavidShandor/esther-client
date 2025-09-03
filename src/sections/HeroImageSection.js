import React from 'react';
import './HeroImageSection.css';
import heroImage from '../assets/Hero.jpg'; // שים כאן את התמונה שלך

const HeroImageSection = () => {
  return (
    <section className="hero-image-section">
      <div className="overlay">
        <h1>אף פעם לא לבד</h1>
        <p><b>יחד לומדים לראות את מה שמעבר למילים – סיפור, כלים ותובנות לחיים</b></p>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </section>
  );
};

export default HeroImageSection;
