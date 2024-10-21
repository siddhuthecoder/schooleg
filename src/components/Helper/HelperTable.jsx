import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const HelperTable = ({ helpers }) => {
  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this helper?");
    if (!confirmation) return;

    try {
      const response = await fetch(`https://schooleg.com/Schooleg/delete-helper/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the helper');
      }
     window.location.reload()
      
    } catch (error) {
      console.error('Error deleting the helper:', error);
      // Handle error (e.g., show a message to the user)
    }
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left rounded-lg font-lato">
            <th className="py-2 px-3 font-semibold text-center">Name</th>
            <th className="py-2 px-3 font-semibold text-center">Phone No.</th>
            <th className="py-2 px-3 font-semibold text-center">Route</th>
            <th className="py-2 px-3 font-semibold text-center">Aadhar No.</th>
            <th className="py-2 px-3 font-semibold text-center">Salary</th>
            <th className="py-2 px-3 font-semibold text-center">Address</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {helpers?.map((helper, index) => (
            <React.Fragment key={index}>
              <tr className="border-t rounded-lg">
                <td className="py-2 px-3 text-black">{helper.name}</td>
                <td className="py-2 px-3 text-black">{helper.phone}</td>
                <td className="py-2 px-3 text-blue-500">
                  {helper?.route?.map((route, i) => (
                    <div key={i}>
                      {route}
                      {i === 0 && <br />} {/* Adds a break between Route 1 and Route 2 */}
                    </div>
                  ))}
                </td>
                <td className="py-2 px-3 text-blue-500">{helper.aadharNo}</td>
                <td className="py-2 px-3 text-black">Rs {helper.salary}</td>
                <td className="py-2 px-3 text-black">{helper.address}</td>
                <td className="py-2 px-3">
                  <div className="flex space-x-2 justify-center">
                    <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1">
                      <FaPen />
                    </button>
                    <button
                      className="text-white hover:text-red-700 rounded-md bg-red-500 p-1"
                      onClick={() => handleDelete(helper._id)} // Pass the helper's ID here
                    >
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

export default HelperTable;
