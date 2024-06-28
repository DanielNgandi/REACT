import React from "react";
import ProductsComponent from "./components/productcomponent";
import { CartProvider } from "./components/cartcontext";
import CartComponent from "./components/displaycartcomponent";


  const initialProducts = [
    {
      title: "Jordan Proto Lyte",
      collection: "Running Collection",
      description: "Lightweight and breathable, perfect for running.",
      availableColors: ["Red", "Black", "Orange"],
      price: 245,
      productID: 0,
    },
    // {
    //   title: "Nike Air Zoom Pegasus",
    //   collection: "Running Collection",
    //   description: "Designed for comfort and performance.",
    //   availableColors: ["Red", "Black", "Orange"],
    //   price: 180,
    //   productID: 1,
    // },
    // {
    //   title: "Adidas Ultraboost",
    //   collection: "Running Collection",
    //   description: "Boost technology for ultimate energy return.",
    //   availableColors: ["Red", "Black", "Orange"],
    //   price: 200,
    //   productID: 2,
    // },
    // {
    //   title: "New Balance Fresh Foam",
    //   collection: "Running Collection",
    //   description: "Fresh Foam midsole cushioning for a plush feel.",
    //   availableColors: ["Red", "Black", "Orange"],
    //   price: 150,
    //   productID: 3,
    // },
    // {
    //   title: "Asics Gel-Kayano",
    //   collection: "Running Collection",
    //   description: "High-performance running shoes with GEL technology.",
    //   availableColors: ["Red", "Black", "Orange"],
    //   price: 160,
    //   productID: 4,
    // },
    // {
    //   title: "Puma Ignite",
    //   collection: "Running Collection",
    //   description: "Engineered for maximum speed and comfort.",
    //   availableColors: ["Red", "Black", "Orange"],
    //   price: 130,
    //   productID: 5,
    // },
    // {
    //   title: "Brooks Ghost",
    //   collection: "Running Collection",
    //   description: "Smooth transitions and soft cushioning for runners.",
    //   availableColors: ["Red", "Black", "Orange"],
    //   price: 120,
    //   productID: 6,
    // },
    // {
    //   title: "Under Armour HOVR",
    //   collection: "Running Collection",
    //   description: "HOVR technology provides a zero-gravity feel.",
    //   availableColors: ["Red", "Black", "Orange"],
    //   price: 140,
    //   productID: 7,
    // },
    // {
    //   title: "Saucony Kinvara",
    //   collection: "Running Collection",
    //   description: "Minimalist design with responsive cushioning.",
    //   availableColors: ["Red", "orange", "Black"],
    //   price: 110,
    //   productID: 8,
    // },
    // {
    //   title: "Mizuno Wave Rider",
    //   collection: "Running Collection",
    //   description: "Wave technology for smooth and stable rides.",
    //   availableColors: ["Red", "Black", "Orange"],
    //   price: 150,
    //   productID: 9,
    // },
  ];
  function App() {
  return (
    <div className="mycart">
    <CartProvider>
      <ProductsComponent products={initialProducts} />
      <CartComponent/>
    </CartProvider>
    </div>
  );
}

export default App;