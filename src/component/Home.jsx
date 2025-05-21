import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Featured Products
  const featuredProducts = [
    {
      id: 1,
      name: "Glow Renewal Serum",
      category: "Best Seller",
      price:299,
      description: "Our GLOW Renewal Vitamin C Serum combines Sodium Ascorbyl Phosphate (Vitamin C) for brightening and collagen support, Witch Hazel to soothe an.",
      image: "https://png.pngtree.com/thumb_back/fw800/background/20230328/pngtree-skin-care-products-flowers-light-color-background-image_2120175.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Hydra-Plump Moisturizer",
      category: "New Launch",
      price:399,
      description: "With hyaluronic acid and ceramides for 72-hour hydration.",
      image: "https://th.bing.com/th/id/OIP.0cqfSGj1HSkSvqagyVpLLwHaFk?w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&r",
      rating: 4
    },
    {
      id: 3,
      name: "Retinol Night Repair",
      category: "Professional Grade",
      price:499,
      description: "Encapsulated retinol for reduced irritation with maximum efficacy.",
      image: "https://th.bing.com/th/id/OIP.3gw7WMvAzJxjiapIFfiZawHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      rating: 5
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Kim",
      role: "Board Certified Dermatologist",
      content: "These formulations rival my medical-grade products. The retinol is particularly impressive with its slow-release technology.",
      rating: "★★★★★"
    },
    {
      id: 2,
      name: "Lisa Rodriguez",
      role: "Beauty Editor",
      content: "Saw visible reduction in fine lines within 3 weeks of using the Glow Renewal Serum. My new holy grail!",
      rating: "★★★★★"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Customer for 2 years",
      content: "Finally found products that don't irritate my sensitive skin while actually delivering results.",
      rating: "★★★★☆"
    }
  ];

  // Skincare Benefits
  const benefits = [
    {
      icon: "fas fa-leaf",
      title: "Clean Ingredients",
      description: "Free from parabens, sulfates, phthalates, and synthetic fragrances"
    },
    {
      icon: "fas fa-flask",
      title: "Science-Backed",
      description: "Formulated with clinically-proven active ingredients at effective concentrations"
    },
    {
      icon: "fas fa-certificate",
      title: "Dermatologist Approved",
      description: "Developed with board-certified dermatologists"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>MADE A BEAUTY SKIN<br />MADE A SIMPLE SKIN</h1>
          <p>A BEAUTY OF SKIN CARE PRODUCTS</p>
          <div className="hero-buttons">
            <Link to="/shop" className="hero-button primary">
              Shop Best Sellers
            </Link>
            <Link to="/skin-quiz" className="hero-button secondary">
              Find Your Routine
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <i className={benefit.icon}></i>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="section-header">
          <h2>Dermatologist-Loved Formulas</h2>
          <p className="section-subtitle">Products that deliver visible results</p>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div 
                className="product-image"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <span className="product-badge">{product.category}</span>
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  {Array(product.rating).fill().map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button className="add-to-cart">
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <Link to="/shop" className="view-all-button">
            View All Products
          </Link>
        </div>
      </section>

      {/* Science Section */}
      <section className="science-section">
        <div className="science-content">
          <div className="science-text">
            <h2>Skincare Backed by Science</h2>
            <p>
              Our products are developed using only ingredients with peer-reviewed clinical studies. 
              Each formula undergoes rigorous testing to ensure safety and efficacy without compromise.
            </p>
            <ul className="science-list">
              <li><i className="fas fa-check"></i> Concentrations proven effective in clinical trials</li>
              <li><i className="fas fa-check"></i> pH-balanced for optimal ingredient performance</li>
              <li><i className="fas fa-check"></i> Stability-tested for maximum potency</li>
            </ul>
            <Link to="/ingredients" className="science-button">
              Learn About Our Ingredients
            </Link>
          </div>
          <div className="science-image">
            <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Skincare ingredients" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Real Results From Real Customers</h2>
          <p className="section-subtitle">91% see visible improvement within 4 weeks</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Routine Builder */}
      <section className="routine-section">
        <div className="routine-content">
          <div className="routine-text">
            <h2>Personalized Skincare Made Easy</h2>
            <p>Take our 2-minute skin quiz to get customized product recommendations for your unique skin concerns</p>
            <Link to="/skin-quiz" className="routine-button">
              Start Your Skin Quiz
            </Link>
          </div>
          <div className="routine-image">
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Skincare routine" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;