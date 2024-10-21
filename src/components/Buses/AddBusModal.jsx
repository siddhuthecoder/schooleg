import React, { useState } from 'react';

const AddBusModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    busNo: '',
    gpsImbi: '',
    gpsSim: '',
    expiry: '',
    helper: '',
    driver: '',
    cameraImbi: '',
    cameraSim: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with your form submission logic
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-3/4 md:w-1/2 lg:w-2/5 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Bus</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="busNo"
              value={formData.busNo}
              onChange={handleInputChange}
              placeholder="Bus No"
              className="border p-2 rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="gpsImbi"
              value={formData.gpsImbi}
              onChange={handleInputChange}
              placeholder="GPS IMBI"
              className="border p-2 rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="gpsSim"
              value={formData.gpsSim}
              onChange={handleInputChange}
              placeholder="GPS SIM"
              className="border p-2 rounded-lg w-full"
              required
            />
            <input
              type="date"
              name="expiry"
              value={formData.expiry}
              onChange={handleInputChange}
              placeholder="Expiry Date"
              className="border p-2 rounded-lg w-full"
              required
            />
            <select
              name="helper"
              value={formData.helper}
              onChange={handleInputChange}
              className="border p-2 rounded-lg w-full"
              required
            >
              <option value="">Select Helper</option>
              {/* Add actual helper options here */}
              <option value="Helper 1">Helper 1</option>
              <option value="Helper 2">Helper 2</option>
            </select>
            <select
              name="driver"
              value={formData.driver}
              onChange={handleInputChange}
              className="border p-2 rounded-lg w-full"
              required
            >
              <option value="">Select Driver</option>
              {/* Add actual driver options here */}
              <option value="Driver 1">Driver 1</option>
              <option value="Driver 2">Driver 2</option>
            </select>
            <input
              type="text"
              name="cameraImbi"
              value={formData.cameraImbi}
              onChange={handleInputChange}
              placeholder="Camera IMBI"
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="text"
              name="cameraSim"
              value={formData.cameraSim}
              onChange={handleInputChange}
              placeholder="Camera SIM"
              className="border p-2 rounded-lg w-full"
            />
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBusModal;
