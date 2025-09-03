import React from 'react';
import './AboutSection.css';
import estherImage from '../assets/profileAboutSection.jpg'; // שנה לפי שם הקובץ

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>מי אני?</h2>
          <h3>נעים מאוד, שמי אסתר שנדור</h3>
          <h3><span className="highlight"> אמא לשמואל</span>, מחנכת, מרצה וכותבת</h3>
          <p>
             בת 35, נשואה ואמא לחמישה ילדים מהממים. שמואל, בני הבכור, הוא ילד עם צרכים מיוחדים – והוא ההשראה לספר, ולמסע שלי בחיים, שהתחיל הרבה לפני שמואל, והתגבר אחרי לידתו. במסע שלי אני כותבת, מרצה ומעבירה סדנאות ואני מזמינה אתכם להצטרף אלי למסע. 
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
