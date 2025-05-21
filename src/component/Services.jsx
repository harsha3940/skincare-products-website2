import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Explore Our Comprehensive Range of Beauty Solutions</h1>
          <p className="subtitle">
            Explore our tailored services aimed at enhancing your skin health, boosting your confidence, 
            and providing effective beauty solutions for individuals over 40.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services-section">
        <div className="services-container">
          {/* Service Card 1 */}
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3063/3063176.png" alt="Skincare Consultation" />
            </div>
            <h3>Skincare Consultations</h3>
            <p>Personalized skincare assessments tailored to your unique needs.</p>
            <Link to="/skincare-consultations" className="service-link">
              View more <span className="arrow">→</span>
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4052/4052984.png" alt="Anti-Aging Solutions" />
            </div>
            <h3>Anti-Aging Solutions</h3>
            <p>Targeted strategies to combat signs of aging effectively.</p>
            <Link to="/anti-aging" className="service-link">
              View more <span className="arrow">→</span>
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2936/2936886.png" alt="Product Recommendations" />
            </div>
            <h3>Product Recommendations</h3>
            <p>Curated suggestions for top skincare products.</p>
            <Link to="/product-recommendations" className="service-link">
              View more <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-services-section">
        <div className="about-services-container">
          <div className="about-services-content">
            <h2>Discover the Passion Behind Beauty Space and Its Experts</h2>
            <p className="about-description">
              Beauty Space is a trusted source for skin care and anti-aging insights.
            </p>
            
            <div className="journey-section">
              <h3>Our Journey</h3>
              <p>
                Founded by experienced cosmetologists, Beauty Space was born from a desire to empower 
                individuals with skin care knowledge and effective beauty practices.
              </p>
              <p>
                Over the years, we have cultivated a dedicated community focused on enhancing beauty 
                and confidence at any age.
              </p>
              <Link to="/about" className="learn-more-btn">
                Learn more
              </Link>
            </div>
          </div>
          <div className="about-services-image">
            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Beauty Space Team" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="services-testimonials">
        <h2>What Our Readers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Beauty Space transformed my skincare routine with expert advice I can trust."
            </p>
            <div className="client-info">
              <span className="client-name">John Smith</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "I found the best anti-aging products thanks to this amazing blog!"
            </p>
            <div className="client-info">
              <span className="client-name">Sarah Johnson</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Their insights have made a real difference in my skincare routine."
            </p>
            <div className="client-info">
              <span className="client-name">Mike Davis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Our Unique Value Proposition for Skincare Enthusiasts</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">💎</div>
            <h3>Expert Insights</h3>
            <p>Our articles are crafted by experienced cosmetologists, ensuring reliable and professional advice.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">✨</div>
            <h3>Tailored Solutions</h3>
            <p>We provide personalized recommendations suited for individual skin types and concerns.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🌿</div>
            <h3>Quality Ingredients</h3>
            <p>We prioritize products with high-quality ingredients for safe and effective results.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">👥</div>
            <h3>Engaging Community</h3>
            <p>Join a vibrant community where readers share experiences and empower each other.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📊</div>
            <h3>Proven Results</h3>
            <p>Our trusted recommendations lead to noticeable improvements in skin appearance and health.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📚</div>
            <h3>Continuous Learning</h3>
            <p>Stay updated with the latest trends and research in skincare and anti-aging.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <h2>Join Our Community and Transform Your Beauty Routine</h2>
        <Link to="/get-started" className="cta-button">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Services;