import React from "react";
import LatestBlogs from "../../components/Common/LatestBlogs";
import ProductList from "../../components/Common/ProductList";

import Slider from "../../components/Home/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="text-4xl font-semibold text-center p-4">Latest Blogs</h1>
      <div className="grid lg:grid-cols-3 md:gird-cols-2 grid-cols-1 gap-4">
        <LatestBlogs />
        <LatestBlogs />
        <LatestBlogs />
      </div>
      <h1 className="text-4xl font-semibold text-center p-4">
        Protection Gears
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
