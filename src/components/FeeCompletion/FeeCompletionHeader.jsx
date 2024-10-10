import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

const FeeCompletionHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Left Section: Three status cards */}
      <div className="flex space-x-4">
        {/* Total Receiving */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-blue-700 text-sm">
          <span className="block">Total Receiving</span>
          <span className="font-bold text-black">Rs 15,00,000</span>
        </div>

        {/* Received */}
        <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-green-700 text-sm">
          <span className="block">Received</span>
          <span className="font-bold text-black">Rs 10,00,000</span>
        </div>

        {/* Pending */}
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-red-700 text-sm">
          <span className="block">Pending</span>
          <span className="font-bold text-black">Rs 12,00,000</span>
        </div>
      </div>

      {/* Right Section: Search, Date Picker, and Button */}
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
          <option>September</option>
          {/* Add more options here if needed */}
        </select>

        {/* Add Fees Button */}
        <button className="bg-[#0662C6] text-white rounded-lg flex items-center px-4 py-2">
          <FaPlus className="mr-2" /> Add Fees
        </button>
      </div>
    </div>
  );
};

export default FeeCompletionHeader;
