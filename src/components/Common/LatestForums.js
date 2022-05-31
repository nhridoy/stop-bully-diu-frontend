import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const LatestForums = ({ forum }) => {
  const { id, content, published_date } = forum;
  return (
    <div>
      <div className="bg-gray-100 p-2 border rounded-lg">
        <div className="border p-2 bg-gray-50">
          <div className="mt-2">
            <Link to={`/forums/${id}`} className="text-2xl text-blue-600">
              View Details
            </Link>

            <p className="card-text">
              {`${content.substring(0, 100)}...`}
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
