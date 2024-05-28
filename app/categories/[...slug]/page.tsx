"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "@/components/Child Categories/Categories";
import Loaders from "@/components/utils/Loaders";

const Page = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${apiUrl}/categories/${slug}/tours`);
        setTours(response.data.tours);
      } catch (err) {
        setError("Error fetching tours data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTours();
  }, [slug, apiUrl]);

  if (isLoading) {
    return <Loaders />;
  }

  return (
    <>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Categories slug={slug} tours={tours} />
      )}
    </>
  );
};

export default Page;
