import React, { useEffect, useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import AddNoticeModal from './AddNoticeModal'; // Import the modal component
import NoticeTable from './NoticeTable'; // Assuming NoticeTable is in the same directory

const NoticeHeader = () => {
  const [notices, setNotices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data from API
    const fetchNotices = async () => {
      try {
        const response = await fetch('https://schooleg.com/Schooleg/notices');
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  const handleAddNotice = (newNotice) => {
    setNotices([...notices, newNotice]);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        {/* Total Classes Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-700 rounded-md">
          Total Notice <span className="font-bold">{notices.length}</span>
        </div>

        {/* Search and Date Section */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <FaSearch className="ml-2 text-gray-400" />
            <input type="text" placeholder="Search" className="p-2 outline-none" />
          </div>

          {/* Date Picker */}
          <select className="border border-gray-300 rounded-lg p-2">
            <option>14/08/24</option>
            {/* Add more options here as needed */}
          </select>

          {/* Add Notice Button */}
          <button
            className="bg-[#0662C6] text-white rounded-lg flex items-center px-4 py-2"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlus className="mr-2" /> Add Notice
          </button>
        </div>
      </div>

      {/* Render NoticeTable and pass the fetched data */}
      <NoticeTable notices={notices} />

      {/* Add Notice Modal */}
      <AddNoticeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddNotice={handleAddNotice}
      />
    </div>
  );
};

export default NoticeHeader;
