import React from 'react';
import StudentDashboardSidebar from '../../components/StudentDashBoard/StudentDashboardSidebar';
import StudentDashboardNavbar from '../../components/StudentDashBoard/StudentDashboardNavbar';
import StudentFeeHistory from '../../components/StudentDashBoard/StudentFeeHistory';

const StudentFeesHistoryPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 lg:w-1/14 bg-white z-10">
        <StudentDashboardSidebar />
      </div>

      {/* Main Content Area */}
      <div className="ml-16 lg:ml-1/14 flex-grow h-screen flex flex-col">
        {/* Navbar */}
        <div className="fixed top-0 left-16 lg:left-1/14 right-0 z-10 bg-white">
          <StudentDashboardNavbar />
          <hr />
        </div>

        {/* Scrollable content */}
        <div className="mt-16 lg:mt-20 p-2 lg:p-4 h-[calc(100vh-4rem)] overflow-y-auto">
          <StudentFeeHistory />
        </div>
      </div>
    </div>
  );
};

export default StudentFeesHistoryPage;
