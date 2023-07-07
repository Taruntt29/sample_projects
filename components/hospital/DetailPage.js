import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ImCross } from "react-icons/im";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const jobData = [
  {
    id: 1,
    logourl: "/assets/images/logo2.png",
    days: "01",
    post: "Attendants",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 2,
    logourl: "/assets/images/logo2.png",
    days: "01",
    post: "Nurse",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 3,
    logourl: "/assets/images/logo2.png",
    days: "01",
    post: "Elderly Care",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
];

const DetailPage = () => {
  let [isOpenReview, setIsOpenReview] = React.useState(false);

  const [profilePic, setProfilePic] = React.useState();

  const handleProfilePic = (e) => {
    console.log(e.target.files);
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="container mx-auto pb-10 pt-24">
        <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8">
          <div className="lg:col-span-5 px-5 md:px-0">
            <div
              className="rounded-md bg-no-repeat relative h-80 bg-cover w-full"
              style={{
                backgroundImage: `url(${"/assets/images/detail-image.png"})`,
              }}
            >
              <div className="bg-white p-4 shadow-md shadow-slate-400 rounded-xl absolute -bottom-9 left-10">
                <img src="/assets/images/detail-image1.png" alt="/" />
              </div>
            </div>
            {/* <div className="flex items-center md:justify-end justify-center gap-6 md:mt-5 mt-16">
                          
                            <button className="text-sm bg-primary  text-white font-s-medium  px-10 py-2 rounded-md shadow-sm shadow-slate-700 ">
                                Follow Us
                            </button>
                        </div> */}
            <div className="pt-12 flex flex-col space-y-3">
              <div className="text-black text-opacity-80 text-[20px] font-s-medium">
                Max Hospital
              </div>
              <div className="text-black text-opacity-70 font-s-medium text-[15px]">
                1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
              </div>
              <div className="font-s-medium text-[15px]">
                <span className="text-primary">https://thewebmax.com</span>
              </div>
              <div className="font-s-bold py-4 text-[18px]">About Hospital</div>
              <p className="text-black text-opacity-70 font-s-normal text-[15px] text-justify">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>

              <p className="text-black text-opacity-70 font-s-normal text-[15px] text-justify">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi.
              </p>
            </div>

            <div className="font-s-bold py-8 text-[18px]">
              Our latest Requirments
            </div>
            <div>
              <div className="grid grid-cols-1   mx-auto  gap-8 gap-y-10   items-center justify-items-center">
                {jobData.map((item, id) => {
                  return (
                    <>
                      <div className="md:px-0 px-5">
                        <div
                          className="bg-white box-shadow  rounded-xl relative  pb-7"
                          key={id}
                        >
                          <div className="grid md:grid-cols-12 gap-2">
                            <div className="md:col-span-2">
                              <div className="absolute flex md:p-5 bg-white box-shadow1 rounded-xl left-[34%]  lg:-bottom-3   md:left-2">
                                <img
                                  src={item.logourl}
                                  alt="/"
                                  width={100}
                                  height={100}
                                />
                              </div>
                            </div>
                            <div className="md:col-span-5 lg:pl-8 pl-3 md:pt-8 pt-16">
                              <div className="flex flex-col gap-3 lg:pt-0 pt-20">
                                <div className=" ">
                                  <Link to="/hospital-detail">
                                    <p className="text-base font-s-medium text-primary ">
                                      {item.post}
                                    </p>
                                  </Link>
                                </div>
                                <div className="">
                                  <p className="text-[#060606] text-sm  font-s-medium text-opacity-70">
                                    {item.address}
                                  </p>
                                </div>
                                <div className="">
                                  <p className="text-primary text-sm font-s-medium ">
                                    {item.link}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="md:col-span-2  flex md:justify-center md:items-start lg:pt-8 md:px-0 px-4"></div>
                            <div className="md:col-span-3 md:pr-3 gap-3 md:pt-0 md:px-0 px-4 flex flex-col md:justify-end md:items-end">
                              <div className=" ">
                                <div className="text-[#41B249] font-s-medium ">
                                  {item.days} days ago
                                </div>
                              </div>
                              <div className="font-s-medium  text-[13px] pt-2">
                                {item.minsal} - {item.maxsal} / {item.time}
                              </div>
                              <div className=" pt-3">
                                <Link
                                  to="/hospital-detail"
                                  className="font-s-bold  text-white bg-primary py-2 px-4 text-sm rounded-md"
                                >
                                  Browse
                                </Link>
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
          </div>
          <div className="lg:col-span-2 lg:px-0 px-5">
            <div className="bg-lightcolor rounded-lg py-6 px-5 ">
              <div className="font-s-medium">Hospital Info</div>

              <div className="pt-10 flex flex-col justify-start items-start space-y-5">
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/salary.png"
                    alt="webdev"
                    className="w-[22px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Ownership:
                    </p>
                    <p className="font-s-bold text-base "> NGO</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/team.png"
                    alt="experience"
                    className="w-[20px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Hospital size:
                    </p>
                    <p className="font-s-bold text-base ">50-100</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/building1.png"
                    alt="webdev"
                    className="w-[18px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Founded in:
                    </p>
                    <p className="font-s-bold text-base ">2010</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/mail.png"
                    alt="webdev"
                    className="w-[18px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Email:
                    </p>
                    <p className="font-s-bold text-base ">employer@gmail.com</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/call.png"
                    alt="webdev"
                    className="w-[18px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-meidum">
                      Phone:
                    </p>
                    <p className="font-s-bold text-base "> 9811237890</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/location.png"
                    alt="webdev"
                    className="w-[18px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Location:
                    </p>
                    <p className="font-s-bold  text-base "> USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white box-shadow rounded-lg px-5 py-6 lg:mt-10 mt-5">
              <div className="font-s-medium">Contact Us</div>

              <div className="flex flex-col gap-3 pt-4 ">
                <div className="flex justify-start flex-col gap-1 w-full ">
                  <div className=" text-[15px]"> Name</div>
                  <input
                    type="text"
                    placeholder=" Name"
                    className="w-full bg-white border-2 border-inputcolor placeholder:text-grey placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className=" text-[15px]">Email</div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white border-2 border-inputcolor placeholder:text-grey placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className=" text-[15px]">Phone Number</div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full bg-white border-2 border-inputcolor placeholder:text-grey placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex justify-start flex-col gap-1 w-full">
                  <div className=" text-[15px]">Message</div>
                  <textarea
                    type="text"
                    placeholder="Write something here"
                    className="w-full bg-white border-2 border-inputcolor placeholder:text-grey placeholder:text-opacity-30 placeholder:text-sm px-3 py-2 rounded-[7px]"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button className="text-sm bg-primary hover:bg-secondary  text-white font-s-medium  px-16 py-3 rounded-md shadow-sm shadow-slate-700 ">
                    Submit Now
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-8 pb-12">
              <div
                className="bg-cover h-[60vh] w-full"
                style={{
                  backgroundImage: `url("/assets/images/recruting.png")`,
                }}
              >
                <div className=" bg-primary/50  h-[60vh] relative flex md:justify-center rounded-lg ">
                  <div>
                    <h3 className=" md:px-8 px-5 pt-40 text-white font-semibold text-4xl font-s-medium">
                      Recruiting?
                    </h3>
                    <p className=" md:px-8 px-5 pt-5 text-white ">
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
        </div>
      </div>
    </>
  );
};

export default DetailPage;
