import React from 'react';
import { FaPen, FaTrash, FaInfo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ClassTable = ({ classData }) => {
  const navigate = useNavigate();

  const handleDelete = async (classId) => {
    const confirmation = window.confirm("Are you sure you want to delete this class?");
    if (!confirmation) return;

    try {
      const response = await fetch(`https://schooleg.com/Schooleg/delete-class/${classId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the class');
      }
      window.location.reload()
    } catch (error) {
      console.error('Error deleting the class:', error);
      // Handle error (e.g., show a message to the user)
    }
  };

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
          {classData.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t cursor-pointer">
                <td className="py-2 px-3 text-[#0662C6] text-center">{item.name || 'N/A'}</td>
                <td className="py-2 px-3 text-gray-900 font-semibold text-center">{item.incharge_id || 'N/A'}</td>
                <td className="py-2 px-3 text-[#0662C6] text-center">{item.totalStudents || 'N/A'}</td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="text-[#0662C6] hover:underline">View Attendance</a>
                </td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="text-[#0662C6] hover:underline">View Lectures</a>
                </td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="text-[#0662C6] hover:underline" onClick={() => navigate(`/result/${item.name}`)}>View Results</a>
                </td>
                <td className="py-2 px-3 text-center">
                  <div className="flex justify-center space-x-2">
                    <button className="px-2 py-1 border border-blue-500 text-[#0662C6] rounded hover:bg-blue-50" onClick={() => navigate(`/homework/${item.name}`)}>Homework</button>
                    <button className="px-2 py-1 border border-blue-500 text-[#0662C6] rounded hover:bg-blue-50" onClick={() => navigate(`/time-table/${item.name}`)}>Time Table</button>
                    <button className="px-2 py-1 border border-blue-500 text-[#0662C6] rounded hover:bg-blue-50" onClick={() => navigate(`/subjects/${item.name}`)}>Subjects</button>
                  </div>
                </td>
                <td className="py-2 px-3 text-center">
                  <div className="flex justify-center space-x-2">
                    <button className="text-white hover:text-blue-700 rounded-md bg-[#0662C6] p-1" onClick={() => navigate(`/student/${item.name}`)}>
                      <FaInfo />
                    </button>
                    <button className="text-white hover:text-blue-700 rounded-md bg-[#0662C6] p-1">
                      <FaPen />
                    </button>
                    <button
                      className="text-white hover:text-red-700 rounded-md bg-red-500 p-1"
                      onClick={() => handleDelete(item._id)} // Pass the class ID here
                    >
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
