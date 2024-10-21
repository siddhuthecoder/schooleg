import React, { useState, useEffect } from 'react';
import AddStudentModal from './AddStudentModal';
import StudentTable from './StudentTable'; // Import the student table component

const StudentHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Fetch students from the API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://schooleg.com/Schooleg/students');
        const data = await response.json();
        setStudents(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        {/* Notice Details Card */}
        <div className="flex border border-gray-300 rounded-lg p-0 text-sm">
          <div className="flex items-center px-3 py-2 bg-blue-50 text-blue-700 border-gray-300 rounded-md">
            Total Notice <span className="ml-2 font-bold">50</span>
          </div>
          <div className="flex items-center px-3 py-2 text-green-600">
            Present <span className="ml-2 font-bold">15</span>
          </div>
          <div className="flex items-center px-3 py-2 text-red-600 border-gray-300">
            Absent <span className="ml-2 font-bold">15</span>
          </div>
          <div className="flex items-center px-3 py-2 text-yellow-600">
            On Leave <span className="ml-2 font-bold">15</span>
          </div>
        </div>

        {/* Search and Date Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="p-2 outline-none"
            />
          </div>
          <select className="border border-gray-300 rounded-lg p-2">
            <option>14/08/24</option>
          </select>

          {/* Add Students Button */}
          <button
            onClick={handleModalOpen}
            className="bg-blue-600 text-white rounded-lg flex items-center px-4 py-2"
          >
            Add Students
          </button>
        </div>
      </div>

      {/* Add Student Modal */}
      {isModalOpen && <AddStudentModal isOpen={isModalOpen} onClose={handleModalClose} />}

      {/* Student Table */}
      <StudentTable data={students} />
    </div>
  );
};

export default StudentHeader;
