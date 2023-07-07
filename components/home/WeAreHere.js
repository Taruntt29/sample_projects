import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const CompanyDetail = [
  {
    id: 1,
    imagesrc: "/assets/images/verified-account.png",
    position: "Attendants",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    button: "Read More",
  },
  {
    id: 2,
    imagesrc: "/assets/images/nurse.png",
    position: "Nurses",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    button: "Read More",
  },
  {
    id: 3,
    imagesrc: "/assets/images/elderly.png",
    videourl: "/assets/video/video1.mp4",
    position: "Elderly Care",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    button: "Read More",
  },
  {
    id: 4,
    imagesrc: "/assets/images/boy.png",
    description:
      "We collect reviews from our users so you can get an honest opinion of what an experience honest with our website are really like.",
    button: "Read More",
    position: "Baby Care",
  },
];
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 8000,
  cssEase: "linear",
  arrows: true,
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
const WeAreHere = () => {
  return (
    <div
      className="  bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage: `url(${"/assets/images/article.png"})` }}
    >
      <div className="backdrop-blur-[1.5px] py-16">
      <div className="container mx-auto py-4  lg:px-0 px-5 ">
        <h6 className="text-primary font-s-medium">WE ARE HERE</h6>
        <h3 className="text-3xl text-secondary lg:w-[80%] w-full py-2 font-s-bold">
          We can help you to find out the Best Care for your Loved Onces
        </h3>
        <p className="lg:w-[80%] w-full py-2 text-justify">
          Adipiscing elit, sed do eiusmod tempor incididunt ut dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud ullamco. Adipiscing
          elit, sed do eiusmod tempor incididunt ut dolore magna Adipiscing
        </p>
      </div>

      <div className=" w-[90%] md:w-[100%] mx-auto lg:px-10 listSlider">
        <Slider className="container mx-auto w-[90%] md:w-[100%]" {...settings}>
          {CompanyDetail.map((item, index) => (
            <div className="px-4" key={index}>
              <div className="group">
                <div className="bg-white group-hover:bg-primary duration-500 relative rounded-md py-4">
                  <div className="">
                    <img
                      src="/assets/images/quotes.png"
                      alt="/"
                      className="absolute -top-10 right-3 w-20"
                    />
                  </div>
                  <div className="px-4">
                    <img src={item.imagesrc} alt="/" className=" w-20" />
                  </div>
                  <p className="px-4 pt-4 group-hover:text-white font-s-bold duration-500">
                    {" "}
                    {item.position}
                  </p>
                  <p className=" duration-500 text-[#010101] group-hover:text-white px-4 py-2 text-sm text-justify ">
                    {item.description}
                  </p>
                  <div className="px-4 py-2">
                    {" "}
                    <Link>
                      {" "}
                      <button className="border-2 text-sm border-primary font-s-medium duration-500 group-hover:border-white group-hover:text-white rounded-md  px-4 py-0.5 text-primary">
                        {item.button}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      </div>
    </div>
  );
};

export default WeAreHere;
