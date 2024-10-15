import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

import EditParentModal from './EditParentModal';

const ParentTable = ({ data, handleEdit, handleDelete }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState(null);

  // Function to handle opening the edit modal and setting the selected parent
  const openEditModal = (parent) => {
    setSelectedParent(parent);
    setEditModalOpen(true);
  };

  // Function to handle form submission from the modal
  const handleSubmitEdit = (updatedParent) => {
    // You can call the parent edit function here
    handleEdit(updatedParent); // Pass the updated parent data to the parent component
    setEditModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left font-lato">
            <th className="py-2 px-3 font-semibold text-center">Name</th>
            <th className="py-2 px-3 font-semibold text-center">Phone No.</th>
            <th className="py-2 px-3 font-semibold text-center">E-mail</th>
            <th className="py-2 px-3 font-semibold text-center">Address</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item) => (
            <React.Fragment key={item._id}>
              <tr className="border-t">
                <td className="py-2 px-3 text-black text-center">{item.name}</td>
                <td className="py-2 px-3 text-black text-center">{item.phone}</td>
                <td className="py-2 px-3 text-blue-500 text-center">
                  <a href={`mailto:${item.email}`} className="underline">
                    {item.email}
                  </a>
                </td>
                <td className="py-2 px-3 text-black text-center">
                  <div>
                    {item.address.name}, {item.address.district}, {item.address.state}, {item.address.pincode}
                  </div>
                </td>
                <td className="py-2 px-3 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1"
                      onClick={() => openEditModal(item)} // Open modal with selected parent's data
                    >
                      <FaPen />
                    </button>
                    <button
                      className="text-white hover:text-red-700 rounded-md bg-red-500 p-1"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="5" className="border-b"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Render Edit Modal */}
      {isEditModalOpen && (
        <EditParentModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)} // Close the modal
          onSubmit={handleSubmitEdit} // Pass the updated data back to the parent
          initialData={selectedParent} // Pass the selected parent data to the modal for pre-filling
        />
      )}
    </div>
  );
};

export default ParentTable;
