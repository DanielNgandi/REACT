// src/components/ProductComponent.js
import React from 'react';

function ProductComponent({ product, selectedColor, handleColorChange }) {
  const { title, collection, availableColors } = product;
  const imageSrc = `/images/jordan_${selectedColor.toLowerCase()}.png`;

  return (
    <div className="product">
      <div className='image'>
        <h2>Jordan-nike</h2>
      <img src={imageSrc} alt={`${title} - ${selectedColor}`} />
      </div>
      <div className='bodys'>
      <h2>{title}</h2>
      <p>{collection}</p>
      <p>Air Jordan is a line of basketball shoes 
        produced by Nike, Inc. Related apparel and accessories 
        are marketed under the Jordan Brand. The silhouette of Michael Jordan served 
        as inspiration to create the "Jumpman" logo.</p>
      
      <div className="color-options">
      availableColors:{availableColors.map((color) => (
          <button
      
            onClick={() => handleColorChange(color)}
            style={{ backgroundColor: color.toLowerCase() }}
          >
          
          </button>
        ))}
        <div className='amount'>
          <h3>RS.1350</h3>
          <button className='butt'>buy now</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductComponent;
