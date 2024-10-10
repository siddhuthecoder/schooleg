import React from "react";

const LeaveTable = () => {
  const leaveData = [
    {
      photo: "/Ellipse 112 (8).png", // Replace with actual photo URLs
      teacherName: "Ravi Singh",
      duration: "14/08/2024 - 18/08/2024",
      leaveType: "Full Day",
      reason: "For Suffering From Cold..",
      status: "Pending",
    },
    {
      photo: "/Ellipse 112 (7).png",
      teacherName: "Ravi Singh",
      duration: "14/08/2024 - 18/08/2024",
      leaveType: "Full Day",
      reason: "For Suffering From Cold..",
      status: "Pending",
    },
    {
      photo: "/Ellipse 112 (6).png",
      teacherName: "Ravi Singh",
      duration: "14/08/2024 - 18/08/2024",
      leaveType: "Full Day",
      reason: "For Suffering From Cold..",
      status: "Pending",
    },
    {
        photo: "/Ellipse 112 (6).png",
        teacherName: "Ravi Singh",
        duration: "14/08/2024 - 18/08/2024",
        leaveType: "Full Day",
        reason: "For Suffering From Cold..",
        status: "Pending",
      },
      {
        photo: "/Ellipse 112 (6).png",
        teacherName: "Ravi Singh",
        duration: "14/08/2024 - 18/08/2024",
        leaveType: "Full Day",
        reason: "For Suffering From Cold..",
        status: "Pending",
      },
      {
        photo: "/Ellipse 112 (6).png",
        teacherName: "Ravi Singh",
        duration: "14/08/2024 - 18/08/2024",
        leaveType: "Full Day",
        reason: "For Suffering From Cold..",
        status: "Pending",
      },
    // Add more rows as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-3 text-sm font-semibold text-gray-600 text-center">Photo</th>
            <th className="py-2 px-3 text-sm font-semibold text-gray-600 text-center">Teacher Name</th>
            <th className="py-2 px-3 text-sm font-semibold text-gray-600 text-center">Duration</th>
            <th className="py-2 px-3 text-sm font-semibold text-gray-600 text-center">Leave Type</th>
            <th className="py-2 px-3 text-sm font-semibold text-gray-600 text-center">Reason</th>
            <th className="py-2 px-3 text-sm font-semibold text-gray-600 text-center">Status</th>
            <th className="py-2 px-3 text-sm font-semibold text-gray-600 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-3 text-center">
                <img src={item.photo} alt={item.teacherName} className="w-10 h-10 rounded-full mx-auto" />
              </td>
              <td className="py-3 px-3 text-center text-gray-800">{item.teacherName}</td>
              <td className="py-3 px-3 text-center text-gray-800">{item.duration}</td>
              <td className="py-3 px-3 text-center text-gray-800">{item.leaveType}</td>
              <td className="py-3 px-3 text-center text-gray-800">{item.reason}</td>
              <td className="py-3 px-3 text-center text-red-600">{item.status}</td>
              <td className="py-3 px-3 text-center">
                <button className="text-sm font-semibold text-green-500 border border-green-500 rounded-md px-4 py-1 hover:bg-green-500 hover:text-white transition-colors">
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

export default LeaveTable;
