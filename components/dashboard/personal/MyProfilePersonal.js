import React, { useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import {
  MdMailOutline,
  MdUploadFile,
  MdPhone,
  MdEdit,
  MdLocationPin,
} from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { GiStabbedNote } from "react-icons/gi";
import { RiArrowLeftSLine, RiSuitcaseLine } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsLink45Deg } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const jobData = [
  {
    id: 1,
    logourl: "/assets/images/employee.png",
    text: "Featured",
    name: "Wanda Montgomery",
    post: "Charted Accounted",
    profile: "View Profile",
    location: "Mumbai, Maharastra",
    cost: "$20k/month",
  },
  {
    id: 2,
    logourl: "/assets/images/employee2.png",
    text: "Featured",
    name: "Wanda Montgomery",
    post: "Charted Accounted",
    profile: "View Profile",
    location: "Mumbai, Maharastra",
    cost: "$20k/month",
  },
  {
    id: 3,
    logourl: "/assets/images/employee2.png",
    text: "Featured",
    name: "Wanda Montgomery",
    post: "Charted Accounted",
    profile: "View Profile",
    location: "Mumbai, Maharastra",
    cost: "$20k/month",
  },
  {
    id: 4,
    logourl: "/assets/images/employee.png",
    text: "Featured",
    name: "Wanda Montgomery",
    post: "Charted Accounted",
    profile: "View Profile",
    location: "Mumbai, Maharastra",
    cost: "$20k/month",
  },
  {
    id: 5,
    logourl: "/assets/images/employee.png",
    text: "Featured",
    name: "Wanda Montgomery",
    post: "Charted Accounted",
    profile: "View Profile",
    location: "Mumbai, Maharastra",
    cost: "$20k/month",
  },
  {
    id: 6,
    logourl: "/assets/images/employee.png",
    text: "Featured",
    name: "Wanda Montgomery",
    post: "Charted Accounted",
    profile: "View Profile",
    location: "Mumbai, Maharastra",
    cost: "$20k/month",
  },
];

