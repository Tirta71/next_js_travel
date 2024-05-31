"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loaders from "@/components/utils/Loaders";
import Destination from "@/components/Child Destination/Content Destination";
import { apiUrl } from "@/utils/formatRupiah";

interface Category {
  id: number;
  name: string;
  slug: string;
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
}

const Page = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toursResponse = await axios.get(`${apiUrl}/package-tours`);
        const categoriesResponse = await axios.get(`${apiUrl}/categories`);
        setTours(toursResponse.data);
        setCategories(categoriesResponse.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (isLoading) {
    return <Loaders />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <Destination tours={tours} categories={categories} />
    </>
  );
};

export default Page;
