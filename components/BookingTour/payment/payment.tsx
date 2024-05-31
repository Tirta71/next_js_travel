import React from "react";
import HeaderBooking from "../HeaderBooking";
import SubHeaderBooking from "../SubHeaderBooking";
import ContentPayment from "./ContentPayment";
import { BookingInfo, User } from "@/utils/types";

interface PaymentProps {
  user: User;
  bookingInfo: BookingInfo;
}

const Payment: React.FC<PaymentProps> = ({ user, bookingInfo }) => {
  return (
    <div className="content-wrapper">
      <SubHeaderBooking />
      <HeaderBooking />
      <ContentPayment user={user} bookingInfo={bookingInfo} />
    </div>
  );
};

export default Payment;
