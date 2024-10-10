import React from 'react';

const TeacherTimeTable = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          Teacher Name / <span className="font-normal">Teacher Information</span>
        </h1>
        <div className="flex space-x-8 text-gray-600">
          <a href="/teachertimetable" className="text-blue-600 border-b-2 border-blue-600">Time Table</a>
          <a href="/teacherdashboard" className="hover:text-blue-600">Attendance</a>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Left Section: Profile Card */}
        <div className="col-span-1 border p-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-4">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Teacher"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-center">
              Tarun Shukla <button className="text-blue-600">✏️</button>
            </h2>
            <p className="text-sm text-gray-500 text-center"># Teacher ID 20FF23</p>
          </div>
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div>
              <p className="font-bold">Gender</p>
              <p>Male</p>
            </div>
            <div>
              <p className="font-bold">Designation</p>
              <p>PRT</p>
            </div>
            <div>
              <p className="font-bold">Contact No.</p>
              <p>8956231235</p>
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p>XYZ@gmail.com</p>
            </div>
            <div className="col-span-2">
              <p className="font-bold text-left ml-8">Address</p>
              <p className="text-left ml-8">ITBP Park Chauhan Calony, Sector 144,</p>
              <p className="text-left ml-8">Gurgaon</p>
            </div>
            <div>
              <p className="font-bold text-left ml-8">Salary</p>
              <p className="text-left ml-8">Rs 30,000</p>
            </div>
            <div className="col-span-2">
              <p className="font-bold text-left ml-8">School Bus Stoppage</p>
              <p className="text-left ml-8">Street 4, Chauhan Calony</p>
              <p className="text-left ml-8">Bus No: HRCXY7687 | Route-09</p>
            </div>
          </div>
        </div>

        {/* Right Section: Time Table */}
        <div className="col-span-3">
          {/* Time Table */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-center border-b">
                    <th className="p-2">Time</th>
                    <th className="p-2">Monday</th>
                    <th className="p-2">Tuesday</th>
                    <th className="p-2">Wednesday</th>
                    <th className="p-2">Thursday</th>
                    <th className="p-2">Friday</th>
                    <th className="p-2">Saturday</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-t">
                    <td className="p-2">08:00 - 8:30</td>
                    <td className="p-2">1 A <br /> English</td>
                    <td className="p-2">2 A <br /> English</td>
                    <td className="p-2">2 A <br /> English</td>
                    <td className="p-2">1 A <br /> English</td>
                    <td className="p-2">2 A <br /> English</td>
                    <td className="p-2">2 A <br /> English</td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="border-t">
                    <td className="p-2">8:30 - 9:00</td>
                    <td className="p-2">2 B <br /> Social</td>
                    <td className="p-2">1 B <br /> Social</td>
                    <td className="p-2">1 B <br /> Social</td>
                    <td className="p-2">2 B <br /> Social</td>
                    <td className="p-2">1 B <br /> Social</td>
                    <td className="p-2">1 B <br /> Social</td>
                  </tr>
                  {/* Row 3: Recess */}
                  <tr className="border-t bg-gray-100">
                    <td className="p-2">9:00 - 9:15</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    
                  </tr>
                  {/* Row 4 */}
                  <tr className="border-t">
                    <td className="p-2">9:15 - 9:45</td>
                    <td className="p-2">2 A <br /> Social</td>
                    <td className="p-2">1 A <br /> English</td>
                    <td className="p-2">111 A <br /> Social</td>
                    <td className="p-2">2 A <br /> Social</td>
                    <td className="p-2">1 A <br /> Social</td>
                    <td className="p-2">111 A <br /> Social</td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="border-t">
                    <td className="p-2">9:45 - 10:15</td>
                    <td className="p-2">1 B <br /> English</td>
                    <td className="p-2">2 B <br /> English</td>
                    <td className="p-2">2 B <br /> English</td>
                    <td className="p-2">1 B <br /> English</td>
                    <td className="p-2">2 B <br /> English</td>
                    <td className="p-2">2 B <br /> English</td>
                  </tr>
                  {/* Row 6: Recess */}
                  <tr className="border-t bg-gray-100">
                    <td className="p-2">10:15 - 10:45</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                    <td className="p-2">Recess<br /> 15 mins</td>
                   
                  </tr>
                  {/* Row 7 */}
                  <tr className="border-t">
                    <td className="p-2">10:45 - 11:15</td>
                    <td className="p-2">2 A <br /> English</td>
                    <td className="p-2">2 A <br /> English</td>
                    <td className="p-2">2 A <br /> English</td>
                    <td className="p-2">2 A <br /> English</td>
                    <td className="p-2">2 A <br /> English</td>
                    <td className="p-2">2 A <br /> English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherTimeTable;

