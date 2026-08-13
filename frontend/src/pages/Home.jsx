import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products");
                const data = await response.json();
                setProducts(data.slice(0, 4)); // Display first 4 products
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="home-container">
            {/* Hero Banner Section */}
            <section className="hero-banner">
                <div className="hero-content">
                    <span className="hero-badge">Your Health, Our Priority</span>
                    <h1>Welcome to <span className="brand-highlight">Healthizone</span></h1>
                    <p>
                        Discover premium wellness products, trusted supplements, and healthcare 
                        essentials delivered right to your door.
                    </p>
                    <div className="hero-actions">
                        <Link to="/products" className="btn btn-hero">
                            Shop Now
                        </Link>
                        <Link to="/about" className="btn-secondary">
                            Learn More
                        </Link>
                    </div>

                    
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="featured-products">
                <div className="section-header">
                    <h2>Featured Products</h2>
                </div>

                {loading ? (
                    <div className="product-grid">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="product-skeleton">
                                <div className="skeleton-img"></div>
                                <div className="skeleton-text"></div>
                                <div className="skeleton-text short"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductCard key={product._id || product.id} product={product} />
                        ))}
                    </div>
                )}

                <div className="view-all-wrapper">
                    <Link to="/products" className="btn-outline">
                        View All Products
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;