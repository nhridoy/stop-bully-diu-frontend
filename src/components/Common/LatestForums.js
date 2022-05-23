import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const LatestForums = ({ forum }) => {
  const { id, forumtitle, forumcontent, forumimg, slug, published_date } = forum;
  return (
    <div>
      <div className="bg-gray-100 p-2 border rounded-lg">
        <div className="border p-2 bg-gray-50">
          <img
            src={forumimg}
            alt={forumtitle}
            className="w-full h-64 object-cover"
          />
          <div className="mt-2">
            <Link to={`/forums/${id}`} className="text-2xl text-blue-600">
              {forumtitle}
            </Link>

            <p className="card-text">
              {`${forumcontent.substring(0, 100)}...`}
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

export default LatestForums;
