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
            שמואל הוא ילד עם צרכים מיוחדים ומשפחה גדולה. כשהוא מתקשה להביע את רצונותיו בפני משפחתו העסוקה, הוא מתוסכל ומנסה בדרכים שונות לגרום להם להבין – אבל מה הוא באמת רוצה?
          </p>
          <p className="highlight">
            ספר מתוק בחרוזים על משמעותה של משפחה, סבלנות והכלה. סיפור שיגרום לכם לחשוב, לחייך ולהבין את הילדים שלכם קצת יותר.
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
    </section>
  );
};

export default BookSection;
