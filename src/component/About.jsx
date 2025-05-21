import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Beauty Space</h1>
          <p>Empowering your beauty journey with expert knowledge and personalized care</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              Beauty Space is dedicated to providing trustworthy, science-backed beauty advice 
              that helps individuals of all ages feel confident in their skin. We bridge the gap 
              between professional skincare knowledge and everyday routines.
            </p>
          </div>
          <div className="mission-image"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💎</div>
            <h3>Expertise</h3>
            <p>All our content is curated by licensed cosmetologists with years of industry experience.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Integrity</h3>
            <p>We only recommend products and treatments we truly believe in.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Sustainability</h3>
            <p>We prioritize eco-friendly practices and cruelty-free products.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Inclusivity</h3>
            <p>Beauty solutions for all skin types, ages, and backgrounds.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Experts</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-member-image member1"></div>
            <h3>Dr. Priya Sharma</h3>
            <p className="position">Chief Dermatologist</p>
            <p className="bio">15+ years experience in clinical dermatology and cosmetic treatments.</p>
          </div>
          <div className="team-card">
            <div className="team-member-image member2"></div>
            <h3>Ananya Patel</h3>
            <p className="position">Lead Esthetician</p>
            <p className="bio">Specializes in anti-aging and corrective skincare treatments.</p>
          </div>
          <div className="team-card">
            <div className="team-member-image member3"></div>
            <h3>Rahul Mehta</h3>
            <p className="position">Product Researcher</p>
            <p className="bio">Analyzes and tests hundreds of products annually for our recommendations.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>About Us</h3>
            <p>
              Beauty Space is dedicated to empowering individuals with expert beauty insights 
              and practical skincare solutions for all ages.
            </p>
            <p className="copyright">Copyright © 2025 Beauty Space</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/terms">Terms Of Use</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <address>
              <p><strong>Email:</strong> support@beautySpace.in</p>
              <p><strong>Phone:</strong> +918097907787</p>
              <p>
                <strong>Address:</strong>NEAR ME MADHAPUR METRO STATION <br />
                <br />
                HYDERBAD TELANGANA <br />
              HYDERBAD JUBLIHILLS TELANGANA
              </p>
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;