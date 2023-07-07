import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MdLocationPin, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import { GiSettingsKnobs } from "react-icons/gi";

const ListPage = () => {
  const [state, setState] = useState({
    experience: "0",
    skill: "",
    level: "",
    gender: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const jobData = [
    {
      id: 1,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "New",
      post: "Baby Care",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 2,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Internship",
      post: "Elderly Care",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 3,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Part-Time",
      post: "Attendants",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 4,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Freelancer",
      post: "Elderly Care",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 5,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Internship",
      post: "Nurse",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 6,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Fulltime Sixth",
      post: "Senior Nurse",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 7,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Internship",
      post: "Attendants",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 8,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Fulltime",
      post: "Elderly Care",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 9,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "New",
      post: "Senior Nurse",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
  ];

  const tData = [
    {
      id: 1,
      title: " Top Hospitals",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 2,
      title: " Specialty Hospitals",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 3,
      title: " Clinics",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 4,
      title: "Psychiatric Hospitals",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 5,
      title: "General Hospitals",
      subtext: " 1.3k+ Companies",
    },
    {
      id: 6,
      title: " Top Hospitals",
      subtext: " 1.3k+ Companies",
    },
  ];

  const [timedata, setTimedata] = useState([
    {
      id: 1,
      time: "Recent",
      isSelected: false,
    },
    {
      id: 2,
      time: "< 7 Days",
      isSelected: false,
    },
    {
      id: 3,
      time: "< 15 Days",
      isSelected: false,
    },
    {
      id: 4,
      time: " < 20 Days",
      isSelected: false,
    },
  ]);

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
        breakpoint: 400,
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
      <div className="container mx-auto py-10 md:px-0 px-5">
        <div className="md:pt-24">
          <p className="text-4xl text-grey font-s-bold text-center">
            {" "}
            Get your Dream Job{" "}
          </p>
          <div className="border-2 border-primary rounded-md p-3 grid md:grid-cols-4 gap-5 mt-3">
            <div className="">
              <select
                className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left border border-primary  rounded-xl"
                id="title"
                name="title"
              >
                <option className="text-sm " value="title">
                  Job Title
                </option>
                <option value="skill2">Nurse</option>
                <option value="skill3">Senior Nurse</option>
                <option value="skill4">Nurse</option>
              </select>
            </div>

            <div className="">
              <select
                className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left border border-primary  rounded-xl"
                id="title"
                name="title"
              >
                <option className="text-sm " value="title">
                  All Category
                </option>
                <option value="title1">Category1</option>
                <option value="title2">Category2</option>
                <option value="title3">Category3</option>
              </select>
            </div>

            <div className="mt-2">
              <div className="flex p-1   border border-primary  rounded-xl  ">
                <input
                  className="lg:px-3  lg:pl-2 pl-1  py-2  w-full lg:placeholder:text-sm placeholder:text-xs"
                  type="text"
                  id="job"
                  name=""
                  placeholder=" location...."
                />
                <div className="  py-3 lg:pr-2 pr-1 bg-white rounded-r-[3px]">
                  <MdLocationPin />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <button className="bg-primary w-full hover:bg-secondary font-s-medium py-3 rounded text-white">
                Find Job
              </button>
            </div>
          </div>
          <div className="py-10 listPage">
            <Slider
              {...settingTestominal}
              className="p-0 w-[100%] md:w-full mx-auto bg-lightcolor px-6 rounded-md  py-8 "
            >
              {tData.map((t) => (
                <>
                  <div className="flex items-center justify-center ">
                    <div className=" bg-white p-2 rounded-md">
                      <p className="font-s-medium"> {t.title} </p>
                      <Link>
                        {" "}
                        <div className="flex items-center  gap-5">
                          <p className="font-s-normal text-sm text-primary">
                            {" "}
                            {t.subtext}
                          </p>{" "}
                          <span className="">
                            {" "}
                            <MdOutlineKeyboardArrowRight className=" text-secondary" />{" "}
                          </span>
                        </div>{" "}
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>

        <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8 md:pt-10">
          <div className="lg:col-span-2 lg:px-0 px-5">
            {/* edit mobile start */}
            <div className="bg-slate-50 p-2 md:hidden block">
              <button
                type="button"
                onClick={openModal}
                className="w-full flex items-center gap-2 justify-center"
              >
                <GiSettingsKnobs />
                <span>Edit Filter</span>
              </button>
            </div>
            {/* edit mobile end */}
            <div className="bg-lightcolor p-5 rounded-lg md:block hidden">
              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base ">
                  {" "}
                  Category{" "}
                </p>

                <select
                  className="mt-2 px-2 w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
                  id="category"
                  name="category"
                  value={state.category}
                  onChange={handleChange}
                >
                  <option className="text-sm " value="category1">
                    Category 1
                  </option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                  <option value="category4">Category 4</option>
                </select>
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base "> Skill </p>

                <select
                  className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                  id="skill"
                  name="skill"
                  value={state.skill}
                  onChange={handleChange}
                >
                  <option className="text-sm " value="skill1">
                    Skill 1
                  </option>
                  <option value="skill2">Skill 2</option>
                  <option value="skill3">Skill 3</option>
                  <option value="skill4">Skill 4</option>
                </select>
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base ">
                  {" "}
                  Career Level
                </p>

                <select
                  className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                  id="level"
                  name="level"
                  value={state.level}
                  onChange={handleChange}
                >
                  <option className="text-sm " value="level1">
                    Career Level
                  </option>
                  <option value="level2">level 2</option>
                  <option value="level3">level 3</option>
                  <option value="level4">level 4</option>
                </select>
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base ">Gender </p>

                <select
                  className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                  id="gender"
                  name="gender"
                  value={state.gender}
                  onChange={handleChange}
                >
                  <option className="text-sm " value="Gender1">
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="pb-7">
                <p className="font-s-medium lg:text-lg text-base"> Job Type </p>

                <div className="flex flex-col gap-3 pt-3">
                  <div className="flex gap-2  ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Freelance
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Full Time
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Internship
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Part Time
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Temporary
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input type="checkbox" id="text" />
                    <label className="text-sm font-s-medium" for="text">
                      {" "}
                      Volunteer
                    </label>
                  </div>
                </div>
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base"> Salary </p>

                <div className="flex flex-col gap-3 pt-3">
                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label className="text-sm font-s-medium" for="html">
                      0-3 Lakhs
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label className="text-sm font-s-medium" for="html">
                      3-6 Lakhs
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label className="text-sm font-s-medium" for="html">
                      6-10 Lakhs
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label className="text-sm font-s-medium" for="html">
                      10-15 Lakhs
                    </label>
                  </div>

                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label className="text-sm font-s-medium" for="html">
                      15-25 Lakhs
                    </label>
                  </div>
                  <div className="flex gap-2 ">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label className="text-sm font-s-medium" for="html">
                      More than 25 Lakhs
                    </label>
                  </div>
                </div>
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base">
                  {" "}
                  Job Posted
                </p>
                <div className="grid grid-cols-3 gap-2 pt-5">
                  {timedata.map((item, id) => {
                    return (
                      <>
                        <div
                          key={item}
                          onClick={() => {
                            const newState = timedata.map((i) => {
                              if (item.id === i.id) {
                                return { ...i, isSelected: !item.isSelected };
                              } else {
                                return i;
                              }
                            });
                            console.log(newState);
                            setTimedata(newState);
                          }}
                        >
                          <div
                            className={
                              item.isSelected
                                ? "bg-primary text-white text-xs px-3 py-2 rounded-md cursor-pointer "
                                : "bg-white text-black text-xs px-3 py-2 rounded-md cursor-pointer"
                            }
                          >
                            {" "}
                            {item.time}{" "}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="pb-5">
                <p className="font-s-medium lg:text-lg text-base">
                  {" "}
                  Experience
                </p>
                <div className="slider">
                  <p className=" border border-secondary w-[12%] h-full text-sm  px-1 lg:mt-2">
                    {" "}
                    {state.experience}{" "}
                  </p>
                  <input
                    className=" w-full lg:mt-2"
                    type="range"
                    value={state.experience}
                    name="experience"
                    onChange={handleChange}
                    step="1"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>

            <div className="pt-8 pb-12 md:block hidden">
              <div
                className="bg-cover h-[60vh] w-full"
                style={{
                  backgroundImage: `url("/assets/images/recruting.png")`,
                }}
              >
                <div className=" bg-primary/50  h-[60vh] relative flex md:justify-center rounded-lg ">
                  <div>
                    <h3 className=" md:px-8 px-5 pt-40 text-white font-semibold text-4xl font-s-medium">
                      Recruiting?
                    </h3>
                    <p className=" md:px-8 px-5 pt-5 text-white font-s-normal">
                      {" "}
                      Get Best Matched Jobs On your Email. Add Resume NOW!{" "}
                    </p>
                    <div className="px-8 py-3">
                      <button className="bg-white text-primary hover:bg-primary hover:text-white px-6 py-1 rounded-md">
                        {" "}
                        Read More{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid md:grid-cols-3 md:px-10 lg:py-0 py-10">
              <p className="md:col-span-1 text-lg font-s-medium  flex items-end">
                {" "}
                Showing 2,150 jobs{" "}
              </p>
              <div className="md:col-span-2 ">
                <div className="md:flex gap-4 md:pt-2 pt-4 items-end justify-end">
                  <p className="text-lg  font-s-medium"> Sort By </p>
                  <select
                    className="bg-primary text-white px-5 py-2 lg:mt-0 mt-2 md:w-[40%] w-full rounded-[3px]"
                    name="update"
                    id="update"
                  >
                    <option value="category1">Most Recent</option>
                    <option value="category2">Last Updated</option>
                    <option value="category3">Category 3</option>
                    <option value="category4">Category 4</option>
                  </select>
                  <select
                    className="bg-primary text-white px-5 py-2 lg:mt-0 mt-5 md:w-[30%] w-full rounded-[3px]"
                    name="last"
                    id="last"
                  >
                    <option value="category1">Show 10</option>
                    <option value="category2">Show 20</option>
                    <option value="category3">Show 30</option>
                    <option value="category4">Show 40</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 mx-auto lg:pt-20 gap-8 gap-y-10 md:px-6  items-center justify-items-center">
                {jobData.map((item, id) => {
                  return (
                    <>
                      {id % 6 === 0 && id > 1 && (
                        <div className="">
                          {" "}
                          <div className="pt-10">
                            <div className="bg-primary  grid md:grid-cols-5 gap-3 items-center justify-center px-10 py-8 rounded-md">
                              <img
                                className="col-span-1"
                                src="/assets/images/icon-extra.png"
                                alt="image"
                              />
                              <p className="font-s-normal text-white col-span-3">
                                {" "}
                                Create your{" "}
                                <span className="font-s-medium">
                                  Job Profile
                                </span>{" "}
                                for free on Trusted Healthcare to explore top{" "}
                                <span className="font-s-medium"> Jobs </span>{" "}
                                applied by your peers!
                              </p>

                              <div className=" col-span-1 rounded-md bg-white hover:bg-secondary">
                                {" "}
                                <Link to="/professional-signup"></Link>{" "}
                                <p className=" text-primary font-s-normal text-sm text-center py-2 px-3">
                                  {" "}
                                  Register Now{" "}
                                </p>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="">
                        <div
                          className="bg-white box-shadow  rounded-xl relative  pb-7"
                          key={id}
                        >
                          <div className="grid md:grid-cols-12 gap-2 md:px-0 px-5">
                            <div className="md:col-span-2 flex justify-between items-center">
                              <div className="md:absolute flex md:p-5 bg-white box-shadow1 rounded-xl left-[34%]  lg:-bottom-3   md:left-2">
                                <img
                                  src={item.logourl}
                                  alt="/"
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <div className="md:hidden block">
                                <div
                                  className={`{ text-white font-s-medium text-sm px-3  text-center rounded-md py-[0.32rem] mb-7  ${
                                    item.category === "Internship"
                                      ? "bg-[#AB6B35]"
                                      : item.category === "Fulltime"
                                      ? "bg-[#8C82EA]"
                                      : item.category === "Part-Time"
                                      ? " bg-[#D2628C]"
                                      : item.category === "Freelancer"
                                      ? " bg-[#2D9BB3]"
                                      : "bg-[#41B249]"
                                  }`}
                                >
                                  {item.category}
                                </div>
                              </div>
                            </div>
                            <div className="md:col-span-5 lg:pl-8 pl-3 md:pt-8 pt-10">
                              <div className="flex flex-col gap-3 lg:pt-0 ">
                                <div className=" ">
                                  <Link to="/job-detail">
                                    {" "}
                                    <p className="text-base font-s-medium text-primary ">
                                      {item.post}
                                    </p>
                                  </Link>
                                </div>
                                <div className="">
                                  <p className="text-[#060606] text-sm  font-s-medium text-opacity-70">
                                    {item.address}
                                  </p>
                                </div>
                                <div className="">
                                  <p className="text-primary text-sm font-s-medium ">
                                    {item.link}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="md:col-span-2  flex md:justify-center md:items-start lg:pt-8 md:px-0 px-4">
                              <div className="text-[#41B249] font-s-medium ">
                                {item.days} days ago
                              </div>
                            </div>
                            <div className="md:col-span-3 md:pr-3 gap-3 md:pt-0  md:px-0 px-4 flex flex-col md:justify-end md:items-end">
                              <div className="md:block hidden">
                                <div
                                  className={`{ text-white font-s-medium text-sm px-3  text-center rounded-md py-[0.32rem] mb-3 ${
                                    item.category === "Internship"
                                      ? "bg-[#AB6B35]"
                                      : item.category === "Fulltime"
                                      ? "bg-[#8C82EA]"
                                      : item.category === "Part-Time"
                                      ? " bg-[#D2628C]"
                                      : item.category === "Freelancer"
                                      ? " bg-[#2D9BB3]"
                                      : "bg-[#41B249]"
                                  }`}
                                >
                                  {item.category}
                                </div>
                              </div>
                              <div className="font-s-medium  text-[13px]">
                                {item.minsal} - {item.maxsal} / {item.time}
                              </div>
                              <Link to="/job-detail">
                                {" "}
                                <div className="text-primary text-base cursor-pointer font-s-medium">
                                  Browse
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className=" hidden md:flex items-center justify-center pt-16 bg-white px-4 py-3 sm:px-6">
              <div className="flex flex-1 justify-between sm:hidden">
                <a
                  href="/job-search"
                  className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="/job-search"
                  className="relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
              <div className=" flex  items-center justify-between">
                <div>
                  <nav
                    className="isolate inline-flex gap-2 -space-x-px rounded-md "
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                    >
                      <span className="sr-only">Previous</span>
                      <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </a>
                    {/* Current: "z-10 bg-indigo-50 border-secondary text-indigo-600", Default: "bg-white text-grey hover:bg-gray-50" */}
                    <a
                      href="#"
                      aria-current="page"
                      className="relative z-10 inline-flex items-center  bg-primary px-4 py-2 text-sm font-medium text-white focus:z-20"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="relative hidden items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                    >
                      3
                    </a>
                    <span className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700">
                      ...
                    </span>
                    <a
                      href="#"
                      className="relative hidden items-center bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20 md:inline-flex"
                    >
                      8
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                    >
                      9
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                    >
                      10
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md  bg-white px-2 py-2 text-sm font-medium text-grey hover:bg-gray-50 focus:z-20"
                    >
                      <span className="sr-only">Next</span>
                      <BsChevronRight className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal start */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base ">
                      {" "}
                      Category{" "}
                    </p>

                    <select
                      className="mt-2 px-2 w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
                      id="category"
                      name="category"
                      value={state.category}
                      onChange={handleChange}
                    >
                      <option className="text-sm " value="category1">
                        Category 1
                      </option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                      <option value="category4">Category 4</option>
                    </select>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base ">
                      {" "}
                      Skill{" "}
                    </p>

                    <select
                      className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                      id="skill"
                      name="skill"
                      value={state.skill}
                      onChange={handleChange}
                    >
                      <option className="text-sm " value="skill1">
                        Skill 1
                      </option>
                      <option value="skill2">Skill 2</option>
                      <option value="skill3">Skill 3</option>
                      <option value="skill4">Skill 4</option>
                    </select>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base ">
                      {" "}
                      Career Level
                    </p>

                    <select
                      className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                      id="level"
                      name="level"
                      value={state.level}
                      onChange={handleChange}
                    >
                      <option className="text-sm " value="level1">
                        Career Level
                      </option>
                      <option value="level2">level 2</option>
                      <option value="level3">level 3</option>
                      <option value="level4">level 4</option>
                    </select>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base ">
                      Gender{" "}
                    </p>

                    <select
                      className="mt-2  w-full py-[13px] px-2 text-gray-400 text-sm text-left rounded-[3px]"
                      id="gender"
                      name="gender"
                      value={state.gender}
                      onChange={handleChange}
                    >
                      <option className="text-sm " value="Gender1">
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="pb-7">
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Job Type{" "}
                    </p>

                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2  ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Freelance
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Full Time
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Internship
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Part Time
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Temporary
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" id="text" />
                        <label className="text-sm font-s-medium" for="text">
                          {" "}
                          Volunteer
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Salary{" "}
                    </p>

                    <div className="flex flex-col gap-3 pt-3">
                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          0-3 Lakhs
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          3-6 Lakhs
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          6-10 Lakhs
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          10-15 Lakhs
                        </label>
                      </div>

                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          15-25 Lakhs
                        </label>
                      </div>
                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className="text-sm font-s-medium" for="html">
                          More than 25 Lakhs
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pb-5">
                    <p className="font-s-medium lg:text-lg text-base">
                      {" "}
                      Experience
                    </p>
                    <div className="slider">
                      <p className=" border border-secondary w-[12%] h-full text-sm  px-1 lg:mt-2">
                        {" "}
                        {state.experience}{" "}
                      </p>
                      <input
                        className=" w-full lg:mt-2"
                        type="range"
                        value={state.experience}
                        name="experience"
                        onChange={handleChange}
                        step="1"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      View Results
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* modal end */}
    </>
  );
};

export default ListPage;
