import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/product.css";

const ProductCard = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <Link to={`/product/${product.id}`} className={styles.productLink}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>${product.price}</p>
            </Link>
        </div>
    );
}

export default ProductCard;