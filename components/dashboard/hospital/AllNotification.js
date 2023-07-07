import React, { useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const AllNotification = () => {
  const notifications = [
    {
      id: 1,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 3,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 4,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 5,
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];

  let [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // delete modal

  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteOpen(true);
  }

  return (
    <>
      <div className="bg-inputcolor pb-5 lg:px-0 px-5">
        <div className="">
          <div className=" pt-12 lg:px-10 pb-2 ">
            <Link
              to="/hospital"
              className="flex items-center justify-start space-x-2"
            >
              {" "}
              <h3 className="font-bold  text-lg flex pt-1 text-primary">
                <BiChevronLeft className="text-3xl"  />
                Notification
              </h3>
            </Link>
          </div>
          <div className="container mx-auto pt-5 pb-5 bg-white mt-4 mb-12 rounded">
            <div className="flex space-x-2  px-5 pb-5 border-b-2 border-gray-200 ">
              <BsFillBellFill size={22} fill="#3FBDC7" className="mt-2" />
              <h3 className="font-s-medium  text-lg flex pt-1">
                View All Notification
              </h3>
            </div>

            {notifications.map((item) => (
              <div className="bg-lightcolor m-6  rounded-md">
                <div className="md:grid grid-cols-12   lg:gap-16 p-4 ">
                  <div className="col-span-11  px-5">
                    <p className="lg:text-left text-justify tracking-tight">
                      {item.para}
                    </p>
                  </div>

                  <div className="col-span-1">
                    <div className="p-2 bg-primary my-3 flex justify-center items-center rounded">
                      <RiDeleteBin6Line
                        className="text-white text-center "
                        size={18}
                        onClick={openDeleteModal}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-s-medium leading-6 text-center pb-4 text-gray-900"
                  >
                    Are you sure to delete ?
                  </Dialog.Title>
                  <div className="mt-4 flex align-center justify-center space-x-8">
                    <button
                      type="button"
                      className=" rounded-[8px]  bg-[#D2628C] outline-none px-8 sm:px-16 py-2 text-[20px] font-medium text-white"
                      onClick={closeDeleteModal}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      className=" rounded-[8px] bg-[#69b7b1] outline-none px-8 sm:px-16 py-2 text-[20px] font-medium text-[#fff] "
                      onClick={closeDeleteModal}
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
    </>
  );
};

export default AllNotification;
