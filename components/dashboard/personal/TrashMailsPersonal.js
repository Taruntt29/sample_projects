import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";

const TrashMailsPersonal = () => {
  const [editorState, setEditorState] = useState();
  let [isReplyOpen, setIsReplyOpen] = useState(false);

  let [isDeleteOpen, setIsDeleteOpen] = useState(false);

  function closeReplyModal() {
    setIsReplyOpen(false);
  }

  function openReplyModal() {
    setIsReplyOpen(true);
  }

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
        <div className=" pt-12 pb-6 lg:px-10  ">
          <Link to="/personal/all-mails">
            {" "}
            <h3 className="font-bold  text-lg  pt-1 text-primary flex items-center ">
              <BiChevronLeft className="text-3xl" />
              <p> Email</p>
            </h3>
          </Link>
        </div>
        <div className="container mx-auto pt-5 pb-5 shadow-box mb-12 mt-7 rounded bg-white ">
          <div className="flex space-x-4 items-center justify-between px-5">
            <div className="flex space-x-4  px-5 mb-2 ">
              <IoIosMail size={40} fill="#3FBDC7" />
              <h3 className="font-bold  text-lg font-s-medium flex items-center justify-enter pt-1">
                Trash <BiChevronRight className="" size={32} />
              </h3>
            </div>
            <div className="font-s-normal text-sm">
              Messages that have been in the Bin for more than 30 days will be
              deleted automatically.
            </div>
            <div className="border-2 border-primary txt-primary px-5 py-2 rounded-md mb-5">
              Empty Bin now
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
                  <Link to="/personal/email-description">
                    <h2 className="text-black font-semibold pb-2">
                      {item.title}
                    </h2>
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
                      <a href="/personal/email-description">Reply</a>
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

      {/* modal */}

      <Transition appear show={isReplyOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeReplyModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="px-4 py-1 text-right">
                      <button
                        type="button"
                        onClick={closeReplyModal}
                        className="   text-black font-s-medium rounded text-2xl text-right"
                      >
                        X
                      </button>
                    </div>
                  </Dialog.Title>
                  <div className=" rounded-md ">
                    <div className=" p-3 mx-4 h-72 bg-inputcolor rounded-b-md">
                      <Editor
                        placeholder="Write Something Here..."
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={setEditorState}
                        className="w-full outline-none h-96 resize-none overflow-hidden bg-inputcolor"
                        toolbar={{
                          options: ["inline", "textAlign", "link", "image"],
                        }}
                      />
                    </div>

                    <div className="px-16 py-4 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={closeReplyModal}
                        className="px-20 bg-secondary py-2 text-white font-s-medium rounded text-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

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

export default TrashMailsPersonal;
