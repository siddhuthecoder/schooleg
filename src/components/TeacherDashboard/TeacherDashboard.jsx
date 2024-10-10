


import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TeacherAttendance = () => {
  // Data for the attendance line chart
  const attendanceData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'], // Months
    datasets: [
      {
        label: 'Attendance Percentage',
        data: [85, 90, 95, 88, 92, 89, 87, 93, 94, 88, 90, 92], // Example attendance percentages
        borderColor: '#3b82f6', // Tailwind's blue-600 for the line
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)'); // Light blue (near the line)
          gradient.addColorStop(1, '#eff6ff'); // Light blue-50 at the bottom
          return gradient;
        },
        fill: true, // Fill the area under the line
        tension: 0.4, // Smooth the line
        pointBackgroundColor: '#3b82f6',
        pointRadius: 5,
      },
    ],
  };

  const attendanceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}%`; // Adds "%" to the tooltip
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%'; // Show "%" on Y-axis ticks
          },
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          Teacher Name / <span className="font-normal">Teacher Information</span>
        </h1>
        <div className="flex space-x-8 text-gray-600">
        <a href="/teachertimetable" className="hover:text-blue-500">Time Table</a>
        <a href="/teacherdashboard" className="text-blue-600 border-b-2 border-blue-600">Attendance</a>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Left Section: Profile Card */}
        <div className="col-span-1 border p-6 rounded-lg shadow-md">
          {/* Profile details */}
          <div className="flex flex-col items-center mb-4"> {/* Centering the profile image and name */}
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Teacher"
              className="w-24 h-24 rounded-full mb-2" // Added mb-2 for spacing below the image
            />
            <h2 className="text-xl font-bold text-center"> {/* Center the text */}
              Tarun Shukla <button className="text-blue-600">✏️</button>
            </h2>
            <p className="text-sm text-gray-500 text-center"># Teacher ID 20FF23</p> {/* Center the text */}
          </div>
          {/* Profile Information */}
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div>
              <p className="font-bold">Gender</p>
              <p>Male</p>
            </div>
            <div>
              <p className="font-bold">Designation</p>
              <p>PRT</p>
            </div>
            <div>
              <p className="font-bold">Contact No.</p>
              <p>8956231235</p>
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p>XYZ@gmail.com</p>
            </div>
            <div className="col-span-2">
              <p className="font-bold text-left ml-8">Address</p>
              <p className='text-left ml-8'>ITBP Park Chauhan Calony, Sector 144, </p>
              <p className='text-left ml-8'>Gurgaon</p>
            </div>
            <div>
              <p className="font-bold text-left ml-8">Salary</p>
              <p className='text-left ml-8'>Rs 30,000</p>
            </div>
            <div className="col-span-2">
              <p className="font-bold text-left ml-8">School Bus Stoppage</p>
              <p className='text-left ml-8'>Street 4, Chauhan Calony</p>
              <p className='text-left ml-8 '>Bus No: HRCXY7687 | Route-09</p>
            </div>
          </div>
        </div>

        {/* Right Section: Attendance */}
        <div className="col-span-3">
          {/* Attendance Graph */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>Total Attendance</p>
                <h2 className="text-2xl font-bold">225/250 days</h2>
              </div>
              <div className="text-right">
                <p>Average Attendance</p>
                <h2 className="text-2xl font-bold">89%</h2>
              </div>
              <div className="flex items-center">
                <select className="border rounded-lg p-2 bg-gray-100">
                  <option>Last Year</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>

            {/* Line Chart */}
            <div className="relative h-64 bg-blue-50"> {/* Light blue background */}
              <Line data={attendanceData} options={attendanceOptions} />
            </div>
          </div>

          {/* Attendance Table */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-2">Student ID</th>
                    <th className="p-2">Apr</th>
                    <th className="p-2">May</th>
                    <th className="p-2">Jun</th>
                    <th className="p-2">Jul</th>
                    <th className="p-2">Aug</th>
                    <th className="p-2">Sep</th>
                    <th className="p-2">Oct</th>
                    <th className="p-2">Nov</th>
                    <th className="p-2">Dec</th>
                    <th className="p-2">Jan</th>
                    <th className="p-2">Feb</th>
                    <th className="p-2">Mar</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7].map((row) => (
                    <tr key={row} className="border-t">
                      <td className="p-2">{row}</td>
                      {['✔️', '❌', '✔️', '✔️', '✔️', '❌', '✔️', '❌', '✔️', '✔️', '✔️', '❌'].map(
                        (symbol, idx) => (
                          <td key={idx} className="p-2 text-center">{symbol}</td>
                        )
                      )}
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

export default TeacherAttendance;
