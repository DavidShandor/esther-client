import React from 'react';
import './WorkshopsSection.css';

import thumbDrum from '../assets/workshops/drum.png';
import thumbBag  from '../assets/workshops/bag.jpeg';
import thumbMarks from '../assets/workshops/bookmarks.jpg';

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="workshops-section">
      <h2>סדנאות</h2>
      <p>כל סדנא נפתחת בשיח עם כרטיסיות/תמונות, ורמת הקושי של היצירות מותאמת לגילאי המשתתפים</p>

      <div className="workshops-list">
        {/* תוף מרים */}
        <div className="workshop-card">
          <img
            className="workshop-thumb"
            src={thumbDrum}
            alt="סדנת תוף מרים"
          />
          <div className="workshop-content">
            <h3>תוף מרים</h3>
            <p><strong>תיאור:</strong> יצירת תוף מרים מיוחד ואישי לכל משתתף.</p>
            <p className="workshop-meta">
              <strong>מתאים ל:</strong> קבוצות, הורים ותיכונים
              <br />
            </p>
             <a href="#contact" className="workshop-btn">להזמנת הסדנא</a>
          </div>
        </div>

        {/* תיק בד */}
        <div className="workshop-card">
          <img
            className="workshop-thumb"
            src={thumbBag}
            alt="סדנת תיק בד"
          />
          <div className="workshop-content">
            <h3>תיק בד</h3>
            <p><strong>תיאור:</strong> תיק בד מקסים שכל משתתף יכין לעצמו – לשימוש יומיומי ולספרייה.</p>
            <p className="workshop-meta">
              <strong>מתאים ל:</strong> קבוצות, הורים ותיכונים
              <br />
            </p>
             <a href="#contact" className="workshop-btn">להזמנת הסדנא</a>
          </div>
        </div>

        {/* סימניות */}
        <div className="workshop-card">
          <img
            className="workshop-thumb"
            src={thumbMarks}
            alt="סדנת סימניות"
          />
          <div className="workshop-content">
            <h3>סימניות</h3>
            <p><strong>תיאור:</strong> יצירת סימניות אישיות—למי שאוהבים לקרוא או כמתנה.</p>
            <p className="workshop-meta">
              <strong>מתאים ל:</strong> קבוצות, הורים ותיכונים
              <br />
            </p>
             <a href="#contact" className="workshop-btn">להזמנת הסדנא</a>
          </div>
        </div>
      </div>

      <p className="workshops-coming-soon">סדנאות נוספות בקרוב!</p>
    </section>
  );
};

export default WorkshopsSection;
