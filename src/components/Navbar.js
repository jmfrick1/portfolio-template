import React from 'react';
import { Link } from 'react-router-dom'; // Updated import for Link
import '../styles/components/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">My Portfolio</div>
      <div>
        <Link to="#hero">Home</Link> {/* Changed to react-router-dom Link */}
        <Link to="#about">About</Link> {/* Changed to react-router-dom Link */}
        <Link to="#projects">Projects</Link> {/* Changed to react-router-dom Link */}
        <Link to="#contact">Contact</Link> {/* Changed to react-router-dom Link */}
      </div>
    </div>
  );
}

export default Navbar;
