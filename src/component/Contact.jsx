import React from 'react';
import { Mail, Home } from 'lucide-react';

import "./Contact.css";

const Contact = () => (
  <div className="contact-container">
    <div className="contact-card">
      <div className="contact-content">
        <h2 className="contact-title">Contact GlowCare</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">Get In Touch</h3>
            <p className="info-description">
              Our skincare experts are here to help you achieve your best skin! Whether you have questions about our organic products, 
              need advice on your skincare routine, or want to know more about our cruelty-free formulations, 
              we're happy to assist you on your glow journey.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <Mail className="icon" />
                </div>
                <div className="detail-text">
                  <p className="detail-label">Email</p>
                  <p className="detail-value">care@glowcare.com</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <Home className="icon" />
                </div>
                <div className="detail-text">
                  <p className="detail-label">Address</p>
                  <p className="detail-value">123 Serenity Lane, Beauty District, BD 20202</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <div className="phone-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="detail-text">
                  <p className="detail-label">Skincare Hotline</p>
                  <p className="detail-value">(555) GLOW-NOW</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form className="form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Skin Concern</label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  placeholder="Acne, Aging, Dryness, etc."
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="form-textarea"
                  placeholder="Tell us about your skin concerns and goals..."
                ></textarea>
              </div>
              
              <div className="form-submit">
                <button
                  type="submit"
                  className="submit-button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;