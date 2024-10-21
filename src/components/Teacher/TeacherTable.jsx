import React from 'react';
import { FaPen, FaTrash, FaPaperclip, FaInfo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TeacherTable = ({ teachers }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this teacher?");
    if (!confirmation) return;

    try {
      const response = await fetch(`https://schooleg.com/Schooleg/delete-teacher/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the teacher');
      }
     window.location.reload()
    } catch (error) {
      console.error('Error deleting the teacher:', error);
      // Handle error (e.g., show a message to the user)
    }
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left font-lato">
            <th className="py-2 px-3 font-semibold text-center">Photo</th>
            <th className="py-2 px-3 font-semibold text-center">Name</th>
            <th className="py-2 px-3 font-semibold text-center">Phone No.</th>
            <th className="py-2 px-3 font-semibold text-center">E-mail</th>
            <th className="py-2 px-3 font-semibold text-center">Salary</th>
            <th className="py-2 px-3 font-semibold text-center">Designation</th>
            <th className="py-2 px-3 font-semibold text-center">Address</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {teachers?.length > 0 ? (
            teachers.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="py-2 px-3 text-center">
                  <img src={item.photo} alt={item.name} className="w-10 h-10 rounded-full mx-auto" />
                </td>
                <td className="py-2 px-3 text-black text-center">{item.name}</td>
                <td className="py-2 px-3 text-black text-center">{item.phone}</td>
                <td className="py-2 px-3 text-blue-500 text-center">
                  <a href={`mailto:${item.mail}`} className="underline">
                    {item.mail}
                  </a>
                </td>
                <td className="py-2 px-3 text-black text-center">{item.salary || "N/A"}</td>
                <td className="py-2 px-3 text-black text-center">{item.designation || "N/A"}</td>
                <td className="py-2 px-3 text-black text-center">
                  {`${item.address.name}, ${item.address.district}, ${item.address.state}`}
                </td>
                <td className="py-2 px-3 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1"
                      onClick={() => navigate(`/teacherdashboard/${item.name}`)}
                    >
                      <FaInfo />
                    </button>
                    <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1">
                      <FaPaperclip />
                    </button>
                    <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1">
                      <FaPen />
                    </button>
                    <button
                      className="text-white hover:text-red-700 rounded-md bg-red-500 p-1"
                      onClick={() => handleDelete(item._id)} // Pass the teacher's ID here
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
