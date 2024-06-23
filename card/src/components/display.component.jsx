// src/components/DisplayProductComponent.js
import React, { useState } from 'react';
import ProductComponent from './product.component'

function DisplayProductComponent({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="display-component" style={{ backgroundColor: selectedColor.toLowerCase() }}>
      <ProductComponent
        product={product}
        selectedColor={selectedColor}
        handleColorChange={handleColorChange}
      />
    </div>
  );
}

export default DisplayProductComponent;
