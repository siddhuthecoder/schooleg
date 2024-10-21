import React from 'react';
import NoticeSidebar from '../components/Notice/NoticeSidebar';
import TopHeader from '../components/TopHeader';
import NoticeHeader from '../components/Notice/NoticeHeader';
import NoticeTable from '../components/Notice/NoticeTable';

const Notice = () => {
  return (
    <div className="absolute p-1 m-0 left-0 top-0 w-full h-screen">
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="w-16 lg:w-1/14 h-full">
          <NoticeSidebar/>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow lg:w-13/14 h-full">
          <div className="p-2 lg:p-2"> {/* Reduced padding to minimize gaps */}
            <TopHeader />
            <hr />
            <NoticeHeader/>
            {/* <NoticeTable/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;