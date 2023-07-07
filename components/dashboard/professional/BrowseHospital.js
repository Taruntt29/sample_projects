import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsChevronLeft, BsChevronRight, BsFillBagFill } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { Dialog, Transition } from "@headlessui/react";

const jobData = [
  {
    id: 1,
    logourl: "/assets/images/logo2.png",
    name: "Max Hospital",
    text1: "Healthcare Institute",
    text2: "Healthcare Company",
    rating: "4 | 274 reviews",
  },
  {
    id: 2,
    logourl: "/assets/images/logo2.png",
    name: "Max Hospital",
    text1: "Healthcare Institute",
    text2: "Healthcare Company",
    rating: "4 | 274 reviews",
  },
  {
    id: 3,
    logourl: "/assets/images/logo2.png",
    name: "Max Hospital",
    text1: "Healthcare Institute",
    text2: "Healthcare Company",
    rating: "4 | 274 reviews",
  },
  {
    id: 4,
    logourl: "/assets/images/logo2.png",
    name: "Max Hospital",
    text1: "Healthcare Institute",
    text2: "Healthcare Company",
    rating: "4 | 274 reviews",
  },
  {
    id: 5,
    logourl: "/assets/images/logo2.png",
    name: "Max Hospital",
    text1: "Healthcare Institute",
    text2: "Healthcare Company",
    rating: "4 | 274 reviews",
  },
  {
    id: 6,
    logourl: "/assets/images/logo2.png",
    name: "Max Hospital",
    text1: "Healthcare Institute",
    text2: "Healthcare Company",
    rating: "4 | 274 reviews",
  },
  {
    id: 7,
    logourl: "/assets/images/logo2.png",
    name: "Max Hospital",
    text1: "Healthcare Institute",
    text2: "Healthcare Company",
    rating: "4 | 274 reviews",
  },
  {
    id: 8,
    logourl: "/assets/images/logo2.png",
    name: "Max Hospital",
    text1: "Healthcare Institute",
    text2: "Healthcare Company",
    rating: "4 | 274 reviews",
  },
  {
    id: 9,
    logourl: "/assets/images/logo2.png",
    name: "Max Hospital",
    text1: "Healthcare Institute",
    text2: "Healthcare Company",
    rating: "4 | 274 reviews",
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

const BrowseHospital = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [timedata, setTimedata] = useState([
    {
      id: 1,
      time: "5 hours",
      isSelected: false,
    },
    {
      id: 2,
      time: "10 hours",
      isSelected: false,
    },
    {
      id: 3,
      time: "15 hours",
      isSelected: false,
    },
    {
      id: 4,
      time: "20 hours",
      isSelected: false,
    },
    {
      id: 5,
      time: "25 hours",
      isSelected: false,
    },
  ]);

  const [state, setState] = useState({
    experience: "0",
    keyWord: "",
    category: "",
    location: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const settingTestominal = {
    dots: false,
    infinite: true,
    speed: 1500,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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
    <>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          <Link to="/professional">
            {" "}
            <div className="flex items-center mb-4 font-s-medium text-primary text-lg">
              <RiArrowLeftSLine className="text-3xl" /> Hospitals
            </div>
          </Link>

          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="container mx-auto py-6">
              <div className=" ">
                <p className="text-4xl text-grey font-s-bold text-center">
                  {" "}
                  Top Hospital Hiring Now
                </p>
                <div className="py-10 ">
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

              <div className=" grid lg:grid-cols-10 grid-cols-1 gap-4 pt-10">
                <div className="lg:col-span-3 lg:px-0 px-5">
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
                        name="category"
                        id="category"
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
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Keywords
                      </p>
                      <div className="flex pt-2  ">
                        <input
                          className="lg:px-3  lg:pl-2 pl-1  py-2 w-full lg:placeholder:text-sm placeholder:text-xs rouneded-l-[3px]"
                          type="text"
                          id="job"
                          name="keyWord"
                          value={state.keyWord}
                          placeholder=" Job Title and Keyword"
                          onChange={handleChange}
                        />
                        <div className="  py-3 lg:pr-2 pr-1 bg-white rounded-r-[3px]">
                          <img src="/assets/images/magnifying-glass.png" />
                        </div>
                      </div>
                    </div>

                    <div className="pb-7">
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Location
                      </p>
                      <div className="flex pt-2 ">
                        <input
                          className="lg:px-3  lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs rounded-l-[3px]  "
                          type="text"
                          id="loation"
                          name="location"
                          placeholder=" Search Location"
                          onChange={handleChange}
                          value={state.location}
                        />
                        <div className=" py-3 lg:pr-3 pr-1   bg-white rounded-r-[3px]">
                          <img
                            src="/assets/images/location.png "
                            className="pt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pb-7">
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Hospital Type{" "}
                      </p>

                      <div className="flex flex-col gap-3 pt-3">
                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Specialty Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            General Medical & Surgical Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Clinics
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Teaching Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Psychiatric Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Hospices & Palliative Care Centers
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Blood & Organ Banks
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Dental Laboratories
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pb-5">
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Hospital Duration
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
                                      return {
                                        ...i,
                                        isSelected: !item.isSelected,
                                      };
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
                                      ? "bg-primary text-white text-sm px-3 py-1 rounded-md "
                                      : "bg-white text-black text-sm px-3 py-1 rounded-md"
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
                  </div>

                  <div className="pt-8 md:pb-12 pb-8">
                    <div
                      className="bg-cover h-[60vh] w-full"
                      style={{
                        backgroundImage: `url("/assets/images/recruting.png")`,
                      }}
                    >
                      <div className=" bg-primary/50  h-[60vh] relative flex md:justify-center rounded-lg ">
                        <div>
                          <h3 className=" md:px-8 px-5 pt-40 text-white font-s-bold text-4xl ">
                            Recruiting?
                          </h3>
                          <p className=" md:px-8 px-5 pt-5 text-white font-s-normal">
                            {" "}
                            Get Best Matched Jobs On your Email. Add Resume NOW!{" "}
                          </p>
                          <div className="px-8 py-3">
                            <button className="bg-white text-primary hover:bg-primary hover:text-white px-6 py-1 rounded-md font-s-medium">
                              {" "}
                              Read More{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 ">
                  <div className="grid md:grid-cols-3 px-10 lg:py-0 py-10">
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
                    <div className="grid md:grid-cols-2 grid-cols-1  mx-auto md:pt-20 md:gap-8 gap-y-10   items-center justify-items-center">
                      {jobData.map((item, id) => {
                        return (
                          <>
                            {id % 6 === 0 && id > 1 && (
                              <div className="md:col-span-2">
                                {" "}
                                <div className="pt-10 px-5 lg:px-0">
                                  <div className="bg-primary  grid md:grid-cols-5  items-center justify-center gap-2 px-10 py-8 rounded-md">
                                    <img
                                      className="md:col-span-1 "
                                      src="/assets/images/icon-extra.png"
                                      alt="image"
                                    />
                                    <p className="font-s-normal text-white col-span-3">
                                      {" "}
                                      Create your{" "}
                                      <span className="font-s-medium">
                                        Job Profile
                                      </span>{" "}
                                      for free on Trusted Healthcare to explore
                                      top{" "}
                                      <span className="font-s-medium">
                                        {" "}
                                        Jobs{" "}
                                      </span>{" "}
                                      applied by your peers!
                                    </p>

                                    <div className=" col-span-1 rounded-md bg-white hover:bg-secondary">
                                      {" "}
                                      <Link to="/hospital-signup">
                                        {" "}
                                        <p className=" text-primary font-s-normal text-sm text-center py-2 px-5 md:px-0">
                                          {" "}
                                          Register Now{" "}
                                        </p>{" "}
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="">
                              <div
                                className="bg-white box-shadow  rounded-xl relative  md:pb-1 md:py-0 py-2 "
                                key={id}
                              >
                                <div className="grid grid-cols-12 gap-2 ">
                                  <div className="col-span-3">
                                    <div className="absolute flex md:p-2 bg-white box-shadow1 rounded-xl  md:-bottom-2 left-2">
                                      <img
                                        src={item.logourl}
                                        alt="/"
                                        width={85}
                                        height={85}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-span-9 py-2 pl-6 ">
                                    <div className="flex flex-col gap-1 lg:mt-2">
                                      <div className=" ">
                                        <Link to="/professional/detail-hospital">
                                          {" "}
                                          <p className="text-base text-primary text-center md:text-left font-s-medium ">
                                            {item.name}
                                          </p>{" "}
                                        </Link>
                                      </div>
                                      <div className="flex gap-2 items-center justify-center lg:justify-start">
                                        <img
                                          className="w-4 h-4"
                                          src="/assets/images/star.png"
                                          alt=""
                                        />
                                        <p className="text-[#060606] text-sm  font-s-medium text-opacity-70">
                                          {item.rating}
                                        </p>
                                      </div>

                                      <div className="grid grid-cols-4 gap-1 pr-2">
                                        <div className="col-span-2">
                                          <p className="text-[#707070] text-[10px] text-center font-s-medium px-1 py-1 border border-[#707070] rounded-md bg-white ">
                                            {item.text1}
                                          </p>
                                        </div>
                                        <div className="col-span-2">
                                          <p className="text-[#707070] text-[10px] text-center font-s-medium px-1 py-1  border border-[#707070] rounded-md bg-white ">
                                            {item.text2}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
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
                              <BsChevronLeft
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
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
                              <BsChevronRight
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
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
                        className="border mt-2 px-2 w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
                        name="category"
                        id="category"
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
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Keywords
                      </p>
                      <div className="flex pt-2">
                        <input
                          className="lg:px-3 border lg:pl-2 pl-1  py-2 w-full lg:placeholder:text-sm placeholder:text-xs rouneded-l-[3px]"
                          type="text"
                          id="job"
                          name="keyWord"
                          value={state.keyWord}
                          placeholder=" Job Title and Keyword"
                          onChange={handleChange}
                        />
                        <div className="  py-3 lg:pr-2 pr-1 bg-white rounded-r-[3px]">
                          <img src="/assets/images/magnifying-glass.png" />
                        </div>
                      </div>
                    </div>
                    <div className="pb-7">
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Location
                      </p>
                      <div className="flex pt-2 ">
                        <input
                          className="lg:px-3 border lg:pl-2 pl-1 w-full py-2 lg:placeholder:text-sm placeholder:text-xs rounded-l-[3px]  "
                          type="text"
                          id="loation"
                          name="location"
                          placeholder=" Search Location"
                          onChange={handleChange}
                          value={state.location}
                        />
                        <div className=" py-3 lg:pr-3 pr-1   bg-white rounded-r-[3px]">
                          <img
                            src="/assets/images/location.png "
                            className="pt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pb-7">
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Hospital Type{" "}
                      </p>

                      <div className="flex flex-col gap-3 pt-3">
                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Specialty Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            General Medical & Surgical Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Clinics
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Teaching Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Psychiatric Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Hospices & Palliative Care Centers
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Blood & Organ Banks
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="text" />
                          <label className="text-sm font-s-medium" for="text">
                            {" "}
                            Dental Laboratories
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pb-5">
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Hospital Duration
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
                                      return {
                                        ...i,
                                        isSelected: !item.isSelected,
                                      };
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
                                      ? "bg-primary text-white text-sm px-3 py-1 rounded-md "
                                      : "bg-white text-black text-sm px-3 py-1 rounded-md"
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

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        View Details
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* modal end */}
      </div>
    </>
  );
};

export default BrowseHospital;
