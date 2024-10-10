import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const ErequestTable = () => {
  const data = [
    {
      date: '14/08/24',
      requestedFor: 'Books',
      quantity: 200,
      description: 'Requested for some more History books..',
      provided: 'Yes',
    },
    {
      date: '14/08/24',
      requestedFor: 'Books',
      quantity: 200,
      description: 'Requested for some more History books..',
      provided: 'Yes',
    },
    {
      date: '14/08/24',
      requestedFor: 'Books',
      quantity: 200,
      description: 'Requested for some more History books..',
      provided: 'Yes',
    },
    {
      date: '14/08/24',
      requestedFor: 'Books',
      quantity: 200,
      description: 'Requested for some more History books..',
      provided: 'Yes',
    },
    {
      date: '14/08/24',
      requestedFor: 'Books',
      quantity: 200,
      description: 'Requested for some more History books..',
      provided: 'Yes',
    },
    {
      date: '14/08/24',
      requestedFor: 'Books',
      quantity: 200,
      description: 'Requested for some more History books..',
      provided: 'Yes',
    },
    {
      date: '14/08/24',
      requestedFor: 'Books',
      quantity: 200,
      description: 'Requested for some more History books..',
      provided: 'Yes',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-3 font-semibold text-center">Date</th>
            <th className="py-2 px-3 font-semibold text-center">Requested For</th>
            <th className="py-2 px-3 font-semibold text-center">Quantity</th>
            <th className="py-2 px-3 font-semibold text-center">Description</th>
            <th className="py-2 px-3 font-semibold text-center">Provided</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-3 text-center">{item.date}</td>
              <td className="py-2 px-3 text-center">{item.requestedFor}</td>
              <td className="py-2 px-3 text-center text-blue-500">{item.quantity}</td>
              <td className="py-2 px-3 text-center">{item.description}</td>
              <td className="py-2 px-3 text-center">{item.provided}</td>
              <td className="py-2 px-3 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="text-white bg-blue-500 p-2 rounded-md hover:bg-blue-700">
                    <FaPen />
                  </button>
                  <button className="text-white bg-red-500 p-2 rounded-md hover:bg-red-700">
                    <FaTrash />
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

export default ErequestTable;
