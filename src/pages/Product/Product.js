import React from "react";
import { useLocation } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Product = () => {
  const { state } = useLocation();
  const { addToCart } = useCart();

  const { product_name, product_price, product_desc, product_stock } = state;

  return (
    // <div className="py-4 grid grid-cols-3 gap-4">
    <div className="py-4">
      {/* <div className="col-span-1">
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="product"
        />
      </div> */}
      {/* <div className="col-span-2"> */}
      <h2 className="text-3xl italic font-semibold">{product_name}</h2>
      <p>Price: ${product_price}</p>
      <p>Description: {product_desc}</p>
      <p>Stock: {product_stock}</p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          alert("Added to cart!");
          addToCart(state);
        }}
      >
        Add to Cart
      </button>
      {/* </div> */}
    </div>
  );
};

export default Product;
