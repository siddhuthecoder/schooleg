import React, { useEffect, useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import RemainderTable from './RemainderTable'; // Import the table

const RemainderHeader = () => {
  const [reminders, setReminders] = useState([]); // State to store API data

  // Fetch reminders from the API
  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const response = await fetch('https://schooleg.com/Schooleg/reminders');
        const data = await response.json();
        setReminders(data); // Set API data in state
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };
    fetchReminders();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        {/* Total Reminders Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-700 rounded-md">
          Total Reminders <span className="font-bold">{reminders.length}</span>
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

          {/* Add Reminder Button */}
          <button className="bg-[#0662C6] text-white rounded-lg flex items-center px-4 py-2">
            <FaPlus className="mr-2" /> Add Reminder
          </button>
        </div>
      </div>

      {/* Pass the fetched reminders to the RemainderTable */}
      <RemainderTable reminders={reminders} />
    </div>
  );
};

export default RemainderHeader;
