/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import formatRupiah from "@/utils/formatRupiah";

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

interface ContentCategoriesProps {
  tours: Tour[];
}

const ContentCategories: React.FC<ContentCategoriesProps> = ({ tours }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      <section className="py-20">
        <div className="container-fluid m-5-hor mx-auto px-4">
          <h1 className="text-3xl font-bold mb-10">Tours Available</h1>

          {tours.length === 0 ? (
            <p className="text-center text-lg">
              No tours available at the moment.
            </p>
          ) : (
            <div className="flex flex-wrap">
              {tours.map((tour) => (
                <div key={tour.id} className="w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
                    <img
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-110"
                      src={`${baseUrl}/storage/${tour.thumbnail}`}
                      alt={tour.name}
                    />

                    <div className="p-6">
                      <Link href={`/detail-destination/${tour.id}`}>
                        <span className="font-bold text-2xl mb-2">
                          {tour.name}
                        </span>
                      </Link>
                      <p className="text-red-500 text-xl">
                        {formatRupiah(tour.price)}
                        <span className="text-gray-500"> / Per Person</span>
                      </p>
                      <p className="bg-blue-100 text-blue-800 px-3 py-1 inline-block rounded-full text-sm font-semibold">
                        {tour.category.name}
                      </p>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tour.days} DAYS
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        12+
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tour.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ContentCategories;
