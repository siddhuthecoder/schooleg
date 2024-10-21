import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Or use fetch if you prefer
import { FaSearch, FaPlus } from 'react-icons/fa';
import AddDriverModal from './AddDriverModal'; // Import the modal component
import DriverTable from './DriverTable'; // Import DriverTable

const DriverHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drivers, setDrivers] = useState([]);

  // Fetch drivers from the API
  useEffect(() => {
    axios.get('https://schooleg.com/Schooleg/get-drivers')
      .then((response) => {
        setDrivers(response.data); // Set the fetched driver data
      })
      .catch((error) => {
        console.error('Error fetching drivers:', error);
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
        {/* Total Drivers Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-700">
          Total Drivers <span className="font-bold">{drivers.length}</span>
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

          {/* Add Driver Button */}
          <button
            onClick={handleModalOpen}
            className="bg-[#0662C6] text-white rounded-lg flex items-center px-4 py-2"
          >
            <FaPlus className="mr-2" /> Add Driver
          </button>
        </div>
      </div>

      {/* Add Driver Modal */}
      {isModalOpen && <AddDriverModal isOpen={isModalOpen} onClose={handleModalClose} />}

      {/* Pass the drivers data to the DriverTable component */}
      <DriverTable drivers={drivers} />
    </div>
  );
};

export default DriverHeader;
