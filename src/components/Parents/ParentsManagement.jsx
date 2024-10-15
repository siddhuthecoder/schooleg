import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import ParentsHeader from './ParentsHeader'; // Import ParentsHeader
import ParentTable from './ParentsTable'; // Import ParentTable

const ParentsManagement = () => {
  const [data, setData] = useState([]); // State for storing parents' data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

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
      formData.append('name', newParent.name);
      formData.append('phone', newParent.phone);
      formData.append('password', newParent.password);
      formData.append('address', JSON.stringify(newParent.address)); 
      formData.append('school_id', JSON.stringify(newParent.school_id));
      if (newParent.photo) {
        formData.append('photo', newParent.photo); // Append the photo if available
      }
  
      const response = await axios.post(`${baseURL}/parents`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      setData([...data, response.data]); // Update state with the new parent
    } catch (error) {
      console.error('Error adding parent:', error);
    }
  };
  

  // Handle Delete Action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/delete-parent/${id}`);
      // After deletion, update the state to remove the deleted item
      setData(data.filter((parent) => parent._id !== id));
    } catch (error) {
      console.error('Error deleting parent:', error);
    }
  };

  // Handle Edit Action (Add a placeholder function for now)
  const handleEdit = (id) => {
    console.log(`Editing parent with ID: ${id}`);
    // Implement edit functionality here (e.g., open a modal or navigate to an edit page)
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
    </div>
  );
};

export default ParentsManagement;
