/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const HeroSection = () => {
  const parallaxRef1 = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

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

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random`,
          {
            params: { query: "travel", orientation: "landscape" },
            headers: {
              Authorization: `Client-ID ${accessKey}`,
            },
          }
        );
        setImageUrl(response.data.urls.full);
      } catch (error) {
        console.error("Error fetching image from Unsplash", error);
      }
    };

    fetchImage();
  }, [accessKey]);

  return (
    <div id="home">
      <section className="no-top no-bottom" aria-label="section-slider">
        <div className="relative overflow-hidden">
          <div
            className="h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageUrl})`,
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
                  href="/destination"
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
