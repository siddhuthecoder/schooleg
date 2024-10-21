import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ParentsHeader from './ParentsHeader';
import ParentTable from './ParentsTable';
import AddParentModal from './AddParentModal'; // Assume the modal is reused for edit as well

const ParentsManagement = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); // For toggling edit mode
  const [editingParent, setEditingParent] = useState(null); // Store the parent being edited
  const baseURL = 'https://schooleg.com/Schooleg';

  // Fetch all parent data from the API
  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get(`${baseURL}/parents`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching parent data:', error);
        setError('Failed to load parent data. Please try again later.');
        setLoading(false);
      }
    };
    fetchParents();
  }, []);

  // Function to add a new parent
  const addParent = async (newParent) => {
    try {
      const formData = new FormData();
      formData.append('Data', JSON.stringify({
        name: newParent.name,
        phone: newParent.phone,
        password: newParent.password,
        email: newParent.email,
        address: {
          name: newParent.address.name,
          state: newParent.address.state,
          district: newParent.address.district,
          pincode: newParent.address.pincode,
        },
        school_id: newParent.school_id,
      }));

      const response = await axios.post(`${baseURL}/parents`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Parent Added Successfully");
      window.location.reload();
    } catch (error) {
      console.error('Error adding parent:', error);
    }
  };

  // Function to edit a parent
  const editParent = async (updatedParent) => {
    try {
      const formData = new FormData();
      formData.append('Data', JSON.stringify({
        name: updatedParent.name,
        phone: updatedParent.phone,
        password: updatedParent.password,
        email: updatedParent.email,
        address: {
          name: updatedParent.address.name,
          state: updatedParent.address.state,
          district: updatedParent.address.district,
          pincode: updatedParent.address.pincode,
        },
        school_id: updatedParent.school_id,
      }));

      await axios.put(`${baseURL}/update-parent/${updatedParent._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Parent Updated Successfully");
      window.location.reload();
    } catch (error) {
      console.error('Error updating parent:', error);
    }
  };

  // Handle Delete Action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/delete-parent/${id}`);
      alert("Parent Deleted Successfully");
      window.location.reload();
    } catch (error) {
      console.error('Error deleting parent:', error);
    }
  };

  // Handle Edit Action
  const handleEdit = (parent) => {
    setEditingParent(parent); // Set the current parent data for editing
    // setIsEditMode(true); // Open the modal in edit mode
  };

  const handleCloseModal = () => {
    setIsEditMode(false);
    setEditingParent(null);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-5">{error}</div>;
  }

  return (
    <div>
      <ParentsHeader totalParents={data.length} addParent={addParent} />
      <ParentTable data={data} handleEdit={handleEdit} handleDelete={handleDelete} />

      {/* Modal for Adding/Editing Parent */}
      {isEditMode && (
        <AddParentModal
          isOpen={isEditMode}
          onClose={handleCloseModal}
          onSubmit={editParent} // Submit the updated parent data
          initialData={editingParent} // Pass the data of the parent to be edited
        />
      )}
    </div>
  );
};

export default ParentsManagement;
