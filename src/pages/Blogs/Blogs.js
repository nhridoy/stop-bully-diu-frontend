import React from "react";
import LatestBlogs from "../../components/Common/LatestBlogs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="py-4">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        gutter="10px"
      >
        <Masonry>
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
          <LatestBlogs />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Blogs;
