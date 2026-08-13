import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthContext } from '../context/authContext';
import '../styles/navbar.css';

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const cartItems = useSelector((state) => state.cart.items || []);
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Calculate total item count in cart
    const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

    const handleLogout = () => {
        logout();
        setIsMobileMenuOpen(false);
        navigate('/login');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="navbar-header">
            <nav className="navbar">
                {/* Brand Logo */}
                <div className="navbar-brand">
                    <Link to="/" onClick={closeMobileMenu}>
                        <img src="/logo.png" alt="Healthizone Logo" className="navbar-logo" />
                        <span className="brand-name">Healthizone</span>
                    </Link>
                </div>

                {/* Mobile Hamburger Toggle Button */}
                <button 
                    className={`hamburger ${isMobileMenuOpen ? 'is-active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                    type="button"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Navigation Links */}
                <div className={`navbar-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
                    <ul className="navbar-links">
                        <li>
                            <Link to="/products" onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
                        </li>
                    </ul>

                    {/* Right Action Section (Cart & Auth) */}
                    <div className="navbar-actions">
                        <Link to="/cart" className="cart-link" onClick={closeMobileMenu}>
                            <span className="cart-icon" aria-hidden="true">🛒</span>
                            <span className="cart-text">Cart</span>
                            {cartCount > 0 && (
                                <span className="cart-badge">{cartCount}</span>
                            )}
                        </Link>

                        {user ? (
                            <div className="user-section">
                                <Link to="/profile" className="user-greeting" onClick={closeMobileMenu}>
                                    <span>Hi, {user.name}</span>
                                </Link>

                                {user.role === 'admin' && (
                                    <Link to="/admin" className="btn-admin" onClick={closeMobileMenu}>
                                        Admin
                                    </Link>
                                )}

                                <button onClick={handleLogout} className="btn-logout" type="button">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <Link to="/login" className="btn-login" onClick={closeMobileMenu}>
                                    Log In
                                </Link>
                                <Link to="/signup" className="btn-signup" onClick={closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;