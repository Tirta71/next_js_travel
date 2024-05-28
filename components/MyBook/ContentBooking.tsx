// components/BookingCard.tsx
import React from "react";

const BookingCard: React.FC = () => {
  const dummyBookings = [
    {
      id: 1,
      user_id: 1,
      package_tour_id: 1,
      start_date: "2024-05-25T00:00:00.000000Z",
      end_date: "2024-05-26T00:00:00.000000Z",
      is_paid: 1,
      proof: "dummy-proof",
      total_amount: 5000000,
      quantity: 2,
      sub_total: 10000000,
      insurance: 1,
      tax: 10,
      tour: {
        id: 1,
        name: "Dummy Tour 1",
        slug: "dummy-tour-1",
        thumbnail: "https://via.placeholder.com/400x300",
        about: "This is a dummy tour description for testing purposes.",
        location: "Dummy Location 1",
        price: 5000000,
        days: 2,
      },
    },
    {
      id: 2,
      user_id: 2,
      package_tour_id: 2,
      start_date: "2024-06-01T00:00:00.000000Z",
      end_date: "2024-06-02T00:00:00.000000Z",
      is_paid: 0,
      proof: "dummy-proof",
      total_amount: 7500000,
      quantity: 3,
      sub_total: 15000000,
      insurance: 1,
      tax: 15,
      tour: {
        id: 2,
        name: "Dummy Tour 2",
        slug: "dummy-tour-2",
        thumbnail: "https://via.placeholder.com/400x300",
        about: "This is another dummy tour description for testing purposes.",
        location: "Dummy Location 2",
        price: 7500000,
        days: 3,
      },
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h4 className="text-2xl font-bold mb-6">This is Your Booking History</h4>
      <div className="flex flex-wrap -mx-4 my-12">
        {dummyBookings.map((booking) => (
          <div
            key={booking.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  alt={booking.tour.name}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  src={booking.tour.thumbnail}
                />
                <span
                  className={`absolute top-2 left-2 px-3 py-1 text-sm font-semibold text-white rounded ${
                    booking.is_paid ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {booking.is_paid ? "Paid" : "Unpaid"}
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{booking.tour.name}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
                    {booking.tour.location}
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
                    {booking.tour.days} Days
                  </span>
                  <span className="px-2 py-1 bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
                    {booking.quantity} Person
                  </span>
                </div>
                <p className="text-gray-800 font-semibold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(booking.total_amount)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCard;
