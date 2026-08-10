
import React from 'react';
import { AuthContext } from '../context/AuthContext'; // Assuming you have an AuthContext
import { useAuth } from '../hooks/useAuth'; // Assuming you have a custom hook for authentication
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    const {user , logout} = useAuth(AuthContext); // Assuming you have an auth context or hook

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
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

                {user ? (
                
                    <>
                        <li>
                            <Link to="/profile">Hi {user.name}</Link>
                        </li>
                        {user.role === 'admin' && (
                            <li>
                                <Link to="/admin">Admin Dashboard</Link>
                            </li>
                        )}
                        <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                    </>
                )
                : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;

