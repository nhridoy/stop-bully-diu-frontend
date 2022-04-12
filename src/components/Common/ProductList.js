import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <div className="bg-gray-100 p-4 border rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1597926576013-ab759c583dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="mt-2 flex flex-col gap-2">
          <Link to="" className="text-2xl text-blue-600">
            Product Name
          </Link>
          <p className="text-sm">Price: $100</p>
          <p className="text-sm">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <button className="bg-blue-600 px-3 py-1">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
