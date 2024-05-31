import { User } from "@/utils/types";
import React from "react";

interface DetailUserPaymentProps {
  user: User;
}
const DetailUserPayment: React.FC<DetailUserPaymentProps> = ({ user }) => {
  return (
    <>
      <div className="w-full lg:w-1/2 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 lg:mb-0">
          <h5 className="text-2xl font-bold mb-4">USER INFORMATION</h5>
          <hr className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-semibold">Name:</div>
              <div>{user.name}</div>
            </div>
            <div>
              <div className="text-sm font-semibold">Phone:</div>
              <div>{user.phone_number}</div>
            </div>
            <div>
              <div className="text-sm font-semibold">Email:</div>
              <div>{user.email}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailUserPayment;
