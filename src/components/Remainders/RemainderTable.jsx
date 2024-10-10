import React from 'react';
import { FaPen, FaTrash , FaPaperclip } from 'react-icons/fa'; // Removed FaClipboard


const RemainderTable = () => {
  const data = [
    {
      date: "14/09/2024", 
      className: "11th-c", 
      subject: "Chemistry",
      teacher: "Tarun Shukla", 
      student: "Ravi Pal",
      remainder: "Regarding Fee Due.."
    },
    {
        date: "14/09/2024", 
        className: "11th-c", 
        subject: "Chemistry",
        teacher: "Tarun Shukla", 
        student: "Ravi Pal",
        remainder: "Regarding Fee Due.."
      },
      {
        date: "14/09/2024", 
        className: "11th-c", 
        subject: "Chemistry",
        teacher: "Tarun Shukla", 
        student: "Ravi Pal",
        remainder: "Regarding Fee Due.."
      },
      {
        date: "14/09/2024", 
        className: "11th-c", 
        subject: "Chemistry",
        teacher: "Tarun Shukla", 
        student: "Ravi Pal",
        remainder: "Regarding Fee Due.."
      },
      {
        date: "14/09/2024", 
        className: "11th-c", 
        subject: "Chemistry",
        teacher: "Tarun Shukla", 
        student: "Ravi Pal",
        remainder: "Regarding Fee Due.."
      },
      {
        date: "14/09/2024", 
        className: "11th-c", 
        subject: "Chemistry",
        teacher: "Tarun Shukla", 
        student: "Ravi Pal",
        remainder: "Regarding Fee Due.."
      },
      {
        date: "14/09/2024", 
        className: "11th-c", 
        subject: "Chemistry",
        teacher: "Tarun Shukla", 
        student: "Ravi Pal",
        remainder: "Regarding Fee Due.."
      },
      {
        date: "14/09/2024", 
        className: "11th-c", 
        subject: "Chemistry",
        teacher: "Tarun Shukla", 
        student: "Ravi Pal",
        remainder: "Regarding Fee Due.."
      },
    
    // Add more data if needed...
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left rounded-lg font-lato">
            <th className="py-2 px-3 font-semibold text-center">Date</th>
            <th className="py-2 px-3 font-semibold text-center">Class</th>
            <th className="py-2 px-3 font-semibold text-center">Subject</th>
            <th className="py-2 px-3 font-semibold text-center">Teacher</th>
            <th className="py-2 px-3 font-semibold text-center">Student</th>
            <th className="py-2 font-semibold text-center px-[-10px]">Reminder</th>
            <th className="py-2 px-3 font-semibold ml-10">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t rounded-lg">
                <td className="py-2 px-3 text-black">{item.date}</td>
                <td className="py-2 px-3 text-blue-500 font-semibold">{item.className}</td>
                <td className="py-2 px-3 text-black">{item.subject}</td>
                <td className="py-2 px-3 text-black">{item.teacher}</td>
                <td className="py-2 px-3 text-blue-500">{item.student}</td>
                <td className="py-2 px-3 text-black">{item.remainder}</td>
                <td className="py-2 px-3">
                  <div className="flex space-x-2 ">
                  <button className="text-white hover:text-blue-700 rounded-md bg-blue-500 p-1">
                  <FaPaperclip/>
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
                <td colSpan="7" className="border-b"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RemainderTable;