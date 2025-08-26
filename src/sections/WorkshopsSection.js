import React from 'react';
import './WorkshopsSection.css';

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="workshops-section">
      <h2>סדנאות</h2>
      <p>
        כאן יבוא טקסט קצר על הסדנאות – מה הנושאים, למי הן מיועדות, ואיך הן משתלבות עם הספר וההרצאות.
      </p>

      <div className="workshops-list">
        <div className="workshop-card">
          <h3>כותרת סדנה לדוגמה</h3>
          <p>תיאור קצר של הסדנה, מה המשתתפים לומדים, ואיך היא מחזקת את ההבנה והחיבור המשפחתי.</p>
        </div>

        <div className="workshop-card">
          <h3>כותרת סדנה נוספת</h3>
          <p>עוד תיאור קצר, שתוכל להרחיב בהמשך.</p>
        </div>
      </div>

      <p className="workshops-coming-soon">סדנאות נוספות בקרוב!</p>
    </section>
  );
};

export default WorkshopsSection;
