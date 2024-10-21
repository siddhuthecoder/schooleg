import React from 'react';
import { FaPen, FaTrash, FaPaperclip } from 'react-icons/fa';

const RemainderTable = ({ reminders }) => {
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left rounded-lg font-lato">
            <th className="py-2 px-3 font-semibold text-center">Date</th>
            <th className="py-2 px-3 font-semibold text-center">Class</th>
            <th className="py-2 px-3 font-semibold text-center">Notice</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {reminders.length > 0 ? (
            reminders.map((reminder, index) => (
              <React.Fragment key={index}>
                <tr className="border-t rounded-lg">
                  <td className="py-2 px-3 text-black">
                    {reminder.date
                      ? new Date(reminder.date).toLocaleDateString()
                      : 'N/A'}
                  </td>
                  <td className="py-2 px-3 text-blue-500 font-semibold">
                    {reminder.class_id || 'N/A'}
                  </td>
                  <td className="py-2 px-3 text-black">
                    {reminder.notice || 'N/A'}
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex space-x-2">
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
                  <td colSpan="4" className="border-b"></td>
                </tr>
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-2 px-3 text-center text-gray-500">
                No reminders available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RemainderTable;
