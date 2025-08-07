import React from 'react';
import './HeroImageSection.css';
import heroImage from '../assets/hero.jpeg'; // שים כאן את התמונה שלך

const HeroImageSection = () => {
  return (
    <section className="hero-image-section">
      <div className="overlay">
        <h1>כאן יבוא משפט חזק או כותרת</h1>
        <p>ואולי גם תת-כותרת שתסביר</p>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </section>
  );
};

export default HeroImageSection;
