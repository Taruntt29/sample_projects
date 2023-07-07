import React from "react";
import BannerSlider from "../components/home/BannerSlider";
import LogoBox from "../components/home/LogoBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/common/Footer";
import RecuritSection from "../components/home/RecuritSection";
import Register from "../components/home/Register";
import BrowseJobs from "../components/home/BrowseJobs";
import LatestArticles from "../components/home/LatestArticles";
import TestimonialSlider from "../components/home/TestimonialSlider";
import DeliverSection from "../components/home/DeliverSection";
import Navbar from "../components/common/Navbar";
import WeAreHere from "../components/home/WeAreHere";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-[110px]">
        <BannerSlider />
      </div>
      <LogoBox />
      <DeliverSection />
      <WeAreHere />
      <BrowseJobs />
      <Register />
      <TestimonialSlider />
      <LatestArticles />
      <RecuritSection />
      <Footer />
    </div>
  );
};

export default Home;
