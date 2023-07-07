import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { RiArrowLeftSLine, RiDeleteBinLine, RiInboxUnarchiveFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";

const AllMails = () => {
  let [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // delete modal

  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteOpen(true);
  }

  const inboxdata = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the printing",
      img: "/assets/images/email-image.png",
      para: " Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. Lorem Ipsum is simplydummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      reply: "Reply",
      date: "24 Sept 2022",
      mailername: "Wanda Montgomery",
      code_no: "(87596000)",
    },
    {
      id: 2,
      title: "Lorem Ipsum is simply dummy text of the printing",
      img: "/assets/images/email-image.png",
      para: " Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. Lorem Ipsum is simplydummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      reply: "Reply",
      date: "24 Sept 2022",
      mailername: "Wanda Montgomery",
      code_no: "(87596000)",
    },
    {
      id: 3,
      title: "Lorem Ipsum is simply dummy text of the printing",
      img: "/assets/images/email-image.png",
      para: " Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. Lorem Ipsum is simplydummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      reply: "Reply",
      date: "24 Sept 2022",
      mailername: "Wanda Montgomery",
      code_no: "(87596000)",
    },
    {
      id: 4,
      title: "Lorem Ipsum is simply dummy text of the printing",
      img: "/assets/images/email-image.png",
      para: " Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. Lorem Ipsum is simplydummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      reply: "Reply",
      date: "24 Sept 2022",
      mailername: "Wanda Montgomery",
      code_no: "(87596000)",
    },
    {
      id: 5,
      title: "Lorem Ipsum is simply dummy text of the printing",
      img: "/assets/images/email-image.png",
      para: " Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. Lorem Ipsum is simplydummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      reply: "Reply",
      date: "24 Sept 2022",
      mailername: "Wanda Montgomery",
      code_no: "(87596000)",
    },
  ];

  return (
    <>
      <div className="bg-inputcolor  lg:px-0 px-5 pb-5">
        <div className=" pt-12 lg:px-10  ">
          <Link to="/professional">  <div className="flex items-center mb-4 font-s-medium text-primary text-lg">
            <RiArrowLeftSLine className="text-3xl" /> Email
          </div>
          </Link>
        </div>
        <div className="container mx-auto pt-5 pb-5 shadow-box mb-12 mt-5 rounded bg-white">
          <div className="flex space-x-4  px-5 pb-5">
            <IoIosMail size={40} fill="#3FBDC7" />

            <div className="">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex item-center justify-center w-full my-auto rounded-md bg-transparent  pr-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <p className=" mr-1 text-black text-lg font-s-bold md:flex items-center justify-center hidden ">
                      Inbox
                    </p>
                    <BiChevronRight
                      className="    bg-transparent  text-black"
                      aria-hidden="true"
                      size={28}
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
                  <Menu.Items className="absolute   mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-3 py-2 ">
                      <Link to="/hospital/compose-email">
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/professional/email">
                              <div
                                className={`${active
                                  ? "bg-primary text-white"
                                  : "text-gray-900"
                                  } group flex w-full border-b font-s-medium  rounded-md py-1 mb-2 px-5 `}
                              >
                                <HiOutlineMail
                                  size={24}
                                  className="text-primary group-hover:text-white"
                                />
                                <button
                                  className={`${active
                                    ? "bg-primary text-white"
                                    : "text-gray-900"
                                    } group flex w-full font-s-medium items-center rounded-md px-2  `}
                                >
                                  Compose Mail
                                </button>

                              </div>
                            </Link>
                          )}
                        </Menu.Item>
                      </Link>
                      <Link to="/professional/sent-mails">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={`${active
                                ? "bg-primary text-white"
                                : "text-gray-900"
                                } group flex w-full border-b font-s-medium  rounded-md py-1 mb-2 px-5 `}
                            >
                              <RiInboxUnarchiveFill
                                size={24}
                                className="text-primary group-hover:text-white"
                              />
                              <button
                                className={`${active
                                  ? "bg-primary text-white"
                                  : "text-gray-900"
                                  } group flex w-full font-s-medium items-center rounded-md px-2  `}
                              >
                                Sent
                              </button>
                            </div>
                          )}
                        </Menu.Item>
                      </Link>
                      <Link to="/professional/trash-mails">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={`${active
                                ? "bg-primary text-white"
                                : "text-gray-900"
                                } group flex w-full  font-s-medium  rounded-md py-1  px-5 `}
                            >
                              <BsTrashFill
                                size={24}
                                className="text-primary group-hover:text-white"
                              />
                              <button
                                className={`${active
                                  ? "bg-primary text-white"
                                  : "text-gray-900"
                                  } group flex w-full font-s-medium items-center rounded-md px-2  `}
                              >
                                Trash
                              </button>
                            </div>
                          )}
                        </Menu.Item>
                      </Link>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          {inboxdata.map((item) => (
            <div className="lg:grid grid-cols-12  border-gray-200 border-t-2 p-4 gap-2">
              <div className="col-span-1">
                <div className="flex flex-col items-center justify-center">
                  <img alt="images" src={item.img} />
                  <div className="text-xs text-center font-s-medium pt-2">
                    {item.mailername}
                  </div>
                </div>
              </div>

              <div className="col-span-9 flex justify-between">

                <div>
                  <Link to="/professional/email-description">
                    <h2 className="text-black font-semibold pb-2">{item.title}</h2>
                  </Link>

                  <p className="text-sm font-s-normal lg:text-left text-justify">
                    {item.para}
                  </p>


                  <div>
                    <button
                      type="button"
                      // onClick={openReplyModal}
                      className="rounded-md   py-2 text-sm font-s-medium text-primary"
                    >
                     <a href="/professional/email-description">
                     Reply
                     </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-2 ">
                <div className=" ">
                  <div className="flex lg:pt-0 space-x-5 items-end justify-end">
                    <RiDeleteBinLine
                      size={20}
                      className=" cursor-pointer  "
                      onClick={openDeleteModal}
                    />
                    <IoIosMail size={20} />
                  </div>
                  <p className="text-end text-sm lg:pt-10 pt-2 text-primary font-s-medium whitespace-nowrap">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* delete modal */}
      {/* modal */}
      <Transition appear show={isDeleteOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDeleteModal}>
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
                <Dialog.Panel className=" flex flex-col  p-5 items-center justify-center max-w-md transform overflow-hidden rounded-2xl  bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-s-medium leading-6 px-3 pb-4 text-gray-900"
                  >
                    Are you sure you want to delete ?
                  </Dialog.Title>
                  <div className="mt-4 flex gap-20 bg-secondary p-4 rounded">
                    <button
                      type="button"
                      className="rounded font-s-medium outline-none border border-transparent bg-white px-8  py-1.5 text-sm font-medium text-secondary"
                      onClick={closeDeleteModal}
                    >
                      No
                    </button>

                    <button
                      type="button"
                      className=" rounded font-s-medium border border-white bg-secondary px-8  py-1.5 text-sm font-medium text-[#fff] "
                      onClick={closeDeleteModal}
                    >
                      Yes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AllMails