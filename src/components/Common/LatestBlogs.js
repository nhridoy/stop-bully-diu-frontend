import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const LatestBlogs = ({ blog }) => {
  const { id, blogtitle, blogcontent, blogimg, slug, published_date } = blog;
  return (
    <div>
      <div className="bg-gray-100 p-2 border rounded-lg">
        <div className="border p-2 bg-gray-50">
          <img
            src={blogimg}
            alt={blogtitle}
          />
          <div className="mt-2">
            <Link to={slug} className="text-2xl text-blue-600">
              {blogtitle}
            </Link>

            <p className="card-text">
              {`${blogcontent.substring(0, 100)}...`}
            </p>
            <p className="card-text">
              <small className="text-muted">
                {format(new Date(published_date), "PP")}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
