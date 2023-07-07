import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MdLocationPin, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsChevronLeft, BsChevronRight, BsFillBagFill } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { Dialog, Transition } from "@headlessui/react";

const BrowseCandidate = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [state, setState] = useState({
    experience: "",
    companyName: "",
    category: "",
    location: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const jobData = [
    {
      id: 1,
      logourl: "/assets/images/employee.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 2,
      logourl: "/assets/images/employee2.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 3,
      logourl: "/assets/images/employee2.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 4,
      logourl: "/assets/images/employee.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 5,
      logourl: "/assets/images/employee.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 6,
      logourl: "/assets/images/employee.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 7,
      logourl: "/assets/images/employee2.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 8,
      logourl: "/assets/images/employee.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 9,
      logourl: "/assets/images/employee.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
    {
      id: 10,
      logourl: "/assets/images/employee2.png",
      text: "Featured",
      name: "Wanda Montgomery",
      post: "Nurse",
      profile: "View Profile",
      location: "Mumbai, Maharastra",
      cost: "$20k/month",
    },
  ];

  return (
    <>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          {" "}
          <div className="flex items-center mb-4 font-s-medium ">
            <Link to="/hospital" className="flex items-center space-x-2 text-primary text-lg">
              {" "}
              <RiArrowLeftSLine className="text-3xl" /> Candidates
            </Link>{" "}
          </div>
          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="container mx-auto pb-10 md:pt-5">
              <div className=" grid lg:grid-cols-7 grid-cols-1 gap-4 pt-10">
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
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Company Name
                      </p>
                      <div className="flex pt-2  ">
                        <input
                          className="lg:px-3  lg:pl-2 pl-1  py-2 w-full lg:placeholder:text-sm placeholder:text-xs rouneded-l-[3px]"
                          type="text"
                          id="job"
                          name="companyName"
                          value={state.companyName}
                          placeholder=" Job Title and Keyword"
                          onChange={handleChange}
                        />
                        <div className="  py-3 lg:pr-2 pr-1 bg-white rounded-r-[3px]">
                          <img src="/assets/images/magnifying-glass.png" />
                        </div>
                      </div>
                    </div>
                    <div className="pb-5">
                      <p className="font-s-medium lg:text-lg text-base ">
                        {" "}
                        Category{" "}
                      </p>

                      <select
                        className="mt-2  w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
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
                        Job Type{" "}
                      </p>
                      <div className="flex flex-col gap-3 pt-3">
                        <div className="flex gap-2 ">
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
                        Date Post{" "}
                      </p>

                      <div className="flex flex-col gap-3 pt-3">
                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Last Hour
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Last 24 Hours
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Last 7 Days
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Last 30 Days
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            All
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pb-5">
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Hospital Type{" "}
                      </p>

                      <div className="flex flex-col gap-3 pt-3">
                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Specialty Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            General Medical & Surgical Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Clinics
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Teaching Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Psychiatric Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Hospices & Palliative Care Centers
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Dental Laboratories
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
                            15-20k/Month
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
                            35-40k/Month
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
                            45-50k/Month
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
                            55-70k/Month
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
                            75-90k/Month
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
                            More than 90k/Month
                          </label>
                        </div>
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
                          <h3 className=" md:px-8 px-5 pt-40 text-white font-s-bold text-4xl ">
                            Recruiting?
                          </h3>
                          <p className=" md:px-8 px-5 pt-5 text-white font-s-medium">
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
                    <div className="grid md:grid-cols-2 grid-cols-1   mx-auto lg:pt-20 gap-12 gap-y-16   items-center justify-items-center">
                      {jobData.map((item, id) => {
                        return (
                          <>
                            <div
                              className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative mt-6 border border-[#707070] "
                              key={id}
                            >
                              <div className="">
                                <div className="absolute flex bg-white shadow-md shadow-[#2544EE30] rounded-2xl -top-10 left-[7.9rem]">
                                  <img
                                    src={item.logourl}
                                    alt="/"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <div className="px-32 mt-7 md:mt-16">
                                    {" "}
                                    <div className="bg-lightcolor text-primary rounded-md font-s-medium text-center px-3 text-sm py-1">
                                      {item.text}
                                    </div>{" "}
                                  </div>

                                  <div className="text-center font-s-medium text-base">
                                    {" "}
                                    {item.name}
                                  </div>
                                  <div className="text-center font-s-normal  text-sm text-gray-400">
                                    {item.post}
                                  </div>
                                  <Link to="/hospital/detail-candidate">
                                    {" "}
                                    <div className="text-center font-s-bold text-base text-primary">
                                      {item.profile}
                                    </div>{" "}
                                  </Link>
                                </div>
                                <div className="bg-primary rounded-b-xl py-3 lg:mt-4">
                                  <div className="grid grid-cols-2 gap-2 px-3">
                                    <div className="flex ">
                                      <MdLocationPin className="text-white" />
                                      <div className="text-sm text-white">
                                        {item.location}
                                      </div>
                                    </div>

                                    <div className="flex justify-end text-white  text-sm">
                                      {item.cost}{" "}
                                    </div>
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
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Company Name
                      </p>
                      <div className="flex pt-2  ">
                        <input
                          className="lg:px-3  lg:pl-2 pl-1  py-2 w-full lg:placeholder:text-sm placeholder:text-xs rouneded-l-[3px]"
                          type="text"
                          id="job"
                          name="companyName"
                          value={state.companyName}
                          placeholder=" Job Title and Keyword"
                          onChange={handleChange}
                        />
                        <div className="  py-3 lg:pr-2 pr-1 bg-white rounded-r-[3px]">
                          <img src="/assets/images/magnifying-glass.png" />
                        </div>
                      </div>
                    </div>
                    <div className="pb-5">
                      <p className="font-s-medium lg:text-lg text-base ">
                        {" "}
                        Category{" "}
                      </p>

                      <select
                        className="mt-2  w-full py-[13px] text-gray-400 text-sm text-left rounded-[3px]"
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
                        Job Type{" "}
                      </p>

                      <div className="flex flex-col gap-3 pt-3">
                        <div className="flex gap-2 ">
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
                        Date Post{" "}
                      </p>

                      <div className="flex flex-col gap-3 pt-3">
                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Last Hour
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Last 24 Hours
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Last 7 Days
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Last 30 Days
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            All
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pb-5">
                      <p className="font-s-medium lg:text-lg text-base">
                        {" "}
                        Hospital Type{" "}
                      </p>

                      <div className="flex flex-col gap-3 pt-3">
                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Specialty Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            General Medical & Surgical Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Clinics
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Teaching Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Psychiatric Hospitals
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Hospices & Palliative Care Centers
                          </label>
                        </div>

                        <div className="flex gap-2 ">
                          <input type="checkbox" id="html" />
                          <label className="text-sm font-s-medium" for="html">
                            Dental Laboratories
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
                            15-20k/Month
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
                            35-40k/Month
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
                            45-50k/Month
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
                            55-70k/Month
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
                            75-90k/Month
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
                            More than 90k/Month
                          </label>
                        </div>
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
      </div>
    </>
  );
};

export default BrowseCandidate;
