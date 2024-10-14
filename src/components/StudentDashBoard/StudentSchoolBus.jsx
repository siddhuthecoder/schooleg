import React from 'react';
import { useParams } from 'react-router-dom';

const StudentSchoolBus = () => {
  const {admission} = useParams()
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          Student Name / <span className="font-normal">Student Information</span>
        </h1>
        <div className="flex space-x-8 text-gray-600">
          <a href={`/studentdashboard/attendance/${admission}`} className="hover:text-blue-600">Attendance</a>
          <a href={`/studentdashboard/progress/${admission}`} className="hover:text-blue-600">Progress</a>
          <a href={`/studentdashboard/feesHistory/${admission}`} className="hover:text-blue-600">Fees History</a>
          <a href={`/studentdashboard/bus/${admission}`} className="text-blue-600 border-b-2 border-blue-600">School Bus</a>
          
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Left Section: Profile Card */}
        <div className="col-span-1 border p-6 rounded-lg shadow-md text-center">
          <div className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold">
              Ravi Pal <button className="text-blue-600">✏️</button>
            </h2>
            <p className="text-sm text-gray-500"># Admission No 20EE23</p>
          </div>
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div>
              <p className="font-bold">Gender</p>
              <p>Female</p>
            </div>
            <div>
              <p className="font-bold">Class</p>
              <p>09th</p>
            </div>
            <div>
              <p className="font-bold">Class Roll No.</p>
              <p>93</p>
            </div>
            <div>
              <p className="font-bold">Date of Birth</p>
              <p>25/08/2003</p>
            </div>
            <div className="col-span-2">
              <p className="font-bold text-left ml-8">Address</p>
              <p className='text-left ml-8'>ITBP Park Chauhan Calony, Sector 144, Gurgaon</p>
            </div>
            <div>
              <p className="font-bold">Father</p>
              <p>Rahul Pal</p>
            </div>
            <div>
              <p className="font-bold">Mother</p>
              <p>Sneha Pal</p>
            </div>
            <div>
              <p className="font-bold">Contact No.</p>
              <p>8956231235</p>
            </div>
            <div>
              <p className="font-bold">Contact No.</p>
              <p>8956231235</p>
            </div>
            <div className="col-span-2">
              <p className="font-bold text-left ml-8">School Bus Stoppage</p>
              <p className='text-left ml-8'>Street 4, Chauhan Calony</p>
              <p className='text-left ml-8'>Bus No: HRCXY7687 | Route-09</p>
            </div>
          </div>
        </div>

        {/* Right Section: Progress Tabs, Chart, and Table */}
        <div className="col-span-3">
          {/* Progress Tabs */}
          <div className="flex space-x-10 text-gray-600 mb-4">
            <button className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-blue-600 bg-blue-100 ml-10">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 focus:outline-none hover:text-blue-600">
              Maths
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 focus:outline-none hover:text-blue-600">
              English
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 focus:outline-none hover:text-blue-600">
              Chemistry
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 focus:outline-none hover:text-blue-600">
              History
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 focus:outline-none hover:text-blue-600">
              Geography
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 focus:outline-none hover:text-blue-600">
              Biology
            </button>
          </div>

          {/* Progress Graph */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-blue-600">77%</div>
              <img src="/Screenshot 2024-10-09 174903.png" alt="Progress Graph" className="w-full" />
            </div>
          </div>

          {/* Test Results Table */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Test Results</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-center">
                    <th className="p-2">Test Name</th>
                    <th className="p-2">Subject</th>
                    <th className="p-2">On</th>
                    <th className="p-2">Scored</th>
                    <th className="p-2">Rank</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(8).fill(0).map((_, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2">Social Studies Test</td>
                      <td className="p-2 text-blue-600">Social Studies</td>
                      <td className="p-2">25 Aug 24</td>
                      <td className="p-2">88%</td>
                      <td className="p-2">12th</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSchoolBus;


