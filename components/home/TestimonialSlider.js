import React from "react";

import Slider from "react-slick";
const CompanyDetail = [
  {
    id: 1,
    imagesrc: "/assets/images/img-1.png",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    name: "Collis Pong",
    position: "Web Developer",
  },
  {
    id: 2,
    imagesrc: "/assets/images/img-1.png",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    name: "Collis Pong",
    position: "Web Developer",
  },
  {
    id: 3,
    imagesrc: "/assets/images/img-1.png",
    videourl: "/assets/video/video1.mp4",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    name: "Collis Pong",
    position: "Web Developer",
  },
  {
    id: 4,
    imagesrc: "/assets/images/img-1.png",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    name: "Collis Pong",
    position: "Web Developer",
  },
];
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 8000,
  cssEase: "linear",
  arrows: false,
  loop: true,
  autoplaySpeed: 0,
  accessibility: true,
  swipeToSlide: true,
  //arrows: true,
  //nextArrow: <SampleNextArrow />,
  //prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
        speed: 4000,
      },
    },
  ],
};
const TestimonialSlider = () => {
  return (
    <div
      className="bg-norepeat bg-cover py-28 w-[80%] mx-auto"
      style={{ backgroundImage: `url(${"/assets/images/pattern.png"})` }}
    >
      <div className="text-center">
        <h6 className="text-primary font-s-medium text-2xl">
          CLIENT SAYS ABOUT US
        </h6>
        <h4 className="text-4xl font-s-bold text-secondary">
          Best Caregiving Services in the World
        </h4>
      </div>
      <div className="lg:w-[80%] w-full mx-auto pt-16">
        <Slider
          className="container mx-auto w-[80%] shadow md:w-[100%]"
          {...settings}
        >
          {CompanyDetail.map((item, index) => (
            <div className="px-4" key={index}>
              <div className="">
                <div className="bg-white shadow-box p-3 flex flex-col justify-center items-center relative rounded-md py-6">
                  <div className="">
                    <img
                      src="/assets/images/quotes.png"
                      alt="/"
                      className="absolute -top-10 right-3 w-20"
                    />
                  </div>
                  <div className="grid grid-cols-6 justify-items-end w-full ">
                    <div className="lg:flex justify-center items-center col-span-4">
                      <img src={item.imagesrc} alt="/" className=" w-20" />
                      <div>
                        <p className="font-s-bold lg:px-4 ">{item.name}</p>
                        <p className=" lg:px-4 whitespace-nowrap">
                          {item.position}
                        </p>
                      </div>
                    </div>

                    <div className=" col-span-2">
                      {" "}
                      <img
                        alt="images"
                        src="/assets/images/quote.png"
                        className="w-10 "
                      />
                    </div>
                  </div>
                  <p className="font-s-medium text-[#010101] lg:px-4 py-2 text-sm text-justify pb-10">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
