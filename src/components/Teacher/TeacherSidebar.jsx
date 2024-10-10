import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaUserFriends, FaTruck, FaUserAlt, FaUmbrellaBeach, FaBullhorn, FaBell, FaExclamationCircle } from "react-icons/fa"; // Import your icons
import { MdOutlineClass } from "react-icons/md";
import { GrUserPolice } from "react-icons/gr";
import { BsFillHouseDoorFill } from "react-icons/bs";
const TeacherSidebar = () => {
  return (
    <div className="h-screen w-16 bg-gray-100 flex flex-col items-center py-4 space-y-4">
      {/* User Image */}
      <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
        {/* Placeholder for user image */}
      </div>
      <hr />

      {/* Navigation Icons */}
      <div className="flex-grow space-y-2">
        <a href="/student" className="hover:text-blue-500"><IconButton icon={<FaUserGraduate />} /></a>
        <a href="/" className="hover:text-blue-500"><IconButton icon={<MdOutlineClass />} /></a>
        <a href="/teacher" className="text-blue-500"><IconButton icon={<FaChalkboardTeacher />} /></a>
        <a href="/parent" className="hover:text-blue-500"><IconButton icon={<FaUserFriends />} /></a>
        <a href="/driver" className="hover:text-blue-500"><IconButton icon={<GrUserPolice />} /></a>
        <a href="/helper" className="hover:text-blue-500"><IconButton icon={<FaUserAlt />} /></a>
        <a href="/holidays" className="hover:text-blue-500"><IconButton icon={<BsFillHouseDoorFill/>} /></a>
        <a href="/announcements" className="hover:text-blue-500"><IconButton icon={<FaBullhorn />} /></a>
        <a href="/reminder" className="hover:text-blue-500"><IconButton icon={<FaBell />} /></a>
        <a href="/notice" className="hover:text-blue-500"><IconButton icon={<FaExclamationCircle />} /></a>
      </div>

      {/* Logout Icon */}
      <div className="mt-auto mb-2">
        <div className="text-red-600">
        <img src="/material-symbols_logout.png" alt="Logout" className="h-8 w-8" /> {/* Logout icon */}
        </div>
      </div>
    </div>
  );
};

// IconButton component for rendering the icons
const IconButton = ({ icon }) => {
  return (
    <div className="h-8 w-8 flex items-center justify-center">
      {icon}
    </div>
  );
};

export default TeacherSidebar;
