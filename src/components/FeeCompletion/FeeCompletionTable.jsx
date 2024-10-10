import React from "react";

const FeeCompletionTable = () => {
  const fees = [
    {
      photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
      name: "Ravi Pal",
      rollNo: 93,
      class: "Class - 9th B",
      date: "15/10/2024",
      totalDue: "Rs 30,000",
      months: "Sept., Oct., Nov., Dec.",
      status: "Pending",
    },
    ...Array(7).fill({
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Ravi Pal",
      rollNo: 93,
      class: "Class - 9th B",
      date: "15/10/2024",
      totalDue: "N/A",
      months: "N/A",
      status: "Received",
    }),
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Photo</th>
            <th className="py-2 px-4 border-b text-center text-sm font-semibold text-gray-600">Student Name</th>
            <th className="py-2 px-4 border-b text-center text-sm font-semibold text-gray-600">Class</th>
            <th className="py-2 px-4 border-b text-center text-sm font-semibold text-gray-600">Roll No.</th>
            <th className="py-2 px-4 border-b text-center text-sm font-semibold text-gray-600">Date</th>
            <th className="py-2 px-4 border-b text-center text-sm font-semibold text-gray-600">Total Due</th>
            <th className="py-2 px-4 border-b text-center text-sm font-semibold text-gray-600">Months</th>
            <th className="py-2 px-4 border-b text-center text-sm font-semibold text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((row, index) => (
            <tr key={index} className="bg-white">
              {/* Photo */}
              <td className="py-2 px-4 border-b">
                <img
                  className="w-10 h-10 rounded-full"
                  src={row.photo}
                  alt={row.name}
                />
              </td>

              {/* Student Name */}
              <td className="py-2 px-4 border-b text-gray-800 text-sm">{row.name}</td>

              {/* Class */}
              <td className="py-2 px-4 border-b text-blue-500 text-sm">{row.class}</td>

              {/* Roll No. */}
              <td className="py-2 px-4 border-b text-gray-700 text-sm">{row.rollNo}</td>

              {/* Date */}
              <td className="py-2 px-4 border-b text-gray-700 text-sm">{row.date}</td>

              {/* Total Due */}
              <td className="py-2 px-4 border-b text-blue-500 text-sm">{row.totalDue}</td>

              {/* Months */}
              <td className="py-2 px-4 border-b text-gray-700 text-sm">{row.months}</td>

              {/* Status */}
              <td className="py-2 px-4 border-b">
                <span
                  className={`text-sm font-medium ${
                    row.status === "Pending" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeCompletionTable;
