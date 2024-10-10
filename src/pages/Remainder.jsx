import React from 'react';
import RemainderSidebar from '../components/Remainders/RemainderSidebar';
import TopHeader from '../components/TopHeader';
import RemainderHeader from '../components/Remainders/RemainderHeader';
import RemainderTable from '../components/Remainders/RemainderTable';

const Reminder = () => {
  return (
    <div className="absolute p-1 m-0 left-0 top-0 w-full h-screen">
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="w-16 lg:w-1/14 h-full">
          <RemainderSidebar/>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow lg:w-13/14 h-full">
          <div className="p-2 lg:p-2"> {/* Reduced padding to minimize gaps */}
            <TopHeader />
            <hr />
            <RemainderHeader/>
            <RemainderTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminder;