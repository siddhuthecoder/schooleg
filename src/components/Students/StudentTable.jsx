import React from 'react';
import { FaPen, FaTrash, FaPaperclip } from 'react-icons/fa';

const StudentTable = () => {
  const data = [
    {
      photo: "/Ellipse 112.png", // Replace with actual photo URLs
      name: "Ravi Dubey",
      admissionNo: "20EE093",
      className: "9th-C",
      guardian: "Mr Manish Dubey",
      guardianContact: "9852365896",
      dob: "25/08/2024",
      address: "Ramgarh, Sector 50, Gurgaon, Haryana",
      dobFull: "05/02/2008"
    },
    {
        photo: "/Ellipse 112 (1).png", // Replace with actual photo URLs
        name: "Ravi Dubey",
        admissionNo: "20EE093",
        className: "9th-C",
        guardian: "Mr Manish Dubey",
        guardianContact: "9852365896",
        dob: "25/08/2024",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
        dobFull: "05/02/2008"
      },
      {
        photo: "/Ellipse 112 (2).png", // Replace with actual photo URLs
        name: "Ravi Dubey",
        admissionNo: "20EE093",
        className: "9th-C",
        guardian: "Mr Manish Dubey",
        guardianContact: "9852365896",
        dob: "25/08/2024",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
        dobFull: "05/02/2008"
      },
      {
        photo: "/Ellipse 112 (3).png", // Replace with actual photo URLs
        name: "Ravi Dubey",
        admissionNo: "20EE093",
        className: "9th-C",
        guardian: "Mr Manish Dubey",
        guardianContact: "9852365896",
        dob: "25/08/2024",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
        dobFull: "05/02/2008"
      },
      {
        photo: "/Ellipse 112 (4).png", // Replace with actual photo URLs
        name: "Ravi Dubey",
        admissionNo: "20EE093",
        className: "9th-C",
        guardian: "Mr Manish Dubey",
        guardianContact: "9852365896",
        dob: "25/08/2024",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
        dobFull: "05/02/2008"
      },
      {
        photo: "/Ellipse 112 (5).png", // Replace with actual photo URLs
        name: "Ravi Dubey",
        admissionNo: "20EE093",
        className: "9th-C",
        guardian: "Mr Manish Dubey",
        guardianContact: "9852365896",
        dob: "25/08/2024",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
        dobFull: "05/02/2008"
      },
      {
        photo: "/Ellipse 112 (6).png", // Replace with actual photo URLs
        name: "Ravi Dubey",
        admissionNo: "20EE093",
        className: "9th-C",
        guardian: "Mr Manish Dubey",
        guardianContact: "9852365896",
        dob: "25/08/2024",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
        dobFull: "05/02/2008"
      },
    // Duplicate objects to simulate the image
    // Add more data if needed...
  ];


  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left rounded-lg font-lato">
            <th className="py-2 px-3 font-semibold text-center">Photo</th>
            <th className="py-2 px-3 font-semibold text-center">Name</th>
            <th className="py-2 px-3 font-semibold text-center">Admission No.</th>
            <th className="py-2 px-3 font-semibold text-center">Class</th>
            <th className="py-2 px-3 font-semibold text-center">Guardian Name</th>
            <th className="py-2 px-3 font-semibold text-center">DOB</th>
            <th className="py-2 px-3 font-semibold text-center">Address</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t rounded-lg">
                <td className="py-2 px-3 text-center">
                  <img src={item.photo} alt={item.name} className="w-10 h-10 rounded-full mx-auto" />
                </td>
                <td className="py-2 px-3 text-black text-center">
                  {item.name}
                  <div className="text-sm text-gray-500">{item.dobFull}</div>
                </td>
                <td className="py-2 px-3 text-black text-center">{item.admissionNo}</td>
                <td className="py-2 px-3 text-blue-500 font-semibold text-center">{item.className}</td>
                <td className="py-2 px-3 text-center">
                  {item.guardian}
                  <div className="text-sm text-blue-500">{item.guardianContact}</div>
                </td>
                <td className="py-2 px-3 text-black text-center">{item.dob}</td>
                <td className="py-2 px-3 text-black text-center">{item.address}</td>
                <td className="py-2 px-3">
                  <div className="flex justify-center space-x-2">
                    <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1">
                      <FaPaperclip />
                    </button>
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
                <td colSpan="8" className="border-b"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
