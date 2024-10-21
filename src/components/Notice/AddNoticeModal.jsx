import React, { useState } from 'react';
import Modal from 'react-modal';

const AddNoticeModal = ({ isOpen, onClose, onAddNotice }) => {
  const [formData, setFormData] = useState({
    notice: '',
    allClass: false,
    date: '',
    class_id: '',
    period_id: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Static data
    const staticData = {
      school_id: "60d21b4667d0d8992e610c87",
      branch_id: "60d21b4667d0d8992e610c88",
      student_id: ["60d21b4667d0d8992e610c89", "60d21b4667d0d8992e610c8a"],
      photo: ["https://s3-bucket-url/photo1.jpg", "https://s3-bucket-url/photo2.jpg"],
    };

    // Combine formData with static data
    const noticeData = { ...formData, ...staticData };

    try {
      const response = await fetch('https://schooleg.com/Schooleg/notice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noticeData),
      });

      if (response.ok) {
        const newNotice = await response.json();
        onAddNotice(newNotice); // Call the parent handler to add notice to the list
        onClose(); // Close the modal on success
      } else {
        console.error('Failed to create notice');
      }
    } catch (error) {
      console.error('Error creating notice:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Add Notice">
      <h2 className="text-xl font-bold mb-4">Add New Notice</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Notice</label>
          <textarea
            name="notice"
            value={formData.notice}
            onChange={handleChange}
            className="border p-2 w-full"
            placeholder="Enter notice details"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">All Class</label>
          <input
            type="checkbox"
            name="allClass"
            checked={formData.allClass}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Class ID</label>
          <input
            type="text"
            name="class_id"
            value={formData.class_id}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Period ID</label>
          <input
            type="text"
            name="period_id"
            value={formData.period_id}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
      <button onClick={onClose} className="mt-4 text-gray-600">Close</button>
    </Modal>
  );
};

export default AddNoticeModal;
