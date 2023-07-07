import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsFillHandbagFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { TbMessages } from "react-icons/tb";

const textdata = [
  {
    id: 1,
    text: "Elder Care",
  },
  {
    id: 2,
    text: "Home Care",
  },
  {
    id: 3,
    text: "Baby Care",
  },
  {
    id: 4,
    text: "Elder Care",
  },
  {
    id: 5,
    text: "Home Care",
  },
  {
    id: 6,
    text: "Home Care",
  },
  {
    id: 7,
    text: "Baby Care",
  },
  {
    id: 8,
    text: "Home Care",
  },
  {
    id: 9,
    text: "Elder Care",
  },
];
const workdata = [
  {
    id: 1,
    text: "Present",
    name: "Bluetech, Inc",
    post: "Home Care Nurse",
    para: "One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.",
  },
  {
    id: 2,
    text: "2016-2022",
    name: "Bluetech, Inc",
    post: "Senior Nurse",
    para: "One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.",
  },
  {
    id: 3,
    text: "2012-2016",
    name: "Bluetech, Inc",
    post: "Senior Nurse",
    para: "One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.",
  },
];

const workdata1 = [
  {
    id: 1,
    text: "2008 to 2011",
    name: "Design Communication Visual",
    post: "Design at Massachusetts Institute of Technology & Marketing",
    para: "One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.",
  },
  {
    id: 2,
    text: "2006 to 2008",
    name: "MCA - Master of Computer Application",
    post: "Middle East Technical University",
    para: "One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.",
  },
  {
    id: 3,
    text: "2004 to 2006",
    name: "BCA - Bachelor of Computer Applications",
    post: "International University",
    para: "One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.",
  },
];
const EmployeeDetail = () => {
  return (
    <div>
      <div className="container mx-auto md:pb-20 md:pt-28 pt-10 pb-10">
        <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8">
          <div className="lg:col-span-5 px-5 md:px-0">
            <div
              className="rounded-md bg-no-repeat bg-primary relative h-72 bg-cover w-full"
              style={{
                backgroundImage: `url(${"/assets/images/background-candidate.png"})`,
              }}
            >
              <div className=" relative mt-6 ">
                <div className="pb-10 pt-4">
                  <div className="flex  justify-end items-start pr-4">
                    <div className=" text-white text-lg "> $20/ Month </div>
                  </div>
                  <div className=" flex items-center justify-center rounded-xl ">
                    <img
                      src=" /assets/images/employee.png "
                      alt="/"
                      width={100}
                      height={100}
                      className=" border-2 border-white shadow-md shadow-[#00000061]  rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:mt-3">
                    <div className="text-center font-s-medium text-white text-base">
                      {" "}
                      Wanda Montgomery{" "}
                    </div>
                    <div className="text-center font-s-normal text-sm text-white">
                      Product Designer at Google INC
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:pt-10 pt-2">
                    <MdLocationPin className="text-white w-6 h-6" />
                    <div className="text-sm font-s-medium text-white">
                      Mumbai, Maharastra
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute md:bottom-5 bottom-2 w-full px-3 ">
                <div className="flex items-end justify-between  gap-2  ">
                  <div>
                    <button className="md:text-sm text-xs border border-white  text-white font-s-medium  px-10 py-2  rounded-md shadow-sm shadow-slate-700 ">
                      Hire Me Now
                    </button>
                  </div>
                  <div>
                    <button className="md:text-sm text-xs bg-white  text-primary font-s-medium  px-10 py-2  rounded-md shadow-sm shadow-slate-700 ">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 flex flex-col gap-5">
              <div className="flex justify-between ">
                <div className="font-s-bold py-4 text-[18px]">
                  About Company
                </div>
                <div className="bg-primary p-3 text-white rounded-full h-12">
                  {" "}
                  <TbMessages size="24" />{" "}
                </div>
              </div>
              <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>

              <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi.
              </p>

              <div className="">
                <div className="font-s-bold py-8 text-[18px]">Skills</div>
                <div>
                  <div className="grid md:grid-cols-5 grid-cols-3  mx-auto  gap-4  items-center justify-items-start">
                    {textdata.map((item, id) => {
                      return (
                        <>
                          <div key={id}>
                            <div className="bg-primary  text-white rounded-md w-[120px]">
                              <p className="px-4 py-2 font-s-medium text-[13px]">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="font-s-bold pb-5 pt-10 text-xl">
              Work experience
            </div>
            <div className=" border border-primary rounded-md px-5 py-6">
              <div className="grid grid-cols-1  mx-auto  gap-3 items-center justify-items-start ">
                {workdata.map((item, id) => {
                  return (
                    <>
                      <div className="flex flex-col gap-3 pt-6" key={id}>
                        <div className="font-s-medium text-base lg:pl-10  pl-8 ">
                          {item.text}
                        </div>

                        <div className="flex gap-2 items-center">
                          <div className="rounded-full w-4 h-4 bg-primary"></div>
                          <hr className="w-4 h-[0.12rem] bg-primary -ml-2" />
                          <div className="text-sm font-s-medium text-primary">
                            {item.name}
                          </div>
                        </div>

                        <div className="font-s-medium text-sm lg:pl-10 pl-8 ">
                          {item.post}
                        </div>
                        <div className="font-s-normal text-sm lg:pl-10 pl-8 ">
                          {item.para}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="font-s-bold py-8 text-xl">Education & Training</div>
            <div className=" border border-primary rounded-md px-5 py-6">
              <div className="grid grid-cols-1  mx-auto  gap-3 items-center justify-items-start ">
                {workdata1.map((item, id) => {
                  return (
                    <>
                      <div className="flex flex-col gap-3 pt-6" key={id}>
                        <div className="font-s-medium text-base lg:pl-10 pl-8  ">
                          {item.text}
                        </div>

                        <div className="flex gap-2 items-center">
                          <div className="rounded-full w-4 h-4 bg-primary"></div>
                          <hr className="w-4 h-[0.12rem] bg-primary -ml-2" />
                          <div className="text-sm font-s-medium text-primary">
                            {item.name}
                          </div>
                        </div>

                        <div className="font-s-medium text-sm lg:pl-10 pl-8 ">
                          {item.post}
                        </div>
                        <div className="font-s-normal text-sm lg:pl-10 pl-8 ">
                          {item.para}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div></div>
          </div>
          <div className="lg:col-span-2 lg:px-0 px-5">
            <div className="bg-lightcolor rounded-lg py-6 px-2 ">
              <div className="font-s-medium">Profile Info</div>

              <div className="pt-10 flex flex-col justify-start items-start gap-6">
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/salary.png"
                    alt="webdev"
                    className="w-[22px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Current Salary
                    </p>
                    <p className=" font-s-bold text-base ">$20 / Month</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/salary.png"
                    alt="webdev"
                    className="w-[22px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Expected Salary
                    </p>
                    <p className="font-s-bold text-base ">$60 / Month</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/experience.png"
                    alt="experience"
                    className="w-[20px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Experience
                    </p>
                    <p className=" font-s-bold text-base ">3-4 Year</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/bigender.png"
                    alt="webdev"
                    className="w-[18px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Gender
                    </p>
                    <p className="font-s-bold text-base "> Male</p>
                  </div>
                </div>

                <div className="flex justify-start items-center gap-3 px-3 ">
                  <img
                    src="/assets/icons/call.png"
                    alt="webdev"
                    className="w-[18px]"
                  />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Phone
                    </p>
                    <p className="font-s-bold text-base "> +91 987654879</p>
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
                      Email
                    </p>
                    <p className="font-s-bold text-base ">
                      wandamontgomery@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3 px-3 ">
                  <BsFillHandbagFill className="text-primary" />
                  <div className="">
                    <p className="text-black text-opacity-70 text-sm font-s-medium">
                      Qualification
                    </p>
                    <p className="font-s-bold text-base ">
                      BFA (Bachelor of Fine Arts)
                    </p>
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
                      Address
                    </p>
                    <p className="font-s-bold text-base"> Mumbai, Maharastra</p>
                  </div>
                </div>

                <div className="flex justify-between items-center space-x-3 px-3 ">
                  <div className="text-[#000] font-s-medium  text-[15px]">
                    Are you Willing to Relocate
                  </div>
                  <label
                    for="default-toggle"
                    class="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle"
                      class="sr-only peer"
                    />
                    <div class="w-12 h-6 md:pt-2 bg-gray-200  rounded-full peer dark:bg-[#D2D2D2] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white box-shadow rounded-lg px-5 py-6 lg:mt-10 mt-5">
              <div className="text-lg font-s-bold ">Contact Us</div>

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
                  <button className="text-sm bg-primary hover:bg-secondary  text-white   px-16 py-3 rounded-md shadow-sm shadow-slate-700 ">
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
                      <button className="bg-white text-primary hover:bg-primary hover:text-white  px-6 py-1 rounded-md">
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
    </div>
  );
};

export default EmployeeDetail;
