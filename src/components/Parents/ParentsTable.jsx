import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa'; // Removed FaPaperclip as it’s not needed here

const ParentTable = () => {
  const data = [
    {
      name: "Ravi Dubey",
      phone: "9636562585",
      email: "xyz@gmail.com",
      childrens: [
        { name: "Ravi Dubey", class: "9th C" },
        { name: "Lucky Dubey", class: "10th C" }
      ],
      address: "Ramgarh , Sector 50 , Gurgaon ,Haryana"
    },
    // Duplicate this structure for more rows
    {
      name: "Ravi Dubey",
      phone: "9636562585",
      email: "xyz@gmail.com",
      childrens: [
        { name: "Ravi Dubey", class: "9th C" },
        { name: "Lucky Dubey", class: "10th C" }
      ],
      address: "Ramgarh , Sector 50 , Gurgaon ,Haryana"
    },
    {
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        childrens: [
          { name: "Ravi Dubey", class: "9th C" },
          { name: "Lucky Dubey", class: "10th C" }
        ],
        address: "Ramgarh , Sector 50 , Gurgaon ,Haryana"
      },
      {
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        childrens: [
          { name: "Ravi Dubey", class: "9th C" },
          { name: "Lucky Dubey", class: "10th C" }
        ],
        address: "Ramgarh , Sector 50 , Gurgaon ,Haryana"
      },
      {
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        childrens: [
          { name: "Ravi Dubey", class: "9th C" },
          { name: "Lucky Dubey", class: "10th C" }
        ],
        address: "Ramgarh , Sector 50 , Gurgaon ,Haryana"
      },
      {
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        childrens: [
          { name: "Ravi Dubey", class: "9th C" },
          { name: "Lucky Dubey", class: "10th C" }
        ],
        address: "Ramgarh , Sector 50 , Gurgaon ,Haryana"
      },
    // Add more data as needed...
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left font-lato">
            <th className="py-2 px-3 font-semibold text-center">Name</th>
            <th className="py-2 px-3 font-semibold text-center">Phone No.</th>
            <th className="py-2 px-3 font-semibold text-center">E-mail</th>
            <th className="py-2 px-3 font-semibold text-center">Childrens</th>
            <th className="py-2 px-3 font-semibold text-center">Address</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t">
                <td className="py-2 px-3 text-black text-center">{item.name}</td>
                <td className="py-2 px-3 text-black text-center">{item.phone}</td>
                <td className="py-2 px-3 text-blue-500 text-center">
                  <a href={`mailto:${item.email}`} className="underline">
                    {item.email}
                  </a>
                </td>
                <td className="py-2 px-3 text-center">
                  {item.childrens.map((child, idx) => (
                    <div key={idx} className="text-black">
                      {child.name}, <span className="text-blue-500">{child.class}</span>
                    </div>
                  ))}
                </td>
                <td className="py-2 px-3 text-black text-center">{item.address}</td>
                <td className="py-2 px-3 text-center">
                  <div className="flex justify-center space-x-2">
                    <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1">
                      <FaPen />
                    </button>
                    <button className="text-white hover:text-red-700 rounded-md bg-red-500 p-1">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="border-b"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParentTable;
