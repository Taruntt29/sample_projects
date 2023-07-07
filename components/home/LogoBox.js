import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const tData = [
  {
    id: 1,
    img: "/assets/images/google-icon.png",
  },
  {
    id: 2,
    img: "/assets/images/airbnb.png",
  },
  {
    id: 3,
    img: "/assets/images/dropbox.png",
  },
  {
    id: 4,
    img: "/assets/images/fed-ex.png",
  },
  {
    id: 5,
    img: "/assets/images/walmart.png",
  },
  {
    id: 6,
    img: "/assets/images/google-icon.png",
  },
  {
    id: 7,
    img: "/assets/images/airbnb.png",
  },
  {
    id: 8,
    img: "assets/images/dropbox.png",
  },
];
const LogoBox = () => {
  const settingTestominal = {
    dots: false,
    infinite: true,
    speed: 1500,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
    accessibility: true,
    cssEase: "linear",
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
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
    <div className="container lg:px-5 px-5 py-5 mx-auto lg:pt-[50px]">
      <div className="py-10 listPage">
        <Slider
          {...settingTestominal}
          className="p-0 w-[100%] md:w-full mx-auto bg-white shadowblack px-6 rounded-md  py-8 "
        >
          {tData.map((t) => (
            <>
              <div className="flex items-center justify-center ">
                <div className=" bg-white p-2 rounded-md">
                  <img src={t.img} alt=" " />
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoBox;
