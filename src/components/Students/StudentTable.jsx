import React from 'react';
import { FaPen, FaTrash, FaPaperclip, FaInfo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StudentTable = ({ data=[] }) => {
  const navigate = useNavigate();
  console.log({data})
  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this student?");
    if (!confirmation) return;

    try {
      const response = await fetch(`https://schooleg.com/Schooleg/delete-student/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the student');
      }

      window.location.reload()
    } catch (error) {
      console.error('Error deleting the student:', error);
      // Handle error (e.g., show a message to the user)
    }
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left rounded-lg font-lato">
            <th className="py-2 px-3 font-semibold text-center">Photo</th>
            <th className="py-2 px-3 font-semibold text-center">Name</th>
            <th className="py-2 px-3 font-semibold text-center">Admission No.</th>
            <th className="py-2 px-3 font-semibold text-center">Class</th>
            <th className="py-2 px-3 font-semibold text-center">Guardian Name</th>
            <th className="py-2 px-3 font-semibold text-center">DOB</th>
            <th className="py-2 px-3 font-semibold text-center">Address</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t rounded-lg">
                <td className="py-2 px-3 text-center">
                  <img src={item.Photo} alt={item.name} className="w-10 h-10 rounded-full mx-auto" />
                </td>
                <td className="py-2 px-3 text-black text-center">{item.name}</td>
                <td className="py-2 px-3 text-black text-center">
                  {item.admissionNo}
                  <div className="text-sm text-gray-500">{new Date(item.admissionDate).toLocaleDateString()}</div>
                </td>
                <td className="py-2 px-3 text-blue-500 font-semibold text-center">{item.class_id}</td>
                <td className="py-2 px-3 text-center">
                  {item.guardian || 'N/A'}
                  <div className="text-sm text-blue-500">{item.guardianContact || 'N/A'}</div>
                </td>
                <td className="py-2 px-3 text-black text-center">{new Date(item.DOB).toLocaleDateString()}</td>
                <td className="py-2 px-3 text-black text-center">
                  {`${item.address.name}, ${item.address.district}, ${item.address.state}, ${item.address.pincode}`}
                </td>
                <td className="py-2 px-3">
                  <div className="flex justify-center space-x-2">
                    <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1" onClick={() => navigate(`/studentdashboard/attendance/${item.admissionNo}`)}>
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
                      onClick={() => handleDelete(item._id)} // Pass the student's ID here
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
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

export default StudentTable;
