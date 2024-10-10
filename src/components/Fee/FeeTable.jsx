import React from "react";
import { FaFileInvoice, FaRegEdit, FaTrashAlt } from "react-icons/fa"; // Icons for action buttons

const FeeTable = () => {
  const fees = [
    {
      photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
      name: "Ravi Pal",
      rollNo: 21,
      class: "9th B",
      date: "15/10/2024",
      totalFee: "Rs 30,000",
      submitted: "Rs 15,000",
      pending: "Rs 15,000",
      invoice: "TX CVN8909",
    },
    {
        photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        totalFee: "Rs 30,000",
        submitted: "Rs 15,000",
        pending: "Rs 15,000",
        invoice: "TX CVN8909",
      },
      {
        photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        totalFee: "Rs 30,000",
        submitted: "Rs 15,000",
        pending: "Rs 15,000",
        invoice: "TX CVN8909",
      },
      {
        photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        totalFee: "Rs 30,000",
        submitted: "Rs 15,000",
        pending: "Rs 15,000",
        invoice: "TX CVN8909",
      },
      {
        photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        totalFee: "Rs 30,000",
        submitted: "Rs 15,000",
        pending: "Rs 15,000",
        invoice: "TX CVN8909",
      },
      {
        photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        totalFee: "Rs 30,000",
        submitted: "Rs 15,000",
        pending: "Rs 15,000",
        invoice: "TX CVN8909",
      },
      {
        photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        totalFee: "Rs 30,000",
        submitted: "Rs 15,000",
        pending: "Rs 15,000",
        invoice: "TX CVN8909",
      },
      {
        photo: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URLs
        name: "Ravi Pal",
        rollNo: 21,
        class: "9th B",
        date: "15/10/2024",
        totalFee: "Rs 30,000",
        submitted: "Rs 15,000",
        pending: "Rs 15,000",
        invoice: "TX CVN8909",
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
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Total Fee</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Submitted</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Pending</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Invoice</th>
            <th className="py-2 px-3 font-semibold text-center text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((item, index) => (
            <tr key={index} className="border-t">
              {/* Photo */}
              <td className="py-2 px-3">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </td>

              {/* Student Name and Roll Number (Inline) */}
              <td className="py-2 px-3">
                <div className="text-gray-800 font-semibold inline">{item.name}</div>
                <span className="text-gray-500 text-sm inline ml-2">
                  (Roll No: {item.rollNo})
                </span>
                <div className="text-blue-500">{`Class - ${item.class}`}</div>
              </td>

              {/* Date */}
              <td className="py-2 px-3 text-center text-gray-800">{item.date}</td>

              {/* Total Fee */}
              <td className="py-2 px-3 text-center text-blue-500 font-semibold">{item.totalFee}</td>

              {/* Submitted */}
              <td className="py-2 px-3 text-center text-green-500 font-semibold">{item.submitted}</td>

              {/* Pending */}
              <td className="py-2 px-3 text-center text-red-500 font-semibold">{item.pending}</td>

              {/* Invoice */}
              <td className="py-2 px-3 text-center text-gray-800">{item.invoice}</td>

              {/* Action */}
              <td className="py-2 px-3 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-600 rounded-md p-2">
                    <FaFileInvoice />
                  </button>
                  <button className="text-green-500 hover:bg-green-500 hover:text-white border border-green-500 rounded-md p-2">
                    <FaRegEdit />
                  </button>
                  <button className="text-red-500 hover:bg-red-500 hover:text-white border border-red-500 rounded-md p-2">
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeTable;
