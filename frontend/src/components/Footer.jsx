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
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Social Links Column */}
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <p className="social-text">Stay connected with us for health tips & updates.</p>
                    <div className="footer-socials">
                        {/* WhatsApp */}
                        <a 
                            href="https://wa.me/15550123456?text=Hi%20Healthizone,%20I%20have%20an%20inquiry..." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="WhatsApp"
                            className="social-icon-link whatsapp-icon"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.237a9.96 9.96 0 0 0 4.779 1.217h.005c5.505 0 9.988-4.478 9.989-9.984a9.983 9.983 0 0 0-9.994-9.996zm0 18.309h-.004a8.305 8.305 0 0 1-4.236-1.164l-.304-.18-3.149.745.748-3.072-.198-.315a8.293 8.293 0 0 1-1.272-4.339c0-4.58 3.727-8.307 8.31-8.307 2.218 0 4.303.865 5.871 2.434a8.272 8.272 0 0 1 2.428 5.867c0 4.582-3.727 8.308-8.309 8.308zm4.558-6.223c-.25-.125-1.477-.728-1.706-.811-.229-.083-.396-.125-.562.125-.166.25-.646.811-.792.977-.146.166-.292.187-.542.062-.25-.125-1.055-.389-2.01-1.24-.743-.663-1.245-1.482-1.391-1.732-.146-.25-.016-.385.109-.509.112-.112.25-.292.375-.438.125-.146.166-.25.25-.416.083-.166.042-.312-.021-.437-.062-.125-.562-1.354-.771-1.854-.203-.487-.41-.421-.562-.428l-.479-.008c-.166 0-.437.062-.666.312s-.875.854-.875 2.083c0 1.229.896 2.417 1.021 2.583.125.166 1.762 2.69 4.269 3.773.596.257 1.062.41 1.425.526.598.19 1.142.163 1.572.099.48-.071 1.477-.604 1.686-1.187.208-.583.208-1.083.146-1.187-.062-.104-.229-.166-.479-.291z"/>
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Facebook"
                            className="social-icon-link facebook-icon"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>

                        {/* Twitter / X */}
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Twitter"
                            className="social-icon-link twitter-icon"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Instagram"
                            className="social-icon-link instagram-icon"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
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