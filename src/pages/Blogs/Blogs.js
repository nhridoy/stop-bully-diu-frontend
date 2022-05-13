import React from "react";
import LatestBlogs from "../../components/Common/LatestBlogs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link, Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="py-4">
      <Link to="/new-blog" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Create Blog
      </Link>
      <div className="mt-10">
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
    </div>
  );
};

export default Blogs;
