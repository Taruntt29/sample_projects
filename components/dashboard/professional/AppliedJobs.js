import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

let tablearr = [
  {
    id: "1",
    jobTitle: " Max Healthcare Hospital ",
    category: "Attandent",
    jobTypes: "Freelance",
    location: "Mumbai, Maharastra",
    appliedJobs: "24 Oct 2022",
  },

  {
    id: "2",
    jobTitle: " Max Healthcare Hospital ",
    category: "Elder care",
    jobTypes: "Full-Time",
    location: "Mumbai, Maharastra",
    appliedJobs: "24 Oct 2022",
  },

  {
    id: "3",
    jobTitle: " Max Healthcare Hospital ",
    category: "Home Care",
    jobTypes: "Part-Time",
    location: "Mumbai, Maharastra",
    appliedJobs: "24 Oct 2022",
  },

  {
    id: "4",
    jobTitle: " Max Healthcare Hospital ",
    category: "Attandent",
    jobTypes: "Internship",
    location: "Mumbai, Maharastra",
    appliedJobs: "24 Oct 2022",
  },

  {
    id: "5",
    jobTitle: " Max Healthcare Hospital ",
    category: "Elder care",
    jobTypes: "Freelance",
    location: "Mumbai, Maharastra",
    appliedJobs: "24 Oct 2022",
  },

  {
    id: "6",
    jobTitle: " Max Healthcare Hospital ",
    category: "Home Care",
    jobTypes: "Full-Time",
    location: "Mumbai, Maharastra",
    appliedJobs: "24 Oct 2022",
  },
  {
    id: "7",
    jobTitle: " Max Healthcare Hospital ",
    category: "Attandent",
    jobTypes: "Part-Time",
    location: "Mumbai, Maharastra",
    appliedJobs: "24 Oct 2022",
  },
];

const AppliedJobs = () => {
  const [darkup1, setDarkup1] = useState(true);
  const [darkdown1, setDarkdown1] = useState(false);
  const [darkup2, setDarkup2] = useState(true);
  const [darkDown2, setDarkdown2] = useState(false);
  const [darkup3, setDarkup3] = useState(true);
  const [darkDown3, setDarkdown3] = useState(false);
  const [darkup4, setDarkup4] = useState(true);
  const [darkDown4, setDarkdown4] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handeldarkup1 = () => {
    setDarkup1(true);
    setDarkdown1(false);
  };

  const handeldarkdown1 = () => {
    setDarkup1(false);
    setDarkdown1(true);
  };

  const handeldarkup2 = () => {
    setDarkup2(true);
    setDarkdown2(false);
  };

  const handeldarkdown2 = () => {
    setDarkup2(false);
    setDarkdown2(true);
  };

  const handeldarkup3 = () => {
    setDarkup3(true);
    setDarkdown3(false);
  };

  const handeldarkdown3 = () => {
    setDarkup3(false);
    setDarkdown3(true);
  };

  const handeldarkup4 = () => {
    setDarkup4(true);
    setDarkdown4(false);
  };

  const handeldarkdown4 = () => {
    setDarkup4(false);
    setDarkdown4(true);
  };

  return (
    <div>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          <Link to="/professional">
            <div className="flex items-center mb-4 font-s-medium text-primary text-lg">
              <BiChevronLeft className="text-3xl" /> Applied Jobs
            </div>
          </Link>
          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="flex pb-8 items-center text-[#000] space-x-4 font-s-medium text-xl">
              <BsFillBagFill className="text-primary " />
              <h6 className="text-2xl"> All Applied Jobs</h6>
            </div>
            <hr className="mb-8" />
            <div className="sm:flex space-y-6 sm:space-y-0 sm:items-center mb-8 w-full justify-center sm:justify-between">
              <div className="flex items-center space-x-3">
                <span>Show</span>
                <select className="bg-lightcolor p-3 rounded-md text-gray-600">
                  <option value="1">1</option>
                  <option value="dummy">dummy</option>
                  <option value="dummy">dummy</option>
                </select>
                <span>Entries</span>
              </div>

              <div className="flex items-center space-x-3">
                <span>Search:</span>
                <div className="bg-lightcolor  flex items-center px-2 rounded-md">
                  <AiOutlineSearch className="text-2xl opacity-40" />
                  <input
                    type="search"
                    id="search"
                    className="w-full bg-lightcolor p-2 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="border-2 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Company{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup1
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup1}
                          />
                          <BiChevronDown
                            className={
                              darkdown1
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown1}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Category{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup2
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup2}
                          />
                          <BiChevronDown
                            className={
                              darkDown2
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown2}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Job Types{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup3
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup3}
                          />
                          <BiChevronDown
                            className={
                              darkDown3
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown3}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Applied On{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup4
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup4}
                          />
                          <BiChevronDown
                            className={
                              darkDown4
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown4}
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {tablearr.map((item, index) => {
                    return (
                      <>
                        <tr className="border-b-2" key={index}>
                          <div className="flex flex-col py-4 border-r-2">
                            <td className="py-2 sm:pr-10 pl-2 font-s-bold text-[13px] sm:text-[15px] text-primary">
                              {item.jobTitle}
                            </td>
                            <td className=" pr-4 sm:pr-10 pl-2 text-[13px] sm:text-[15px] text-gray-500 flex space-x-2 items-center">
                              <MdLocationPin
                                size={20}
                                className="text-primary"
                              />
                              <p> {item.location} </p>
                            </td>
                          </div>
                          <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium">
                            {item.category}
                          </td>
                          <td className="border-r-2 text-[13px] sm:text-[15px]  pl-4">
                            <span
                              className={`text-white py-2 pl-3 pr-6 font-s-medium rounded-md ${
                                item.jobTypes === "Freelance"
                                  ? "bg-[#2D9BB3]"
                                  : item.jobTypes === "Full-Time"
                                  ? "bg-[#3F63C7]"
                                  : "bg-[#883FC7]"
                              }`}
                            >
                              {item.jobTypes}
                            </span>
                          </td>

                          <td className="border-r-2 text-base sm:text-[15px] pl-4 font-s-medium text-black">
                            {item.appliedJobs}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between ">
              <div className="font-s-medium">Showing 1 to 3 of 7 entries</div>

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
  );
};

export default AppliedJobs;
