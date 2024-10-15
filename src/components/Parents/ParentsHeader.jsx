import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import AddParentModal from './AddParentModal'; // Import the modal component

const ParentsHeader = ({ totalParents, addParent }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddParent = (newParent) => {
    addParent(newParent); // Call the function passed from the parent component
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-700">
        Total Parents <span className="font-bold">{totalParents}</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <FaSearch className="ml-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="p-2 outline-none"
          />
        </div>

        <select className="border border-gray-300 rounded-lg p-2">
          <option>14/08/24</option>
        </select>

        <button
          className="bg-[#0662C6] text-white rounded-lg flex items-center px-4 py-2"
          onClick={() => setModalOpen(true)} // Open modal on click
        >
          <FaPlus className="mr-2" /> Add Parent
        </button>
      </div>

      {/* Modal Component */}
      <AddParentModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)} // Close modal
        onSubmit={handleAddParent} // Pass the add function to the modal
      />
    </div>
  );
};

export default ParentsHeader;
