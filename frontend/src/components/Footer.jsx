import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer style = {
            { 
                backgroundColor: "#f8f9fa",
                padding: "20px 0",
                textAlign: "center" }}>

        <div style = {
            {
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap", 
                alignItems: "center", 
                gap: "20px" }}>
            <div>
                <h3 style = {{ color: '#f97316' , marginBottom: "10px" }}>Healthizone</h3>
                <p style = {{ color: '#6c757d' }}>Your one-stop shop for health and wellness products.</p>
            </div>
            <div>
                <h4 style = {{ color: '#f97316' , marginBottom: "10px" }}>Quick Links</h4>
                <ul style = {{ listStyle: "none", padding: 0 }}>
                    <li><Link to="/about" style = {{ color: '#6c757d', textDecoration: 'none' }}>About Us</Link></li>
                    <li><Link to="/contact" style = {{ color: '#6c757d', textDecoration: 'none' }}>Contact</Link></li>
                    <li><Link to="/privacy" style = {{ color: '#6c757d', textDecoration: 'none' }}>Privacy Policy</Link></li>
                </ul>
            </div>
            <div>
                <h4 style = {{ color: '#f97316' , marginBottom: "10px" }}>Follow Us</h4>
                <p style = {{ color: '#6c757d' }}>Stay connected with us on social media.</p>
                <div>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style = {{ marginRight: "10px", color: '#6c757d' }}>Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style = {{ marginRight: "10px", color: '#6c757d' }}>Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style = {{ color: '#6c757d' }}>Instagram</a>
                </div>
            </div>
        </div>
        <div style = {{ marginTop: "20px", color: '#6c757d' }}>
            &copy; {new Date().getFullYear()} Healthizone. All rights reserved.
        </div>
        </footer>
    );
}

export default Footer;