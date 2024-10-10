import React from "react";
import { FaCheckCircle } from 'react-icons/fa'; // For Approve button

const ComplaintTable = () => {
  const complaints = [
    {
      photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
      name: "Ravi Pal",
      rollNo: 21,
      class: "9th B",
      date: "15/10/2024",
      complainFor: "School",
      issue: "For Long time of School assembly on Summer Days..",
      status: "Pending"
    },
    {
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Ravi Pal",
      rollNo: 21,
      class: "9th B",
      date: "15/10/2024",
      complainFor: "School",
      issue: "For Long time of School assembly on Summer Days..",
      status: "Pending"
    },
    {
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        complainFor: "School",
        issue: "For Long time of School assembly on Summer Days..",
        status: "Pending"
      },
      {
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        complainFor: "School",
        issue: "For Long time of School assembly on Summer Days..",
        status: "Pending"
      },
      {
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        complainFor: "School",
        issue: "For Long time of School assembly on Summer Days..",
        status: "Pending"
      },
      {
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        complainFor: "School",
        issue: "For Long time of School assembly on Summer Days..",
        status: "Pending"
      },
      {
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        complainFor: "School",
        issue: "For Long time of School assembly on Summer Days..",
        status: "Pending"
      },
    // Add more rows as needed...
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-3 font-semibold text-left text-gray-600">Photo</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Student Name</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Date</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Complain for</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Issue</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Status</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((item, index) => (
            <tr key={index} className="border-t">
              {/* Photo */}
              <td className="py-2 px-3">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
              </td>

              {/* Student Name */}
              <td className="py-2 px-3">
                <div className="text-gray-800 font-semibold">{item.name} <span className="text-gray-500 text-sm">(Roll No.- {item.rollNo})</span></div>
                <div className="text-blue-500">{`Class - ${item.class}`}</div>
              </td>

              {/* Date */}
              <td className="py-2 px-3 text-gray-800">{item.date}</td>

              {/* Complain For */}
              <td className="py-2 px-3 text-gray-800">{item.complainFor}</td>

              {/* Issue */}
              <td className="py-2 px-3 text-gray-800">{item.issue}</td>

              {/* Status */}
              <td className="py-2 px-3">
                <span className="text-red-500 font-semibold">{item.status}</span>
              </td>

              {/* Action */}
              <td className="py-2 px-3">
                <button className="text-green-500 hover:bg-green-500 hover:text-white border border-green-500 rounded-md px-2 py-1 text-sm">
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintTable;

