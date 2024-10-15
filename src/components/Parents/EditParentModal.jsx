import React, { useState, useEffect } from 'react';

const EditParentModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [parentData, setParentData] = useState({
    name: '',
    phone: '',
    email: '',
    address: { name: '', state: '', district: '', pincode: '' },
  });

  // Populate form fields with the selected parent’s data when editing
  useEffect(() => {
    if (initialData) {
      setParentData({ ...initialData });
    }
  }, [initialData]);

  // Handle input changes for the parent form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address')) {
      const addressField = name.split('.')[1];
      setParentData({
        ...parentData,
        address: { ...parentData.address, [addressField]: value },
      });
    } else {
      setParentData({ ...parentData, [name]: value });
    }
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(parentData); // Submit updated parent data
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl mb-4">Edit Parent Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={parentData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone:</label>
            <input
              type="text"
              name="phone"
              value={parentData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={parentData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address Name:</label>
            <input
              type="text"
              name="address.name"
              value={parentData.address.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">District:</label>
            <input
              type="text"
              name="address.district"
              value={parentData.address.district}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">State:</label>
            <input
              type="text"
              name="address.state"
              value={parentData.address.state}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Pincode:</label>
            <input
              type="text"
              name="address.pincode"
              value={parentData.address.pincode}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 border border-gray-300 px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditParentModal;
