/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

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

const HomePage = () => {
  return (
    <>
      <div className="content-wrapper">
        <HeroSection />
        <SearchSection />
        <TopRated />
        <Feature />
        <PopularDestinations />
        <Tours />
      </div>
    </>
  );
};

export default HomePage;
