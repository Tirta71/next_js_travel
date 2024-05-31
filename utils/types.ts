// types.ts
export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export interface PackagePhoto {
  id: number;
  photo: string;
}

export interface Tour {
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

export interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
}

export interface BookingInfo {
  startDate: string;
  endDate: string;
  personCount: number;
  subTotal: number;
  insurance: number;
  tax: number;
  totalAmount: number;
  tour: any;
}
