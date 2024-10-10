import React from 'react';
import { FaPen, FaTrash, FaPaperclip } from 'react-icons/fa';

const ResultTable = () => {
  const data = [
    {
      className: "11th-C",
      examType: "Unit Test [Maths]",
      date: "14/08/2024",
      studentName: "Ravi Dubey",
      score: "90/100",
      position: "1st",
      status: "Pass",
      remarks: "N/A"
    },
    {
      className: "11th-C",
      examType: "Unit Test [Maths]",
      date: "14/08/2024",
      studentName: "Ravi Dubey",
      score: "90/100",
      position: "1st",
      status: "Pass",
      remarks: "N/A"
    },
    {
        className: "11th-C",
        examType: "Unit Test [Maths]",
        date: "14/08/2024",
        studentName: "Ravi Dubey",
        score: "90/100",
        position: "1st",
        status: "Pass",
        remarks: "N/A"
      },
      {
        className: "11th-C",
        examType: "Unit Test [Maths]",
        date: "14/08/2024",
        studentName: "Ravi Dubey",
        score: "90/100",
        position: "1st",
        status: "Pass",
        remarks: "N/A"
      },
      {
        className: "11th-C",
        examType: "Unit Test [Maths]",
        date: "14/08/2024",
        studentName: "Ravi Dubey",
        score: "90/100",
        position: "1st",
        status: "Pass",
        remarks: "N/A"
      },
      {
        className: "11th-C",
        examType: "Unit Test [Maths]",
        date: "14/08/2024",
        studentName: "Ravi Dubey",
        score: "90/100",
        position: "1st",
        status: "Pass",
        remarks: "N/A"
      },
      {
        className: "11th-C",
        examType: "Unit Test [Maths]",
        date: "14/08/2024",
        studentName: "Ravi Dubey",
        score: "90/100",
        position: "1st",
        status: "Pass",
        remarks: "N/A"
      },
    // Add more rows as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left rounded-lg font-lato">
            <th className="py-2 px-3 font-semibold text-center">Class Name</th>
            <th className="py-2 px-3 font-semibold text-center">Exam Type</th>
            <th className="py-2 px-3 font-semibold text-center">Student Name</th>
            <th className="py-2 px-3 font-semibold text-center">Score</th>
            <th className="py-2 px-3 font-semibold text-center">Position</th>
            <th className="py-2 px-3 font-semibold text-center">Status</th>
            <th className="py-2 px-3 font-semibold text-center">Remarks</th>
            <th className="py-2 px-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-lato">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t rounded-lg">
                <td className="py-2 px-3 text-blue-500 font-semibold text-center">{item.className}</td>
                <td className="py-2 px-3 text-black text-center">
                  {item.examType}
                  <div className="text-sm text-gray-500">{item.date}</div>
                </td>
                <td className="py-2 px-3 text-black text-center">{item.studentName}</td>
                <td className="py-2 px-3 text-blue-500 font-semibold text-center">{item.score}</td>
                <td className="py-2 px-3 text-blue-500 font-semibold text-center">{item.position}</td>
                <td className="py-2 px-3 text-green-500 text-center">{item.status}</td>
                <td className="py-2 px-3 text-black text-center">{item.remarks}</td>
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

export default ResultTable;
