import React from 'react';
import '../css/FilterGroup.css';

const FilterGroup = ({ title, inputType = 'checkbox', options = [] }) => {
  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>
      <div className="filter-group-options">
        {options.map((option, index) => (
          <label key={index} className="filter-option">
            <input
              type={inputType}
              name={inputType === 'radio' ? title : undefined}
              value={option.value || option.text}
              className="filter-input"
            />
            <span className="filter-label">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;