import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg'; 

const Header = () => {
  return (
    <header className="site-header">
      
      {/* <div className="logo">מה שמואל רוצה?</div> replace with real logo */}
      <img src={logo} alt="לוגו" className="logo" />
      <nav className="nav-links">
        <a href="#about">עליי</a>
        <a href="#book">הספר</a>
        <a href="#lectures">הרצאות</a> 
        <a href="#workshops">סדנאות</a>
        <a href="#testimonials">המלצות</a>
        <a href="#contact">צור קשר</a>
      </nav>
    </header>
  );
};

export default Header;

