import React from "react";
import { Link } from "react-router-dom";
import { BsCheckCircleFill, BsFillBagFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { RiArrowLeftSLine, RiSuitcaseFill } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const JobDetails = () => {
  const jobData = [
    {
      id: 1,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "New",
      post: "Baby Care ",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/job-detail",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
    {
      id: 2,
      logourl: "/assets/images/logo2.png",
      days: "01",
      category: "Internship",
      post: "Nurse",
      address: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      link: "https://www.webmax.com",
      jobdetaillink: "/job-detail",
      minsal: "$2000",
      maxsal: "$2500",
      time: "Month",
    },
  ];

  return (
    <div className="bg-inputcolor py-16">
      <div className="mx-auto max-w-[1150px]">
        <Link to="/professional/apply-for-job">
          <div className="flex items-center mb-4 font-s-medium text-primary text-lg">
            <RiArrowLeftSLine className="text-3xl" /> Apply For Jobs
          </div>
        </Link>
        <div className="bg-[#fff] px-8 rounded-2xl py-6">
          <div className="flex pb-8 items-center text-[#000] space-x-4 font-s-medium text-xl">
            <BsFillBagFill className="text-primary " />
            <h6 className="text-2xl"> Job Detail </h6>
          </div>
          <hr className="mb-8" />

          <div className="container mx-auto pb-10  pt-5">
      <div className=" grid lg:grid-cols-7 grid-cols-1 gap-8">
        <div className="lg:col-span-5 px-5 md:px-0">
          <div
            className="rounded-md bg-no-repeat relative h-72 md:bg-cover bg-bottom w-full"
            style={{
              backgroundImage: `url(${"/assets/images/job-detail.png"})`,
            }}
          >
            <div className="bg-[#8C82EA] px-10 font-s-medium py-1 text-white inline-flex rounded-md absolute top-5 left-5">
              Fulltime
            </div>
            <div className="bg-white p-4 shadow-md shadow-slate-400 rounded-xl absolute -bottom-9 left-10">
              <img src="/assets/images/detail-image1.png" alt="/" />
            </div>
          </div>
          <div className="lg:float-right lg:py-4 pt-16 space-x-6">
            <button className="text-primary font-s-medium rounded-md bg-white hover:bg-primary hover:text-white border border-primary px-5 py-2">
              Website Apply
            </button>
            <button className="text-white font-s-medium rounded-md bg-primary hover:bg-secondary px-5 py-2">
              Apply Now
            </button>
          </div>
          <div className="lg:pt-20 pt-8 ">
            <div className="text-black text-opacity-80 text-[20px] font-s-medium">
              Senior Home Care Nurse
            </div>
            <div className="text-black text-opacity-70 font-s-medium text-[15px]">
              1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
            </div>
           <Link to="#"> <div className="font-s-medium text-[15px] pt-2">
              <span className="text-primary">https://thewebmax.com</span>
            </div>
            </Link>

            <div className="font-s-bold py-4 text-[18px]">Job Description</div>
            <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>

            <p className="text-black text-opacity-70 font-semibold text-[15px] text-justify pt-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi.
            </p>

            <div className="font-s-bold py-8 text-[18px]">Requirements</div>
            <ul className="text-black text-opacity-70 font-semibold text-[15px] flex flex-col justify-start items-start gap-2">
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill
                  className="text-primary font-s-bold "
                  size={15}
                />
                <span>
                  Must be able to communicate with others to convey information
                  effectively.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill className="text-primary font-s-bold " />
                <span>
                  Personally passionate and up to date with current trends and
                  technologies.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill className="text-primary font-s-bold " />
                <span>
                  Bachelor or Master degree level educational background.
                </span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill className="text-primary font-s-bold " />
                <span>4 years relevant PHP dev experience.</span>
              </li>
              <li className="flex justify-start items-start gap-2">
                <BsCheckCircleFill className="text-primary font-s-bold " />
                <span>
                  Troubleshooting, testing and maintaining the core product
                  software and databases.
                </span>
              </li>
            </ul>
          </div>
          <div className="font-s-bold py-8 text-[18px]">Responsibilities</div>
          <ul className="text-black text-opacity-70 font-semibold text-[15px] flex flex-col justify-start items-start gap-2">
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-primary font-s-bold "
                size={15}
              />
              <span>
                Establish and promote design guidelines, best practices and
                standards.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-primary font-s-bold "
                size={15}
              />
              <span>
                Accurately estimate design tickets during planning sessions.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-primary font-s-bold "
                size={15}
              />
              <span>
                Partnering with product and engineering to translate business
                into elegant and practical designs.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-primary font-s-bold "
                size={15}
              />
              <span>
                Create wireframes, process flows and site maps to communicate
                interaction and design.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-primary font-s-bold "
                size={15}
              />
              <span>
                Present and defend designs and key deliverables to peers and
                executive level stakeholders.
              </span>
            </li>
            <li className="flex justify-start items-start gap-2">
              <BsCheckCircleFill
                className="text-primary font-s-bold "
                size={15}
              />
              <span>
                Execute all visual design stages from concept to final hand-off
                to engineering.
              </span>
            </li>
          </ul>
          <div className="flex py-5 space-x-3">
            <div className="font-s-bold  text-[18px]">Share </div>

            <div className="flex space-x-5 ">
              <FaFacebookF
                className="bg-primary text-white p-1 rounded-full"
                size={24}
              />
              <FaInstagramSquare
                className="bg-primary text-white p-1 rounded-full"
                size={24}
              />
              <FaTwitter
                className="bg-primary text-white p-1 rounded-full"
                size={24}
              />
              <FaLinkedinIn
                className="bg-primary text-white p-1 rounded-full"
                size={24}
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:px-0 px-5">
          <div className="bg-lightcolor rounded-lg py-6 px-5 ">
            <div className="font-s-medium">Job Information</div>
            <div className="flex flex-col gap-5 pt-5">
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <FaCalendarAlt className="text-primary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  Expired on{" "}
                  <span className="text-black text-opacity-70">
                    20 October 2022
                  </span>
                </div>
              </div>
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <AiFillEye className="text-primary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  8160 Views{" "}
                </div>
              </div>
              <div className="bg-white flex py-3 px-3 items-start justify-items-start gap-2 rounded-md">
                <HiUserGroup className="text-primary" size={18} />
                <div className="col-span-3 text-sm font-s-medium ">
                  6 Applicant
                </div>
              </div>
            </div>
            <div className="pt-10 flex flex-col justify-start items-start gap-6">
              <div className="flex justify-start items-center gap-3 px-3 ">
                <MdLocationPin className="text-primary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-s-medium">
                    Location
                  </p>
                  <p className="font-s-bold text-base ">Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 ">
                <img
                  src="/assets/icons/coding.png"
                  alt="webdev"
                  className="w-[22px]"
                />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-s-medium">
                    Job Title
                  </p>
                  <p className="font-s-bold text-base">Web Developer</p>
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
                  <p className="font-s-bold text-base ">3-4 Years</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 ">
                <RiSuitcaseFill className="text-primary" size={20} />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-s-medium">
                    Qualification
                  </p>
                  <p className="font-s-bold text-base">Bachelor Degree</p>
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
                  <p className="font-s-bold text-base">All</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 px-3 ">
                <img
                  src="/assets/icons/salary.png"
                  alt="webdev"
                  className="w-[18px]"
                />
                <div className="">
                  <p className="text-black text-opacity-70 text-sm font-s-medium">
                    Offered Salary
                  </p>
                  <p className="font-s-bold text-base">40-50k /Month</p>
                </div>
              </div>

              <div>
                <h6 className="text-xl font-s-bold">Tags</h6>
                <div className="flex space-x-2 py-2">
                  <h5 className="px-3 py-1.5 bg-primary text-xs text-white font-s-bold rounded">
                    Heart
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs text-white font-s-bold rounded">
                    Lung
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs text-white font-s-bold rounded">
                    Nurse
                  </h5>
                </div>
                <div className="flex space-x-2 py-2">
                  <h5 className="px-5 py-1.5 bg-primary text-xs text-white font-s-bold rounded">
                    Homecare
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs text-white font-s-bold rounded">
                    Old Person
                  </h5>
                  <h5 className="px-3 py-1.5 bg-primary text-xs text-white font-s-bold rounded">
                    Nurse
                  </h5>
                </div>
                <div className="flex space-x-2 py-2">
                  <h5 className="px-5 py-1.5 bg-primary text-xs text-white font-s-bold rounded">
                    Heart
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6">
            <h6 className="font-s-medium">Similar Jobs</h6>

            <div className="">
              <div className="grid grid-cols-1    pt-2 gap-8  ">
                {jobData.map((item, index) => {
                  return (
                    <div
                      className="bg-white shadow-md shadow-[#2544EE30] rounded-xl relative "
                      key={index}
                    >
                      <div className="flex px-2">
                        <div
                          className={`{ text-white font-s-medium text-sm absolute  top-2 right-3 px-6 rounded-md py-1 ${
                            item.category === "Internship"
                              ? "bg-[#AB6B35]"
                              : item.category === "Fulltime"
                              ? "bg-[#8C82EA]"
                              : item.category === "Freelancer"
                              ? "bg-[#2D9BB3]"
                              : "bg-[#41B249]"
                          }`}
                        >
                          {item.category}
                        </div>
                        <img
                          alt="JobPost"
                          src={item.logourl}
                          width={80}
                          height={80}
                        />
                      </div>

                      <div className="flex flex-col pt-1 px-5 pb-3">
                        <p className="text-sm font-s-medium pb-3 text-primary">
                         <Link to="/professional/job-detail-page"> {item.post} </Link> /
                          <span className="text-[#41B249]">
                            {" "}
                            {item.days} days
                          </span>
                        </p>

                        <div className="font-s-medium text-sm">
                          {item.minsal} - {item.maxsal} / {item.time}
                        </div>
                        <div className="flex items-end justify-end">
                          <Link
                            to="/professional/job-detail-page"
                            className="font-s-bold text-primary "
                          >
                            Browse
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=""></div>
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

export default JobDetails;
