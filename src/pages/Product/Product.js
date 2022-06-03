import React from "react";
import { useLocation } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { addToLocalStorage } from "../../utils/cartstore";

const Product = () => {
  const { state } = useLocation();
  const { addToCart } = useCart();

  const {
    id,
    product_name,
    product_price,
    product_desc,
    product_stock,
    product_image,
  } = state;

  return (
    // <div className="py-4 grid grid-cols-3 gap-4">
    <div className="py-4">
      <div className="col-span-1">
        <img src={product_image} alt="product" className="h-80 mx-auto" />
      </div>
      {/* <div className="col-span-2"> */}
      <h2 className="text-3xl italic font-semibold py-3">{product_name}</h2>
      <p>Price: ${product_price}</p>
      <p>Description: {product_desc}</p>
      <p className="pb-4">Stock: {product_stock}</p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={() => {
          alert("Added to cart!");
          addToLocalStorage(id);
        }}
      >
        Add to Cart
      </button>
      {/* </div> */}
    </div>
  );
};

export default Product;
