import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroImageSection from './sections/HeroImageSection';
import AboutSection from './sections/AboutSection';
import BookSection from './sections/BookSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import LecturesSection from './sections/LecturesSection';


function App() {
  return (
    <div>
      <Header />
      {/* עוגנים ריקים לפי הקישורים
      <section id="about" style={{ height: '100vh' }}></section>
      <section id="book" style={{ height: '100vh' }}></section>
      <section id="testimonials" style={{ height: '100vh' }}></section>
      <section id="contact" style={{ height: '100vh' }}></section>
      <section id="order" style={{ height: '100vh' }}></section> */}
      <HeroImageSection />
      <AboutSection />
      <BookSection />
      <LecturesSection/>
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
