import React from 'react';

const FilterComponent = ({ searchTerm, selectedCategories, onSearchTermChange, onCategoryChange }) => {
  const categories = ['Electronics', 'Clothing', 'Books'];

  const handleInputChange = (e) => {
    onSearchTermChange(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    onCategoryChange(e.target.name);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div>
        {categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              name={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCheckboxChange}
            />
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
