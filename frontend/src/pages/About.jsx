import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

function About() {
    return (
        <div className="about-container">
            {/* Hero Header */}
            <section className="about-hero">
                <span className="about-badge">Our Story</span>
                <h1>Empowering Your Journey to <span className="brand-highlight">Better Health</span></h1>
                <p>
                    At Healthizone, we believe wellness should be simple, transparent, and accessible 
                    to everyone. We curate premium, lab-tested products to help you live your healthiest life.
                </p>
            </section>

            {/* Stats Counter Section */}
            <section className="about-stats">
                <div className="stat-card">
                    <h3>10k+</h3>
                    <p>Happy Customers</p>
                </div>
                <div className="stat-card">
                    <h3>100%</h3>
                    <p>Authentic Products</p>
                </div>
                <div className="stat-card">
                    <h3>24/7</h3>
                    <p>Expert Support</p>
                </div>
                <div className="stat-card">
                    <h3>50+</h3>
                    <p>Trusted Brands</p>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="about-values">
                <div className="section-header">
                    <h2>Why Choose Healthizone?</h2>
                    <p className="section-subtitle">Built on quality, trust, and your well-being</p>
                </div>

                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">🧪</div>
                        <h3>Tested & Verified</h3>
                        <p>Every supplement and wellness product in our store undergoes strict quality control standards.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">🌱</div>
                        <h3>Pure Ingredients</h3>
                        <p>We prioritize natural, clean formulations free from unnecessary fillers and harmful additives.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">🚚</div>
                        <h3>Express Delivery</h3>
                        <p>Fast, discreet, and eco-friendly packaging delivered right to your doorstep.</p>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="about-cta">
                <h2>Ready to Start Your Wellness Journey?</h2>
                <p>Explore our wide selection of vitamins, supplements, and health essentials today.</p>
                <Link to="/products" className="btn btn-about-cta">
                    Explore Products ➔
                </Link>
            </section>
        </div>
    );
}

export default About;