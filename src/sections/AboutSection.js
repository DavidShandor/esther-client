import React from 'react';
import './AboutSection.css';
import estherImage from '../assets/esther.jpeg'; // שנה לפי שם הקובץ

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>מי אני?</h2>
          <h3><span className="highlight">אסתר שנדור – אמא לשמואל</span>, מורה, וכותבת</h3>
          <p>
            שמי אסתר שנדור, בת 35, אמא לחמישה ילדים מהממים. שמואל, בני הבכור, הוא ילד עם צרכים מיוחדים – והוא ההשראה לספר.
            כתבתי אותו כדי לתת לו קול, ולתת לנו – ההורים והילדים – שפה, רגש והבנה. זה מסע של משפחה שלמדה להבין, לאהוב ולקבל את הייחודיות של כל ילד.
          </p>
          <p className="quote">
            "כל ילד מיוחד בדרכו שלו – החשוב הוא לראות, להקשיב ולאהוב ללא תנאי."
          </p>
        </div>
        <div className="about-image">
          <img src={estherImage} alt="אסתר שנדור" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
