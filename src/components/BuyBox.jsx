import React from 'react';
import '../css/BuyBox.css';

export default function BuyBox({ 
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children 
}) {
  // const [selectedSize, setSelectedSize] = useState(null);
  // const [selectedColor, setSelectedColor] = useState(null);

  // const sizes = ['39', '40', '41', '42', '43'];
  // const colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];

  return (
    <div className="buybox-container">
      <h1 className="buybox-name">{name}</h1>
      <p className="buybox-reference">Casual | Nike | REF:{reference}</p>
      
      <div className="buybox-rating">
        <span className="rating-stars">
          {stars} <img src="/assets/star-icon.svg" alt="star" className="star-icon" />
        </span>
        <span className="rating-count">({rating} avaliações)</span>
      </div>

      <div className="buybox-price">
        {priceDiscount ? (
          <>
            <span className="price-original">R$ {price.toFixed(2).replace('.', ',')}</span>
            <span className="price-discount">R$ {priceDiscount.toFixed(2).replace('.', ',')}</span>
          </>
        ) : (
          <span className="price-current">R$ {price.toFixed(2).replace('.', ',')}</span>
        )}
      </div>

      <p className="buybox-description">{description}</p>

      {children}

      <button className="buybox-button">COMPRAR</button>
    </div>
  );
}
