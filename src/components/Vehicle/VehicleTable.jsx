import React from 'react';

function VehicleTable() {
  // VehicleCard Component
  const VehicleCard = () => {
    return (
      <div className="border rounded-lg shadow p-4 mb-4 bg-white">
        <div className="flex justify-between items-center">
          <div className="text-blue-500 font-semibold">HR XXXX 123</div>
          <div className="bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs">Running</div>
        </div>
        <div className="text-gray-500 text-sm">Rajiv Chowk, Haryana</div>
        <div className="text-gray-400 text-xs">Last Update: 05:46 PM</div>
        <div className="flex items-center text-sm mt-2">
          <div className="text-gray-500">200 kmph</div>
          <div className="ml-4 text-gray-500">| 100 Km Today</div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div>
            <div className="text-sm">Driver: Ravi Kumar</div>
            <div className="text-sm">Helper: Ravi Kumar</div>
          </div>
          <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded">View Info</button>
        </div>
      </div>
    );
  };

  // Itinerary Component
  const Itinerary = () => {
    return (
      <div className="border rounded-lg shadow p-4 bg-white">
        <div className="flex justify-between items-center">
          <div className="font-semibold">Itinerary</div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-between mt-4">
          <div className="flex space-x-4">
            <button className="border rounded px-2 py-1 text-blue-500 border-blue-500">All</button>
            <button className="border rounded px-2 py-1 text-gray-500">Stopped</button>
            <button className="border rounded px-2 py-1 text-gray-500">No Info</button>
          </div>
          <div className="text-gray-500">19 hr 25 min | 250 Km</div>
        </div>

        {/* Timeline Entry */}
        <div className="mt-4 space-y-4">
          {/* First Entry */}
          <div className="flex items-start space-x-2">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 h-4 w-4 rounded-full"></div>
              <div className="h-full w-px bg-gray-300"></div>
            </div>
            <div>
              <div className="flex items-center text-sm">
                <div className="font-semibold text-green-500">Running Since</div>
                <div className="ml-auto text-xs text-gray-500">2 hr 15 min</div>
              </div>
              <div className="text-xs text-gray-500">Covered 240 Km</div>
              <div className="text-xs text-gray-400">(20/08/24 - 25/08/24)</div>
            </div>
          </div>

          {/* Second Entry */}
          <div className="flex items-start space-x-2">
            <div className="flex flex-col items-center">
              <div className="bg-red-500 h-4 w-4 rounded-full"></div>
              <div className="h-full w-px bg-gray-300"></div>
            </div>
            <div>
              <div className="flex items-center text-sm">
                <div className="font-semibold text-red-500">Stop 4</div>
                <div className="ml-auto text-xs text-gray-500">1 hr 5 min</div>
              </div>
              <div className="text-xs text-gray-500">ITBP Park, Mode Town 1, Faridabad, Haryana</div>
              <div className="text-xs text-gray-400">(20/08/24 - 25/08/24)</div>
            </div>
          </div>

          {/* Third Entry */}
          <div className="flex items-start space-x-2">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 h-4 w-4 rounded-full"></div>
              <div className="h-full w-px bg-gray-300"></div>
            </div>
            <div>
              <div className="flex items-center text-sm">
                <div className="font-semibold text-green-500">Running Since</div>
                <div className="ml-auto text-xs text-gray-500">2 hr 15 min</div>
              </div>
              <div className="text-xs text-gray-500">Covered 240 Km</div>
              <div className="text-xs text-gray-400">(20/08/24 - 25/08/24)</div>
            </div>
          </div>

          {/* Fourth Entry */}
          <div className="flex items-start space-x-2">
            <div className="flex flex-col items-center">
              <div className="bg-red-500 h-4 w-4 rounded-full"></div>
              <div className="h-full w-px bg-gray-300"></div>
            </div>
            <div>
              <div className="flex items-center text-sm">
                <div className="font-semibold text-red-500">Stop 4</div>
                <div className="ml-auto text-xs text-gray-500">1 hr 5 min</div>
              </div>
              <div className="text-xs text-gray-500">ITBP Park, Mode Town 1, Faridabad, Haryana</div>
              <div className="text-xs text-gray-400">(20/08/24 - 25/08/24)</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Map Component
  const Map = () => {
    return (
      <div className="border rounded-lg shadow p-4 bg-white">
        <div className="h-64 w-full">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.504594185987!2d77.20485455!3d28.61393995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4d2f17d577%3A0xb695c1f0a1c78f3a!2sDelhi!5e0!3m2!1sen!2sin!4v1631676585055!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
        </div>
        <div className="col-span-1">
          <Itinerary />
        </div>
        <div className="col-span-1">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default VehicleTable;
