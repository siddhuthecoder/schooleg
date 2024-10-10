import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Phone = () => {
  const [phone, setPhone] = useState('');
  const [roles, setRoles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://schooleg.com/Schooleg/check-phone-status', { phone });
      setRoles(response.data.existsIn);
      setShowModal(true);
      setLoading(false);
    } catch (error) {
      console.error('Error checking phone status:', error);
      setLoading(false);
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    localStorage.setItem('role', role);
    setShowModal(false);
    navigate(`/login?phone=${phone}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Enter Phone Number</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? 'Checking...' : 'Submit'}
          </button>
        </form>

        {/* Modal for role selection */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-xl font-semibold mb-4">Select Your Role</h3>
              <ul className="space-y-2">
                {roles.map((role, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleRoleSelect(role)}
                      className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
                    >
                      {role}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 mt-4 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Phone;
