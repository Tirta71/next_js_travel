import formatRupiah from "@/utils/formatRupiah";
import { BookingInfo } from "@/utils/types";
import React from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface DetailBookingProps {
  bookingInfo: BookingInfo;
}

const DetailBooking: React.FC<DetailBookingProps> = ({ bookingInfo }) => {
  const {
    tour,
    startDate,
    endDate,
    personCount,
    subTotal,
    insurance,
    tax,
    totalAmount,
  } = bookingInfo;

  // Format the dates
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy", {
    locale: id,
  });
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy", {
    locale: id,
  });

  return (
    <div className="w-full lg:w-1/2 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 lg:mb-0">
        <h5 className="text-2xl font-bold mb-4">ORDER INFORMATION</h5>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="text-4lg font-semibold">Tour Name:</div>
            <div className="text-lg">{tour.name}</div>
          </div>
          <div className="col-span-1">
            <div className="text-4lg font-semibold">Location:</div>
            <div className="text-lg">{tour.location}</div>
          </div>
          <div className="col-span-1">
            <div className="text-4lg font-semibold">Start Tour:</div>
            <div className="text-lg">{formattedStartDate}</div>
          </div>
          <div className="col-span-1">
            <div className="text-4lg font-semibold">End Tour:</div>
            <div className="text-lg">{formattedEndDate}</div>
          </div>
          <div className="col-span-1">
            <div className="text-4lg font-semibold">Person</div>
            <div className="text-lg">{personCount} Person</div>
          </div>
          <div className="col-span-1">
            <div className="text-4lg font-semibold">Sub Total:</div>
            <div className="text-lg">{formatRupiah(subTotal)}</div>
          </div>
          <div className="col-span-1">
            <div className="text-4lg font-semibold">Insurance:</div>
            <div className="text-lg">{formatRupiah(insurance)}</div>
          </div>
          <div className="col-span-1">
            <div className="text-4lg font-semibold">Tax:</div>
            <div className="text-lg">{formatRupiah(tax)}</div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="text-4lg font-semibold">Total Amount:</div>
            <div className="text-lg">{formatRupiah(totalAmount)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBooking;
