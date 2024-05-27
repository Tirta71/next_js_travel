// app/detail-destination/[...id]/page.tsx
"use client";
import DetailDestination from "@/components/Detail Destination/DetailDestination";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loaders from "@/components/utils/Loaders";

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

const Page = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [tour, setTour] = useState<Tour | null>(null);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/package-tours/${id}`);
        setTour(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchTourData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tour) {
    return <Loaders />;
  }

  return (
    <>
      <DetailDestination tour={tour} />
    </>
  );
};

export default Page;
