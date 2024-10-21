import React, { useState } from 'react';
import axios from 'axios';

const AddClassModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    incharge: '',
    lunchTimeFrom: '',
    lunchTimeTo: '',
    fee: {
      tuitionFee: '',
      examFee: '',
      bookCharge: '',
      dressCharge: '',
      idCardCharge: '',
      otherCharge: '',
    }
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Class name is required";
    if (!formData.incharge) errors.incharge = "Incharge name is required";
    if (!formData.lunchTimeFrom) errors.lunchTimeFrom = "Lunch time from is required";
    if (!formData.lunchTimeTo) errors.lunchTimeTo = "Lunch time to is required";
    if (!formData.fee.tuitionFee) errors.tuitionFee = "Tuition fee is required";
    if (!formData.fee.examFee) errors.examFee = "Exam fee is required";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('fee.')) {
      const feeField = name.split('.')[1];
      setFormData({
        ...formData,
        fee: {
          ...formData.fee,
          [feeField]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submission
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({}); // Clear errors if no issues found

    // Create Date objects for lunchTimeFrom and lunchTimeTo
    const lunchTimeFrom = new Date();
    const lunchTimeTo = new Date();

    const [fromHours, fromMinutes] = formData.lunchTimeFrom.split(':');
    const [toHours, toMinutes] = formData.lunchTimeTo.split(':');

    lunchTimeFrom.setHours(fromHours);
    lunchTimeFrom.setMinutes(fromMinutes);
    lunchTimeTo.setHours(toHours);
    lunchTimeTo.setMinutes(toMinutes);

    // Full form data object with proper structure for lunch and fee
    const fullFormData = {
      name: formData.name,
      incharge: formData.incharge,
      lunch: {
        from: lunchTimeFrom.toISOString(),
        to: lunchTimeTo.toISOString()
      },
      fee: {
        tuitionFee: formData.fee.tuitionFee,
        examFee: formData.fee.examFee,
        bookCharge: formData.fee.bookCharge,
        dressCharge: formData.fee.dressCharge,
        idCardCharge: formData.fee.idCardCharge,
        otherCharge: formData.fee.otherCharge,
      },
      school_id: '60d5ec49e65e9a001f1b1b6a',
      branch_id: '60d5ec49e65e9a001f1b1b6b',
      camera_id: '60d5ec49e65e9a001f1b1b6c',
      sim_id: '60d5ec49e65e9a001f1b1b6d',
      incharge_id: '60d5ec49e65e9a001f1b1b6e',
    };

    // Create a FormData object and append the entire object as a JSON string
    const form = new FormData();
    form.append('Data', JSON.stringify(fullFormData)); // Append the entire object as a string

    // Use axios to send the form data
    axios.post('https://schooleg.com/Schooleg/class', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(response => {
        console.log(response.data);
        
        window.location.reload();
        onClose(); // Close modal after successful submission
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-3/4 md:w-1/2 lg:w-2/5 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Class</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1 text-left">Class Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Class Name"
                className="border p-2 rounded-lg w-full"
                required
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="incharge" className="block font-medium mb-1 text-left">Incharge Name</label>
              <input
                type="text"
                name="incharge"
                value={formData.incharge}
                onChange={handleInputChange}
                placeholder="Incharge Name"
                className="border p-2 rounded-lg w-full"
                required
              />
              {errors.incharge && <p className="text-red-500">{errors.incharge}</p>}
            </div>
            <div>
              <label htmlFor="lunchTimeFrom" className="block font-medium mb-1 text-left  ">Lunch Time From</label>
              <input
                type="time"
                name="lunchTimeFrom"
                value={formData.lunchTimeFrom}
                onChange={handleInputChange}
                placeholder="Lunch Time From"
                className="border p-2 rounded-lg w-full"
                required
              />
              {errors.lunchTimeFrom && <p className="text-red-500">{errors.lunchTimeFrom}</p>}
            </div>
            <div>
              <label htmlFor="lunchTimeTo" className="block font-medium mb-1 text-left">Lunch Time To</label>
              <input
                type="time"
                name="lunchTimeTo"
                value={formData.lunchTimeTo}
                onChange={handleInputChange}
                placeholder="Lunch Time To"
                className="border p-2 rounded-lg w-full"
                required
              />
              {errors.lunchTimeTo && <p className="text-red-500">{errors.lunchTimeTo}</p>}
            </div>
          </div>

          {/* Fee Structure Section */}
          <h3 className="text-lg font-semibold mt-4">Fee Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label htmlFor="tuitionFee" className="block font-medium mb-1 text-left">Tuition Fee</label>
              <input
                type="number"
                name="fee.tuitionFee"
                value={formData.fee.tuitionFee}
                onChange={handleInputChange}
                placeholder="Tuition Fee"
                className="border p-2 rounded-lg w-full"
                required
              />
              {errors.tuitionFee && <p className="text-red-500">{errors.tuitionFee}</p>}
            </div>
            <div>
              <label htmlFor="examFee" className="block font-medium mb-1 text-left">Exam Fee</label>
              <input
                type="number"
                name="fee.examFee"
                value={formData.fee.examFee}
                onChange={handleInputChange}
                placeholder="Exam Fee"
                className="border p-2 rounded-lg w-full"
                required
              />
              {errors.examFee && <p className="text-red-500">{errors.examFee}</p>}
            </div>
            <div>
              <label htmlFor="bookCharge" className="block font-medium mb-1 text-left">Book Charge</label>
              <input
                type="number"
                name="fee.bookCharge"
                value={formData.fee.bookCharge}
                onChange={handleInputChange}
                placeholder="Book Charge"
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <label htmlFor="dressCharge" className="block font-medium mb-1 text-left  ">Dress Charge</label>
              <input
                type="number"
                name="fee.dressCharge"
                value={formData.fee.dressCharge}
                onChange={handleInputChange}
                placeholder="Dress Charge"
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <label htmlFor="idCardCharge" className="block font-medium mb-1 text-left">ID Card Charge</label>
              <input
                type="number"
                name="fee.idCardCharge"
                value={formData.fee.idCardCharge}
                onChange={handleInputChange}
                placeholder="ID Card Charge"
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <label htmlFor="otherCharge" className="block font-medium mb-1 text-left">Other Charge</label>
              <input
                type="number"
                name="fee.otherCharge"
                value={formData.fee.otherCharge}
                onChange={handleInputChange}
                placeholder="Other Charge"
                className="border p-2 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClassModal;
