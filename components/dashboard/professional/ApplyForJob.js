import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const jobData = [
  {
    id: 1,
    logourl: "/assets/images/logo2.png",
    days: "01",
    category: "New",
    post: "Baby Care",
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
    category: "Internship",
    post: "Elderly Care",
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
    category: "Part-Time",
    post: "Attendants",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 4,
    logourl: "/assets/images/logo2.png",
    days: "01",
    category: "Freelancer",
    post: "Elderly Care",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 5,
    logourl: "/assets/images/logo2.png",
    days: "01",
    category: "Internship",
    post: "Nurse",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 6,
    logourl: "/assets/images/logo2.png",
    days: "01",
    category: "Fulltime Sixth",
    post: "Senior Nurse",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 7,
    logourl: "/assets/images/logo2.png",
    days: "01",
    category: "Internship",
    post: "Attendants",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 8,
    logourl: "/assets/images/logo2.png",
    days: "01",
    category: "Fulltime",
    post: "Elderly Care",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
  {
    id: 9,
    logourl: "/assets/images/logo2.png",
    days: "01",
    category: "New",
    post: "Senior Nurse",
    address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
    link: "https://www.webmax.com",
    jobdetaillink: "/",
    minsal: "$2000",
    maxsal: "$2500",
    time: "Month",
  },
];

const ApplyForJob = () => {
  return (
    <>
      <div className="bg-inputcolor py-16">
        <div className="mx-auto max-w-[1150px]">
          <Link to="/professional">
            <div className="flex items-center mb-4 font-s-medium text-primary text-lg">
              <RiArrowLeftSLine className="text-3xl" /> Apply For Jobs
            </div>
          </Link>

          <div className="bg-[#fff] px-8 rounded-2xl py-6">
            <div className="flex pb-8 items-center text-[#000] space-x-4 font-s-medium text-xl">
              <BsFillBagFill className="text-primary " />
              <h6 className="text-2xl"> All Jobs</h6>
            </div>
            <hr className="mb-8" />

            <div className="flex flex-col space-y-10 px-4 md:px-0">
              <div className="grid grid-cols-1 mx-auto lg:pt-5 gap-8 gap-y-10 md:px-6  items-center justify-items-center">
                {jobData.map((item, id) => {
                  return (
                    <>
                      {id % 6 === 0 && id > 1 && (
                        <div className="">
                          {" "}
                          <div className="pt-10">
                            <div className="bg-primary  grid md:grid-cols-5 gap-3 items-center justify-center px-10 py-8 rounded-md">
                              <img
                                className="col-span-1"
                                src="/assets/images/icon-extra.png"
                                alt="image"
                              />
                              <p className="font-s-normal text-white col-span-3">
                                {" "}
                                Create your{" "}
                                <span className="font-s-medium">
                                  Job Profile
                                </span>{" "}
                                for free on Trusted Healthcare to explore top{" "}
                                <span className="font-s-medium"> Jobs </span>{" "}
                                applied by your peers!
                              </p>

                              <div className=" col-span-1 rounded-md bg-white hover:bg-secondary">
                                {" "}
                                <Link to="/professional-signup"></Link>{" "}
                                <p className=" text-primary font-s-normal text-sm text-center py-2 px-3">
                                  {" "}
                                  Register Now{" "}
                                </p>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="">
                        <div
                          className="bg-white box-shadow  rounded-xl relative  pb-7"
                          key={id}
                        >
                          <div className="grid md:grid-cols-12 gap-2 md:px-0 px-5">
                            <div className="md:col-span-2 flex justify-between items-center">
                              <div className="md:absolute flex md:p-5 bg-white box-shadow1 rounded-xl left-[34%]  lg:-bottom-3   md:left-2">
                                <img
                                  src={item.logourl}
                                  alt="/"
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <div className="md:hidden block">
                                <div
                                  className={`{ text-white font-s-medium text-sm px-3  text-center rounded-md py-[0.32rem] mb-7  ${
                                    item.category === "Internship"
                                      ? "bg-[#AB6B35]"
                                      : item.category === "Fulltime"
                                      ? "bg-[#8C82EA]"
                                      : item.category === "Part-Time"
                                      ? " bg-[#D2628C]"
                                      : item.category === "Freelancer"
                                      ? " bg-[#2D9BB3]"
                                      : "bg-[#41B249]"
                                  }`}
                                >
                                  {item.category}
                                </div>
                              </div>
                            </div>
                            <div className="md:col-span-5 lg:pl-8 pl-3 md:pt-8 pt-10">
                              <div className="flex flex-col gap-3 lg:pt-0 ">
                                <div className=" ">
                                  <Link to="/professional/job-detail-page">
                                    {" "}
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
                            <div className="md:col-span-2  flex md:justify-center md:items-start lg:pt-8 md:px-0 px-4">
                              <div className="text-[#41B249] font-s-medium ">
                                {item.days} days ago
                              </div>
                            </div>
                            <div className="md:col-span-3 md:pr-3 gap-3 md:pt-0  md:px-0 px-4 flex flex-col md:justify-end md:items-end">
                              <div className="md:block hidden">
                                <div
                                  className={`{ text-white font-s-medium text-sm px-3  text-center rounded-md py-[0.32rem] mb-3  ${
                                    item.category === "Internship"
                                      ? "bg-[#AB6B35]"
                                      : item.category === "Fulltime"
                                      ? "bg-[#8C82EA]"
                                      : item.category === "Part-Time"
                                      ? " bg-[#D2628C]"
                                      : item.category === "Freelancer"
                                      ? " bg-[#2D9BB3]"
                                      : "bg-[#41B249]"
                                  }`}
                                >
                                  {item.category}
                                </div>
                              </div>
                              <div className="font-s-medium  text-[13px]">
                                {item.minsal} - {item.maxsal} / {item.time}
                              </div>
                          <Link to="/professional/job-detail-page">    <div className="text-primary text-base font-s-medium cursor-pointer"> Browse </div></Link>
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
    </>
  );
};

export default ApplyForJob;
