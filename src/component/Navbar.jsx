import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll include the CSS below
import Home from './Home';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Beauty Space
        </Link>

        <div 
          className={`menu-icon ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
             Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/get-started" 
              className="nav-link cta-button" 
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;