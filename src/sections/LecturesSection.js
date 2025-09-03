import React from 'react';
import './LecturesSection.css';
import lectureThumb from '../assets/pic1.jpg'; // ← עדכן נתיב/שם קובץ

const LecturesSection = () => {
  return (
    <section id="lectures" className="lectures-section">
      <h2>הרצאות</h2>

      <div className="lectures-list">
       <div className="lecture-card">
          <img
            className="lecture-thumb"
            src={lectureThumb}
            alt="אף פעם לא לבד — הרצאה של אסתר שנדור"
          />
          <div className="lecture-content">
            <h3>"אף פעם לא לבד"</h3>
            <p>
              שיחה אישית של אסתר שנדור – אחות לילד עם צרכים מיוחדים שנפטר ממחלה נדירה,
              ואמא לשמואל, ילד עם צרכים מיוחדים. בהרצאה אסתר משתפת באתגרים ובמסע שהמשפחה
              עברה ועדיין עוברת, ומדברת על הכוח של הקהילה, הכלה ושילוב.
            </p>
            <p className="lecture-meta">
              <strong>מתאים ל:</strong> קבוצות, הורים ותיכונים
              <br /> {/* כאן השבירה שורה */}
            </p>
            <a href="#contact" className="lecture-btn">להזמנת הרצאה</a>
          </div>
        </div>


        {/* לכרטיסים עתידיים אפשר לשכפל את הבלוק למעלה */}
      </div>

      <p className="lectures-coming-soon">הרצאות נוספות בקרוב!</p>
    </section>
  );
};

export default LecturesSection;
