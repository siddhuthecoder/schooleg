import React from 'react';
import DriverSidebar from '../components/Drivers/DriverSidebar';
import TopHeader from '../components/TopHeader';
import DriverHeader from '../components/Drivers/DriverHeader';
import DriverTable from '../components/Drivers/DriverTable';

const Driver = () => {
  return (
    <div className="absolute p-1 m-0 left-0 top-0 w-full h-screen">
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="w-16 lg:w-1/14 h-full">
          <DriverSidebar/>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow lg:w-13/14 h-full">
          <div className="p-2 lg:p-2"> {/* Reduced padding to minimize gaps */}
            <TopHeader />
            <hr />
            <DriverHeader/>
            <DriverTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;