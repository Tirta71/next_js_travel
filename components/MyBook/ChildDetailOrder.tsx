"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import formatRupiah, { apiUrl, formatDate } from "@/utils/formatRupiah";
import Loaders from "../utils/Loaders";

interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  city: string;
  address: string;
  zip: string;
  company: string;
  fax: string;
}

interface Tour {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  about: string;
  location: string;
  price: number;
  days: number;
  category_id: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

interface BookingData {
  id: number;
  user_id: number;
  package_tour_id: number;
  transaction_id: string;
  start_date: string;
  end_date: string;
  is_paid: number;
  total_amount: number;
  quantity: number;
  sub_total: number;
  insurance: number;
  tax: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  customer: User;
  tour: Tour;
}

interface ChildDetailOrderProps {
  id: string;
}

const ChildDetailOrder: React.FC<ChildDetailOrderProps> = ({ id }) => {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/package-bookings/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBookingData(response.data);
      } catch (err) {
        console.error("Error fetching booking data:", err);
        setError("Failed to fetch booking data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookingData();
  }, [id]);

  if (loading) {
    return <Loaders />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!bookingData) {
    return <div>No booking data found.</div>;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container-fluid m-5-hor">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 lg:mb-0">
                <h5 className="text-2xl font-bold mb-4">
                  ORDER REQUEST IS COMPLETED!
                </h5>
                <div className="text-lg font-semibold mb-4">
                  Transaction ID : {bookingData.transaction_id}
                </div>
                <hr className="mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-semibold">Name:</div>
                    <div>{bookingData.customer.name}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Phone:</div>
                    <div>{bookingData.customer.phone_number}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Email:</div>
                    <div>{bookingData.customer.email}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 lg:mb-0">
                <h5 className="text-2xl font-bold mb-4">ORDER INFORMATION</h5>
                <hr className="mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <div className="text-4lg font-semibold">Tour Name:</div>
                    <div className="text-lg">{bookingData.tour.name}</div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-4lg font-semibold">Location:</div>
                    <div className="text-lg">{bookingData.tour.location}</div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-4lg font-semibold">Start Tour:</div>
                    <div className="text-lg">
                      {formatDate(bookingData.start_date)}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-4lg font-semibold">End Tour:</div>
                    <div className="text-lg">
                      {formatDate(bookingData.end_date)}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-4lg font-semibold">Person</div>
                    <div className="text-lg">{bookingData.quantity} Person</div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-4lg font-semibold">Sub Total:</div>
                    <div className="text-lg">
                      {formatRupiah(bookingData.sub_total)}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-4lg font-semibold">Insurance:</div>
                    <div className="text-lg">
                      {formatRupiah(bookingData.insurance)}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-4lg font-semibold">Tax:</div>
                    <div className="text-lg">
                      {formatRupiah(bookingData.tax)}
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <div className="text-4lg font-semibold">Total Amount:</div>
                    <div className="text-lg">
                      {formatRupiah(bookingData.total_amount)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 px-4 flex justify-between">
              <button
                onClick={() => window.history.back()}
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-300 transition duration-300 ml-4"
              >
                Back
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                onClick={handlePrint}
              >
                PRINT RECEIPT
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChildDetailOrder;
