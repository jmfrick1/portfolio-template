import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
