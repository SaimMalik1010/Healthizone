import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    <img src="/logo.png" alt="Logo" className="navbar-logo" />
                    Healthizone
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

