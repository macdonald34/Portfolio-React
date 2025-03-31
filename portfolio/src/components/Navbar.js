import React, { useState } from 'react';
import { Link } from 'react-scroll';  // Add this import
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Macdonald Muhavi</div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;