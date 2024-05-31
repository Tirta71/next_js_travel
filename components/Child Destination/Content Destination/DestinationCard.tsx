/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

interface DestinationCardProps {
  tour: Tour;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ tour }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="col-md-6 col-lg-4 p-4" data-aos="fade-up">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105">
        <a href={`/detail-destination/${tour.id}`}>
          <div className="relative overflow-hidden">
            <img
              alt={tour.name}
              className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
              src={`${baseUrl}/storage/${tour.thumbnail}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 flex items-end p-4">
              <span className="text-white text-lg font-semibold">
                View Details
              </span>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-bold mb-2">{tour.name}</h4>
            <p className="text-gray-600 mb-4">Duration {tour.days} days</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-orange-400">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(tour.price)}{" "}
                  <span className="text-gray-500"> / Per Person</span>
                </div>
              </div>
              <div className="text-blue-500 font-semibold">{tour.location}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;
