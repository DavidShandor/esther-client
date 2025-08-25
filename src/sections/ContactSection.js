import React, { useState } from 'react';
import './ContactSection.css';
import toast from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();                 // לא עושים ניווט/רענון
    if (loading) return;
    setLoading(true);

    try {
      const form = e.target;
      const data = new FormData(form);

      // שליחה ל-FormSubmit (ללא רידיירקט)
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (!res.ok) throw new Error('Failed');

      toast.success('ההודעה נשלחה! נחזור אליכם בהקדם 🙏');
      setFormData({ name: '', email: '', phone: '', message: '' });
      form.reset();
    } catch (err) {
      toast.error('אופס… לא הצלחנו לשלוח. נסו שוב בעוד רגע.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>צור קשר</h2>
      <p>רוצים לשאול שאלה, להזמין הרצאה או פשוט לשלוח מילה טובה?</p>

      <form
        action="https://formsubmit.co/esthershandor15@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="contact-form"
      >
        {/* שדות מוסתרים ל-FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="פנייה חדשה מהאתר" />
        {/* אפשר גם להצמיד מטא-דאטה: */}
        <input type="hidden" name="source" value="website-contact-form" />

        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="אימייל"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="טלפון"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="ההודעה שלך"
          rows="5"
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'שולח…' : 'שליחה'}
        </button>
      </form>

      <p className="whatsapp-link">
        או <a href="https://wa.me/972526754975" target="_blank" rel="noopener noreferrer">שלחו לנו הודעה בוואטסאפ</a>
      </p>
    </section>
  );
};

export default ContactSection;
