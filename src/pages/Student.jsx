import React from 'react';
import StudentSidebar from '../components/Students/StudentSidebar';
import TopHeader from '../components/TopHeader';
import StudentHeader from '../components/Students/StudentHeader';
import StudentTable from '../components/Students/StudentTable';

const Student = () => {
  return (
    <div className="absolute p-1 m-0 left-0 top-0 w-full h-screen">
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="w-16 lg:w-1/14 h-full">
          <StudentSidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-grow lg:w-13/14 h-full">
          <div className="p-2 lg:p-2"> {/* Reduced padding to minimize gaps */}
            <TopHeader />
            <hr />
            <StudentHeader/>
            <StudentTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;