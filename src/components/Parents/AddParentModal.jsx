import React, { useState, useEffect } from 'react';

const AddParentModal = ({ isOpen, onClose, onSubmit }) => {
  const [newParent, setNewParent] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    address: { name: '', state: '', district: '', pincode: '' },
    school_id: ['66c7031c1ffa12d6e8b79171'],
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address')) {
      const addressField = name.split('.')[1];
      setNewParent({ ...newParent, address: { ...newParent.address, [addressField]: value } });
    } else {
      setNewParent({ ...newParent, [name]: value });
    }
  };

  const handleStateChange = (e) => {
    const stateValue = e.target.value;
    setSelectedState(stateValue); // Update selected state
    setNewParent({
      ...newParent,
      address: {
        ...newParent.address,
        state: stateValue,
        district: '' // Reset district when state changes
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newParent);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg transform transition-all ease-out duration-300 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add New Parent</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={newParent.name} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out" 
              placeholder="Enter full name" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
            <input 
              type="text" 
              name="phone" 
              value={newParent.phone} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out" 
              placeholder="Enter phone number" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              value={newParent.email} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out" 
              placeholder="Enter email" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              value={newParent.password} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out" 
              placeholder="Enter password" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Address Name</label>
            <input 
              type="text" 
              name="address.name" 
              value={newParent.address.name} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out" 
              placeholder="Enter address name" 
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">State</label>
              <select 
                name="address.state"
                value={newParent.address.state}
                onChange={handleStateChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out" 
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
              <label className="block text-gray-700 text-sm font-medium mb-2">District</label>
              <select 
                name="address.district"
                value={newParent.address.district}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out"
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
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Pincode</label>
            <input 
              type="text" 
              name="address.pincode" 
              value={newParent.address.pincode} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out" 
              placeholder="Enter pincode" 
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button 
              type="button" 
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-400 transition duration-150 ease-in-out" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-600 transition duration-150 ease-in-out"
            >
              Add Parent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddParentModal;
