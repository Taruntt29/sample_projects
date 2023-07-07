import React, { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
const candidatelist = [
  {
    id: 1,
    name: "Raman Nigam",
    post: "DevOps ENgineer/ Developer",
    city: "Gurgaon",
    state: "Haryana",
    status: "Awaiting Review",
    email: "ramannigam07@gmail.com",
    expiredaysleft: "11",
    resume: "/assets/images/resumedummy.png",
  },
  {
    id: 2,
    name: "Sheeba Ansari",
    post: "Software Developer",
    city: "Gurgaon",
    state: "Haryana",
    status: "Awaiting Review",
    email: "ramannigam07@gmail.com",
    expiredaysleft: "05",
    resume: "/assets/images/resumedummy.png",
  },
  {
    id: 3,
    name: "Mayank Rathi",
    post: "UI Designer",
    city: "Gurgaon",
    state: "Haryana",
    status: "Awaiting Review",
    email: "ramannigam07@gmail.com",
    expiredaysleft: "30",
    resume: "/assets/images/resumedummy.png",
  },
  {
    id: 4,
    name: "Shubham Agarwal",
    post: "Frontend Developer",
    city: "Gurgaon",
    state: "Haryana",
    status: "Awaiting Review",
    email: "ramannigam07@gmail.com",
    expiredaysleft: "12",
    resume: "/assets/images/resumedummy.png",
  },
  {
    id: 5,
    name: "Kratika Sen",
    post: "Product Manager",
    city: "Gurgaon",
    state: "Haryana",
    status: "Awaiting Review",
    email: "ramannigam07@gmail.com",
    expiredaysleft: "15",
    resume: "/assets/images/resumedummy.png",
  },
  {
    id: 6,
    name: "Raman Nigam",
    post: "Product Designer",
    city: "Gurgaon",
    state: "Haryana",
    status: "Awaiting Review",
    email: "ramannigam07@gmail.com",
    expiredaysleft: "09",
    resume: "/assets/images/resumedummy.png",
  },
  {
    id: 7,
    name: "Raman Nigam",
    post: "Product Designer",
    city: "Gurgaon",
    state: "Haryana",
    status: "Awaiting Review",
    email: "ramannigam07@gmail.com",
    expiredaysleft: "13",
    resume: "/assets/images/resumedummy.png",
  },
];
const AllApplicantsDetail = () => {
  const [status, setStatus] = useState();
  const [showDetail, setShowDetail] = useState({
    id: 1,
    name: "Raman Nigam",
    post: "DevOps ENgineer/ Developer",
    city: "Gurgaon",
    state: "Haryana",
    status: "Awaiting Review",
    email: "ramannigam07@gmail.com",
    expiredaysleft: "11",
    resume: "/assets/images/resumedummy.png",
  });
  console.log(showDetail);
  return (
    <div className="bg-[#F5F7F9]">
      <div className="container mx-auto pt-10 pb-10 ">
        <div className="flex justify-between pb-3 items-center">
          <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5">
            {" "}
            <Link
              to="/hospital/managed-jobs"
              className="flex items-center space-x-2"
            >
              {" "}
              <RiArrowLeftSLine className="text-primary text-3xl " />{" "}
              <p className="text-primary font-s-medium text-lg">
                {" "}
                All Applicants{" "}
              </p>{" "}
            </Link>
          </div>
          <div className=" flex justify-between">
            <button className="border-[2px] rounded-l-[9px]  hover:bg-[#ddd]  px-6 font-s-medium text-opacity-60 text-black text-xs md:text-base">
              Previous
            </button>

            <button className="p-2 border-[2px] border-l-[0px] rounded-r-[9px] hover:bg-[#ddd]  px-6 font-s-medium text-opacity-60 text-black  text-xs md:text-base">
              Next
            </button>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-10  w-full">
          <div className="hidden md:block col-span-3 bg-white rounded-t-md overflow-y-scroll h-[700px]">
            <div className=" py-6  bg-white col-span-3 w-full ">
              <div className="text-xl font-bold w-full px-3">
                101 Applicants
              </div>
            </div>
            <div className="h-[1px] w-full bg-grey"></div>
            {candidatelist.map((item, index) => {
              return (
                <>
                  <div
                    className=" px-3 py-3 flex flex-col justify-start space-x-[2px] bg-white hover:bg-[#DDECFB] cursor-pointer"
                    onClick={(e) => setShowDetail(item)}
                    key={index}
                  >
                    <p className="text-xl font-s-medium">{item.name}</p>
                    <p className="text-base font-s-medium ">{item.post}</p>
                    <p className="text-base ">
                      {item.city},{item.state}
                    </p>
                    <p className="text-base font-s-medium text-opacity-50 text-black ">
                      {item.status}
                    </p>
                  </div>
                  <div className="h-[1px] w-full bg-grey"></div>
                </>
              );
            })}
          </div>
          <div className="col-span-10 md:col-span-7 bg-white rounded-t-md">
            <div className=" grid grid-cols-7 p-6 ">
              <div className="col-span-7 md:col-span-5 ">
                <div className="border-[1px] border-primary inline-flex rounded-[14px]">
                  <p className="font-s-medium text-base p-4 flex justify-center space-x-2">
                    <FiClock size={25} />
                    <span>
                      {" "}
                      Application expiring in {showDetail.expiredaysleft} days
                    </span>
                  </p>
                </div>
                <div className=" flex flex-col justify-start space-x-1 mt-5">
                  <p className="text-4xl font-s-medium">{showDetail.name}</p>
                  <p className="text-lg font-s-medium">Product Designer</p>
                  <p>
                    <span className="text-primary">{showDetail.email}</span>,
                    <span className="">
                      {showDetail.city},{showDetail.state}
                    </span>
                  </p>
                  <p>Applied to {showDetail.post}</p>
                  <p>
                    {showDetail.city}, {showDetail.state}
                  </p>
                </div>
              </div>
              <div className="col-span-7 md:col-span-2 flex flex-col space-x-3 pb-6">
                <p className="text-lg font-s-normal">Interested?</p>
                <div className="">
                  <button className="border-[1px] border-r-[0px] rounded-l-[9px] p-2 hover:bg-[#ddd]">
                    Yes
                  </button>
                  <button className="border-[1px] p-2 hover:bg-[#ddd]">
                    No
                  </button>
                  <button className="p-2 border-[1px] border-l-[0px] rounded-r-[9px] hover:bg-[#ddd]">
                    Maybe
                  </button>
                </div>
                <div className="pt-3 flex flex-col justify-start space-x-3 items-start">
                  <p className="text-base font-s-medium text-black text-opacity-70">
                    Status:
                  </p>
                  <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="bg-[#F5F7F9] px-3 py-[10px] rounded-[7px] text-sm text-[#000] text-opacity-30"
                  >
                    <option value="">Select Status</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Dummy">Dummy</option>
                  </select>
                  <div className="flex flex-col pt-1">
                    <p className="text-base font-s-medium">11 Oct</p>
                    <p className="text-sm">
                      {showDetail.name} applied to {showDetail.post}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-grey h-[1px] col-span-7  "></div>
              <div className=" grid grid-cols-7 gap-4 col-span-7 pt-6">
                <div className="col-span-7 md:col-span-4 border border-grey ">
                  <img
                    src={showDetail.resume}
                    alt="/resume"
                    className="w-full h-full"
                  />
                </div>
                <div className="col-span-7 md:col-span-3  flex flex-col justify-start space-y-4 items-start">
                  <button className="text-sm bg-primary hover:bg-secondary text-white font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 w-40">
                    Preview
                  </button>
                  <button className="text-sm bg-primary hover:bg-secondary text-white font-s-medium  px-6 py-3 rounded-md shadow-sm shadow-slate-700 w-40">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApplicantsDetail;
