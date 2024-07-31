import React from 'react';
import ContactForm from './ContactForm';
import '../styles/components/ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out...</p>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
