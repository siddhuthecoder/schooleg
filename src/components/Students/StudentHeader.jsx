import React from 'react';

const StudentHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Notice Details Card */}
      <div className="flex border border-gray-300 rounded-lg p-0 text-sm">
        {/* Total Notice */}
        <div className="flex items-center px-3 py-2 bg-blue-50 text-blue-700  border-gray-300 rounded-md">
          Total Notice <span className="ml-2 font-bold">50</span>
        </div>
        {/* Present */}
        <div className="flex items-center px-3 py-2 text-green-600  ">
          Present <span className="ml-2 font-bold">15</span>
        </div>
        {/* Absent */}
        <div className="flex items-center px-3 py-2 text-red-600  border-gray-300">
          Absent <span className="ml-2 font-bold">15</span>
        </div>
        {/* On Leave */}
        <div className="flex items-center px-3 py-2 text-yellow-600">
          On Leave <span className="ml-2 font-bold">15</span>
        </div>
      </div>

      {/* Search and Date Section */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="p-2 outline-none"
          />
        </div>

        {/* Date Picker */}
        <select className="border border-gray-300 rounded-lg p-2">
          <option>14/08/24</option>
          {/* Add more options here as needed */}
        </select>

        {/* Add Class Button */}
        <button className="bg-blue-600 text-white rounded-lg flex items-center px-4 py-2">
          Add Students
        </button>
      </div>
    </div>
  );
};

export default StudentHeader;
