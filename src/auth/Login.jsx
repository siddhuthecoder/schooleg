import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { signInStart,signInSuccess,signInFailure } from '../store/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch()
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const phoneFromQuery = params.get('phone');
    if (phoneFromQuery) {
      setPhone(phoneFromQuery);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    setLoading(true);
    setError('');
    
    const role = localStorage.getItem('role');
    if (!role) {
      setError('Role is missing, please select a role first.');
      dispatch(signInFailure("User Role is not valid."));
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://schooleg.com/Schooleg/login', {
        role,
        phone,
        password
      });
      // Handle successful login (e.g., navigate to a dashboard)
      console.log('Login successful:', response.data);
      dispatch(signInSuccess(response.data));
      navigate('/class'); // Redirect to a dashboard or another page after successful login
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold  mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
          <div className='flex flex-col'>
            <label className="text-left font-semibold text-gray-700">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className='flex flex-col'>
            <label className="text-left font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
