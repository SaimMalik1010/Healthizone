import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await fetch("/api/products");
                    const data = await response.json();
                    setProducts(data.slice(0, 4)); // Display only the first 4 products
                } catch (error) {
                    console.error("Error fetching products:", error);
                }
                finally {
                    setLoading(false);
                }
            };

            fetchProducts();
        }, []);

    return (
        <div className="home-container">
            <div className="hero-banner">
            <h1>Welcome to Healthizone</h1>
            <p>Your one-stop destination for all your health and wellness needs.</p>
            <Link to="/products" className="btn">Shop Now</Link>
            </div>
            <div className="featured-products">
            <h2>Featured Products</h2>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <Link to={`/products/${product.id}`} className="btn">View Details</Link>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
    );
}

export default Home;
