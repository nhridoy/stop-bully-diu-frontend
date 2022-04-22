import React from "react";

const Product = () => {
  return (
    <div className="py-4 grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="product"
        />
      </div>
      <div className="col-span-2">
        <h2 className="text-3xl italic font-semibold">Product Title</h2>
        <p>Price: 0000</p>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis repudiandae sint fugiat eveniet officia suscipit nisi minima
          nam dolore molestiae officiis excepturi expedita quisquam eum ea esse
          beatae quaerat!
        </p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
