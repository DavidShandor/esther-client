import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן נוכל לשלוח את הנתונים בעתיד ל־Node.js
    alert('ההודעה נשלחה! תודה :)');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section" >
      <h2>צור קשר</h2>
      <p>רוצים לשאול שאלה, להזמין הרצאה או פשוט לשלוח מילה טובה?</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="אימייל"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="טלפון"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="ההודעה שלך"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">שליחה</button>
      </form>

      <p className="whatsapp-link">
        או <a href="https://wa.me/972526754975" target="_blank" rel="noopener noreferrer">שלחו לנו הודעה בוואטסאפ</a>
      </p>
    </section>
  );
};

export default ContactSection;
