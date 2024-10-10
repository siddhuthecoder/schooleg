import React from 'react';
import { FaPen, FaTrash, FaPaperclip } from 'react-icons/fa';

const CircularTable = () => {
  const data = [
    {
      date: "14/09/24",
      circularFor: "Teacher",
      circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
    },
    {
      date: "14/09/24",
      circularFor: "Student",
      circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
    },
    {
      date: "14/09/24",
      circularFor: "Student",
      circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
    },
    {
        date: "14/09/24",
        circularFor: "Student",
        circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
      },
      {
        date: "14/09/24",
        circularFor: "Student",
        circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
      },
      {
        date: "14/09/24",
        circularFor: "Student",
        circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
      },
      {
        date: "14/09/24",
        circularFor: "Student",
        circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
      },
      {
        date: "14/09/24",
        circularFor: "Student",
        circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
      },
      {
        date: "14/09/24",
        circularFor: "Student",
        circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
      },
      {
        date: "14/09/24",
        circularFor: "Student",
        circular: "Regarding Tomorrow holiday i.e 14 Aug 2024 for heavy Rain.",
      },
    // Add more rows as necessary...
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left rounded-lg font-lato">
            <th className="py-2 px-3 font-semibold text-center">Date</th>
            <th className="py-2 px-6 font-semibold text-center">Circular for</th>
            <th className="py-2 px-3 font-semibold text-center">Circular</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t rounded-lg">
                <td className="py-2 px-3 text-black text-center">{item.date}</td>
                <td className="py-2 px-6 text-blue-500 font-semibold text-center">{item.circularFor}</td>
                <td className="py-2 px-3 text-black text-center">{item.circular}</td>
                <td className="py-2 px-3">
                  <div className="flex justify-center space-x-2">
                    <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1">
                      <FaPaperclip />
                    </button>
                    <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1">
                      <FaPen />
                    </button>
                    <button className="text-white hover:text-red-700 rounded-md bg-red-500 p-1">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="border-b"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CircularTable;
