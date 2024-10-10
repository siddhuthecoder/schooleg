import React from 'react';
import { FaBell, FaDownload } from 'react-icons/fa'; // For icons

const BusHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Vehicle Status Card */}
      <div className="flex border border-gray-300 rounded-lg text-sm">
        {/* All Vehicles */}
        <div className="flex items-center px-3 py-2 bg-blue-50 text-blue-700 border-r border-gray-300">
          All Vehicle <span className="ml-2 font-bold">50</span>
        </div>
        {/* Running Vehicles */}
        <div className="flex items-center px-3 py-2 text-green-600 border-r border-gray-300">
          Running <span className="ml-2 font-bold">15</span>
        </div>
        {/* Stopped Vehicles */}
        <div className="flex items-center px-3 py-2 text-red-600">
          Stopped <span className="ml-2 font-bold">15</span>
        </div>
      </div>

      {/* Search, GPS Alert, and Download Button */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-2 pl-8 border border-gray-300 rounded-lg outline-none"
          />
          <span className="absolute left-2 top-2.5 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16a6 6 0 1111.31-3.9 7 7 0 11-4.9-4.9A6 6 0 018 16z"
              />
            </svg>
          </span>
        </div>

        {/* GPS Alert */}
        <div className="flex items-center space-x-1 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg relative">
          <FaBell />
          <span>GPS Alert</span>
          {/* Red dot for alert notification */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Download Button */}
        <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg">
          <FaDownload className="mr-2" />
          Download
        </button>
      </div>
    </div>
  );
};

export default BusHeader;

