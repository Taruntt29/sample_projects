import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  const sliderData = [
    {
      id: 1,
      img: "/assets/images/home-banner-1.png",
      heading: "WE MAKE A DIFFERENCE IN YOUR LIVES",
      title: "Delivering Peace Of Mind With Our Care",
    },
    {
      id: 2,
      img: "/assets/images/home-banner-1.png",
      heading: "WE MAKE A DIFFERENCE IN YOUR LIVES",
      title: "Delivering Peace Of Mind With Our Care",
    },
    {
      id: 3,
      img: "/assets/images/home-banner-1.png",
      heading: "WE MAKE A DIFFERENCE IN YOUR LIVES",
      title: "Delivering Peace Of Mind With Our Care",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    autoplaySpeed: 3000,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {sliderData.map((obj, e) => (
            <div key={e}>
              <div
                className="w-full flex items-center justify-center lg:h-[90vh] h-full bg-no-repeat bg-center bg-cover rounded-sm    text-white "
                style={{ backgroundImage: `url(${obj.img})` }}
              >
                <div className="md:flex flex-col items-center justify-center lg:px-0 px-10 lg:py-0 py-20 space-y-4 ">
                  <h4 className="font-semibold  md:text-xl text-lg text-center  capitalize ">
                    {obj.heading}
                  </h4>
                  <h2 className="lg:text-6xl text-3xl lg:w-[60%] w-full text-center font-s-bold tracking-wider">
                    {obj.title}
                  </h2>
                  <div className="pt-2 flex items-center justify-center">
                    <button className="bg-primary hover:bg-secondary px-6 rounded-md py-2 mt-2">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
