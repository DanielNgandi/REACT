import React, { useState } from 'react';
import FilterComponent from './components/filteredComponent';
import ProductListComponent from './components/productListComponent';


const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Shirt', category: 'Clothing', price: 29 },
  { id: 3, name: 'Book', category: 'Books', price: 19 },
  { id: 4, name: 'Headphones', category: 'Electronics', price: 199 },
  // Add more products as needed
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div>
      <h1>Product List</h1>
      <FilterComponent
        searchTerm={searchTerm}
        selectedCategories={selectedCategories}
        onSearchTermChange={handleSearchTermChange}
        onCategoryChange={handleCategoryChange}
      />
      <ProductListComponent products={filteredProducts} />
    </div>
  );
};

export default App;
