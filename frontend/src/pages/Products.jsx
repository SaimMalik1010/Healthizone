import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';

function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('featured');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Filter & Sort Logic
    useEffect(() => {
        let updatedList = [...products];

        // 1. Search filter
        if (searchTerm) {
            updatedList = updatedList.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 2. Category filter
        if (selectedCategory !== 'All') {
            updatedList = updatedList.filter(
                (product) => product.category?.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // 3. Sorting
        if (sortBy === 'price-low') {
            updatedList.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            updatedList.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'name') {
            updatedList.sort((a, b) => a.name.localeCompare(b.name));
        }

        setFilteredProducts(updatedList);
    }, [searchTerm, selectedCategory, sortBy, products]);

    // Extract unique categories from products
    const categories = ['All', ...new Set(products.map((p) => p.category).filter(Boolean))];

    return (
        <div className="products-container">
            {/* Page Header */}
            <div className="products-header">
                <h1>Explore Our <span className="brand-highlight">Products</span></h1>
            </div>

            {/* Controls Bar: Search, Category Filter, and Sorting */}
            <div className="products-controls">
                {/* Search Bar */}
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button className="clear-search" onClick={() => setSearchTerm('')}>
                            ✕
                        </button>
                    )}
                </div>

                <div className="filter-sort-group">
                    {/* Category Dropdown */}
                    <div className="control-field">
                        <label htmlFor="category">Category:</label>
                        <select
                            id="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map((cat, idx) => (
                                <option key={idx} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="control-field">
                        <label htmlFor="sort">Sort By:</label>
                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name: A to Z</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Product Display Grid */}
            {loading ? (
                <div className="products-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <div key={n} className="product-skeleton">
                            <div className="skeleton-img"></div>
                            <div className="skeleton-text"></div>
                            <div className="skeleton-text short"></div>
                        </div>
                    ))}
                </div>
            ) : error ? (
                <div className="products-error">
                    <h3>Something went wrong</h3>
                    <p>{error}</p>
                </div>
            ) : filteredProducts.length === 0 ? (
                <div className="products-empty">
                    <span className="empty-icon">💊</span>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter options to find what you're looking for.</p>
                    <button 
                        className="btn btn-reset-filter"
                        onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('All');
                            setSortBy('featured');
                        }}
                    >
                        Reset Filters
                    </button>
                </div>
            ) : (
                <>
                    <p className="results-count">
                        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                    </p>
                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product._id || product.id} product={product} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Products;