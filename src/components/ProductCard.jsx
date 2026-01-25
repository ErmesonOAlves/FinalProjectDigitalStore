import tenisCard from '../../assets/tenisCard.png';

export default function ProductCard({ name, price, priceDiscount }) {
    const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;
    const discountPercentage = hasDiscount 
        ? Math.round(((price - priceDiscount) / price) * 100)
        : 0;

    return (
        <div className="product-card">
            {hasDiscount && discountPercentage > 0 && (
                <div className="product-card-discount">
                    {discountPercentage}% OFF
                </div>
            )}
            <div className="product-card-image">
                <img src={tenisCard} alt={name} />
            </div>
            <div className="product-card-info">
                <p className="product-card-name">{name}</p>
                <div className="product-card-price">
                    {hasDiscount ? (
                        <>
                            <span className="product-card-price-original">${price.toFixed(2)}</span>
                            <span className="product-card-price-discount">${priceDiscount.toFixed(2)}</span>
                        </>
                    ) : (
                        <span className="product-card-price-current">${price.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
    );
}

