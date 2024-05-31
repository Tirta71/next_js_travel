// context/TourContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

interface PackagePhoto {
  id: number;
  photo: string;
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
  category: Category;
  package_photos: PackagePhoto[];
}

interface BookingInfo {
  startDate: string;
  endDate: string;
  personCount: number;
  subTotal: number;
  insurance: number;
  tax: number;
  totalAmount: number;
}

interface TourContextProps {
  tour: Tour | null;
  setTour: React.Dispatch<React.SetStateAction<Tour | null>>;
  bookingInfo: BookingInfo;
  setBookingInfo: React.Dispatch<React.SetStateAction<BookingInfo>>;
}

const TourContext = createContext<TourContextProps | undefined>(undefined);

export const TourProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tour, setTour] = useState<Tour | null>(null);
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({
    startDate: "",
    endDate: "",
    personCount: 0,
    subTotal: 0,
    insurance: 0,
    tax: 0,
    totalAmount: 0,
  });

  return (
    <TourContext.Provider
      value={{ tour, setTour, bookingInfo, setBookingInfo }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error("useTour must be used within a TourProvider");
  }
  return context;
};
