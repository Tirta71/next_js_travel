/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, baseUrl } from "@/utils/formatRupiah";
import Link from "next/link";
import Loaders from "../utils/Loaders";

const BookingCard: React.FC = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${apiUrl}/package-bookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(response.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to fetch bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <Loaders />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h4 className="text-2xl font-bold mb-6">This is Your Booking History</h4>
      <div className="flex flex-wrap -mx-4 my-12">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <Link href={`/my-booking/detail-booking/${booking.id}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    alt={booking.tour.name}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    src={`${baseUrl}/storage/${booking.tour.thumbnail}`}
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
                  <h4 className="text-xl font-bold mb-2">
                    {booking.tour.name}
                  </h4>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCard;