const MyProfilePersonal = () => {
  let [isOpenDelete, setIsOpenDelete] = React.useState(false);

  function closeModalDelete() {
    setIsOpenDelete(false);
  }

  function openModalDelete() {
    setIsOpenDelete(true);
  }

  const [profilePic, setProfilePic] = useState();

  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          <p className="text-primary font-s-medium text-lg"> My Profile </p>{" "}
        </div>
        <div className="flex flex-col space-y-10 px-4 md:px-0">
          <div className="bg-white rounded-md ">
            <div className="inline-flex flex-col   justify-end items-end gap-2 rounded-[6px] innershadow2">
              {/* <img src="/assets/images/uploadimage.png" className="w-16" /> */}
              {profilePic ? (
                <>
                  {" "}
                  <input
                    type="file"
                    name="uploadfile"
                    id="img"
                    className="hidden"
                    onChange={handleProfilePic}
                  />
                  <label for="img">
                    <img
                      src={profilePic}
                      onChange={handleProfilePic}
                      alt="/"
                      className="w-[1140px] h-[200px] rounded-[6px]  px-5  cursor-pointer object-cover absolute mb-20"
                    />
                    <div className=" p-4  rounded-xl absolute md:bottom-20  left-16 -bottom-2">
                      <img
                        src="/assets/images/myProfilepersonal.png"
                        alt="/"
                        width={120}
                      />
                    </div>
                  </label>
                </>
              ) : (
                <div className="p-4 flex justify-center items-end flex-col gap-2 relative">
                  <div className="w-[1100px] h-[200px] bg-secondary relative" />
                  <div className=" p-4  rounded-xl absolute md:-bottom-12  left-10 -bottom-2">
                    <img
                      src="/assets/images/myProfilepersonal.png"
                      alt="/"
                      width={120}
                    />
                  </div>
                  <input
                    type="file"
                    name="uploadfile"
                    id="img"
                    className="hidden"
                    onChange={handleProfilePic}
                  />
                  <label for="img">
                    <MdEdit
                      className="text-primary rounded bg-lightcolor p-1 float-right cursor-pointer"
                      size={32}
                    />
                  </label>
                </div>
              )}
            </div>

            {profilePic ? (
              <div className="bg-white md:flex items-center md:justify-end justify-center md:space-x-6  pt-72 px-10">
                <div>
                  <Link to="/personal/edit-profile">
                    <button className="text-sm bg-primary  text-white font-s-medium  px-10 py-2 rounded-full shadow-sm shadow-slate-700 ">
                      Edit Profile
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    onClick={openModalDelete}
                    className="text-sm border border-primary  text-primary font-s-medium  px-10 py-2 rounded-full shadow-slate-700 md:mt-0 mt-4"
                  >
                    Share Profile
                  </button>

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
                                  className="text-2xl py-10  pl-32 font-s-medium leading-6 text-center pb-4 text-gray-900"
                                >
                                  Share Profile
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
                                    className=" rounded-[8px] border border-white bg-transparent px-8 py-2 text-base flex space-x-2 items-center justify-center font-medium text-white"
                                    onClick={closeModalDelete}
                                  >
                                    <BsLink45Deg size={24} />{" "}
                                    <p className="font-medium"> Copy Link </p>
                                  </button>

                                  <div>
                                    <div className="flex gap-4 justify-center items-center pt-3">
                                      <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer ">
                                        <FaFacebookF
                                          color="#3FBDC7"
                                          size={16}
                                        />
                                      </div>
                                      <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
                                        <FaInstagram
                                          color="#3FBDC7"
                                          size={16}
                                        />
                                      </div>
                                      <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
                                        <FaTwitter color="#3FBDC7" size={16} />
                                      </div>
                                      <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
                                        <FaLinkedinIn
                                          color="#3FBDC7"
                                          size={16}
                                        />
                                      </div>
                                    </div>
                                  </div>
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
            ) : (
              <div className="bg-white md:flex items-center md:justify-end justify-center md:space-x-6  pt-10 px-10">
                <div>
                  <Link to="/personal/edit-profile">
                    <button className="text-sm bg-primary  text-white font-s-medium  px-10 py-2 rounded-full shadow-sm shadow-slate-700 ">
                      Edit Profile
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    onClick={openModalDelete}
                    className="text-sm border border-primary  text-primary font-s-medium  px-10 py-2 rounded-full shadow-slate-700 md:mt-0 mt-4"
                  >
                    Share Profile
                  </button>

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
                                  className="text-2xl py-10  pl-32 font-s-medium leading-6 text-center pb-4 text-gray-900"
                                >
                                  Share Profile
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
                                    className=" rounded-[8px] border border-white bg-transparent px-8 py-2 text-base flex space-x-2 items-center justify-center font-medium text-white"
                                    onClick={closeModalDelete}
                                  >
                                    <BsLink45Deg size={24} />{" "}
                                    <p className="font-medium"> Copy Link </p>
                                  </button>

                                  <div>
                                    <div className="flex gap-4 justify-center items-center pt-3">
                                      <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer ">
                                        <FaFacebookF
                                          color="#3FBDC7"
                                          size={16}
                                        />
                                      </div>
                                      <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
                                        <FaInstagram
                                          color="#3FBDC7"
                                          size={16}
                                        />
                                      </div>
                                      <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
                                        <FaTwitter color="#3FBDC7" size={16} />
                                      </div>
                                      <div className="bg-white hover:bg-grey hover:scale-105 duration-500 rounded-full p-2 cursor-pointer">
                                        <FaLinkedinIn
                                          color="#3FBDC7"
                                          size={16}
                                        />
                                      </div>
                                    </div>
                                  </div>
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
            )}

            <div>
              <div className="bg-white  px-10 flex flex-col space-y-5 rounded-b-md">
                <div className="felx flex-col space-y-1 md:mt-0 mt-3">
                  <div className="text-black text-opacity-80 text-[20px] font-s-bold ">
                    Davit Smith
                  </div>
                  {/* <div className="text-black pt-1 font-s-medium text-[13px] ">
                  Elder Care Nurse at Max Healthcare Hospital
                  </div> */}
                  <div className="text-black text-opacity-60 font-s-medium text-[13px] pt-1 ">
                    Delhi, India
                  </div>
                </div>

                <div className=" flex-col flex md:flex-row md:space-x-10 space-x-0 md:space-y-0 space-y-10 pt-3">
                  <div className="flex items-center space-x-2">
                    <MdMailOutline className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      Davitsmith001@gmail.com
                    </div>
                  </div>

                  {/* <div className="flex items-center space-x-2">
                    <RiSuitcaseLine className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      4 Years 5 Month{" "}
                    </div>
                  </div> */}

                  <div className="flex items-center space-x-2">
                    <MdPhone className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium "> 9811237890</div>
                  </div>

                  {/* <div className="flex items-center space-x-2">
                    <GiStabbedNote className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      Serving notice period{" "}
                    </div>
                  </div> */}
                </div>

                <div className=" flex-col flex md:flex-row md:space-x-12 space-x-0 md:space-y-0 space-y-12 py-5"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-3 ">
            <div className=" ">
              <div className="lg:px-10 px-5 py-3 flex justify-between">
                <div className="lg:text-2xl text-xl font-s-medium">Bio</div>
                <div className="flex space-x-5">
                  {" "}
                  <Link to="/personal/edit-profile">
                    <MdEdit
                      className="text-primary rounded bg-lightcolor p-1 "
                      size={32}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="lg:px-10 px-5 py-4">
              <div className="text-base font-s-medium text-black opacity-40  text-justify">
                John Doe is on a mission to provide companies all over the globe
                with the best remote Indian talent to meet their hiring needs.
                We are making an impact in the remote hiring industry by
                breaking the geographical boundaries and helping companies hire
                the best of the best without having to worry about sourcing,
                vetting, retention or motivation of talent.
                <span className="font-s-bold">see more</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-3 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">
                Professional
              </div>
              <div className="text-primary font-s-bold">View All</div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="grid md:grid-cols-3 grid-cols-1   mx-auto lg:pt-20 px-10 gap-10 gap-y-16   items-center justify-items-center">
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
                          <Link to="/personal/detail-candidate">
                            {" "}
                            <div className="text-center font-s-bold text-base text-primary">
                              {item.profile}
                            </div>{" "}
                          </Link>
                        </div>
                        <div className="bg-primary/40 rounded-b-xl py-3 lg:mt-4">
                          <div className="p-3 flex justify-between font-semibold">
                            <div className="flex">
                              <MdLocationPin />
                              <div className="text-sm">{item.location}</div>
                            </div>

                            <div className="text-sm">{item.cost} </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePersonal;
