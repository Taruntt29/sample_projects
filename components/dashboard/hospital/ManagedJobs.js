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

let tablearr = [
  {
    id: "1",
    jobTitle: "Baby Care",
    Category: "Healthcare",
    JobTypes: "Freelance",
    Applications: "13 Applied",
    date: "05 Nov 2022 | 3 Days Ago",
    Status: "Active",
    jobTypeColor: "#2D9BB3",
  },

  {
    id: "2",
    jobTitle: "Elderly Care",
    Category: "Healthcare",
    JobTypes: "Full-Time",
    date: "05 Nov 2022 | 3 Days Ago",
    Applications: "13 Applied",
    Status: "Draft",
  },

  {
    id: "3",
    jobTitle: "Attendants",
    Category: "Healthcare",
    JobTypes: "Part-Time",
    date: "05 Nov 2022 | 3 Days Ago",
    Applications: "13 Applied",
    Status: "Closed",
  },

  {
    id: "4",
    jobTitle: "Nurse",
    Category: "Healthcare",
    JobTypes: "Internship",
    date: "05 Nov 2022 | 3 Days Ago",
    Applications: "13 Applied",
    Status: "Active",
  },

  {
    id: "5",
    jobTitle: "Attendants",
    Category: "Healthcare",
    JobTypes: "Freelance",
    date: "05 Nov 2022 | 3 Days Ago",
    Applications: "13 Applied",
    Status: "Pending",
  },

  {
    id: "6",
    jobTitle: "Attendants",
    Category: "Healthcare",
    JobTypes: "Full-Time",
    date: "05 Nov 2022 | 3 Days Ago",
    Applications: "13 Applied",
    Status: "Closed",
  },
  {
    id: "7",
    jobTitle: "Nurse",
    Category: "Healthcare",
    JobTypes: "Part-Time",
    date: "05 Nov 2022 | 3 Days Ago",
    Applications: "13 Applied",
    Status: "Active",
  },
];

const ManagedJobs = () => {
  const [darkup1, setDarkup1] = useState(true);
  const [darkdown1, setDarkdown1] = useState(false);
  const [darkup2, setDarkup2] = useState(true);
  const [darkDown2, setDarkdown2] = useState(false);
  const [darkup3, setDarkup3] = useState(true);
  const [darkDown3, setDarkdown3] = useState(false);
  const [darkup4, setDarkup4] = useState(true);
  const [darkDown4, setDarkdown4] = useState(false);
  const [darkup5, setDarkup5] = useState(true);
  const [darkDown5, setDarkdown5] = useState(false);
  const [darkup6, setDarkup6] = useState(true);
  const [darkDown6, setDarkdown6] = useState(false);
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

  const handeldarkup5 = () => {
    setDarkup5(true);
    setDarkdown5(false);
  };

  const handeldarkdown5 = () => {
    setDarkup5(false);
    setDarkdown5(true);
  };

  const handeldarkup6 = () => {
    setDarkup6(true);
    setDarkdown6(false);
  };

  const handeldarkdown6 = () => {
    setDarkup6(false);
    setDarkdown6(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          <div className="flex items-center mb-4 font-s-medium ">
            <Link
              to="/hospital"
              className="flex items-center justify-start space-x-4 text-primary text-lg"
            >
              {" "}
              <BiChevronLeft className="text-3xl" /> Manage Jobs
            </Link>
          </div>

          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="flex pb-8 items-center text-[#000] space-x-4 font-s-medium text-xl">
              <BsFillBagFill className="text-primary " />
              <h6 className="text-2xl"> Manage All Jobs</h6>
            </div>
            <hr className="mb-8" />
            <div className="sm:flex space-y-6 sm:space-y-0 sm:items-center mb-8 w-full justify-center sm:justify-between">
              <div className="flex items-center space-x-3">
                <span>Show</span>
                <select className="bg-primary p-3 rounded-md text-white">
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
                        Jobs Tittle{" "}
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
                        Applications{" "}
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
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[18px]">
                        Status{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup5
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup5}
                          />
                          <BiChevronDown
                            className={
                              darkDown5
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown5}
                          />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center text-sm sm:text-[18px] justify-between">
                        Action{" "}
                        <div>
                          <BiChevronUp
                            className={
                              darkup6
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkup6}
                          />
                          <BiChevronDown
                            className={
                              darkDown6
                                ? "text-[#71777F] opacity-100"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldarkdown6}
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
                            <Link to="/hospital/job-detail">
                              {" "}
                              <td className="py-3 pr-4 sm:pr-10 pl-2 font-s-bold text-[13px] sm:text-[15px] text-primary">
                                {item.jobTitle}
                              </td>
                            </Link>
                            <td className=" pr-4 sm:pr-10 pl-2 text-[13px] sm:text-[15px] text-gray-500">
                              {item.date}
                            </td>
                          </div>
                          <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium">
                            {item.Category}
                          </td>
                          <td className="border-r-2 text-[13px] sm:text-[15px]  pl-4">
                            <span
                              className={`text-white py-2 pl-3 pr-6 font-s-medium rounded-md ${
                                item.JobTypes === "Freelance"
                                  ? "bg-[#2D9BB3]"
                                  : item.JobTypes === "Full-Time"
                                  ? "bg-[#8C82EA]"
                                  : item.JobTypes === "Part-Time"
                                  ? "bg-[#D2628C]"
                                  : "bg-[#AB6B35]"
                              }`}
                            >
                              {item.JobTypes}
                            </span>
                          </td>

                          <td className="border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium text-primary">
                            <Link to="/hospital/applicants">
                              {" "}
                              {item.Applications}
                            </Link>
                          </td>
                          <td
                            className={`border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium ${
                              item.Status === "Active"
                                ? "text-[#17BB05]"
                                : item.Status === "Draft"
                                ? "text-[#E87E05]"
                                : item.Status === "Closed"
                                ? "text-[#FF0303]"
                                : "text-[#FFCC00]"
                            }`}
                          >
                            {item.Status}
                          </td>
                          <td>
                            <div className="flex space-x-3 items-center justify-center text-xl sm:text-3xl">
                              <Link to="/hospital/job-edit">
                                <BsPencilFill className="bg-lightcolor cursor-pointer text-primary p-[4px]" />
                              </Link>
                              <RiDeleteBin5Line
                                className="bg-lightcolor cursor-pointer text-primary p-[4px]"
                                onClick={openModal}
                              />
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between py-4 ">
              <div className="font-s-medium">Showing 1 to 3 of 7 entries</div>
              <div className=" hidden md:flex  bg-white  ">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="/manage-jobs"
                    className="relative inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="/manage-jobs"
                    className="relative ml-3 inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className=" flex  ">
                  <div>
                    <nav
                      className="isolate inline-flex gap-2  rounded-md "
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
                        className="relative z-10 inline-flex items-center  bg-secondary px-4 py-2 text-sm font-medium text-white focus:z-20"
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

      {/* modal */}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-s-medium leading-6  pb-4 text-gray-900"
                  >
                    Are you sure to delete ?
                  </Dialog.Title>
                  <div className="mt-4 flex space-x-8">
                    <button
                      type="button"
                      className=" rounded-[8px] border border-transparent bg-[#D2628C] px-8 sm:px-16 py-2 text-[20px] font-medium text-white"
                      onClick={closeModal}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      className=" rounded-[8px] border border-transparent bg-[#69b7b1] px-8 sm:px-16 py-2 text-[20px] font-medium text-[#fff] "
                      onClick={closeModal}
                    >
                      No
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ManagedJobs;
