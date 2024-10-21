import React, { useState, useEffect } from 'react';

const AddHelperModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    aadharNo: '',
    salary: '',
    address: {
      name: '',
      state: '',
      district: '',
      pincode: ''
    }
  });

  const [states, setStates] = useState([]); // State to hold states
  const [districts, setDistricts] = useState([]); // State to hold districts
  const [selectedState, setSelectedState] = useState(''); // State to track selected state

  // Fetch states from API when the modal opens
  useEffect(() => {
    if (isOpen) {
      const fetchStates = async () => {
        try {
          const response = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states');
          const data = await response.json();
          if (response.ok && data.states) {
            setStates(data.states); // Store the states from the API response
          }
        } catch (error) {
          console.error('Failed to fetch states:', error);
        }
      };
      fetchStates();
    }
  }, [isOpen]);

  // Fetch districts based on selected state
  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedState) {
        try {
          const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedState}`);
          const data = await response.json();
          if (response.ok && data.districts) {
            setDistricts(data.districts); // Store the districts from the API response
          }
        } catch (error) {
          console.error('Failed to fetch districts:', error);
        }
      } else {
        setDistricts([]); // Clear districts if no state is selected
      }
    };
    fetchDistricts();
  }, [selectedState]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleStateChange = (e) => {
    const stateValue = e.target.value;
    setSelectedState(stateValue); // Update selected state
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        state: stateValue,
        district: '' // Reset district when state changes
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      school_id: '60d5ec49e65e9a001f1b1b6a',
      branch_id: '60d5ec49e65e9a001f1b1b6c',
      name: formData.name,
      phone: formData.phone,
      address: `${formData.address.name}, ${formData.address.district}, ${formData.address.state}, ${formData.address.pincode}`,
      aadharNo: formData.aadharNo,
      salary: formData.salary
    };

    const formDataToSend = new FormData();
    formDataToSend.append('Data', JSON.stringify(dataToSend));

    try {
      const response = await fetch('https://schooleg.com/Schooleg/helper', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result); // Handle the response as needed

      // Optionally reset the form data
      setFormData({
        name: '',
        phone: '',
        aadharNo: '',
        salary: '',
        address: {
          name: '',
          state: '',
          district: '',
          pincode: ''
        }
      });

      onClose(); // Close the modal after submission
      window.location.reload();
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Handle the error (e.g., show a message to the user)
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-3/4 md:w-1/2 lg:w-2/5 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Helper</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1 text-left">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-medium mb-1 text-left">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="aadharNo" className="block font-medium mb-1 text-left">Aadhar No</label>
              <input
                type="text"
                name="aadharNo"
                value={formData.aadharNo}
                onChange={handleInputChange}
                placeholder="Aadhar No"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="salary" className="block font-medium mb-1 text-left">Salary</label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="Salary"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
          </div>

          {/* Address Section */}
          <h3 className="text-lg font-semibold mt-4">Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label htmlFor="address.name" className="block font-medium mb-1 text-left ">Address Name</label>
              <input
                type="text"
                name="address.name"
                value={formData.address.name}
                onChange={handleInputChange}
                placeholder="Address Name"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="address.state" className="block font-medium mb-1 text-left  ">State</label>
              <select
                name="address.state"
                value={formData.address.state}
                onChange={handleStateChange}
                className="border p-2 rounded-lg w-full"
                required
              >
                <option value="" disabled>Select State</option>
                {states.map((state) => (
                  <option key={state.state_id} value={state.state_id}>
                    {state.state_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="address.district" className="block font-medium mb-1 text-left ">District</label>
              <select
                name="address.district"
                value={formData.address.district}
                onChange={handleInputChange}
                className="border p-2 rounded-lg w-full"
                required
                disabled={!selectedState} // Disable if no state is selected
              >
                <option value="" disabled>Select District</option>
                {districts.map((district) => (
                  <option key={district.district_id} value={district.district_name}>
                    {district.district_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="address.pincode" className="block font-medium mb-1 text-left ">Pincode</label>
              <input
                type="text"
                name="address.pincode"
                value={formData.address.pincode}
                onChange={handleInputChange}
                placeholder="Pincode"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
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

export default AddHelperModal;

