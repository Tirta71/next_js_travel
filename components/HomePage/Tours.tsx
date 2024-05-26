"use client";
import React, { useState, useEffect, useRef } from "react";

const cards = [
  {
    img: "https://source.unsplash.com/800x600/?nature,water",
    rating: "8.0 Superb",
    title: "Moscow Red City Land",
    price: "$1870",
    perPerson: "12$",
    days: "3 DAYS",
    age: "12+",
    location: "LOS ANGELES",
  },
  {
    img: "https://source.unsplash.com/800x600/?nature,mountain",
    rating: "9.0 Excellent",
    title: "Mountain View",
    price: "$2100",
    perPerson: "15$",
    days: "5 DAYS",
    age: "18+",
    location: "NEW YORK",
  },
  {
    img: "https://source.unsplash.com/800x600/?forest,adventure",
    rating: "8.5 Great",
    title: "Forest Adventure",
    price: "$1500",
    perPerson: "10$",
    days: "4 DAYS",
    age: "15+",
    location: "CALIFORNIA",
  },
  {
    img: "https://source.unsplash.com/800x600/?desert,safari",
    rating: "7.0 Good",
    title: "Desert Safari",
    price: "$2000",
    perPerson: "18$",
    days: "3 DAYS",
    age: "20+",
    location: "NEVADA",
  },
  {
    img: "https://source.unsplash.com/800x600/?beach,sunset",
    rating: "9.5 Fantastic",
    title: "Beach Sunset",
    price: "$2500",
    perPerson: "20$",
    days: "7 DAYS",
    age: "10+",
    location: "HAWAII",
  },
  {
    img: "https://source.unsplash.com/800x600/?city,night",
    rating: "8.2 Great",
    title: "City Night View",
    price: "$1700",
    perPerson: "14$",
    days: "2 DAYS",
    age: "18+",
    location: "TOKYO",
  },
  {
    img: "https://source.unsplash.com/800x600/?mountain,lake",
    rating: "9.3 Wonderful",
    title: "Mountain Lake",
    price: "$2300",
    perPerson: "19$",
    days: "6 DAYS",
    age: "16+",
    location: "SWITZERLAND",
  },
  {
    img: "https://source.unsplash.com/800x600/?jungle,adventure",
    rating: "8.0 Superb",
    title: "Jungle Adventure",
    price: "$1800",
    perPerson: "12$",
    days: "5 DAYS",
    age: "20+",
    location: "AMAZON",
  },
];

const Tours = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= Math.ceil(cards.length / 4) ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
      containerRef.current.style.transition = "none";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
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
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-1/4 flex-shrink-0 p-4"
                style={{ minWidth: "25%" }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
                  <img
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    src={card.img}
                    alt={card.title}
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500">
                        <svg
                          className="w-4 h-4 inline-block"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.176 3.617a1 1 0 00.95.69h3.825c.969 0 1.371 1.24.588 1.81l-3.1 2.255a1 1 0 00-.364 1.118l1.176 3.617c.3.921-.755 1.688-1.54 1.118l-3.1-2.255a1 1 0 00-1.176 0l-3.1 2.255c-.784.57-1.838-.197-1.54-1.118l1.176-3.617a1 1 0 00-.364-1.118l-3.1-2.255c-.783-.57-.381-1.81.588-1.81h3.825a1 1 0 00.95-.69l1.176-3.617z" />
                        </svg>
                      </span>
                      <span className="ml-1 text-gray-600">{card.rating}</span>
                      <button className="ml-auto text-gray-500 hover:text-red-500 focus:outline-none">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 4.75a7.25 7.25 0 00-7.25 7.25c0 1.59.682 3.236 2.007 4.535 1.242 1.216 2.875 1.815 4.743 1.815 1.868 0 3.501-.599 4.743-1.815 1.325-1.299 2.007-2.945 2.007-4.535A7.25 7.25 0 0012 4.75zm0 12.75c-1.41 0-2.74-.439-3.787-1.263C6.49 14.866 5.75 13.407 5.75 12a5.25 5.25 0 1110.5 0c0 1.407-.74 2.866-2.463 3.737-1.046.824-2.377 1.263-3.787 1.263zm0-4.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="font-bold text-2xl mb-2">{card.title}</div>
                    <p className="text-red-500 text-xl">
                      {card.price}{" "}
                      <span className="text-gray-500"> / Per Person</span>
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {card.days}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {card.age}
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
