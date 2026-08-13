import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/productDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState('description');
    const [addedToast, setAddedToast] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                if (!response.ok) {
                    throw new Error('Product not found.');
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleQuantityChange = (type) => {
        if (type === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (type === 'increase' && quantity < (product?.stock || 10)) {
            setQuantity(quantity + 1);
        }
    };

    const handleAddToCart = () => {
        if (!product) return;

        // Dispatch action to Redux store
        dispatch({
            type: 'cart/addItem', // Adjust according to your Redux slice setup
            payload: {
                ...product,
                quantity
            }
        });

        // Trigger visual feedback toast
        setAddedToast(true);
        setTimeout(() => setAddedToast(false), 2500);
    };

    if (loading) {
        return (
            <div className="pd-container pd-loading">
                <div className="pd-spinner"></div>
                <p>Loading product details...</p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="pd-container pd-error-state">
                <h2>Product Not Found</h2>
                <p>{error || "The product you're looking for doesn't exist."}</p>
                <Link to="/products" className="btn btn-pd-primary">
                    Back to Products
                </Link>
            </div>
        );
    }

    // Normalizing image array vs single image string
    const images = Array.isArray(product.images) && product.images.length > 0
        ? product.images
        : [product.image || '/placeholder.png'];

    return (
        <div className="pd-container">
            {/* Success Toast Notification */}
            {addedToast && (
                <div className="pd-toast">
                    ✓ Added {quantity} item(s) to your cart!
                </div>
            )}

            {/* Breadcrumb Navigation */}
            <nav className="pd-breadcrumb">
                <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
            </nav>

            <div className="pd-grid">
                {/* Product Image Gallery */}
                <div className="pd-gallery">
                    <div className="pd-main-image-wrapper">
                        <img 
                            src={images[selectedImage]} 
                            alt={product.name} 
                            className="pd-main-image" 
                        />
                    </div>
                    {images.length > 1 && (
                        <div className="pd-thumbnails">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    className={`pd-thumb-btn ${selectedImage === idx ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(idx)}
                                >
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info & Purchase Options */}
                <div className="pd-info">
                    <span className="pd-category">{product.category || 'Health & Wellness'}</span>
                    <h1 className="pd-title">{product.name}</h1>

                    <div className="pd-price-row">
                        <span className="pd-price">${Number(product.price).toFixed(2)}</span>
                        {product.originalPrice && (
                            <span className="pd-original-price">${Number(product.originalPrice).toFixed(2)}</span>
                        )}
                        <span className={`pd-stock-badge ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    <p className="pd-short-description">
                        {product.shortDescription || product.description?.substring(0, 160) + '...'}
                    </p>

                    <hr className="pd-divider" />

                    {/* Quantity Selector & Add to Cart */}
                    <div className="pd-actions">
                        <div className="pd-quantity-control">
                            <label>Quantity:</label>
                            <div className="quantity-btn-group">
                                <button 
                                    onClick={() => handleQuantityChange('decrease')}
                                    disabled={quantity <= 1}
                                    type="button"
                                >
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button 
                                    onClick={() => handleQuantityChange('increase')}
                                    disabled={quantity >= (product.stock || 10)}
                                    type="button"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button 
                            className="btn btn-pd-cart" 
                            onClick={handleAddToCart}
                            disabled={product.stock <= 0}
                        >
                            🛒 Add to Cart
                        </button>
                    </div>

                    {/* Value Props */}
                    <div className="pd-perks">
                        <div className="perk-item">
                            <span>🚚</span>
                            <div>
                                <strong>Free Delivery</strong>
                                <p>On orders over $50</p>
                            </div>
                        </div>
                        <div className="perk-item">
                            <span>🛡️</span>
                            <div>
                                <strong>Quality Guaranteed</strong>
                                <p>100% authentic products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabbed Info Section (Description / Specifications) */}
            <div className="pd-tabs-section">
                <div className="pd-tab-headers">
                    <button 
                        className={`pd-tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button 
                        className={`pd-tab-btn ${activeTab === 'usage' ? 'active' : ''}`}
                        onClick={() => setActiveTab('usage')}
                    >
                        How to Use
                    </button>
                </div>

                <div className="pd-tab-content">
                    {activeTab === 'description' && (
                        <div>
                            <p>{product.description || 'No detailed description available for this product.'}</p>
                        </div>
                    )}
                    {activeTab === 'usage' && (
                        <div>
                            <p>{product.usage || 'Take as directed by a healthcare professional or as instructed on the packaging.'}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;