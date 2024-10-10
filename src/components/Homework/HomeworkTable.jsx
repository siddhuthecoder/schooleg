import React from 'react';
import { FaPen, FaTrash, FaPaperclip } from 'react-icons/fa';

const HomeworkTable = () => {
  const data = [
    {
      date: "14/08/24",
      subject: "Maths",
      teacher: "Ravi Dubey",
      period: "8th",
      student: "All",
      homework: "Biodiversity of Animal Kingdom.."
    },
    // Add more entries based on the screenshot data
    {
      date: "14/08/24",
      subject: "Maths",
      teacher: "Ravi Dubey",
      period: "8th",
      student: "All",
      homework: "Biodiversity of Animal Kingdom.."
    },
    // You can duplicate or add more objects like these to match the screenshot rows
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left rounded-lg font-lato">
            <th className="py-2 px-3 font-semibold text-center">Date</th>
            <th className="py-2 px-3 font-semibold text-center">Subject</th>
            <th className="py-2 px-3 font-semibold text-center">Teacher</th>
            <th className="py-2 px-3 font-semibold text-center">Period</th>
            <th className="py-2 px-3 font-semibold text-center">Student</th>
            <th className="py-2 px-3 font-semibold text-center">Homework</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t rounded-lg">
                <td className="py-2 px-3 text-center">{item.date}</td>
                <td className="py-2 px-3 text-center">{item.subject}</td>
                <td className="py-2 px-3 text-center">{item.teacher}</td>
                <td className="py-2 px-3 text-center">{item.period}</td>
                <td className="py-2 px-3 text-blue-500 font-semibold text-center">{item.student}</td>
                <td className="py-2 px-3 text-black text-center">{item.homework}</td>
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
                <td colSpan="7" className="border-b"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeworkTable;
