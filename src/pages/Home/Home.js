import React from "react";
import ProductList from "../../components/Common/ProductList";
import LatestBlogs from "../../components/Home/LatestBlogs/LatestBlogs";
import Slider from "../../components/Home/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="text-4xl font-semibold text-center p-4">Latest Blogs</h1>
      <div className="grid grid-cols-3 gap-4">
        <LatestBlogs />
        <LatestBlogs />
        <LatestBlogs />
      </div>
      <h1 className="text-4xl font-semibold text-center p-4">
        Protection Gears
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
