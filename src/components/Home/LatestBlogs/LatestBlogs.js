import React from "react";

const LatestBlogs = () => {
  return (
    <div>
      <div className="bg-gray-100 p-2 border rounded-lg">
        <div className="border p-2 bg-gray-50">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="..."
          />
          <div className="mt-2">
            <h5 className="text-2xl">Card title</h5>

            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
