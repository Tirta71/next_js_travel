/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const parallaxRef1 = useRef(null);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (parallaxRef1.current) {
      parallaxRef1.current.style.transform = `translateY(${offset * 0.5}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home">
      <section className="no-top no-bottom" aria-label="section-slider">
        <div className="relative overflow-hidden">
          <div
            className="h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/random/1600x900/?travel')",
            }}
            ref={parallaxRef1}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Amazing Diversity on Travel
                </h1>
                <p className="text-xl md:text-2xl mb-6">For your vacations</p>
                <a
                  href="#"
                  className="px-8 py-3 bg-[#ff9219] text-white rounded hover:bg-white transition"
                >
                  More Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
