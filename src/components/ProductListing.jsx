import ProductCard from './ProductCard';
import '../css/ProductListing.css';

export default function ProductListing({ products = [] }) {
    return (
        <div className="product-listing">
            <div className="product-listing-header">
                <h2>Produtos em alta</h2>
                <h4>Ver todos →</h4>
            </div>
            <div className="product-listing-grid">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                    />
                ))}
            </div>
        </div>
    );
}