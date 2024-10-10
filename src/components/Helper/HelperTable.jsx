import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const HelperTable = () => {
  const data = [
    {
      name: "Ravi Dubey",
      phone: "9636652585",
      route: ["Route1 (HR45VBN78)", "Route2 (HR45VEN78)"], // Route separated into an array
      license: "HR78HUJTH",
      salary: "Rs 30,000",
      address: "Ramgarh, Sector 50, Gurgaon, Haryana"
    },
    {
        name: "Ravi Dubey",
        phone: "9636652585",
        route: ["Route1 (HR45VBN78)", "Route2 (HR45VEN78)"], // Route separated into an array
        license: "HR78HUJTH",
        salary: "Rs 30,000",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana"
      },
      {
        name: "Ravi Dubey",
        phone: "9636652585",
        route: ["Route1 (HR45VBN78)", "Route2 (HR45VEN78)"], // Route separated into an array
        license: "HR78HUJTH",
        salary: "Rs 30,000",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana"
      },
      {
        name: "Ravi Dubey",
        phone: "9636652585",
        route: ["Route1 (HR45VBN78)", "Route2 (HR45VEN78)"], // Route separated into an array
        license: "HR78HUJTH",
        salary: "Rs 30,000",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana"
      },
      {
        name: "Ravi Dubey",
        phone: "9636652585",
        route: ["Route1 (HR45VBN78)", "Route2 (HR45VEN78)"], // Route separated into an array
        license: "HR78HUJTH",
        salary: "Rs 30,000",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana"
      },
      {
        name: "Ravi Dubey",
        phone: "9636652585",
        route: ["Route1 (HR45VBN78)", "Route2 (HR45VEN78)"], // Route separated into an array
        license: "HR78HUJTH",
        salary: "Rs 30,000",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana"
      },
      {
        name: "Ravi Dubey",
        phone: "9636652585",
        route: ["Route1 (HR45VBN78)", "Route2 (HR45VEN78)"], // Route separated into an array
        license: "HR78HUJTH",
        salary: "Rs 30,000",
        address: "Ramgarh, Sector 50, Gurgaon, Haryana"
      },
    // Add more data as necessary...
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left rounded-lg font-lato">
            <th className="py-2 px-3 font-semibold text-center">Name</th>
            <th className="py-2 px-3 font-semibold text-center">Phone No.</th>
            <th className="py-2 px-3 font-semibold text-center">Route</th>
            <th className="py-2 px-3 font-semibold text-center">Aadhar No.</th>
            <th className="py-2 px-3 font-semibold text-center">Salary</th>
            <th className="py-2 px-3 font-semibold text-center">Address</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t rounded-lg">
                <td className="py-2 px-3 text-black">{item.name}</td>
                <td className="py-2 px-3 text-black">{item.phone}</td>
                <td className="py-2 px-3 text-blue-500">
                  {item.route.map((route, i) => (
                    <div key={i}>
                      {route}
                      {i === 0 && <br />} {/* Adds a break between Route 1 and Route 2 */}
                    </div>
                  ))}
                </td>
                <td className="py-2 px-3 text-blue-500">{item.license}</td>
                <td className="py-2 px-3 text-black">{item.salary}</td>
                <td className="py-2 px-3 text-black">{item.address}</td>
                <td className="py-2 px-3">
                  <div className="flex space-x-2 justify-center">
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
                <td colSpan="7" className="border-b"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HelperTable;
