/* eslint-disable @next/next/no-img-element */
// components/ProcessBooking.tsx
"use client";

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import formatRupiah from "@/utils/formatRupiah";
import { baseUrl } from "@/utils/formatRupiah";
import { useRouter } from "next/navigation";
import { Tour } from "@/utils/types";

interface ProcessBookingProps {
  tour: Tour;
}

const ProcessBooking: React.FC<ProcessBookingProps> = ({ tour }) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [personCount, setPersonCount] = useState<number>(7);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [insurance, setInsurance] = useState<number>(100000);
  const [tax, setTax] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const router = useRouter();

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (tour) {
      const newSubTotal = tour.price * personCount;
      const newTax = newSubTotal * 0.1;
      setSubTotal(newSubTotal);
      setTax(newTax);
      setTotalAmount(newSubTotal + insurance + newTax);
    }
  }, [personCount, tour, insurance]);

  useEffect(() => {
    if (tour && startDate) {
      const start = new Date(startDate);
      start.setDate(start.getDate() + tour.days);
      setEndDate(start.toISOString().split("T")[0]);
    }
  }, [startDate, tour]);

  const handlePayment = () => {
    if (!startDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a start date!",
      });
      return;
    }

    const bookingInfo = {
      startDate,
      endDate,
      personCount,
      subTotal,
      insurance,
      tax,
      totalAmount,
      tour,
    };

    localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));

    router.push("/booking/payment");
  };

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section id="content-commerce" className="py-12 bg-gray-100">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="w-full lg:w-3/4 mx-auto bg-white rounded-lg shadow-md p-6">
              <h2 className="text-4xl font-bold mb-6 text-center">
                Choose Your Package
              </h2>
              <div className="table-responsive">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="">
                      <th className="text-left py-4 px-4 ">Details</th>
                      <th className="text-left py-4 px-4">Person</th>
                      <th className="text-left py-4 px-4">Price</th>
                      <th className="text-left py-4 px-4">Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 px-4">
                        <img
                          alt="commerce"
                          src={`${baseUrl}/storage/${tour.thumbnail}`}
                          className="w-full h-auto rounded-lg shadow"
                        />
                        <div className="mt-4">
                          <h3 className="text-2xl font-bold">{tour.name}</h3>
                          <p className="text-lg text-gray-500">
                            {tour.category.name}
                          </p>
                        </div>
                      </td>
                      <td>
                        <select
                          className="border border-gray-300 rounded p-2 "
                          value={personCount}
                          onChange={(e) =>
                            setPersonCount(Number(e.target.value))
                          }
                        >
                          <option value="1">1 person</option>
                          <option value="2">2 person</option>
                          <option value="3">3 person</option>
                          <option value="4">4 person</option>
                          <option value="5">5 person</option>
                          <option value="6">6 person</option>
                          <option value="7">7 person</option>
                        </select>
                      </td>
                      <td className="py-4 px-4">
                        <div className="mt-2 text-2xl font-bold">
                          {formatRupiah(tour.price * personCount)}
                        </div>
                        <div className="text-lg text-gray-500 line-through">
                          {formatRupiah(tour.price * 1.25)}
                        </div>
                      </td>
                      <td className="py-4 px-4">{tour.days} days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="start-date"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Start Tour:
                    </label>
                    <input
                      type="date"
                      id="start-date"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={getCurrentDate()}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="end-date"
                      className="block text-lg font-medium text-gray-700"
                    >
                      End Tour:
                    </label>
                    <input
                      type="date"
                      id="end-date"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                      value={endDate}
                      readOnly
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 relative">
                  <div>
                    <label className="block text-lg font-medium text-gray-700">
                      Sub Total:
                    </label>
                    <div className="text-2xl font-bold">
                      {formatRupiah(subTotal)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700">
                      Insurance:
                    </label>
                    <div className="text-2xl font-bold">
                      {formatRupiah(insurance)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700">
                      Tax:
                    </label>
                    <div className="text-2xl font-bold">
                      {formatRupiah(tax)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700">
                      Total Amount:
                    </label>
                    <div className="text-2xl font-bold">
                      {formatRupiah(totalAmount)}
                    </div>
                  </div>
                  <button
                    className="bg-orange-500 px-4 py-2 mt-5 text-white rounded hover:bg-slate-500 transition duration-300 ease-in-out absolute right-0 bottom-0"
                    onClick={handlePayment}
                  >
                    Process To Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessBooking;
