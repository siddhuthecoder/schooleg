import React from 'react';
import { FaPen, FaTrash, FaPaperclip } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const TeacherTable = () => {
  const {teacher} = useParams
  const navigate = useNavigate()
  const data = [
    {
      photo: "/Ellipse 112 (3).png", // Replace with actual photo URLs
      name: "Ravi Dubey",
      phone: "9636562585",
      email: "xyz@gmail.com",
      salary: "Rs 50,000",
      designation: "PRT",
      address: "Ramgarh, Sector 50, Gurgaon, Haryana",
    },
    {
      photo: "/Ellipse 112 (1).png", 
      name: "Ravi Dubey",
      phone: "9636562585",
      email: "xyz@gmail.com",
      salary: "Rs 50,000",
      designation: "PRT",
      address: "Ramgarh, Sector 50, Gurgaon, Haryana",
    },
    {
        photo: "/Ellipse 112 (1).png", 
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        salary: "Rs 50,000",
        designation: "PRT",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
      },
      {
        photo: "/Ellipse 112 (8).png", 
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        salary: "Rs 50,000",
        designation: "PRT",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
      },
      {
        photo: "/Ellipse 112 (7).png", 
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        salary: "Rs 50,000",
        designation: "PRT",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
      },
      {
        photo: "/Ellipse 112 (2).png", 
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        salary: "Rs 50,000",
        designation: "PRT",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
      },
      {
        photo: "/Ellipse 112 (3).png", 
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        salary: "Rs 50,000",
        designation: "PRT",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
      },
      {
        photo: "/Ellipse 112 (4).png", 
        name: "Ravi Dubey",
        phone: "9636562585",
        email: "xyz@gmail.com",
        salary: "Rs 50,000",
        designation: "PRT",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana",
      },
    // Add more data as needed to simulate the full table
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left font-lato">
            <th className="py-2 px-3 font-semibold text-center">Photo</th>
            <th className="py-2 px-3 font-semibold text-center">Name</th>
            <th className="py-2 px-3 font-semibold text-center">Phone No.</th>
            <th className="py-2 px-3 font-semibold text-center">E-mail</th>
            <th className="py-2 px-3 font-semibold text-center">Salary</th>
            <th className="py-2 px-3 font-semibold text-center">Designation</th>
            <th className="py-2 px-3 font-semibold text-center">Address</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t">
                <td className="py-2 px-3 text-center">
                  <img src={item.photo} alt={item.name} className="w-10 h-10 rounded-full mx-auto" />
                </td>
                <td className="py-2 px-3 text-black text-center">{item.name}</td>
                <td className="py-2 px-3 text-black text-center">{item.phone}</td>
                <td className="py-2 px-3 text-blue-500 text-center">
                  <a href={`mailto:${item.email}`} className="underline">
                    {item.email}
                  </a>
                </td>
                <td className="py-2 px-3 text-black text-center">{item.salary}</td>
                <td className="py-2 px-3 text-black text-center">{item.designation}</td>
                <td className="py-2 px-3 text-black text-center">{item.address}</td>
                <td className="py-2 px-3 text-center">
                  <div className="flex justify-center space-x-2">
                  <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1" onClick={() => navigate(`/teacherdashboard/${item.name}`)}>
                      <FaInfo />
                    </button>
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

export default TeacherTable;
