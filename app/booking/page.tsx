// app/booking/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import BookingTour from "@/components/BookingTour/BookingTour";
import { Tour } from "@/utils/types";
import Loaders from "@/components/utils/Loaders";

const BookingPage: React.FC = () => {
  const [tour, setTour] = useState<Tour | null>(null);

  useEffect(() => {
    const savedTour = localStorage.getItem("selectedTour");
    if (savedTour) {
      setTour(JSON.parse(savedTour));
    }
  }, []);

  if (!tour) {
    return <Loaders />;
  }

  return <BookingTour tour={tour} />;
};

export default BookingPage;
