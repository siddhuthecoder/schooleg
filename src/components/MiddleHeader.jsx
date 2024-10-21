import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaPlus } from 'react-icons/fa';
import AddClassModal from './AddClassModal';
import ClassTable from './ClassTable'; // Import ClassTable to display class data

const ClassControlPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classData, setClassData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Fetch class data from API
  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await axios.get('https://schooleg.com/Schooleg/get-all-classes');
        setClassData(response.data); // Assuming the data is directly the class array
        setLoading(false);
      } catch (err) {
        setError('Failed to load classes');
        setLoading(false);
      }
    };

    fetchClassData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        {/* Total Classes Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-700">
          Total Classes <span className="font-bold">{classData.length}</span>
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
          </select>

          {/* Add Class Button */}
          <button
            onClick={handleModalOpen}
            className="bg-blue-600 text-white rounded-lg flex items-center px-4 py-2"
          >
            <FaPlus className="mr-2" /> Add Class
          </button>
        </div>
      </div>

      {/* Add Class Modal */}
      {isModalOpen && <AddClassModal isOpen={isModalOpen} onClose={handleModalClose} />}

      {/* Display ClassTable */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ClassTable classData={classData} />
      )}
    </div>
  );
};

export default ClassControlPanel;
