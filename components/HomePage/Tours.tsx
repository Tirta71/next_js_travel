/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import formatRupiah from "@/utils/formatRupiah";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Card {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  about: string;
  location: string;
  price: number;
  days: number;
  category_id: number;
  category: {
    id: number;
    name: string;
    icon: string;
    slug: string;
  };
}

const Tours: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${apiUrl}/package-tours`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [apiUrl]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section aria-label="top-rated" className="py-20">
      <div className="container-fluid m-5-hor mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10">Tours Available</h1>
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : cards.length === 0 ? (
          <p className="text-center text-lg">
            No tours available at the moment.
          </p>
        ) : (
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
                  <img
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-110"
                    src={`${baseUrl}/storage/${card.thumbnail}`}
                    alt={card.name}
                  />
                  <div className="p-6">
                    <Link href={`/detail-destination/${card.id}`}>
                      <div className="font-bold text-xl mb-2">{card.name}</div>
                    </Link>
                    <p className="text-red-500 text-lg">
                      {formatRupiah(card.price)}{" "}
                      <span className="text-gray-500"> / Per Person</span>
                    </p>
                    <p className="bg-blue-100 text-blue-800 px-3 py-1 inline-block rounded-full text-sm font-semibold">
                      {card.category.name}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {card.days} DAYS
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      12+
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {card.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Tours;
