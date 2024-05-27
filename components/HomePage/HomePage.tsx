/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";

import Login from "../Login Register/Login";
import Register from "../Login Register/Register";
import Feature from "./Feature";
import Footer from "./Footer/Footer";
import HeaderNav from "./Header/HeaderNav";
import HeroSection from "./HeroSection/HeroSection";
import SearchSection from "./HeroSection/SearchSection";
import PopularDestinations from "./PopularDestinations";
import TopRated from "./TopRated";
import Tours from "./Tours";

interface Category {
  id: number;
  name: string;
  icon: string;
  slug: string;
  tour_count: number;
}

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCategories();
  }, [apiUrl]);

  const filteredCategories = categories.filter(
    (category) => category.tour_count > 0
  );

  return (
    <>
      <div className="content-wrapper">
        <HeroSection />
        <SearchSection />
        <TopRated categories={filteredCategories} />
        <Feature categories={filteredCategories.slice(0, 3)} />
        <PopularDestinations categories={filteredCategories} />
        <Tours />
      </div>
    </>
  );
};

export default HomePage;
