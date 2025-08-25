import React from 'react';
import './LecturesSection.css';

const LecturesSection = () => {
  return (
    <section id="lectures" className="lectures-section">
      <h2>הרצאות</h2>
      <p>
        כאן יבוא טקסט קצר על ההרצאות – מה הנושאים, למי הן מיועדות, ומה הערך שהקהל מקבל.
      </p>

      <div className="lectures-list">
        <div className="lecture-card">
          <h3>אף פעם לא לבד</h3>
          <p>הרצאה על אומץ ואמונה שהכול אפשרי. שיחה שנוגעת באנשים דרך סיפור חיים אישי, מראה לנו את היכולת לבחור ומכניסה אותנו לעולם של המשפחות המיוחדות דרך ספר הילדים "מה שמואל רוצה?"</p>
        </div>

        {/* <div className="lecture-card">
          <h3>כותרת הרצאה נוספת</h3>
          <p>עוד תיאור קצר, שתרחיב עליו בהמשך.</p>
        </div> */}
      </div>

        <p className="lectures-coming-soon">הרצאות נוספות בקרוב!</p>
    </section>
  );
};

export default LecturesSection;
