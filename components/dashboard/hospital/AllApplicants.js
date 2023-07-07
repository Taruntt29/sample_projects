import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const AllApplicants = () => {
  const [dark1, setDark1] = useState(false);
  const [dark2, setDark2] = useState(false);
  const [dark3, setDark3] = useState(false);
  const [dark4, setDark4] = useState(false);
  const [dark5, setDark5] = useState(false);
  const [dark6, setDark6] = useState(false);
  const [dark7, setDark7] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const handeldark1 = () => {
    setDark1(!dark1);
  };
  const handeldark2 = () => {
    setDark2(!dark2);
  };
  const handeldark3 = () => {
    setDark3(!dark3);
  };

  const handeldark5 = () => {
    setDark5(!dark5);
  };
  const handeldark6 = () => {
    setDark6(!dark6);
  };

  const handeldark7 = () => {
    setDark7(!dark7);
  };

  const tablearr = [
    {
      id: "1",
      name: "Wanda Montgomery",
      img: "/assets/images/user-inbox.png",
      location: "Mumbai",
      applied: "Hospital",
      date: "15/06/2022 at 9:35am",
      Status: "Shortlist",
    },

    {
      id: "2",
      name: "Wanda Montgomery",
      img: "/assets/images/user-inbox.png",
      location: "Mumbai",
      applied: "Hospital",
      date: "15/06/2022 at 9:35am",
      Status: "Pending",
    },

    {
      id: "3",
      name: "Wanda Montgomery",
      img: "/assets/images/user-inbox.png",
      location: "Mumbai",
      applied: "Hospital",
      date: "15/06/2022 at 9:35am",
      Status: "Shortlist",
    },

    {
      id: "4",
      name: "Wanda Montgomery",
      img: "/assets/images/user-inbox.png",
      location: "Mumbai",
      applied: "Hospital",
      date: "15/06/2022 at 9:35am",
      Status: "Pending",
    },

    {
      id: "5",
      name: "Wanda Montgomery",
      img: "/assets/images/user-inbox.png",
      location: "Mumbai",
      applied: "Hospital",
      date: "15/06/2022 at 9:35am",
      Status: "Reviewed",
    },

    {
      id: "6",
      name: "Wanda Montgomery",
      img: "/assets/images/user-inbox.png",
      location: "Mumbai",
      applied: "Hospital",
      date: "15/06/2022 at 9:35am",
      Status: "Selected",
    },
    {
      id: "7",
      name: "Wanda Montgomery",
      img: "/assets/images/user-inbox.png",
      location: "Mumbai",
      applied: "Hospital",
      date: "15/06/2022 at 9:35am",
      Status: "Shortlist",
    },
  ];

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
          <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
            <Link
              to="/managed-jobs"
              className="flex items-center justify-start text-lg space-x-4"
            >
              {" "}
              <BiChevronLeft className="text-3xl" /> Manage Jobs
            </Link>{" "}
          </div>

          <div className="bg-[#fff] px-8 py-10 rounded-2xl">
            <div className="flex  pb-8 items-center text-[#000] space-x-4 font-s-medium text-2xl">
              <div>
                <BsPeopleFill className="text-secondary " />
              </div>
              <h4>All Applicants</h4>
            </div>
            <hr className="mb-8" />
            <div className="sm:flex space-y-6 sm:space-y-0 sm:items-center mb-8 w-full justify-center sm:justify-between">
              <div className="flex items-center space-x-3">
                <span>Filters</span>
                <select className="bg-lightcolor p-3 rounded-md">
                  <option value="1">Status</option>
                  <option value="dummy">dummy</option>
                  <option value="dummy">dummy</option>
                </select>
              </div>

              <div className="flex items-center space-x-3">
                <span>Search:</span>
                <div className="bg-lightcolor  flex items-center px-2 rounded-md">
                  <AiOutlineSearch className="text-2xl opacity-40" />
                  <input
                    type="text"
                    id="search"
                    className="w-full bg-lightcolor outline-none p-2"
                  />
                </div>
              </div>
            </div>

            <div className="border-2 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="border-r-2 py-4 flex space-x-3 pl-5 pt-2">
                      <input type="checkbox" />
                      <div>
                        <BiChevronUp
                          className={
                            dark1
                              ? "text-[#71777F]"
                              : "text-[#71777F] opacity-30"
                          }
                          onClick={handeldark7}
                        />
                        <BiChevronDown
                          className={
                            dark1
                              ? "text-[#71777F] opacity-30"
                              : "text-[#71777F]"
                          }
                          onClick={handeldark7}
                        />
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className=" font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[16px]">
                        <div className="md:pl-8"> Name</div>
                        <div>
                          <BiChevronUp
                            className={
                              dark1
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark1}
                          />
                          <BiChevronDown
                            className={
                              dark1
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark1}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[16px]">
                        Applied For
                        <div>
                          <BiChevronUp
                            className={
                              dark2
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark2}
                          />
                          <BiChevronDown
                            className={
                              dark2
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark2}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[16px]">
                        Date
                        <div>
                          <BiChevronUp
                            className={
                              dark3
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark3}
                          />
                          <BiChevronDown
                            className={
                              dark3
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark3}
                          />
                        </div>
                      </div>
                    </th>
                    <th className="border-r-2">
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center justify-between text-sm sm:text-[16px]">
                        Status{" "}
                        <div>
                          <BiChevronUp
                            className={
                              dark5
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark5}
                          />
                          <BiChevronDown
                            className={
                              dark5
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark5}
                          />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="font-s-medium py-2 px-1 sm:px-3 flex items-center text-sm sm:text-[16px] justify-between">
                        Action{" "}
                        <div>
                          <BiChevronUp
                            className={
                              dark6
                                ? "text-[#71777F]"
                                : "text-[#71777F] opacity-30"
                            }
                            onClick={handeldark6}
                          />
                          <BiChevronDown
                            className={
                              dark6
                                ? "text-[#71777F] opacity-30"
                                : "text-[#71777F]"
                            }
                            onClick={handeldark6}
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
                          <td className="border-r-2 py-8 px-3 pl-5  flex items-center ">
                            <input type="checkbox" />
                          </td>
                          <td className="border-r-2 py-2 pr-4 sm:pr-10  ">
                            <div className="md:flex space-x-4 items-center justify-center">
                              <div>
                                <img src={item.img} alt="altt" />
                              </div>
                              <div className="flex flex-col">
                                <div className="font-s-bold text-[13px] sm:text-[15px] text-secondary">
                                  {item.name}{" "}
                                </div>
                                <div className="font-s-normal text-sm text-grey flex">
                                  {" "}
                                  <MdLocationOn className="text-secondary" />{" "}
                                  {item.location}{" "}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="border-r-2 text-[13px] sm:text-[15px]  text-primary pl-4 font-s-medium">
                            {item.applied}
                          </td>
                          <td className="border-r-2 text-[13px] sm:text-[15px]  pl-4">
                            <span>{item.date}</span>
                          </td>
                          <td
                            className={`border-r-2 text-[13px] sm:text-[15px] pl-4 font-s-medium ${
                              item.Status === "Selected"
                                ? "text-[#17BB05]"
                                : item.Status === "Pending"
                                ? "text-[#D5C000]"
                                : item.Status === "Reviewed"
                                ? "text-[#2544EE]"
                                : "text-[#F28203]"
                            }`}
                          >
                            {item.Status}
                          </td>
                          <td>
                            <div className="flex space-x-3 items-center justify-center text-xl sm:text-3xl">
                              <MdEmail className="bg-lightcolor cursor-pointer text-primary p-[4px]" />
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
                      className="text-lg font-s-medium leading-6 text-center pb-4 text-gray-900"
                    >
                      Are you sure to delete ?
                    </Dialog.Title>
                    <div className="mt-4 flex justify-center items-center space-x-8">
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
    </div>
  );
};

export default AllApplicants;
