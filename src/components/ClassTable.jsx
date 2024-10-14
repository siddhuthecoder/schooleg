import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaInfo } from "react-icons/fa";


const ClassTable = () => {
  const navigate = useNavigate()
  const data = [
    {
      className: '11th-c',
      incharge: 'Ravi Singh',
      totalStudents: 80,
    },
    // Repeat the data for testing purposes
    {
      className: '11th-c',
      incharge: 'Ravi Singh',
      totalStudents: 80,
    },
    {
      className: '11th-c',
      incharge: 'Ravi Singh',
      totalStudents: 80,
    },
    {
      className: '11th-c',
      incharge: 'Ravi Singh',
      totalStudents: 80,
    },
    {
      className: '11th-c',
      incharge: 'Ravi Singh',
      totalStudents: 80,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left font-lato">
            <th className="py-2 px-3 font-semibold text-center">Class Name</th>
            <th className="py-2 px-3 font-semibold text-center">Incharge</th>
            <th className="py-2 px-3 font-semibold text-center">Total Students</th>
            <th className="py-2 px-3 font-semibold text-center">Attendance</th>
            <th className="py-2 px-3 font-semibold text-center">Lectures</th>
            <th className="py-2 px-3 font-semibold text-center">Results</th>
            <th className="py-2 px-3 font-semibold text-center">Essentials</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t cursor-pointer" >
                <td className="py-2 px-3 text-[#0662C6] text-center">{item.className}</td>
                <td className="py-2 px-3 text-gray-900 font-semibold text-center">{item.incharge}</td>
                <td className="py-2 px-3 text-[#0662C6] text-center">{item.totalStudents}</td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="text-[#0662C6] hover:underline">View Attendance</a>
                </td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="text-[#0662C6] hover:underline">View Lectures</a>
                </td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="text-[#0662C6] hover:underline" onClick={() => navigate(`/result/${item.className}`)}>View Results</a>
                </td>
                <td className="py-2 px-3 text-center">
                  <div className="flex justify-center space-x-2">
                    <button className="px-2 py-1 border border-blue-500 text-[#0662C6] rounded hover:bg-blue-50" onClick={() => navigate(`/homework/${item.className}`)} >Homework</button>
                    <button className="px-2 py-1 border border-blue-500 text-[#0662C6] rounded hover:bg-blue-50" onClick={() => navigate(`/time-table/${item.className}`)}>Time Table</button>
                    <button className="px-2 py-1 border border-blue-500 text-[#0662C6] rounded hover:bg-blue-50" onClick={() => navigate(`/subjects/${item.className}`)}>Subjects</button>
                  </div>
                </td>
                <td className="py-2 px-3 text-center">
                  <div className="flex justify-center space-x-2">
                  <button className="text-white hover:text-blue-700 rounded-md bg-[#0662C6] p-1" onClick={() => navigate(`/student/${item.className}`)}>
                      <FaInfo />
                    </button>
                    <button className="text-white hover:text-blue-700 rounded-md bg-[#0662C6] p-1">
                      <FaPen />
                    </button>
                    <button className="text-white hover:text-red-700 rounded-md bg-red-500 p-1">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Divider between rows */}
              <tr>
                <td colSpan="8" className="border-b"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassTable;


