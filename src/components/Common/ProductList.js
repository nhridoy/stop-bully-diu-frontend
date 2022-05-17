import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  const { product_name, product_price, product_desc, product_stock } = product;
  return (
    <div>
      <div className="bg-gray-100 p-4 border rounded-lg">
        <div className="mt-2 flex flex-col gap-2">
          <Link to="" className="text-2xl text-blue-600">
            {product_name}
          </Link>
          <p className="text-sm">Price: ${product_price}</p>
          <p className="text-sm">
            {product_desc}
          </p>
          <p className="text-sm">
            {product_stock} in stock
          </p>
          <button className="bg-blue-600 px-3 py-1">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
