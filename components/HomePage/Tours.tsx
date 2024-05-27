/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef, MouseEvent } from "react";
import formatRupiah from "@/utils/formatRupiah";
import Link from "next/link";

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
  created_at: string;
  updated_at: string;
  category: {
    id: number;
    name: string;
    icon: string;
    slug: string;
    created_at: string;
    updated_at: string;
  };
}

const Tours: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cards, setCards] = useState<Card[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const currentTranslate = useRef<number>(0);
  const prevTranslate = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
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
      }
    };

    fetchCards();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= Math.ceil(cards.length / 4) ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [apiUrl, cards.length]);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    isDragging.current = true;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
      containerRef.current.style.transition = "none";
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const currentPosition = e.clientX - startX.current;
    currentTranslate.current = prevTranslate.current + currentPosition;
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.transition = "transform 0.5s ease-in-out";
    }
    const movedBy = currentTranslate.current - prevTranslate.current;
    if (movedBy < -50 && currentIndex < Math.ceil(cards.length / 4) - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
    if (containerRef.current) {
      prevTranslate.current = -currentIndex * containerRef.current.offsetWidth;
      containerRef.current.style.transform = `translateX(${
        -currentIndex * containerRef.current.offsetWidth
      }px)`;
    }
  };

  return (
    <section aria-label="top-rated" className="py-20">
      <div className="container-fluid m-5-hor mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10">Tours Available</h1>
        <div
          className="overflow-hidden cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            ref={containerRef}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-4"
              >
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
