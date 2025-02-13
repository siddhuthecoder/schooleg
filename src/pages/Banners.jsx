import React from 'react';
import Sidebar from '../components/Sidebar';
import BannerNavbar from '../components/Banner/BannerNavbar';
import BannerHeader from '../components/Banner/BannerHeader';
import BannerTable from '../components/Banner/BannerTable';

const Banners= () => {
  return (
    <div className="absolute p-1 m-0 left-0 top-0 w-full h-screen">
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="w-16 lg:w-1/14 h-full">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-grow lg:w-13/14 h-full">
          <div className="p-2 lg:p-2"> {/* Reduced padding to minimize gaps */}
            <BannerNavbar/>
            <hr />
              <BannerHeader/>
              <BannerTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;