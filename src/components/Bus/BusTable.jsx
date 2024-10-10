import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Import the leaflet styles
import "leaflet/dist/leaflet.css";

// Custom icon for Leaflet marker (to avoid the default marker not showing properly)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="border border-gray-300 bg-white shadow-sm rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-blue-600 font-semibold text-lg">{vehicle.number}</h3>
        <span className="bg-green-100 text-green-500 text-xs font-semibold py-1 px-2 rounded">
          {vehicle.status}
        </span>
      </div>

      <p className="text-gray-600 text-sm">
        <FaMapMarkerAlt className="inline mr-2" /> {vehicle.location}
      </p>
      <p className="text-gray-400 text-xs">Last Update: {vehicle.lastUpdate}</p>

      <div className="text-gray-600 text-sm mt-2">
        <p>200 kmph | 100 Km Today</p>
      </div>
      <hr className="mt-2"/>

      <div className="mt-2 text-sm">
        <p>
          <span className="font-semibold">Driver: </span>
          {vehicle.driver.name} | {vehicle.driver.phone}
        </p>
        <p>
          <span className="font-semibold">Helper: </span>
          {vehicle.helper.name ? (
            <>
              {vehicle.helper.name} | {vehicle.helper.phone}
            </>
          ) : (
            <button className="text-blue-500 hover:underline">+Add</button>
          )}
        </p>
      </div>

      <hr className="mt-2"/>

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-8 text-gray-500">
          {/* Replace icons with images */}
          <img
            src="/Object.png"
            alt="Wrench"
            className="w-4 h-4 cursor-pointer hover:opacity-80"
          />
          <img
            src="/Vector (1).png"
            alt="Phone"
            className="w-4 h-4 cursor-pointer hover:opacity-80 ml-4"
          />
          <img
            src="/Vector (2).png"
            alt="Clipboard"
            className="w-4 h-4 cursor-pointer hover:opacity-80"
          />
          <img
            src="/Vector (3).png"
            alt="Edit"
            className="w-4 h-4 cursor-pointer hover:opacity-80"
          />
        </div>
        <button className="text-blue-500 hover:underline">View Info</button>
      </div>
    </div>
  );
};

const VehicleTracking = () => {
  const vehicles = [
    {
      number: "HR XXXX 123",
      status: "Running",
      location: "Rajiv Chowk, Haryana",
      lastUpdate: "05:46 PM",
      driver: { name: "Ravi Kumar", phone: "8545652545" },
      helper: { name: "Ravi Kumar", phone: "8545652545" },
      coordinates: [28.6139, 77.209],
    },
    {
      number: "HR XXXX 123",
      status: "Running",
      location: "Rajiv Chowk, Haryana",
      lastUpdate: "05:46 PM",
      driver: { name: "Ravi Kumar", phone: "8545652545" },
      helper: { name: "", phone: "" },
      coordinates: [28.7041, 77.1025],
    },
    {
      number: "HR XXXX 123",
      status: "Running",
      location: "Rajiv Chowk, Haryana",
      lastUpdate: "05:46 PM",
      driver: { name: "Ravi Kumar", phone: "8545652545" },
      helper: { name: "Ravi Kumar", phone: "8545652545" },
      coordinates: [28.5355, 77.391],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 p-4 space-y-4 text-left overflow-auto">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
      </div>

      {/* Right Panel - Leaflet Map */}
      <div className="w-full md:w-2/3 p-4">
        <div className="border border-gray-300 rounded-lg overflow-hidden h-full">
          <MapContainer
            center={[28.6139, 77.209]}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {vehicles.map((vehicle, index) => (
              <Marker key={index} position={vehicle.coordinates}>
                <Popup>
                  {vehicle.number}
                  <br />
                  {vehicle.location}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default VehicleTracking;


