import React from "react";
import { FaPen, FaTrash } from 'react-icons/fa'; // For Edit and Delete icons

const HolidayTable = () => {
  const leaveData = [
    {
      month: "August",
      from: "15/08/2024",
      to: "15/08/2024",
      occasion: "For Independence Day"
    },
    {
      month: "August",
      from: "15/08/2024",
      to: "15/08/2024",
      occasion: "For Independence Day"
    },
    {
      month: "August",
      from: "15/08/2024",
      to: "15/08/2024",
      occasion: "For Independence Day"
    },
    {
      month: "August",
      from: "15/08/2024",
      to: "15/08/2024",
      occasion: "For Independence Day"
    },
    {
      month: "August",
      from: "15/08/2024",
      to: "15/08/2024",
      occasion: "For Independence Day"
    },
    {
      month: "August",
      from: "15/08/2024",
      to: "15/08/2024",
      occasion: "For Independence Day"
    },
    {
      month: "August",
      from: "15/08/2024",
      to: "15/08/2024",
      occasion: "For Independence Day"
    },
    {
      month: "August",
      from: "15/08/2024",
      to: "15/08/2024",
      occasion: "For Independence Day"
    },
    // Add more rows as needed...
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-6 font-semibold text-center text-gray-600">Month</th>
            <th className="py-3 px-6 font-semibold text-center text-gray-600">From</th>
            <th className="py-3 px-6 font-semibold text-center text-gray-600">To</th>
            <th className="py-3 px-6 font-semibold text-center text-gray-600">Occasion</th>
            <th className="py-3 px-6 font-semibold text-left text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-6 text-gray-800">{item.month}</td>
              <td className="py-3 px-6 text-gray-800">{item.from}</td>
              <td className="py-3 px-6 text-gray-800">{item.to}</td>
              <td className="py-3 px-6 text-gray-800">{item.occasion}</td>
              <td className="py-3 px-6">
                <div className="flex space-x-2 text-center">
                  <button className="text-blue-500 hover:text-white border border-blue-500 rounded-md p-1 hover:bg-blue-500">
                    <FaPen />
                  </button>
                  <button className="text-red-500 hover:text-white border border-red-500 rounded-md p-1 hover:bg-red-500">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HolidayTable;
