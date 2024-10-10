import React from 'react';

const EventCard = ({ image, title, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-96">
      <img className="w-full h-32 object-cover" src={image} alt={title} /> {/* Reduced image height */}
      <div className="p-3"> {/* Reduced padding */}
        <h2 className="text-lg font-bold mb-2 text-left">{title}</h2> {/* Slightly reduced font size */}
        <div className="flex items-center justify-between"> {/* Flex container for date and button */}
          <p className="text-gray-600">Date: {date}</p>
          <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const ActivityTable = () => {
  const events = [
    {
      id: 1,
      image: '/image.png', // replace with actual path
      title: 'Back to School Party',
      date: '15/05/2024',
    },
    {
      id: 2,
      image: '/image (1).png',
      title: 'Back to School Party',
      date: '15/05/2024',
    },
    {
      id: 3,
      image: '/image (2).png',
      title: 'Back to School Party',
      date: '15/05/2024',
    },
    {
      id: 4,
      image: '/path/to/image4.png',
      title: 'Back to School Party',
      date: '15/05/2024',
    },
    {
      id: 5,
      image: '/path/to/image5.png',
      title: 'Back to School Party',
      date: '15/05/2024',
    },
    {
      id: 6,
      image: '/path/to/image6.png',
      title: 'Back to School Party',
      date: '15/05/2024',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} image={event.image} title={event.title} date={event.date} />
        ))}
      </div>
    </div>
  );
};

export default ActivityTable;


