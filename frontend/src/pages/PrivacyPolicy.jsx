import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/privacyPolicy.css';

function PrivacyPolicy() {
    return (
        <div className="privacy-container">
            {/* Header Section */}
            <div className="privacy-header">
                <span className="privacy-badge">Legal & Transparency</span>
                <h1>Privacy <span className="brand-highlight">Policy</span></h1>
                <p>Last Updated: August 2026</p>
            </div>

            {/* Quick Summary Card */}
            <div className="privacy-summary-card">
                <div className="summary-icon">🛡️</div>
                <div>
                    <h3>Your Trust is Our Priority</h3>
                    <p>
                        At Healthizone, we are committed to protecting your privacy. We strictly 
                        use your information to process orders, improve your shopping experience, and 
                        communicate relevant health & wellness updates. We never sell your personal data.
                    </p>
                </div>
            </div>

            {/* Main Policy Content Sections */}
            <div className="privacy-content">
                <section className="policy-section">
                    <h2>1. Information We Collect</h2>
                    <p>When you visit Healthizone, create an account, or place an order, we collect certain details required to serve you effectively:</p>
                    <ul>
                        <li><strong>Personal Identification:</strong> Name, email address, phone number, and shipping/billing address.</li>
                        <li><strong>Account Details:</strong> Login credentials, encrypted passwords, and saved preferences.</li>
                        <li><strong>Transaction Records:</strong> Order history, cart contents, and payment status (payment details are handled securely via encrypted gateways).</li>
                        <li><strong>Usage Data:</strong> IP address, browser type, device information, and pages visited via cookies to improve site performance.</li>
                    </ul>
                </section>

                <section className="policy-section">
                    <h2>2. How We Use Your Information</h2>
                    <p>Your information allows us to provide a seamless e-commerce experience. Specifically, we use it to:</p>
                    <ul>
                        <li>Process and deliver your product orders efficiently.</li>
                        <li>Send automated order confirmations, shipping updates, and invoice receipts.</li>
                        <li>Provide personalized customer support when you reach out to us.</li>
                        <li>Enhance site security and prevent fraudulent transactions.</li>
                        <li>Send promotional newsletters or health tips (only if you explicitly opt in).</li>
                    </ul>
                </section>

                <section className="policy-section">
                    <h2>3. Data Protection & Security</h2>
                    <p>
                        We employ industry-standard SSL (Secure Sockets Layer) encryption to safeguard 
                        all confidential information transmitted during checkout. Access to your personal 
                        data is strictly limited to authorized personnel involved in fulfilling your orders.
                    </p>
                </section>

                <section className="policy-section">
                    <h2>4. Cookies & Analytics</h2>
                    <p>
                        We use essential cookies to remember your shopping cart items and keep you logged in. 
                        Analytical cookies help us understand how users navigate Healthizone so we can continuously 
                        optimize our store performance. You can manage or disable cookies at any time in your browser settings.
                    </p>
                </section>

                <section className="policy-section">
                    <h2>5. Your Rights & Choices</h2>
                    <p>You have full control over your personal data at Healthizone. You have the right to:</p>
                    <ul>
                        <li>Access and update your personal information through your <Link to="/profile" className="inline-link">Account Profile</Link>.</li>
                        <li>Request the permanent deletion of your registered account and personal data.</li>
                        <li>Unsubscribe from marketing emails with a single click at the bottom of any email.</li>
                    </ul>
                </section>

                <section className="policy-section">
                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions or concerns regarding this Privacy Policy or how your data is handled, 
                        please feel free to reach out to our privacy compliance team through our <Link to="/contact" className="inline-link">Contact Page</Link>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default PrivacyPolicy;