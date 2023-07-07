import React from "react";
import BannerCommon from "../components/common/BannerCommon";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import TestimonialDetail from "../components/testimonial/TestimonialDetail";
const Testimonial = () => {
  return (
    <div>
      <Navbar bgcolor />
      <BannerCommon
        img="/assets/images/banner-testimonial.png"
        title="Testimonial"
        smalltitle="See What People Says About Us"
      />
      <TestimonialDetail />
      <Footer />
    </div>
  );
};

export default Testimonial;
