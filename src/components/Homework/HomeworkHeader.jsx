import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

const HomeworkHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Total Classes Card */}
      <div className="bg-blue-50 border border-blue-200  p-3 text-blue-700 rounded-md">
        Total Homework <span className="font-bold">50</span>
      </div>

      {/* Search and Date Section */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <FaSearch className="ml-2 text-gray-400" />
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
        <button className="bg-[#0662C6] text-white rounded-lg flex items-center px-4 py-2">
          <FaPlus className="mr-2" /> Add Homework
        </button>
      </div>
    </div>
  );
};

export default HomeworkHeader;