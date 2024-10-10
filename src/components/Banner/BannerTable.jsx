import React from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/solid';

const banners = [
  {
    image: '/image.png',
  },
  {
    image: '/image (1).png',
  },
  {
    image: '/image (2).png',
  },
];

const BannerCard = ({ image }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg overflow-hidden mt-2">
      <img src={image} alt="Banner" className="w-full h-52 object-cover" />
      <div className="absolute bottom-2 right-2 flex space-x-2">
        <button className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100">
          <PencilIcon className="h-4 w-4 text-blue-500" />
        </button>
        <button className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100">
          <TrashIcon className="h-4 w-4 text-red-500" />
        </button>
      </div>
    </div>
  );
};

const AddBannerCard = () => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-52">
      <button className="flex flex-col items-center text-blue-600">
        <PlusIcon className="h-6 w-6 mb-2" />
        <span>Add Banner</span>
      </button>
    </div>
  );
};

const BannerTable = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {banners.map((banner, index) => (
        <BannerCard key={index} image={banner.image} />
      ))}
      {/* Add the empty placeholders for adding new banners */}
      <AddBannerCard />
      <AddBannerCard />
      <AddBannerCard />
    </div>
  );
};

export default BannerTable;
