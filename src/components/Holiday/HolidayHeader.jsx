import React, { useEffect, useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import HolidayTable from './HolidayTable';

const HolidayHeader = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    // Fetch the holidays from the API
    const fetchHolidays = async () => {
      try {
        const response = await fetch('https://schooleg.com/Schooleg/holidays');
        const data = await response.json();
        if (data.length > 0) {
          // Process the response to match the data structure required by HolidayTable
          const formattedHolidays = [];
          const monthsData = data[0].months; // Assuming data has the months key

          for (const month in monthsData) {
            if (monthsData[month].length > 0) {
              monthsData[month].forEach(holiday => {
                formattedHolidays.push({
                  month,
                  from: new Date(holiday.date).toLocaleDateString(), // Format date to 'dd/mm/yyyy'
                  to: new Date(holiday.date).toLocaleDateString(),
                  occasion: holiday.name
                });
              });
            }
          }
          setHolidays(formattedHolidays);
        }
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-700">
          Total Holiday <span className="font-bold">{holidays.length}</span>
        </div>

        {/* Search and Add Holiday Section */}
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
            {/* Add more options dynamically if needed */}
          </select>

          <button className="bg-[#0662C6] text-white rounded-lg flex items-center px-4 py-2">
            <FaPlus className="mr-2" /> Add Holiday
          </button>
        </div>
      </div>

      {/* Holiday Table */}
      <HolidayTable holidays={holidays} />
    </div>
  );
};

export default HolidayHeader;
