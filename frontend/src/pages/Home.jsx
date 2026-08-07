import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Healthizone</h1>
            <p>Your one-stop destination for all your health and wellness needs.</p>
            <Link to="/products" className="btn">Shop Now</Link>
        </div>
    );
}

export default Home;
