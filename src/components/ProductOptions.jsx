import React, { useState } from 'react';
import '../css/ProductOptions.css';

export default function ProductOptions({ options = [], radius = '4px', shape = 'square', type = 'text' }) {
  const [selected, setSelected] = useState(null);

  const getStyle = (option) => {
    const baseStyle = {
      borderRadius: shape === 'circle' ? '50%' : radius,
    };

    if (type === 'color') {
      baseStyle.backgroundColor = option;
    }

    return baseStyle;
  };

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <button
          key={index}
          className={`option-item ${shape} ${type} ${selected === index ? 'selected' : ''}`}
          style={getStyle(option)}
          onClick={() => setSelected(index)}
        >
          {type === 'text' && option}
        </button>
      ))}
    </div>
  );
}
