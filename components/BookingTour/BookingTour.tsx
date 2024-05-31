// components/BookingTour.tsx
import React from "react";
import ProcessBooking from "./ProcessBooking";
import HeaderBooking from "./HeaderBooking";
import SubHeaderBooking from "./SubHeaderBooking";
import { Tour } from "@/utils/types";

interface BookingTourProps {
  tour: Tour;
}

const BookingTour: React.FC<BookingTourProps> = ({ tour }) => {
  return (
    <div className="content-wrapper">
      <SubHeaderBooking />
      <HeaderBooking />
      <ProcessBooking tour={tour} />
    </div>
  );
};

export default BookingTour;
