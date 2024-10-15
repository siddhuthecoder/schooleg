import React from 'react';
import ParentsSidebar from '../components/Parents/ParentsSidebar';
import TopHeader from '../components/TopHeader';
import ParentsHeader from '../components/Parents/ParentsHeader';
import ParentTable from '../components/Parents/ParentsTable';
import ParentsManagement from '../components/Parents/ParentsManagement';

const Parents = () => {
  return (
    <div className="absolute p-1 m-0 left-0 top-0 w-full h-screen">
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="w-16 lg:w-1/14 h-full">
         <ParentsSidebar/>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow lg:w-13/14 h-full">
          <div className="p-2 lg:p-2"> {/* Reduced padding to minimize gaps */}
            <TopHeader />
            <hr />
            <ParentsManagement/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Parents;