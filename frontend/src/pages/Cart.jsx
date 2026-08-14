import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/cart.css';

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Retrieve cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items || []);

    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [promoError, setPromoError] = useState('');
    const [promoSuccess, setPromoSuccess] = useState('');

    // Quantity Handlers
    const handleQuantityChange = (id, currentQty, delta) => {
        const newQty = currentQty + delta;
        if (newQty > 0) {
            dispatch({
                type: 'cart/updateQuantity',
                payload: { id, quantity: newQty }
            });
        }
    };

    const handleRemoveItem = (id) => {
        dispatch({
            type: 'cart/removeItem',
            payload: id
        });
    };

    const handleClearCart = () => {
        dispatch({ type: 'cart/clearCart' });
    };

    // Promo Code Handler
    const handleApplyPromo = (e) => {
        e.preventDefault();
        setPromoError('');
        setPromoSuccess('');

        if (promoCode.trim().toUpperCase() === 'HEALTH10') {
            setDiscount(0.10); // 10% discount
            setPromoSuccess('Promo code applied: 10% OFF!');
        } else {
            setPromoError('Invalid promo code. Try HEALTH10');
        }
    };

    // Calculations
    const subtotal = cartItems.reduce(
        (sum, item) => sum + Number(item.price) * (item.quantity || 1), 
        0
    );
    const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5.99;
    const discountAmount = subtotal * discount;
    const tax = (subtotal - discountAmount) * 0.05; // 5% estimated tax
    const total = subtotal - discountAmount + shipping + tax;

    if (cartItems.length === 0) {
        return (
            <div className="cart-container">
                <div className="cart-empty-card">
                    <span className="cart-empty-icon">🛒</span>
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't added any products to your cart yet.</p>
                    <Link to="/products" className="btn btn-cart-empty">
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Your Shopping <span className="brand-highlight">Cart</span></h1>
                <button className="btn-clear-cart" onClick={handleClearCart}>
                    Clear Cart
                </button>
            </div>

            <div className="cart-grid">
                {/* Cart Items List */}
                <div className="cart-items-section">
                    <div className="cart-items-header">
                        <span>Product</span>
                        <span>Quantity</span>
                        <span>Total</span>
                    </div>

                    <div className="cart-items-list">
                        {cartItems.map((item) => {
                            const itemId = item._id || item.id;
                            const itemTotal = Number(item.price) * (item.quantity || 1);

                            return (
                                <div key={itemId} className="cart-item">
                                    <div className="cart-item-info">
                                        <img 
                                            src={item.image || (Array.isArray(item.images) ? item.images[0] : '/placeholder.png')} 
                                            alt={item.name} 
                                        />
                                        <div>
                                            <Link to={`/products/${itemId}`} className="cart-item-title">
                                                {item.name}
                                            </Link>
                                            <span className="cart-item-price">${Number(item.price).toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="cart-item-quantity">
                                        <button 
                                            onClick={() => handleQuantityChange(itemId, item.quantity, -1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity || 1}</span>
                                        <button 
                                            onClick={() => handleQuantityChange(itemId, item.quantity, 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Item Total & Remove */}
                                    <div className="cart-item-total-wrapper">
                                        <span className="cart-item-total">${itemTotal.toFixed(2)}</span>
                                        <button 
                                            className="btn-remove-item"
                                            onClick={() => handleRemoveItem(itemId)}
                                            title="Remove item"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="cart-back-link">
                        <Link to="/products">← Continue Shopping</Link>
                    </div>
                </div>

                {/* Order Summary Sidebar */}
                <div className="cart-summary-section">
                    <div className="summary-card">
                        <h2>Order Summary</h2>

                        {/* Promo Code Form */}
                        <form onSubmit={handleApplyPromo} className="promo-form">
                            <input
                                type="text"
                                placeholder="Promo code"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                            />
                            <button type="submit">Apply</button>
                        </form>
                        {promoError && <p className="promo-message error">{promoError}</p>}
                        {promoSuccess && <p className="promo-message success">{promoSuccess}</p>}

                        <div className="summary-rows">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            {discount > 0 && (
                                <div className="summary-row discount">
                                    <span>Discount (10%)</span>
                                    <span>-${discountAmount.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="summary-row">
                                <span>Estimated Shipping</span>
                                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                            </div>

                            <div className="summary-row">
                                <span>Estimated Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>

                            <hr className="summary-divider" />

                            <div className="summary-row total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button 
                            className="btn btn-checkout"
                            onClick={() => navigate('/checkout')}
                        >
                            Proceed to Checkout ➔
                        </button>

                        <div className="secure-badge">
                            🔒 256-bit Encrypted Checkout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;