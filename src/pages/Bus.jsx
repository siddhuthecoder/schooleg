import React from 'react';
import Sidebar from '../components/Sidebar';
import BusesNavbar from '../components/Buses/BusesNavbar';
import BusHeader from '../components/Bus/BusHeader';
import BusTable from '../components/Bus/BusTable';

const Bus = () => {
  return (
    <div className="absolute p-1 m-0 left-0 top-0 w-full h-screen">
      {/* Sidebar */}
      <div className="fixed w-16 lg:w-1/14 h-full">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow lg:w-13/14 h-full ml-16 lg:ml-1/14">
        {/* Navbar */}
        <div className="fixed top-0 left-16 lg:left-1/14 right-0 z-10">
          <BusesNavbar />
          <hr />
        </div>

        {/* Header */}
        <div className="fixed top-[4rem] left-16 lg:left-1/14 right-0 z-10">
          <BusHeader />
        </div>

        {/* Scrollable Table */}
        <div className="overflow-y-auto mt-[8rem] h-[calc(100vh-8rem)] p-2 lg:p-2">
          <BusTable />
        </div>
      </div>
    </div>
  );
};

export default Bus;
