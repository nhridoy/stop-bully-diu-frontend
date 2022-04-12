import React from "react";

const Profile = () => {
  return (
    <div>
      {/* User Profile Page */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="bg-gray-200 rounded-lg shadow-lg p-4">
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="avatar"
                  className="w-20 h-20 rounded-full"
                />

                <div className="ml-4">
                  <h4 className="text-lg font-semibold">John Doe</h4>
                  <p className="text-gray-600 text-sm">@johndoe</p>

                  <div className="mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
