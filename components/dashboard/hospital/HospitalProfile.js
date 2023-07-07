import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MdMailOutline,
  MdOutlineGroups,
  MdLocationOn,
  MdPhone,
  MdEdit,
} from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { TbWorld, TbBuildingSkyscraper } from "react-icons/tb";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
const HospitalProfile = () => {
  const [uploadimage, setUploadImage] = useState();
  const [uploadimagetwo, setUploadImageTwo] = useState();
  const [uploadimagethree, setUploadImageThree] = useState();
  const fileRef = useRef();
  const fileRef2 = useRef();
  const fileRef3 = useRef();

  const handleFileUpload = (event) => {
    setUploadImage(event.target.files[0]);
  };

  const handleUpload = (event) => {
    setUploadImageTwo(event.target.files[0]);
  };
  const handleFile = (event) => {
    setUploadImageThree(event.target.files[0]);
  };

  const data = [
    {
      id: "1",
      img1: "/assets/images/firstimagecompany.png",
      img2: "/assets/images/firstimagecompany1.png",
      img3: "/assets/images/firstimagecompany2.png",
      img4: "/assets/images/firstimagecompany3.png",
    },
  ];

  const openingdata = [
    {
      id: "1",
      src: "/assets/images/pic1.png",
      title: "Baby care",
      location: "Mumbai, Maharastra",
    },
    {
      id: "2",
      src: "/assets/images/pic1.png",
      title: "Elderly Care",
      location: "Mumbai, Maharastra",
    },
    {
      id: "3",
      src: "/assets/images/pic1.png",
      title: "Attendants",
      location: "Mumbai, Maharastra",
    },
  ];

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
      <div className="container mx-auto py-10  ">
        <div className="flex  items-center pb-6 lg:px-0 px-5 ">
          <Link
            to="/hospital"
            className="flex items-center justify-start space-x-2"
          >
            {" "}
            <p className="text-primary font-s-medium text-lg"> My Profile </p>{" "}
          </Link>
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
                        src="/assets/images/pic1.png"
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
                      src="/assets/images/pic1.png"
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
              <div className="bg-white md:flex items-center md:justify-end justify-center md:space-x-6  pt-64 px-10">
                <div>
                  <Link to="/professional/profile-edit">
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
                  <Link to="/professional/profile-edit">
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
              <div className="pt-3  flex flex-col space-x-5">
                <div className="flex flex-col space-x-1 md:mt-0 mt-3 px-10">
                  <div className="text-black text-opacity-80 text-[20px] font-s-bold">
                    Galaxy Software Development
                  </div>
                  <div className="text-black text-opacity-60 font-s-medium text-[13px] ">
                    IT Services | Private Sector
                  </div>
                </div>

                <div className=" flex-col flex md:flex-row space-x-16 pt-3 px-5">
                  <div className="flex items-center space-x-2">
                    <MdMailOutline className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      galaxysoftware018@gmail.com{" "}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <TbWorld className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      www.GalaxySoftware.com{" "}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <TbBuildingSkyscraper className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium ">2015 </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MdOutlineGroups className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium ">40-50 </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdPhone className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium "> 9811237890 </div>
                  </div>
                </div>

                <div className="  flex md:flex-row justify-between space-x-12 py-5 px-5">
                  <div className="flex items-center space-x-2">
                    <MdLocationOn className=" w-6 h-6 text-primary" />
                    <div className=" text-sm font-s-medium ">
                      {" "}
                      1363-1385 Sunset Blvd, Noida Uttar Pradesh, India{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-5 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">About</div>
              <div className="flex space-x-5">
                <Link to="/hospital/edit-profile">
                  {" "}
                  <MdEdit
                    className="bg-lightcolor text-primary rounded p-1 "
                    size={32}
                  />
                </Link>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="px-10 py-4">
              <div className="text-base font-s-medium text-black opacity-50 ">
                Galaxy Software Development is on a mission to provide companies
                all over the globe with the best remote Indian talent to meet
                their hiring needs. We are making an impact in the remote hiring
                industry by breaking the geographical boundaries and helping
                companies hire the best of the best without having to worry
                about sourcing, vetting, retention or motivation of talent.{" "}
                <span className="font-s-bold cursor-pointer hover:text-primary">
                  see more
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-5 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">
                {" "}
                Identification
              </div>
              <div className="flex space-x-5">
                {" "}
                <Link to="/hospital/edit-profile">
                  {" "}
                  <MdEdit
                    className="bg-lightcolor text-primary rounded p-1 "
                    size={32}
                  />
                </Link>
              </div>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="py-5 px-10 grid  lg:grid-cols-3 gap-10">
              <div className="bg-gray-300">
                <div className="flex items-center justify-center mx-auto">
                  <input
                    className="hidden"
                    ref={fileRef}
                    onChange={handleFileUpload}
                    type="file"
                  />

                  <div className="flex flex-col  items-center justify-center py-3">
                    {" "}
                    <button
                      className="  "
                      onClick={(e) => fileRef.current.click()}
                    >
                      {uploadimage ? (
                        <img
                          alt="upload"
                          src={URL.createObjectURL(uploadimage)}
                        />
                      ) : (
                        <img
                          alt="upload"
                          src="/assets/icons/portfolio.png"
                          className="w-16"
                        />
                      )}
                    </button>
                    <h6 className="px-3 text-sm py-4">Upload your Document</h6>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300">
                <div className="flex items-center justify-center mx-auto">
                  <input
                    className="hidden"
                    ref={fileRef2}
                    onChange={handleUpload}
                    type="file"
                  />

                  <div className="flex flex-col  items-center justify-center py-3">
                    {" "}
                    <button
                      className="  "
                      onClick={(e) => fileRef2.current.click()}
                    >
                      {uploadimagetwo ? (
                        <img
                          alt="upload"
                          src={URL.createObjectURL(uploadimagetwo)}
                        />
                      ) : (
                        <img
                          alt="upload"
                          src="/assets/icons/portfolio.png"
                          className="w-16"
                        />
                      )}
                    </button>
                    <h6 className="px-3 text-sm py-4">Upload your Document</h6>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300">
                <div className="flex items-center justify-center mx-auto">
                  <input
                    className="hidden"
                    ref={fileRef3}
                    onChange={handleFile}
                    type="file"
                  />

                  <div className="flex flex-col  items-center justify-center py-3">
                    {" "}
                    <button
                      className="  "
                      onClick={(e) => fileRef3.current.click()}
                    >
                      {uploadimagethree ? (
                        <img
                          alt="upload"
                          src={URL.createObjectURL(uploadimagethree)}
                        />
                      ) : (
                        <img
                          alt="upload"
                          src="/assets/icons/portfolio.png"
                          className="w-16"
                        />
                      )}
                    </button>
                    <h6 className="px-3 text-sm py-4">Upload your Document</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-5 ">
            <div className="lg:px-10 px-5 py-3 flex justify-between">
              <div className="lg:text-2xl text-xl font-s-medium">
                {" "}
                Recent Job Openings
              </div>
              <Link to="/hospital/managed-jobs">
                <div className="flex space-x-5 text-primary font-s-medium underline">
                  See All Jobs
                </div>
              </Link>
            </div>
            <hr className="w-full h-[0.10rem] bg-inputcolor" />
            <div className="py-5 px-10 grid md:grid-cols-3 grid-cols-1 md:space-x-2 space-x-10">
              {openingdata.map((item) => (
                <div className="" key={item.id}>
                  <div className="flex space-x-5  items-center">
                    <div className="bg-white p-2 shadow-md shadow-slate-400 rounded-xl ">
                      <img src={item.src} alt="/" className="w-16 h-16 " />
                    </div>
                    <div className="">
                      <Link to="/hospital/job-detail">
                        <p className="text-lg text-primary font-s-medium">
                          {item.title}
                        </p>
                      </Link>
                      <p className="text-base font-s-normal text-black opacity-60">
                        {item.location}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalProfile;
