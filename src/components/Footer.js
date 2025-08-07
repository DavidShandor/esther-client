import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>אסתר שנדור</h4>
          <p>סופרת, מורה ומרצה</p>
          <p>מתמחה בילדים עם צרכים מיוחדים ובליווי משפחות</p>
        </div>

        <div className="footer-col">
          <h4>קישורים מהירים</h4>
          <p><a href="#book">הספר</a></p>
          <p><a href="#workshops">סדנאות</a></p>
          <p><a href="#lectures">הרצאות</a></p>
          <p><a href="#contact">צור קשר</a></p>
        </div>

        <div className="footer-col">
          <h4>מידע עסקי</h4>
          <p>עוסק פטור: 123456789</p>
          <p><a href="mailto:esthershandor15@gmail.com">esthershandor15@gmail.com</a></p>
          <p><a href="tel:0526754975">052-675-4975</a></p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2024 אסתר שנדור. כל הזכויות שמורות.</p>
        <p>💖 "כל ילד מיוחד בדרכו שלו – חשוב הוא לראות, להקשיב ולאהוב ללא תנאי"</p>
      </div>
    </footer>
  );
};

export default Footer;
