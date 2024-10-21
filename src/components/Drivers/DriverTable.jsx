import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const DriverTable = ({ drivers }) => {
  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this driver?");
    if (!confirmation) return;

    try {
      const response = await fetch(`https://schooleg.com/Schooleg/delete-driver/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the driver');
      }

      window.location.reload() // Callback to update the UI after deletion
    } catch (error) {
      console.error('Error deleting the driver:', error);
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
            <th className="py-2 px-3 font-semibold text-center">Licence No.</th>
            <th className="py-2 px-3 font-semibold text-center">Salary</th>
            <th className="py-2 px-3 font-semibold text-center">Address</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {drivers.map((driver, index) => (
            <React.Fragment key={index}>
              <tr className="border-t rounded-lg">
                <td className="py-2 px-3 text-black">{driver.name}</td>
                <td className="py-2 px-3 text-black">{driver.phone}</td>
                <td className="py-2 px-3 text-blue-500">{/* Route handling if needed */}</td>
                <td className="py-2 px-3 text-blue-500">{driver.licenseNo}</td>
                <td className="py-2 px-3 text-black">Rs {driver.salary}</td>
                <td className="py-2 px-3 text-black">{driver.address}</td>
                <td className="py-2 px-3">
                  <div className="flex space-x-2 justify-center">
                    <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1">
                      <FaPen />
                    </button>
                    <button
                      className="text-white hover:text-red-700 rounded-md bg-red-500 p-1"
                      onClick={() => handleDelete(driver._id)} // Pass the driver's ID here
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

export default DriverTable;
