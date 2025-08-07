import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">מה שמואל רוצה?</div>
      <nav className="nav-links">
        <a href="#about">עליי</a>
        <a href="#book">הספר</a>
        <a href="#testimonials">המלצות</a>
        <a href="#contact">צור קשר</a>
      </nav>
       <a 
          href="https://mrng.to/ZniNOZNOCu"
          className="order-btn"
          target="_blank"
          rel="noopener noreferrer">להזמנה</a>
    </header>
  );
};

export default Header;
