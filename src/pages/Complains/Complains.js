import React from "react";
import { Link } from "react-router-dom";

const Complains = () => {
  return (<div className="">
    <Link to='/new-complain' class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Complains</Link>
    <table className="table-auto w-full text-center">
      <thead>
        <tr>
          <th className="px-4 py-2">Complains</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Complain 1
            </a>
          </td>
          <td className="border px-4 py-2">
            <span className="text-red-500 flex justify-center">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.707 17.707l10-10a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-10 10a1 1 0 01-.707.293l-4-4a1 1 0 010-1.414z" />
              </svg>
            </span>
          </td>
          <td className="border px-4 py-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              View
            </button>
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Complain 2
            </a>
          </td>
          <td className="border px-4 py-2">
            <span className="text-green-500 flex justify-center">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.707 17.707l10-10a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-10 10a1 1 0 01-.707.293l-4-4a1 1 0 010-1.414z" />
              </svg>
            </span>
          </td>
          <td className="border px-4 py-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              View
            </button>
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Complain 3
            </a>
          </td>
          <td className="border px-4 py-2">
            <span className="text-green-500 flex justify-center">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.707 17.707l10-10a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-10 10a1 1 0 01-.707.293l-4-4a1 1 0 010-1.414z" />
              </svg>
            </span>
          </td>
          <td className="border px-4 py-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              View
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>);
};

export default Complains;
