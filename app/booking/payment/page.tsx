"use client";
import Payment from "@/components/BookingTour/payment/payment";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loaders from "@/components/utils/Loaders";
import { apiUrl } from "@/utils/formatRupiah";

interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
}

interface BookingInfo {
  startDate: string;
  endDate: string;
  personCount: number;
  subTotal: number;
  insurance: number;
  tax: number;
  totalAmount: number;
  tour: any;
}

const Page = () => {
  const [user, setUser] = useState<User | null>(null);
  const [bookingInfo, setBookingInfo] = useState<BookingInfo | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(`${apiUrl}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const savedBookingInfo = localStorage.getItem("bookingInfo");
    if (savedBookingInfo) {
      setBookingInfo(JSON.parse(savedBookingInfo));
    }

    fetchUserData();
  }, [router]);

  if (!user || !bookingInfo) {
    return <Loaders />;
  }

  return (
    <>
      <Payment user={user} bookingInfo={bookingInfo} />
    </>
  );
};

export default Page;
