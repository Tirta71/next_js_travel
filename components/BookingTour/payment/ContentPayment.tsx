import React, { useEffect, useState } from "react";
import DetailUserPayment from "./DetailUserPayment";
import DetailBooking from "./DetailBooking";
import { BookingInfo, User } from "@/utils/types";
import axios from "axios";
import Swal from "sweetalert2";
import formatRupiah, { apiUrl, formatDate } from "@/utils/formatRupiah";
import Link from "next/link";

interface ContentPaymentProps {
  user: User;
  bookingInfo: BookingInfo;
}

const ContentPayment: React.FC<ContentPaymentProps> = ({
  user,
  bookingInfo,
}) => {
  const [snapToken, setSnapToken] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);

  useEffect(() => {
    if (user && bookingInfo) {
      initiatePayment(user, bookingInfo);
    }
  }, [user, bookingInfo]);

  const initiatePayment = async (user: User, bookingInfo: BookingInfo) => {
    try {
      const response = await axios.post(
        `${apiUrl}/package-bookings/add`,
        {
          package_tour_id: bookingInfo.tour.id,
          start_date: bookingInfo.startDate,
          end_date: bookingInfo.endDate,
          total_amount: bookingInfo.totalAmount,
          quantity: bookingInfo.personCount,
          sub_total: bookingInfo.subTotal,
          insurance: bookingInfo.insurance,
          tax: bookingInfo.tax,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setSnapToken(response.data.snapToken);
      setTransactionId(response.data.transaction_id);
    } catch (error) {
      console.error("Error initiating payment:", error);
      Swal.fire({
        icon: "error",
        title: "Payment Error",
        text: "There was an error initiating the payment. Please try again.",
      });
    }
  };

  const handlePayNow = () => {
    Swal.fire({
      title: '<h2 class="text-2xl font-bold">Confirm Your Order</h2>',
      html: `
        <div class="text-left">
          <p><strong>Tour Name:</strong> ${bookingInfo.tour.name}</p>
          <p><strong>Location:</strong> ${bookingInfo.tour.location}</p>
          <p><strong>Start Tour:</strong> ${formatDate(
            bookingInfo.startDate
          )}</p>
          <p><strong>End Tour:</strong> ${formatDate(bookingInfo.endDate)}</p>
          <p><strong>Person:</strong> ${bookingInfo.personCount} Person</p>
          <p><strong>Total Amount:</strong> ${formatRupiah(
            bookingInfo.totalAmount
          )}</p>
        </div>              
      `,
      showCancelButton: true,
      confirmButtonText: "Yes, proceed to payment",
      cancelButtonText: "No, review my order",
      customClass: {
        popup: "shadow-lg rounded-lg",
        confirmButton:
          "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
        cancelButton:
          "bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (snapToken) {
          window.snap.pay(snapToken, {
            onSuccess: async function (result: any) {
              Swal.fire({
                icon: "success",
                title: "Payment Successful",
                text: "Your payment was successful!",
              }).then((result) => {
                if (result.isConfirmed) {
                  localStorage.removeItem("bookingInfo");
                  localStorage.removeItem("selectedTour");
                  window.location.href = "/my-booking";
                }
              });

              try {
                await axios.post(
                  `${apiUrl}/midtrans/callback`,
                  {
                    order_id: transactionId,
                    transaction_status: result.transaction_status,
                    package_tour_id: bookingInfo.tour.id,
                    user_id: user.id,
                    start_date: bookingInfo.startDate,
                    end_date: bookingInfo.endDate,
                    total_amount: bookingInfo.totalAmount,
                    quantity: bookingInfo.personCount,
                    sub_total: bookingInfo.subTotal,
                    insurance: bookingInfo.insurance,
                    tax: bookingInfo.tax,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );
              } catch (error) {
                console.error("Error handling payment callback:", error);
              }
            },
            onPending: function (result: any) {
              Swal.fire({
                icon: "warning",
                title: "Payment Pending",
                text: "Your payment is pending. Please complete the payment.",
              });
            },
            onError: function (result: any) {
              Swal.fire({
                icon: "error",
                title: "Payment Error",
                text: "There was an error processing your payment. Please try again.",
              });
            },
            onClose: function () {
              Swal.fire({
                icon: "info",
                title: "Payment Closed",
                text: "You closed the payment window before completing the payment.",
              });
            },
          });
        }
      }
    });
  };

  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container-fluid m-5-hor">
          <div className="flex flex-wrap -mx-4">
            <DetailUserPayment user={user} />
            <DetailBooking bookingInfo={bookingInfo} />
            <div className="flex justify-between mt-6 w-full">
              <Link href={"/booking"}>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                  Back to form
                </button>
              </Link>

              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handlePayNow}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentPayment;
