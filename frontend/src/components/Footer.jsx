import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                {/* Brand Column */}
                <div className="footer-col footer-brand">
                    <Link to="/" className="footer-logo">
                        <img src="/logo.png" alt="Healthizone Logo" />
                        <span>Healthizone</span>
                    </Link>
                    <p className="footer-tagline">
                        Your one-stop destination for trusted health and wellness essentials.
                    </p>
                </div>

                {/* Quick Links Column */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/products">All Products</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Social Links Column */}
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <p className="social-text">Stay connected with us for health tips & updates.</p>
                    <div className="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Healthizone. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;