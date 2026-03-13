import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

import '../css/ProductListing.css';

export default function ProductListing({ products = [],showViewAll = true }) {
    return (
        <div className="product-listing">
            <div className="product-listing-header">
                <h2>Produtos em alta</h2>
                { showViewAll &&
                (<Link to="/produtos">
                <h4>Ver todos →</h4>
                </Link>)}
            </div>
            <div className="product-listing-grid">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        category={product.category}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}