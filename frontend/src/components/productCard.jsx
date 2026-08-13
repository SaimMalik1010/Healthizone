import React from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";

const ProductCard = ({ product }) => {
    const productId = product._id || product.id;

    return (
        <article className="product-card">
            <Link to={`/products/${productId}`} className="product-link">
                <img src={product.imageUrl || product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${Number(product.price).toFixed(2)}</p>
            </Link>
        </article>
    );
};

export default ProductCard;