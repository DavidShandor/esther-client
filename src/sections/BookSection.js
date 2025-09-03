import React from 'react';
import './BookSection.css';
import bookCover from '../assets/book-cover.jpg'; // החלף בשם הקובץ שלך
import { FaHeart, FaUsers, FaPaintBrush, FaBookOpen } from 'react-icons/fa';

const BookSection = () => {
  return (
    <section id="book" className="book-section">
      <h2>על מה הספר?</h2>
      <div className="book-content">
        <div className="book-image">
          <img src={bookCover} alt="עטיפת הספר מה שמואל רוצה?" />
        </div>
        <div className="book-text">
          <p>
            שמואל הוא ילד עם צרכים מיוחדים המתמודד עם אפילפסיה ופיגור עמוק. הוא מרכיב משקפיים ויושב על כיסא גלגלים, והתקשורת עימו מבוססת על הקשבה לשפת גופו והבנת השגרה שלו. כשהוא מתקשה להביע את רצונותיו בפני משפחתו העסוקה, הוא מתוסכל ומנסה בכל דרך אפשרית לגרום להם להבין אותו. אבל מה הוא באמת רוצה? אולי לשתות? אולי לאכול? ואולי בכלל משהו אחר לחלוטין?
          </p>
          <n></n>
          <p>
            כשהוא מתקשה להביע את רצונותיו בפני משפחתו העסוקה, הוא מתוסכל ומנסה בכל דרך אפשרית לגרום להם להבין אותו. אבל מה הוא באמת רוצה? אולי לשתות? אולי לאכול? ואולי בכלל משהו אחר לחלוטין?
          </p>
          <h3>מהסופרת</h3>
          <p>
             את הספר כתבתי כדי לתת לשמואל קול, ולתת לנו – ההורים והילדים – שפה, רגש והבנה. זה מסע של משפחה שלמדה להבין, לאהוב ולקבל את הייחודיות של כל ילד.
          </p>
          <p className="highlight">
            ספר מתוק בחרוזים על סבלנות, הכלה ומשמעותה של המשפחה.
          </p>

          <div className="book-icons">
            <div>
              <FaHeart size={24} color="#e91e63" />
              <p>סיפור אמיתי</p>
            </div>
            <div>
              <FaUsers size={24} color="#3f51b5" />
              <p>לכל המשפחה</p>
            </div>
            <div>
              <FaPaintBrush size={24} color="#ff9800" />
              <p>איורים צבעוניים</p>
            </div>
            <div>
              <FaBookOpen size={24} color="#4caf50" />
              <p>כריכה קשה</p>
            </div>
          </div>
        </div>
      </div>
      <div className="book-cta-container">
    <a 
      href="https://mrng.to/vYBoNLOajZ" 
      target="_blank" 
      rel="noopener noreferrer"
      className="book-btn"
    >
      להזמנת הספר
    </a>
  </div>
    </section>
  );
};

export default BookSection;
