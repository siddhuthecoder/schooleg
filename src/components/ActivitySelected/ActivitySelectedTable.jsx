// MainComponent.jsx

import React from 'react';

const ActivitySelectedTable = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main Card */}
      <div className="grid grid-cols-4 gap-4">
        {/* Left Section (Image Card) */}
        <div className="col-span-1 border  rounded-lg shadow-md">
          <img src="/image.png" alt="Back to School Party" className="rounded-lg" />
          <div className="mt-4">
            <h3 className="text-lg font-bold text-left">Back to School Party</h3>
            {/* Date and View Details Inline */}
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600">Date-15/05/2024</p>
              <button className="text-blue-500">View Details</button>
            </div>
          </div>
        </div>

        {/* Right Section (Details) */}
        <div className="col-span-2 border p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">Back to School Party</h3>
            <p>Date-15/05/2024</p>
            <button className="text-red-500">✕</button>
          </div>
          <p className="mt-4">
            <span className="font-semibold text-blue-600">Description: </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </div>
      </div>

      {/* Photos Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          {/* Photos Heading */}
          <h4 className="text-lg font-bold">Photos (3)</h4>
          {/* Add Photos and Download All buttons inline */}
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Photos</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">Download all</button>
          </div>
        </div>

        <hr className='mt-2'/>
        
        {/* Photo Cards */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {["/image.png", "/image (1).png", "/image (2).png"].map((photo, idx) => (
            <div key={idx} className="relative border p-2 rounded-lg shadow-md">
              <img src={photo} alt={`Photo ${idx + 1}`} className="rounded-lg" />
              <div className="absolute bottom-2 right-2 flex space-x-2">
                <button className="text-blue-500">✏️</button>
                <button className="text-red-500">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitySelectedTable;
