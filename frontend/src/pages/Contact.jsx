import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate sending contact email
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1200);
    };

    return (
        <div className="contact-container">
            {/* Header */}
            <div className="contact-header">
                <span className="contact-badge">Get in Touch</span>
                <h1>We're Here to <span className="brand-highlight">Help</span></h1>
                <p>Have questions about a product, your order, or general wellness advice? Reach out anytime!</p>
            </div>

            {/* Main Grid Layout */}
            <div className="contact-grid">
                
                {/* Contact Cards Column */}
                <div className="contact-info-cards">
                    
                    {/* 1st PLACE: WhatsApp Contact Card */}
                    <div className="contact-card whatsapp-card">
                        <div className="card-icon whatsapp-icon">💬</div>
                        <div className="card-details">
                            <span className="card-label">Fastest Response</span>
                            <h3>Chat on WhatsApp</h3>
                            <p>Connect directly with our customer support team for instant inquiries.</p>
                            <a 
                                href="https://wa.me/15550123456?text=Hi%20Healthizone,%20I%20have%20a%20question%20about..." 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-whatsapp"
                            >
                                Send WhatsApp Message
                            </a>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="contact-card">
                        <div className="card-icon">✉️</div>
                        <div className="card-details">
                            <h3>Email Us</h3>
                            <p>For order updates, bulk purchases, or general queries.</p>
                            <a href="mailto:support@healthizone.com" className="contact-link">
                                support@healthizone.com
                            </a>
                        </div>
                    </div>

                    {/* Phone & Hours Card */}
                    <div className="contact-card">
                        <div className="card-icon">📞</div>
                        <div className="card-details">
                            <h3>Call Us</h3>
                            <p>Mon - Fri from 9am to 6pm EST.</p>
                            <a href="tel:+18005550199" className="contact-link">
                                +1 (800) 555-0199
                            </a>
                        </div>
                    </div>

                </div>

                {/* Message Form Column */}
                <div className="contact-form-wrapper">
                    <h2>Send Us a Message</h2>
                    <p className="form-subtitle">Fill out the form below and we'll reply within 24 hours.</p>

                    {submitted ? (
                        <div className="contact-success-banner">
                            <span className="success-icon">✓</span>
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully. Our support team will get back to you shortly.</p>
                            <button 
                                className="btn btn-reset-form"
                                onClick={() => setSubmitted(false)}
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Order Inquiry, Product Advice, etc."
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="How can we assist you today?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-submit-contact" disabled={loading}>
                                {loading ? 'Sending Message...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Contact;