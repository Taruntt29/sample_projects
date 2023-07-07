import React, { useState } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { FaChevronDown, FaClipboardList } from "react-icons/fa";
import {
  BsEnvelope,
  BsFillPersonFill,
  BsFillHandbagFill,
  BsFillPersonCheckFill,
  BsFillCartFill,
  BsCardChecklist,
  BsTrashFill,
  BsMailbox,
} from "react-icons/bs";
import { BiBell, BiSearch } from "react-icons/bi";
import { MdGroup, MdOutlineSupportAgent, MdPerson } from "react-icons/md";
import { GiRingingBell } from "react-icons/gi";
import {
  RiDeleteBin6Fill,
  RiInboxArchiveFill,
  RiInboxUnarchiveFill,
  RiLockPasswordFill,
} from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut, FiArrowDown, FiArrowUp } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Sidebar = ({ bgcolor }) => {
  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  const [slideIn, setSlideIn] = useState(true);
  // sidebar slide
  const handleSlide = () => {
    setSlideIn(!slideIn);
  };

  const menu = [
    {
      id: 1,
      icon: <BsFillPersonFill />,
      title: "My Profile",
      mainlink: "/professional/my-profile",
      slide: { handleSlide },
    },
    {
      id: 2,
      icon: <MdGroup />,
      title: " Jobs",
      icon1: <BsFillCartFill />,
      option1: "Apply for Job",
      link1: "apply-for-job",
      icon2: <BsCardChecklist />,
      option2: "Applied Jobs",
      link2: "applied-jobs",
    },
    {
      id: 3,
      icon: <BsFillHandbagFill />,
      title: "Browse Hospital",
      mainlink: "/professional/browse-hospital",
      slide: { handleSlide },
    },
    {
      id: 4,
      icon: <BsFillPersonFill />,
      title: "Notifications",
      mainlink: "/professional/notifications",
      slide: { handleSlide },
    },
    {
      id: 5,
      icon: <FaClipboardList />,
      title: " Messages",
      icon2: <BsFillCartFill />,
      option2: "Email",
      link2: "all-mails",
      icon1: <BsMailbox />,
      option1: "Chats",
      link1: "messages",
    },
    {
      id: 6,
      icon: <AiFillSetting />,
      title: "Settings",
      icon1: <RiLockPasswordFill />,
      option1: "Change Password",
      link1: "password-change",
      icon2: <CgProfile />,
      option2: "Edit Profile",
      link2: "profile-edit",
    },
    {
      id: 7,
      icon: <MdOutlineSupportAgent />,
      title: "Support",
      icon1: <TiMessages />,
      option1: "Assistant Chat",
      link1: "assistant-chats",
      icon2: <MdEmail />,
      option2: "Assistant Email",
      link2: "assistant-mails",
    },
    {
      id: 8,
      icon: <RiDeleteBin6Fill />,
      title: "Delete",
    },
    {
      id: 9,
      icon: <FiLogOut />,
      title: "Logout",
    },
    
  ];

  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  let [isOpenLogout, setIsOpenLogout] = React.useState(false);

  function closeModalLogout() {
    setIsOpenLogout(false);
  }

  function openModalLogout() {
    setIsOpenLogout(true);
  }

  let [isOpenDelete, setIsOpenDelete] = React.useState(false);

  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  function openModalDelete() {
    setIsOpenDelete(true);
  }

  let [isOpenFailed, setIsOpenFailed] = React.useState(false);

  function closeModalFailed() {
    setIsOpenFailed(false);
  }

  function openModalFailed() {
    setIsOpenFailed(true);
  }

  let [isOpenProceed, setIsOpenProceed] = React.useState(false);

  function closeModalProceed() {
    setIsOpenProceed(false);
  }

  function openModalProceed() {
    setIsOpenProceed(true);
  }

  const handleFunc = (index, item) => {
    toggle(index);
    if (item.id === 9) {
      openModalLogout();
    } else if (item.id === 8) {
      openModalDelete();
    } else {
    }
  };

  return (
    <div className="header bg-white z-50 pt-16 pb-12 duration-500">
      <nav className="navbar">
        <div className="flex justify-end items-center w-full gap-3 md:gap-8  ">
          <div className="group dropdown drop-shadow-2xl flex text-sm  font-semibold nav-desk  text-primary group relative cursor-pointer">
            <BsEnvelope size={30} />
          </div>
          <div className="group dropdown drop-shadow-2xl flex  text-sm  font-semibold nav-desk  text-primary  group relative cursor-pointer">
            <BiBell size={30} />
          </div>
          <div className="">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex space-x-2 item-center justify-center w-full my-auto rounded-md bg-transparent  pr-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <div className="rounded-full w-12 h-12">
                    <img src="/assets/images/professional-main.png" alt="dp" />
                  </div>{" "}
                  <p className="mt-4 mr-1 text-primary font-s-medium md:flex items-center justify-center hidden ">
                    Company
                  </p>
                  <FaChevronDown
                    className=" -mr-1 h-5 w-5 mt-4 bg-transparent text-primary "
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-primary text-white" : "text-gray-900"
                          } group flex w-full font-s-medium items-center rounded-md px-2 py-2 text-sm`}
                        >
                          My Account
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-primary text-white" : "text-gray-900"
                          } group flex w-full font-s-medium items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Change Password
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-primary text-white" : "text-gray-900"
                          } group flex w-full font-s-medium items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
      <div
        className={
          slideIn
            ? "absolute shadow shadow-slate-600 h-screen  top-0 left-0 w-[300px] bg-primary text-white translate-x-[-100%] duration-500"
            : "absolute shadow shadow-slate-600 h-screen  top-0 left-0 w-[300px] bg-primary text-white translate-x-0 duration-500"
        }
      >
        <div className="relative">
          <div className="h-full  ">
          <Link to="/">  <div className="flex justify-start bg-primary fixed w-full py-5 px-6">
              <img
                src="/assets/images/logo-dashboard.png"
                alt=""
                className="w-[150px]"
              />
            </div>
            </Link>
            <div className="h-screen overflow-y-scroll scroller  pt-28">
              <div className="">
                <div className=" flex justify-start items-start border-[1px] border-white border-opacity-60 rounded-[9px] w-[60%] mx-auto">
                  <div className="flex justify-center items-center m-1 rounded-[9px] bg-white w-full h-full p-2">
                    <img
                      src="/assets/images/pic1.png"
                      alt="/"
                      className="rounded-[9px] w-[80px] h-[80px] flex justify-center items-center"
                    />
                  </div>
                </div>
                <div className="font-s-medium text-center text-white text-sm w-full pt-2 mx-auto">
                  Galaxy Solutions Pvt Ltd.
                </div>
                <div className="font-s-medium text-center text-white text-opacity-60 text-sm w-full">
                  IT Contractor
                </div>
              </div>
              <div className="">
                <div className="  rounded-lg  justify-start gap-1 flex flex-col pt-5  pl-4 py-8 ">
                  {menu.map((item, index) => {
                    return (
                      <>
                        <Link onClick={item.slide} to={item.mainlink}>
                          <div
                            onClick={(e) => handleFunc(index, item)}
                            key={index}
                            className={`flex items-center justify-between group gap-3 text-lg pr-3 rounded-l-md  bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey  ${item.styles}`}
                          >
                            <div className="flex items-center gap-3 px-3 py-2">
                              {" "}
                              <span className="text-white group-hover:text-primary">
                                {item.icon}
                              </span>{" "}
                              <span className="font-s-normal text-base group-hover:text-primary">
                                {" "}
                                {item.title}
                              </span>{" "}
                            </div>
                            {item.option1 ? (
                              <span className="">
                                {clicked === index ? (
                                  <FiArrowUp
                                    size={17}
                                    className="group-hover:text-primary"
                                  />
                                ) : (
                                  <FiArrowDown
                                    size={17}
                                    className="group-hover:text-primary"
                                  />
                                )}
                              </span>
                            ) : null}
                          </div>
                        </Link>

                        <>
                          {item.option1 ? (
                            <>
                              {clicked === index ? (
                                <ul className="dropdown-acc list-disc  my-2 rounded">
                                  {item.option1 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link1}
                                      className={({ isActive }) =>
                                        isActive ? "" : ""
                                      }
                                    >
                                      <div className=" flex space-x-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-primary">
                                          {" "}
                                          {item.icon1}{" "}
                                        </span>{" "}
                                        <span className="group-hover:text-primary">
                                          {" "}
                                          {item.option1}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                  {item.option2 ? (
                                    <Link
                                      onClick={handleSlide}
                                      to={item.link2}
                                      className={({ isActive }) =>
                                        isActive ? " " : ""
                                      }
                                    >
                                      <div className=" flex space-x-2 items-center group px-10 py-2 bg-transparent hover:bg-[#F5F7F9] text-white hover:text-grey rounded-l-md ">
                                        <span className="group-hover:text-primary">
                                          {" "}
                                          {item.icon2}{" "}
                                        </span>{" "}
                                        <span className="group-hover:text-primary">
                                          {" "}
                                          {item.option2}{" "}
                                        </span>
                                      </div>
                                    </Link>
                                  ) : (
                                    ""
                                  )}
                                </ul>
                              ) : null}
                            </>
                          ) : null}
                        </>
                      </>
                    );
                  })}

                  {/* modal */}
                  <Transition appear show={isOpenDelete} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={closeModalDelete}
                    >
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
                        <div className="flex min-h-full items-center justify-center  text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                              <div className="flex gap-2 justify-between px-6 pt-6">
                                <Dialog.Title
                                  as="h3"
                                  className="text-xl py-10  pl-6 font-s-medium leading-6 text-center pb-4 text-gray-900"
                                >
                                  Do you want to delete your Account?
                                </Dialog.Title>
                                <div>
                                  <ImCross
                                    className="cursor-pointer"
                                    onClick={closeModalDelete}
                                  />
                                </div>
                              </div>
                              <div className="bg-primary py-5 mt-6 ">
                                <div className=" flex justify-center items-center gap-8 ">
                                  <button
                                    type="button"
                                    className=" rounded-[8px] border border-white bg-transparent px-10 py-2 text-base font-medium text-white"
                                    onClick={closeModalDelete}
                                  >
                                    Yes
                                  </button>

                                  <button
                                    type="button"
                                    className=" rounded-[8px] border border-transparent bg-white px-10 py-2 text-base font-medium text-primary "
                                    onClick={closeModalDelete}
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>

                  {/* modal */}
                  <Transition appear show={isOpenLogout} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={closeModalLogout}
                    >
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                              <div className="flex gap-2 justify-between px-6 pt-6">
                                <Dialog.Title
                                  as="h3"
                                  className="text-xl py-10  pl-6 font-s-medium leading-6 text-center pb-4 text-gray-900"
                                >
                                  Do you want to Logout your Account?
                                </Dialog.Title>
                                <div>
                                  <ImCross
                                    className="cursor-pointer"
                                    onClick={closeModalLogout}
                                  />
                                </div>
                              </div>
                              <div className="bg-primary py-5 mt-6 ">
                                <div className=" flex justify-center items-center gap-8 ">
                                  <button
                                    type="button"
                                    className=" rounded-[8px] border border-white bg-transparent px-10 py-2 text-base font-medium text-white"
                                    onClick={closeModalLogout}
                                  >
                                    Yes
                                  </button>

                                  <button
                                    type="button"
                                    className=" rounded-[8px] border border-transparent bg-white px-10 py-2 text-base font-medium text-primary "
                                    onClick={closeModalLogout}
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>

                   {/* modal */}
                   <Transition appear show={isOpenFailed} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={closeModalFailed}
                    >
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                              <div className="flex gap-2 justify-between px-6 pt-6">
                                <Dialog.Title
                                  as="h3"
                                  className="text-xl py-10  pl-6 font-s-medium leading-6 text-center pb-4 text-gray-900"
                                >
                                There are Pending transactions that need to be cleared first 
                                </Dialog.Title>
                                <div>
                                  <ImCross
                                    className="cursor-pointer"
                                    onClick={closeModalFailed}
                                  />
                                </div>
                              </div>
                              <div className="bg-red-600 py-5 mt-6 ">
                                <div className=" flex justify-center items-center gap-8 ">
                                  <button
                                    type="button"
                                    className=" rounded-[8px] border border-white bg-transparent px-10 py-2 text-base font-medium text-red-600"
                                    onClick={closeModalLogout}
                                  >
                                   Failed
                                  </button>

                                  
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>

                   {/* modal */}
                   <Transition appear show={isOpenProceed} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={closeModalProceed}
                    >
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                              <div className="flex gap-2 justify-between px-6 pt-6">
                                <Dialog.Title
                                  as="h3"
                                  className="text-xl py-10  pl-6 font-s-medium leading-6 text-center pb-4 text-gray-900"
                                >
                               All information will be deleted with this action and  will be non recoverable
                                </Dialog.Title>
                                <div>
                                  <ImCross
                                    className="cursor-pointer"
                                    onClick={closeModalProceed}
                                  />
                                </div>
                              </div>
                              <div className="bg-red-600 py-5 mt-6 ">
                                <div className=" flex justify-center items-center gap-8 ">
                                <button
                                    type="button"
                                    className=" rounded-[8px] border border-white bg-transparent px-10 py-2 text-base font-medium text-white"
                                    onClick={closeModalProceed}
                                  >
                                  Proceed
                                  </button>

                                  <button
                                    type="button"
                                    className=" rounded-[8px] border border-transparent bg-white px-10 py-2 text-base font-medium text-primary "
                                    onClick={closeModalProceed}
                                  >
                                    Cancle
                                  </button>

                                  
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-primary text-white p-3 -right-12 top-10 rounded-r shadow shadow-slate-600 cursor-pointer"
          onClick={handleSlide}
        >
          {slideIn ? <BiChevronRight size={25} /> : <BiChevronLeft size={25} />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
