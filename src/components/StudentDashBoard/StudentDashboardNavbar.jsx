import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // User icon

const StudentDashboardNavbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white py-4 px-8 shadow-md">
      {/* School Name */}
      <div className="text-2xl font-bold text-black">
        School Name
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-gray-500">
        <a href="/" className="hover:text-black">My School</a>
        <a href="#" className="text-blue-600 border-b-2 border-blue-600">Dashboard</a>
        <a href="/Bus" className="hover:text-black">Buses</a>
        <a href="#" className="hover:text-black">Routes</a>
        <a href="#" className="hover:text-black">Reports</a>
        <a href="/Banner" className="hover:text-black">Banner</a>
        <a href="#" className="hover:text-black">Bills</a>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-2 text-blue-600">
        <FaUserCircle size={24} />
        <span>User Name</span>
      </div>
    </nav>
  );
};

export default StudentDashboardNavbar;
