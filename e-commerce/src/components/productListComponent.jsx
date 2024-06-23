import React from 'react';
import ProductComponent from './productComponent';

const ProductListComponent = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductListComponent;
