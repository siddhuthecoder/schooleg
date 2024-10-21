import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Or use fetch if preferred
import { FaSearch, FaPlus } from 'react-icons/fa';
import AddHelperModal from './AddHelperModal'; // Import the modal component
import HelperTable from './HelperTable'; // Import the HelperTable component

const HelperHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [helpers, setHelpers] = useState([]);

  // Fetch helpers from the API
  useEffect(() => {
    axios.get('https://schooleg.com/Schooleg/get-helpers')
      .then((response) => {
        setHelpers(response.data); // Set the fetched helper data
      })
      .catch((error) => {
        console.error('Error fetching helpers:', error);
      });
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        {/* Total Helpers Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-700">
          Total Helpers <span className="font-bold">{helpers.length}</span>
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

          {/* Add Helper Button */}
          <button
            onClick={handleModalOpen}
            className="bg-[#0662C6] text-white rounded-lg flex items-center px-4 py-2"
          >
            <FaPlus className="mr-2" /> Add Helper
          </button>
        </div>
      </div>

      {/* Add Helper Modal */}
      {isModalOpen && <AddHelperModal isOpen={isModalOpen} onClose={handleModalClose} />}

      {/* Pass the helpers data to the HelperTable component */}
      <HelperTable helpers={helpers} />
    </div>
  );
};

export default HelperHeader;
